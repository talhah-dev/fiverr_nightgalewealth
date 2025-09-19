const lenis = new Lenis({
    autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-12 cursor-pointer z-40 bg-[#335cff] h-12 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-100 flex items-center justify-center rounded-full "><i class="fa-solid fa-angle-up"></i>
</div>`

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

(function () {
    const tabs = document.querySelectorAll('#how-it-works .step-item');
    const img = document.getElementById('stepScreenshot');
    const cap = document.getElementById('stepCaption');

    // Preload
    tabs.forEach(btn => { const i = new Image(); i.src = btn.dataset.screenshot; });

    function setActive(tab) {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');

        img.style.opacity = 0;
        const nextSrc = tab.dataset.screenshot;
        const nextCap = tab.dataset.caption || '';
        setTimeout(() => {
            img.src = nextSrc;
            cap.textContent = nextCap;
            img.onload = () => (img.style.opacity = 1);
        }, 150);
    }

    // 🔹 Initialize from the tab marked aria-selected="true" (or first tab)
    const initial = document.querySelector('#how-it-works .step-item[aria-selected="true"]') || tabs[0];
    if (initial) setActive(initial);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => setActive(tab));
        tab.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(tab); }
        });
    });
})();

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