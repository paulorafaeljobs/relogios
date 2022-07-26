function closeNav() {
    document.getElementById("AbrirProduto").style.width = "0%";
    document.title = 'Mundo dos Relógios'
    let img1 = document.getElementById('img1')
    let img2 = document.getElementById('img2')
    let img3 = document.getElementById('img3')
    let img4 = document.getElementById('img4')
    img1.src = ''
    img2.src = ''
    img3.src = ''
    img4.src = ''
}
function verproduto(id){
    document.getElementById("AbrirProduto").style.width = "100%";
    function retorna(value){if (value.id == id) return value;}
    var products = produtos.filter(retorna);
        products.forEach(item => { 
            document.title = item.nome
            let btncomprar = document.getElementById('btn-comprar')
            let alfa = document.getElementById('alfa')
            let img1 = document.getElementById('img1')
            let img2 = document.getElementById('img2')
            let img3 = document.getElementById('img3')
            let img4 = document.getElementById('img4')
            let nome = document.getElementById('nome')
            let valor1 = document.getElementById('valor1')
            let valor2 = document.getElementById('valor2')
            let info = document.getElementById('info')
            alfa.src = 'produto/'+item.dir+'/'+ item.img1
            img1.src = 'produto/'+item.dir+'/'+ item.img1
            img2.src = 'produto/'+item.dir+'/'+ item.img2
            img3.src = 'produto/'+item.dir+'/'+ item.img3
            img4.src = 'produto/'+item.dir+'/'+ item.img4
            img1.onclick = function(){alfa.src = 'produto/'+ item.dir +'/'+ item.img1};
            img2.onclick = function(){alfa.src = 'produto/'+ item.dir +'/'+ item.img2};
            img3.onclick = function(){alfa.src = 'produto/'+ item.dir +'/'+ item.img3};
            img4.onclick = function(){alfa.src = 'produto/'+ item.dir +'/'+ item.img4};
            info.innerHTML = item.info
            nome.innerHTML = item.nome
            valorDividido = item.preço / 12
            valor1.innerHTML ='12x de '+ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDividido)
            valor2.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preço)
            btncomprar.onclick = function(){
                // window.location.href = "https://api.whatsapp.com/send/?phone=5527992613371&text=Quero%20fazer%20um%20Pedido:%20%20" + item.nome + "%20" + 
                // new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preço)
                window.location.href = "https://api.whatsapp.com/send/?phone=5527992613371&text=Quero%20fazer%20um%20Pedido:%20%20" + item.nome
            };                                                     
        })
}
function MostrarProdutos(){
    produtos.forEach((item) => {
        let Flexbox = document.getElementById('flexBox');
        let Flex = document.createElement('div');
        let p1 = document.createElement('img');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('button');
        Flex.setAttribute('class', 'flex_anuncio');
        Flex.setAttribute('class', 'flex_anuncio');    
        p1.setAttribute('class', 'img_anuncio');  
        p1.setAttribute('src', 'produto/'+item.dir+'/'+item.img1);
        p1.setAttribute('alt', '');  
        p2.setAttribute('class', 'flex-title');  
        p4.setAttribute('class', 'flex-value2'); 
        p5.setAttribute('class', 'button-comprar'); 
        p5.setAttribute('onclick', 'verproduto('+item.id +')'); 
        p2.innerHTML = item.nome;
        p3.innerHTML = '<span class="flex-value1">'+ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preço) + '</span>'
        valorDividido = item.preço / 12
        p4.innerHTML = '<strong>12</strong>x de <strong>' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDividido) + '</strong> sem juros'
        p5.innerHTML = 'Ver Produto'
        Flex.appendChild(p1);
        Flex.appendChild(p2);
        Flex.appendChild(p3);
        Flex.appendChild(p4);
        Flex.appendChild(p5);
        Flexbox.appendChild(Flex);
    });
}
MostrarProdutos()