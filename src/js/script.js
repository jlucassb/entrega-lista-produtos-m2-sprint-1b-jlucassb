
function montarListaProdutos(listaProdutos){
    const container = document.querySelector('#listProdutos') 
    container.innerHTML = ''
    const ul = document.createElement('ul')
    container.appendChild(ul)

    for(let i = 0; i < listaProdutos.length; i++){
        
        const li = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const span = document.createElement('span')
        
        img.src = listaProdutos[i].img          
        img.alt = listaProdutos[i].nome         
        h3.innerText = listaProdutos[i].nome    
        p.innerText = listaProdutos[i].preco    
        span.innerText = listaProdutos[i].secao
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
    
        ul.appendChild(li)

    }
}
montarListaProdutos(produtos)

function filtrarPorHortifruti(){
    const listaHortifruti = produtos.filter((produtos) =>{
        return produtos.secao === "Hortifruti"
    }) 
    montarListaProdutos(listaHortifruti)
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

function filtrarPorTodos(){
    return montarListaProdutos(produtos)
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodos.addEventListener('click', filtrarPorTodos)

function campoDeBusca(){
    const inputPesquisa = document.querySelector('.campoBuscaPorNome')
    const produtoPesquisado = []
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].nome.toLowerCase().indexOf(inputPesquisa.value) !== -1){
            produtoPesquisado.push(produtos[i])
        }
    }
    montarListaProdutos(produtoPesquisado)
}

const botaoPesquisarPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
botaoPesquisarPorNome.addEventListener('click', campoDeBusca)