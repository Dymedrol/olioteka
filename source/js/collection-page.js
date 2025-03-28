export const initCollectionPage = () => {
  let filtersForm = $('#catalog-filter');

  if (!filtersForm.length) {
    return
  }

  const mainContainer = $('#MainContent');
  
  function renderCatalog(data) {
    const catalogId = $('#section-id').val();
    const catalogContainer = $('#shopify-section-' + catalogId);
    catalogContainer.empty();
    catalogContainer.html(data);
    setHandler();
    mainContainer.removeClass('loading');
  }
  
  function getProducts(url) {
    mainContainer.addClass('loading');
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        renderCatalog(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }


  function setHandler() {
    let filtersForm = $('#catalog-filter');

    filtersForm.find('input, select').on('change', function() {
      const collectionHandle = filtersForm.find('#collection-handle').val();
      const sectionId = filtersForm.find('#section-id').val();
      let selectedTag = filtersForm.find("input[name='tag']:checked").val();
      const selectedSorting = filtersForm.find("#SortBy").val();
      let filter = selectedTag == 'all' ? '' : '&filter.p.tag=' + selectedTag.replace(/ /g, '+');

      const url = `/collections/${collectionHandle}?section_id=${sectionId}${filter}&sort_by=${selectedSorting}`;

      getProducts(url);
    });
  }

  setHandler();

  // sorting

  $('body').on('click', function(event) {
    if ($(event.target).hasClass('olio-catalog-filters-sorting-selected')) {
      $('.olio-catalog-filters-sorting-options').toggle();
    }

    if (!$(event.target).closest('.olio-catalog-filters-sorting-wrapper').length) {
      $('.olio-catalog-filters-sorting-options').hide();
    }

    if ($(event.target).hasClass('olio-catalog-filters-sorting-option')) {
      const value = $(event.target).attr('data-value');
      $(".olio-catalog-filters-sorting-wrapper").find('select').val(value).change();
    }
  });

  // Находим элемент с классом olio-catalog-categories__item_active
  var activeItem = document.querySelector('.olio-catalog-categories__item_active');

  // Проверяем, существует ли этот элемент
  if (activeItem) {
    // Прокручиваем контейнер до активного элемента
    activeItem.scrollIntoView({block: 'nearest'});
  }


}

