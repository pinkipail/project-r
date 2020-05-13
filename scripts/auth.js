let auth = document.querySelector('.auth')
let authBtn = auth.querySelector('#auth-btn')
let email = auth.querySelector('input[type=email]')
let password = auth.querySelector('input[type=password]')

function onLoading(){
    let load = document.querySelector('.spinner')
    load.style.display = 'block'
}
function offLoading(){
    let load = document.querySelector('.spinner')
    load.style.display = 'none'
}

function setError(element, message){
    
    if (!element.parentNode.lastChild.className) {
        element.parentNode.classList.add('inputError')
        let textError = document.createElement('div');
        element.parentNode.appendChild(textError);
        textError.className = ('textError')
        textError.appendChild(document.createTextNode('заполните поле корректно'));
    }


}

function unsetError(element){
    
    let textError = element.parentNode.querySelector('.textError')
    if (textError){
        element.parentNode.classList.remove('inputError')
        textError.remove()
    }
}



function authValidation(email, password){
    if(!validation(email) || !validation(password)){
        !validation(email)? setError(email) : unsetError(email)
        !validation(password)? setError(password) : unsetError(password)
    }else {
        unsetError(email)
        unsetError(password)
        onLoading()
        //loginHandler(email.value,password.value)
        loginHandler('test','1231d24')

    }
}

function loginHandler(login, password){

    const proxiCors = 'https://cors-anywhere.herokuapp.com/'
    const requestURL = proxiCors + 'https://orijinx-test.ru/api/login'
    const xhr = new XMLHttpRequest();

    body = `?log=${login}&pas=${password}`

    xhr.open('GET', requestURL + body);
    xhr.responseType = 'json'
    
    xhr.send(); 

    xhr.onload = () => {
        offLoading()
        if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            (xhr.response != null)? console.log(xhr.response) : uncorrectLogin()
        }
    }

    xhr.onerror = () => {
        offLoading()
        alert( xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found

    }
}

function uncorrectLogin(){
    let uncorrectLogin = document.querySelector('.uncorrectLogin')
    uncorrectLogin.style.display = 'block'
}


authBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    authValidation(email, password)

})


    /* const proxiCors = 'https://cors-anywhere.herokuapp.com/'
    const requestURL = proxiCors + 'https://orijinx-test.ru/api/getUsers'
    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestURL);
    
    xhr.send(); 

    xhr.onload = () => {
        if (xhr.status != 200) {
                alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // вывести результат
                alert( xhr.responseText + xhr.status + ': ' + xhr.statusText ); // responseText -- текст ответа.
        }
    }

    xhr.onerror = () => {

        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found

    } */