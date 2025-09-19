const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
  class="bottomToTop fadeIn w-12 h-12 fixed bottom-5 right-5 z-40 hidden
         cursor-pointer rounded-full flex items-center justify-center
         bg-[#D4AF37] text-zinc-900 hover:bg-[#C9A227]
         shadow-md ring-1 ring-[#D4AF37]/40 transition-all duration-500">
  <i class="fa-solid fa-angle-up"></i>
</div>

`

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

AOS.init({
    once: true,
    duration: 1000
});

// loader

let loaderStartTime = 0;

function showLoader() {
    const loader = document.getElementById('global-loader');
    loader.classList.remove('hidden');
    requestAnimationFrame(() => loader.classList.add('opacity-100'));
    loaderStartTime = Date.now();
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    const elapsed = Date.now() - loaderStartTime;
    const remainingTime = 500 - elapsed; // ensure at least 0.5s

    setTimeout(() => {
        loader.classList.remove('opacity-100');
        setTimeout(() => loader.classList.add('hidden'), 300); // wait for fade-out
    }, Math.max(0, remainingTime));
}

// Example usage:
showLoader();
// simulate some async task (like fetch or form submission)
setTimeout(() => {
    hideLoader();
}, 200); // even if task is fast, loader will stay at least 0.5s

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180')
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180')
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});