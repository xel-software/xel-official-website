/**
 * A mini script to change the content of the installation guides
 * for Windows, MacOS, Linux.
 */

 //For loading
 var first = true;

$(document).ready(function(){
    
    //Detecting OS
    if (navigator.appVersion.indexOf("Win")!=-1) {
        changeGuide('windows');
    }
    else if (navigator.appVersion.indexOf("Mac")!=-1) {
        changeGuide('macos');
    }
    else if (navigator.appVersion.indexOf("Linux")!=-1) {
        changeGuide('linux');
    }
    first = false;

    //Setting events for buttons
    $('#MacOS-button').on('click',function(){
        changeGuide('macos');
    });
        
    $('#Windows-button').on('click',function(){
        changeGuide('windows');
    });

    $('#Linux-button').on('click',function(){
        changeGuide('linux');
    });
});

/**
 * Change the visible content and the button classes to the guide given. 
 * @param {*} guide : The guide we select
 */
function changeGuide(guide){
    switch (guide){
        case 'macos':{
            change('#macos','#windows','#linux');
            changeClass('#MacOS-button','#Windows-button','#Linux-button');
            break;
        }
        case 'windows':{
            change('#windows','#linux','#macos');
            changeClass('#Windows-button','#MacOS-button','#Linux-button');
            break;
        }
        case 'linux':{
            change('#linux','#windows','#macos');
            changeClass('#Linux-button','#MacOS-button','#Windows-button');
            break;
        }
    }
}

/**
 * Changes the visible content.
 * @param {*} en : to enable
 * @param {*} dis1 : to disable
 * @param {*} dis2 : to disable
 */
function change(en,dis1,dis2){
    if (!first){
        $('#i-container').fadeOut('fast');
        $('#i-container').fadeIn('fast');
        setTimeout(function() {    
            $(en).show();
            $(dis1).hide();
            $(dis2).hide();
        }, 300);
        
    }else{
        $(en).show();
        $(dis1).hide();
        $(dis2).hide();
    }
}

/**
 * Adds/Removes the active class
 * @param {*} en : to enable
 * @param {*} dis1 : to disable
 * @param {*} dis2 : to disable
 */
function changeClass(en,dis1,dis2){
    $(en).addClass('active');
    $(dis1).removeClass('active');
    $(dis2).removeClass('active');
}