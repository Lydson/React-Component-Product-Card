import React from "react";

// Tipagem para o produto
interface Produto {
  id: number;
  nome: string;
  preco: string;
  foto: string;
}

// Componente de Card de Produto
const ProductCard: React.FC<{ produto: Produto; isMiddle: boolean }> = ({
  produto,
  isMiddle,
}) => {
  return (
    <div
      style={{
        background: isMiddle
          ? "linear-gradient(to bottom right, #ADD8E6, #4682B4)" // Gradiente azul
          : "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "170px",
        height: "240px",
        margin: "10px",
        padding: "15px",
        border: isMiddle ? "none" : "1px solid #4682B4",
        color: isMiddle ? "white" : "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Contêiner para a imagem com borda arredondada */}
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          overflow: "hidden", // Para garantir que a imagem não ultrapasse a borda
          marginBottom: "20px",
          alignSelf: "center",
        }}
      >
        {/* Imagem quadrada */}
        <img
          src={produto.foto}
          alt={produto.nome}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Conteúdo abaixo da imagem */}
      <div style={{ flexGrow: 1 }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
          {produto.nome}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>R$ {produto.preco}</span>
          <button
            style={{
              backgroundColor: isMiddle ? "white" : "#007BFF",
              color: isMiddle ? "#4682B4" : "white",
              border: "none",
              borderRadius: "5px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
const ProductList: React.FC<{ produtos: Produto[] }> = ({ produtos }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {produtos.map((produto, index) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          isMiddle={index === 1} // Verifica se é o segundo card
        />
      ))}
    </div>
  );
};

// Dados de exemplo de produtos em JSON
const produtosData: Produto[] = [
  {
    id: 1,
    nome: "Pizza Quatro Queijos",
    preco: "15.90",
    foto: "https://free-images.com/lg/7f6e/food_pizza_slice_fast.jpg",
  },
  {
    id: 2,
    nome: "Hambúrguer Vegano",
    preco: "18.90",
    foto: "https://free-images.com/lg/a05c/food_hamburger_burger_fast_0.jpg",
  },
  {
    id: 3,
    nome: "Milkshake de Caramelo",
    preco: "7.00",
    foto: "https://free-images.com/lg/9e16/food_restaurant_summer_nuts.jpg",
  },
];

// Componente principal
const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Menu de Produtos
      </h1>
      <ProductList produtos={produtosData} />
    </div>
  );
};

export default App;
