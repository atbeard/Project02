$(document).ready( function() {
    $("button").click( function() {
        $("#outputArea").empty();
        console.log('button clicked');
        var data = $("#myForm").serialize();
        $.ajax ("http://api.giphy.com/v1/gifs/search", {
            data: data,
            url:"http://api.giphy.com/v1/gifs/search",
        })
        .done((data)=>{
            let gif = data.data
            $.each(gif, (i, e)=>{
                var gifs = e.images.original.url
                console.log(e.images.original.url)
                var final = '<img src="' +gifs+ '">';
                $('#outputArea').append(final)
            })
        })
  });
  })
  
