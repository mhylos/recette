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
        insertCommentButton()
    }
});

function insertSaveButton(){
    container = $(".info-receta")
    html = `<button type="button" id="btnSave" onclick="bookmarkReceta()" class="btn d-flex align-items-center align-self-end me-3 btnSave">
                <i class="fa-regular fa-bookmark" id="saveIcon"></i><span class="ms-2" id="btnAction">Guardar</span>
            </button>`
    container.append(html)
    $.when(isSaved()).done(function(response) {
        if (response == true) {
            $("#saveIcon").attr('class', 'fa-solid fa-bookmark')
            $("#btnAction").text('Eliminar de guardados')
            $("#btnSave").addClass('btnRemove').removeClass('btnSave');
            $("#btnSave").attr('onclick', 'removeBookmark()');
        }
    });
}

function setLoadingIcon(jQElement){
    jQElement.empty()
    html = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="ms-1">Espere...</span>`
    jQElement.append(html)
}

function bookmarkReceta(){
    $("#btnSave").prop('disabled', true)
    setLoadingIcon($("#btnSave"))
    user_info = localStorage.getItem('user')
    user_id = $.parseJSON(user_info).id;
    receta_id = id
    // $.ajax({
    //     url:'controller/CtrlSavedRecipes.php?op=is_saved',
    //     data: {'user_id': user_id,
    //            'receta_id': receta_id},
    //     type:'POST'
    // });
}

function removeBookmark(){
    console.log('remueve');
}


function insertCommentButton(){
    container = $(".comments-header")
    html = `<div class="align-self-center">
                <button type="button" class="btn rounded-pill btn-calificar" id="btnCalificar">Calificar</button>
            </div>`
    container.append(html)
    $("#btnCalificar").on('click', deployCommentSection)
}


function deployCommentSection(){
    comment_container = $("#comment-container").removeClass('d-none');
    $("#btnCalificar").text('Esconder')
    $("#btnCalificar").on('click', function(){
        comment_container.addClass('d-none');
        $(this).remove();
        insertCommentButton();

    })
    $(".rating").starRating({
        starSize: 15,
        totalStars: 7,
        hoverColor: 'gold',
        ratedColor: 'gold',
        activeColor: 'gold',
        useGradient: false
    });
}

function isSaved(){
    user_info = localStorage.getItem('user')
    user_id = $.parseJSON(user_info).id;
    receta_id = id
    return ($.ajax({
        url:'controller/CtrlBookmarks.php?op=is_saved',
        data: {'user_id': user_id,
               'receta_id': receta_id},
        type:'POST'
    }));
}

function isLogged(){
    if (localStorage.getItem('logged') != null) {
        return true
    } else {
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

function insertIngredientes(ingredientes){
    ingredienteshtml = $('#ingredientes');
    html = `<div class="row my-1">
                <div class="col-lg-6 row">`
    for (let index = 0; index < Math.ceil(ingredientes.length/2); index++) {
        html += `   <div class="col-1 text-center"><i class="fa-solid fa-check"></i></div>
                    <div class="col-11">${ingredientes[index]}</div>`;  
    };
    html += `   </div>
                <div class="col-lg-6 row">`

    for (let index = Math.ceil(ingredientes.length/2); index < ingredientes.length; index++){
        html += `   <div class="col-1 text-center"><i class="fa-solid fa-check"></i></div>
                    <div class="col-11">${ingredientes[index]}</div>`;  
    }
    html += `   </div>
            </div>`

    ingredienteshtml.append(html);
}

function insertPasos(pasos){
    pasoshtml = $('#pasos');
    for (let index = 0; index < pasos.length; index++) {
        html = `<li class="list-group-item">
                    <h3 class="bold morado-2">Paso ${index+1}:</h3>
                    <div>
                        ${pasos[index]}
                    </div>
                </li>`
        pasoshtml.append(html);
    }
}

function rellenar(data) {
    $('#titulo').text(data.nombre);
    $('#receta-img').attr('src', 'assets/img/recetas/'+data.img_name);
    $('#dificultad').text(data.dificultad);
    $('#duracion').text(data.tiempo_preparacion+' minutos');
    $('#dosis').text(data.dosis > 1 ? data.dosis + ' personas' : 'Una persona');
    getRecetaScore(data.receta_id);

    ingredientes = data.ingredientes.split('+');
    insertIngredientes(ingredientes)

    pasos = data.pasos.split('+');
    insertPasos(pasos)

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