
$(document).ready(function() { 
    // mobile menu
    const headerBtn = document.querySelector('.js-header-menu-btn'); // кнопка открытия мобильного меню сбоку 
    const headerMenu = document.querySelector('.js-header-menu') ;
    const headerWrapper = document.querySelector('.js-menu-wrapper');

    headerBtn.addEventListener('click', openMenu); 
    headerWrapper.addEventListener('click', closeMenu);

    function openMenu() { 
        headerMenu.classList.add('mobile-menu-open') 
        headerWrapper.classList.add('show') 
        document.body.style.overflow = 'hidden'
    }
    function closeMenu() {
        headerMenu.classList.remove('mobile-menu-open') 
        headerWrapper.classList.remove('show') 
        document.body.style.overflow = '' 
    }
})




$(document).ready(function(){
    $('.js-slider-container').slick({
        infinite: true,
        slidesToShow: 1, 
        prevArrow: $('.js-slider-prev'),
        nextArrow: $('.js-slider-next'),
        dots: true,
        fade: true, 
        cssEase: 'linear',
        speed: 800,
        customPaging: function(slick,index) {
            const numZero = index >= 9 ? '' : '0';   
            return "<a  > ".concat(numZero) + (index + 1) + '</a>';
        }, 
        appendDots: $('.js-custom-dots-container'),  
    });
    $('.js-product-slider').slick({
        infinite: false,
        slidesToShow: 4, 
        slidesToScroll: 3,
        prevArrow: $('.js-product-prev'),
        nextArrow: $('.js-product-next'),
        dots: true,  
        customPaging: function(slick,index) {  
            return convertToRoman(index +1);
        }, 
        appendDots: $('.js-product-number'),  
        responsive: [
            {
                breakpoint: 1600,
                settings: {   
                    slidesToShow: 3, 
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {   
                    slidesToShow: 2, 
                    slidesToScroll: 1, 
                }
            },
            {
                breakpoint: 400,
                settings: {   
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

// for product slider pagination
function convertToRoman(number) {
    const data = [
        { value: 1000, char: 'M' },
        { value: 900, char: 'CM' },
        { value: 500, char: 'D' },
        { value: 400, char: 'CD' },
        { value: 100, char: 'C' },
        { value: 90, char: 'XC' },
        { value: 50, char: 'L' },
        { value: 40, char: 'XL' },
        { value: 10, char: 'X' },
        { value: 9, char: 'IX' },
        { value: 5, char: 'V' },
        { value: 4, char: 'IV' },
        { value: 1, char: 'I' }
    ]
    
    return data.reduce( function(result, currentValue) {
        while (number >= currentValue.value) {
            result += currentValue.char;
            number -= currentValue.value;
        }

        return result;
    }, '');
}