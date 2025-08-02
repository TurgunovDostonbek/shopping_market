const products = [
  {
    id: 1,
    title: "Intel Core i5 10th Gen",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: false,
    image: "./img/product1.png",
  },
  {
    id: 2,
    title: "Gigabyte B450M Motherboard",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: false,
    image: "./img/product1.png",
  },
  {
    id: 3,
    title: "Gaming System Unit RGB",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: true,
    image: "./img/product1.png",
  },
  {
    id: 4,
    title: "RGB Mechanical Keyboard",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: true,
    image: "./img/product1.png",
  },
  {
    id: 5,
    title: "Compact RGB Keyboard",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: false,
    image: "./img/product1.png",
  },
  {
    id: 6,
    title: "Gigabyte GeForce GTX GPU",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3500",
    isNew: false,
    image: "./img/product2.png",
  },
  {
    id: 7,
    title: "Intel Core i7 11th Gen",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 5,
    reviews: 5,
    oldPrice: "4000",
    price: "3800",
    isNew: true,
    image: "./img/product2.png",
  },
  {
    id: 8,
    title: "MSI B550M Motherboard",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 3,
    reviews: 2,
    oldPrice: "3600",
    price: "3400",
    isNew: false,
    image: "./img/product2.png",
  },
  {
    id: 9,
    title: "Gaming Mouse RGB",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 3,
    oldPrice: "1500",
    price: "1300",
    isNew: true,
    image: "./img/product2.png",
  },
  {
    id: 10,
    title: "Power Supply 600W",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "1800",
    price: "1700",
    isNew: false,
    image: "./img/product3.png",
  },
  {
    id: 11,
    title: "Full Tower Case RGB",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 5,
    reviews: 7,
    oldPrice: "3600",
    price: "3500",
    isNew: false,
    image: "./img/product4.png",
  },
  {
    id: 12,
    title: "ASUS Prime B450M-A",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 4,
    oldPrice: "3600",
    price: "3450",
    isNew: false,
    image: "./img/product5.png",
  },
  {
    id: 13,
    title: "16GB DDR4 RAM",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 5,
    reviews: 5,
    oldPrice: "3200",
    price: "3100",
    isNew: true,
    image: "./img/product6.png",
  },
  {
    id: 14,
    title: "SSD 512GB M.2 NVMe",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 5,
    reviews: 6,
    oldPrice: "3000",
    price: "2850",
    isNew: true,
    image: "./img/product6.png",
  },
  {
    id: 15,
    title: "Gaming Headset with Mic",
    description: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    rating: 4,
    reviews: 3,
    oldPrice: "2600",
    price: "2400",
    isNew: false,
    image: "./img/product6.png",
  },
];

let cart = [];
let totalPrice = 0;
let count = 0;

const sectionCards = document.querySelector(".section__cards");
const cardsWrapper = document.querySelector(".cards__wrapper");
const navbarBtnImg = document.querySelector(".navbar__btn--img");
const cards = document.querySelector(".cards");
const totalPriceSpan = document.querySelector(".cards__title--price");

products.forEach((product) => {
  const sectionCard = document.createElement("div");
  sectionCard.classList.add("section__card");

  sectionCard.innerHTML = `
    <img class = "section__card--img" src="${product.image}" alt="productIMG" />
    <h3 class = "section__card--title">${product.description}</h3>
    <div class = "section__card--card">
      <p class = "section__card--price">
      <span class = "old__price">${product.oldPrice} $</span>
      <span class = "price">${product.price + "$"} </span>
      </p>
      <button onclick = "addToCard(${product.id})">КУПИТЬ</button>
    </div>
  `;
  sectionCards.appendChild(sectionCard);
});

function addToCard(productId) {
  count++;
  const product = products.find((item) => item.id === productId);
  cart.push(product);
  totalPrice += Number(product.price);
  renderProduct();

  document.querySelector(".count").textContent = count;

  // // Cartda mahsulot allaqachon bormi, tekshiramiz
  // const existingProduct = cart.find((item) => item.id === productId);

  // if (existingProduct) {
  //   existingProduct.quantity += 1; // miqdorini oshiramiz
  // } else {
  //   cart.push({ ...product, quantity: 1 }); // birinchi marta qo'shilyapti
  // }
  // renderProduct();
}

// rendring
function renderProduct() {
  cards.innerHTML = "";
  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `

    <div class = "card--card">
    <img class = "card--img" src="${item.image}" alt="productIMG" />
    <h3 class = "card--title">${item.description}</h3>
    </div>
    <span class = "price">${item.price} $</span>
    <button onclick = "deleteCard(${index})">Delete</button>
    `;
    cards.appendChild(card);
  });

  totalPriceSpan.textContent = totalPrice + " $";
}

function deleteCard(index) {
  totalPrice -= cart[index].price;
  count--;
  cart.splice(index, 1);
  renderProduct();
  document.querySelector(".count").textContent = count;
}

function transformToggle() {
  cardsWrapper.classList.toggle("transform__toggle");
}
