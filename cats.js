$(function(){

  $('main button.summon-cats').click(function(){
    console.log('clicked');
    $.ajax({
      method:'GET',
      url: 'http://bitkittens.herokuapp.com/cats.json',
      dataType:'json',
      // date:{}
    }).done(function(data){
      console.log('http: ' + data.cats[0].photo);
      for (var i = 0; i<data.cats.length; i++) {
        var catImg = $("<img>",{src:data.cats[i].photo, alt:'Phote of '+data.cats[i].name});
        catImg.appendTo('.cat-box');
      }
    });



  });

});
