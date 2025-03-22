function showMessage() {
    alert("Welcome to Our Store!");
}

function buyProduct(productName) {
    alert("Confirm Purchase " + productName + "?");
}
function submitForm(event) {
    event.preventDefault();
    alert("Thank you for your message!");
}
