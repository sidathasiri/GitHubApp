var buffer = require('buffer');

class AuthService{
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
            console.log(result);
            return callback({
                unknownError: null,
                badCredintials: null
            })
          })
        .catch((err)=>{
            return callback(err);
        })
    }
}

module.exports = new AuthService();