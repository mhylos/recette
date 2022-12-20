function setBookmarksScreen() {

    let bookmarksScreen = `<b class="fs-1">Guardados</b>
                            <div class="row bg-white my-2 p-2  radius-10px justify-content-center shadow" style="padding-bottom: 14px;">
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
            
            if (innerHTML != 'null') {
                let iH = $.parseJSON(innerHTML);
                innerHTML = '';
                let ord = '';
                for (let i = 0; i < iH.length; i++) {
                    let receta_id = iH[i].receta_id;
                    let nombre = iH[i].nombre;
                    let img_name = iH[i].img_name;
                    let fecha = iH[i].fecha.substring(0, 10);
                    let calificacion = iH[i].puntaje;
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
                    innerHTML += `  <div class='card p-2 pb-0 col-5 col-md-3 radius-10px shadow pointer' id="${receta_id}">
                                    <img class='card-img-top radius-10px' src='assets/img/recetas/${img_name}' alt='${nombre}'>
                                    <a class='card-body px-2'>${nombre}</a>
                                </div>`;
                }
                document.querySelector('#content-bookmarks').innerHTML = innerHTML;

                for (let i = 0; i < iH.length; i++) {
                    let receta_id = iH[i].receta_id;
                    $(`#${receta_id}`).click(() => {
                        window.location = `receta.php?id=${receta_id}`
                    });
                }
                
            } else {
                document.querySelector('#content-bookmarks').innerHTML = `  <i class="fa-solid fa-face-dizzy fs-1"></i>
                                                                            <p class="mt-2">No Hay Recetas Guardadas</p>`;
            }
        }
    })
}

var sortBookmarks = true;