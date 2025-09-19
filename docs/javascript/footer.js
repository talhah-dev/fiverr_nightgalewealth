const footer = document.getElementById('footer')
footer.innerHTML = `
 <footer
    class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-10 p-5 mt-10 mx-auto max-w-7xl">
    <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
        <h2 class="md:text-4xl text-3xl text-zinc-800 font-semibold">Adoura.ai</h2>
        <p class="md:mt-5 mt-3 text-zinc-600">
            Talk smarter in seconds — persuasive comebacks, smooth openers, and thoughtful date & gift ideas.
            <strong>Trained with real conversations</strong> and priced to be the <strong>cheapest on the market</strong>.
        </p>
        <div class="mt-7">
            <a href="#pricing"
                class="w-full md:w-auto tracking-wider py-2 px-7 bg-[#335cff] text-center text-white rounded-sm border border-[#335cff] hover:opacity-70 transition-all duration-500">
                Get Started Free
            </a>
        </div>
    </div>

    <div data-aos="fade-up" data-aos-delay="100" class="second">
        <h2 class="text-2xl text-zinc-800 font-semibold">Quick Links</h2>
        <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
            <li><a href="/index.html#home">Home</a></li>
            <li><a href="/index.html#features">Features</a></li>
            <li><a href="/index.html#pricing">Pricing</a></li>
            <li><a href="/index.html#faq">FAQ</a></li>
        </ul>
    </div>

    <div data-aos="fade-up" data-aos-delay="200" class="second">
        <h2 class="text-2xl text-zinc-800 font-semibold">Product</h2>
        <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
            <li><a href="/index.html#features">Argument Response Generator</a></li>
            <li><a href="/index.html#features">Pick-Up Line Generator</a></li>
            <li><a href="/index.html#features">Rizz Assist</a></li>
            <li><a href="/index.html#features">AI Date & Gift Concierge</a></li>
        </ul>
    </div>

    <div data-aos="fade-up" data-aos-delay="300" class="second">
        <h2 class="text-2xl text-zinc-800 font-semibold">Social</h2>
        <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
            <li class="flex items-center gap-3">
                <i class="fa-brands fa-instagram text-xl"></i>
                <a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
            </li>
            <li class="flex items-center gap-3">
                <i class="fa-brands fa-tiktok text-xl"></i>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener">TikTok</a>
            </li>
            <li class="flex items-center gap-3">
                <i class="fa-brands fa-x-twitter text-xl"></i>
                <a href="https://twitter.com" target="_blank" rel="noopener">X (Twitter)</a>
            </li>
        </ul>
    </div>
</footer>

<p class="text-center p-4 text-zinc-600 mt-5">
    Copyright © <span id="copyright"></span> Adoura.ai. All rights reserved.
</p>
`

const year = new Date().getFullYear()
document.getElementById('copyright').innerHTML = year
