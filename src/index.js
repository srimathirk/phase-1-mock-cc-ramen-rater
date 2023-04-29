// write your code here

//const ramenMenu = document.querySelector('#ramen-menu')
document.addEventListener('DOMContentLoaded',() => {

    fetch('http://localhost:3000/ramens').then(res => res.json()).then(ramens => { ramens.forEach(ramen=> createRamenImgMenu(ramen))})
});
function createRamenImgMenu(ramen){
    const imgMenu = document.createElement('img');
    imgMenu.src = ramen.image;
    //if click img see all menu info
    imgMenu.addEventListener('click',()=>{ 
       // e.preventDefault();
        const imgDetails = document.querySelector('#ramen-detail .detail-image');
        imgDetails.src = ramen.image;
        const nameDetails = document.querySelector('#ramen-detail .name');
        nameDetails.textContent = ramen.name;
        const restaurantDetails = document.querySelector('#ramen-detail .restaurant');
        restaurantDetails.textContent = ramen.restaurant;
        const ratingDetails = document.querySelector('#rating-display');
        ratingDetails.textContent = ramen.rating;
        const commentDetails = document.querySelector('#comment-display');
        commentDetails.textContent = ramen.comment;
});
//div#ramen-menu.append(imgDetails ,nameDetails ,restaurantDetails, ratingDetails , commentDetails)
document.getElementById('ramen-menu').append(imgMenu)
   }
//adding new ramen
const form = document.getElementById('new-ramen')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target))
    console.log(formData);
    sendPost(formData)
})

function sendPost(newRamen){
    fetch('http://localhost:3000/ramens',{
        method: "POST",
        headers: 
        {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            /* name = newRamen.name , restaurant = newRamen.restaurant,
               image = newRamen.image, rating = newRamen.rating, comment = newRamen.comment*/
               ...newRamen,
        })
    }).then(res=>res.json()).then(newRamen =>createRamenImgMenu(newRamen))
}


