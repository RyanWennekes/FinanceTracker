document.onload = initializeBills();

function initializeBills() {
    document.body.style.overflowX = "hidden";
    let login = document.getElementById('login');
    let signup = document.getElementById('signup');

    login.style.transform = "rotate(-20deg)";
    login.style.transition = "0.2s";
    signup.style.transform = "scale(1.3) rotate(20deg)";
    signup.style.zIndex = "1";
    signup.style.transition = "0.2s";

    login.addEventListener('mouseenter', mouseEnterLogin);

    function mouseEnterLogin() {
        document.body.style.cursor = "pointer";
        signup.style.transform = "scale(1.1) rotate(10deg)";
        login.style.transform = "scale(1.3) rotate(-10deg)";
        login.style.zIndex = "2";
        login.classList.add('box-hover');
    }

    signup.addEventListener('mouseenter', mouseEnterSignUp);

    function mouseEnterSignUp() {
        document.body.style.cursor = "pointer";
        signup.classList.add('box-hover');
    }

    login.addEventListener('mouseleave', mouseLeaveLogin);

    function mouseLeaveLogin() {
        document.body.style.cursor = "inherit";
        login.style.transform = "scale(1) rotate(-20deg)";
        login.style.zIndex = "0";
        signup.style.transform = "scale(1.3) rotate(20deg)";
        login.classList.remove('box-hover');
    }

    signup.addEventListener('mouseleave', mouseLeaveSignUp);

    function mouseLeaveSignUp() {
        document.body.style.cursor = "inherit";
        signup.classList.remove('box-hover');
    }


    login.addEventListener('click', createLogin);
    signup.addEventListener('click', createSignUp);

    function createLogin() {
        discardBills();

        document.createElement('form').appendChild('input');

    }

    function createSignUp() {
        discardBills();
    }

    function discardBills() {
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
            login.style.transition = "0.9s";
            signup.style.transition = "0.9s";

            login.style.transitionDelay = "0.2s";
            signup.style.transitionDelay = "0.2s";

            login.style.transform = "translateX(30rem) translateY(-70rem) scale(0.0001) rotate(30deg)";
            signup.style.transform = "translateX(30rem) translateY(-70rem) scale(0.0001) rotate(50deg)";

            login.addEventListener('transitionend', function() {
                login.remove();
                signup.remove();

                let form = document.createElement('form');
            })
        })
    }
}
