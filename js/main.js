// Scrivi un programma che stampi in console i numeri da 1 a 100.
const list = document.querySelector("ul.list");

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li"); 
    element.innerHTML = i;  
    console.log(element)
}

