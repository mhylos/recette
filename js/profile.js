function updateScreen(screen) {

    document.querySelector('#right-div').innerHTML = screen;
    // let index = content.indexOf('</b>');
    // if (index > -1) {
    //     content = content.substring(0, index + 4);
    // }
    // content = `${content.substring(0, index)}${title}${content.substring(index)}`;
    // content += inneerHTML;
    // console.log(content);
    // document.getElementById('right-div').innerHTML = content

}


var title = 'Perfil';

var profile_screen = `  <b class="fs-1">${title}</b>
                        <div class="row bg-white my-2 p-2 radius-10px justify-content-center">
                            <div class="col-12 row m-0 mb-3 justify-content-center fs-5">
                                <p class="col-9 col-sm-8 my-auto p-0 text-end">Información Personal</p>
                                <i class="col-3 col-sm-4 fa-regular fa-pen-to-square col-icons pad-icons-2 text-start my-auto pointer"
                                    id="edit-personal"></i>
                            </div>

                            <label class="col-4 p-0 m-auto" for="first-name">Nombre</label>
                            <div class="col-8 p-0 my-1">
                                <input type="text" class="form-control text-center" id="first-name" disabled>
                            </div>

                            <label class="col-4 p-0 m-auto" for="last-name">Apellido</label>
                            <div class="col-8 p-0 my-1">
                                <input type="text" class="form-control text-center" id="last-name" disabled>
                            </div>

                            <label class="col-4 p-0 m-auto" for="gender">Género</label>
                            <div class="col-8 p-0 my-1">
                                <input type="text" class="form-control text-center" id="gender" disabled>
                            </div>

                            <label class="col-4 p-0 m-auto" for="birthday">Cumpleaños</label>
                            <div class="col-8 row m-0 p-0 my-1">
                                <div class="col-3 p-0 m-0 w-100">
                                    <input type="date" class="form-control text-center" id="birthday" disabled>
                                </div>
                            </div>

                        </div>
                        <div class="row bg-white my-2 p-2 radius-10px  justify-content-center">
                            <div class="col-12 row m-0 mb-3 text-start fs-5">
                                <p class="col-9 col-sm-8 my-auto p-0 text-end">Guardados <span class="fs-6">(Recientes)</span></p>
                                <i class="col-3 col-sm-4 fa-regular fa-pen-to-square col-icons pad-icons-2 text-start my-auto pointer"
                                    id="edit-personal"></i>
                            </div>

                            <div class="col-12 row m-0 p-0 justify-content-evenly">
                                
                                <div class="card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/charquican.jpg" height="100px" alt="Charquican">
                                    <a href="#" class="card-body">Charquican</a>
                                </div>

                                <div class="d-none d-sm-flex card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/porotos.jpg" height="100px" alt="Porotos">
                                    <a href="#" class="card-body">Porotos</a>
                                </div>

                                <div class="d-none d-md-flex card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/sopaipillas.jpg" height="100px" alt="Sopaipillas">
                                    <a href="#" class="card-body">Sopaipillas</a>
                                </div>
                            </div>

                            <button class="col-3 my-2 radius-10px btn-custom " onclick="toSettings()"> Ver Más</button>

                        </div>`;

var bookmarks_screen = `<b class="fs-1">Guardados</b>
                        <div class="row bg-white my-2 p-2 radius-10px justify-content-center">
                            <div class="col-12 row m-0 mb-3 text-start fs-5 gap-1">
                                <label class="col-5 col-md-6 my-auto p-0 text-end fs-5" for="order">Ordenado por:</label>
                                <select class="col-4 col-md-5 form-select pe-auto text-center border-0 shadow-none fs-5 w-auto" id="bookmarks-order">
                                    <option value="name" class="text-start">Nombre</option>
                                    <option value="date" class="text-start">Fecha</option>
                                    <option value="score" class="text-start">Puntaje</option>
                                </select>
                                <!-- <i class="col-6 bi bi-arrow-down-up bg-black"></i> -->
                                <i class="col-1 fa-solid fa-arrow-down-a-z my-auto pointer icon-color w-auto p-0" id="sort-bookmarks-btn"></i>
                            </div>

                            <!-- <div class="col-12 m-0 p-0 mb-1 ">
                                A
                            </div> -->

                            <div class="col-12 row m-0 p-0 justify-content-evenly">

                                <div class="card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/charquican.jpg" height="100px"
                                        alt="Charquican">
                                    <a href="#" class="card-body">Charquican</a>
                                </div>

                                <div class="d-none d-sm-flex card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/porotos.jpg" height="100px"
                                        alt="Porotos">
                                    <a href="#" class="card-body">Porotos</a>
                                </div>

                                <div class="d-none d-md-flex card p-2 col-5 col-md-3 radius-10px">
                                    <img class="card-img-top radius-10px" src="assets/img/recetas/sopaipillas.jpg" height="100px"
                                        alt="Sopaipillas">
                                    <a href="#" class="card-body">Sopaipillas</a>
                                </div>
                            </div>

                            <button class="col-3 my-2 radius-10px btn-custom " onclick="toSettings()"> Ver Más</button>

                        </div>`

var comments_screen = ` <b class="fs-1">Comentarios</b>
                        <div class="row bg-white my-2 p-2 radius-10px justify-content-center">
                            <div class="col-12 row m-0 mb-3 text-start fs-5">
                                <label class="col-5 col-md-6 my-auto p-0 text-end fs-5" for="order">Ordenado por:</label>
                                <select class="col-4 col-md-5 form-select pe-auto text-center border-0 shadow-none fs-5 w-auto"
                                    id="order">
                                    <option value="recete" class="text-start">Receta</option>
                                    <option value="date" class="text-start">Fecha</option>
                                    <option value="comments" class="text-start">Comentarios</option>
                                </select>
                                <!-- <i class="col-6 bi bi-arrow-down-up bg-black"></i> -->
                                <i class="col-1 fa-solid fa-arrow-down-a-z my-auto pointer w-auto p-0 icon-color"
                                    id="sort-comments-btn"></i>
                            </div>

                            <!-- <div class="col-12 m-0 p-0 mb-1 ">
                                A
                            </div> -->
                            <div class="col-12 row m-0">
                                <div class="col-12 col-lg-9 row m-0 mb-3 p-0 border-1 radius-10px mx-auto justify-content-center"
                                    style="border: 1px solid grey;">
                                    <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Receta</p>
                                    <a class="col-12 col-md-8 pt-0 py-md-2 m-0" href="#" >Porotos</a>
                                    <hr class="m-0" style="color: grey;">
                                    <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Título</p>
                                    <p class="col-12 col-md-8 pt-0 py-md-2 m-0">Excelente</p>
                                    <hr class="m-0" style="color: grey;">
                                    <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Calificación</p>
                                    <p class="col-12 col-md-8 pt-0 py-md-2 m-0">
                                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                                    </p>
                                    <hr class="m-0" style="color: grey;">
                                    <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Comentario</p>
                                    <p class="col-12 col-md-8 pt-0 py-md-2 m-0">
                                        Aute culpa incididunt occaecat irure adipisicing velit eu occaecat tempor in officia cillum laboris anim.
                                    </p>
                                    <hr class="m-0" style="color: grey;">
                                    <p class="col-12 col-md-4 pb-0 py-md-2 m-0 border-right">Fecha</p>
                                    <p class="col-12 col-md-8 pt-0 py-md-2 m-0">23-11-2022</p>
                                </div>
                            </div>
                            
                            <button class="col-12 my-2 radius-10px btn-custom " onclick="more()"> Ver Más</button>
                        </div>`;

const settings_screen = `   <b class="fs-1">Configuraciones</b>
                            <div class="row bg-white my-3 p-2 radius-10px fs-5">
                                <div class="col-12 row m-0">
                                    <p class="col-11 m-0 mb-3 p-0">Información de Seguridad</p>
                                    <i class="col-1 fa-regular fa-pen-to-square col-icons pad-icons-2" id="edit-contact"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="e-mail">Correo Electrónico</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" id="e-mail" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="password">Contraseña</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="text" class="form-control text-center" id="password" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="phone">Celular</label>
                                <div class="col-8 p-0 my-1">
                                    <input type="number" class="form-control text-center" id="phone" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto" for="address">Dirección</label>
                                <div class="col-8 row p-0 m-0 my-1">
                                    <input type="text" class="col-6 form-control text-center m-auto" style="width: 65%;" id="address"
                                        disabled>
                                        
                                    <label class="col-1 p-0 m-auto" for="#">#</label>
                                    <input type="number" class="col-5 form-control text-center m-auto w-25" id="#" maxlength="4"
                                        disabled>
                                </div>
                            </div>
                            <div class="row bg-white mt-3 p-2 radius-10px fs-5">
                                <div class="col-12 row m-0">
                                    <p class="col-11 m-0 mb-3 p-0">Información de Pago</p>
                                    <i class="col-1 fa-regular fa-pen-to-square col-icons pad-icons-2" id="edit-pay"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="number_card">Número de tarjeta</label>
                                <div class="col-8 p-0 row m-0 my-1">
                                    <input type="text" class="col-10 form-control text-center w-75" id="number_card" disabled>
                                    <i class="col-2 fa-brands fa-cc-mastercard m-auto fs-1"></i>
                                </div>

                                <label class="col-4 p-0 m-auto" for="cvv">CVV</label>
                                <div class="col-8 p-0 m-0 my-1">
                                    <input type="password" class="form-control text-center w-25" id="cvv" disabled>
                                </div>

                                <label class="col-4 p-0 m-auto">Fecha Expiración</label>
                                <div class="col-8 p-0 row m-0 my-1">

                                    <div class="col-5 p-0 input-group me-1" style="width: auto;">
                                        <select class=" form-select pe-auto text-center" id="day-exp" disabled>
                                            <!-- <option selected></option> -->
                                            <option value=30>30</option>
                                            <option value=12>12</option>
                                            <option value=31>31</option>
                                        </select>
                                    </div>
                                    <div class="col-5 p-0 input-group me-1" style="width: auto;">
                                        <select class=" form-select pe-auto text-center" id="year-exp" disabled>
                                            <!-- <option selected></option> -->
                                            <option value=22>22</option>
                                            <option value=24>24</option>
                                            <option value=26>26</option>
                                        </select>
                                    </div>
                                    <!-- <input type="number" class="col-5 form-control text-center me-1" style="width: 30%;" id="exp"
                                        placeholder="31" disabled>
                                    <input type="number" class="col-5 form-control text-center ms-1" style="width: 35%;" id="exp"
                                        placeholder="1234" disabled> -->
                                </div>
                            </div>`;

updateScreen(profile_screen);