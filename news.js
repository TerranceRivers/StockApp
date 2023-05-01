const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3457aa35e2msh7ced358f136efdfp16725djsn0b3712f7afa7',
		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
	}
};


fetch(
  "https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list?template=CURRENCY&id=usdjpy",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let stories = response.stories;

    // Create a new <ol> element
    const olElement = document.createElement("ol");

    for (let i = 0; i < stories.length; i++) {
      let title = stories[i].title;
      let url = stories[i].longURL;

        // Create a new <li> element
        const liElement = document.createElement("li");
        const aElement = document.createElement("a");
        aElement.href = url;
  
        // Set the title as the text content of the <a> element
        aElement.textContent = title;
  
        // Append the <a> element to the <li> element
        liElement.appendChild(aElement);
        liElement.classList.add("news-item");
        // Append the <li> element to the <ol> element
        olElement.appendChild(liElement);
      }
  

    // Append the <ol> element to the body of the HTML document
    document.body.appendChild(olElement);
  })
  .catch((err) => console.error(err));

// const url = 'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': '3457aa35e2msh7ced358f136efdfp16725djsn0b3712f7afa7',
// 		'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



