function addchapeus(){

    let body = document.querySelector('body');

    h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.setAttribute('class', 'h2sec');
    h2.innerHTML = 'Chapéus'

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa incrivel coleção de chapéus Cambará';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Chapéus';

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec');

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Chapéus'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }

}
addchapeus();

function addbolsas(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Bolsas';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa coleção de bolsas Cambará';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Bolsas';

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec');


    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Bolsas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addbolsas();

function addbotas(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Calçados';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa coleção de Calçados Cambará';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Botas';

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec'); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Botas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addbotas();

function addacess(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Bainhas';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa incrivel coleção de bainhas sobre medidas';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Acessórios';

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec');

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Acessórios'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addacess();



function addpets(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Pet Shop';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa incrivel coleção para seus bichinhos';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Pets';  

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec'); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Pets'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addpets();


function addselas(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Selas';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Nossa incrivel coleção para montarias';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Selas'; 

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catS');

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec'); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Selas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addselas();

function addoutros(){

    let body = document.querySelector('body');

    let h2catc = document.createElement('h3');
    h2catc.setAttribute('class', 'h2sec');
    body.appendChild(h2catc);
    h2catc.innerHTML = 'Outros';

    let p = document.createElement('p');
    body.appendChild(p)
    p.setAttribute('class', 'pchapeus');
    p.innerHTML = 'Dentre outros itens que a Cambara pode lhe oferece';

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'section');
    body.appendChild(sectionc);
    sectionc.id = 'Outros';

    let divsec = document.createElement('div');
    sectionc.appendChild(divsec);
    divsec.setAttribute('class', 'divsec');

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Outros'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divsec.appendChild(produto);
            
            let figcard = document.createElement('figure');
            produto.appendChild(figcard);
            figcard.setAttribute('class', 'figcard');
    
            let imgcard = document.createElement('img');
            figcard.appendChild(imgcard);
            imgcard.setAttribute('class', 'imgcard');
            imgcard.src = stock[i].img
            imgcard.alt = stock[i].nome;
    
            let figcap = document.createElement('figcaption');
            produto.appendChild(figcap);
            figcap.setAttribute('class', 'figcap');
            figcap.innerHTML = `${stock[i].tag}`;
    
            let sobreitem = document.createElement('div');
            produto.appendChild(sobreitem);
            sobreitem.setAttribute('class', 'sobreitens');
    
            let nameprice = document.createElement('div');
            sobreitem.appendChild(nameprice);
            nameprice.setAttribute('class', 'nameprice');
    
            let h2item = document.createElement('h2');
            nameprice.appendChild(h2item);
            h2item.setAttribute('class', 'h2item');
            h2item.innerHTML = `${stock[i].nome}`;
    
            let priceitem = document.createElement('span');
            priceitem.setAttribute('class', 'priceitem');
            nameprice.appendChild(priceitem);
            priceitem.innerHTML = `R$ ${stock[i].valor}`;
    
            let tamanho = document.createElement('h2');
            tamanho.setAttribute('class', 'size');
            sobreitem.appendChild(tamanho);
            tamanho.innerHTML = 'Descrição:';
    
            let desc = document.createElement('p');
            sobreitem.appendChild(desc);
            desc.setAttribute('class', 'desc');
            desc.innerHTML = `${stock[i].descript}`;

        }


    }


}
addoutros();