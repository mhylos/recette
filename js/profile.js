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
                                    <i class="col-2 fa-regular fa-pen-to-square col-icons w-auto icon-color pad-icons-2 text-start my-auto pointer" id="edit-security-btn"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="first-name">Nombre</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" value = "${firstName}"id="first-name" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="last-name">Apellido</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" value = "${lastName}" id="last-name" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="gender">Género</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" value = "${gender}" id="gender" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="birthday">Cumpleaños</label>
                                <div class="col-8 row m-0 p-0 my-1">
                                    <div class="col-3 p-0 m-0 w-100">
                                        <input type="date" class="form-control text-center" value = "${birthday}" id="birthday" disabled>
                                    </div>
                                </div>

                            </div>`;

    // <div class="row bg-white my-2 p-2 radius-10px  justify-content-center shadow">
    //     <div class="col-12 row m-0 mb-3 text-start fs-5">
    //         <p class="col-10 col-sm-9 col-lg-8 my-auto p-0 text-end">Guardados <span class="fs-6">(Recientes)</span></p>
    //     </div>

    //     <div class="col-12 row m-0 p-0 justify-content-evenly">

    //         <div class="card p-2 col-5 col-md-3 radius-10px">
    //             <img class="card-img-top radius-10px" src="assets/img/recetas/charquican.jpg" height="100px" alt="Charquican">
    //             <a href="#" class="card-body">Charquican</a>
    //         </div>

    //         <div class="d-none d-sm-flex card p-2 col-5 col-md-3 radius-10px">
    //             <img class="card-img-top radius-10px" src="assets/img/recetas/porotos.jpg" height="100px" alt="Porotos">
    //             <a href="#" class="card-body">Porotos</a>
    //         </div>

    //         <div class="d-none d-md-flex card p-2 col-5 col-md-3 radius-10px">
    //             <img class="card-img-top radius-10px" src="assets/img/recetas/sopaipillas.jpg" height="100px" alt="Sopaipillas">
    //             <a href="#" class="card-body">Sopaipillas</a>
    //         </div>
    //     </div>

    //     <button class="col-3 my-2 radius-10px btn-custom " onclick="setBookmarksScreen()"> Ver Más</button>

    // </div>
    setScreen(profileScreen)

}

function setBookmarksScreen() {

    let bookmarksScreen = `<b class="fs-1">Guardados</b>
                            <div class="row bg-white my-2 px-2 pt-2 radius-10px justify-content-center shadow" style="padding-bottom: 14px;">
                                <div class="col-12 row m-0 text-start fs-5 gap-1 justify-content-center justify-content-sm-start">
                                    <label class="col-12 col-sm-6 my-auto p-0 text-center text-sm-end px-2 px-sm-0 fs-5" for="bookmarks-order">Ordenado por:</label>
                                    <select class="col-5 form-select pe-auto text-center border-0 shadow-none fs-5 w-auto" id="bookmarks-order" onchange="setBookmarks()">
                                        <option value="nombre" class="text-start">Nombre</option>
                                        <option value="fecha" class="text-start">Fecha</option>
                                        <option value="calificacion" class="text-start">Puntaje</option>
                                    </select>
                                    <!-- <i class="col-6 bi bi-arrow-down-up bg-black"></i> -->
                                    <i class="col-1 fa-solid fa-arrow-down-a-z my-auto pointer w-auto p-0 icon-color" id="sort-bookmarks-btn"></i>
                                </div>

                                <div class="col-12 row m-0 p-0 justify-content-evenly" id="content-bookmarks"> </div>
                                
                            </div>`

    // <button class="col-3 my-2 radius-10px btn-custom " onclick="toSettings()"> Ver Más</button>

    setScreen(bookmarksScreen)

    sortBookmarks = true;

    const sortBookmarksBTN = document.querySelector('#sort-bookmarks-btn');
    sortBookmarksBTN.addEventListener('click', () => {
        if (sortBookmarksBTN.classList.contains('fa-arrow-down-a-z')) {
            sortBookmarksBTN.classList.replace('fa-arrow-down-a-z', 'fa-arrow-up-z-a')
        } else {
            sortBookmarksBTN.classList.replace('fa-arrow-up-z-a', 'fa-arrow-down-a-z')
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
                                        <option value="titulo" class="text-start">Titulo</option>
                                        <option value="calificacion" class="text-start">Calificacion</option>
                                        <option value="comentario" class="text-start">Comentario</option>
                                        <option value="fecha" class="text-start">Fecha</option>
                                    </select>
                                    <!-- <i class="col-6 bi bi-arrow-down-up bg-black"></i> -->
                                    <i class="col-1 fa-solid fa-arrow-down-a-z my-auto pointer w-auto p-0 icon-color" id="sort-comments-btn"></i>
                                </div>

                                <div class="col-12 row m-0" id="content-comments">
                                </div>
                            </div>`;

    setScreen(commentsScreen);

    sortComments = true;

    const sortCommentsBTN = document.querySelector('#sort-comments-btn');
    sortCommentsBTN.addEventListener('click', () => {
        if (sortCommentsBTN.classList.contains('fa-arrow-down-a-z')) {
            sortCommentsBTN.classList.replace('fa-arrow-down-a-z', 'fa-arrow-up-z-a')
        } else {
            sortCommentsBTN.classList.replace('fa-arrow-up-z-a', 'fa-arrow-down-a-z')
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
    // <div class="row bg-white mt-3 p-2 radius-10px fs-5 shadow">
    //     <div class="col-12 row m-0">
    //         <p class="col-9 col-sm-8 my-auto p-0 text-end">Información de Pago</p>
    //         <i class="col-3 col-sm-4 fa-regular fa-pen-to-square col-icons w-auto icon-color pad-icons-2 text-start my-auto pointer" id="edit-pay-btn"></i>
    //     </div>

    //     <label class="col-4 p-0 m-auto" for="number_card">Número de tarjeta</label>
    //     <div class="col-8 p-0 row m-0 my-1">
    //         <input type="text" class="col-10 form-control text-center w-75" id="number_card" disabled>
    //         <i class="col-2 fa-brands fa-cc-mastercard m-auto fs-1"></i>
    //     </div>

    //     <label class="col-4 p-0 m-auto" for="cvv">CVV</label>
    //     <div class="col-8 p-0 m-0 my-1">
    //         <input type="password" class="form-control text-center w-25" id="cvv" disabled>
    //     </div>

    //     <label class="col-4 p-0 m-auto">Fecha Expiración</label>
    //     <div class="col-8 p-0 row m-0 my-1">

    //         <div class="col-5 p-0 input-group me-1" style="width: auto;">
    //             <select class=" form-select pe-auto text-center" id="day-exp" disabled>
    //                 <!-- <option selected></option> -->
    //                 <option value=30>30</option>
    //                 <option value=12>12</option>
    //                 <option value=31>31</option>
    //             </select>
    //         </div>
    //         <div class="col-5 p-0 input-group me-1" style="width: auto;">
    //             <select class=" form-select pe-auto text-center" id="year-exp" disabled>
    //                 <!-- <option selected></option> -->
    //                 <option value=22>22</option>
    //                 <option value=24>24</option>
    //                 <option value=26>26</option>
    //             </select>
    //         </div>
    //         <!-- <input type="number" class="col-5 form-control text-center me-1" style="width: 30%;" id="exp"
    //             placeholder="31" disabled>
    //         <input type="number" class="col-5 form-control text-center ms-1" style="width: 35%;" id="exp"
    //             placeholder="1234" disabled> -->
    //     </div>
    // </div>`;

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
                innerHTML += `<div class="carousel-item ${i == 0 ? 'active' : ''}" data-bs-interval="5000">`
                innerHTML += `   <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">`
                innerHTML += `   <div class="carousel-caption">`
                innerHTML += `       <p class="fs-5"><a href="#" class="text-white">${nombreTitle}</a></p>`
                innerHTML += `   </div>`
                innerHTML += `</div>`
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
                innerHTML += `<div class="carousel-item ${i == 0 ? 'active' : ''}" data-bs-interval="5000">`
                innerHTML += `   <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">`
                innerHTML += `   <div class="carousel-caption">`
                innerHTML += `       <h5 class="fs-3 text-nowrap">T O P # ${i + 1}</h5>`
                innerHTML += `       <p class="fs-5"><a href="#" class="text-white">${nombreTitle}</a></p>`
                innerHTML += `   </div>`
                innerHTML += `</div>`
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
            let iH = $.parseJSON(innerHTML);
            innerHTML = '';
            let ord = '';
            for (let i = 0; i < iH.length; i++) {
                let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let fecha = iH[i].fecha
                // console.log(fecha != '2022-12-04');
                if (order == 'nombre') {
                    if (ord != nombre[0].toUpperCase()) {
                        ord = nombre[0].toUpperCase();
                        innerHTML += `<div class='col-12 row m-0 justify-content-around'>`;
                        innerHTML += `<p class="col2 text-center">`;
                        innerHTML += `  <hr class="col-5 my-auto">`;
                        innerHTML += `  ${ord}`;
                        innerHTML += `<hr class="col-5 my-auto">`;
                        innerHTML += `</p>`;
                        innerHTML += `</div>`;
                    }
                } else if (order == 'fecha') {
                    if (ord != fecha) {
                        ord = fecha;
                        innerHTML += `<div class='col-12 row m-0 justify-content-around'>`;
                        innerHTML += `<p class="col2 text-center">`;
                        innerHTML += `  <hr class="col-5 my-auto">`;
                        innerHTML += `  ${ord}`;
                        innerHTML += `<hr class="col-5 my-auto">`;
                        innerHTML += `</p>`;
                        innerHTML += `</div>`;
                    }
                }
                // else {
                //     // ord =  ? '0' : ord;
                //     if (ord != '0') {
                //         ord = nombre[0].toUpperCase();
                //         innerHTML += `<div class='col-12'>`;
                //         innerHTML += `<hr class="mx-auto">`;
                //         innerHTML += `<p class="text-center">${ord}</p>`;
                //         innerHTML += `<hr class="mx-auto">`;
                //         innerHTML += `</div>`;
                //     }
                // }
                innerHTML += `<div class='card p-2 pb-0 col-5 col-md-3 radius-10px shadow'>`;
                innerHTML += `    <img class='card-img-top radius-10px' src='assets/img/recetas/${img_name}' height='100px`;
                innerHTML += `        alt='${nombre}'>`;
                // innerHTML += `    <hr class="my-">`;
                innerHTML += `    <a href='#' class='card-body px-2'>${nombre}</a>`;
                innerHTML += `</div>`;
            }
            document.querySelector('#content-bookmarks').innerHTML = innerHTML;
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
            let iH = $.parseJSON(innerHTML);
            // console.log(iH);
            innerHTML = '';
            let ord = '';
            for (let i = 0; i < iH.length; i++) {
                // let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let titulo = iH[i].contenido;
                let calificacion = parseInt(iH[i].nota);
                let comentario = iH[i].contenido;
                let fecha = iH[i].fecha
                // console.log(fecha != '2022-12-04');
                if (order == 'nombre') {
                    if (ord != nombre[0].toUpperCase()) {
                        ord = nombre[0].toUpperCase();
                        innerHTML += `<div class='col-12 row m-0 justify-content-around'>`;
                        innerHTML += `<p class="col2 text-center">`;
                        innerHTML += `  <hr class="col-5 my-auto">`;
                        innerHTML += `  ${ord}`;
                        innerHTML += `<hr class="col-5 my-auto">`;
                        innerHTML += `</p>`;
                        innerHTML += `</div>`;
                    }
                } else if (order == 'fecha') {
                    if (ord != fecha) {
                        ord = fecha;
                        innerHTML += `<div class='col-12 row m-0 justify-content-around'>`;
                        innerHTML += `<p class="col2 text-center">`;
                        innerHTML += `  <hr class="col-5 my-auto">`;
                        innerHTML += `  ${ord}`;
                        innerHTML += `<hr class="col-5 my-auto">`;
                        innerHTML += `</p>`;
                        innerHTML += `</div>`;
                    }
                }
                // else {
                //     // ord =  ? '0' : ord;
                //     if (ord != '0') {
                //         ord = nombre[0].toUpperCase();
                //         innerHTML += `<div class='col-12'>`;
                //         innerHTML += `<hr class="mx-auto">`;
                //         innerHTML += `<p class="text-center">${ord}</p>`;
                //         innerHTML += `<hr class="mx-auto">`;
                //         innerHTML += `</div>`;
                //     }
                // }
                innerHTML += `<div class="col-12 col-lg-9 row m-0 mb-3 p-0 border-1 radius-10px mx-auto justify-content-center shadow" style="border: 1px solid grey;">`
                innerHTML += `  <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Receta</p>`
                innerHTML += `  <a class="col-12 col-md-8 pt-0 py-md-2 m-0" href="#" >${nombre}</a>`
                innerHTML += `  <hr class="m-0" style="color: grey;">`
                innerHTML += `  <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Título</p>`
                innerHTML += `  <p class="col-12 col-md-8 pt-0 py-md-2 m-0">${titulo}</p>`
                innerHTML += `  <hr class="m-0" style="color: grey;">`
                innerHTML += `  <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Calificación</p>`
                innerHTML += `  <p class="col-12 col-md-8 pt-0 py-md-2 m-0">`
                innerHTML += `      ${'<i class="fa-solid fa-star"></i> '.repeat(calificacion)}`
                innerHTML += `      ${'<i class="fa-regular fa-star"></i> '.repeat(5 - calificacion)}`
                innerHTML += `  </p>`
                innerHTML += `  <hr class="m-0" style="color: grey;">`
                innerHTML += `  <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Comentario</p>`
                innerHTML += `  <p class="col-12 col-md-8 pt-0 py-md-2 m-0">${comentario}</p>`
                innerHTML += `  <hr class="m-0" style="color: grey;">`
                innerHTML += `  <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Fecha</p>`
                innerHTML += `  <p class="col-12 col-md-8 pt-0 py-md-2 m-0">${fecha}</p>`
                innerHTML += `</div>`
            }
            document.querySelector('#content-comments').innerHTML = innerHTML;
        }
    })
}
var sortBookmarks, sortComments = true;

// const date = new Date();

const user = JSON.parse(localStorage.getItem('user'));

const rightDiv = document.querySelector('#rightDiv');

setProfileScreen();

setRandomRecete();

setTopRecete();