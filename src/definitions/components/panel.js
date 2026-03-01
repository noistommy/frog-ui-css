const panel = document.querySelector('.ga-panel.collapse');

const content = document.querySelector('.content-wrapper')

if(panel) {
    const toggle = panel.querySelector('.panel-header');
    toggle.addEventListener('click', e => {
        const isOpen = panel.classList.contains('open');
        if (isOpen) {
            panel.classList.remove('open')
        } else {
            panel.classList.add('open')
        }
    })
}
