$(document).foundation();

function generateDownloadURLs(data) {
  if (!data.assets || !data.assets.length) return;

  data.assets.forEach(function(asset) {
    if (/\.exe$/.test(asset.name)) {
      document.getElementById('download-link-windows').setAttribute('href', asset.browser_download_url);
    } else if (/\.dmg$/.test(asset.name)) {
      document.getElementById('download-link-macos').setAttribute('href', asset.browser_download_url);
    } else if (/\.AppImage$/.test(asset.name)) {
      document.getElementById('download-link-linux').setAttribute('href', asset.browser_download_url);
    }
  });
}

function trackDownload(file) {
	window.bluemixAnalytics.trackEvent("Downloaded Hybrid Solution",{
	    productTitle: digitalData.page.pageInfo.productTitle,
	    category: digitalData.page.pageInfo.analytics.category,
	    productVersion: "latest",
	    customName2: "fileName",
	    customName1: "source",
	    customValue1: "Landing page",
	    customValue2: file
    });
}

$(document).ready(function(){
  // generate download urls for Desktop client
  fetch("https://api.github.com/repos/ibm-apiconnect/test-and-monitor/releases/latest")
    .then(function(response) { return response.json() })
    .then(generateDownloadURLs)
    .catch(function(error) {
      $('#download-links-error')
        .html("* Error getting download links, please try reloading this page.")
        .removeClass('hide');
    });

    $(".trackdownload").on("click", function(e) {
        var file=$(this).attr('href');
        trackDownload(file);
    });

    // track embeded video play
    $(".embeded-video").on('play',function(){
        var file =  $(this).children("source").attr("src");
        trackVideoPlay(file);   
    });

    // track intro video play
    $("video").on('play',function(){
        var file =  $(this).attr("src");
        trackVideoPlay(file);   
    });
    
    $(".showVideo").on("click", function(e) {
        e.preventDefault();
        var file = $(this).data("video");
        trackVideoPlay(file);
        
        var htmlTemplate = '<div class="videoContainer"><div class="videoPlayer"><div style="display: block; padding-top:56%; width: 100%;">'
                + '</div><button class="closeBtn">X</button><video class="video-iframe" width="100%" height="100%" autobuffer controls autoplay>'
                + '<source id="mp4" src="'
                + file
                + '" type="video/mp4">'
                + '</video></div><div/>';
        $player = $(htmlTemplate);
        $player.find('.closeBtn').on(
                'click',
                function() {
                    $(this).off().closest(
                            '.videoContainer')
                            .fadeOut(500, function() { $(this).remove(); });
                });
        $player.appendTo('body').addClass(
                'dark-bg').fadeIn();
        return false;

    });
    
    
});
