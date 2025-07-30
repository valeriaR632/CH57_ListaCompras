const txtName =   document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar= document.getElementById("btnAgregar");
const btnClear =  document.getElementById("btnClear");
const alertValidaciones =document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarcantidad(){
    if(txtNumber.value.length==0){
        return false;
    }
    //tenga informacion 

    if(isNaN(txtNumber.value)){
        return false;
    }
    //tiene que ser numero

    if (Number(txtNumber.value)<=0){
         return false;

    }// mayor que 0
   
    return true;
//numbrer
    //tenga informacion
    //Tiene que ser un numero
}

btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
     txtName.style.border ="thin green solid";
     txtNumber.style.border ="thin green solid";

    //Name
    //validar que tenga informacion minimo 3 letras
if(txtName.value.length<3){
    txtName.style.border ="thin red solid";
    //mensaje de error
    alertValidacionesTexto.innerHTML="<strong> El nombre del producto no es correcto</strong>";
    alertValidaciones.style.display="block";

}
if(! validarcantidad()){
     txtNumber.style.border ="thin red solid";
    alertValidacionesTexto.innerHTML +=
    "<strong> La cantidad no es correcta</strong>";
    alertValidaciones.style.display="block";
    
} // ! validar cantidad
});

