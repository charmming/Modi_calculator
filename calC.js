function input(number){
    document.forms["form"].textInserted.value=document.forms["form"].textInserted.value+number;
};
function cancel(){
    document.forms["form"].textInserted.value = null;
};
function equal(){
    var exp = document.forms["form"].textInserted.value;
    if(exp){
        document.forms["form"].textInserted.value = eval(exp)
    }
};
    function backward(){
        var strng = document.forms["form"].textInserted.value;
        document.forms["form"].textInserted.value = strng.substring(0, strng.length-1);
     };
     
    //  var leftOffset = 100;
    //  var moveIt = function(){
        //  $("#calculator_heading").offset({left:leftOffset});
        //  leftOffset++;
        //  if(leftOffset > 500){
            //  leftOffset = 0;
        //  }
    //  };
    //  setInterval(moveIt, 30);
 
