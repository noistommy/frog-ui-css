(function () {
  const frSelects = document.querySelectorAll('[fr-select]');
  const frCollapses = document.querySelectorAll('[fr-collapse]');
  const tooltips = document.querySelectorAll('[fr-tooltip]')

  frSelects.forEach((select, i) => {
      const options = parseOptions(select.getAttribute('fr-select'))

      let selectEl = new Select(select, options)
      selectEl.selected = 0
  })
  frCollapses.forEach(collap => {
    const options = parseOptions(collap.getAttribute('fr-collapse'))
      const p = new Collapse(collap, options)
  })

  tooltips.forEach(tooltip => {
      const options = parseOptions(tooltip.getAttribute('fr-tooltip'))
      new Tooltip(tooltip, options)
  })
})()
