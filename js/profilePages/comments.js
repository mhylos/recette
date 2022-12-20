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
                    let receta_id = iH[i].receta_id;
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
                    innerHTML += `  <div class="col-12 col-lg-9 row m-0 mb-3 p-0 border-1 radius-10px mx-auto justify-content-center shadow pointer" style="border: 1px solid grey;" id="${receta_id}">
                                        <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Receta</p>
                                        <a class="col-12 col-md-8 pt-0 py-md-2 m-0">${nombre}</a>
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
                
                for (let i = 0; i < iH.length; i++) {
                    let receta_id = iH[i].receta_id;
                    $(`#${receta_id}`).click(() => {
                        window.location = `receta.php?id=${receta_id}`
                    });
                }

            } else {
                document.querySelector('#content-comments').innerHTML = `   <i class="fa-solid fa-face-sad-tear fs-1"></i>
                                                                            <p class="mt-2">No Hay Comentarios</p>`;
            }
        }
    })
}

var sortComments = true;