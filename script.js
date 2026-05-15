var cart = document.getElementsByClassName("cart");

for (let i = 0; i < cart.length; i++) {

    cart[i].addEventListener("click", function () {

        alert("Your Product Has Been Added To Cart");

    });

}