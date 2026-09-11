"use client";

import { useState } from "react";
import { MenuFilters } from "@/components/cardapio/menu/menu-filters";
import { MenuGrid } from "@/components/cardapio/menu/menu-grid";
import { MenuModal } from "@/components/cardapio/menu/menu-modal";
import { MenuVerMais } from "@/components/cardapio/menu/menu-ver-mais";
import { CATEGORIES, CATEGORY_INFO, MENU, type MenuItem } from "@/lib/menu";

export default function CardapioPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(CATEGORIES[0].id);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemModal, setItemModal] = useState<MenuItem | null>(null);

  const itensCategoria = MENU[categoriaAtiva] ?? [];
  const totalItens = itensCategoria.length;
  const itensVisiveis = itensCategoria.slice(0, mostrarTodos ? 12 : 4);
  const mostrarBotaoVerMais = !mostrarTodos && totalItens > 4;
  const categoriaInfo = CATEGORY_INFO[categoriaAtiva];

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
  };

  return (
    <section className="cardapio" id="cardapio">
      <div className="cardapio-container">
        <div className="row">
          <div className="col-12 col-one text-center mb-5">
            <span className="hint-title">
              <b>Cardápio</b>
            </span>
            <h2 className="title">
              <b>Conheça nosso cardápio</b>
            </h2>
            <p>clique em nossos produtos para saber mais</p>
          </div>
          <MenuFilters
            categories={CATEGORIES}
            activeCategory={categoriaAtiva}
            onCategoryChange={handleCategoriaChange}
          />
          <div className="col-12 col-one">
            <MenuGrid
              items={itensVisiveis}
              categoryKey={categoriaAtiva}
              info={categoriaInfo}
              onItemClick={handleItemClick}
            />
          </div>
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
