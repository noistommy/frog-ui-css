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

const accordion = document.querySelector('.ga-accordion');

if(accordion) {
    const list = accordion.querySelectorAll('.ga-panel');

    const setPanel = (index) => {
        list.forEach((c, i) => {
            if(i === index) c.classList.add('open')
            else c.classList.remove('open')
        })

    }
    list.forEach((p, i) => {
        p.addEventListener('click', () => {
            if (p.classList.contains('open')) {
                p.classList.remove('open')
            } else {
                setPanel(i)
            }
        })
    })
}
