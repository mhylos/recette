function setProfileScreen() {

    let firstName = user.firstName;
    let lastName = user.lastName;
    let gender = user.gender;
    let birthday = user.birthday;

    let profileScreen = `   <b class="fs-1">Perfil</b>
                            <div class="row bg-white my-2 p-2 radius-10px justify-content-center shadow">
                                <div class="col-12 row m-0 mb-3 justify-content-center fs-5">
                                    <p class="col-10 col-sm-6 col-xl-5 my-auto p-0 text-end">Información Personal</p>
                                    <i class="col-2 fa-regular fa-pen-to-square col-icons w-auto icon-color pad-icons-2 text-start my-auto pointer" id="edit-security-btn" onclick="editInfoPersonal()"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="first-name">Nombre</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center shadow-none" value = "${firstName}"id="first-name" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="last-name">Apellido</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center shadow-none" value = "${lastName}" id="last-name" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="gender">Género</label>
                                <div class="col-8 p-0 my-1">
                                    <select class="form-select text-black text-center shadow-none" id="gender" onchange="" disabled>
                                        <option value="Hombre" ${gender == 'Hombre' ? `selected` : `` }>Hombre</option>
                                        <option value="Mujer" ${gender == 'Mujer' ? `selected` : `` }>Mujer</option>
                                    </select>
                                </div>

                                <label class="col-4 p-0 m-auto" for="birthday">Cumpleaños</label>
                                <div class="col-8 row m-0 p-0 my-1">
                                    <div class="p-0 m-0 w-100">
                                        <input type="date" class="form-control text-center shadow-none" value = "${birthday}" id="birthday" disabled>
                                    </div>
                                </div>
                                <div class="d-none row m-0 mt-3 fs-5 justify-content-evenly" id="btn-info">
                                    <button class="btn w-auto" id="cancel-btn" onclick="cancel()">
                                        Cancelar
                                    </button>
                                    <button type="button" class="btn w-auto" id="confirm-btn" onclick="confirmInfo()">
                                        Continuar
                                    </button>
                                </div>
                                <div class="modal fade" id="successfulUpdate" tabindex="-1" aria-labelledby="successfulUpdate" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <h1 class="modal-title fs-1 m-auto" id="titleSR">¡Actualización Exitosa!</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

    setScreen(profileScreen)

    btns = document.querySelector('#btn-info');

    info = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        gender: document.querySelector('#gender'),
        birthday: document.querySelector('#birthday')
    };

}

function cancel() {
    btns.classList.add('d-none');
    for (let e in info) {
        info[e].disabled = !info[e].disabled;
        info[e].value = user[e];
    }
}

async function confirmInfo() {
    let values = [
        info.firstName.value.trim(),
        info.lastName.value.trim(),
        info.gender.value.trim(),
        info.birthday.value.trim(),
    ];

    let columns = [
        'nombre',
        'apellido',
        'genero',
        'f_nacimiento'
    ]

    let result = await new Promise((resolve, reject) => {
        try {
            resolve($.ajax({
                data: {
                    user_id: user.id,
                    columns: columns,
                    values: values
                },
                url: 'controller/CtrlUsers.php?op=update',
                type: 'POST',
                success: () => {
                    // console.log(result);
                    // return result;
                }
            }))
        } catch {
            reject(0);
        }
    });
    // console.log(result);
    if (result == 1) {
        user.firstName = values[0];
        user.lastName = values[1];
        user.gender = values[2];
        user.birthday = values[3];
        localStorage.setItem('user', JSON.stringify(user));
        $('#successfulUpdate').modal('show');
        for (let e in info) {
            info[e].disabled = !info[e].disabled;
            // info[e].value = user[e];
        }
        setTimeout(() => {
            console.log('5 sec');
            $('#successfulUpdate').modal('hide');
        }, 5000);
        btns.classList.add('d-none');
    }
}

function editInfoPersonal() {
    if (!info.firstName.disabled) {
        cancel();
    } else {
        btns.classList.remove('d-none');
        for (let e in info) {
            info[e].disabled = !info[e].disabled;
        }
    }
}
