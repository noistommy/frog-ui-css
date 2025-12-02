const selectBoxes = document.querySelectorAll('.ga-select-box');

const cssSelector = document.getElementById('css-selector');
const selectedCss = cssSelector.querySelector('input');
const selectMenu = cssSelector.querySelector('.ga-list');


let targetElement;

let selectedItem = 'Frog UI'

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

console.log(cssSelector, selectedCss)

if (cssSelector) {
    selectedCss.value = selectedItem;

    const items = selectMenu.querySelectorAll('.item')

    selectMenu.addEventListener('click', e => {
        selectedItem = e.target.textContent
        selectedCss.value = selectedItem;
        items.forEach(item => {
            console.log(item.textContent)
            item.classList.remove('selected')
            if( item.textContent === selectedItem) {
                item.classList.add('selected')
            }
        })
    })
}
