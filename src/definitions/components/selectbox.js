const selectBoxes = document.querySelectorAll('.ga-select-box');

const cssSelector = document.getElementById('css-selector');
const selectedCss = cssSelector?.querySelector('input');
const selectMenu = cssSelector?.querySelector('.ga-list');


let targetElement;

const cssFile = localStorage.getItem('selected-css-file')
let cssFileName;

if (cssFile === '/gcloud.css') {
    cssFileName = 'Theme B'
} else if (cssFile === '/gcloud_p.css') {
    cssFileName = 'Theme C'
} else {
    cssFileName = 'Theme A'
}

let selectedItem = cssFileName;

setSelected()

selectBoxes.forEach(elem => {
    document.addEventListener('click', e => {
        if(elem.contains(e.target)) {
            elem.classList.toggle('open')
            // toggleSelectBox(elem)
        } else {
            elem.classList.remove('open')
        }
    })
})

function toggleSelectBox(elem) {
    elem.classList.toggle('open')
    if(selectedItem) {
        elem.querySelector('input').value = selectedItem
    }
}


if (cssSelector) {
    selectedCss.value = selectedItem;

    selectMenu.addEventListener('click', e => {
        selectedItem = e.target.textContent
        selectedCss.value = selectedItem;
        setSelected()
    })

}
function setSelected() {
    const items = selectMenu.querySelectorAll('.item')
    items.forEach(item => {
        item.classList.remove('selected')
        if( item.textContent === selectedCss.value) {
            item.classList.add('selected')
        }
    })
}
