/** #08/04/2025: Criação da classe Paciente:
 *  Nome;
    dataNascimento; 
    cns;
    CPF;       
    Equipe;
    microarea;
    familia;
    nomeMae;
    racaCor;
    telefone;
    estadoCivil;
    sexo;
    CBO;
    escolaridade; 
    renda;
 * 
 *  
 *   
*/


class Paciente {

constructor(Nome, dataNascimento,cns,CPF,Equipe,microarea,familia,nomeMae,racaCor,telefone,estadoCivil,sexo,CBO,escolaridade,renda){

this.Nome = Nome;
this.dataNascimento = dataNascimento; 
this.cns = cns;
this.CPF = CPF;
this.Equipe = Equipe;
this.microarea = microarea;
this.familia = familia;
this.nomeMae = nomeMae;
this.racaCor = racaCor;
this.telefone = telefone;
this.estadoCivil = estadoCivil;
this.sexo = sexo;
this.CBO = CBO;
this.escolaridade = escolaridade; 
this.renda = renda;

}

salvar() {
    var conn = ConnectionFactory.getConnection();  
        
    var sql = "INSERT INTO paciente (Nome, dataNascimento,cns,CPF,Equipe,microarea,familia,nomeMae,racaCor,telefone,estadoCivil,sexo,CBO,escolaridade,renda) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)";
    
    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.Nome);
    stmt.setString(2, this.dataNascimento);  
    stmt.setString(3,this.cns);
    stmt.setString(4,this.CPF);    
    stmt.setString(5, this.Equipe);
    stmt.setString(6, this.microarea);
    stmt.setString(7, this.familia);
    stmt.setString(8, this.nomeMae);
    stmt.setString(9, this.racaCor);
    stmt.setString(10, this.telefone);
    stmt.setString(11, this.estadoCivil);
    stmt.setString(12, this.sexo);
    stmt.setString(13, this.CBO);
    stmt.setString(14, this.escolaridade);
    stmt.setString(15, this.renda);
    try {
      var result = stmt.executeUpdate();
      return "Paciente cadastrado com sucesso!";
    } catch (e) {
      Logger.log(e.toString());
      return "Erro ao cadastrar o paciente. Detalhamento: "+ e.toString();
    } finally {
      stmt.close();
      conn.close();
    }
  }

 editar(){

    var conn = ConnectionFactory.getConnection();
    var sql = "UPDATE paciente SET Nome = ?, dataNascimento = ?, cns = ?, CPF = ?, Equipe = ?, microarea = ?, familia = ?, nomeMae = ?, racaCor = ?, telefone = ?, estadoCivil = ?, sexo = ?, CBO = ?, escolaridade = ?, renda = ? WHERE cpf = ?";

    var stmt = conn.prepareStatement(sql);
    stmt.setString(1, this.Nome);
    stmt.setString(2, this.dataNascimento);  
    stmt.setString(3,this.cns);
    stmt.setString(4,this.CPF);    
    stmt.setString(5, this.Equipe);
    stmt.setString(6, this.microarea);
    stmt.setString(7, this.familia);
    stmt.setString(8, this.nomeMae);
    stmt.setString(9, this.racaCor);
    stmt.setString(10, this.telefone);
    stmt.setString(11, this.estadoCivil);
    stmt.setString(12, this.sexo);
    stmt.setString(13, this.CBO);
    stmt.setString(14, this.escolaridade);
    stmt.setString(15, this.renda);
    
    try {
      var result = stmt.executeUpdate();
      return "Dados do Paciente alterados com sucesso!";
    } catch (e) {
      Logger.log(e.toString());
      return "Erro ao alterar os dados do Paciente. Detalhamento: " + e.toString();
    } finally {
      stmt.close();
      conn.close();
    }
  }


   listar(){

    var conn = ConnectionFactory.getConnection();

    var sql = "SELECT * FROM paciente";

    var stmt = conn.prepareStatement(sql);

    try{
      
      var result = stmt.executeQuery(sql);
      var pacientes = [] 
       
       while(result.next()){

          let pac = new Paciente(
            result.getString("Nome"),
            result.getString("dataNascimento"),
            result.getString("cns"),
            result.getString("CPF"),
            result.getString("Equipe"),
            result.getString("microarea"),
            result.getString("familia"),
            result.getString("nomeMae"),
            result.getString("racaCor"),
            result.getString("telefone"),
            result.getString("estadoCivil"),
            result.getString("sexo"),
            result.getString("CBO"),
            result.getString("escolaridade"),
            result.getString("renda"),
            )  

         
           pacientes.push(pac);

        }
       Logger.log(pacientes)
       return pacientes
    }catch (e) {
     Logger.log(e.toString()); 
     return "Erro ao tentar listar os pacientes. Detalhamento "+ e.toString();


    }




};

}