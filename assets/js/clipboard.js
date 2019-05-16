/**
 * A script to copy code in clipboard
 */
$(document).ready(function(){
    //Installation paragraphs
    var clipboardA = new ClipboardJS('.copy', {
        text: function(trigger) {
            let values = [].slice.call(trigger.parentElement.firstChild.nextElementSibling.children);
            let string = ''; 
            values.forEach(element => {
                value = element.innerHTML;
                value = value.replace(/\$/g, '');
                if (value !== '')
                    string += ' ' + value;
            });
            
            return string;
        }
    });

    // Code sections
    var clipboardB = new ClipboardJS('.copy-code', {
        text: function(trigger) {
            let values = trigger.parentElement.firstChild.nextSibling.innerHTML;
            
            return values;
        }
    });

    clipboardA.on('success', function(e) {
        showToast(e);
    });

    clipboardB.on('success', function(e) {
        showToast(e);
    });
});

function showToast(e){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
    e.clearSelection();
}