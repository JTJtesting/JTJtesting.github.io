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

function updateCaesar(eventje,element){
      // If value has changed...
     console.log("het gaat de goede kant op");
      if (element.data('oldVal') != element.val()) {
       // Updated stored value
       element.data('oldVal', element.val());
       element.val(element.data('oldVal').toLowerCase());
       $("#Caesaroutput").html(Caesarcijfer(element.val(),Caesarverschuifing));
        console.log("het zou moeten werken");
        console.log(Caesarcijfer(element.val(),Caesarverschuifing));
     }
   }

function Caesarcijfer(input, verschuif){
  verschuif = Number(verschuif);
  console.log("input: ",input);
  console.log("verschuif: ",verschuif);
  var Caesaroutput = "";
  var array = [];
  for(var i=0; i<input.length; i++){
    console.log("alphIndex: ", alphabet.indexOf(input[i]));
    console.log("alphIndex2: ", (alphabet.indexOf(input[i])+verschuif)%26);
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
   $("#Range1").on("propertychange change click keyup input paste",updateCaesar(event,elem));
   elem.on("propertychange change click keyup input paste",updateCaesar(event,elem));
 });
});

