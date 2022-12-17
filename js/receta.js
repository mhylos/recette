querystring = window.location.search
params = new URLSearchParams(querystring);
const id = params.get('id')

$(document).ready(function () {
    $.ajax({
        url:'controller/CtrlRecetas.php?op=obtener_receta',
        data: {'id': id},
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            rellenar(data);
        }
    });

    if (isLogged()) {
        insertSaveButton()
    }
});

function insertSaveButton(){
    container = $(".info-receta")
    html = `<button type="button" class="btn d-flex align-items-center align-self-end">
                <i class="fa-regular fa-bookmark" id="saveIcon"></i><span class="ms-2" id="btnAction">Guardar</span>
            </button>`
    container.append(html)
    $.when(isSaved()).done(function(response) {
        if (response == true) {
            $("#saveIcon").attr('class', 'fa-solid fa-bookmark')
            $("#btnAction").text('Eliminar de guardados')
        }
    });
    
}

function isSaved(){
    user_info = localStorage.getItem('user')
    user_id = $.parseJSON(user_info).id;
    receta_id = id
    return ($.ajax({
        url:'controller/CtrlSavedRecipes.php?op=is_saved',
        data: {'user_id': user_id,
               'receta_id': receta_id},
        type:'POST'
    }));
}

function isLogged(){
    const myProfile = document.querySelector('#my-profile-btn')
    if (localStorage.getItem('logged') != null) {
        myProfile.innerHTML = 'Mi Perfil';
        myProfile.href = 'perfil.php'
        return true
    } else {
        myProfile.innerHTML = 'Iniciar Sesión';
        myProfile.href = 'logIn.php'
        return false
    }
}

function getRecetaScore(id) {
    $.ajax({
        url:'controller/CtrlComments.php?op=get_avg_score_of_recipe',
        data: {'receta_id': id},
        type:'POST',
        success: function(response){
            $('#score').text(response);
        }
    });
}

function rellenar(data) {
    $('#titulo').text(data.nombre);
    $('#receta-img').attr('src', 'assets/img/recetas/'+data.img_name);
    $('#dificultad').text(data.dificultad);
    $('#duracion').text(data.tiempo_preparacion+' minutos');
    $('#dosis').text(data.dosis > 1 ? data.dosis + ' personas' : 'Una persona');
    getRecetaScore(data.receta_id);

    ingredientes = data.ingredientes.split('+');
    ingredienteshtml = $('#ingredientes');
    ingredientes.forEach(ingrediente => {
        html = `<div class="row my-1">
                <div class="col-1 text-center"><i class="fa-solid fa-check"></i></div>
                <div class="col-11">${ingrediente}</div>
                </div>`;
        ingredienteshtml.append(html);
    });

    pasos = data.pasos.split('+');
    pasoshtml = $('#pasos');
    for (let index = 0; index < pasos.length; index++) {
        html = `<li class="list-group-item">
                    <h3 class="bold morado-2">Paso ${index+1}:</h3>
                    <div>
                        ${pasos[index]};
                    </div>
                </li>`
        pasoshtml.append(html);
    }

    rellenarComentarios(data.receta_id);
}

function rellenarComentarios(receta_id){
    comentarioshtml = $('#comentarios');

    $.ajax({
        url:'controller/CtrlComments.php?op=get_all_of_recipe',
        data: {'receta_id': receta_id},
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            data.forEach(comentario => {
                html = `<li class="list-group-item">
                            <div>
                                <span class="bold morado-2">${comentario.nombre}</span> <span class="fw-light">${comentario.fecha}</span>
                            </div>
                            <div>
                                ${comentario.contenido} 
                            </div>                            
                        </li>`
                comentarioshtml.append(html);
            });
        }
    });
}