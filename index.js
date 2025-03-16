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

    ramens.forEach(ramen => {
        const img = document.createElement("img")
        img.src = ramen.image
        img.alt = ramen.name
        img.dataset.id = ramen.id
        img.style.width = "200px"
        img.style.height = "200px"
        img.style.margin = "50px"
        img.style.display = "inline-block"

        img.addEventListener("click", () => handleClick(ramen));


        menu.appendChild(img); 
    });
}
function handleClick(ramen) {
    const detailDiv = document.querySelector("#ramen-detail");
    detailDiv.innerHTML = "";
    detailDiv.style.justifyContent = "center";
    detailDiv.style.marginLeft = "500px"

    
    const img = document.createElement("img")
    img.src = ramen.image;
    img.alt = ramen.name;
    img.style.width = "200px" 

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
    form.style.marginLeft = '500px'
}
function main() {
    displayRamens(),
    handleClick();
}