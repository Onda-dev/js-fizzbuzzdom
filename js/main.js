// Scrivi un programma che stampi in console i numeri da 1 a 100.

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");
    if( i % 3 === 0 && i % 5 === 0) {
        element.innerText = "FizzBuzz";
        element.classList.add("green")
        console.log("FizzBuzz");
    }
    else if( i % 3 === 0) {
        element.innerText = "Fizz";
        element.classList.add("red")
        console.log("Fizz");
    }
    else if( i % 5 === 0) {
        element.innerText = "Buzz";
        element.classList.add("yellow")
        console.log("Buzz");
    }
    else {
        element.innerText = i;
        console.log(i);
    }

    const list = document.querySelector("ul.list");
    list.append(element);
}








