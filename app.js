 const abc =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 let randomNumber = Math.floor(Math.random() * abc.length);
 let randomLetter = abc[randomNumber];

document.getElementsByTagName("h1")[0].innerHTML = randomLetter;