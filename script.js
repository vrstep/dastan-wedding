// ========== TRANSLATIONS ==========
const translations = {
    kk: {
        heroSubtitle: 'Біз үйленеміз!',
        heroDate: '30 тамыз 2026',
        invitationTitle: 'Құрметті ағайын-туыс, құда-жекжат, дос-жаран!',
        invitationText1: 'Біз өз тағдырымызды біріктіріп, бірге жаңа өмір бастауға шешім қабылдағанымызды зор қуанышпен хабарлаймыз.',
        invitationText2: 'Сіздерді осы ерекше күннің қуанышын бізбен бөлісуге шақырамыз. Сіздердің қатысуыңыз мерекемізді одан да есте қаларлық және жылы етеді.',
        invitationHighlight: 'Біздің тойда сіздерді көруге қуаныштымыз!',
        signature: 'Сүйіспеншілікпен, Дастан және Аида',
        detailsTitle: 'Той туралы мәліметтер',
        dateTimeTitle: 'Күні мен уақыты',
        calendarMonth: 'Тамыз 2026',
        dayMon: 'Дс', dayTue: 'Сс', dayWed: 'Ср', dayThu: 'Бс', dayFri: 'Жм', daySat: 'Сн', daySun: 'Жс',
        startTime: 'Басталуы',
        venueTitle: 'Өткізілетін орын',
        venueAddress: 'Орал қ., Астана шағын ауданы, 12/1',
        mapLink: '2GIS-те ашу',
        rsvpTitle: 'Растау',
        rsvpSubtitle: 'Біздің мерекемізге қатыса алатыныңызды хабарлаңыз',
        labelName: 'Сіздің толық атыңыз',
        placeholderName: 'Аты-жөні',
        labelAttendance: 'Сіз қатыса аласыз ба?',
        optionYes: 'Иә, келемін',
        optionNo: 'Келе алмаймын',
        labelPhone: 'Телефон нөмірі',
        submitBtn: 'Жауапты жіберу',
        countdownTitle: 'Біздің тойға дейін қалды',
        labelDays: 'Күн',
        labelHours: 'Сағат',
        labelMinutes: 'Минут',
        labelSeconds: 'Секунд',
        finalMessage: 'Сіздерді асыға күтеміз!',
        footer: 'Сүйіспеншілікпен, Дастан & Аида • 2026',
        // Dynamic messages
        countdownOver: 'Бақытты күн келді!',
        submitting: 'Жіберілуде...',
        formErrorRequired: 'Барлық міндетті жолақтарды толтырыңыз.',
        formSuccessYes: 'Рахмет! Біз сізді тойымызда көруге асыға күтеміз! 🤍',
        formSuccessNo: 'Сіздің келе алмайтыныңызға өкінеміз. Жауабыңызға рахмет!',
        formError: 'Жіберу кезінде қате пайда болды. Қайтадан көріңіз.',
    },
    ru: {
        heroSubtitle: 'Мы женимся!',
        heroDate: '30 августа 2026',
        invitationTitle: 'Дорогие друзья и близкие!',
        invitationText1: 'С огромной радостью сообщаем вам, что мы решили объединить наши судьбы и начать новую главу нашей жизни вместе.',
        invitationText2: 'Приглашаем вас разделить с нами радость этого особенного дня. Ваше присутствие сделает наш праздник ещё более незабываемым и тёплым.',
        invitationHighlight: 'Будем счастливы видеть вас на нашей свадьбе!',
        signature: 'С любовью, Дастан и Аида',
        detailsTitle: 'Детали свадьбы',
        dateTimeTitle: 'Дата и время',
        calendarMonth: 'Август 2026',
        dayMon: 'Пн', dayTue: 'Вт', dayWed: 'Ср', dayThu: 'Чт', dayFri: 'Пт', daySat: 'Сб', daySun: 'Вс',
        startTime: 'Начало в',
        venueTitle: 'Место проведения',
        venueAddress: 'г. Уральск, Микрорайон Астана, 12/1',
        mapLink: 'Открыть в 2GIS',
        rsvpTitle: 'Подтверждение',
        rsvpSubtitle: 'Пожалуйста, дайте нам знать, сможете ли вы присоединиться к нашему празднику',
        labelName: 'Ваше полное имя',
        placeholderName: 'Имя Фамилия',
        labelAttendance: 'Вы сможете присутствовать?',
        optionYes: 'Да, приду',
        optionNo: 'Не смогу',
        labelPhone: 'Номер телефона',
        submitBtn: 'Отправить ответ',
        countdownTitle: 'До нашей свадьбы осталось',
        labelDays: 'Дней',
        labelHours: 'Часов',
        labelMinutes: 'Минут',
        labelSeconds: 'Секунд',
        finalMessage: 'Ждём вас с нетерпением!',
        footer: 'С любовью, Дастан & Аида • 2026',
        // Dynamic messages
        countdownOver: 'Счастливый день настал!',
        submitting: 'Отправка...',
        formErrorRequired: 'Пожалуйста, заполните все обязательные поля.',
        formSuccessYes: 'Спасибо! Мы очень ждем вас на нашей свадьбе! 🤍',
        formSuccessNo: 'Нам жаль, что вы не сможете прийти. Спасибо за ответ!',
        formError: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.',
    }
};

let currentLang = 'kk'; // default

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru';

    // Save preference
    localStorage.setItem('weddingLang', lang);
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ========== MAIN ==========
document.addEventListener('DOMContentLoaded', () => {
    // --- Language Selector ---
    const langOverlay = document.getElementById('langOverlay');
    const btnKz = document.getElementById('btnLangKz');
    const btnRu = document.getElementById('btnLangRu');

    const savedLang = localStorage.getItem('weddingLang');

    if (savedLang) {
        // User already chose — skip overlay, apply immediately
        applyLanguage(savedLang);
        langOverlay.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(() => langOverlay.remove(), 900);
    } else {
        document.body.classList.add('lang-selecting');
    }

    function selectLanguage(lang) {
        applyLanguage(lang);
        document.body.classList.remove('lang-selecting');
        langOverlay.classList.add('hidden');
        setTimeout(() => langOverlay.remove(), 900);
    }

    btnKz.addEventListener('click', () => selectLanguage('kk'));
    btnRu.addEventListener('click', () => selectLanguage('ru'));

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
    const targetDate = new Date('2026-08-30T19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdownTimer').innerHTML = "<h2 style='font-family: var(--font-heading); color: var(--primary-color);'>" + t('countdownOver') + "</h2>";
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

    // --- Автоформатирование номера телефона ---
    const phoneInput = document.getElementById('guestPhone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            // Очищаем ввод от всего, кроме цифр
            let inputNumbersValue = phoneInput.value.replace(/\D/g, '');

            // Ограничиваем длину до 10 цифр (стандарт для номеров после +7)
            inputNumbersValue = inputNumbersValue.substring(0, 10);

            let formattedInputValue = '';

            // Если поле пустое, ничего не делаем
            if (!inputNumbersValue) {
                phoneInput.value = '';
                return;
            }

            // Формируем маску (XXX) XXX-XX-XX
            if (inputNumbersValue.length > 0) {
                formattedInputValue = '(' + inputNumbersValue.substring(0, 3);
            }
            if (inputNumbersValue.length >= 4) {
                formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
            }
            if (inputNumbersValue.length >= 7) {
                formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
            }
            if (inputNumbersValue.length >= 9) {
                formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
            }

            // Обновляем значение в поле
            phoneInput.value = formattedInputValue;
        });
    }

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
                formStatus.innerText = t('formErrorRequired');
                return;
            }

            const formData = new FormData(rsvpForm);

            // Добавляем +7 к введенному номеру перед отправкой в таблицу
            const currentPhone = formData.get('phone');
            formData.set('phone', '+7 ' + currentPhone);

            const data = Object.fromEntries(formData.entries());

            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.innerText;
            btnText.innerText = t('submitting');
            submitBtn.disabled = true;

            const scriptURL = 'https://script.google.com/macros/s/AKfycbz11nqm1l_rblrI6ddbjuQMNPntsNfXXAeQC_KiNG8ENTtMM3fcoz6G2rEu1-JtXZE/exec';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    let statusMessage = data.attendance === 'no'
                        ? t('formSuccessNo')
                        : t('formSuccessYes');

                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--success-color)';
                    formStatus.innerText = statusMessage;

                    rsvpForm.reset();
                    btnText.innerText = t('submitBtn');
                    submitBtn.disabled = false;

                    setTimeout(() => { formStatus.style.display = 'none'; }, 5000);
                })
                .catch(error => {
                    formStatus.style.display = 'block';
                    formStatus.style.color = 'var(--error-color)';
                    formStatus.innerText = t('formError');

                    btnText.innerText = t('submitBtn');
                    submitBtn.disabled = false;
                });
        });
    }
});