function setScreen(screen) {
    document.querySelector('#rightDiv').innerHTML = screen;
}

function setRandomRecete() {
    $.ajax({
        data: {},
        url: 'controller/CtrlRecetas.php?op=random',
        type: 'POST',
        success: function (innerHTML) {
            let iH = $.parseJSON(innerHTML);
            let innerHTML1 = '';
            let innerHTML2 = '';
            for (let i = 0; i < iH.length; i++) {
                let receta_id = iH[i].receta_id;
                let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let nombreTitle = '';
                for (let e = 0; e < nombre.length; e++) {
                    if (nombre[e] != ' ') {
                        nombreTitle += `${nombre[e].toUpperCase()} `;
                    }
                }
                innerHTML1 += `  <div class="carousel-item ${i == 0 ? 'active' : ''} pointer" data-bs-interval="5000" id="r${receta_id}">
                                    <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                        <p class="fs-5">
                                            <a class="text-white" id="${receta_id}">${nombreTitle}</a>
                                        </p>
                                    </div>
                                </div>`;
                innerHTML2 += `  <div class="carousel-item ${i == 0 ? 'active' : ''} pointer" data-bs-interval="5000" id="b${receta_id}">
                                    <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                        <p class="fs-5">
                                            <a class="text-white" id="${receta_id}">${nombreTitle}</a>
                                        </p>
                                    </div>
                                </div>`;
            }
            document.querySelector('#randomRecete1').innerHTML = innerHTML1;
            document.querySelector('#randomRecete2').innerHTML = innerHTML2;

            for (let i = 0; i < iH.length; i++) {
                let receta_id = iH[i].receta_id;
                $(`#r${receta_id}`).click(() => {
                    window.location = `receta.php?id=${receta_id}`
                });
                $(`#b${receta_id}`).click(() => {
                    window.location = `receta.php?id=${receta_id}`
                });
            }
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
            let innerHTML1 = ''
            let innerHTML2 = ''
            for (let i = 0; i < iH.length; i++) {
                let receta_id = iH[i].receta_id;
                let img_name = iH[i].img_name;
                let nombre = iH[i].nombre;
                let nombreTitle = '';
                for (let e = 0; e < nombre.length; e++) {
                    if (nombre[e] != ' ') {
                        nombreTitle += `${nombre[e].toUpperCase()} `;
                    }
                }
                nombreTitle = nombreTitle.trim();
                innerHTML1 += `  <div class="carousel-item ${i == 0 ? 'active' : ''} pointer" data-bs-interval="5000" id="r${receta_id}">
                                    <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                        <h5 class="fs-3 text-nowrap">T O P # ${i + 1}</h5>
                                        <p class="fs-5">
                                            <a class="text-white">${nombreTitle}</a>
                                        </p>
                                    </div>
                                </div>`;
                innerHTML2 += `  <div class="carousel-item ${i == 0 ? 'active' : ''} pointer" data-bs-interval="5000" id="b${receta_id}">
                                    <img src="assets/img/recetas/${img_name}" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="${nombre}">
                                    <div class="carousel-caption">
                                        <h5 class="fs-3 text-nowrap">T O P # ${i + 1}</h5>
                                        <p class="fs-5">
                                            <a class="text-white">${nombreTitle}</a>
                                        </p>
                                    </div>
                                </div>`;
            }
            document.querySelector('#topRecete1').innerHTML = innerHTML1;
            document.querySelector('#topRecete2').innerHTML = innerHTML2;

            for (let i = 0; i < iH.length; i++) {
                let receta_id = iH[i].receta_id;
                $(`#r${receta_id}`).click(() => {
                    window.location = `receta.php?id=${receta_id}`
                });
                $(`#b${receta_id}`).click(() => {
                    window.location = `receta.php?id=${receta_id}`
                });
            }

        }
    })
}

const user = JSON.parse(localStorage.getItem('user'));

var btns;
var info;

setProfileScreen();

setRandomRecete();

setTopRecete();