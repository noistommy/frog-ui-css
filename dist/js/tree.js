const expendIcon = 'xi-caret-down-min'
const folderIcon = 'xi-folder'
const folderOpenIcon = 'xi-folder-o'
const fileIcon = 'xi-file-o'

class TreeList {
  constructor(tree) {
    this.tree = tree
    this.type = 'tree'
  }

  toggleNode(node) {
    const el = node.parentNode
    const isShow = el.getAttribute('aria-show')
    el.setAttribute('aria-show', isShow === 'true' ? 'false' : 'true')
    if (this.type === 'file') {

      node.querySelector('.icon').classList.toggle(isShow ? folderOpenIcon : folderIcon)
    }
  }

  initNode(node) {
    const hasIcon = node.querySelector('.icon')

    const hasChildren = Boolean(node.nextSibling)
    if(!hasIcon) {
      const expendIcon = this.setIcon(hasChildren)
      node.prepend(expendIcon)
    }
  }

  setIcon(hasChildren = false) {
    const icon = document.createElement('i')
    icon.classList.add('icon')
    if (this.type === 'file') {
      if (hasChildren) {
        icon.classList.add(folderIcon)
      } else {
        icon.classList.add(fileIcon)
      }
    } else {
      icon.classList.add('expend-icon')
      if (hasChildren) {
        icon.classList.add(expendIcon)
      }
    }

    return icon
  }

  init() {
    if (!this.tree) return

    const nodes = this.tree.querySelectorAll('.node-title')
    this.type = this.tree.classList.contains('files') ? 'file' : 'tree'

    nodes.forEach((node) => {
      this.initNode(node)
      node.addEventListener('click', () => this.toggleNode(node))
    })
  }

  static initAll(selector = '.ga-tree-list') {
    const treeList = document.querySelectorAll(selector)
    treeList.forEach((tree) => {
      const treeInstance = new TreeList(tree)
      treeInstance.init()
    })
  }
}

TreeList.initAll()

