const navItems = document.querySelectorAll('.nav-item')
const list = document.getElementById('list')

navItems[0].classList.add('active')

async function fetchData(category) {
    try {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        const cocktailData = await response.json()
        addItems(cocktailData.drinks)
    } catch(error) {
        console.error(error)
    }
}

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
        fetchData(event.currentTarget.id)
    })
})

fetchData('Cocktail')

function addItems(drinks) {
    list.innerHTML = ''
    drinks.forEach(drink => {
        const container = document.createElement('div')
        container.classList.add('list-item', 'col-12', 'col-sm-3')
        const title = document.createElement('h3')
        title.textContent = drink.strDrink
        const thumbnail = document.createElement('img')
        thumbnail.setAttribute('src', drink.strDrinkThumb)
        thumbnail.classList.add('thumbnail')

        container.appendChild(thumbnail)
        container.appendChild(title)
        list.appendChild(container)
    })
}