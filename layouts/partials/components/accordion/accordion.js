import Handorgel from 'handorgel';

(function accordionJS() {
  const accordions = Array.from(document.querySelectorAll('.handorgel'));
  accordions.forEach((accordionSingleElement) => {
    const accordion = new Handorgel(accordionSingleElement, { // eslint-disable-line no-unused-vars
      initialOpenTransition: false,
    });

    const elementToggle = accordionSingleElement.previousElementSibling.querySelector('.js-accordion-toggle');

    if (elementToggle) {
      elementToggle.addEventListener('click', () => {
        const elementOpenAll = elementToggle.querySelector('.js-accordion-open-all');
        const elementCloseAll = elementToggle.querySelector('.js-accordion-hide-all');

        if (elementOpenAll.classList.contains('hidden')) {
          accordion.folds.forEach((fold) => {
            fold.close();
          });
          elementOpenAll.classList.remove('hidden');
          elementCloseAll.classList.add('hidden');
        } else if (elementCloseAll.classList.contains('hidden')) {
          accordion.folds.forEach((fold) => {
            fold.open();
          });
          elementOpenAll.classList.add('hidden');
          elementCloseAll.classList.remove('hidden');
        }
      });
    }
  });
}());
