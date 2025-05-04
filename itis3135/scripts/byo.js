function loadImage() {
    var image = document.getElementById('image').files[0];

    const imageURL = URL.createdObjectURL(image);

    var text = "<img src =\"" + imageURL + "\" >"; 
}