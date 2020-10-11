/* eslint-disable func-names */

(function () {
  const gridView = document.querySelector('.js-grid-view');
  const gridRow = gridView.querySelectorAll('.row');
  const gridColumn = gridView.querySelectorAll('.column');
  const gridWidth = document.getElementById('js-grid-width');
  const gridGutter = document.getElementById('js-grid-gutter');
  const gridGutters = document.getElementById('js-grid-gutters');
  const gridExpand = document.getElementById('js-grid-expand');
  const gridCollapse = document.getElementById('js-grid-collapse');

  function columnGutter() {
    const gutter = gridGutter.value;
    gridColumn.forEach((el) => {
      const element = el;
      element.style.paddingLeft = `${gutter / 2}px`;
      element.style.paddingRight = `${gutter / 2}px`;
    }, this);
  }
  if ('ontouchstart' in document.documentElement) {
    document.documentElement.classList.add('touch');
  }
  if (gridView) {
    // WIDTH
    gridWidth.addEventListener('keyup', () => {
      const width = gridWidth.value;
      if (gridWidth.value.length > 2 && gridWidth.value > 319) {
        gridRow.forEach((el) => {
          const row = el;
          row.style.maxWidth = `${width}px`;
        }, this);
      }
    });

    // GUTTER
    gridGutter.addEventListener('keyup', columnGutter);

    // GUTTERS
    gridGutters.addEventListener('click', () => {
      if (gridGutters.checked) {
        gridGutter.removeAttribute('disabled');
        gridRow.forEach((el) => {
          el.classList.remove('collapse');
        }, this);
      }
      columnGutter();
    });

    // COLLAPSE
    gridCollapse.addEventListener('click', () => {
      if (gridCollapse.checked) {
        gridGutter.setAttribute('disabled', 'disabled');
        gridRow.forEach((el) => {
          el.classList.add('collapse');
        }, this);
        gridColumn.forEach((el) => {
          el.removeAttribute('style');
        });
      }
    });

    // EXPAND
    gridExpand.addEventListener('click', () => {
      if (gridExpand.checked) {
        gridRow.forEach((el) => {
          el.classList.add('expanded');
        }, this);
      } else {
        gridRow.forEach((el) => {
          el.classList.remove('expanded');
        });
      }
    });
  }
}());
