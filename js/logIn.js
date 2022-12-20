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
    if (!value || value.length == 0) {
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
        let result = $.parseJSON(await ajaxPromise(
            { 'email': emailL.value },
            'controller/CtrlUsers.php?op=search',
            'POST',
            function () { }
        ));
        if (validate(result, '#emailError', '#emailEmpty')) {
            jsonUser = {
                id: result[0].user_id,
                firstName: result[0].nombre,
                lastName: result[0].apellido,
                gender: result[0].genero,
                birthday: result[0].f_nacimiento,
                email: result[0].email,
                password: result[0].pass,
                phone: result[0].celular,
                address: result[0].direccion,
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
            function () { }
        );
        if (result != 'null' && result.length != 0) {
            showError('#emailErrorR', '#emailEmptyR');
        } else {
            hideError('#emailErrorR');
            let jsonUser = {
                id: null,
                firstName: firstName.value,
                lastName: lastName.value,
                gender: 'No Definido',
                birthday: '2000-01-01',
                email: email.value,
                password: password.value,
                phone: 0,
                address: 'Sin Dirección#0',
            };
            await ajaxPromise(
                {
                    firstName: jsonUser.firstName,
                    lastName: jsonUser.lastName,
                    gender: jsonUser.gender,
                    birthday: jsonUser.birthday,
                    email: jsonUser.email,
                    password: jsonUser.password,
                    phone: jsonUser.phone,
                    address: jsonUser.address
                },
                'controller/CtrlUsers.php?op=register',
                'POST',
                function () { }
            );

            let result = $.parseJSON(await ajaxPromise(
                { 'email': email.value },
                'controller/CtrlUsers.php?op=search',
                'POST',
                function () { }
            ));

            jsonUser.id = result[0].user_id;

            // guardar datos en localStorage
            localStorage.setItem('logged', true);
            localStorage.setItem('user', JSON.stringify(jsonUser));

            // ir al perfil
            $('#successfulRegistration').modal('show');
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

const firstName = document.querySelector('#firstNameRegister');
const lastName = document.querySelector('#lastNameRegister');
const email = document.querySelector('#emailRegister');
const password = document.querySelector('#passwordRegister');
const repeatPassword = document.querySelector('#repeatPasswordRegister');

firstName.oninput = () => formValidated.firstName = validate(firstName.value, '#nameEmpty', '#none');

lastName.oninput = () => formValidated.lastName = validate(lastName.value, '#nameEmpty', '#none');

email.oninput = () => formValidated.email = validate(email.value, '#emailEmptyR', '#emailErrorR');

password.oninput = () => formValidated.password = validatePassword(password.value, '#passwordEmptyR');

repeatPassword.oninput = () => formValidated.repeatPassword = comparePassword(repeatPassword.value, '#repeatPasswordEmptyR');
