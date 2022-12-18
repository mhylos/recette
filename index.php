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
        <section class="my-3 shadow">
            <div class="swiper swipeRecetas">
                <div class="swiper-wrapper">
                    <!--RESULTADOS-->
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>
        <section class="shadow">
            <h2>Busqueda</h2>
            <div class="search-container">
                <div class="categories-container row">
                    <ul class="list-group col-md-5">
                        <!--RESULTADOS-->
                    </ul>
                    <div class="col-md-7 pt-1 pt-md-0">
                        <div class="input-group rounded gap-1">
                            <input type="search" class="form-control rounded-pill" placeholder="Buscar" id="buscador" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text rounded-circle" id="search">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <div class="paginate my-2">
                            <div class="items search-results">

                            </div>
                            <div class="pager">
                                <div class="firstPage d-inline">&laquo;</div>
                                <div class="previousPage d-inline">&lsaquo;</div>
                                <div class="pageNumbers d-inline"></div>
                                <div class="nextPage d-inline">&rsaquo;</div>
                                <div class="lastPage d-inline">&raquo;</div>
                            </div>
                            <!--RESULTADOS-->
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        <hr>
    </main>
    
    <?php include('includes/footer.php') ?>

</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script src="https://cdn.rawgit.com/mrk-j/paginga/v0.8.1/paginga.jquery.min.js"></script>

<script src="js/index.js"></script>

</html>