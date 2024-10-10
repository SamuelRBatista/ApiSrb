class Product {
    constructor(id, codigo, ean, nome, descricao, preco, quantidade, validade, ncm, cest, id_categoria, id_marca) {
      this.id = id;
      this.codigo = codigo;
      this.ean = ean;
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
      this.quantidade = quantidade;
      this.validade = validade;
      this.ncm = ncm;
      this.cest = cest;
      this.id_categoria = id_categoria;
      this.id_marca = id_marca;
    }
  }
  
  module.exports = Product;
  