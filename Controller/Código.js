

function doGet() {
    
    
    var template = HtmlService.createTemplateFromFile('View/index'); 
       
    return template.evaluate();
}


function include(pagina){

   var template = HtmlService.createHtmlOutputFromFile("View/"+ pagina); 
       
    return template.getContent();

}


function salvarUsuario(dados) {
 
  // Criar objeto Usuario a partir dos dados do formulário
  var usuario = new Usuario(dados.nome, dados.dataNascimento, dados.cpf, dados.endereco);
  
  // Chama o método salvar() da classe Usuario
  return usuario.salvar();
}

function editarUsuario(dados){

  var usuario = new Usuario(dados.nome, dados.dataNascimento,dados.cpf, dados.endereco);

  return usuario.editar();


}

function listarUsuarios(){

  var user = new Usuario().listar();
  Logger.log(user);
  return user;
}




