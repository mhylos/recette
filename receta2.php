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

    <link rel="preload" href="css/receta2.css" as="style">
    <link rel="stylesheet" href="css/receta2.css">

    <link rel="preload" href="css/footer.css" as="style">
    <link rel="stylesheet" href="css/footer.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <?php include('includes/header.php') ?>

    <main class="m-1">
        <div class="receta-container">

            <div class="d-grid my-2">
                <div class="row d-flex align-items-end">
                    <h2 class="titulo-receta col-10 bold morado-1">Lorem ipsum dolor sit amet</h2>
                    <div class="col-2 ">
                        <i class="fa-solid fa-star"></i><b>5/5</b>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body border rounded-2 shadow mx-xl-5 my-3">
                <div class="row">
                    <div class="col-7">
                        <img src="assets/img/recetas/charquican.jpg" alt="">
                    </div>
                    <div class="col-5 info-receta py-2">
                        <i class="fa-solid fa-chevron-right"></i> <span> Dificultad: <b>Facil</b></span>
                        <br>
                        <i class="fa-solid fa-chevron-right"></i> <span>Preparación: <b>123 minutos</b></span>
                        <br>
                        <i class="fa-solid fa-chevron-right"></i> <span>Dosis: <b>1 persona</b></span>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow">
                <h2 class="bold morado-1">Ingredientes</h2>
                <hr class="w-25 ms-2">
                <div class="row">
                    <div class="col-1"><i class="fa-solid fa-check"></i></div>
                    <div class="col-11">Lorem ipsum dolor sit amet</div>
                </div>
                <div class="row">
                    <div class="col-1"><i class="fa-solid fa-check"></i></div>
                    <div class="col-11">Lorem ipsum dolor sit amet</div>
                </div>
                <div class="row">
                    <div class="col-1"><i class="fa-solid fa-check"></i></div>
                    <div class="col-11">Lorem ipsum dolor sit amet</div>
                </div>
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow">
                <h2 class="bold morado-1">Preparación</h2>
                <hr class="w-25 ms-2">
                <div>
                    <ol class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h3 class="bold">Paso 1:</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </li>
                        <li class="list-group-item">
                            <h3 class="bold">Paso 2:</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </li>
                        </ul>
                </div>
            </div>
        </div>
    </main>

    <?php include('includes/footer.php') ?>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

<script src="js/index.js"></script>

</html>