window.addEventListener('load',function(){
    modalAuth()
})

function modalAuth(){
    let btnAuth = document.querySelector('.header__btn'),
        main = document.querySelector('.main'),
        sighIn = document.querySelector('.sign-in'),
        sighUp = document.querySelector('.sign-up'),
        btnClose = document.querySelector('.auth__close'),
        btnRegister = document.querySelector('#btn-register'),
        btnLogin = document.querySelector('#btn-login'),
        content = document.querySelector('.content ')

        

    btnAuth.addEventListener('click', function(){
        
        main.style.display = 'flex'
        sighIn.style.display = 'flex'
        btnClose.addEventListener('click', function(){
            main.style.display = 'none'
            sighIn.style.display = 'none'
            sighUp.style.display = 'none'

        })

        btnRegister.addEventListener('click', function(){
            sighIn.style.display = 'none'
            sighUp.style.display = 'flex'
        })
        btnLogin.addEventListener('click', function(){
            sighIn.style.display = 'flex'
            sighUp.style.display = 'none'
        })
    })
}