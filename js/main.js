// Scrivi un programma che stampi in console i numeri da 1 a 100.

for( let i = 1; i <= 100; i++ ) {
    if( i % 3 === 0 && i % 5 === 0)
    console.log("FizzBuzz")
    if( i % 3 === 0)
    console.log("Fizz");
    if( i % 5 === 0)
    console.log("Buzz")
    else
    console.log(i)

    const list = document.querySelector("ul.list");
    const element = document.createElement("li");
    element.innerText = i
    list.append(element);
}








