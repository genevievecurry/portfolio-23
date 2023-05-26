var Shuffle = window.Shuffle;

class GalleryList {
  constructor(element) {
    this.element = element;
    this.shuffle = new Shuffle(element, {
      itemSelector: '.gallery-link'
    });

    this.initShuffleEventListeners();
    this._activeFilters = [];
    this.insertFilterButtons();
  }

  initShuffleEventListeners() {
    this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
      document.querySelector('#gallery-list').classList.remove('opacity-0');
      document.querySelector('.shuffle-load').classList.add('hidden');
    });

    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {});
  }

  insertFilterButtons() {
    const tagOptions = document.querySelector('.filter-tags');

    if (!tagOptions) return;

    const filterButtons = Array.from(tagOptions.children);
    const onClick = this._handleFilterButtonClick.bind(this);

    filterButtons.forEach((button) => {
      button.addEventListener('click', onClick, false);
    });
  }

  _handleFilterButtonClick(event) {
    const filterButton = event.currentTarget;
    const isActive = filterButton.classList.contains('active');
    const filterButtonGroup = filterButton.getAttribute('data-group');

    this._removeActiveClasses(filterButton.parentNode);

    let filterGroup;

    if (isActive) {
      filterButton.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      filterButton.classList.add('active');
      filterGroup = filterButtonGroup;
    }

    this.shuffle.filter(filterGroup);
  }

  _removeActiveClasses(parent) {
    const { children } = parent;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.gallery = new GalleryList(document.getElementById('gallery-list'));
});
