function getData(){
    var input = $("#search").val()
    $("#gif").empty ();
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=REHW6QysYQ6mkdZjLkzYioQsIL1Nenff&limit=10");
    xhr.done(function(data) { 
        console.log("success got data", data);

    var gifs = data.data

    for (i in gifs){
    $('#gif').append("<img src='"+gifs[i].images.original.url+"'>")
    }
});
}