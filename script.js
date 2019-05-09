jQuery(document).ready(function()
{
    var url = 'https://jsonplaceholder.typicode.com/photos';
    $('#submitButton').on('click',function(){
      axios.get(url).then(function(response){
            console.log(response);

    let albmTtl = response.data.map((album) => 
    {
        return album.title;
    });



    let Pic = response.data.map((album) =>
    {
        return album.url;
    });


    for (i=0;i < albmTtl.length;i++)
    {
    $('#tasks').append('<img src="'  + Pic[i] + '"alt="' + albmTtl[i] + '">');
    console.log(Pic[i]);
    $('#tasks').append('<p>' + albmTtl[i] + '</p>');
    }        

});

});
});
