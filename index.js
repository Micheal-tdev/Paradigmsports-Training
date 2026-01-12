// let cartCount = 0 

// const cartCountSpan = document.getElementById("cartCount")
// const addButtons = document.querySelectorAll(".add-to-cart")


// addButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     cartCount++
//     cartCountSpan.textContent = cartCount
//   })
// })

// const navbar = document.getElementById("navbar")

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky")
//   }
// })


// let cartCount = 0

// const cartCountSpan = document.getElementById("cartCount")
// const addButtons = document.querySelectorAll(".add-to-cart")
// const toast = document.getElementById("toast")

// addButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     cartCount++
//     cartCountSpan.textContent = cartCount

//     toast.classList.add("show")

//     setTimeout(() => {
//       toast.classList.remove("show")
//     }, 1500)
//   })
// })

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

