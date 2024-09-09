    // navbar 
const menuicon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuicon.addEventListener("click", () =>  {
    menuList.classList.toggle("hidden");
})


    // card effect & list effect
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.product-card, .list, .img-vespa, .contact-info');

    function checkElementsInView() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkElementsInView);
    checkElementsInView();
});



