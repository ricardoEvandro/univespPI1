/** #08/04/2025: Criação da classe Avaliacao:
 *  Ainda falta terminar de implementar o metodo listar
 * 
 *  
 *   
*/

class AvaliacaoPaciente {
  constructor(
    paciente_id, historico_doencas, tipo_diabetes, tempo_diagnostico,
    tratamento_insulina, drogas_orais, doencas_associadas, historia_familiar,
    controle_glicemico_inadequado, duracao_diabetes_maior_10, idoso,
    dislipidemia, hipertensao_arterial, retinopatia, nefropatia, obesidade,
    sedentarismo, tabagismo, etilismo, alta_estatura, baixa_acuidade_visual,
    fatores_psicossociais, calcados_inadequados, queimacao_pes,
    picadas_pernas_pes, dor_pior_noite, alteracoes_sensitivas, dor_lancinante,
    tempo_inicio_sintomas, dormencia, membro_morto, fraqueza_pernas, pes_frios,
    dor_repouso, claudicacao_intermitente, ulcera_ou_amputacao, peso, altura,
    imc, pressao_arterial_bd, pressao_arterial_be, pele_seca_descamativa,
    pele_hiperemia, perda_unhas, calosidades, fissuras_pes,
    anormalidade_sudorese, edema, pe_quente, ectasias_vasculares, pele_fria,
    pele_fina_brilhante, rarefacao_pelos, unhas_distroficas, palidez_cutanea,
    cor_membro_elevado_palidez, cor_membro_pendente, ulceras, amputacoes,
    eritema, paroniquia, bolhas, micose_interdigital, onicomicose,
    dedos_anormais, forma_anormal_pe, pe_charcot, mobilidade_articular_alterada,
    sensibilidade_termica, sensibilidade_dolorosa, sensibilidade_tatil
  ) {
    this.paciente_id = paciente_id;
    this.historico_doencas = historico_doencas;
    this.tipo_diabetes = tipo_diabetes;
    this.tempo_diagnostico = tempo_diagnostico;
    this.tratamento_insulina = tratamento_insulina;
    this.drogas_orais = drogas_orais;
    this.doencas_associadas = doencas_associadas;
    this.historia_familiar = historia_familiar;
    this.controle_glicemico_inadequado = controle_glicemico_inadequado;
    this.duracao_diabetes_maior_10 = duracao_diabetes_maior_10;
    this.idoso = idoso;
    this.dislipidemia = dislipidemia;
    this.hipertensao_arterial = hipertensao_arterial;
    this.retinopatia = retinopatia;
    this.nefropatia = nefropatia;
    this.obesidade = obesidade;
    this.sedentarismo = sedentarismo;
    this.tabagismo = tabagismo;
    this.etilismo = etilismo;
    this.alta_estatura = alta_estatura;
    this.baixa_acuidade_visual = baixa_acuidade_visual;
    this.fatores_psicossociais = fatores_psicossociais;
    this.calcados_inadequados = calcados_inadequados;
    this.queimacao_pes = queimacao_pes;
    this.picadas_pernas_pes = picadas_pernas_pes;
    this.dor_pior_noite = dor_pior_noite;
    this.alteracoes_sensitivas = alteracoes_sensitivas;
    this.dor_lancinante = dor_lancinante;
    this.tempo_inicio_sintomas = tempo_inicio_sintomas;
    this.dormencia = dormencia;
    this.membro_morto = membro_morto;
    this.fraqueza_pernas = fraqueza_pernas;
    this.pes_frios = pes_frios;
    this.dor_repouso = dor_repouso;
    this.claudicacao_intermitente = claudicacao_intermitente;
    this.ulcera_ou_amputacao = ulcera_ou_amputacao;
    this.peso = peso;
    this.altura = altura;
    this.imc = imc;
    this.pressao_arterial_bd = pressao_arterial_bd;
    this.pressao_arterial_be = pressao_arterial_be;
    this.pele_seca_descamativa = pele_seca_descamativa;
    this.pele_hiperemia = pele_hiperemia;
    this.perda_unhas = perda_unhas;
    this.calosidades = calosidades;
    this.fissuras_pes = fissuras_pes;
    this.anormalidade_sudorese = anormalidade_sudorese;
    this.edema = edema;
    this.pe_quente = pe_quente;
    this.ectasias_vasculares = ectasias_vasculares;
    this.pele_fria = pele_fria;
    this.pele_fina_brilhante = pele_fina_brilhante;
    this.rarefacao_pelos = rarefacao_pelos;
    this.unhas_distroficas = unhas_distroficas;
    this.palidez_cutanea = palidez_cutanea;
    this.cor_membro_elevado_palidez = cor_membro_elevado_palidez;
    this.cor_membro_pendente = cor_membro_pendente;
    this.ulceras = ulceras;
    this.amputacoes = amputacoes;
    this.eritema = eritema;
    this.paroniquia = paroniquia;
    this.bolhas = bolhas;
    this.micose_interdigital = micose_interdigital;
    this.onicomicose = onicomicose;
    this.dedos_anormais = dedos_anormais;
    this.forma_anormal_pe = forma_anormal_pe;
    this.pe_charcot = pe_charcot;
    this.mobilidade_articular_alterada = mobilidade_articular_alterada;
    this.sensibilidade_termica = sensibilidade_termica;
    this.sensibilidade_dolorosa = sensibilidade_dolorosa;
    this.sensibilidade_tatil = sensibilidade_tatil;
  }

  salvar() {
    const conn = ConnectionFactory.getConnection();
    const sql = `
      INSERT INTO avaliacao_paciente (
        paciente_id, historico_doencas, tipo_diabetes, tempo_diagnostico,
        tratamento_insulina, drogas_orais, doencas_associadas, historia_familiar,
        controle_glicemico_inadequado, duracao_diabetes_maior_10, idoso,
        dislipidemia, hipertensao_arterial, retinopatia, nefropatia, obesidade,
        sedentarismo, tabagismo, etilismo, alta_estatura, baixa_acuidade_visual,
        fatores_psicossociais, calcados_inadequados, queimacao_pes,
        picadas_pernas_pes, dor_pior_noite, alteracoes_sensitivas, dor_lancinante,
        tempo_inicio_sintomas, dormencia, membro_morto, fraqueza_pernas, pes_frios,
        dor_repouso, claudicacao_intermitente, ulcera_ou_amputacao, peso, altura,
        imc, pressao_arterial_bd, pressao_arterial_be, pele_seca_descamativa,
        pele_hiperemia, perda_unhas, calosidades, fissuras_pes,
        anormalidade_sudorese, edema, pe_quente, ectasias_vasculares, pele_fria,
        pele_fina_brilhante, rarefacao_pelos, unhas_distroficas, palidez_cutanea,
        cor_membro_elevado_palidez, cor_membro_pendente, ulceras, amputacoes,
        eritema, paroniquia, bolhas, micose_interdigital, onicomicose,
        dedos_anormais, forma_anormal_pe, pe_charcot, mobilidade_articular_alterada,
        sensibilidade_termica, sensibilidade_dolorosa, sensibilidade_tatil
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )`;

    const stmt = conn.prepareStatement(sql);
    const values = Object.values(this);
    values.forEach((val, idx) => stmt.setString(idx + 1, String(val)));

    try {
      stmt.executeUpdate();
      return "Avaliação salva com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao salvar avaliação.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  static listar() {
    const conn = ConnectionFactory.getConnection();
    const sql = "SELECT * FROM avaliacao_paciente";
    const stmt = conn.prepareStatement(sql);
    try {
      const rs = stmt.executeQuery();
      const lista = [];
      while (rs.next()) {
        lista.push(rs.getString("paciente_id")); //Ricardo terminar de implementar a lista
      }
      return lista;
    } catch (e) {
      Logger.log(e);
      return "Erro ao listar avaliações.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  static excluirPorId(id) {
    const conn = ConnectionFactory.getConnection();
    const sql = "DELETE FROM avaliacao_paciente WHERE id = ?";
    const stmt = conn.prepareStatement(sql);
    stmt.setInt(1, id);

    try {
      stmt.executeUpdate();
      return "Avaliação excluída com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao excluir avaliação.";
    } finally {
      stmt.close();
      conn.close();
    }
  }

  editar(id) {
    const conn = ConnectionFactory.getConnection();
    const campos = Object.keys(this);
    const sql = `
      UPDATE avaliacao_paciente SET
        ${campos.map(c => `${c} = ?`).join(", ")}
      WHERE id = ?`;
    
    const stmt = conn.prepareStatement(sql);
    const values = Object.values(this);
    values.forEach((val, idx) => stmt.setString(idx + 1, String(val)));
    stmt.setInt(values.length + 1, id);

    try {
      stmt.executeUpdate();
      return "Avaliação atualizada com sucesso!";
    } catch (e) {
      Logger.log(e);
      return "Erro ao atualizar avaliação.";
    } finally {
      stmt.close();
      conn.close();
    }
  }
}
