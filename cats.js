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
      for (var i = 0; i<data.cats.length; i++) {
        var catImg = $("<img>",{src:data.cats[i].photo, alt:'Phote of '+data.cats[i].name});
        catsDiv.push($("<div>",{id:'cat'+(i+1), class:'cat-box'}));
        catsDiv[i].appendTo($('main'));
        catImg.appendTo(catsDiv[i]);
      }
    });



  });

});
