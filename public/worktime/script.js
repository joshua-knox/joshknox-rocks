const formElement = window.document.querySelector("form")
console.log(formElement)
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    const password = formElement.elements.password.value;

    // control flow
    if (password === "tucker") {
        alert('Access granted!')
    }else {
        alert("access denied!!!!!!!!!!!!!!!!!!!!!1")
    }
})