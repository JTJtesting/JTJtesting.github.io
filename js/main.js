var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var slider = document.getElementById("Range1");
var output = document.getElementById("ValRange1");
output.innerHTML = slider.value; // Display the default slider value
var Caesarverschuifing = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    Caesarverschuifing = this.value;
}

function Caesarcijfer(input, verschuif){
  console.log(input);
  console.log(verschuif);
  var Caesaroutput = "";
  var array = [];
  for(var i=0; i<input.length; i++){
    Caesaroutput += alphabet[(alphabet.indexOf(input[i])+verschuif)%26];
  }
  return Caesaroutput;
}

$(function(){
  console.log("bullshit");
  $('.Caesarcijfer').each(function(){
    console.log("bullshit");
   var elem = $(this);

   // Save current value of element
   elem.data('oldVal', elem.val());

   // Look for changes in the value
   elem.on("propertychange change click keyup input paste", function(event){
      // If value has changed...
     console.log("het gaat de goede kant op");
      if (elem.data('oldVal') != elem.val()) {
       // Updated stored value
       elem.data('oldVal', elem.val());
       elem.val(elem.data('oldVal').toLowerCase());
       $("#Caesarouput").text(Caesarcijfer(elem.val(),Caesarverschuifing));
        console.log("het zou moeten werken");
        console.log(Caesarcijfer(elem.val(),Caesarverschuifing));
     }
   });
 });
});

