$(document).ready( function() {
//allows the submit button to call the information put in the form
    $("#submit").click( function() {
        $("#outputArea").empty();
        console.log('button clicked');
        var data = $("#myForm").serialize();
        $.ajax ("http://api.giphy.com/v1/gifs/search", {
            data: data,
            url:"http://api.giphy.com/v1/gifs/search",
        })
//searches through the GIPHY api by going through the JSON
        .done((data)=>{
            let gif = data.data
            $.each(gif, (i, e)=>{
                var gifs = e.images.original.url
                console.log(e.images.original.url)
                var final = '<img src="' +gifs+ '">';
//appends the gifs to the outputArea ID
                $('#outputArea').append(final)
            })
        })
  });
  })
  
