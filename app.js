
function getcycle(){
    var inputDate = new Date(document.getElementById("date").value);
    inputDate.setDate(inputDate.getDate()+1) ;//carl a valeur de l'input me renvoie un jours avant la bonne date
    
    var inputCycleLength = document.getElementById("duree-cycle").value;
  console.log(inputDate);
  console.log(inputCycleLength);



}
