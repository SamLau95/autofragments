function addFragmentClasses(mdCell) {
  const html = mdCell.element.find('div.text_cell_render')

  // add fragment class to all top-level elements except the first one and uls
  html.children().slice(1).not('ul, ol').addClass('fragment')

  // make sure nested list elements get fragment too
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
      .forEach(addFragmentClasses)

    events.on('rendered.MarkdownCell', function (ev, payload) {
      addFragmentClasses(payload.cell)
    })
  }

  return {
    load_ipython_extension: load_ipython_extension,
  }
})
