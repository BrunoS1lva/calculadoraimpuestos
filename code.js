import swal from 'sweetalert';

let btn = document.getElementById('btn-calcular');
btn.addEventListener('click', calculo);

function calculo(){
    let inputDinero = document.getElementById('input-dinero');
    let money = inputDinero.value;
    let impuesto1 = money*45/100;
    let impuesto2 = money*30/100;
    let result = +money+impuesto1+impuesto2;
    
}

//Impuesto 1 = Adelanto al impuesto a las Ganancias y los Bienes Personales 45%
//Impuesto2 = Impuesto pais 30%