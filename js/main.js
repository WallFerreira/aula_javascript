
function clicou(){
document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://codepen.io/");
    // window.location.href = "https://codepen.io/"
}

function trocar(Element){
    Element.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar text")
}

function voltar(Element){
    Element.innerHTML = "Passe o Mouseeeee";
    //document.getElementById("mouseout").innerHTML = "Passe o mouse aqui";
    //alert("trocar text")
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
console.log(elemento.value)
}






/*

f

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true
    }else{
        validar  = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

//alert(soma(5 , 10));


//var nome = " Wallace Ferreira";
//var idade = 30;
//var idade2 = 10;
// alert("Bem vindo"+ nome);
//alert(idade + idade2)

//console.log(lista.length)

//var fruta = {nome:"fruta",}

/*var idade = prompt("Qual sua idade?")
var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
    
}else{
    alert("menor de idade");
};
*/

/*var count = 0;
while(count < 5){
    console.log(count)
    count++;
};
};
*/

//var count;
//for(count=0; count <=5; count++){
 //   alert(count)

//}
/* /var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
lista.push(“Polônia”);
lista.pop(“Inglaterra”);

*/

