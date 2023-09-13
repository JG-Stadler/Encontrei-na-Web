// Mecanismo de busca
{
    function Buscar(){
      let input = document.getElementById("input");
      input = input.value.toLowerCase();
  var prods = document.getElementsByClassName("produto");
  var nomes = document.getElementsByClassName("nome-produto");

for(var i = 0; i<= prods.length; i++){

if(!nomes[i].innerText.toLowerCase().includes(input)){
  prods[i].style.display ="none";
}
else{
  prods[i].style.display = ""
}
}
}
}
// sistema de carregamento
{
    const load = document.getElementById("load");
    function HideLoad(){
        load.style.display = "none";
    }
}

let conteiner = document.getElementById("catalogo_produtos");
// Organização em ordem alfabética
// {
//         produtos.sort((a,b)=>{
//             if(a.nome<b.nome){
//                 return -1;
//             }
//             else{ return true}
//         });
// }
    //Função para pegar os produtos encontrados no arquivo JSON
{
    function getProdutos(){
        fetch("../produtos.json")
        .then((res)=> res.json())
        .then((data)=> LoadProducts(data))
    }
    getProdutos();
    // função carregadora de produtos

   async function LoadProducts(ArrayProdutos){
           for(let i=0; i<ArrayProdutos.length; i++){

                    const card = document.createElement("a")
                    card.setAttribute("class","produto");
                    card.setAttribute("href", ArrayProdutos[i].link)
                    card.setAttribute("target", "_blank")
                    conteiner.appendChild(card);

                    var img = document.createElement("img");
                    img.setAttribute("class", "ft-produto");
                    img.setAttribute("src",ArrayProdutos[i].img)

                    card.appendChild(img);

                    var nome_prod = document.createElement("h1");
                    nome_prod.setAttribute("class", "nome-produto");
                    nome_prod.innerText = ArrayProdutos[i].nome;

                    card.appendChild(nome_prod);

                  var  valor = document.createElement("p");
                    valor.setAttribute("class", "valor");
                    valor.innerText = "R$" + ArrayProdutos[i].valor;

                    card.appendChild(valor);

                    let produtos = JSON.stringify(ArrayProdutos);
           }
    }
}
// Declaração de itens sem função
{
const itemU = document.getElementById("function-undefined");
itemU.addEventListener("click",()=>{

alert("Esta função não está disponivel no momento.");

});
}
// Scripts do menu
{
    var menu = document.querySelector(".menu-nav");
var button =document.querySelector(".menu-button");
var body = document.querySelector("body");

button.addEventListener("click",()=>{
        button.classList.toggle("menu-button-active");
        menu.classList.toggle("menu-nav-active");
        if( body.style.overflow === "" ){
                body.style.overflow = "hidden";
        }
        else{
                body.style.overflow = "";
        }
});
}