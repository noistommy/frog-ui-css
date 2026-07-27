(function () {
  const frSelects = document.querySelectorAll('[fr-select]');
  frSelects.forEach((select, i) => {
      const options = parseOptions(select.getAttribute('fr-select'))

      let selectEl = new Select(select, options)
      selectEl.selected = 0
  })
})()