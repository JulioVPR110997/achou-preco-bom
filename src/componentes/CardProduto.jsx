function formatarPreco(preco) {
  if (preco === null) return "Consulte na página oficial";

  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function CardProduto({ produto }) {
  const linkDisponivel = produto.link !== "#";

  return (
    <article className="card-produto">
      <div className="capa-produto" aria-hidden="true">
        {produto.loja === "Hotmart" ? "🎓" : "🏷️"}
      </div>
      <div className="conteudo-card">
        <div className="linha-card">
          <span className="loja">{produto.loja}</span>
          <span className="selo">{produto.selo}</span>
        </div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <strong className="preco">{formatarPreco(produto.preco)}</strong>
        <a
          className={`botao-oferta ${!linkDisponivel ? "desativado" : ""}`}
          href={produto.link}
          target={linkDisponivel ? "_blank" : undefined}
          rel={linkDisponivel ? "sponsored noopener noreferrer" : undefined}
          aria-disabled={!linkDisponivel}
          onClick={(evento) => !linkDisponivel && evento.preventDefault()}
        >
          {linkDisponivel ? "Ver oferta" : "Link de demonstração"}
        </a>
      </div>
    </article>
  );
}
