$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slick-custom-prev'),
        nextArrow: $('.slick-custom-next'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".close-banner").click(function(){
        $(".top-banner").slideUp(); // Smoothly hides the banner
    });

    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });





});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            let tabId = this.getAttribute("data-tab");

            // Remove active state from all tabs
            tabs.forEach(t => t.classList.remove("border-black", "font-semibold", "text-black"));
            // Hide all tab contents
            contents.forEach(c => c.classList.add("hidden"));

            // Add active state to the clicked tab
            this.classList.add("border-black", "font-semibold", "text-black");
            // Show corresponding tab content
            document.getElementById(tabId).classList.remove("hidden");


            tabs.forEach(t => t.classList.remove("border-black", "font-semibold", "text-black"));
            tabs.forEach(t => t.classList.add("border-transparent"));

            // Add active styles to clicked button
            this.classList.add("border-black", "font-semibold", "text-black");
            this.classList.remove("border-transparent");

        });
    });
});