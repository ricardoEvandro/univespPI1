

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
  var usuario = new Usuario(dados.nome, dados.dataNascimento, dados.cpf, dados.endereco,dados.cnes,dados.cargo,dados.cbo,dados.matricula,dados.dataAdmiss,dados.datademiss,dados.consClasse,dados.numConsClasse);
  
  // Chama o método salvar() da classe Usuario
  return usuario.salvar();
}

function editarUsuario(dados){

  var usuario = new Usuario(dados.nome, dados.dataNascimento,dados.cpf, dados.endereco,dados.cnes,dados.cargo,dados.cbo,dados.matricula,dados.dataAdmiss,dados.dataDemiss,dados.consClasse,dados.numConsClasse
  );

  return usuario.editar();

}

function listarUsuarios(){

  var user = new Usuario().listar();
  Logger.log(user);
  return user;
}

function salvarPaciente(dados){

var paciente = new Paciente(dados.Nome, dados.dataNascimento, dados.cns, dados.CPF, dados.Equipe, dados.microarea, dados.familia, dados.nomeMae, dados.racaCor,dados.telefone, dados.estadoCivil,dados.sexo, dados.CBO, dados.escolaridade, dados.renda)

return paciente.salvar();

}

function editarPaciente(dados){

var paciente = new Paciente(dados.Nome, dados.dataNascimento, dados.cns, dados.CPF, dados.Equipe, dados.microarea, dados.familia, dados.nomeMae, dados.racaCor,dados.telefone, dados.estadoCivil,dados.sexo, dados.CBO, dados.escolaridade, dados.renda)

return paciente.editar();

}

function listarPaciente(){
var paciente = new Paciente().listar();
return paciente;
}





