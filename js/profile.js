function setScreen(screen) {
    rightDiv.innerHTML = screen;
}

function setProfileScreen() {

    let firstName = user.firstName;
    let lastName = user.lastName;
    let gender = user.gender == '' ? 'No Definido' : user.gender;
    let birthday = user.birthday == '' ? '0000-00-00' : user.birthday;

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
                                    <input type="text" class="form-control text-center shadow-none" value = "${gender}" id="gender" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="birthday">Cumpleaños</label>
                                <div class="col-8 row m-0 p-0 my-1">
                                    <div class="p-0 m-0 w-100">
                                        <input type="date" class="form-control text-center shadow-none" value = "${birthday}" id="birthday" disabled>
                                    </div>
                                </div>
                                <div class="d-none row m-0 mt-3 fs-5 justify-content-evenly" id="btn-info">
                                    <button class="btn w-auto" id="cancel" onclick="cancel()">
                                        Cancelar
                                    </button>
                                    <button type="button" class="btn w-auto" id="confirm-info">
                                        Continuar
                                    </button>
                                </div>
                            </div>`;

    setScreen(profileScreen)

}

function setBookmarksScreen() {

    let bookmarksScreen = `<b class="fs-1">Guardados</b>
                            <div class="row bg-white my-2 px-2 pt-2  radius-10px justify-content-center shadow" style="padding-bottom: 14px;">
                                <div class="col-12 row m-0 mb-3 text-start fs-5 gap-1 justify-content-center justify-content-sm-start">
                                    <label class="col-12 col-sm-6 my-auto p-0 text-center text-sm-end px-2 px-sm-0 fs-5" for="bookmarks-order">Ordenado por:</label>
                                    <select class="col-5 form-select pe-auto text-center border-0 shadow-none fs-5 w-auto" id="bookmarks-order" onchange="setBookmarks()">
                                        <option value="nombre" class="text-start">Nombre</option>
                                        <option value="fecha" class="text-start">Fecha</option>
                                        <option value="calificacion" class="text-start">Puntaje</option>
                                    </select>
                                    <i class="col-1 fa-solid fa-arrow-down-short-wide my-auto pointer w-auto p-0 icon-color" id="sort-bookmarks-btn"></i>
                                </div>

                                <div class="col-12 row m-0 p-0 justify-content-evenly" id="content-bookmarks"> </div>
                                
                            </div>`

    setScreen(bookmarksScreen)

    sortBookmarks = true;

    const sortBookmarksBTN = document.querySelector('#sort-bookmarks-btn');
    sortBookmarksBTN.addEventListener('click', () => {
        if (sortBookmarksBTN.classList.contains('fa-arrow-down-short-wide')) {
            sortBookmarksBTN.classList.replace('fa-arrow-down-short-wide', 'fa-arrow-down-wide-short')
        } else {
            sortBookmarksBTN.classList.replace('fa-arrow-down-wide-short', 'fa-arrow-down-short-wide')
        }
        sortBookmarks = !sortBookmarks;
        setBookmarks()
    })

    setBookmarks();
}

function setCommentsScreen() {

    let commentsScreen = ` <b class="fs-1">Comentarios</b>
                            <div class="row bg-white my-2 p-2 radius-10px justify-content-center shadow">
                                <div class="col-12 row m-0 mb-3 text-start fs-5 justify-content-center justify-content-sm-start">
                                    <label class="col-12 col-sm-6 my-auto p-0 text-center text-sm-end px-2 px-sm-0 fs-5" for="comments-order">Ordenado por:</label>
                                    <select class="col-5 form-select pe-auto text-center border-0 shadow-none fs-5 w-auto" id="comments-order" onchange="setComments()">
                                        <option value="nombre" class="text-start">Receta</option>
                                        <option value="fecha" class="text-start">Fecha</option>
                                        <option value="calificacion" class="text-start">Puntaje</option>
                                    </select>
                                    <!-- <i class="col-6 bi bi-arrow-down-up bg-black"></i> -->
                                    <i class="col-1 fa-solid fa-arrow-down-short-wide my-auto pointer w-auto p-0 icon-color" id="sort-comments-btn"></i>
                                </div>

                                <div class="col-12 row m-0" id="content-comments">
                                </div>
                            </div>`;

    setScreen(commentsScreen);

    sortComments = true;

    const sortCommentsBTN = document.querySelector('#sort-comments-btn');
    sortCommentsBTN.addEventListener('click', () => {
        if (sortCommentsBTN.classList.contains('fa-arrow-down-short-wide')) {
            sortCommentsBTN.classList.replace('fa-arrow-down-short-wide', 'fa-arrow-down-wide-short')
        } else {
            sortCommentsBTN.classList.replace('fa-arrow-down-wide-short', 'fa-arrow-down-short-wide')
        }
        sortComments = !sortComments;
        setComments()
    })

    setComments();
}

function setSettingsScreen() {

    let email = user.email;
    let password = user.password;
    let phone = user.phone;
    let address = user.address == '' ? ['Sin Dirección', 0] : user.address.split('#')

    let settingsScreen = `   <b class="fs-1">Configuraciones</b>
                            <div class="row bg-white my-2 p-2 radius-10px fs-5 shadow">
                                <div class="col-12 row m-0 mb-3 fs-5">
                                    <p class="col-10 col-sm-9 col-lg-8 my-auto p-0 text-end">Información de Seguridad</p>
                                    <i class="col-2 col-sm-3 col-lg-4 fa-regular fa-pen-to-square col-icons w-auto icon-color pad-icons-2 text-start my-auto pointer" id="edit-security-btn"></i>
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
                            </div>`;

    setScreen(settingsScreen);
}

function setRandomRecete() {
    $.ajax({
        data: {},
        url: 'controller/CtrlRecetas.php?op=random',
        type: 'POST',
        success: function (innerHTML) {
            let iH = $.parseJSON(innerHTML);
            innerHTML = ''
            for (let i = 0; i < iH.length; i++) {
                let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let nombreTitle = '';
                for (let e = 0; e < nombre.length; e++) {
                    if (nombre[e] != ' ') {
                        nombreTitle += `${nombre[e].toUpperCase()} `;
                    }
                }
                innerHTML += `  <div class="carousel-item ${i == 0 ? 'active' : ''}" data-bs-interval="5000">
                                    <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                       <p class="fs-5"><a href="#" class="text-white">${nombreTitle}</a></p>
                                    </div>
                                </div>`
            }
            document.querySelector('#randomRecete1').innerHTML = innerHTML;
            document.querySelector('#randomRecete2').innerHTML = innerHTML;
        }
    })
}

function setTopRecete() {
    $.ajax({
        data: {},
        url: 'controller/CtrlRecetas.php?op=top',
        type: 'POST',
        success: function (innerHTML) {
            let iH = $.parseJSON(innerHTML);
            innerHTML = ''
            for (let i = 0; i < iH.length; i++) {
                let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let nombreTitle = '';
                for (let e = 0; e < nombre.length; e++) {
                    if (nombre[e] != ' ') {
                        nombreTitle += `${nombre[e].toUpperCase()} `;
                    }
                }
                nombreTitle = nombreTitle.trim();
                innerHTML += `  <div class="carousel-item ${i == 0 ? 'active' : ''}" data-bs-interval="5000">
                                   <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                    <h5 class="fs-3 text-nowrap">T O P # ${i + 1}</h5>
                                    <p class="fs-5"><a href="#" class="text-white">${nombreTitle}</a></p>
                                    </div>
                                </div>`;
            }
            document.querySelector('#topRecete1').innerHTML = innerHTML;
            document.querySelector('#topRecete2').innerHTML = innerHTML;
        }
    })
}

function setBookmarks() {
    let order = document.querySelector('#bookmarks-order').value;
    $.ajax({
        data: {
            user_id: user.id,
            order: order,
            sort: sortBookmarks
        },
        url: 'controller/CtrlBookmarks.php?op=bookmarks',
        type: 'POST',
        success: function (innerHTML) {
            if (innerHTML != '') {
                let iH = $.parseJSON(innerHTML);
                innerHTML = '';
                let ord = '';
                for (let i = 0; i < iH.length; i++) {
                    let nombre = iH[i].nombre;
                    let img_name = iH[i].img_name;
                    let fecha = iH[i].fecha.substring(0, 10);
                    let calificacion = iH[i].puntaje;
                    // console.log(fecha != '2022-12-04');
                    if (order == 'nombre') {
                        if (ord != nombre[0].toUpperCase()) {
                            ord = nombre[0].toUpperCase();
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                            <p class="col2 text-center">
                                                <hr class="col-5 my-auto">
                                                ${ord}
                                                <hr class="col-5 my-auto">
                                            </p>
                                        </div>`;
                        }
                    } else if (order == 'fecha') {
                        if (ord != fecha) {
                            ord = fecha;
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                            <p class="col2 text-center">
                                                <hr class="col-5 my-auto">
                                                ${ord}
                                                <hr class="col-5 my-auto">
                                            </p>
                                        </div>`;
                        }
                    }
                    else {
                        if (ord != calificacion) {
                            ord = calificacion;
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                            <p class="col2 text-center">
                                                <hr class="col-5 my-auto">
                                                <span class="p-0" style="width: fit-content;">${'<i class="fa-solid fa-star"></i> '.repeat(calificacion)}
                                                ${'<i class="fa-regular fa-star-half-stroke"></i> '.repeat(calificacion % 1 != 0 ? 1 : 0)}
                                                ${'<i class="fa-regular fa-star"></i> '.repeat(5 - calificacion)}</span>
                                                <hr class="col-5 my-auto">
                                            </p>
                                        </div>`;
                        }
                    }
                    innerHTML += `  <div class='card p-2 pb-0 col-5 col-md-3 radius-10px shadow'>
                                    <img class='card-img-top radius-10px' src='assets/img/recetas/${img_name}' alt='${nombre}'>
                                    <a href='#' class='card-body px-2'>${nombre}</a>
                                </div>`;
                }
                document.querySelector('#content-bookmarks').innerHTML = innerHTML;
            } else {
                document.querySelector('#content-bookmarks').innerHTML = `  <i class="fa-solid fa-face-dizzy fs-1"></i>
                                                                            <p class="mt-2">No Hay Recetas Guardadas</p>`;
            }
        }
    })
}

function setComments() {
    let order = document.querySelector('#comments-order').value;
    $.ajax({
        data: {
            user_id: user.id,
            order: order,
            sort: sortComments
        },
        url: 'controller/CtrlComments.php?op=comments',
        type: 'POST',
        success: function (innerHTML) {
            if (innerHTML != '') {
                let iH = $.parseJSON(innerHTML);
                innerHTML = '';
                let ord = '';
                for (let i = 0; i < iH.length; i++) {
                    let nombre = iH[i].nombre;
                    let calificacion = iH[i].puntaje;
                    let comentario = iH[i].contenido;
                    let fecha = iH[i].fecha.substring(0, 10)
                    if (order == 'nombre') {
                        if (ord != nombre[0].toUpperCase()) {
                            ord = nombre[0].toUpperCase();
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                                <p class="col2 text-center">
                                                <hr class="col-5 my-auto">
                                                ${ord}
                                                <hr class="col-5 my-auto">
                                                </p>
                                            </div>`;
                        }
                    } else if (order == 'fecha') {
                        if (ord != fecha) {
                            ord = fecha;
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                                <p class="col2 text-center">
                                                <hr class="col-5 my-auto">
                                                ${ord}
                                                <hr class="col-5 my-auto">
                                                </p>
                                            </div>`;
                        }
                    } else {
                        if (ord != calificacion) {
                            ord = calificacion;
                            innerHTML += `  <div class='col-12 row m-0 p-0 justify-content-around'>
                                                <p class="col2 text-center">
                                                    <hr class="col-5 my-auto">
                                                    <span class="p-0" style="width: fit-content;">${'<i class="fa-solid fa-star"></i> '.repeat(calificacion)}
                                                    ${'<i class="fa-regular fa-star-half-stroke"></i> '.repeat(calificacion % 1 != 0 ? 1 : 0)}
                                                    ${'<i class="fa-regular fa-star"></i> '.repeat(5 - calificacion)}</span>
                                                    <hr class="col-5 my-auto">
                                                </p>
                                            </div>`;
                        }
                    }
                    innerHTML += `  <div class="col-12 col-lg-9 row m-0 mb-3 p-0 border-1 radius-10px mx-auto justify-content-center shadow" style="border: 1px solid grey;">
                                        <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Receta</p>
                                        <a class="col-12 col-md-8 pt-0 py-md-2 m-0" href="#" >${nombre}</a>
                                        <hr class="m-0" style="color: grey;">
                                        <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Calificación</p>
                                        <p class="col-12 col-md-8 pt-0 py-md-2 m-0">
                                            ${'<i class="fa-solid fa-star"></i> '.repeat(calificacion)}
                                            ${'<i class="fa-regular fa-star-half-stroke"></i> '.repeat(calificacion % 1 != 0 ? 1 : 0)}
                                            ${'<i class="fa-regular fa-star"></i> '.repeat(5 - calificacion)}
                                        </p>
                                        <hr class="m-0" style="color: grey;">
                                        <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Comentario</p>
                                        <p class="col-12 col-md-8 pt-0 py-md-2 m-0">${comentario}</p>
                                        <hr class="m-0" style="color: grey;">
                                        <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Fecha</p>
                                        <p class="col-12 col-md-8 pt-0 py-md-2 m-0">${iH[i].fecha}</p>
                                    </div>`
                }
                document.querySelector('#content-comments').innerHTML = innerHTML;
            } else {
                document.querySelector('#content-comments').innerHTML = `   <i class="fa-solid fa-face-sad-tear fs-1"></i>
                                                                            <p class="mt-2">No Hay Comentarios</p>`;
            }
        }
    })
}

function editInfoPersonal() {
    // continuar acá!
    let info = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        gender: document.querySelector('#gender'),
        birthday: document.querySelector('#birthday')
    };
    if (!info.firstName.disabled) {
        location.href = 'perfil.php'
    }
    for (let e in info) {
        info[e].disabled = !info[e].disabled;
    }

    // console.log(info);
    // for (let i = 0; i < info.length; i++) {
        // console.log(info[i]);
        // info[i].removeAttribute('disabled');
    // }
}


var sortBookmarks, sortComments = true;

// const date = new Date();

const user = JSON.parse(localStorage.getItem('user'));

const rightDiv = document.querySelector('#rightDiv');

setProfileScreen();

setRandomRecete();

setTopRecete();