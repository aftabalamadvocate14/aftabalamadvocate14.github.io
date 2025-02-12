// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

// Disclaimer Starts

window.onload = function() {
    // Display the disclaimer when the page loads
    document.getElementById('disclaimerPopup').style.display = 'flex';

    // Handle Accept button click
    document.getElementById('acceptBtn').onclick = function() {
        document.getElementById('disclaimerPopup').style.display = 'none';
    };

    // Handle Decline button click
    document.getElementById('declineBtn').onclick = function() {
        window.location.href = '';  // Redirect or close the site   
    };
};

//Disclaimer ends


function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})



// JS OF DATA NUMBERS 

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".career-item");
    const counters = document.querySelectorAll(".career-desc h2");

    const options = {
        root: null,
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Apply scroll animation
                animateNumber(entry.target.querySelector("h2"));
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    items.forEach(item => observer.observe(item));

    function animateNumber(element) {
        const targetValue = Number(element.getAttribute("data-target"));
        if (isNaN(targetValue)) return;

        let currentValue = 0;
        const increment = targetValue / 300; // Smooth increase
        const duration = 4000; // Animation time in ms
        const interval = 10; // Update every 10ms
        const steps = duration / interval;

        const updateCounter = () => {
            currentValue += targetValue / steps;
            if (currentValue >= targetValue) {
                element.innerText = Math.floor(targetValue) + "+"; // Add "+" at the end
            } else {
                element.innerText = Math.floor(currentValue) + "+"; // Keep "+" during animation
                setTimeout(updateCounter, interval);
            }
        };
        
        updateCounter();
    }
});
