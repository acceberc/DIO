
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";

    //alert("Obrigada por clicar");
}

function redirecionar (){
    //window.open("https://github.com/acceberc");
    window.location.href = "https://github.com/acceberc";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
var d = new Date();
alert(d);
*/
/*
function soma(n1, n2){
    return n1 + n2;

}

function setReplace(frase, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert("vai japão", "japao", "brasil");
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count)
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade > 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

//var nome = "Rebecca Cruz";
//var idade = 26;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));


//var lista = ("maçã", "pera", "laranja");
//lista.push("uva");
//lista.pop();
//console.log(lista[2]);
//console.log(lista.length);
//console.log(lista.join(" - "));

/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log{fruta.nome};
alert(fruta.cor);
*/