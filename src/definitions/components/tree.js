const treeList = document.querySelectorAll('.ga-tree-list');
const nodes = document.querySelectorAll('.node')



const toggleNode = (node) => {
  const el = node.parentNode
  let isShow = el.getAttribute('aria-show')
  el.setAttribute('aria-show', isShow === 'true' ? 'false' : 'true')
}

const initNode = (node) => {
  const children = node.nextSibling ? true : false
  const expendIcon = setIcon(children)
  const nodeTitle = node.children[0]
  nodeTitle.prepend(expendIcon)
}

const setIcon = (hasChildren = false, type) => {
  const icon = document.createElement('i')
  icon.classList.add('icon', 'expend-icon')

  if (hasChildren) {
    icon.classList.add('xi-caret-down-min')
  }
  return icon
}

const initTree = (tree) => {
  const nodes = tree.querySelectorAll('.node')

  nodes.forEach(node => {
    initNode(node)
    node.addEventListener('click', () => toggleNode(node))
  })

}

initTree(treeList[0])



