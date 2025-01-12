(() => {
    window.onload = () => {
      let header__burger = document.querySelector('.header__burger');
      let header__menu = document.querySelector('.header__menu');
      let filter = document.querySelector('.filter')
      let header__filter = document.querySelector('.header__filter')
      let body = document.querySelector('body');
      header__burger.addEventListener('click', (e)=> {
        header__burger.classList.toggle('active');
        header__menu.classList.toggle('active');
        header__filter.classList.toggle('delete-element');
        body.classList.toggle('lock');
      })


      header__filter.addEventListener('click', (e)=> {
        header__filter.classList.toggle('filter-replace');
        filter.classList.toggle('filter-swipe');
        header__burger.classList.toggle('delete-element');
        body.classList.toggle('lock');
      })
    }
  })();