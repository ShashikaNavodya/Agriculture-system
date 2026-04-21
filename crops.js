let sessionCrops = [];

function addCrop() {
  let name = document.getElementById("cropName").value.trim();
  let price = document.getElementById("cropPrice").value.trim();

  if (!name || !price) {
    alert("Enter crop details");
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert("Enter valid price");
    return;
  }

  let crop = {
    name: name,
    price: Number(price)
  };

  sessionCrops.push(crop);

  displayCrops();

  document.getElementById("cropName").value = "";
  document.getElementById("cropPrice").value = "";
}

function displayCrops() {
  let list = document.getElementById("cropList");

  if (sessionCrops.length === 0) {
    list.innerHTML = "";
    return;
  }

  list.innerHTML = "";

  sessionCrops.forEach((crop, index) => {
    let li = document.createElement("li");
    li.innerText = `${index + 1}. ${crop.name} - Rs. ${crop.price.toLocaleString()}`;
    list.appendChild(li);
  });
}