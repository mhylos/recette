$(document).ready(function () {
    $.ajax({
        url:'controller/CtrlRecetas.php?op=get_latest',
        type:'POST',
        success: function(response){
            data = $.parseJSON(response);
            data.forEach(receta => {
                insertIntoSwiper(receta);
            });
            initSwiper();
        }
    });
});

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
    var html = `<div class="swiper-slide">` +
            `    <article class="receta-container">` +
            `        <img class="overlay" src="assets/img/recetas/${img_name}" alt="">` +
            `        <div class="info-receta">` +
            `            <h3 class="nombre">${nombre}</h3>` +
            `            <div class="interacciones">` +
            `                <div>` +
            `                    <i class="fa-solid fa-star"></i><span>${score}</span>` +
            `                </div>` +
            `                <div>` +
            `                    <i class="fa-solid fa-comment"></i><span>${cantidad_comments}</span>` +
            `                </div>` +
            `            </div>` +
            `        </div>` +
            `    </article>` +
            `</div>`
    
    swiper.append(html)
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

        on: {
            init: function () {
              console.log('swiper initialized');
            },
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