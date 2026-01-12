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

