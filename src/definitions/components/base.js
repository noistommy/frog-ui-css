// const modeMatch = window.matchMedia('(prefers-color-scheme: dark)')

// if (modeMatch.matches) {
//     document.documentElement.classList.add('dark-mode')
// } else {
//     document.documentElement.classList.add('light-mode')
// }
const sideMenu = document.querySelector('.side-menu');
const toggleBtn = document.querySelector('.toggle-mode');
const showMenu = document.querySelector('.show-menu');
const mainContainer = document.querySelector('.main');
function toggleMode()  {
    if (document.documentElement.classList.contains('light-mode')) {
        document.documentElement.classList.remove('light-mode')
        document.documentElement.classList.add('dark-mode') 
        toggleBtn.innerHTML = '<i class="xi-sun"></i>'
        sessionStorage.setItem('theme-mode', 'dark')
    } else if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode')
        document.documentElement.classList.add('light-mode')
        toggleBtn.innerHTML = '<i class="xi-moon"></i>'
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

setTheme()

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleMode())
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
