function showError(idError1, idError2) {
    document.querySelector(idError1).classList.remove('d-none');
    const element = document.querySelector(idError2);
    if (element != null && !element.classList.contains('d-none')) {
        element.classList.add('d-none');
    }
}

function hideError(idError1) {
    const element = document.querySelector(idError1);
    if (!element.classList.contains('d-none')) {
        element.classList.add('d-none');
    }
}

function validate(value, idError1, idError2) {
    if (value.length == 0) {
        showError(idError1, idError2);
        return false;
    } else {
        hideError(idError1);
        return true
    }
}

function validatePassword(value, idError1) {
    const digit = '0123456789'
    const abc = 'abcdefghijklmnñopqrstuvwxyz'

    const valid = {
        length: value.length >= 8,
        digit: false,
        upper: false,
        lower: false,
    }

    const checkLength = document.querySelector('#checkLength');
    const checkDigit = document.querySelector('#checkDigit');
    const checkUpper = document.querySelector('#checkUpper');
    const checkLower = document.querySelector('#checkLower');

    for (let i = 0; i < value.length; i++) {
        if (!valid.digit) {
            valid.digit = digit.includes(value[i]);
        }
        if (!valid.upper) {
            valid.upper = abc.toUpperCase().includes(value[i]);
        }
        if (!valid.lower) {
            valid.lower = abc.toLowerCase().includes(value[i]);
        }
    }

    checkLength.classList.replace('bi-dot', valid.length ? 'bi-check-lg' : 'bi-x');
    checkLength.classList.replace(valid.length ? 'bi-x' : 'bi-check-lg', valid.length ? 'bi-check-lg' : 'bi-x');
    checkLength.style.color = valid.length ? 'green' : 'red';

    checkDigit.classList.replace('bi-dot', valid.digit ? 'bi-check-lg' : 'bi-x');
    checkDigit.classList.replace(valid.digit ? 'bi-x' : 'bi-check-lg', valid.digit ? 'bi-check-lg' : 'bi-x');
    checkDigit.style.color = valid.digit ? 'green' : 'red';

    checkUpper.classList.replace('bi-dot', valid.upper ? 'bi-check-lg' : 'bi-x');
    checkUpper.classList.replace(valid.upper ? 'bi-x' : 'bi-check-lg', valid.upper ? 'bi-check-lg' : 'bi-x');
    checkUpper.style.color = valid.upper ? 'green' : 'red';

    checkLower.classList.replace('bi-dot', valid.lower ? 'bi-check-lg' : 'bi-x');
    checkLower.classList.replace(valid.lower ? 'bi-x' : 'bi-check-lg', valid.lower ? 'bi-check-lg' : 'bi-x');
    checkLower.style.color = valid.lower ? 'green' : 'red';

    if (value.length == 0) {
        showError(idError1, '#none');
        return false;
    } else {
        hideError(idError1);
        return !Object.values(valid).includes(false);
    }


}

function comparePassword(value, idError1) {
    const equal = value == password.value;
    const checkRepeat = document.querySelector('#checkRepeat');
    checkRepeat.classList.replace('bi-dot', equal ? 'bi-check-lg' : 'bi-x');
    checkRepeat.classList.replace(equal ? 'bi-x' : 'bi-check-lg', equal ? 'bi-check-lg' : 'bi-x');
    checkRepeat.style.color = equal ? 'green' : 'red';

    if (value.length == 0) {
        showError(idError1, '#none');
        return false;
    } else {
        hideError(idError1);
    }
    return equal;
}

function ajaxPromise(data, url, type, success) {
    return new Promise((resolve, reject) => {
        try {
            resolve($.ajax({
                data: data,
                url: url,
                type: type,
                success: success
            }));
        } catch {
            reject(0);
        }
    });
}

async function logIn() {
    let jsonUser = {};
    // console.log(emailL.value)
    if (formLogin.email) {
        let result = await ajaxPromise(
            { 'email': emailL.value },
            'controller/CtrlUsers.php?op=search',
            'POST',
            function (result) {
                return result
            }
        );
        if (validate(result, '#emailError', '#emailEmpty')) {
            let list = result.split(', ');
            list.pop();
            // console.log(result);
            jsonUser = {
                id: list[0],
                firstName: list[1],
                lastName: list[2],
                gender: list[3],
                birthday: list[4],
                email: list[5],
                password: list[6],
                phone: list[7],
                address: list[8],
            };
        }
    }
    if (formLogin.password) {
        if (jsonUser.length != 0) {
            if (passwordL.value != jsonUser.password) {
                showError('#passwordError', '#passwordEmpty');
            } else {
                hideError('#passwordError')

                // guardar datos en localStorage
                localStorage.setItem('logged', true);
                localStorage.setItem('user', JSON.stringify(jsonUser));

                // ir al perfil
                location.href = 'perfil.php'
            }
        }
    }
}

function timeOut(idP, seconds, dir) {
    let redirecting = document.querySelector(idP);
    for (let i = 0; i < seconds; i++) {
        setTimeout(() => {
            let init = (seconds - i).toString();
            let end = (seconds - i - 1).toString();
            redirecting.innerHTML = redirecting.innerHTML.replace(init, end);
            if (i + 1 == seconds) {
                location.href = dir;
            }
        }, (i + 1) * 1000);
    }
}

async function register() {
    if (!JSON.stringify(formValidated).includes(false)) {
        hideError('#fieldEmpty')
        let result = await ajaxPromise(
            { 'email': email.value },
            'controller/CtrlUsers.php?op=search',
            'POST',
            function (result) {
                return result
            }
        );

        if (result.length != 0) {
            showError('#emailErrorR', '#emailEmptyR');
        } else {
            let jsonUser = {
                id: null,
                firstName: firstName.value,
                lastName: lastName.value,
                gender: 'No Definido',
                birthday: '2000-01-01',
                email: email.value,
                password: password.value,
                phone: 0,
                address: 'Sin Dirección',
            };
            await ajaxPromise(
                {
                    'firstName': jsonUser.firstName,
                    'lastName': jsonUser.lastName,
                    'email': jsonUser.email,
                    'password': jsonUser.password,
                },
                'controller/CtrlUsers.php?op=register',
                'POST',
                function () { }
            );

            let result = await ajaxPromise(
                { 'email': email.value },
                'controller/CtrlUsers.php?op=search',
                'POST',
                function (result) {
                    return result
                }
            );
            let list = result.split(', ');
            list.pop();
            jsonUser = {
                id: list[0],
                firstName: list[1],
                lastName: list[2],
                gender: list[3],
                birthday: list[4],
                email: list[5],
                password: list[6],
                phone: list[7],
                address: list[8],
            };

            localStorage.setItem('logged', true);
            localStorage.setItem('user', JSON.stringify(jsonUser));
            modal.toggle()
            timeOut('#redirecting', 5, 'perfil.php');
        };
    } else {
        showError('#fieldEmpty', '#none')
    }

}

function setContinue(tab) {
    const continueBtn = document.querySelector('#continue-register-btn');
    continueBtn.onclick = tab == 'login' ? logIn : register;
}

const formLogin = {
    email: false,
    password: false
}

const formValidated = {
    // username: false,
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    repeatPassword: false
};


const emailL = document.querySelector('#emailLogin');
const passwordL = document.querySelector('#passwordLogin');

emailL.oninput = () => formLogin.email = validate(emailL.value, '#emailEmpty', '#emailError');

passwordL.oninput = () => formLogin.password = validate(passwordL.value, '#passwordEmpty', '#passwordError');

// const username = document.querySelector('#usernameRegister');
const firstName = document.querySelector('#firstNameRegister');
const lastName = document.querySelector('#lastNameRegister');
const email = document.querySelector('#emailRegister');
const password = document.querySelector('#passwordRegister');
const repeatPassword = document.querySelector('#repeatPasswordRegister');

// username.oninput = () => formValidated.username = validate(username.value, '#userEmpty', '#userError');

firstName.oninput = () => formValidated.firstName = validate(firstName.value, '#nameEmpty', '#none');

lastName.oninput = () => formValidated.lastName = validate(lastName.value, '#nameEmpty', '#none');

email.oninput = () => formValidated.email = validate(email.value, '#emailEmptyR', '#emailErrorR');

password.oninput = () => formValidated.password = validatePassword(password.value, '#passwordEmptyR');

repeatPassword.oninput = () => formValidated.repeatPassword = comparePassword(repeatPassword.value, '#repeatPasswordEmptyR');

const successfulRegistration = document.querySelector('#successfulRegistration');
const modal = new bootstrap.Modal(successfulRegistration);
// successfulRegistration.addEventListener('shown.bs.modal', () => {})