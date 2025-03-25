class Usuario {
  constructor(nome, dataNascimento, cpf, endereco) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.endereco = endereco;
  }

  // Método para salvar o usuário no banco MySQL 
  salvar() {
    var conn = ConnectionFactory.getConnection();  // Usando ConnectionFactory para obter a conexão
    
    // SQL para inserir dados
    var sql = "INSERT INTO usuario (nome, data_nascimento, cpf, endereco) VALUES (?, ?, ?, ?)";
    
    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.nome);
    stmt.setString(2, this.dataNascimento);  // A data deve estar no formato 'YYYY-MM-DD'
    stmt.setString(3, this.cpf);
    stmt.setString(4, this.endereco);
    
    try {
      var result = stmt.executeUpdate();
      return "Usuário cadastrado com sucesso!";
    } catch (e) {
      Logger.log(e.toString());
      return "Erro ao cadastrar o usuário.";
    } finally {
      stmt.close();
      conn.close();
    }
  }
   
  //criar o método editar , o método listar e o método excluir.

  editar(){

    var conn = ConnectionFactory.getConnection();
    var sql = "UPDATE usuario SET nome = ?, data_nascimento = ?, cpf = ?, endereco = ? WHERE cpf = ?";

    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.nome);
    stmt.setString(2, this.dataNascimento);  
    stmt.setString(3, this.cpf);
    stmt.setString(4, this.endereco);
    
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

          let us = new Usuario(result.getString("nome"),result.getString("data_nascimento"),result.getString("cpf"),result.getString("endereco"))  

         
           usuarios.push(us);

        }
       Logger.log(usuarios)
       return usuarios
    }catch (e) {
     Logger.log(e.toString()); 
     return "Erro ao tentar listar os usuários"


    }
  
  // Criar a função que irá validar os campos
  
  
  
  }


}
