const bar = document.getElementById("bar");
const nav = document.getElementById("navebar");
const cancle = document.getElementById("cancle");

document
  .querySelector(".pro-container")
  .addEventListener("click", function (event) {
    let product = event.target.closest(".pro"); // Nearest product div ko pakadna
    if (!product) return; // Agar kisi aur jagah click ho to kuch na ho

    let imgSrc = product.querySelector(".pro-img img").src; // Image src lena
    let name = product.querySelector("h5").innerText; // Product name lena
    let price = product.querySelector("h4").innerText; // Price lena

    localStorage.setItem("productImage", imgSrc);
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);

    window.location.href = "sproduct.html"; // Redirect to single product page
  });

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
  if (cancle) {
    cancle.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}
