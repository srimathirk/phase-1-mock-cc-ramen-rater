// write your code here

document.addEventListener('DOMContentLoaded',() => {
    fetch('http://localhost:3000/ramens').then(res => res.json()).then(ramens => { ramens.forEach(ramen=> createRamenMenuImg(ramen))});
});
function createRamenMenuImg(ramen){
    const menuImg = document.createElement('img');
    menuImg.src = ramen.image;
    //if click img see all menu info
    menuImg.addEventListener('click',()=>{ 
        const imgDetails = document.querySelector('#ramen-detail .detail-image');
        imgDetails.src = 'ramen.image';
        const nameDetails = document.querySelector('#ramen-detail .name');
        nameDetails.textContent = 'ramen.name';
        const restaurantDetails = document.querySelector('#ramen-detail .restaurant');
        restaurantDetails.textContent = 'ramen.restaurant';
        const ratingDetails = document.querySelector('#rating-display');
        ratingDetails.textContent = 'ramen.rating';
        const commentDetails = document.querySelector('#comment-display');
        commentDetails.textContent = 'ramen.comment';
});
const ramenMenu = document.querySelector('#ramen-menu')
ramenMenu.append(menuImg);
}
