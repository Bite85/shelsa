$(document).ready(function() {

     new WOW().init();

     /* scroll animation  */
     function scrollSection(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html body').scrollTo($(target).offset().top - 130, 'slow');
     }
     
     $('.navbar-brand').bind('click', scrollSection);
     $('.navbar-nav .nav-link').bind('click', scrollSection);
     $('.home-section a').bind('click', scrollSection);
    


});

ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
            center: [51.517592,46.016075],
            zoom: 17,
            controls: ['zoomControl','geolocationControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        myPlacemark = new ymaps.Placemark([51.517592,46.016075], {
            balloonContent: 'улица имени Н.Г. Чернышевского, 94Б',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/placemark.png',
            // Размеры метки.
            iconImageSize: [45, 48],
         
        });

    myMap.behaviors.disable('scrollZoom'); 
    myMap.geoObjects.add(myPlacemark);
    
});