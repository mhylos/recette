<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recette</title>
    <meta name="description" content="Busca las mejores recetas de Chile">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <!-- Prefetch -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">

    <link rel="preload" href="css/index.css" as="style">
    <link rel="stylesheet" href="css/index.css">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />

</head>

<body>
    <?php include('includes/header.php') ?>
    <main>
        <section class="mb-3">
            <div class="swiper swipeRecetas">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <article class="receta-container">
                            <img class="overlay" src="assets/img/recetas/porotos.jpg" alt="">
                            <div class="info-receta">
                                <h3 class="nombre">Porotos</h3>
                                <div class="interacciones">
                                    <div>
                                        <i class="fa-solid fa-star"></i><span>4.8</span>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-comment"></i><span>10</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="swiper-slide">
                        <article class="receta-container">
                            <img class="overlay" src="assets/img/recetas/charquican.jpg" alt="">
                            <div class="info-receta">
                                <h3 class="nombre">Charquicán</h3>
                                <div class="interacciones">
                                    <div>
                                        <i class="fa-solid fa-star"></i><span>4.8</span>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-comment"></i><span>10</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="swiper-slide">
                        <article class="receta-container">
                            <img class="overlay" src="assets/img/recetas/sopaipillas.jpg" alt="">
                            <div class="info-receta">
                                <h3 class="nombre">Sopaipillas</h3>
                                <div class="interacciones">
                                    <div>
                                        <i class="fa-solid fa-star"></i><span>4.8</span>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-comment"></i><span>10</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>
        <aside>
            <h2>Categorias</h2>
            <div class="categorias">
                <div class="seccion">
                    <h3 class="nombre-categoria">Principal</h3>
                    <ul>
                        <li>Pastas</li>
                        <li>Mariscos</li>
                        <li>Rapidos</li>
                        <li>...</li>
                    </ul>
                </div>
                <div class="seccion">
                    <h3 class="nombre-categoria">Postres</h3>
                    <ul>
                        <li>Ensalada de frutas</li>
                        <li>Cheesecake</li>
                        <li>Tortas</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
        </aside>
    </main>
    <hr>
    <?php include('includes/footer.php') ?>

</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script type="module">
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
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
</script>

<script src="js/index.js"></script>

</html>