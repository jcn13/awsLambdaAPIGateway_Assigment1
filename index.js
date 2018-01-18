'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    let num1 = event.num1;
    let num2 = event.num2;
    let sum = num1 + num2;
    callback(null, sum);  // Echo back the first key value
    //callback('Something went wrong');
};
