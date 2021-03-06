$(document).ready(function () {

    //Поиск
    $('.search__link').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.search').find('.search__form').show();
    });
    $('.search__close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.search__form').hide();
    });

    //Pop-up

    $('body').on('click', '.js-open', function (e) {
        e.preventDefault();
        var attr = $(this).data('attr');
        $('.popup').removeClass('active');
        $(attr).addClass('active');
    });

    $('body').on('click', '.js-close', function (e) {
        e.preventDefault();
        $('.popup').removeClass('active');
    });
    //меню 


    $('body').on('click', '.menu__trigger', function (e) {
        e.preventDefault();
        if ($(window).width() < 989) {
            var $this = $(this),
                item = $this.closest('.menu__link'),
                list = $this.closest('.menu__list'),
                items = list.find('.menu__link'),
                content = item.find('.sub-menu__list'),
                otherContent = list.find('.sub-menu__list'),
                duration = 300;
            if (!item.hasClass('opened')) {
                items.removeClass('opened');
                item.addClass('opened');
                otherContent.stop(true, true).slideUp(duration);
                content.stop(true, true).slideDown(duration);
            } else {
                content.stop(true, true).slideUp(duration);
                item.stop(true, true).removeClass('opened');
            }
        }
    });


    $(window).resize(function () {
        if ($(window).width() > 989) {
            $('.menu__link').removeClass('opened');
            $('.sub-menu__list').attr('style', '');
        }
    });

    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.menu').find('.menu__box').addClass('active');
        $('html').addClass('html-over');
    });
    $('.menu__close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.menu__box').removeClass('active');
        $('html').removeClass('html-over');
    });

    //о нас открытие на моб версии

    $('.js-more').on('click', function(e){
        e.preventDefault();
        $(this).closest('.js-show').removeClass('active');
        $(this).hide();
    })

    //Ruslan
    //Список
    let buttonBox = document.querySelectorAll('.metal__arrow-box');
    let upArrow = document.querySelectorAll('.metal__arrow-up');
    let downArrow = document.querySelectorAll('.metal__arrow-down');
    let listMetal = document.querySelectorAll('.metal__col');
    let currentMetal = 0;
    if (document.body.clientWidth <= 360) {
        showButtonSwitching();
    }
    window.addEventListener("resize", (e) => {
        e.preventDefault();
        showButtonSwitching();
    });

    //Функция для показа и скрытия кнопок и тени блока металов
    function showButtonSwitching() {
        let metalShadow = document.querySelector('.metal__right-shadow');
        if (document.body.clientWidth <= 360) {
            // buttonBox.classList.remove('hidden');
            buttonBox.forEach((el) => {
                el.classList.remove('hidden');
            });
            listMetal.forEach((item, i) => {
                if (i !== 0) {
                    item.classList.add('hidden');
                }
            });
            metalShadow.classList.add('hidden');
        } else {
            // buttonBox.classList.add('hidden');
            buttonBox.forEach((el) => {
                el.classList.add('hidden');
            });
            metalShadow.classList.toggle('hidden') ? metalShadow.classList.remove('hidden') : "";
            listMetal.forEach((item) => {
                    item.classList.remove('hidden');
            });
        }
    }

    buttonBox.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            downArrow.forEach((el) => {
                if (el.contains(e.target)) {
                    listMetal[currentMetal].classList.add('hidden');
                    currentMetal++;
                    if (currentMetal < listMetal.length){
                        listMetal[currentMetal].classList.remove('hidden');
                    }
                    if (currentMetal >= listMetal.length) {
                        currentMetal = listMetal.length - 1;
                        listMetal[currentMetal].classList.remove('hidden');
                    }
                }
            });
            upArrow.forEach((el) => {
                if (el.contains(e.target)) {
                    if (currentMetal > 0) {
                        listMetal[currentMetal].classList.add('hidden');
                        currentMetal--;
                        listMetal[currentMetal].classList.remove('hidden');
                    }
                }
            });
        });
    });

    //
    // let initPoint, finPoint, ePoint;
    //
    // listScrBlock.addEventListener('touchstart', (e) =>{
    //     e.preventDefault();
    //     e.stopPropagation();
    //     initPoint = e.changedTouches[0].pageX;
    //     scrollBox(initPoint, ePoint, finPoint);
    // });
    //
    // listScrBlock.addEventListener('touchmove', (e) =>{
    //     e.preventDefault();
    //     e.stopPropagation();
    //     ePoint = e.changedTouches[0].pageX;
    //     scrollBox(initPoint, ePoint, finPoint);
    // });
    //
    // listScrBlock.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     finPoint = e.changedTouches[0].pageX;
    //     scrollBox(initPoint, ePoint, finPoint);
    // });
    //
    // function scrollBox(initPoint, ePoint, finPoint) {
    //     console.log('InitPoint ', initPoint);
    //     console.log('ePoint ', ePoint);
    //     console.log('finalPoint', finPoint);
    //     if (initPoint && ePoint) {
    //         listScrBlock.style.left = `${ePoint - initPoint}px`;
    //         console.log("Completed");
    //         if () {
    //
    //         }
    //     }
    //     // if (finPoint) {
    //     //     listScrBlock.style.left = `${scrBox.offsetWidth-listScrBlock.offsetWidth}px`;
    //     // }
    // }

});