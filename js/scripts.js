$(document).ready(function (e) {    
    $('.search-panel .dropdown-menu').find('button').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });



    
    $('#searchBtn').click(function () {
        console.log('getting into function')
        $('#title').removeClass('fadeInUp');
        $('#title').addClass('fadeInUp');
    })

    
});




