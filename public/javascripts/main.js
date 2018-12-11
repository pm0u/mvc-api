document.addEventListener('DOMContentLoaded', () => {

const ul = document.getElementById('snacklist')
console.log(ul)

axios.get('/snacks').then(snacks => {
  for (let i = 0; i < snacks.data.data.length; i++) {
    console.log(snacks)
    let li = document.createElement('li')
    li.innerText = `${snacks.data.data[i].name} and ${snacks.data.data[i].type}`
    ul.appendChild(li)
  }
  console.log('axios call');
})

})
