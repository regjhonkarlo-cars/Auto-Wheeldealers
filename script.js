// =====================
//  AUTO WHEELDEALERS
// =====================

const cars = [
  {
    name: "Toyota Camry 2022",
    price: "₱1,850,000",
    condition: "Brand New",
    specs: ["Engine: 2.5L Gasoline", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 0 km"],
    img: "images/camry.jpg"
  },
  {
    name: "Honda Civic RS Turbo 2021",
    price: "₱1,700,000",
    condition: "Used - Excellent",
    specs: ["Engine: 1.5L Turbo", "Transmission: CVT", "Fuel Type: Gasoline", "Mileage: 10,000 km"],
    img: "images/civic.jpg"
  },
  {
    name: "Ford Ranger Wildtrak 2020",
    price: "₱1,350,000",
    condition: "Used - Very Good",
    specs: ["Engine: 2.0L Bi-Turbo Diesel", "Transmission: Automatic", "Fuel Type: Diesel", "Mileage: 35,000 km"],
    img: "images/ranger.jpg"
  },
  {
    name: "Mitsubishi Montero Sport 2021",
    price: "₱1,950,000",
    condition: "Used - Excellent",
    specs: ["Engine: 2.4L Diesel", "Transmission: Automatic", "Fuel Type: Diesel", "Mileage: 12,000 km"],
    img: "images/montero.jpg"
  },
  {
    name: "Nissan Navara 2023",
    price: "₱1,600,000",
    condition: "Brand New",
    specs: ["Engine: 2.5L Turbo Diesel", "Transmission: Manual", "Fuel Type: Diesel", "Mileage: 0 km"],
    img: "images/navara.jpg"
  },
  {
    name: "Suzuki Swift 2022",
    price: "₱950,000",
    condition: "Brand New",
    specs: ["Engine: 1.2L", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 0 km"],
    img: "images/swift.jpg"
  },
  {
    name: "Toyota Fortuner 2020",
    price: "₱1,850,000",
    condition: "Used - Good",
    specs: ["Engine: 2.8L Diesel", "Transmission: Automatic", "Fuel Type: Diesel", "Mileage: 40,000 km"],
    img: "images/fortuner.jpg"
  },
  {
    name: "Mazda 3 2019",
    price: "₱1,050,000",
    condition: "Used - Very Good",
    specs: ["Engine: 1.5L Gasoline", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 20,000 km"],
    img: "images/mazda3.jpg"
  },
  {
    name: "Hyundai Tucson 2018",
    price: "₱870,000",
    condition: "Used - Good",
    specs: ["Engine: 2.0L Gasoline", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 50,000 km"],
    img: "images/tucson.jpg"
  },
  {
    name: "Kia Stonic 2023",
    price: "₱1,100,000",
    condition: "Brand New",
    specs: ["Engine: 1.4L Gasoline", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 0 km"],
    img: "images/stonic.jpeg"
  },
  {
    name: "Chevrolet Trailblazer 2020",
    price: "₱1,550,000",
    condition: "Used - Excellent",
    specs: ["Engine: 2.8L Diesel", "Transmission: Automatic", "Fuel Type: Diesel", "Mileage: 25,000 km"],
    img: "images/trailblazer.jpg"
  },
  {
    name: "Isuzu D-Max 2021",
    price: "₱1,400,000",
    condition: "Used - Very Good",
    specs: ["Engine: 3.0L Diesel", "Transmission: Automatic", "Fuel Type: Diesel", "Mileage: 18,000 km"],
    img: "images/dmax.jpg"
  },
  {
    name: "BMW 3 Series 2019",
    price: "₱2,800,000",
    condition: "Used - Excellent",
    specs: ["Engine: 2.0L Turbo", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 15,000 km"],
    img: "images/bmw.jpeg"
  },
  {
    name: "Audi A4 2020",
    price: "₱3,100,000",
    condition: "Used - Excellent",
    specs: ["Engine: 2.0L Turbo", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 12,000 km"],
    img: "images/audi.jpg"
  },
  {
    name: "Mercedes-Benz C-Class 2019",
    price: "₱3,500,000",
    condition: "Used - Excellent",
    specs: ["Engine: 2.0L Turbo", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 10,000 km"],
    img: "images/benz.jpg"
  },
  {
    name: "Subaru Forester 2021",
    price: "₱1,700,000",
    condition: "Used - Very Good",
    specs: ["Engine: 2.0L", "Transmission: CVT", "Fuel Type: Gasoline", "Mileage: 8,000 km"],
    img: "images/forester.jpg"
  },
  {
    name: "Jeep Wrangler 2018",
    price: "₱3,200,000",
    condition: "Used - Good",
    specs: ["Engine: 3.6L V6", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 30,000 km"],
    img: "images/wrangler.jpg"
  },
  {
    name: "Tesla Model 3 2022",
    price: "₱4,500,000",
    condition: "Brand New",
    specs: ["Battery: 60kWh", "Range: 450 km", "Transmission: Automatic", "Fuel Type: Electric"],
    img: "images/tesla.jpg"
  },
  {
    name: "Porsche 911 Carrera 2021",
    price: "₱8,500,000",
    condition: "Used - Excellent",
    specs: ["Engine: 3.0L Twin Turbo", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 7,000 km"],
    img: "images/porsche.jpg"
  },
  {
    name: "Lamborghini Huracan 2020",
    price: "₱18,000,000",
    condition: "Used - Excellent",
    specs: ["Engine: 5.2L V10", "Transmission: Automatic", "Fuel Type: Gasoline", "Mileage: 5,000 km"],
    img: "images/huracan.jpeg"
  }
];

// Elements
const container = document.getElementById("carContainer");
const modal = document.getElementById("carModal");
const closeBtn = document.querySelector(".close");
const sortBtn = document.getElementById("sortPrice");
const filterBtn = document.getElementById("filterNew");
const resetBtn = document.getElementById("reset");

// === Optional: Search Bar (auto-create if not in HTML) ===
if (!document.getElementById("searchBar")) {
  const searchBox = document.createElement("input");
  searchBox.id = "searchBar";
  searchBox.placeholder = "Search by model...";
  searchBox.style.cssText = "width:80%;margin:1rem auto;display:block;padding:10px;border-radius:6px;border:none;outline:none;font-size:1rem;";
  document.querySelector("header").appendChild(searchBox);
}

// === Display cars ===
function displayCars(carList) {
  container.innerHTML = "";
  carList.forEach((car, index) => {
    const card = document.createElement("div");
    card.classList.add("car-card");
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <div class="car-info">
        <h3>${car.name}</h3>
        <p><strong>${car.price}</strong></p>
        <p>${car.condition}</p>
      </div>
    `;
    card.addEventListener("click", () => showCarDetails(car));
    container.appendChild(card);
  });
}
displayCars(cars);

// === Modal details ===
function showCarDetails(car) {
  document.getElementById("modalImg").src = car.img;
  document.getElementById("modalName").innerText = car.name;
  document.getElementById("modalPrice").innerText = `Price: ${car.price}`;
  document.getElementById("modalCondition").innerText = `Condition: ${car.condition}`;
  const specsList = document.getElementById("modalSpecs");
  specsList.innerHTML = "";
  car.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });
  modal.style.display = "flex";
}

// === Close modal ===
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// === Button Functions ===
sortBtn.addEventListener("click", () => {
  const sorted = [...cars].sort((a, b) => 
    parseInt(a.price.replace(/[₱,]/g, "")) - parseInt(b.price.replace(/[₱,]/g, ""))
  );
  displayCars(sorted);
});

filterBtn.addEventListener("click", () => {
  const filtered = cars.filter(c => c.condition.toLowerCase().includes("brand new"));
  displayCars(filtered);
});

resetBtn.addEventListener("click", () => {
  displayCars(cars);
  document.getElementById("searchBar").value = "";
});

// === Search Function ===
document.getElementById("searchBar").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = cars.filter(car => car.name.toLowerCase().includes(term));
  displayCars(filtered);
});
