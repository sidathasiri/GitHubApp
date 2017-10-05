var buffer = require('buffer');
var AsyncStorage = require('react-native').AsyncStorage;
var _ = require('lodash');

const authKey = "auth";
const userKey = "user";

class AuthService{

    getAuthInfo(callback){
        AsyncStorage.multiGet([authKey, userKey], (err, result)=>{
            if(err)
                return callback(err);
            
            if(!result)
                return callback();
            
            if(!result[0][1])
                return callback();
            console.log("result:"+result);
            var authInfo = {
                header: {
                    Authorization: 'Basic '+result[0][1]
                },
                user: JSON.parse(result[1][1])
            }

            return callback(null, authInfo);
        })
    }

    saveLoginData(credintials){
        var encorder  = new buffer.Buffer(credintials.username+":"+credintials.password);
        var encordedData = encorder.toString('base64');

        AsyncStorage.multiSet([
            [authKey, encordedData],
            [userKey, JSON.stringify(result)]
        ], (err) => {
            if(err)
                return "error";
            else
                return "success"
        });
    }

    clearLoginData(){
        AsyncStorage.multiRemove([authKey, userKey], (err)=>{
            if(err){
                console.log(err);
                return err;
            }
            console.log("success");
            return "success";

        })
    }

    login(credintials, callback){
        var encorder  = new buffer.Buffer(credintials.username+":"+credintials.password);
        var encordedData = encorder.toString('base64');
        fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'Basic '+ encordedData
            }
        })
        .then((res) => {
            if(res.status >=200 && res.status <= 300)
                return res;
            throw {
                badCredintials: res.status == 401,
                unknownError: res.status != 401 && res.status != 200
            }
        })
        .then((res) => {return res.json()})
        .then(result => {
            console.log("result"+result);
            AsyncStorage.multiSet([
                [authKey, encordedData],
                [userKey, JSON.stringify(result)]
            ], (err) => {
                if(err)
                    throw err;
                console.log("async data saved");
                return callback({
                    unknownError: null,
                    badCredintials: null
                })
            })
          })
        .catch((err)=>{
            console.log("error"+err);
            return callback(err);
        })
    }
}

module.exports = new AuthService();