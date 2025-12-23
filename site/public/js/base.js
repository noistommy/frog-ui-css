// const modeMatch = window.matchMedia('(prefers-color-scheme: dark)')

// if (modeMatch.matches) {
//     document.documentElement.classList.add('dark-mode')
// } else {
//     document.documentElement.classList.add('light-mode')
// }
const sideMenu = document.querySelector('.side-menu');
const toggleBtn = document.querySelector('.toggle-mode');
const changeBtn = document.querySelector('.change-mode');
const showMenu = document.querySelector('.show-menu');
const showMore = document.querySelector('.more')
const mainContainer = document.querySelector('.main');

function toggleMode()  {
    if (document.documentElement.classList.contains('light-mode')) {
        document.documentElement.classList.remove('light-mode')
        document.documentElement.classList.add('dark-mode') 
        toggleBtn.innerHTML = '<i class="xi-sun"></i>'
        changeBtn.innerHTML = '<i class="icon left xi-sun"></i> Light Mode'
        sessionStorage.setItem('theme-mode', 'dark')
    } else if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode')
        document.documentElement.classList.add('light-mode')
        toggleBtn.innerHTML = '<i class="xi-moon"></i>'
        changeBtn.innerHTML = '<i class="icon left xi-moon"></i> Dark Mode'
        sessionStorage.setItem('theme-mode', 'light')
    }
}

function setTheme () {
    const mode = sessionStorage.getItem('theme-mode');
    if(mode) {
        document.documentElement.classList.add(`${mode}-mode`)
        toggleBtn.innerHTML = `<i class="xi-${mode === "dark" ? "sun" : "moon"}"></i>`
    } else {
        sessionStorage.setItem('theme-mode', window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light')
    }
}
function toggleMore () {
    const target = document.querySelector('.buttons-part');
   if(target.classList.contains('on')) {
        target.classList.remove('on')
   } else {
        target.classList.add('on')
   }
}

setTheme()

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleMode())
}
if (changeBtn) {
    changeBtn.addEventListener('click', () => toggleMode())
}
if (showMore) {
    showMore.addEventListener('click', () => toggleMore())
}

if(showMenu) {
    showMenu.addEventListener('click', () => {
        let isOpen = mainContainer.classList.contains('open')
        if (isOpen) {
            mainContainer.classList.remove('open')
        } else {
            mainContainer.classList.add('open')
        }
    })   
}

// Locale 변경 버튼 동적 생성
function initLocaleButton() {
    const localeContainer = document.querySelector('.locale');
    
    if (!localeContainer) return;

    // 쿠키에서 현재 locale 가져오기
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const currentLocale = getCookie('lang') || 'ko';
    const currentPath = window.location.pathname;
    
    const button = localeContainer.querySelector('.ga-button');
    // 버튼 생성
    const link = document.createElement('a');
    link.className = 'link';
    
    if (currentLocale === 'ko') {
        // button.textContent = '한국어 -> ENGLISH';
        button.textContent = '한';
        link.href = `/en${currentPath}`;
    } else {
        button.textContent = 'A';
        // button.textContent = 'ENGLISH -> 한국어';
        link.href = `/ko${currentPath}`;
    }
    
    button.appendChild(link);
    localeContainer.appendChild(button);
}

// DOMContentLoaded 시 locale 버튼 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLocaleButton);
} else {
    initLocaleButton();
}
