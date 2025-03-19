(() => {
    window.onload = () => {
      let header__burger = document.querySelector('.header__burger');
      let header__menu = document.querySelector('.header__menu');
      let filter = document.querySelector('.filter')
      let header__filter = document.querySelector('.header__filter')
      let header__saved = document.querySelector('.header__cart')
      let body = document.querySelector('body');
      let header__search = document.querySelector('.header__search')
      let header__right = document.querySelector('.header__right')
      let header__list = document.querySelector('.header__list')
      header__burger.addEventListener('click', (e)=> {
        header__right.classList.toggle('right')
        header__burger.classList.toggle('active');
        header__list.classList.toggle('active');
        header__menu.classList.toggle('active');
        header__search.classList.toggle('delete-element')
        header__filter.classList.toggle('delete-element');
        body.classList.toggle('lock');

      })


      header__filter.addEventListener('click', (e)=> {
        header__right.classList.toggle('right')
        header__filter.classList.toggle('filter-replace');
        filter.classList.toggle('filter-swipe');
        header__saved.classList.toggle('delete-element');
        header__burger.classList.toggle('delete-element');
        body.classList.toggle('lock');
        header__search.classList.toggle('delete-element')
      })
    }
  })();