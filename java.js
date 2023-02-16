
function addchapeus(){

    let body = document.querySelector('body');

    h2 = document.createElement('h2');
    body.appendChild(h2);
    h2.innerHTML = 'Chapéus'

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectionc');
    body.appendChild(sectionc);
    sectionc.id = 'Chapéus';

    let divcatc = document.createElement('div');
    sectionc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catC');

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Chapéus'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            sectionc.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectionb');
    body.appendChild(sectionc);
    sectionc.id = 'Bolsas';

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2b');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Bolsas >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catBs');

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsb');
    sectionc.appendChild(divp); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Bolsas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectionbt');
    body.appendChild(sectionc);
    sectionc.id = 'Botas';

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsbt');
    sectionc.appendChild(divp); 

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2bt');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Botas >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catB');

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Botas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectiona');
    body.appendChild(sectionc);
    sectionc.id = 'Acessórios';

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2a');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Acessórios >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catA');

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsa');
    sectionc.appendChild(divp); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Acessórios'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectiona');
    body.appendChild(sectionc);
    sectionc.id = 'Pets';

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2a');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Pets >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catP');

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsa');
    sectionc.appendChild(divp); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Pets'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectiona');
    body.appendChild(sectionc);
    sectionc.id = 'Selas';

    let h2catc = document.createElement('h2');
    h2catc.setAttribute('class', 'h2a');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Selas >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catS');

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsa');
    sectionc.appendChild(divp); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Selas'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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

    let sectionc = document.createElement('section');
    sectionc.setAttribute('class', 'sectiona');
    body.appendChild(sectionc);
    sectionc.id = 'Outros';

    let h2catc = document.createElement('h3');
    h2catc.setAttribute('class', 'h2a');
    sectionc.appendChild(h2catc);
    h2catc.innerHTML = 'Outros >';

    let divcatc = document.createElement('div');
    h2catc.appendChild(divcatc);
    divcatc.setAttribute('class', 'catO');

    let divp = document.createElement('div');
    divp.setAttribute('class', 'cardsa');
    sectionc.appendChild(divp); 

    for(let i = 0; i < stock.length; i++){
        if(stock[i].tag === 'Outros'){

            let produto = document.createElement('div');
            produto.setAttribute('class', 'product');
            divp.appendChild(produto);
            
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