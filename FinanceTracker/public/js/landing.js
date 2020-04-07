document.onload = setUpLanding();
document.onresize = setUpLanding();

function setUpLanding() {
    document.body.style.overflowX = "hidden";
    let header = document.querySelector('h1');
    console.log(header.clientHeight);

    if(screen.width > 600) {
        header.style.marginTop = (window.innerHeight / 2) - header.clientHeight * 2 + "px";
    } else {
        header.style.marginTop = "6rem";
    }
    initializeBills();
}

function initializeBills() {
    let login = document.getElementById('login');
    let signup = document.getElementById('signup');

    login.style.transform = "rotate(-20deg)";
    signup.style.transform = "scale(1.3) rotate(20deg)";
    signup.style.zIndex = "1";

    login.addEventListener('mouseenter', mouseEnterLogin);

    function mouseEnterLogin() {
        document.body.style.cursor = "pointer";
        login.style.transition = "0.2s";
        signup.style.transition = "0.2s";
        signup.style.transform = "scale(1.1) rotate(10deg)";
        login.style.transform = "scale(1.3) rotate(-10deg)";
        login.style.zIndex = "2";
        login.classList.add('box-hover');
    }

    login.addEventListener('mouseleave', mouseLeaveLogin);

    function mouseLeaveLogin() {
        document.body.style.cursor = "inherit";
        login.style.transform = "scale(1) rotate(-20deg)";
        login.style.zIndex = "0";
        signup.style.transform = "scale(1.3) rotate(20deg)";
        login.classList.remove('box-hover');
    }

    signup.addEventListener('mouseenter', mouseEnterSignUp);

    function mouseEnterSignUp() {
        document.body.style.cursor = "pointer";
        login.style.transition = "0.2s";
        signup.style.transition = "0.2s";
        signup.classList.add('box-hover');
    }

    signup.addEventListener('mouseleave', mouseLeaveSignUp);

    function mouseLeaveSignUp() {
        document.body.style.cursor = "inherit";
        signup.classList.remove('box-hover');
    }

    login.addEventListener('click', createLogin);
    signup.addEventListener('click', createSignUp);

    function createLogin() {
        createPromise().then((form) => {
            let email = document.createElement('input');
            email.name = 'password';
            email.type = 'email';
            email.placeholder = 'Email Address';

            let password = document.createElement('input');
            password.name = 'password';
            password.type = 'password';
            password.placeholder = 'Password';

            let token = document.createElement('input');
            token.type = 'hidden';
            token.name = '_token';
            token.value = document.head.querySelector('meta[name=csrf-token]').content;

            let submit = document.createElement('input');
            submit.value = 'Login!';
            submit.type = 'submit';

            form.action = "/";
            form.append(email, password, token, submit);
            document.body.append(form);
            form.style.animationName = "slide";
            form.style.animationDuration = "0.3s";
            form.firstElementChild.focus();
        });
    }

    function createSignUp() {
        createPromise().then((form) => {
            let name = document.createElement('input');
            name.name = 'name';
            name.type = 'text';
            name.placeholder = 'Name';

            let email = document.createElement('input');
            email.name = 'email';
            email.type = 'email';
            email.placeholder = 'Email Address';

            let password = document.createElement('input');
            password.name = 'password';
            password.type = 'password';
            password.placeholder = 'Password';

            let passwordConfirm = document.createElement('input');
            passwordConfirm.name = 'passwordConfirm';
            passwordConfirm.type = 'password';
            passwordConfirm.placeholder = 'Confirm Password';

            let token = document.createElement('input');
            token.type = 'hidden';
            token.name = '_token';
            token.value = document.head.querySelector('meta[name=csrf-token]').content;

            let submit = document.createElement('input');
            submit.value = 'Sign Up!';
            submit.type = 'submit';

            form.action = "/create";
            form.append(name, email, password, passwordConfirm, token, submit);
            document.body.append(form);
            form.style.animationName = "slide";
            form.style.animationDuration = "0.3s";
            form.firstElementChild.focus();
        });
    }

    function createPromise() {
        return new Promise((resolve, reject) => {
            login.removeEventListener('click', createLogin);
            login.removeEventListener('mouseenter', mouseEnterLogin);
            login.removeEventListener('mouseleave', mouseLeaveLogin);
            signup.removeEventListener('click', createSignUp);
            signup.removeEventListener('mouseenter', mouseEnterSignUp);
            signup.removeEventListener('mouseleave', mouseLeaveSignUp);

            document.body.style.cursor = "default";

            login.style.transform = "scale(1.3) rotate(10deg) translateX(3rem)";
            signup.style.transform = "scale(1.3) rotate(20deg)";
            login.addEventListener('transitionend', function() {
                login.removeEventListener('transitionend', arguments.callee);
                login.style.transition = "0.2s";
                signup.style.transition = "0.2s";

                login.style.transform = "translateX(4rem) rotateX(50deg) scale(1.3) rotate(10deg)";
                signup.style.transform = "rotateX(50deg) scale(1.3) rotate(15deg)";

                login.addEventListener('transitionend', function() {
                    login.style.transition = "0.6s";
                    signup.style.transition = "0.6s";
                    login.style.transform = "translateX(24rem) translateY(-15rem) rotateX(90deg) scale(0.001) rotate(20deg)";
                    signup.style.transform = "translateX(20rem) translateY(-15rem) rotateX(90deg) scale(0.001) rotate(40deg)";


                    login.addEventListener('transitionend', function() {
                        login.parentElement.remove();
                        login.remove();
                        signup.remove();

                        let form = document.createElement('form');
                        form.id = "form";
                        form.method = "POST";
                        resolve(form);
                    })
                })
            })
        });
    }
}
