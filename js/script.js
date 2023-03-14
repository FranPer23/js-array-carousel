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

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", function() {

    prevBtn.classList.remove("hidden")

    if (activeItemIndex < (imgsArray.length - 1)) {
   

    imgsArray[activeItemIndex].classList.remove("active");
    activeItemIndex++; 
    imgsArray[activeItemIndex].classList.add("active");
    

    if (activeItemIndex === imgsArray.length - 1) {
        nextBtn.classList.add("hidden");
    }
    
    }

})