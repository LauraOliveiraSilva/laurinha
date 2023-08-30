let idade = 30;

switch (true) {
case idade < 0: 
    console.log("Idade inválida"); 
    break; 
case idade < 12: 
    console.log("Criança"); 
    break; 
case idade < 18: 
    console.log("Jovem"); 
    break; 
case idade < 60: 
    console.log("Adulto"); 
    break;
default:
    console.log("Idoso");
    break;
}