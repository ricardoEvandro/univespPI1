/** #08/04/2025: Implementação das alterações necessárias para cumprimento dos requisitos:
 *  Nome Completo; 
 *  Data de Nascimento;
 *  Cartão Nacional de Saúde;
 *  CNES;
 *  CPF;
 *  Cargo;
 *  Categoria Profissional (CBO);
 *  Matrícula;
 *  Data de Admissão;
 *  Data Demissão;
 *  Conselho de classe (COREN, CRM, CREFITO);
 *  número do conselho de classe.
 * 
 *  Criação do metodo excluir para concluir o CRUD
 *   
*/


class Usuario {
  constructor(nome, dataNascimento, cpf,endereco,cnes,cargo,cbo,matricula,dataAdmiss,dataDemiss,consClasse,numConsClasse) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.endereco = endereco;
    this.cnes = cnes;
    this.cargo = cargo;
    this.cbo = cbo;
    this.matricula = matricula;
    this.dataAdmiss = dataAdmiss;
    this.dataDemiss = dataDemiss;
    this.consClasse = consClasse;
    this.numConsClasse = numConsClasse;
  }

  // Método para salvar o usuário no banco MySQL 
  salvar() {
    var conn = ConnectionFactory.getConnection();  // Usando ConnectionFactory para obter a conexão
    
    // SQL para inserir dados
    var sql = "INSERT INTO usuario (nome, data_Nascimento, cpf,endereco,cnes,cargo,cbo,matricula,dataAdmiss,dataDemiss,consClasse,numConsClass) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.nome);
    stmt.setString(2, this.dataNascimento);  // A data deve estar no formato 'YYYY-MM-DD'
    stmt.setString(3, this.cpf);
    stmt.setString(4, this.endereco);
    stmt.setString(5, this.cnes);
    stmt.setString(6, this.cargo);
    stmt.setString(7, this.cbo);
    stmt.setString(8, this.matricula);
    stmt.setString(9, this.dataAdmiss);
    stmt.setString(10, this.dataDemiss);
    stmt.setString(11, this.consClasse);
    stmt.setString(12, this.numConsClasse);
    
    try {
      var result = stmt.executeUpdate();
      return "Usuário cadastrado com sucesso!";
    } catch (e) {
      Logger.log(e.toString());
      return "Erro ao cadastrar o usuário. Detalhamento: " + e.toString();
    } finally {
      stmt.close();
      conn.close();
    }
  }
   
  //criar o método editar , o método listar e o método excluir.

  editar(){

    var conn = ConnectionFactory.getConnection();
    var sql = "UPDATE usuario SET nome = ?, data_nascimento = ?, cpf = ?, endereco = ?, cnes = ?, cargo = ?, cbo = ?, matricula = ?, dataAdmiss = ?, dataDemiss = ?, consClasse = ?, numConsClass = ? WHERE cpf = ?";

    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.nome);
    stmt.setString(2, this.dataNascimento);  // A data deve estar no formato 'YYYY-MM-DD'
    stmt.setString(3, this.cpf);
    stmt.setString(4, this.endereco);
    stmt.setString(5, this.cnes);
    stmt.setString(6, this.cargo);
    stmt.setString(7, this.cbo);
    stmt.setString(8, this.matricula);
    stmt.setString(9, this.dataAdmiss);
    stmt.setString(10, this.dataDemiss);
    stmt.setString(11, this.consClasse);
    stmt.setString(12, this.numConsClasse);
    
    try {
      var result = stmt.executeUpdate();
      return "Usuário alterado com sucesso!";
    } catch (e) {
      Logger.log(e.toString());
      return "Erro ao alterar o usuário.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  listar(){

    var conn = ConnectionFactory.getConnection();

    var sql = "SELECT * FROM usuario";

    var stmt = conn.prepareStatement(sql);

    try{
      
      var result = stmt.executeQuery(sql);
      var usuarios = [] 
       while(result.next()){

          let us = new Usuario(
            result.getString("nome"),
            result.getString("data_nascimento"),
            result.getString("cpf"),
            result.getString("endereco"),
            result.getString("cnes"),
            result.getString("cargo"),
            result.getString("cbo"),
            result.getString("matricula"),
            result.getString("dataAdmiss"),
            result.getString("dataDemiss"),
            result.getString("consClasse"),
            result.getString("numConsClass")
            
            )  

         
           usuarios.push(us);

        }
       Logger.log(usuarios)
       return usuarios
    }catch (e) {
     Logger.log(e.toString()); 
     return "Erro ao tentar listar os usuários. Detalhamento: " + e.toString();


    }
  
  // Criar a função que irá validar os campos
  // Criar a função que irá excluir os campos
  
  
  }


}
