$(document).ready(function() {
    // Initialize trades array
    var trades = [];
  
    // Handle form submission
    $('#tradesForm').submit(function(event) {
      event.preventDefault();
      var symbol = $('#tradeSymbol').val();
      var price = $('#tradePrice').val();
      var quantity = $('#tradeQuantity').val();
      var notes = $('#tradeNotes').val();
  
      // Add trade to array
      var trade = {
        symbol: symbol,
        price: price,
        quantity: quantity,
        notes: notes
      };
      trades.push(trade);
  
      // Update trades table
      var tableBody = $('#tradesTable');
      var row = $('<tr>');
      row.append($('<td>').text(trade.symbol));
      row.append($('<td>').text(trade.price));
      row.append($('<td>').text(trade.quantity));
      var totalCost = trade.price * trade.quantity;
      row.append($('<td>').text(totalCost.toFixed(2)));
      row.append($('<td>').text(trade.notes));
      tableBody.append(row);
  
      // Clear form
      $('#tradesForm')[0].reset();
    });
  });
  