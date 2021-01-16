$(document).ready(function (){
    //get date
     $.ajax('get_current_date.php',{
        datatype: "text",
        timeout:2000,
        success: function(data, status, xhr){
            $("#date").append(data);
        },
        error:function(jqXhr, textStatus, errorMessage){
            console.log(errorMessage);
            alert("Error loading date. Please refresh page");
        }
    });
    // lalalalalalala
    // testing alll zaaa stuuuffff
    // ooooh la la
    
    // get list
    $("#btn").click(function(){
        $.ajax('music_list.php',{
            datatype:"json",
            timeout:5000,
            success: function(data){
            //append the headers
                    $('#songstable').append("<tr><th>My Playlist</th></tr>"+"<tr><th>Song Title</th><th>By</th><th>YouTube</th></tr>");
                //generate the rest of the table
                    $.each(data, function( i, v ) { 
                        $("#songstable").append("<tr><td>"+v.name+"</td>"+"<td>"+v.artist_name+"</td>"+"<td>"+"<button class=pbtn id="+v.id+">Play</button></td></tr>");});
                
                
            },
            error:function(jqXhr, textStatus, errorMessage){
                console.log(errorMessage);
                alert("Error. please refresh page and retry");
            }
        });
        //so it wont generate the table on ever other click
        $(this).unbind();
    });
    
    
    
    
});

function createVideo(video,videoID) {
  var youtubeScriptId = "youtube-api";
  var youtubeScript = document.getElementById(youtubeScriptId);
  var videoId = video.getAttribute(videoID);

  if (youtubeScript === null) {
    var tag = document.createElement("script");
    var firstScript = document.getElementsByTagName("script")[0];

    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = youtubeScriptId;
    firstScript.parentNode.insertBefore(tag, firstScript);
  }

  window.onYouTubeIframeAPIReady = function() {
    window.player = new window.YT.Player(video, {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0
      }
    });
  };
}
