function setSettingsScreen() {

    let email = user.email;
    let password = user.password;
    let phone = user.phone;
    let address = user.address == '' ? ['Sin Dirección', 0] : user.address.split('#')

    let settingsScreen = `  <b class="fs-1">Configuraciones</b>
                            <div class="row bg-white my-2 p-2 radius-10px fs-5 shadow">
                                <div class="col-12 row m-0 mb-3 fs-5">
                                    <p class="col-10 col-sm-9 col-lg-8 my-auto p-0 text-end">Información de Seguridad</p>
                                    <i class="col-2 col-sm-3 col-lg-4 fa-regular fa-pen-to-square col-icons w-auto icon-color pad-icons-2 text-start my-auto pointer" id="edit-security-btn" onclick="editSettings()"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="e-mail">Correo Electrónico</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" value="${email}" id="e-mail" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="password">Contraseña</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="password" class="form-control text-center" value="${password}" id="password" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="phone">Celular</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="number" class="form-control text-center" value="${phone}" id="phone" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="address">Dirección</label>
                                <div class="col-8 row p-0 m-0 my-1">
                                    <input type="text" class="col-6 form-control text-center m-auto" style="width: 65%;" value="${address[0]}" id="address"
                                        disabled>
                                        
                                    <label class="col-1 p-0 m-auto" for="nHouse">#</label>
                                    <input type="number" class="col-5 form-control text-center m-auto w-25" value="${address[1]}" id="nHouse" maxlength="4"
                                        disabled>
                                </div>
                                <div class="d-none row m-0 mt-3 fs-5 justify-content-evenly" id="btn-info">
                                    <button class="btn w-auto" id="cancel-btn" onclick="cancel()">
                                        Cancelar
                                    </button>
                                    <button type="button" class="btn w-auto" id="confirm-btn" onclick="confirmSett()">
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

    setScreen(settingsScreen);

    btns = document.querySelector('#btn-info');

    sett = {
        email: document.querySelector('#e-mail'),
        password: document.querySelector('#password'),
        phone: document.querySelector('#phone'),
        address: document.querySelector('#address'),
        nHouse: document.querySelector('#nHouse')
    };

}

async function confirmSett() {
    let values = [
        sett.email.value.trim(),
        sett.password.value.trim(),
        sett.phone.value.trim(),
        `${sett.address.value.trim()}#${sett.nHouse.value.trim()}`,
    ];

    let columns = [
        'email',
        'pass',
        'celular',
        'direccion'
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
    if (result == 1) {
        user.email = values[0];
        user.password = values[1];
        user.phone = values[2];
        user.address = values[3];
        localStorage.setItem('user', JSON.stringify(user));
        $('#successfulUpdate').modal('show');
        for (let e in sett) {
            sett[e].disabled = !sett[e].disabled;
            // sett[e].value = user[e];
        }
        setTimeout(() => {
            console.log('5 sec');
            $('#successfulUpdate').modal('hide');
        }, 5000);
        btns.classList.add('d-none');
    }
}

function editSettings() {
    if (!sett.email.disabled) {
        cancel();
    } else {
        btns.classList.remove('d-none');
        for (let e in sett) {
            sett[e].disabled = !sett[e].disabled;
        }
    }
}
