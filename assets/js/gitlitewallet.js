/**
 * A mini script to get the latest release files
 */
const GIT_URL = 'https://api.github.com/repos/xel-software/xel-lite-wallet/releases/latest';

$(document).ready(function(){
    getData();
});

function getData(){
    $.get(GIT_URL, function(data, status){
        if (status === 'success'){
           parseData(data);
        }
    });
}

function parseData(release){
    release.assets.forEach(asset => {
        var url = asset.browser_download_url; 
        if (url.indexOf('unix') != -1){
            $('#linuxfile').attr("href", url);
        }
        else if (url.indexOf('windows') != -1)
            $('#winfile').attr("href", url);            
        else if (url.indexOf('macos') != -1)
            $('#macfile').attr("href", url);            
    });
}