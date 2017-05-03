$(function(){

  $('main button.summon-cats').click(function(){
    console.log('clicked');
    $.ajax({
      method:'GET',
      url: 'http://bitkittens.herokuapp.com/cats.json',
      dataType:'json',
      data:{'number': '5'}
    }).done(function(data){
      console.log('http: ' + data.cats[0].photo);
      var catsDiv = [];
      var catsBook = [];
      for (var i = 0; i<data.cats.length; i++) {
        $('#cats-book').append('<li>'+data.cats[i].name+'</li>');
        var catImg = $("<img>",{src:data.cats[i].photo, alt:'Phote of '+ data.cats[i].name});
        catsDiv.push($("<div>",{id:'cat'+(i+1), class:'cat-box'}));
        catImg.appendTo(catsDiv[i]);
        $(catsDiv[i]).animate({left:move()+'px',top:move()+'px'},'slow');
      }
      $('#cat-home').html(catsDiv);

    });

  function move(){
    var newM = Math.floor(Math.random() * (400 - 100)) + 100;
    return newM;
  }





  });

});
