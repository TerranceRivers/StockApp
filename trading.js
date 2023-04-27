// Retrieve trades from local storage
let trades = JSON.parse(localStorage.getItem("trades")) || [];

// Add trade function
function addTrade() {
  let tradeSymbol = document.getElementById("tradeSymbol").value;
  let tradePrice = parseFloat(document.getElementById("tradePrice").value);
  let tradeQuantity = parseInt(document.getElementById("tradeQuantity").value);
  let tradeNotes = document.getElementById("tradeNotes").value;

  let totalCost = tradePrice * tradeQuantity;

  let trade = {
    symbol: tradeSymbol,
    price: tradePrice,
    quantity: tradeQuantity,
    totalCost: totalCost,
    notes: tradeNotes
  };

  trades.push(trade);

  // Save trades to local storage
  localStorage.setItem("trades", JSON.stringify(trades));

  // Clear form fields
  document.getElementById("tradeSymbol").value = "";
  document.getElementById("tradePrice").value = "";
  document.getElementById("tradeQuantity").value = "";
  document.getElementById("tradeNotes").value = "";

  // Update trades table
  updateTradesTable();
}

// Delete trade function
function deleteTrade(index) {
  trades.splice(index, 1);

  // Save trades to local storage
  localStorage.setItem("trades", JSON.stringify(trades));

  // Update trades table
  updateTradesTable();
}

// Edit trade function
function editTrade(index) {
  let trade = trades[index];

  document.getElementById("tradeSymbol").value = trade.symbol;
  document.getElementById("tradePrice").value = trade.price;
  document.getElementById("tradeQuantity").value = trade.quantity;
  document.getElementById("tradeNotes").value = trade.notes;

  deleteTrade(index);
}

// Update trades table function
function updateTradesTable() {
  let tradesTable = document.getElementById("tradesTable");

  // Clear existing rows
  tradesTable.innerHTML = "";

  // Add new rows
  for (let i = 0; i < trades.length; i++) {
    let trade = trades[i];

    let row = document.createElement("tr");
    let symbolCell = document.createElement("td");
    symbolCell.textContent = trade.symbol;
    row.appendChild(symbolCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = trade.price;
    row.appendChild(priceCell);

    let quantityCell = document.createElement("td");
    quantityCell.textContent = trade.quantity;
    row.appendChild(quantityCell);

    let totalCostCell = document.createElement("td");
    totalCostCell.textContent = trade.totalCost;
    row.appendChild(totalCostCell);

    let notesCell = document.createElement("td");
    notesCell.textContent = trade.notes;
    row.appendChild(notesCell);

    let buttonsCell = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-sm", "btn-secondary", "ml-2");
    editButton.addEventListener("click", () => editTrade(i));
    buttonsCell.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-sm", "btn-danger", "ml-2");
    deleteButton.addEventListener("click", () => deleteTrade(i));
    buttonsCell.appendChild(deleteButton);

    row.appendChild(buttonsCell);
    tradesTable.appendChild(row);
  }
}

// Initialize trades table
updateTradesTable();

// Handle form submission
document.getElementById("tradesForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addTrade();
});
