import produtosMagalu from "./magalu.json";

const cursoHotmart = {
  id: "hotmart-1709940",
  nome: "21 Métodos Naturais para Ansiedade",
  descricao: "Curso digital com práticas apresentadas pelo produtor para bem-estar e manejo cotidiano da ansiedade.",
  categoria: "cursos",
  loja: "Hotmart",
  preco: null,
  precoAnterior: null,
  link: "https://go.hotmart.com/D66878245U",
  selo: "Link verificado",
  icone: "🎓",
  cor: "azul",
  destaque: false,
  demonstracao: false,
  ativo: true,
};

// Catálogo coletado da vitrine pública magazineachouprecobom.
// Preços e disponibilidade devem sempre ser confirmados no site oficial.
export const produtos = [...produtosMagalu, cursoHotmart];
