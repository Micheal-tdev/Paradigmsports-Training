let cartCount = 0

const cartCountSpan = document.getElementById("cartCount")
const addButtons = document.querySelectorAll(".add-to-cart")
const toast = document.getElementById("toast")

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++
    cartCountSpan.textContent = cartCount

    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, 1500)
  })
})



const readMore = document.getElementById("readMore");
const fullCard = document.getElementById("fullCard");
const closeCard = document.getElementById("closeCard");

readMore.addEventListener("click", () => {
  fullCard.classList.add("show");
});

closeCard.addEventListener("click", () => {
  fullCard.classList.remove("show");
});

