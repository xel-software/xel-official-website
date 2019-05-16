$(document).ready(function(){
    $('.navbar-toggler').on('click',function(){
        if ($(this).hasClass('active')){
            $('.close-toggle').hide();
            $('.open-toggle').show();
            $('body').css('overflow-y','auto');
            $('.navbar').removeClass('opened');
            changeNavBarColor();
        }
        else{
            $('.open-toggle').hide();
            $('.close-toggle').show();
            $('body').css('overflow-y','hidden');
            $('.navbar').css('background','#09063d');
            $('.navbar').addClass('opened');
            showDefaultLogo();
        }
        $(this).toggleClass('active');
    }); 
    
    $('#mobileInstallation').on('click', function(){
        $('#mobileInstallationMenu').toggleClass('show');
        $('#mobileDocsMenu').removeClass('show');        
    });

    $('#mobileDocs').on('click', function(){
        $('#mobileDocsMenu').toggleClass('show');
        $('#mobileInstallationMenu').removeClass('show');
    });

});

$(document).scroll(function() {
    if ($(window).width() < 992)
        setTimeout(function(){
            changeNavBarColor();
        }, 500);
    else{
        $('.navbar').css('background','transparent');
        showDefaultLogo();
    }
});

function changeNavBarColor(){
    if ($(this).scrollTop() > 100 && !$('.navbar').hasClass('opened')) {
          
        $('.navbar').css('position','sticky');
        $('.navbar').css('background','white');

        //Default logo
        $('#nav_black_logo').fadeOut(0);
        //Black logo
        $('#exp_black_logo').fadeIn(0);
        
        $('#nav-xel').css('color','black');
        $('.open-toggle').css('color','black');

    } else {
        if (!($('.navbar').hasClass('opened')))
            setTimeout(function(){
                $('.navbar').css('background','transparent');
                showDefaultLogo();
            }, 500);
    }
}

function showDefaultLogo(){
    $('#exp_black_logo').fadeOut(0);
    $('#nav_black_logo').fadeIn(0);
    $('#nav-xel').css('color','white');
    $('.open-toggle').css('color','white');
}