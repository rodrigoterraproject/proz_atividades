// Capturando os elementos criados
var titulo = document.getElementById('titulo');
var listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
var link = document.getElementById('meuLink');
var listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = 'Título adicionado via JavaScript';
link.innerText = 'Proz Educação';

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = '<li><a href="https://www.site1.com">Site 1</a></li><li><a href="https://www.site2.com">Site 2</a></li><li><a href="https://www.site3.com">Site 3</a></li>';
