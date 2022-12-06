<link rel="preload" href="css/header.css" as="style">
<link rel="stylesheet" href="css/header.css">

<header>
    <a href="index.php">
        <img class="my-3" src="./assets/img/logo/logo.png" alt="Recette 2">
    </a>
    <nav>
        <a class="btn-nav" id="my-profile-btn">Mi perfil</a>
        <a href="faq.php" class="btn-nav">Preguntas frecuentes</a>
        <a href="soporte.php" class="btn-nav">Contacto</a>
    </nav>
</header>

<script>
    const myProfile = document.querySelector('#my-profile-btn')
    if (localStorage.getItem('logged') != null) {
        myProfile.innerHTML = 'Mi Perfil';
        myProfile.href = 'perfil.php'
    } else {
        myProfile.innerHTML = 'Iniciar Sesión';
        myProfile.href = 'logIn.php'
    }
</script>