document.addEventListener('DOMContentLoaded', () => {
    // 1. Floating Hearts Background
    const heartsContainer = document.getElementById('floatingHearts');
    const heartSymbols = ['♥', '♡', '✨'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random position, size, and animation duration
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';

        heartsContainer.appendChild(heart);

        // Remove after animation completes to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }

    // Create initial hearts and then periodically
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, Math.random() * 3000);
    }
    setInterval(createHeart, 2000);

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Navigation Dots Highlight on Scroll
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

    // 4. Countdown Timer (Target: 28 June 2026 17:00:00)
    const targetDate = new Date('2026-06-28T17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdownTimer').innerHTML = "<h2>Счастливый день настал!</h2>";
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

    // 5. RSVP Form Submission
    const rsvpForm = document.getElementById('rsvpForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic Validation
            if (!rsvpForm.checkValidity()) {
                formStatus.className = 'form-status error';
                formStatus.innerText = 'Пожалуйста, заполните все обязательные поля.';
                return;
            }

            const formData = new FormData(rsvpForm);
            const data = Object.fromEntries(formData.entries());

            // UI Feedback during submission
            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            btnText.innerText = 'Отправка...';
            submitBtn.disabled = true;

            // REAL SUBMISSION TO GOOGLE SHEETS
            // Replace this URL with your actual Google Apps Script Web App URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwW2gdsDFELkVciS20luLdxpfWR3DvzA4clerRTNhS_9jL-tk7mlVdbAzM99ttq7tQ/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    let statusMessage = '';
                    if (data.attendance === 'no') {
                        statusMessage = 'Нам жаль, что вы не сможете прийти. Спасибо за ответ!';
                    } else {
                        statusMessage = 'Спасибо! Мы очень ждем вас на нашей свадьбе! 🎉';
                    }

                    formStatus.style.display = 'block';
                    formStatus.className = 'form-status success';
                    formStatus.innerText = statusMessage;

                    // Reset form and button
                    rsvpForm.reset();
                    btnText.innerText = originalText;
                    submitBtn.disabled = false;

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                        formStatus.className = 'form-status';
                    }, 5000);
                })
                .catch(error => {
                    formStatus.style.display = 'block';
                    formStatus.className = 'form-status error';
                    formStatus.innerText = 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.';

                    btnText.innerText = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
});
