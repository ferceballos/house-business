$(document).ready(function (e) {    

    $('#dropdown-menu').click(function () {
        $('#dropdown-menu').removeClass('fadeInDown');
        $('#dropdown-menu').addClass('fadeInDown');

        $('#dropdown-menu').removeClass('dropfix');
        $('#dropdown-menu').addClass('dropfix');
    })

    // Lo que hace que los filtros del buscador funcionen
    $('.search-panel .dropdown-menu').find('button').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);

    });


    //Animaciones cuando la pagina carga
    $(document).ready(function () {
        console.log('entrando a el loaded page.')
        $('#header').addClass('fadeInDown');
        $('#title').addClass('fadeInDown');
        $('#subtitle').addClass('fadeInUp');

    })

    
});




