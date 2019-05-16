const CC_URL = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XEL&tsyms=USD,BTC';

$(document).ready(function(){

    anime({
        targets: '.giver-img',
        translateY: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.blkimg',
        translateY: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '#takerimg',
        translateY: 20,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    //Carousel Swiping
    $('.carousel').bcSwipe({ threshold: 50 });

     //Paroller functions for the parallax effect

    $(".cityimg").paroller({ factor: 0.4, type: 'foreground', direction: 'vertical' }); 

    $(".machineimg").paroller({ factor: 1, type: 'foreground', direction: 'horizontal' }); 

    $(".elblock").paroller({ factor: 0.3, type: 'foreground', direction: 'vertical' });  

    $(".char1").paroller({ factor: 0.4, type: 'foreground', direction: 'vertical' });  

    $(".char2").paroller({ factor: -0.2, type: 'foreground', direction: 'vertical' });  

    //Tabs animations    
    $('#nav-tab1').on('click', function(){
        $('#tab1content').addClass('active show')
        .animate({
            opacity: 1,
        }, 600 );
        $('#tab2content').removeClass('active show')
        .animate({
            opacity: 0,
        }, 600 );
    });

    $('#nav-tab2').on('click', function(){
        $('#tab1content').removeClass('active show')
        .animate({
            opacity: 0,
        }, 600 );
        $('#tab2content').addClass('active show')
        .animate({
            opacity: 1,
        }, 600 );
    });

    //Getting data for the XEL table
    getData();
});

/**
 * Getting all the crypto data from Cryptocompare's
 * Public API. 
 * 
 * CryptoCompare API: https://min-api.cryptocompare.com/
 * Important notes about the Public API: https://min-api.cryptocompare.com/faq
 */
function getData(){
    $.get(CC_URL, function(data, status){
        if (status === 'success'){
           parseData(data);
        }
    });
}

/**
 * Parsing the data from the request and binding them 
 * with jquery.
 * @param {*} data: Xel Data 
 */
function parseData(data){
    var btc_data = data.RAW.XEL.BTC;
    var usd_data_d = data.DISPLAY.XEL.USD;
    var btc_data_d = data.DISPLAY.XEL.BTC;

    $('#xelusd').text(usd_data_d.PRICE);
    $('#xelbtc').text(btc_data.PRICE);
    $('#xelperc').text(btc_data_d.CHANGEPCT24HOUR)

    handlePercentage(btc_data_d.CHANGEPCT24HOUR);

    $('.market-cap-usd').text(usd_data_d.MKTCAP);
    $('.market-cap-btc').text(btc_data_d.MKTCAP);
    $('.vol-usd').text(usd_data_d.TOTALVOLUME24HTO);
    $('.vol-btc').text(btc_data_d.TOTALVOLUME24HTO);
    $('.supply').text(usd_data_d.SUPPLY);
    $('.tot-supply').text('XEL 100,000,000');
}

/**
 * Handling and styling of the percentage change
 * XEL-BTC.
 * @param {*} data: The change number
 */
function handlePercentage(data){
    if (data < 0){
        $('.plusperc').hide();

        $('.perc').addClass('redperc');
    }
    else if (data > 0){
        $('.minperc').hide();
    }
    else{
        $('.minperc').hide();
        $('.plusperc').hide();
    }
}