document.addEventListener("DOMContentLoaded", function () {
  loadTrades();

  const tradesForm = document.getElementById("tradesForm");
  tradesForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTrade();
  });
});

function addTrade() {
  const tradeSymbol = document.getElementById("tradeSymbol").value;
  const tradePrice = parseFloat(document.getElementById("tradePrice").value);
  const tradeQuantity = parseInt(document.getElementById("tradeQuantity").value, 10);
  const tradeNotes = document.getElementById("tradeNotes").value;

  const trade = {
    symbol: tradeSymbol,
    price: tradePrice,
    quantity: tradeQuantity,
    totalCost: tradePrice * tradeQuantity,
    notes: tradeNotes,
  };

  let trades = getTradesFromLocalStorage();
  trades.push(trade);
  localStorage.setItem("trades", JSON.stringify(trades));
  loadTrades();
  document.getElementById("tradesForm").reset();
}

function loadTrades() {
  const trades = getTradesFromLocalStorage();
  let tradesHtml = "";

  for (const trade of trades) {
    tradesHtml += `
      <tr>
        <td>${trade.symbol}</td>
        <td>${trade.price.toFixed(2)}</td>
        <td>${trade.quantity}</td>
        <td>${trade.totalCost.toFixed(2)}</td>
        <td>${trade.notes}</td>
      </tr>
    `;
  }

  document.getElementById("tradesTable").innerHTML = tradesHtml;
}

function getTradesFromLocalStorage() {
  const trades = localStorage.getItem("trades");
  return trades ? JSON.parse(trades) : [];
}
