function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger,.header__menu').toggleClass('active');
        })
    })

    $(document).ready(function() {
        $('.slider__body').slick({
            arrows: false,
            dots: true,
            autoplay: true
        });
    })

