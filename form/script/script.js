var producs = ["Finalizar Venda", "Baby Doll de Setim", "Baby Doll Signois", "Body Corpeti", "Baby Doll Flu Flu", "Baby Doll Kids", "Baby Doll Renda Monica", "Baby Doll Times", "Body Tule Sabrina", "Bodys Claire s/ Bojo", "Bodys Tule Sabrina Renda", "Calcinha Callesson", "Calcinha Pluze Sine", "Camisola de Renda Personagens", "Camisola Ultra Luxo Milena", "Coj. s/ Bojo Lisa", "Coj. Ultra Luxo Julia", "Coj. Sem Costura", "Conjunto Babartana Luxo", "Conjunto Chic Luxo c/ Perneira", "Conjunto Dia a Dia", "Conjunto Ultra Luxo Bordado", "Conjunto Cropped Laura", "Conjunto Camisola Ultra Luxo Diana", "Conjunto s/ Bojo Aro Luiza", "Espartilho Mimmus", "Kit Casal", "Kit Levanta Seios", "Kit Mãe e Filha", "Kit Pijama Estampado c/ Tapaoelho", "Macaquinho", "Pijama Calça Comprida", "Pijama de Botão", "Pijama Pluze Size Americano", "Sabonetes Íntimos", "Sutiã Malu Reforçado"];
var options = ["PP", "P", "M", "G", "XG"];

var nomes = [
  "Ana Silva",
  "Pedro Santos",
  "Sofia Oliveira",
  "Luís Pereira",
  "Carolina Costa",
  "Miguel Ferreira",
  "Beatriz Almeida",
  "Guilherme Rodrigues",
  "Mariana Neves",
  "Tiago Gomes"
];

var enderecos = [
  "Rua das Flores, 123 - Centro, São Paulo - SP, 01001-000",
  "Avenida Paulista, 456 - Bela Vista, São Paulo - SP, 01310-100",
  "Rua do Rosário, 789 - Santa Efigênia, Rio de Janeiro - RJ, 20041-002",
  "Praça da Liberdade, 246 - Funcionários, Belo Horizonte - MG, 30140-010",
  "Rua da Consolação, 1350 - Consolação, São Paulo - SP, 01301-100",
  "Rua do Acre, 234 - Centro, Rio de Janeiro - RJ, 20081-240",
  "Avenida Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-000",
  "Rua 24 de Maio, 105 - República, São Paulo - SP, 01041-001",
  "Rua do Lavradio, 132 - Lapa, Rio de Janeiro - RJ, 20230-070",
  "Rua da Praia, 789 - Centro Histórico, Porto Alegre - RS, 90020-307"
];

var telefones = [
  "(11) 98765-4321",
  "(21) 91234-5678",
  "(31) 92345-6789",
  "(41) 93456-7890",
  "(51) 94567-8901",
  "(61) 95678-9012",
  "(71) 96789-0123",
  "(81) 97890-1234",
  "(91) 98901-2345",
  "(48) 99012-3456",
  "+1 (123) 456-7890",
  "123-456-7890",
  "(123) 456 7890",
  "1234567890"
];

var emails = [
  "ana_silva@example.com",
  "pedro_santos@example.com",
  "sofia_oliveira@example.com",
  "luis_pereira@example.com",
  "carolina_costa@example.com",
  "miguel_ferreira@example.com",
  "beatriz_almeida@example.com",
  "guilherme_rodrigues@example.com",
  "mariana_neves@example.com",
  "tiago_gomes@example.com"
];



function buscarProdutos() {

  const inputProduto = document.getElementById('produto');
  const valorProduto = inputProduto.value.toLowerCase();
  const listaProdutos = producs;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  listaProdutos.forEach((produto) => {
    if (produto.toLowerCase().includes(valorProduto)) {
      const listItem = document.createElement('li');
      listItem.textContent = produto;
      listItem.addEventListener('click', () => {
        inputProduto.value = produto;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });
}

let ProdutosAdd = 0;

function adicionarOpcoesProduto() {
  ProdutosAdd++;
  let producctName = document.getElementById('produto').value;
  const divOpcoesMaca = document.createElement('div');
  divOpcoesMaca.id = 'opcoes-produtos-' + ProdutosAdd;
  divOpcoesMaca.className = 'options-container'

  const labelTipoMaca = document.createElement('label');
  labelTipoMaca.setAttribute('for', 'tipo-produto-' + ProdutosAdd);
  labelTipoMaca.setAttribute('id', 'label-tipo-produto-' + ProdutosAdd);
  labelTipoMaca.set
  labelTipoMaca.textContent = producctName;

  const selectTipoDeProduto = document.createElement('select');
  selectTipoDeProduto.id = 'tipo-produto-' + ProdutosAdd;
  selectTipoDeProduto.name = 'tipo-produto';

  options.forEach((pdt)=>{
    const opcaoAmarela = document.createElement('option');
    opcaoAmarela.value = pdt.trim().toLowerCase().replace(/([^A-Z0-9]+)(.)/ig);
    opcaoAmarela.textContent = pdt;
    selectTipoDeProduto.appendChild(opcaoAmarela);
  })
  

  const labelQuantidadeProduto = document.createElement('label');
  labelQuantidadeProduto.setAttribute('for', 'quantidade-produto-' + ProdutosAdd);
  labelQuantidadeProduto.textContent = 'Quantidade:';

  const inputQuantidadeProduto = document.createElement('input');
  inputQuantidadeProduto.type = 'number';
  inputQuantidadeProduto.id = 'quantidade-produto-' + ProdutosAdd;
  inputQuantidadeProduto.name = 'quantidade-produto';
  inputQuantidadeProduto.min = '1';
  inputQuantidadeProduto.value = '1';

  divOpcoesMaca.appendChild(labelTipoMaca);
  divOpcoesMaca.appendChild(selectTipoDeProduto);
  divOpcoesMaca.appendChild(document.createElement('br'));
  divOpcoesMaca.appendChild(labelQuantidadeProduto);
  divOpcoesMaca.appendChild(inputQuantidadeProduto);c

  const formContainer = document.querySelector('#moreProduct');
  formContainer.appendChild(divOpcoesMaca);
}

function enviar(){
  
  for(var i=1; i<ProdutosAdd; i++){
    var Produto = document.getElementById("label-tipo-produto-"+i).innerHTML
    var tamanho = document.getElementById("tipo-produto-"+i).value;
    var quantidade = document.getElementById("quantidade-produto-"+i).value;
  }
}

function buscarTelefone() {
  const inputTelefone = document.getElementById('telefone');
  const valorTelefone = inputTelefone.value;
  const listaDeNumerosCadastrados = numeros; // substitua "numeros" pela sua lista de números cadastrados
  const resultado = document.getElementById('resultado-telefone');
  resultado.innerHTML = '';

  listaDeNumerosCadastrados.forEach((numero) => {
    if (numero.includes(valorTelefone)) {
      const listItem = document.createElement('li');
      listItem.textContent = numero;
      listItem.addEventListener('click', () => {
        inputTelefone.value = numero;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });
}

function buscarEndereco(){

  const inputProduto = document.getElementById('endereco');
  const valorProduto = inputProduto.value.toLowerCase();
  const listaDenomesCadatrados = enderecos;
  const resultado = document.getElementById('resultado-endereco');
  resultado.innerHTML = '';

  listaDenomesCadatrados.forEach((nome) => {
    if (nome.toLowerCase().includes(valorProduto)) {
      const listItem = document.createElement('li');
      listItem.textContent = nome;
      listItem.addEventListener('click', () => {
        inputProduto.value = nome;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });
}

function buscarTelefone(){

  const inputProduto = document.getElementById('telefone');
  const valorProduto = inputProduto.value;
  const listaDenomesCadatrados = telefones;
  const resultado = document.getElementById('resultado-telefone');
  resultado.innerHTML = '';

  listaDenomesCadatrados.forEach((nome) => {
    if (nome.includes(valorProduto)) {
      const listItem = document.createElement('li');
      listItem.textContent = nome;
      listItem.addEventListener('click', () => {
        inputProduto.value = nome;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });

}

function buscarEmail(){

  const inputProduto = document.getElementById('email');
  const valorProduto = inputProduto.value.toLowerCase();
  const listaDenomesCadatrados = emails;
  const resultado = document.getElementById('resultado-email');
  resultado.innerHTML = '';

  listaDenomesCadatrados.forEach((nome) => {
    if (nome.toLowerCase().includes(valorProduto)) {
      const listItem = document.createElement('li');
      listItem.textContent = nome;
      listItem.addEventListener('click', () => {
        inputProduto.value = nome;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });
}

function buscarNome(){

  const inputProduto = document.getElementById('nome');
  const valorProduto = inputProduto.value.toLowerCase();
  const listaDenomesCadatrados = nomes;
  const resultado = document.getElementById('resultado-nome');
  resultado.innerHTML = '';

  listaDenomesCadatrados.forEach((nome) => {
    if (nome.toLowerCase().includes(valorProduto)) {
      const listItem = document.createElement('li');
      listItem.textContent = nome;
      listItem.addEventListener('click', () => {
        inputProduto.value = nome;
        resultado.innerHTML = '';
      });
      resultado.appendChild(listItem);
    }
  });
}


// Função para calcular a distância de edição entre duas strings
function calculateEditDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Substituição
          matrix[i][j - 1] + 1, // Inserção
          matrix[i - 1][j] + 1 // Deleção
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Função para pesquisar a palavra/frase no array
function searchInArray(query, array) {
  const results = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const distance = calculateEditDistance(query.toLowerCase(), item.toLowerCase());
    const similarity = 1 - distance / Math.max(query.length, item.length);

    if (similarity >= 0.8) { // Define um limite de similaridade mínima de 80%
      results.push({ item, similarity });
    }
  }

  return results;
}

function searchPhoneNumber(phoneNumber, phoneArray) {
  // Remover caracteres especiais do número de telefone de pesquisa
  const cleanPhoneNumber = phoneNumber.replace(/[\(\)\-\s+]/g, '');

  // Percorrer o vetor de telefones
  for (let i = 0; i < phoneArray.length; i++) {
    const cleanPhone = phoneArray[i].replace(/[\(\)\-\s+]/g, '');

    // Verificar se o número de telefone corresponde
    if (cleanPhone === cleanPhoneNumber) {
      return true;
    }
  }

  return false;
}