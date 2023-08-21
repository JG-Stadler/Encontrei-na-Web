let conteiner = document.getElementById("catalogo_produtos");
const produtos = [
    {
        nome:"Luminaria Astronauta Projetor Galáxia Led Nebulosa Estrelado",
        valor: "159,99",
        img: "https://cdn.awsli.com.br/600x1000/2470/2470063/produto/186959198/3100e6c71e.jpg",
        link: "https://shope.ee/10ZlpqeP36"
    },
    {
        nome:"Lampada Bluetooth De Led Caixa De Som Com Controle Rgb 12W",
        valor: "23,89",
        img: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljpqftsimqoz5f_tn",
        link: "https://shope.ee/8KMMaq5j0q"
    },
    {
        nome:"Luminaria led Nike",
        valor: "84,99",
        img:"https://down-br.img.susercontent.com/file/d661a084f0c6f3a65feba92e9b463281",
        link: "https://shope.ee/8KMRUfpf9u"
    },
    {
        nome:"Fita de LED RGB 3528 Rolo 5m 3 com Fonte e Controle",
        valor: "24,79",
        img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/365/699/products/fita-rgb-gadit1-77ca3cb2f48ccd2b8016492518691850-1024-1024.png",
        link: "https://shope.ee/40DSM66gcs"
    },
    {
        nome:"Tapete Nike 60x40 para porta",
        valor: "65,00",
        img:"https://http2.mlstatic.com/D_NQ_NP_869942-MLB46810740153_072021-W.jpg",
        link: "https://shope.ee/6pXdjXYeeK"
    },
    {
        nome:"Mini Espelho De Maquiagem Portátil Com 5 Pincéis",
        valor: "10,00",
        img:"https://www.utimix.com/wp-content/uploads/2022/11/320a8390afec446eda876befac2f1e51.jpg",
        link: "https://shope.ee/6fEEs1C5xo"
    },
    {
        nome:"Chamas Umidificador De Ar Difusor De Aroma Aromaterapia",
        valor: "29,90",
        img:"https://a-static.mlcdn.com.br/450x450/umidificador-ar-difusor-oleo-essencial-chama-200ml-led-relet/relet/umidificador-pto-fogo-248/2ecc370069d9911a423de0d278e3cf20.jpeg",
        link: "https://shope.ee/9pBGeNZ6gv"
    },
    {
        nome:"Kit 3 Quadros Placas Decorativa Loja Grifes Moda Masculina Bart Simpsons",
        valor: "29,90",
        img:"https://cf.shopee.com.br/file/aae93605c7471a297e32653042986e7d",
        link: "https://shope.ee/fx1kNhiHW"
    },
    {
        nome:"Adesivo Papel De Parede Para Quarto ou Sala  Texturizado Lavável",
        valor: "17,98",
        img:"https://img.elo7.com.br/product/main/3ADDDA6/papel-de-parede-3d-tijolo-preto-autoadesivo-tijolinho-adesivo.jpg",
        link: "https://shope.ee/7UnLtR9e4W"
    },
    {
        nome:"Selador de Plástico Portátil Para Cozinha",
        valor: "9,99",
        img:"https://www.bazardosaara.com.br/image/cache/data/7866889923761a-1150x850h.jpg",
        link: "https://shope.ee/10a3N07rdR"
    },
    {
        nome:"Garrafa De Água Squeeze Academia Com Adesivos",
        valor: "9,50",
        img:"https://images.tcdn.com.br/img/img_prod/1021421/garrafa_de_agua_squeeze_1_litro_615_1_6d98a46b0b5d8b7dc87b68f65fa6c0c0.jpg",
        link: "https://shope.ee/3puEknmSkY"
    }

]
// Organização em ordem alfabética
{
        produtos.sort((a,b)=>{
            if(a.nome<b.nome){
                return -1;
            }
            else{ return true}
        });
}
    // função geradora de produtos
{
    function LoadProducts(){
           for(let i=0; i<produtos.length; i++){

                    const card = document.createElement("a")
                    card.setAttribute("class","produto");
                    card.setAttribute("href", produtos[i].link)
                    card.setAttribute("target", "_blank")
                    conteiner.appendChild(card);

                    var img = document.createElement("img");
                    img.setAttribute("class", "ft-produto");
                    img.setAttribute("src",produtos[i].img)

                    card.appendChild(img);

                    var nome_prod = document.createElement("h1");
                    nome_prod.setAttribute("class", "nome-produto");
                    nome_prod.innerText = produtos[i].nome;

                    card.appendChild(nome_prod);

                  var  valor = document.createElement("p");
                    valor.setAttribute("class", "valor");
                    valor.innerText = "R$" + produtos[i].valor;

                    card.appendChild(valor);
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

// sistema de carregamento
{
    const load = document.getElementById("load");
    function HideLoad(){
        load.style.display = "none";
    }
}

// Mecanismo de busca
{
    var buscar = document.getElementById("buscar");

        buscar.addEventListener("click",()=>{
            var input = document.getElementById("input");
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