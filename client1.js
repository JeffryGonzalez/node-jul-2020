const http = require('http');

const options = {
    host: 'localhost',
    port: 3000,
    path: '/status'
};

const callback = function(response) {
    let body = '';

    response.on('data', function (chunk) {
        console.log(`Got a chunk of data ${chunk}`);
        body += chunk;
    })

    response.on('end', function() {
        const obj = JSON.parse(body);
        console.log('Here is the full deal: ', body);
        console.log('It was created at', obj.createdAt);
        console.log('By', obj.message.createdBy);
        if(obj.bonus) {
            console.log('YOU WIN! THERE IS A BONUS', obj.bonus);
        }
    })
}

// const response = http.request(options);

http.request(options, callback).end();
console.log('Making your request');
// 1000 lines of crappy slow JS code.