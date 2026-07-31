function moeda(valor) {
  if (valor === null) return "Consulte no site oficial";
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function CardProduto({ produto }) {
  const linkDisponivel = produto.link !== "#";
  const desconto = produto.precoAnterior && produto.preco
    ? Math.round((1 - produto.preco / produto.precoAnterior) * 100)
    : null;

  function registrarClique(evento) {
    if (!linkDisponivel) {
      evento.preventDefault();
      return;
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        item_id: produto.id,
        item_name: produto.nome,
        affiliate: produto.loja,
        link_url: produto.link,
      });
    }
  }

  return (
    <article className="card-produto">
      <div className={`capa-produto ${produto.cor || "verde"}`}>
        {desconto && <span className="desconto">-{desconto}%</span>}
        {produto.imagem ? (
          <img src={produto.imagem} alt={produto.nome} loading="lazy" />
        ) : (
          <span aria-hidden="true">{produto.icone || "🏷️"}</span>
        )}
      </div>
      <div className="conteudo-card">
        <div className="linha-card">
          <span className="loja">{produto.loja}</span>
          <span className="selo">{produto.selo}</span>
        </div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <div className="bloco-preco">
          {produto.precoAnterior && <del>{moeda(produto.precoAnterior)}</del>}
          <strong className="preco">{moeda(produto.preco)}</strong>
        </div>
        <a
          className={`botao-oferta ${!linkDisponivel ? "desativado" : ""}`}
          href={produto.link}
          target={linkDisponivel ? "_blank" : undefined}
          rel={linkDisponivel ? "sponsored noopener noreferrer" : undefined}
          aria-disabled={!linkDisponivel}
          onClick={registrarClique}
        >
          {linkDisponivel ? "Ver oferta →" : "Aguardando integração"}
        </a>
        {produto.demonstracao && <small className="nota-demo">Preço ilustrativo — não é uma oferta real.</small>}
      </div>
    </article>
  );
}
