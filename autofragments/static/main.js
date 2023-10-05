function addFragmentClasses(mdCell) {
  const html = mdCell.element.find('div.text_cell_render')

  html
    .children() // top-level elements in cell
    .slice(1) // don't fragment first thing in cell
    .not('ul, ol') // avoid needing to double-tap next slide for lists
    .addClass('fragment')

  // handle nested list elements
  html.find('li').addClass('fragment')
}

define([
  'base/js/namespace',
  'notebook/js/textcell',
  'base/js/events',
], function (Jupyter, textcell, events) {
  var load_ipython_extension = function () {
    Jupyter.notebook
      .get_cells()
      .filter((cell) => cell instanceof textcell.MarkdownCell)
      .slice(1) // don't fragment first slide
      .forEach(addFragmentClasses)

    events.on('rendered.MarkdownCell', function (ev, payload) {
      addFragmentClasses(payload.cell)
    })
  }

  return {
    load_ipython_extension: load_ipython_extension,
  }
})
