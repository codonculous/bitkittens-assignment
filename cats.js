$(function(){

  $('main button.summon-cats').click(function(){
    console.log('clicked');
    $.ajax({
      method:'GET',
      url: 'http://bitkittens.herokuapp.com/cats.json',
      dataType:'json',
      // date:{}
    });

  });

});
