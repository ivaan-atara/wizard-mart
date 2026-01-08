const products = [
  { name: "Elder Wand", price: 900 },
  { name: "Invisibility Cloak", price: 1500 },
  { name: "Magic Spell Book", price: 450 },
  { name: "Wizard Hat", price: 300 },
  { name: "Potion Kit", price: 700 }
];

const container = document.getElementById("products");
const filter = document.getElementById("priceFilter");

function displayProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
      </div>
    `;
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;
  if (value === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.price <= value));
  }
});

displayProducts(products);
