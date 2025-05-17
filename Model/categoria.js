class Categoria {
  
  constructor(descricao){

      this.descricao = descricao;
  }

salvar() {
    const conn = ConnectionFactory.getConnection();
    const sql = `
      INSERT INTO categoria_profissional (descricao) VALUES (?)`;

    const stmt = conn.prepareStatement(sql);
    const values = Object.values(this);
    values.forEach((val, idx) => stmt.setString(idx + 1, String(val)));

    try {
      stmt.executeUpdate();
      return "Categoria salva com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao salvar a categoria.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  listar() {
    const conn = ConnectionFactory.getConnection();
    const sql = "SELECT * FROM categoria_profissional";
    const stmt = conn.prepareStatement(sql);
    try {
      const rs = stmt.executeQuery();
      const lista = [];
      while (rs.next()) {
        lista.push(rs.getString("id"),rs.getString("descricao")); //Ricardo terminar de implementar a lista
      }
      Logger.log(lista)
      return lista;
    } catch (e) {
      Logger.log(e);
      return "Erro ao listar Categoria.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

   excluirPorId(id) {
    const conn = ConnectionFactory.getConnection();
    const sql = "DELETE FROM categoria_profissional WHERE id = ?";
    const stmt = conn.prepareStatement(sql);
    stmt.setInt(1, id);

    try {
      stmt.executeUpdate();
      return "Categoria excluída com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao excluir Categoria.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  editar(id) {
    const conn = ConnectionFactory.getConnection();
    const campos = Object.keys(this);
    const sql = `
      UPDATE categoria_profissional SET
        ${campos.map(c => `${c} = ?`).join(", ")}
      WHERE id = ?`;
    
    const stmt = conn.prepareStatement(sql);
    const values = Object.values(this);
    values.forEach((val, idx) => stmt.setString(idx + 1, String(val)));
    stmt.setInt(values.length + 1, id);

    try {
      stmt.executeUpdate();
      return "Categoria atualizada com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao atualizar Categoria.";
    } finally {
      stmt.close();
      conn.close();
    }
  }





}
