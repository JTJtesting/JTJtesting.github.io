var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Moest mijn eigen toevoegen, want bij javascript doet hij raar als ik negatieve nummers
// als modulus doe. Bijvoorbeeld: -1 % 25 = -1
function mod(n, m) {
        return ((n % m) + m) % m;
}


//
// Caesar encoden
//

var slider = document.getElementById("Range1");
var output = document.getElementById("ValRange1");
output.innerHTML = slider.value; // Display the default slider value
var Caesarverschuifing = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    Caesarverschuifing = this.value;
}

function updateCaesar(element){
      // If value has changed...
     console.log("het gaat de goede kant op");
       // Updated stored value
       element.data('oldVal', element.val());
       element.val(element.data('oldVal').toLowerCase());
       $("#Caesaroutput").html(Caesarcijfer(element.val(),Caesarverschuifing));
        console.log("het zou moeten werken");
        console.log(Caesarcijfer(element.val(),Caesarverschuifing));
   }

function Caesarcijfer(input, verschuif){
  verschuif = Number(verschuif);
  console.log("input: ",input);
  console.log("verschuif: ",verschuif);
  var Caesaroutput = "";
  var array = [];
  for(var i=0; i<input.length; i++){
    console.log("alphIndex: ", alphabet.indexOf(input[i]));
    console.log("alphIndex2: ", (alphabet.indexOf(input[i])+verschuif)%alphabet.length);
    if(alphabet.indexOf(input[i]) != -1){
      Caesaroutput += alphabet[(alphabet.indexOf(input[i])+verschuif)%alphabet.length];
    } else {
      Caesaroutput += input[i];
    }
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
   $("#Range1").on("propertychange change click keyup input paste", function(event) {
     updateCaesar(elem);
   });
   elem.on("propertychange change click keyup input paste",function(event){updateCaesar(elem);});
 });
});


//
// Caesar decoden
//

var slideront = document.getElementById("Range2");
var outputont = document.getElementById("ValRange2");
output.innerHTML = slideront.value; // Display the default slider value
var Caesarontverschuifing = slideront.value;
// Update the current slider value (each time you drag the slider handle)
slideront.oninput = function() {
    outputont.innerHTML = this.value;
    Caesarontverschuifing = this.value;
}


$(function() {
  $('.Caesarontcijfer').each(function() {
    var elem = $(this);


    // Look for changes in the value
    $("#Range2").on("propertychange change click keyup input paste", function(event) {
      updateCaesaront(elem);
    });
    elem.on("propertychange change click keyup input paste", function(event) {
      updateCaesaront(elem);
    });
  });
});

function updateCaesaront(element) {
  element.data('oldVal', element.val());
  element.val(element.data('oldVal').toLowerCase());
  $("#Caesarontoutput").html(Caesarontcijfer(element.val().toLowerCase(), Caesarontverschuifing));
}

function Caesarontcijfer(input, verschuif) {
  verschuif = Number(verschuif);
  var Caesaroutput = "";
  var array = [];
  for (var i = 0; i < input.length; i++) {
    if (alphabet.indexOf(input[i]) != -1) {
      Caesaroutput += alphabet[mod(alphabet.indexOf(input[i]) - verschuif, alphabet.length)];
    } else {
      Caesaroutput += input[i];
    }
  }
  return Caesaroutput;
}

//
// Vignère
//

var Vignèrezin, Vignèrewoord;

$(".Vignère").on("propertychange change click keyup input paste", updateVignère);

function updateVignère() {
  Vignèrezin = $('#Vignère #Codezin').val().toLowerCase();
  Vignèrewoord = $('#Vignère #Codewoord').val().toLowerCase();

  // if (Vignèrezin !== "" && Vignèrewoord !== "") {
    var codewoordlang = "";
    $('#Vignère #Codezinoutput').html(Vignèrezin);
    for (var i = 0; i < Vignèrezin.length; i++) {
      console.log(i, Vignèrewoord.length, i % Vignèrewoord.length);
      (Vignèrewoord[i % Vignèrewoord.length] !== undefined) ? codewoordlang += Vignèrewoord[i % Vignèrewoord.length] : codewoordlang += "";
    }
    $('#Vignère #Codewoordoutput').html(codewoordlang);
    $('#Vignère #Vignèreoutput').html(Vignèreoutput(Vignèrezin, Vignèrewoord));
  // } else {
  //   $('#Vignère #Codezinoutput').html('');
  //   $('#Vignère #Codewoordoutput').html('');
  //   $('#Vignère #Vignèreoutput').html('');
  // }
}

function Vignèreoutput(zin, woord) {

}
