// Scrivi un programma che stampi in console i numeri da 1 a 100.
const element = document.createElement("li");

for( let i = 1; i <= 100; i++ ) {
    if( i % 3 === 0 && i % 5 === 0)
    element.innerText = "FizzBuzz"
    console.log("FizzBuzz")
    if( i % 3 === 0)
    element.innerText = "Fizz"
    console.log("Fizz");
    if( i % 5 === 0)
    element.innerText = "Buzz"
    console.log("Buzz")
    else
    element.innerText = i
    console.log(i)

    const list = document.querySelector("ul.list");

    // element.innerText = "fizz"
    list.append(element);
}








