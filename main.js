/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


const submitCantidadIntegrantes = document.querySelector("#submit-cantidad-integrantes");
let cantidadIntegrantes = 0;
const inputCantidadIntegrantes= document.querySelector(".input-cantidad-integrantes");

submitCantidadIntegrantes.addEventListener("click", function (e) {
    
    cantidadIntegrantes = Number(document.querySelector(".input-cantidad-integrantes").value);
    console.log(cantidadIntegrantes);
    
    borrarIntegrantesAnteriores();
    crearIntegrantes();

    e.stopPropagation;
    return false;

},false);

function borrarIntegrantesAnteriores(){
    const integrantes = document.querySelectorAll(".div-integrante");
    for (let i=0; i<integrantes.length; i++){
        integrantes[i].remove();
    }
}

function crearIntegrantes(){
    if (cantidadIntegrantes < 0){
        alert(`Ingrese un número válido`);
        inputCantidadIntegrantes.focus();
    }
    else{
        for (let i=1; i<=cantidadIntegrantes; i++){
            crearIntegrante(i);            
        }   
    }
    document.querySelector("#submit-calculos").className="";
}

function crearIntegrante(i){
    const divLabelInputIntegrantes = document.querySelector(".div-label-input-integrantes");
    const nuevoDivIntegrante = document.createElement("div");
    nuevoDivIntegrante.classList = "div-integrante";

    const nuevaLabel = document.createElement("label");
    nuevaLabel.classList = "etiquetas-integrantes";
    const textoLabel = document.createTextNode(`Integrante ${i}`);
    nuevaLabel.appendChild(textoLabel); 
    
    const nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    nuevoInput.classList = "input-edad-integrantes";
    nuevoInput.placeholder = `Ingrese edad del integrante ${i}`;

    nuevoDivIntegrante.appendChild(nuevaLabel)
    nuevoDivIntegrante.appendChild(nuevoInput);
    divLabelInputIntegrantes.appendChild(nuevoDivIntegrante);
}

const submitCalculos = document.querySelector("#submit-calculos");
let arrEdadesIntegrantes = [];

submitCalculos.addEventListener ("click", function () {
    console.log(`click en calcular`);
    for (let i=0; i<cantidadIntegrantes; i++){ 
        console.log(i);
        let edadIntegrante = Number(document.querySelectorAll(".input-edad-integrantes")[i].value);
        console.log(edadIntegrante);
        arrEdadesIntegrantes.push(edadIntegrante);
        console.log(arrEdadesIntegrantes);
    }
    console.log(`fuera del for de guardar valores pero dentro de la fc del event listener`);
    console.log(arrEdadesIntegrantes);
    let edadMax = 0;
    let edadMin = 0;
    let edadPromedio = 0;
    if (cantidadIntegrantes === 0){
        edadMax = 0;
        edadMin = 0;
        edadPromedio = 0;
    }

    else{
        edadMax = Math.max (...arrEdadesIntegrantes);
        edadMin = Math.min (...arrEdadesIntegrantes);
        let edadTotal = 0;
    
        console.log(`edadMax ${edadMax}`);
        console.log(`edadMin ${edadMin}`);
        console.log(`edadTotal ${edadTotal}`);
    
        for (let i=0; i<arrEdadesIntegrantes.length;i++){
            edadTotal += arrEdadesIntegrantes[i];
        }
        
        edadPromedio = edadTotal / cantidadIntegrantes;
        console.log(edadTotal);
        console.log(edadPromedio);
    }
        
    document.querySelector("#mayor-edad").innerText = edadMax.toString();
    document.querySelector("#menor-edad").innerText = edadMin;
    document.querySelector("#promedio-edad").innerText = edadPromedio;
    document.querySelector("#div-calculos").className = "";
}); 

document.querySelector(".resetear").onclick = function (){
    borrarIntegrantesAnteriores();
    document.querySelector("#submit-calculos").className="oculto";
    document.querySelector("#div-calculos").className="oculto";
};



