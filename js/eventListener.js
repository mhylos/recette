function restoreListener(tag) {
    const element = document.querySelector(`#${tagActive}-btn`);
    if (tag == 'profile') {
        profileBtn.classList.replace('fa-face-smile-wink', 'fa-face-smile');
        document.querySelector('#circle-btn').style.color = 'grey';
        element.addEventListener('mouseenter', profileMouseEnter);
        element.addEventListener('mouseleave', profileMouseLeave);
    } else if (tag == 'bookmarks') {
        bookmarksBtn.classList.add('fa-regular');
        bookmarksBtn.classList.remove('fa-solid');
        bookmarksBtn.style.color = 'grey';
        element.addEventListener('mouseenter', bookmarksMouseEnter);
        element.addEventListener('mouseleave', bookmarksMouseLeave);
    } else if (tag == 'comments') {
        commentsBtn.classList.add('fa-regular');
        commentsBtn.classList.remove('fa-solid');
        commentsBtn.style.color = 'grey';
        element.addEventListener('mouseenter', commentsMouseEnter);
        element.addEventListener('mouseleave', commentsMouseLeave);
    } else if (tag == 'settings') {
        settingsBtn.style.color = 'grey';
        element.addEventListener('mouseenter', settingsMouseEnter);
        element.addEventListener('mouseleave', settingsMouseLeave);
    } else {
        logoutBtn.style.color = 'grey';
        element.addEventListener('mouseenter', logoutMouseEnter);
        element.addEventListener('mouseleave', logoutMouseLeave);
    }
}

function profileMouseEnter() {
    profileBtn.classList.replace('fa-face-smile', 'fa-face-smile-wink');
    document.querySelector('#circle-btn').style.color = 'purple';
}

function profileMouseLeave() {
    profileBtn.classList.replace('fa-face-smile-wink', 'fa-face-smile');
    document.querySelector('#circle-btn').style.color = 'grey';
}

function profileClick() {
    if (tagActive != 'profile') {
        restoreListener(tagActive);
        document.querySelector('#circle-btn').style.color = 'purple';
        profileBtn.removeEventListener('mouseenter', profileMouseEnter);
        profileBtn.removeEventListener('mouseleave', profileMouseLeave);
        tagActive = 'profile';
        setProfileScreen();
    }
}

function bookmarksMouseEnter() {
    bookmarksBtn.classList.replace('fa-regular', 'fa-solid');
    bookmarksBtn.classList.add('fa-beat');
    bookmarksBtn.style.color = 'purple';
}

function bookmarksMouseLeave() {
    bookmarksBtn.classList.replace('fa-solid', 'fa-regular');
    bookmarksBtn.classList.remove('fa-beat');
    bookmarksBtn.style.color = 'grey';
}

function bookmarksClick() {
    if (tagActive != 'bookmarks') {
        // bookmarksBtn.classList.add('fa-regular');
        restoreListener(tagActive);
        bookmarksBtn.classList.remove('fa-beat');
        bookmarksBtn.style.color = 'purple';
        bookmarksBtn.removeEventListener('mouseenter', bookmarksMouseEnter);
        bookmarksBtn.removeEventListener('mouseleave', bookmarksMouseLeave);
        tagActive = 'bookmarks';
        setBookmarksScreen();
    }
}

function commentsMouseEnter() {
    commentsBtn.classList.replace('fa-regular', 'fa-solid');
    commentsBtn.classList.add('fa-beat');
    commentsBtn.style.color = 'purple';
}

function commentsMouseLeave() {
    commentsBtn.classList.replace('fa-solid', 'fa-regular');
    commentsBtn.classList.remove('fa-beat');
    commentsBtn.style.color = 'grey';
}

function commentsClick() {
    if (tagActive != 'comments') {
        // commentsBtn.classList.add('fa-regular');
        restoreListener(tagActive);
        commentsBtn.classList.remove('fa-beat');
        commentsBtn.style.color = 'purple';
        commentsBtn.removeEventListener('mouseenter', commentsMouseEnter);
        commentsBtn.removeEventListener('mouseleave', commentsMouseLeave);
        tagActive = 'comments';
        setCommentsScreen();
    }
}

function settingsMouseEnter() {
    settingsBtn.classList.add('fa-spin');
    settingsBtn.style.color = 'purple';
}

function settingsMouseLeave() {
    settingsBtn.classList.remove('fa-spin');
    settingsBtn.style.color = 'grey';
}

function settingsClick() {
    if (tagActive != 'settings') {
        restoreListener(tagActive);
        settingsBtn.classList.remove('fa-spin');
        settingsBtn.style.color = 'purple';
        settingsBtn.removeEventListener('mouseenter', settingsMouseEnter);
        settingsBtn.removeEventListener('mouseleave', settingsMouseLeave);
        tagActive = 'settings';
        setSettingsScreen();
    }
}

function logoutMouseEnter() {
    logoutBtn.classList.add('fa-beat');
    logoutBtn.style.color = 'purple';
}

function logoutMouseLeave() {
    logoutBtn.classList.remove('fa-beat');
    logoutBtn.style.color = 'grey';
}

function logoutClick() {
    if (tagActive != 'logout') {
        restoreListener(tagActive);
        logoutBtn.classList.remove('fa-beat');
        logoutBtn.style.color = 'purple';
        logoutBtn.removeEventListener('mouseenter', logoutMouseEnter);
        logoutBtn.removeEventListener('mouseleave', logoutMouseLeave);
        tagActive = 'logout';

        //volver al index
        location.href = 'index.php';
        //eliminar datos de localStorage
        localStorage.removeItem('remember');
        localStorage.removeItem('logged');
        localStorage.removeItem('user');
    }
}


var tagActive = 'profile';

const profileBtn = document.querySelector('#profile-btn');
const bookmarksBtn = document.querySelector('#bookmarks-btn');
const commentsBtn = document.querySelector('#comments-btn');
const settingsBtn = document.querySelector('#settings-btn');
const logoutBtn = document.querySelector('#logout-btn');


profileBtn.addEventListener('mouseenter', profileMouseEnter);
profileBtn.addEventListener('click', profileClick);

bookmarksBtn.addEventListener('mouseenter', bookmarksMouseEnter);
bookmarksBtn.addEventListener('mouseleave', bookmarksMouseLeave);
bookmarksBtn.addEventListener('click', bookmarksClick);

commentsBtn.addEventListener('mouseenter', commentsMouseEnter);
commentsBtn.addEventListener('mouseleave', commentsMouseLeave);
commentsBtn.addEventListener('click', commentsClick);

settingsBtn.addEventListener('mouseenter', settingsMouseEnter);
settingsBtn.addEventListener('mouseleave', settingsMouseLeave);
settingsBtn.addEventListener('click', settingsClick);

logoutBtn.addEventListener('mouseenter', logoutMouseEnter);
logoutBtn.addEventListener('mouseleave', logoutMouseLeave);
logoutBtn.addEventListener('click', logoutClick);