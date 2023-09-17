// Get the elements
var popup = document.getElementById("myPopup");
var button = document.getElementById("myButton");

// Open the popup when the button is clicked
button.onclick = function () {
    popup.style.display = "block";
}

// Close the popup when the close button is clicked
document.getElementsByClassName("close")[0].onclick = function () {
    popup.style.display = "none";
}

// Close the popup when the user clicks outside of it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}