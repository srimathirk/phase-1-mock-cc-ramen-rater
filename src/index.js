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
    const formData = Object.fromEntries(new FormData(e.target)) //name=e.target.name.value img= e.target.image.value, restaurant = e.target.restaurant.value
    console.log(formData);
    sendPost(formData)
})
const updateForm = document.getElementById('edit-ramen')
updateForm.addEventListener('submit',(e)=>{
    console.log("update by changing form submitted")
    e.preventDefault();
    const rating = e.target.rating.value;
    const comment = e.target.comment.value
    console.log(rating,comment);
    updatePost(rating , comment);
    //updateForm.textContent = formData
    
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
               ...newRamen, //name= newRamen.name, image = newRamen.image
        })
    }).then(res=>res.json()).then(newRamen =>createRamenImgMenu(newRamen))
}
 
//(ratings and comment will get updated and it will show if get refresh page)
function updatePost(updateRating,updateComment){
    fetch(`http://localhost:3000/ramens/1`,{
        method: "PATCH",
        headers: 
        {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
           "rating" : updateRating,
           "comment" : updateComment
           })
    })
}
