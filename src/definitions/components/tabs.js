// let tabParent;
// let tabs = document.querySelectorAll('.tab-item');
// let bTabs = document.querySelectorAll('.browser .tab-menu .tab-item');
// const closes = document.querySelectorAll('.btn-close');
// const add = document.querySelector('.tab-plus');


// tabs.forEach(tab => {
//     tab.addEventListener('click', e => selectTab(e));
// })

// closes.forEach(btn => {
//     btn.addEventListener('click', e => removeTab(e));
// })

// if(add) {
//     add.addEventListener('click', e => addTab(e))
// }

// if(bTabs.length > 0) {
//     bTabs[0].classList.add('active');
// }


// setWidth();
// function selectTab({target}) {
//     tabParent = target.parentElement;
//     for (let t of tabParent.children) {
//         t.classList.remove('active')
//     }
//     target.classList.add('active')
// }

// function removeTab(e) {
//     const targetEl = e.target.parentElement;
//     if (targetEl.classList.contains('active')) {
//         const sibling = targetEl.previousSibling;
//         sibling.classList.add('active');
//     }
//     targetEl.remove();
//     setWidth();
//     e.stopPropagation();
// }

// function addTab() {
//     if(tabs.length >= 15) {
//         alert('허용 탭 초과');
//         return;
//     }
//     const newItem = createNewTab();
//     const closeBtn = createCloseButton();
//     // closeBtn.addEventListener('click', e => removeTab(e));
//     // newItem.addEventListener('click', e => selectTab(e));
//     newItem.append(closeBtn);
//     document.querySelector('.browser .tab-menu').append(newItem);
//     setWidth();
// }

// function createNewTab () {
//     const item = document.createElement('div');
//     const text = document.createElement('span');
//     item.classList.add('tab-item', 'tab');
//     text.classList.add('tabText', 'ellipsis');
//     text.textContent = 'new item';
//     item.append(text);
//     item.addEventListener('click', e => selectTab(e));
//     return item;
// }

// function createCloseButton () {
//     const item = document.createElement('div');
//     const icon = document.createElement('i');
//     item.classList.add('btn-close','ga-button','icon','tiny','round');
//     icon.classList.add('xi-close');
//     item.append(icon);
//     item.addEventListener('click', e => removeTab(e));
//     return item;
// }

// function setWidth() {
//     tabs = document.querySelectorAll('.browser .tab-menu .tab-item');
//     tabs.forEach(tab => {
//         tab.style.width = (100 / tabs.length) + '%';
//     })
// }

// class Browser {
//     constructor(options = {}) {
//
//     }
// }

class Tabs {
    #defaultOption = {
        activeTab: 0
    }
    constructor(root, options = {}) {
        this.root = root
        this.menu = this.root.querySelector('.tab-menu')
        this.items = this.menu.querySelectorAll('.tab-item') || null
        this.options = {...this.#defaultOption, ...options}
        this._actived = this.options.activeTab
        // this.contents = this.el.querySelector('.tab-contents')
        this.contents = this.root.querySelectorAll('[fr-tab-contents]')
        if (this.items) {
            this.items.forEach((tab, i) => {
                tab.addEventListener('click', e => this.selectTab(tab, i));
            })
        }
        this.render()
    }

    selectTab(item, index) {
        this._actived = index
        this.render()
    }

    setDisplayContents(item) {
        this.contents.forEach(cont => {
            // console.log(item, cont.dataset('tab'))
            cont.classList.remove('show')
            console.log(item, cont.getAttribute('fr-tab-contents'))
            if (item === cont.getAttribute('fr-tab-contents')) {
                cont.classList.add('show')
            }
        })
    }

    get actived () {
        return this._actived
    }

    set actived (value = 0) {
        this._actived = value
    }

    render () {

        this.items.forEach((t, i) => {
            t.classList.remove('active')
            if (i === this._actived) {
                t.classList.add('active')
                this.setDisplayContents(t.textContent)
            }
        })
        
    }
}

(function () {
    const tabsGroup = document.querySelectorAll('[fr-tabs]')
    tabsGroup.forEach(tabs => {
        const options = parseOptions(tabs.getAttribute('fr-tabs'))

        new Tabs(tabs, options);
    })
})()