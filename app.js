$(function(){
    $('#btn').click(function(){
        $.getJSON('http://random.cat/meow')
        .done(function(data){
            $('#catImg').attr('src', data.file); // изменение src img с помощью attr            
        })
        .fail(function(err){
            console.log('Vlad, it is error!! ' + err);
        })
    });
});