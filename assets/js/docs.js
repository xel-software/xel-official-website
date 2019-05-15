var lastScrollTop = 0;
/**
 * A mini script for the docs scrolling behaviour.
 */
$(document).ready(function(){
    $('#docs').scroll(function(){
        lastScrollTop = $(this).scrollTop();
     });

     new Waypoint({
        element: document.getElementById('doc1'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: '10%'
    });
    
    new Waypoint({
        element: document.getElementById('doc1'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: 0
    });

    new Waypoint({
        element: document.getElementById('doc2'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: '20%'
    });

    new Waypoint({
        element: document.getElementById('doc2'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: '60%'
    });

    new Waypoint({
        element: document.getElementById('doc2'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: 'bottom-in-view'
    });

    if (window.location.href.indexOf('epl') !== -1){
        new Waypoint({
            element: document.getElementById('doc3'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: '50%'
        });

         
        new Waypoint({
            element: document.getElementById('doc4'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: '70%'
        });
    }
    else{
        new Waypoint({
            element: document.getElementById('doc3'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: '70%'
        });

        new Waypoint({
            element: document.getElementById('doc3'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: 'bottom-in-view'
        });
  
        new Waypoint({
            element: document.getElementById('doc4'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: '40%'
        });
    }

    new Waypoint({
        element: document.getElementById('doc4'),
        handler: function() {
            changeClass(this.element);
        },
        context: document.getElementById('docs'),
        offset: 'bottom-in-view'
    });

    $('.tm1').on('click',function(){      
        $('#docs').animate({ scrollTop: $("#docs").scrollTop() + $('#doc1').offset().top - 150});    
        lastScrollTop = $(this).scrollTop();
    });
    
    $('.tm2').on('click',function(){
        calculateScrolls('#doc2',140,150);
    });
    
    $('.tm3').on('click',function(){
        if (window.location.href.indexOf('epl') !== -1){
            if (window.innerWidth < 993)
                calculateScrolls('#doc3',450,600);
            else
                calculateScrolls('#doc3',500,600);        
        }
        else
            calculateScrolls('#doc3',90,170);        
    });
    
    $('.tm4').on('click',function(){
        if (window.location.href.indexOf('epl') !== -1)
            calculateScrolls('#doc4',85,160);        
        else
            calculateScrolls('#doc4',120,160);
    });
    
    if($("#tm5").length !== 0) {

        //For Taker page
        new Waypoint({
            element: document.getElementById('doc4'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset: '5%'
        });

        new Waypoint({
            element: document.getElementById('doc5'),
            handler: function() {
                changeClass(this.element);
            },
            context: document.getElementById('docs'),
            offset:  '78%'
        });

        $('.tm5').on('click',function(){
            $('#docs').animate({ scrollTop: $("#docs").scrollTop() + $('#doc5').offset().top - 90 });    
            lastScrollTop = $(this).scrollTop();
        });
    }

});

function calculateScrolls(el, offset1, offset2){
    if ($(el).scrollTop() < lastScrollTop)
        offset1 = offset2;

    $('#docs').animate({ scrollTop: $("#docs").scrollTop() + $(el).offset().top - offset1 });   
    lastScrollTop = $(this).scrollTop();
}

function changeClass(el){
    var id = el.id.substr(el.id.length - 1);
    $("#timeline li a").removeClass('show');
    $("#timeline li").removeClass('show');
    $('.tm' + id).addClass('show');
}