$(document).ready(async function () {
    $('#getQuoteButton').click(function () {
      getStockData();
    });
  });
  
  async function getStockData() {
    const symbolInput = document.getElementById('symbol');
    const symbol = symbolInput.value.toUpperCase();
  
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3457aa35e2msh7ced358f136efdfp16725djsn0b3712f7afa7',
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(
        `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`,
        options
      );
      const data = await response.json();
  
      if (data['Global Quote']) {
        const quoteData = `
          <tr>
            <td>${symbol}</td>
            <td>${data['Global Quote']['02. open']}</td>
            <td>${data['Global Quote']['03. high']}</td>
            <td>${data['Global Quote']['04. low']}</td>
            <td>${data['Global Quote']['05. price']}</td>
            <td>${data['Global Quote']['06. volume']}</td>
          </tr>
        `;
        document.getElementById('quote-data').innerHTML = quoteData;
      } else {
        document.getElementById('quote-data').innerHTML =
          '<tr><td colspan="6">No data found.</td></tr>';
      }
    } catch (error) {
      console.error(error);
    }
  }
  