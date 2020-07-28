const axios = require('axios');

const request = axios.get('http://localhost:3000/status');
const otherRequest = axios.get('http://localhost:3000/tacos');
// do some other requests, etc.

console.log('Ok, ready to see if pete wore the red shirt.');
// request.then((res) => {
//     console.log(res.data);
// })

Promise.all([request, otherRequest])
    .then((results) => {
        console.log('First one:', results[0].data.message.createdBy);
        console.log('Second one:', results[1].data)
    })


function doDishes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I done doing the dishes!');
        }, 5000)
    })
}
const promiseMeYouWillDotheDishes = doDishes();

// doDishes()
// .then((message) => console.log(message))
// .catch((message) => console.log(message));

async function doIt() {
    const message = await doDishes(); 
    console.log(message);
    try {
    const r2 = await axios.get('http://localhost:3001/tacos');
    console.log(r2.data);
    } catch (err) {
        console.log('Got this error', err);
    }
}

doIt();

