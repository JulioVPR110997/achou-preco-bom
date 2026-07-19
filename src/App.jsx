import { useMemo, useState } from "react";
import CardProduto from "./componentes/CardProduto.jsx";
import { categorias } from "./dados/categorias.js";
import { produtos } from "./dados/produtos.js";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");

  const produtosVisiveis = useMemo(() => {
    const ativos = produtos.filter((produto) => produto.ativo);

    if (abaAtiva === "inicio") return ativos;
    if (abaAtiva === "passagens") return [];
    return ativos.filter((produto) => produto.categoria === abaAtiva);
  }, [abaAtiva]);

  return (
    <div className="site">
      <header className="cabecalho">
        <a className="marca" href="#inicio" onClick={() => setAbaAtiva("inicio")}>
          <span className="simbolo-marca">A</span>
          <span>Achou Preço Bom</span>
        </a>
        <nav aria-label="Navegação principal">
          {categorias.map((categoria) => (
            <button
              className={abaAtiva === categoria.id ? "aba ativa" : "aba"}
              key={categoria.id}
              onClick={() => setAbaAtiva(categoria.id)}
              type="button"
            >
              {categoria.nome}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <span className="etiqueta">PROTÓTIPO DIDÁTICO</span>
          <h1>Boas escolhas começam com informação clara.</h1>
          <p>
            Ofertas e conteúdos de parceiros organizados em um só lugar para
            você comparar antes de decidir.
          </p>
        </section>

        <section className="secao-produtos">
          <div className="titulo-secao">
            <div>
              <span className="texto-menor">SELEÇÃO ATUAL</span>
              <h2>{categorias.find((item) => item.id === abaAtiva)?.nome}</h2>
            </div>
            <span>{produtosVisiveis.length} item(ns)</span>
          </div>

          {produtosVisiveis.length > 0 ? (
            <div className="grade-produtos">
              {produtosVisiveis.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))}
            </div>
          ) : (
            <div className="estado-vazio">
              <span>🚧</span>
              <h3>Conteúdo em preparação</h3>
              <p>Esta seção já existe e poderá receber novos parceiros.</p>
            </div>
          )}
        </section>

        <aside className="aviso">
          <strong>Aviso de transparência:</strong> alguns links são de afiliados.
          Podemos receber comissão por compras qualificadas, sem custo adicional
          para você. Conteúdos de bem-estar não substituem orientação profissional.
        </aside>
      </main>

      <footer>
        <span>© 2026 Achou Preço Bom</span>
        <span>Protótipo para aprendizado e validação</span>
      </footer>
    </div>
  );
}
