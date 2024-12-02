console.log("Hey there, my name is Asit Kumar");

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", function () {
    console.log("Button clicked");

    const xhr = new XMLHttpRequest(); // Use 'new' keyword to create an instance of XMLHttpRequest
    xhr.open("GET", "text.txt", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error("Error fetching the file: " + xhr.status);
        }
    };
    xhr.send(); // Call send() as a function
});