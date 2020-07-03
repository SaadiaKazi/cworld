function fnSelectPrice(){
    var oSelectPlantType = document.getElementById("planttype");
    var oSelectQuantity = document.getElementById("quantity");
    var oSelectPrice = document.getElementById("price");
    document.getElementById("price").value = oSelectPlantType.options[oSelectPlantType.selectedIndex].value;

if(oSelectQuantity.selectedIndex !== 0){
    document.getElementById("total").value = "£" + parseFloat(oSelectPrice.value * oSelectQuantity.options[oSelectQuantity.selectedIndex].value).toFixed(2);


}

}

function fnCalculatePrice(){
    try{

var oSelectPrice = document.getElementById("price");
var oSelectQuantity = document.getElementById("quantity");

document.getElementById("total").value = "£" + parseFloat(oSelectPrice.value * oSelectQuantity.options[oSelectQuantity.selectedIndex].value).toFixed(2);

    }catch(ex){
        alert(ex.message);
    }

}