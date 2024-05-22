const baseUrl = "http://localhost:8080/api/v1/";
let user;

const endpoint = {
    login:      {uri: 'auth/authenticate',      method: 'POST', param: ''},
    get2fa:     {uri: 'user/factor',            method: 'GET'},
    enable2fa:  {uri: 'user/enable2fa?code=',   method: 'PUT'},
    disable2fa: {uri: 'user/disable2fa?code=',  method: 'PUT'},
    verify2fa:  {uri: 'user/verify?code=',      method: 'GET'}
}

//make request
function ajax(endpoint, callback, body) {
    const url = endpoint.param ? endpoint.uri + endpoint.param : endpoint.uri
    $.ajax(getSetting(url, endpoint.method, body)).done(function (response) {responseHandler(response, callback)})
}

function getSetting(endpoint, method, body) {
    const token = user ? user.token.access_token : '';
    return {
        "url": baseUrl + endpoint,
        "method": method,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        "data": body ? JSON.stringify(body) : undefined,
    };
}

function responseHandler(response, callback){
    response.rec = response.rec || undefined;
    if(response.code === "0000"){
        callback(response.rec)
    }else{
        alert(response.message)
    }
}