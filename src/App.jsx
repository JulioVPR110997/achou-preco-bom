import { useMemo, useState } from "react";
import CardProduto from "./componentes/CardProduto.jsx";
import { categorias } from "./dados/categorias.js";
import { produtos } from "./dados/produtos.js";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");
  const [busca, setBusca] = useState("");

  const produtosVisiveis = useMemo(() => {
    let lista = produtos.filter((produto) => produto.ativo);
    if (abaAtiva === "inicio") lista = lista.filter((produto) => produto.destaque);
    else if (abaAtiva === "ofertas") lista = lista.filter((produto) => produto.loja === "Magalu");
    else lista = lista.filter((produto) => produto.categoria === abaAtiva);
    const termo = busca.trim().toLowerCase();
    if (termo) lista = lista.filter((produto) => `${produto.nome} ${produto.loja} ${produto.descricao}`.toLowerCase().includes(termo));
    return lista;
  }, [abaAtiva, busca]);

  function navegar(id) {
    setAbaAtiva(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const titulo = busca
    ? `Resultados para “${busca}”`
    : abaAtiva === "inicio"
      ? "Escolhas em destaque"
      : categorias.find((item) => item.id === abaAtiva)?.nome;

  return (
    <div className="site">
      <div className="barra-topo">Links selecionados • Compra realizada sempre no site da loja parceira</div>
      <header className="cabecalho">
        <button className="marca" onClick={() => navegar("inicio")} type="button">
          <img className="logo-principal" src="/logo-achou-preco-bom.svg" alt="Achou Preço Bom" />
        </button>
        <label className="busca">
          <span>⌕</span>
          <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="O que você está procurando?" />
          {busca && <button onClick={() => setBusca("")} type="button">×</button>}
        </label>
        <span className="selo-seguro">✓ Links seguros</span>
      </header>

      <nav className="navegacao" aria-label="Categorias">
        {categorias.map((categoria) => (
          <button className={abaAtiva === categoria.id ? "aba ativa" : "aba"} key={categoria.id} onClick={() => navegar(categoria.id)} type="button">
            <span>{categoria.icone}</span>{categoria.nome}
          </button>
        ))}
      </nav>

      <main>
        {abaAtiva === "inicio" && !busca && (
          <>
            <section className="hero">
              <div className="hero-conteudo">
                <span className="etiqueta">ECONOMIZE TEMPO E DINHEIRO</span>
                <h1>Os bons achados, reunidos em um só lugar.</h1>
                <p>Selecionamos ofertas, cursos e oportunidades. Você confere os detalhes e finaliza a compra diretamente na loja.</p>
                <button onClick={() => navegar("ofertas")} type="button">Explorar ofertas <span>→</span></button>
              </div>
              <div className="hero-visual" aria-hidden="true"><span>R$</span><b>Preço bom?</b><small>A gente ajuda a encontrar.</small></div>
            </section>

            <section className="beneficios">
              <div><span>⌕</span><p><b>Curadoria simples</b><small>Produtos organizados para facilitar sua busca.</small></p></div>
              <div><span>↗</span><p><b>Compra na loja</b><small>Você é direcionado ao parceiro oficial.</small></p></div>
              <div><span>✓</span><p><b>Transparência</b><small>Links de afiliado sempre identificados.</small></p></div>
            </section>

            <section className="atalhos">
              <button className="atalho tecnologia" onClick={() => navegar("eletronicos")}><span>📱</span><p><b>Eletrônicos</b><small>Celulares, notebooks e acessórios</small></p><i>→</i></button>
              <button className="atalho educacao" onClick={() => navegar("cursos")}><span>🎓</span><p><b>Cursos online</b><small>Conhecimento para transformar planos</small></p><i>→</i></button>
              <button className="atalho viagem" onClick={() => navegar("viagens")}><span>✈️</span><p><b>Viagens</b><small>Área pronta para os próximos parceiros</small></p><i>→</i></button>
            </section>
          </>
        )}

        <section className="secao-produtos">
          <div className="titulo-secao">
            <div><span className="texto-menor">{abaAtiva === "inicio" ? "SELEÇÃO DA SEMANA" : "CATÁLOGO"}</span><h2>{titulo}</h2></div>
            <span>{produtosVisiveis.length} {produtosVisiveis.length === 1 ? "item" : "itens"}</span>
          </div>
          {produtosVisiveis.length ? (
            <div className="grade-produtos">{produtosVisiveis.map((produto) => <CardProduto key={produto.id} produto={produto} />)}</div>
          ) : (
            <div className="estado-vazio"><span>⌕</span><h3>Nenhum item encontrado</h3><p>Esta área está pronta e receberá produtos quando conectarmos o próximo parceiro.</p><button onClick={() => { setBusca(""); navegar("inicio"); }}>Voltar ao início</button></div>
          )}
        </section>

        <section className="como-funciona">
          <div><span className="texto-menor">COMO FUNCIONA</span><h2>Simples, direto e transparente.</h2></div>
          <ol><li><b>1</b><span><strong>Encontre</strong><small>Pesquise uma categoria ou produto.</small></span></li><li><b>2</b><span><strong>Confira</strong><small>Leia os detalhes e veja o parceiro.</small></span></li><li><b>3</b><span><strong>Acesse a loja</strong><small>Finalize a compra no site oficial.</small></span></li></ol>
        </section>

        <aside className="aviso"><strong>Transparência:</strong> alguns links são de afiliados e podemos receber comissão, sem custo adicional para você. Preços demonstrativos estão identificados e devem ser confirmados na loja.</aside>
      </main>

      <footer>
        <div className="rodape-marca"><img className="logo-rodape" src="/logo-achou-preco-bom.svg" alt="Achou Preço Bom" /><small>Boas escolhas começam com informação clara.</small></div>
        <div><b>Categorias</b><button onClick={() => navegar("ofertas")}>Ofertas</button><button onClick={() => navegar("cursos")}>Cursos</button><button onClick={() => navegar("viagens")}>Viagens</button></div>
        <div><b>Informações</b><span>Política de transparência</span><span>Contato (em breve)</span><span>© 2026 Achou Preço Bom</span></div>
      </footer>
    </div>
  );
}
