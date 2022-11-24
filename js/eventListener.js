function restoreListener(tag) {
    const element = document.querySelector(`#${tagActive}-btn`);
    if (tag == 'profile') {
        profileBtn.classList.remove('fa-face-smile-wink');
        profileBtn.classList.add('fa-face-smile');
        document.querySelector('#circle-btn').style.color = 'grey';
        element.addEventListener('mouseenter', profileMouseEnter);
        element.addEventListener('mouseleave', profileMouseLeave);
    } else if (tag == 'bookmarks') {
        bookmarksBtn.classList.remove('fa-solid');
        bookmarksBtn.style.color = 'grey';
        element.addEventListener('mouseenter', bookmarksMouseEnter);
        element.addEventListener('mouseleave', bookmarksMouseLeave);
    } else if (tag == 'comments') {
        commentsBtn.classList.remove('fa-solid');
        commentsBtn.style.color = 'grey';
        element.addEventListener('mouseenter', commentsMouseEnter);
        element.addEventListener('mouseleave', commentsMouseLeave);
    } else {
        settingsBtn.style.color = 'grey';
        element.addEventListener('mouseenter', settingsMouseEnter);
        element.addEventListener('mouseleave', settingsMouseLeave);
    }
}

function profileMouseEnter(event) {
    profileBtn.classList.remove('fa-face-smile');
    profileBtn.classList.add('fa-face-smile-wink');
    document.querySelector('#circle-btn').style.color = 'purple';
}

function profileMouseLeave(event) {
    profileBtn.classList.remove('fa-face-smile-wink');
    profileBtn.classList.add('fa-face-smile');
    document.querySelector('#circle-btn').style.color = 'grey';
}

function profileClick(event) {
    if (tagActive != 'profile') {
        restoreListener(tagActive);
        document.querySelector('#circle-btn').style.color = 'purple';
        profileBtn.removeEventListener('mouseenter', profileMouseEnter);
        profileBtn.removeEventListener('mouseleave', profileMouseLeave);
        tagActive = 'profile';
        updateScreen(profile_screen);
    }
}

function bookmarksMouseEnter(event) {
    bookmarksBtn.classList.remove('fa-regular');
    bookmarksBtn.classList.add('fa-solid');
    bookmarksBtn.classList.add('fa-beat');
    bookmarksBtn.style.color = 'purple';
}

function bookmarksMouseLeave(event) {
    bookmarksBtn.classList.remove('fa-solid');
    bookmarksBtn.classList.add('fa-regular');
    bookmarksBtn.classList.remove('fa-beat');
    bookmarksBtn.style.color = 'grey';
}

function bookmarksClick(event) {
    if (tagActive != 'bookmarks') {
        bookmarksBtn.classList.add('fa-regular');
        bookmarksBtn.classList.remove('fa-beat');
        restoreListener(tagActive);
        bookmarksBtn.style.color = 'purple';
        bookmarksBtn.removeEventListener('mouseenter', bookmarksMouseEnter);
        bookmarksBtn.removeEventListener('mouseleave', bookmarksMouseLeave);
        tagActive = 'bookmarks';
        updateScreen(bookmarks_screen);
    }
}

function commentsMouseEnter(event) {
    commentsBtn.classList.remove('fa-regular');
    commentsBtn.classList.add('fa-solid');
    commentsBtn.classList.add('fa-beat');
    commentsBtn.style.color = 'purple';
}

function commentsMouseLeave(event) {
    commentsBtn.classList.remove('fa-solid');
    commentsBtn.classList.add('fa-regular');
    commentsBtn.classList.remove('fa-beat');
    commentsBtn.style.color = 'grey';
}

function commentsClick(event) {
    if (tagActive != 'comments') {
        commentsBtn.classList.add('fa-regular');
        commentsBtn.classList.remove('fa-beat');
        restoreListener(tagActive);
        commentsBtn.style.color = 'purple';
        commentsBtn.removeEventListener('mouseenter', commentsMouseEnter);
        commentsBtn.removeEventListener('mouseleave', commentsMouseLeave);
        tagActive = 'comments';
        updateScreen(comments_screen);
    }
}

function settingsMouseEnter(event) {
    settingsBtn.classList.add('fa-spin');
    settingsBtn.style.color = 'purple';
}

function settingsMouseLeave(event) {
    settingsBtn.classList.remove('fa-spin');
    settingsBtn.style.color = 'grey';
}

function settingsClick(event) {
    if (tagActive != 'settings') {
        settingsBtn.classList.remove('fa-spin');
        restoreListener(tagActive);
        settingsBtn.style.color = 'purple';
        settingsBtn.removeEventListener('mouseenter', settingsMouseEnter);
        settingsBtn.removeEventListener('mouseleave', settingsMouseLeave);
        tagActive = 'settings';
        updateScreen(settings_screen);
    }
}

var tagActive = 'profile';

const profileBtn = document.querySelector(`#profile-btn`);
const bookmarksBtn = document.querySelector(`#bookmarks-btn`);
const commentsBtn = document.querySelector(`#comments-btn`);
const settingsBtn = document.querySelector(`#settings-btn`);

profileBtn.addEventListener('mouseenter', profileMouseEnter);
// profileBtn.addEventListener('mouseleave', profileMouseLeave);
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