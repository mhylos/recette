<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile</title>
    <meta name="description" content="Busca las mejores recetas de Chile">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">

    <link rel="preload" href="css/profile.css" as="style">
    <link rel="stylesheet" href="css/profile.css">

    <link rel="preload" href="css/footer.css" as="style">
    <link rel="stylesheet" href="css/footer.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <?php include('includes/header.php') ?>

    <div class="row justify-content-evenly justify-content-lg-center m-0 py-4">

        <div class="col-2 col-lg-1 p-2 py-3 bg-white radius-10px me-lg-5 shadow" id="left-div" style="height: max-content;">
            <div class="center" id="profile-div">
                <div class="fa-stack fa-2x">
                    <i class="fa-solid fa-face-smile-wink fa-stack-1x fa-inverse pointer" style="font-size: 1.5em; --fa-stack-z-index: 2;" id="profile-btn"></i>
                    <i class="fa-solid fa-circle fa-stack-2x" id="circle-btn" style="--fa-stack-z-index: 1;"></i>
                </div>
            </div>

            <div class="pad-icons bd-radius center mt-4 mb-3 icon-color" id="bookmarks-div">
                <i class="fa-regular fa-bookmark fa-2x pointer" id="bookmarks-btn"></i>
            </div>

            <div class="pad-icons bd-radius center mt-4 mb-3 icon-color" id="comments-div">
                <i class="fa-regular fa-comments fa-2x pointer" id="comments-btn"></i>
            </div>

            <div class="pad-icons bd-radius center mt-4 mb-3 icon-color" id="settings-div">
                <i class="fa-solid fa-gear fa-2x fa-spin-reverse pointer" id="settings-btn"></i>
            </div>

            <div class="pad-icons bd-radius center mt-4 icon-color" id="logout-div">
                <i class="fa-solid fa-arrow-right-from-bracket fa-2x pointer" id="logout-btn"></i>
            </div>
        </div>

        <div class="col-8 col-lg-6 m-0 p-0 text-center" id="rightDiv">

        </div>

        <aside class="d-none d-lg-block col-lg-3 col-xxl-2 p-2 py-3 bg-white radius-10px ms-lg-5 text-center shadow" style="height: min-content;">
            <b>
                <p class="m-0">T O P</p>
                <p class="m-0">R E C E T A S</p>
            </b>
            <div class="my-2 w-100">
                <div id="top-recete-aside" class="carousel slide carousel-fade radius-10px" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#top-recete-aside" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#top-recete-aside" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#top-recete-aside" data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner" id="topRecete1">
                        <!-- <div class="carousel-item active" data-bs-interval="5000">
                            <img src="assets/img/recetas/charquican.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="charquican">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 1</h5>
                                <p class="fs-4">C H A R Q U I C A N</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/recetas/porotos.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="porotos">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 2</h5>
                                <p class="fs-4">P O R O T O S</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/recetas/sopaipillas.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="sopaipillas">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 3</h5>
                                <p class="fs-4">S O P A I P I L L A S</p>
                            </div>
                        </div> -->
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#top-recete-aside" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#top-recete-aside" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <hr class="mx-auto">

            <b>
                <p class="m-0">R E C E T A</p>
                <p class="m-0">A L E A T O R I A</p>
            </b>
            <div class="mt-2 w-100">
                <div id="random-recete-aside" class="carousel slide carousel-fade radius-10px" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#random-recete-aside" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#random-recete-aside" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#random-recete-aside" data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner" id="randomRecete1"> <!-- profile.js/setRandomRecete() --> </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#random-recete-aside" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#random-recete-aside" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <!-- <hr> -->
        </aside>

    </div>

    <div class="d-lg-none row justify-content-center mb-4 mx-auto bg-white w-75 radius-10px text-center shadow">
        <div class="col-6 p-2">
            <b>
                <p class="m-0">T O P</p>
                <p class="m-0">R E C E T A S</p>
            </b>
            <div class="mt-2 w-100">
                <div id="top-recete-bottom" class="carousel slide carousel-fade radius-10px" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#top-recete-bottom" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#top-recete-bottom" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#top-recete-bottom" data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner" id="topRecete2">
                        <!-- <div class="carousel-item active" data-bs-interval="5000">
                            <img src="assets/img/recetas/charquican.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="charquican">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 1</h5>
                                <p class="fs-4">C H A R Q U I C A N</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/recetas/porotos.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="porotos">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 2</h5>
                                <p class="fs-4">P O R O T O S</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/recetas/sopaipillas.jpg" class="img-fluid w-100 radius-10px" style="height: 200px;" alt="sopaipillas">
                            <div class="carousel-caption">
                                <h5 class="fs-2">T O P # 3</h5>
                                <p class="fs-4">S O P A I P I L L A S</p>
                            </div>
                        </div> -->
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#top-recete-bottom" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#top-recete-bottom" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-6 p-2">
            <b>
                <p class="m-0">R E C E T A</p>
                <p class="m-0">A L E A T O R I A</p>
            </b>
            <div class="mt-2 w-100">
                <div id="random-recete-bottom" class="carousel slide carousel-fade radius-10px" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#random-recete-bottom" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#random-recete-bottom" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#random-recete-bottom" data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner" id="randomRecete2"> <!-- profile.js/setRandomRecete() --> </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#random-recete-bottom" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#random-recete-bottom" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <?php include('includes/footer.php') ?>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="js/user.js"></script>
<script src="js/profile.js"></script>
<script src="js/eventListener.js"></script>

</html>