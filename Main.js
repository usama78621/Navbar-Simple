const navToggle = document.querySelector('.nav-toggle');
const Links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // Links.classList.toggle('show-links');
    if (Links.classList.contains("show-links")) {
          Links.classList.remove("show-links");
        } else {
          Links.classList.add("show-links");
        }
})