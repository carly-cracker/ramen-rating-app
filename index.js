document.addEventListener("DOMContentLoaded", main)
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGghgJ7esaJXoexEm6ZByIDnmz_K5Uz3bTgQ&s", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "gyukotsu.jpg" }
 ];
 const first = document.getElementById('top')
console.log(first)
first.style.color = 'white'
first.style.backgroundColor = 'black'
first.style.textAlign = 'center'

function displayRamens() {
    const menu = document.querySelector("#ramen-menu")
    menu.innerHTML = ""

    ramens.forEach(ramen => addRamenToMenu(ramen))
}

function addRamenToMenu(ramen){
        const menu = document.querySelector('#ramen-menu')

        const img = document.createElement("img")
        img.src = ramen.image
        img.alt = ramen.name
        img.dataset.id = ramen.id
        img.style.width = "200px"
        img.style.height = "200px"
        img.style.display = "inline-block"
        img.style.display = "pointer"

        img.addEventListener("click", () => handleClick(ramen));


        menu.appendChild(img); 
    }

function handleClick(ramen) {
    const detailDiv = document.querySelector("#ramen-detail");
    detailDiv.innerHTML = "";
    detailDiv.style.justifyContent = "center";
    detailDiv.style.marginLeft = "500px"

    
    const img = document.createElement("img")
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = "200px";
    img.style.height ="200px";

    const name = document.createElement("h2")
    name.textContent = ramen.name

    const restaurant = document.createElement("h3")
    restaurant.textContent = `Restaurant: ${ramen.restaurant}`

    const rating = document.createElement("p");
    rating.textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";

    const comment = document.createElement("p");
    comment.textContent = ramen.comment ? `Comment: ${ramen.comment}` : "No comment available.";

    detailDiv.appendChild(img);
    detailDiv.appendChild(name);
    detailDiv.appendChild(restaurant);
    detailDiv.appendChild(rating);
    detailDiv.appendChild(comment);
}

const sec = document.getElementById("mid-ramen")
sec.style.color = "white"
sec.style.backgroundColor = 'black'
sec.style.textAlign = 'center'

function addSubmitListener(){
    const form = document.getElementById("new-ramen")
    form.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(event){
    event.preventDefault();

    const foodName = document.getElementById('new-name').value
    const restaurantName = document.getElementById('new-restaurant').value
    const foodImage = document.getElementById('food-image').value
    const rating =document.getElementById('food-rating').value
    const comment =document.getElementById('food-comment').value

    if(foodName && restaurantName && foodImage && rating && comment) {
        addsRamenMenu(foodName, restaurantName, foodImage, rating, comment)
        event.target.reset()
    }
} 

function addsRamenMenu(foodName, restaurantName, foodImage, rating, comment) {
  const newRamen ={
    name: foodName,
        restaurant: restaurantName,
        image: foodImage,
        rating: rating,
        comment: comment
  }
  ramens.push(newRamen);
  addRamenToMenu(newRamen)
}
function main() {
    displayRamens(),
    addSubmitListener()
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    };
}