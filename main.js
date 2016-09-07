$(document).ready(function(){
  function getQuote(){
    var quotes =["The best way to remember your wife's birthday is to forget it once.","Here we go!","Let's a-go.","Pika, pika!","Falcon... PUNCH!","One advantage of talking to yourself is that you know at least somebody's listening."];
    

    var author = ["- E. Joseph Cossman", "-Mario", "-Luigi", "-Pikachu", "-Captian Falcon", "-Franklin P. Jones"];

    var randomNum = Math.floor(Math.random()*quotes.length);
    var randomQuote =quotes[randomNum];
    var author = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(author);
  }
  $(".btn").on("click", function(){
      getQuote();
  });
}); 
