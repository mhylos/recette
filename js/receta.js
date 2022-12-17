$(document).ready(function () {
    const querystring = window.location.search
    const params = new URLSearchParams(querystring);
    const id = params.get('id')

    $.ajax({
        url:'controller/CtrlRecetas.php?op=obtener_receta',
        data: {'id': id},
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            rellenar(data);
        }
    });
});

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