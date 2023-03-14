const imgsArray = ["img/img_1.jpg", "img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg"]

console.log(imgsArray);

const imgContainer = document.querySelector(".card")

for (let i = 0; i < imgsArray.length; i++) {
    const currentImg = imgsArray [i];
    
    const objCard = `
        <div class = "picture">
            <img src="${currentImg}" alt="">
        </div>`;

        imgContainer.innerHTML += objCard;

}

const picturesArray = document.getElementsByClassName("picture")
console.log(picturesArray);

let activeItemIndex = 0;
picturesArray[activeItemIndex].classList.add("active");