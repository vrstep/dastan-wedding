document.addEventListener('DOMContentLoaded', () => {
    // 1. Soft Glowy Orbs Background
    const heartsContainer = document.getElementById('floatingHearts');

    function createOrb() {
        const orb = document.createElement('div');
        orb.classList.add('heart-bg');

        // Randomizing the soft glowing orbs
        const size = Math.random() * 150 + 50;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = Math.random() * 100 + 'vw';
        orb.style.animationDuration = (Math.random() * 15 + 15) + 's';
        orb.style.animationDelay = Math.random() * 5 + 's';

        heartsContainer.appendChild(orb);

        // Remove after animation completes
        setTimeout(() => {
            orb.remove();
        }, 30000);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(createOrb, Math.random() * 3000);
    }
    setInterval(createOrb, 4000);

    // 2. Intersection Observer for Smooth Cinematic Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Navigation Dots Logic
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    });

    // 4. Countdown Timer
    const targetDate = new Date('2026-06-28T17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdownTimer').innerHTML = "<h2 style='font-family: var(--font-heading); color: var(--primary-color);'>Счастливый день настал!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countDays').innerText = days.toString().padStart(2, '0');
        document.getElementById('countHours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('countMinutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('countSeconds').innerText = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // 5. RSVP Form Submission (Kept your Google Sheets logic intact)
    const rsvpForm = document.getElementById('rsvpForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!rsvpForm.checkValidity()) {
                formStatus.style.display = 'block';
                formStatus.style.color = 'var(--error-color)';
                formStatus.innerText = 'Пожалуйста, заполните все обязательные поля.';
                return;
            }

            const formData = new FormData(rsvpForm);
            const data = Object.fromEntries(formData.entries());

            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            btnText.innerText = 'Отправка...';
            submitBtn.disabled = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbwV3zCg4S8SA3pcgUttomdlzQvmtyeRxYEyu2hc8TPyWwjr0CkeQzDQPOl1-Uy0Rw/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    let statusMessage = data.attendance === 'no'
                        ? 'Нам жаль, что вы не сможете прийти. Спасибо за ответ!'
                        : 'Спасибо! Мы очень ждем вас на нашей свадьбе! 🤍';

                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--success-color)';
                    formStatus.innerText = statusMessage;

                    rsvpForm.reset();
                    btnText.innerText = originalText;
                    submitBtn.disabled = false;

                    setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
                })
                .catch(error => {
                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--error-color)';
                    formStatus.innerText = 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.';

                    btnText.innerText = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});