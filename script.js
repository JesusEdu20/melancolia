//look for elements from DOM
const input= document.getElementById("cerradura");
const title= document.querySelector(".question-box_h1"); //correjir a div
const questionBox= document.querySelector(".question-box");

const sendButton= document.querySelector(".send-button");

let missionCounter=0;

//misiones
const pistas=[

    {

        question:"Número mágico?",
        answer:34,
        description:"",
        pist:"",
        name:"Alberto Durero",
        objective:"pintura Melancolia",
        tarjet: "cuadrado Magico",
        alertMessage:"Correcto, encontraste el número mágico del cuadro oculto de la pintura de Alberto Durero",
        otherAlert:"lleguemos a la profundidad de esto, aceptas?; Presiona enviar nuevamente hasta que veas una nueva pregunta",
    },
    
    {

        question:"Número de letras de la ultima palabra de Jack Dawson",
        answer:7,
        description:"",
        pist:"",
        name:"titanic",
        objective:"",
        tarjet: "",
        alertMessage:"Perfecto nunca la olvides... Te daré las direcciones que llevan a la promesa",
        otherAlert:"https://drive.google.com/drive/folders/1NuSN1WM5YvM4MKQbbJ9kTDfEmbURqT7r?usp=sharing busca para encontrar, tienes permiso. Traeme los numeros magicos de los dos cuadrados",
    },

    {

        question:"suma todos los digitos de los números mágicos, si el resultado es correcto te daré la combinación que solo yo poseo",
        answer:18,
        description:"",
        pist:"",
        name:"titanic",
        objective:"",
        tarjet: "",
        alertMessage:"Bien hecho, la verdad se revelará. Porque esta en tus manos... Toma los dos números mágicos 27 y 36. Suma los 3 primeros digítos de izquierda a derecha y tendrás el día. El último dígito revela el mes ",
        otherAlert:"Tienes la clave y la promesa. Usala https://drive.google.com/drive/folders/1NvGHGWdyBTFrintMcqRUSzXcprSr8Hnm?usp=sharing",
    },
    
    

    
]



//Functions

function createQuestion(question){
    
    let questionToUser= document.createElement("h1");
    questionToUser.innerHTML=question;
    title.appendChild(questionToUser);
}







function evaluateAnswer(userAnswer, answer, alertMessage, otherAlert) {
    
    
   

    if(userAnswer==answer){

        alert(alertMessage);
        alert(otherAlert);
        missionCounter+=1;
        setQuestion();
      
        
        
        
    }

    else{
        
       
        alert("incorrecto");
        missionCounter=0;
        
         
        
    }
}

function setQuestion(){

    title.innerHTML="";
    input.innerHTML="";
    let mision= pistas[missionCounter]
    createQuestion(mision.question);
}

function ask(){
    
    let userAnswer=input.value;
    let mision= pistas[missionCounter]
    evaluateAnswer(userAnswer, mision.answer, mision.alertMessage, mision.otherAlert);
    

    

}

setQuestion()
sendButton.addEventListener("click", ask)

