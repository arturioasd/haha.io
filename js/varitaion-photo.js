const mainPhoto = document.querySelector("#main-photo")
const productsImage = document.querySelectorAll('.product__mini__image')
const productMiniImages = document.querySelector('.product__mini__images')
 
mainPhoto.src = productsImage[0].firstElementChild.src
productsImage[0].classList.add('active')

productMiniImages.addEventListener('click',(event) => {

    if (event.target.tagName == 'IMG'){
        mainPhoto.src = event.target.src
        productsImage.forEach(item =>{ 
            item.addEventListener('click', (e) =>{
            productsImage.forEach(el=>{ el.classList.remove('active'); });
            item.classList.add('active')})})
    }
})
