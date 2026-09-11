export interface MenuItem {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  num: string;
}

export type MenuIcon =
  | "coffee"
  | "utensils"
  | "wind"
  | "ice-cream"
  | "beer"
  | "croissant"
  | "sandwich"
  | "pizza"
  | "cake"
  | "cookie";

export interface MenuCategory {
  id: string;
  name: string;
  icon: MenuIcon;
}

export interface CategoryInfo {
  title: string;
  description: string;
  note?: string;
}

type MenuSeedItem = Omit<MenuItem, "num"> & { num?: string };

export const CATEGORIES: MenuCategory[] = [
  { id: "cafe", name: "Cafés", icon: "coffee" },
  { id: "pratos", name: "Pratos", icon: "utensils" },
  { id: "cappuccinos", name: "Cappuccinos", icon: "coffee" },
  { id: "chocolate-quente", name: "Chocolate quente", icon: "wind" },
  { id: "bebidas-geladas", name: "Bebidas Geladas", icon: "ice-cream" },
  { id: "bebidas", name: "Bebidas", icon: "beer" },
  { id: "toasts", name: "Pães", icon: "croissant" },
  { id: "salgados", name: "Salgados", icon: "sandwich" },
  { id: "tapiocas", name: "Tapioca/Crepioca", icon: "pizza" },
  { id: "tortas", name: "Tortas Doces", icon: "cake" },
  { id: "bolos", name: "Bolos Especiais", icon: "cake" },
  { id: "doces", name: "Doces", icon: "cookie" },
];

export const CATEGORY_INFO: Record<string, CategoryInfo> = {
  tapiocas: {
    title: "Monte do Seu Jeito!",
    description:
      "Tapiocas e Crepiocas: 1 recheio = R$ 16,00 | 2 recheios = R$ 19,50 | 3 recheios = R$ 23,00",
    note: "Acréscimo de R$ 3,50 por recheio adicional",
  },
  salgados: {
    title: "Monte do Seu Jeito!",
    description: "Cuscuz Recheado: 1 recheio = R$ 15,00",
    note: "Acréscimo de R$ 3,00 por recheio adicional",
  },
};

const MENU_SEED: Record<string, MenuSeedItem[]> = {
  cafe: [
    {
      id: "Prensa-Francesa",
      img: "/img/cardapio/cafe/Prensa-Francesa.jpg",
      name: "Prensa Francesa",
      dsc: "(180ml)  Em uma cafeteira manual é preparado um delicioso café por infusão, mantendo os grãos do café moídos na hora em contato com a água quente traz o resultado mais encorpado, aromático e um sabor mais acentuado",
      price: 17.0,
    },
    {
      id: "coado",
      img: "/img/cardapio/cafe/coado.jpg",
      name: "Coado",
      dsc: "(180ml) O café coado é uma bebida sem açúcar, suave e equilibrada que envolve a filtragem de água (mineral) quente através dos grãos de café moídos na hora. É servido em uma xícara de porcelana arredondada, acompanhada de um suporte em alumínio e um coador de tecido permitindo você apreciar o aroma e a cor marrom do nosso café.",
      price: 10.0,
    },
    {
      id: "Expresso",
      img: "/img/cardapio/cafe/expresso.jpg",
      name: "Expresso",
      dsc: "(50ml) Café encorpado com uma crema dourada e de sabor intenso, perfeito para os amantes de um bom expresso.",
      price: 13.0,
    },
  ],
  pratos: [
    {
      id: "camarao-internacional",
      img: "/img/cardapio/caldos/camarao-int.jpg",
      name: "Camarão internacional",
      dsc: "(500g) Camarões salteados no azeite e manteiga, envolvidos em um cremoso arroz feito no leve molho de requeijão com ervilhas, presunto, queijo e coberto com batata palha e queijo.",
      price: 60.0,
    },
  ],
  cappuccinos: [
    {
      id: "Capuccino-Be-Coffee",
      img: "/img/cardapio/cappuccinos/Capuccino-Be-Coffee.jpg",
      name: "Cappuccino Bê Coffee",
      dsc: "(220ml) Cappucino tradicional com adicional de Nutella e marshmallow tostado deixando-o ainda mais saboroso",
      price: 27.0,
    },
    {
      id: "Capuccino-doce-de-leite",
      img: "/img/cardapio/cappuccinos/Capuccino-doce-de-leite.jpg",
      name: "Cappuccino doce de leite",
      dsc: "(220ml) Cappucino tradicional com adicional de Doce de leite cremoso da casa, deixando-o ainda mais saboroso",
      price: 20.0,
    },
    {
      id: "Capuccino-tradicional",
      img: "/img/cardapio/cappuccinos/Capuccino-tradicional.jpg",
      name: "Cappuccino tradicional",
      dsc: "(220ml) Bebida deliciosa adoçada a base de café, leite em pó, cacau 50% que traz uma nota sutil de chocolate, a canela deixando um toque de especiarias. Adicionado ao leite vaporizado deixa seu sabor, textura aveludada e com muita cremosidade.",
      price: 15.0,
    },
    {
      id: "Capuccino-italiano",
      img: "/img/cardapio/cappuccinos/cappuccino-italiano.png",
      name: "Cappuccino italiano",
      dsc: "(220ml) Uma combinação equilibrada de café expresso com o leite vaporizado obtemos uma textura suave e cremosa que traz uma sensação aveludada à bebida. Finalizado com cacau e canela. ",
      price: 15.0,
    },
    {
      id: "Capuccino-nutella",
      img: "/img/cardapio/cappuccinos/cappuccino-nutella.png",
      name: "Cappuccino nutella",
      dsc: "(220ml) Cappucino tradicional com adicional de Nutella, deixando o ainda mais saboroso",
      price: 23.0,
    },
  ],
  "chocolate-quente": [
    {
      id: "Chocolate-Quente",
      img: "/img/cardapio/chocolate-quente/Chocolate-Quente.jpg",
      name: "Chocolate Quente Cremoso",
      dsc: "(200ml) Você está prestes a se render a uma experiência irresistível e reconfortante, o delicioso Chocolate Quente Cremoso feito com leite integral, creme de leite, açúcar e cacau 50%. Coberto de um creme de chantilly da casa. Perfeito para dias frios e para os momentos de relaxamento.",
      price: 22.0,
    },
    {
      id: "chocolate-becoffe",
      img: "/img/cardapio/chocolate-quente/chocolatebecoffee.jpg",
      name: "Chocolate Bê coffee Cremoso",
      dsc: "(200ml) Chocolate quente cremoso, com Nutella e marshmallow tostado",
      price: 27.0,
    },
  ],
  "bebidas-geladas": [
    {
      id: "Cappuccino-Gelado",
      img: "/img/cardapio/bebidas-geladas/Cappuccino-Gelado.png",
      name: "Cappuccino Gelado",
      dsc: "(200ml) Uma bebida deliciosa adoçada a base de café, leite em pó, cacau 50% que traz uma nota sutil de chocolate, a canela deixando um toque de especiarias, envolvido ao leite integral e um delicioso sorvete de creme deixando seu sabor, textura aveludada e com muita cremosidade. Coberto por uma leve e doce cobertura do creme do chantilly da casa.",
      price: 26.0,
    },
    {
      id: "Frapê",
      img: "/img/cardapio/bebidas-geladas/Frape.jpg",
      name: "Frapê",
      dsc: "(250ml) Criado com uma mistura única de ingredientes de alta qualidade, frutas in natura (morango, amora e frutas vermelhas), leite integral, leite condensado e sorvete trazendo uma textura cremosa e sabor irresistível. Uma taça decorada com calda e com cobertura do creme de chantilly da casa. Uma explosão de frescor, doçura e sabor que encanta",
      price: 29.0,
    },
    {
      id: "Soda-italiana",
      img: "/img/cardapio/bebidas-geladas/Soda-italiana.jpg",
      name: "Soda italiana",
      dsc: "(350ml) A soda italiana é uma bebida refrescante, visualmente atraente levemente doce e aromática, que combina água gaseificada com xarope e gelo. Sabores, morango, frutas vermelhas, tangerina, limão siciliano e maça verde.",
      price: 20.0,
    },
  ],
  bebidas: [
    {
      id: "Agua-com-gas",
      img: "/img/cardapio/bebidas/Agua-com-gas.png",
      name: "Água com gás",
      dsc: "(500ml) A água com gás engarrafada, geladinha, melhora o paladar deixando as papilas gustativas mais sensíveis ao sabor dos alimentos.(Acréscimo de limão e gelo 1,50 R$)",
      price: 5.0,
    },
    {
      id: "Agua",
      img: "/img/cardapio/bebidas/Agua.png",
      name: "Água Mineral",
      dsc: "(500ml) Água engarrafada, geladinha e essencial para acompanhar seu prato.",
      price: 4.0,
    },
    {
      id: "Refrigerante-latas",
      img: "/img/cardapio/bebidas/Refrigerante-latas.png",
      name: "Refrigerante",
      dsc: "(lata) unidade",
      price: 7.0,
    },
    {
      id: "suco",
      img: "/img/cardapio/bebidas/suco.jpg",
      name: "Sucos",
      dsc: "(300ml)A polpa de fruta natural congelada é batida com água mineral gelada com ou sem açúcar proporcionando um suco extremamente gelado e concentrado. Sabores, acerola, graviola, cajá, cupuaçu, goiaba, mangaba",
      price: 8.0,
    },
  ],
  toasts: [
    {
      id: "toasts-chapa",
      img: "/img/cardapio/toasts/toast-chapa.jpg",
      name: "Pão na chapa",
      dsc: "Aquela manteiga que derrete e deixa um sabor todo especial, combinando com o pão de casca rústica, fatias mais grossas e incrivelmente macio",
      price: 9.0,
    },
    {
      id: "toasts-queijo",
      img: "/img/cardapio/toasts/toast-chapa.jpg",
      name: "Pão na chapa com queijo especial",
      dsc: "Aquela manteiga que derrete e deixa um sabor todo especial, combinando com o pão de casca rústica, fatias mais grossas e incrivelmente macio com adicional de queijo minas derretido proporcionando mais sabor ao pão",
      price: 13.0,
    },
    {
      id: "toasts-ovo",
      img: "/img/cardapio/toasts/toast-chapa.jpg",
      name: "Pão na chapa com ovos mexidos e bacon",
      dsc: "Aquela manteiga que derrete e deixa um sabor todo especial, combinando com o pão de casca rústica, fatias mais grossas e incrivelmente macio com adicional de ovo e cubinhos de bacon frito  proporcionando mais sabor ao pão",
      price: 16.0,
    },
    {
      id: "paodequeijo",
      img: "/img/cardapio/salgados/paodequeijo.jpg",
      name: "Pão de queijo",
      dsc: "(3 unidades) Crocante por fora e macio por dentro, o pão de queijo é uma explosão de sabor e textura, com aquele gostinho caseiro de queijo minas ",
      price: 11.0,
    },
  ],
  salgados: [
    {
      id: "Camarao-Caravelas",
      img: "/img/cardapio/salgados/camarao-caravelas.jpg",
      name: "Camarão Caravelas",
      dsc: "(5 unidades) Camarões envolvidos em uma massa feita com um delicioso caldo de camarão e especiarias como cebola, alho e coentro. Acompanha geleia de pimenta, azeite e ou pimenta.",
      price: 17.0,
    },
    {
      id: "Coxinha",
      img: "/img/cardapio/salgados/coxinhas.jpg",
      name: "Coxinhas na cama de requeijão",
      dsc: "(6 unidades) Massa crocante por fora, um recheio suculento de frango desfiado sobre uma generosa camada de requeijão",
      price: 12.0,
    },
    {
      id: "Cuzcuz-de-milho",
      img: "/img/cardapio/salgados/Cuzcuz-de-milho.jpg",
      name: "Cuzcuz de milho",
      dsc: "Nosso cuscuz de milho é um prato saudável e reconfortante, preparado com farinha flocada previamente hidratada com água e cozida sobre calor. Escolha entre nossos deliciosos recheios: Carne seca dessalgada e desfiada, frango desfiado suculento, bacon crocante, queijo minas derretido, requeijão cremoso da casa, banana da terra caramelada ou creme de aipim pastoso.",
      price: 16.0,
    },
    {
      id: "Empadao-de-Frango",
      img: "/img/cardapio/salgados/Empadao-de-Frango.jpg",
      name: "Empadão de Frango",
      dsc: "(Fatia) O clássico empadão é feito com uma massa leve que derrete na boca e um delicioso recheio de frango com especiarias como alho, cebola e açafrão coberto de uma generosa camada de requeijão cremoso",
      price: 18.5,
    },
    {
      id: "Bolinhos-de-bacalhau",
      img: "/img/cardapio/salgados/bolinho.png",
      name: "Bolinhos de bacalhau",
      dsc: "(3 unidades) Bacalhau desfiado com um toque leve de purê de batatas com o coentro e tem como acompanhamento azeite, pimenta e geleia de pimenta.",
      price: 26.0,
    },
    {
      id: "Porção-de-canudinho",
      img: "/img/cardapio/salgados/Porção-de-canudinho.jpg",
      name: "Canudinho artesanal",
      dsc: "(6 unidades) Nossos canudinhos, preparados com uma massa leve e bem sequinhos, são perfeitos para os acompanhamentos como patê de frango, doce de leite e Nutella.",
      price: 14.0,
    },
    {
      id: "Quibe-artesanal",
      img: "/img/cardapio/salgados/Quibe-artesanal.jpg",
      name: "Quibe artesanal",
      dsc: "O preparo do quibe, consiste na mistura do triguilho com a carne moída, regado com especiarias aromáticas, o alho, cebola e muita hortelã. Assado no azeite e servido com o delicioso molho cítrico a base de iogurte natural, azeite extravirgem e hortelã.",
      price: 17.0,
    },
  ],
  tapiocas: [
    {
      id: "Tapioca",
      img: "/img/cardapio/tapiocas/Tapioca.jpg",
      name: "Tapioca",
      dsc: "Nossa tradicional tapioca preparada na hora com goma fresca e aquecida na frigideira. Escolha entre nossos deliciosos recheios: Carne seca dessalgada e desfiada, frango desfiado suculento, bacon crocante, queijo minas derretido, requeijão cremoso da casa, banana da terra caramelada ou creme de aipim pastoso.",
      price: 16.0,
    },
    {
      id: "Crepioca",
      img: "/img/cardapio/tapiocas/crepioca.jpg",
      name: "Crepioca",
      dsc: "Nossa crepioca é uma excelente alternativa leve para quem busca um café da tarde. Mistura homogênea da goma de tapioca, ovo e uma pitada de sal em uma frigideira com azeite extravirgem. Escolha entre nossos deliciosos recheios: Carne seca dessalgada e desfiada, frango desfiado suculento, bacon crocante, queijo minas derretido, requeijão cremoso da casa, banana da terra caramelada ou creme de aipim pastoso.",
      price: 16.0,
    },
  ],
  tortas: [
    {
      id: "Banoffee",
      img: "/img/cardapio/tortas/Banoffee.jpg",
      name: "Banoffee",
      dsc: "(Fatia) A torta é feita com uma deliciosa massa crocante de biscoito, camada generosa de doce de leite cremoso da casa e bananas in natura cobertos com um levíssimo à base de creme e leite condensado, e finalizado com um delicado toque aveludado de canela.",
      price: 25.0,
    },
    {
      id: "Torta-de-limao",
      img: "/img/cardapio/tortas/Torta-de-limao.jpg",
      name: "Torta de limão",
      dsc: "(Fatia)Deliciosa massa crocante de biscoito com um mousse de limão que derrete na boca com um gostinho cítrico e coberto por uma generosa camada de creme, leite condensado e leite em pó. Essa torta de leveza e frescor é uma explosão de sabor combinado com uma delicada decoração de raspas de limão.",
      price: 25.0,
    },
    {
      id: "Torta-holandesa",
      img: "/img/cardapio/tortas/tortaholandesa.jpg",
      name: "Torta holandesa",
      dsc: "(Fatia) Essa torta une a crocância da massa de biscoito à suavidade do creme espesso à base de creme e leite condensado, finalizada com uma deliciosa cobertura de ganache e biscoitos com chocolate.",
      price: 26.0,
    },
    {
      id: "Tortamaracuja",
      img: "/img/cardapio/tortas/tortamaracuja.jpg",
      name: "Torta de maracujá",
      dsc: "(Fatia) Uma crocante massa de biscoitos com um delicioso creme de maracujá coberto por uma generosa camada de creme, leite condensado e leite em pó. E uma camada refrescante e tropical de geleia de maracujá in natura.",
      price: 26.0,
    },
  ],
  bolos: [
    {
      id: "Chocolatudo",
      img: "/img/cardapio/bolos/Chocolatudo.jpg",
      name: "Chocolatudo",
      dsc: "(Fatia) Um bolo leve e úmido preparado com cacau 50% e recheio generoso de brigadeiro e uma ganache de creme e chocolate, finalizado com uma deliciosa ganache de chocolate.",
      price: 28.0,
    },
    {
      id: "Ninho-com-morango",
      img: "/img/cardapio/bolos/bolo-de-ninho.jpg",
      name: "Ninho com morango",
      dsc: "(Fatia) Uma combinação deliciosa, este bolo é feito com uma massa macia e fofinha, recheado com um saboroso creme de ninho e um cremoso couli de morangos. É coberto por uma deliciosa camada quatro leites.",
      price: 26.0,
    },
    {
      id: "Red-Velvet",
      img: "/img/cardapio/bolos/Red-Velvet.jpg",
      name: "Red Velvet",
      dsc: "(Fatia) Um bolo americano famoso por sua cor vermelha vibrante e textura macia. É recheado com uma generosa camada de cream cheese, que equilibra perfeitamente com a cobertura cremosa de quatro leites acompanhada de uma deliciosa geleia de frutas vermelhas.",
      price: 29.0,
    },
    {
      id: "Bolo-pacoquinha",
      img: "/img/cardapio/bolos/bolo-de-pacoca.jpg",
      name: "Bolo paçoquinha",
      dsc: "(Fatia) Uma combinação deliciosa, este bolo é feito com uma massa macia e fofinha, recheado com um saboroso creme de ninho e um delicioso creme de paçoca. É coberto por uma deliciosa camada quatro leites.",
      price: 25.0,
      num: "044",
    },
  ],
  doces: [
    {
      id: "Brownie-com-sorvete",
      img: "/img/cardapio/doces/Brownie-com-sorvete.jpg",
      name: "Brownie com sorvete",
      dsc: "O nosso brownie é uma massa cremosa, densa e rica em chocolate. É aquecido e servido quente com uma ganache de chocolate artesanal e uma deliciosa bola de sorvete.",
      price: 28.0,
    },
    {
      id: "Porção-mini-churros",
      img: "/img/cardapio/doces/Porção-mini-churros.jpg",
      name: "Porção mini churros",
      dsc: "(15 unidades) Nosso delicioso mini churro de massa artesanal bem sequinho coberto de açúcar e canela acompanhado do Doce de leite da casa e Nutella.",
      price: 26.0,
    },
    {
      id: "banana-real",
      img: "/img/cardapio/doces/banana-real.jpg",
      name: "Banana real",
      dsc: "A deliciosa banana real é um pastel frito e recheado com uma caramelada banana-da-terra, salpicado com açúcar e canela, que é uma sobremesa clássica da culinária baiana",
      price: 11.0,
    },
    {
      id: "palha-italiana",
      img: "/img/cardapio/doces/palha-italiana.jpg",
      name: "Palha Italiana",
      dsc: "A palha italiana idealizada para os apaixonados por chocolate que buscam uma experiência gustativa. É um doce moldado à mão, feito com o nosso delicioso brigadeiro e pedaços de biscoitos.",
      price: 14.0,
    },
    {
      id: "docinho",
      img: "/img/cardapio/doces/brigadeiro.jpg",
      name: "Brigadeiro",
      dsc: "(36g) É um brigadeiro diferenciado, feito com leite condensado, creme de leite e cacau 50%. Um doce macio, redondo coberto por uma camada de um saboroso granulado ao leite.",
      price: 6.0,
    },
  ],
};

function withSequentialNumbers(
  seed: Record<string, MenuSeedItem[]>,
): Record<string, MenuItem[]> {
  let counter = 0;
  const menu: Record<string, MenuItem[]> = {};

  const orderedKeys = [
    ...CATEGORIES.map((category) => category.id),
    ...Object.keys(seed).filter(
      (key) => !CATEGORIES.some((category) => category.id === key),
    ),
  ];

  for (const key of orderedKeys) {
    const items = seed[key];
    if (!items) continue;

    menu[key] = items.map((item) => {
      if (item.num) {
        return { ...item, num: item.num };
      }

      counter += 1;
      return { ...item, num: String(counter).padStart(3, "0") };
    });
  }

  return menu;
}

export const MENU: Record<string, MenuItem[]> =
  withSequentialNumbers(MENU_SEED);
