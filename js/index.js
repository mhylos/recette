const NUMBER_OF_ELEMENTS_PER_PAGE = 1;
var pagination;

$(document).ready(function () {
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_latest',
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            data.forEach(receta => {
                insertIntoSwiper(receta);
                insertResult(receta);
            });
            initSwiper();
            addSwiperRecetaListeners();
            addResultsListeners();
        }
    });

    //setDefaultSearchResults()
    setAllCategorias()
    setSearchListener()
});

class Pagination {
    constructor(data) {
        this.current_page = 0
        this.data = data
        this.number_elements = data.length
        this.number_of_pages = Math.ceil(this.number_elements/NUMBER_OF_ELEMENTS_PER_PAGE)
    }

    changePage(page){
        const rango_inferior = page * this.number_elements;
        const rango_superior = page * this.number_elements + NUMBER_OF_ELEMENTS_PER_PAGE;
        for (let i = rango_inferior; i < rango_superior; i++) {
            console.log(data[i]);
            insertResult(data[i])
        }
    }

    insertResult(receta) {
        jQresultados = $('.search-results')
        jQresultados.empty()
        html = `<div class="card receta" id="${receta.receta_id}">
                    <img class="card-img-top" src="assets/img/recetas/${receta.img_name}">
                    <div class="card-body">
                        <h5 class="card-title">${receta.nombre}</h5>
                        <p class="card-text">${receta.descripcion}</p>
                    </div>
                </div>`
        jQresultados.append(html)
    }

    createPagination(div){
        div.empty()
        html = `<ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" disabled>
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                    </li>`
                    
        for (let i = 0; i < this.number_of_pages; i++){
            html += `<li class="page-item"><a class="page-link">${i}</a></li>`
        }

        html +=`<li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                    </a>
                </li>
                </ul>`

        div.append(html)      
        
        this.createListeners()
    }

    createListeners(){
        $('.page-link').on('click', function (param) {
            
        });
    }
}

function setDefaultSearchResults(){
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_latest',
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            data.forEach(receta => {
                insertIntoSwiper(receta);
            });
            initSwiper();
            addSwiperRecetaListeners();
        }
    });
}

function addSwiperRecetaListeners(){
    $('.receta-container').click(function(){
        window.location = 'receta.php?id='+$(this).attr('id');
    });
}

function addResultsListeners(){
    $('.receta').click(function(){
        window.location = 'receta.php?id='+$(this).attr('id');
    });
}

function setSearchListener(){
    $('#search').on('click', function(){
        texto = $('#buscador').val()
        if (texto == '') return null
        searchByName(texto)
    })
}

function searchByName(nombre){
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_receta_by_name',
        type:'POST',
        data: {'nombre': nombre},
        success: function(response){
            if (response != 0 && response != 'sin resultados'){
                cleanResultContainer()
                data = $.parseJSON(response);
                data.forEach(receta => {
                    insertResult(receta)
                });
                addResultsListeners()
            }
        }
    });
}

function noResults(){
    html = `<div class="alert text-center">
                <strong>Sin resultados</strong><br>
                ¡Comprueba que lo que has escrito es correcto!
            </div>`
    $('.search-results').append(html)
}

function getRecetaScore(id) {
    return $.ajax({
        url:'controller/CtrlComments.php?op=get_avg_score_of_recipe',
        data: {'receta_id': id},
        type:'POST',
        async: false
    });
}

function getCantidadComments(id) {
    return $.ajax({
        url:'controller/CtrlComments.php?op=get_quantity_comments_of_recipe',
        data: {'receta_id': id},
        type:'POST',
        async: false
    });
}

function insertIntoSwiper(data){
    receta_id = data['receta_id'],
    nombre = data['nombre']
    img_name = data['img_name'];
    score = getRecetaScore(receta_id).responseText;
    cantidad_comments = getCantidadComments(receta_id).responseText;
    swiper = $('.swiper-wrapper');
    var html = `<div class="swiper-slide">
                <article class="receta-container" id="${receta_id}">
                    <img class="overlay" src="assets/img/recetas/${img_name}" alt="">
                    <div class="info-receta">
                        <h3 class="nombre">${nombre}</h3>
                        <div class="interacciones">
                            <div>
                                <i class="fa-solid fa-star"></i><span>${score}</span>
                            </div>
                            <div>
                                <i class="fa-solid fa-comment"></i><span>${cantidad_comments}</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>`

    swiper.append(html)
}

function setAllCategorias(){
    lista = $('.list-group')
    var html = ''
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_categories',
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            data.forEach(categoria => {
                html += `<li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${categoria.nombre}</div>
                            </div>
                            <span class="badge rounded-pill">${categoria.cantidad}</span>
                        </li>`
            });
            lista.append(html)
            addSelectCategoryListener()
        }
    });    
}

function insertResult(receta) {
    jQresultados = $('.search-results')
    html = `<div class="card receta" id="${receta.receta_id}">
                <img class="card-img-top" src="assets/img/recetas/${receta.img_name}">
                <div class="card-body">
                    <h5 class="card-title">${receta.nombre}</h5>
                    <p class="card-text">${receta.descripcion}</p>
                </div>
            </div>`
    jQresultados.append(html)
}

function cleanResultContainer() {
    jQresultados = $('.search-results')
    jQresultados.empty()
}

// function searchByCategory(categories) {
//     $.ajax({
//         url:'controller/CtrlRecetas.php?op=get_receta_by_category',
//         type:'POST',
//         data: {'selected_categories': categories},
//         success: function(response){
//             if (response != 0){
//                 cleanResultContainer()
//                 data = $.parseJSON(response);
//                 data.forEach(receta => {
//                     insertResult(receta)
//                 });
//                 addResultsListeners()
//             }
//         }
//     });
// }

function searchByCategory(categories) {
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_receta_by_category',
        type:'POST',
        data: {'selected_categories': categories},
        success: function(response){
            if (response != 0){
                cleanResultContainer()
                data = $.parseJSON(response);
                pagination = new Pagination(data);
                pagination.createPagination($('.pagination'))
                addResultsListeners()
            }
        }
    });
}

function addSelectCategoryListener() {
    $('.list-group-item').on('click', function(){
        let selected_categories = []
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
        $('.list-group').find('.selected').each(function (index, list_item) {
            selected_categories.push($(list_item).children().children().text())
        });
        searchByCategory(selected_categories)
    })
    
}



function initSwiper() {
    var swiper = new Swiper(".swipeRecetas", {
        speed: 400,
        spaceBetween: 50,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 768
            768: {
                slidesPerView: "auto",
                slidesPerView: 2,
                spaceBetweenSlides: 50
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: "auto",
                slidesPerView: 3,
                spaceBetweenSlides: 50
            }
        }
    });
}