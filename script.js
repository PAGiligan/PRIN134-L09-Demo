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