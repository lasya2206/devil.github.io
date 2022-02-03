var word1 = [];
var word2 = [];

$('#check').click(function(){
  var word1 = $('#word1').val().toLowerCase().split('').sort().join();
  var word2 = $('#word2').val().toLowerCase().split('').sort().join();
  if(word1 === word2){
    $( "#answer" ).append( "<p>True! This is an anagram.</p>" );
  } else { 
    $( "#answer" ).append( "<p>False! This is an anagram.</p>" );
  }
})
