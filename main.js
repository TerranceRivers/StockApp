

let getButton = document.querySelector('#get')
let postButton = document.querySelector('#post')
let putButton = document.querySelector('#put')
let deleteButton = document.querySelector('#delete')
let singleButton = document.querySelector('#single')

let url = "https://642f0a6f2b883abc641d3c50.mockapi.io/users";

getButton.addEventListener("click", async function () {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
});

postButton.addEventListener('click', async  () => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: 'user101',
            name: 'Jimmy Persons',
            city: 'Miami'
        })
    })
    let data = await res.json()
     console.log(data)
})

putButton.addEventListener('click', async () => {
    let res = await fetch(`${url}/1`, {
        method: "PUT",
        headers: {
            "Content-Type":' application/json'
        },
        body: JSON.stringify({
            username: 'user305',
            name: 'Jimmy Persons',
            city: 'Miami'
        })
    })
})

deleteButton.addEventListener('click', async () => {
    let res = await fetch(`${url}/2`, {
        method: "DELETE"
    })
    let data = await res.json
    console.log(data)
})
singleButton.addEventListener("click", async function () {
    let res = await fetch(`${url}/6`);
    let data = await res.json();
    console.log(data);
  });
  