<link rel="preload" href="css/header.css" as="style">
<link rel="stylesheet" href="css/header.css">

<header class="d-flex flex-column flex-xl-row justify-content-between align-items-center shadow pe-xl-4">
    <a href="index.php">
        <img class="my-3" src="./assets/img/logo/logo.png" alt="Recette 2">
    </a>
    <nav class="mb-2">
        <div class="d-flex gap-2" id="btns">
            <button class="btn rounded-pill fs-5 d-flex align-items-center" >
                <i class="fa-solid fa-circle-user fs-2"></i>
                <span id="my-profile-btn"></span>
            </button> 
            <button id="btnLogOut" class="d-none btn rounded-pill fs-5 d-flex align-items-center">
                <i class="fa-solid fa-arrow-right-from-bracket fs-2"></i>
                <span>Salir</span>
            </button>      
        </div>
    </nav>
</header>

<script>


    if (['/recette/index.php', '/recette/receta.php'].includes(location.pathname)) {
        const myProfile = document.querySelector('#my-profile-btn');
        const logOut = document.querySelector('#btnLogOut');
        if (localStorage.getItem('logged')) {
            myProfile.innerHTML = 'Mi Perfil';
            myProfile.addEventListener("click", () => {
                location.href = 'perfil.php';
            });
            logOut.classList.remove('d-none')
            logOut.addEventListener("click", () => {
                location.href = 'index.php';
                localStorage.removeItem('remember');
                localStorage.removeItem('logged');
                localStorage.removeItem('user');
            });
        } else {
            myProfile.innerHTML = 'Iniciar Sesión';
            myProfile.addEventListener("click", () => {
                location.href = 'logIn.php'
            });
            myProfile.href = 'logIn.php'
        }
    } else {
        document.querySelector('#btns').classList.add('d-none');
    }
</script>