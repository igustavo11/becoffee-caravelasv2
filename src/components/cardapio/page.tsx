"use client";

import { useEffect, useState } from "react";
import { MenuCategoryInfo } from "@/components/cardapio/menu/menu-category-info";
import { MenuFilters } from "@/components/cardapio/menu/menu-filters";
import { MenuGrid } from "@/components/cardapio/menu/menu-grid";
import { MenuModal } from "@/components/cardapio/menu/menu-modal";
import { MenuVerMais } from "@/components/cardapio/menu/menu-ver-mais";

// Tipos
interface MenuItem {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
}

interface MenuData {
  [key: string]: MenuItem[];
}

// Categorias do menu (com ícones do Lucide)
const CATEGORIAS = [
  { id: "cafe", name: "Cafés", icon: "coffee" },
  { id: "pratos", name: "Pratos", icon: "utensils" },
  { id: "cappuccinos", name: "Cappuccinos", icon: "coffee" },
  { id: "chocolate quente", name: "Chocolate quente", icon: "wind" },
  {
    id: "bebidas geladas",
    name: "Bebidas Geladas",
    icon: "ice-cream",
  },
  { id: "bebidas", name: "Bebidas", icon: "beer" },
  { id: "toasts", name: "Pães", icon: "croissant" },
  { id: "salgados", name: "Salgados", icon: "sandwich" },
  { id: "tapiocas", name: "Tapioca/Crepioca", icon: "pizza" },
  { id: "tortas", name: "Tortas Doces", icon: "cake" },
  { id: "bolos", name: "Bolos Especiais", icon: "cake" },
  { id: "Doces", name: "Doces", icon: "cookie" },
];

// Informações especiais por categoria
const CATEGORIA_INFO: { [key: string]: any } = {
  tapiocas: {
    title: "Monte do Seu Jeito!",
    description:
      "<strong>Tapiocas e Crepiocas:</strong> 1 recheio = R$ 15,00 | 2 recheios = R$ 18,00 | 3 recheios = R$ 21,00",
    note: "Acréscimo de R$ 3,00 por recheio adicional",
  },
  salgados: {
    title: "Monte do Seu Jeito!",
    description: "<strong>Cuscuz Recheado:</strong> 1 recheio = R$ 15,00",
    note: "Acréscimo de R$ 2,00 por recheio adicional",
  },
};

export default function CardapioPage() {
  const [menuData, setMenuData] = useState<MenuData>({});
  const [categoriaAtiva, setCategoriaAtiva] = useState("cafe");
  const [itensVisiveis, setItensVisiveis] = useState<MenuItem[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemModal, setItemModal] = useState<MenuItem | null>(null);

  // Carregar dados do menu (conecte com seu banco de dados aqui)
  useEffect(() => {
    // Exemplo: buscar do banco de dados
    // const fetchMenu = async () => {
    //   const response = await fetch('/api/menu');
    //   const data = await response.json();
    //   setMenuData(data);
    // };
    // fetchMenu();

    // Por enquanto, dados mockados - substitua pela sua API
    setMenuData({
      cafe: [
        {
          id: "cafe-1",
          img: "/img/cardapio/cafe/expresso.png",
          name: "Café Expresso",
          dsc: "Café encorpado com crema dourada",
          price: 10.0,
        },
        // ... mais itens
      ],
      // ... outras categorias
    });
  }, []);

  // Atualizar itens visíveis quando categoria mudar
  useEffect(() => {
    const itens = menuData[categoriaAtiva] || [];
    const quantidade = mostrarTodos ? 12 : 4;
    setItensVisiveis(itens.slice(0, quantidade));
  }, [categoriaAtiva, menuData, mostrarTodos]);

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaAtiva(categoria);
    setMostrarTodos(false);
  };

  const handleVerMais = () => {
    setMostrarTodos(true);
  };

  const handleItemClick = (item: MenuItem) => {
    setItemModal(item);
    setModalAberto(true);
  };

  const handleCloseModal = () => {
    setModalAberto(false);
    setItemModal(null);
  };

  const categoriaInfo = CATEGORIA_INFO[categoriaAtiva];
  const totalItens = menuData[categoriaAtiva]?.length || 0;
  const mostrarBotaoVerMais = !mostrarTodos && totalItens > 4;

  return (
    <section className="relative pt-12 pb-36 bg-[#fff8eb]" id="cardapio">
      <div className="absolute left-0 right-0 h-[500px] bg-[url('/img/bg-icons-1.png')] bg-no-repeat bg-cover"></div>
      <div className="relative w-full max-w-[1140px] px-4 mx-auto">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px] text-center mb-12">
            <span className="text-[#163e38] text-4xl font-bold uppercase tracking-[5px] ">
              Cardápio
            </span>
            <h1 className="text-[#212121] font-medium text-[40px] mt-1 mb-8 ">
              Conheça o nosso cardápio
            </h1>
          </div>
          <MenuFilters
            categories={CATEGORIAS}
            activeCategory={categoriaAtiva}
            onCategoryChange={handleCategoriaChange}
          />
          {categoriaInfo && <MenuCategoryInfo info={categoriaInfo} />}
          <MenuGrid items={itensVisiveis} onItemClick={handleItemClick} />
          <MenuVerMais onClick={handleVerMais} hidden={!mostrarBotaoVerMais} />
        </div>
      </div>
      <MenuModal
        isOpen={modalAberto}
        onClose={handleCloseModal}
        item={itemModal}
      />
    </section>
  );
}
