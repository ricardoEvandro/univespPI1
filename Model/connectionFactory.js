class ConnectionFactory {
  static getConnection() {
    var CONNECTION_URL = "jdbc:mysql://mysql-2cc63b26-projetopiunivesp.k.aivencloud.com:13137/teste"; 
    var USERNAME =  "avnadmin";
    var PASSWORD = "AVNS_2EWGunIwWnEr7ZLezP1";

    // Retorna a conexão com o banco de dados
    return Jdbc.getConnection(CONNECTION_URL, USERNAME, PASSWORD);
  }
}

