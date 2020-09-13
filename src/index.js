"use strict";
const $ = require('jquery');
//TODO: receiving an error saying require is not defined.
//TODO: added the build:watch script, ran it, does not rebuild upon changes in HTML.

const sayHello = () => {
    console.log('Hello world');
}

$('#hello').click(function (){
    alert("Hi");
})

let hello = document.getElementById('hello-world');


