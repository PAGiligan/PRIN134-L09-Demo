document.addEventListener("DOMContentLoaded", function() {
 
    document.getElementById("highlight-ingredients").addEventListener("click", function() {
      const ingredients = document.querySelectorAll("#recipe-ingredients li");
      ingredients.forEach((item, index) => {
        if (index % 2 === 0) {
          item.classList.toggle("highlight");
        }
      });
    });
})

document.getElementById("check-instructions").addEventListener("click", function() {
    setTimeout(() => {
      const instructions = document.querySelectorAll("#recipe-instructions li");
      instructions.forEach(item => {
        item.classList.add("is-done");
      });
    }, 3000);
});

document.getElementById("reset-instructions").addEventListener("click", function() {
      const instructions = document.querySelectorAll("#recipe-instructions li");
      instructions.forEach(item => {
        item.classList.remove("is-done");
      });

    });

document.querySelector("h2.headers:nth-of-type(1)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
});
document.querySelector("h2.headers:nth-of-type(2)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__heartBeat");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__heartBeat");
    }, 1000);
});

document.querySelector("img").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__tada");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__tada");
    }, 1000);
});
