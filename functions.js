const items = [
    {
        id: 0,
        nome:'moleton',
        img: 'image.jpg',
        quantidade: 0   
    },
    {
        id: 1,
        nome:'toca',
        img: 'image.jpg',
        quantidade: 0   
    },
    {
        id: 2,
        nome:'luvas',
        img: 'image.jpg',
        quantidade: 0   
    },
]

inicializarLoja = () => {
    var containerProduto = document.getElementById('produto');
    items.map((val)=>{
        containerProduto.innerHTML+= `
        
      <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</P>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
      </div>
    
        `;

    })

}

inicializarLoja();


atualizarCarrinho = () =>{
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
       
        <p>`+val.nome+` | quantidade:`+val.quantidade+`</p>
        `;
        }
    })

}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click",function(){
    let key = this.getAttribute('key');
    items[key].quantidade++;
    atualizarCarrinho();
   
  })
}