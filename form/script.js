var producs = ["Finalizar Venda", "Baby Doll de Setim", "Baby Doll Signois", "Body Corpeti", "Baby Doll Flu Flu", "Baby Doll Kids", "Baby Doll Renda Monica", "Baby Doll Times", "Body Tule Sabrina", "Bodys Claire s/ Bojo", "Bodys Tule Sabrina Renda", "Calcinha Callesson", "Calcinha Pluze Sine", "Camisola de Renda Personagens", "Camisola Ultra Luxo Milena", "Coj. s/ Bojo Lisa", "Coj. Ultra Luxo Julia", "Coj. Sem Costura", "Conjunto Babartana Luxo", "Conjunto Chic Luxo c/ Perneira", "Conjunto Dia a Dia", "Conjunto Ultra Luxo Bordado", "Conjunto Cropped Laura", "Conjunto Camisola Ultra Luxo Diana", "Conjunto s/ Bojo Aro Luiza", "Espartilho Mimmus", "Kit Casal", "Kit Levanta Seios", "Kit Mãe e Filha", "Kit Pijama Estampado c/ Tapaoelho", "Macaquinho", "Pijama Calça Comprida", "Pijama de Botão", "Pijama Pluze Size Americano", "Sabonetes Íntimos", "Sutiã Malu Reforçado"];
var options = ["PP", "P", "M", "G", "XG"];

function saveFormData() {
    var formData = {
      nome: document.getElementById("nome").value,
      endereco: document.getElementById("endereco").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value,
      option1: document.getElementById("option1").checked,
      option2: document.getElementById("option2").checked,
      option3: document.getElementById("option3").checked
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "formpt2.html";
  }
function showProgressBar() {

  var progressBar = document.getElementById("progressBar");
  progressBar.innerHTML = '<div class="progress-bar-fill"></div>';
}

window.onload = function() {
  var formData = localStorage.getItem("formData");

  if (formData) {
    formData = JSON.parse(formData);
    var formResults = document.getElementById("formResults");

    formResults.innerHTML = "<h2>Dados do Formulário</h2>";
    formResults.innerHTML += "<p>Nome: " + formData.nome + "</p>";
    formResults.innerHTML += "<p>Endereço: " + formData.endereco + "</p>";
    formResults.innerHTML += "<p>Telefone: " + formData.telefone + "</p>";
    formResults.innerHTML += "<p>E-mail: " + formData.email + "</p>";
    formResults.innerHTML += "<p>Option 1: " + (formData.option1 ? "Selecionado" : "Não selecionado") + "</p>";
    formResults.innerHTML += "<p>Option 2: " + (formData.option2 ? "Selecionado" : "Não selecionado") + "</p>";
    formResults.innerHTML += "<p>Option 3: " + (formData.option3 ? "Selecionado" : "Não selecionado") + "</p>";

    localStorage.removeItem("formData");
  }
};

function buscarProdutos() {

  const inputProduto = document.getElementById('produto');
  const valorProduto = inputProduto.value.toLowerCase();
  const listaProdutos = producs;;
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
  const divOpcoesMaca = document.createElement('div');
  divOpcoesMaca.id = 'opcoes-produtos-' + ProdutosAdd;
  divOpcoesMaca.className = 'options-container'

  const labelTipoMaca = document.createElement('label');
  labelTipoMaca.setAttribute('for', 'tipo-produto-' + ProdutosAdd);
  labelTipoMaca.textContent = 'Tipo de produto:';

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
  divOpcoesMaca.appendChild(inputQuantidadeProduto);

  const formContainer = document.querySelector('#moreProduct');
  formContainer.appendChild(divOpcoesMaca);
}