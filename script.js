/* ============================================================
   SENTO RAMEN — JavaScript
   ============================================================ */

/* ---------- Translations ---------- */
const translations = {
  it: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'La Storia',
    'nav.menu': 'Menu',
    'nav.reviews': 'Recensioni',
    'nav.hours': 'Dove Siamo',
    'nav.booking': 'Prenota',

    // Hero
    'hero.badge': '✦ Dal cuore di Tokyo a Milano ✦',
    'hero.title': 'SENTO RAMEN',
    'hero.sticker1': '熱々!',
    'hero.sticker2': 'ずるずる〜',
    'hero.description': 'Brodo che sobbolle da ore, noodles al dente, chashu che si scioglie in bocca. Un pezzo di Giappone in Via Cenisio, per chi il ramen lo vive come una scena di manga.',
    'hero.cta': 'Prenota un Tavolo',
    'hero.cta2': 'Scopri il Menu',
    'hero.scroll': 'Scorri',
    'hero.google': 'Google · 998 recensioni',
    'hero.tripadvisor': 'Tripadvisor · 31 recensioni',

    // About
    'about.tag': '店',
    'about.label': 'La Nostra Storia',
    'about.title': 'Un angolo di Giappone, disegnato come un manga',
    'about.text1': 'Da Sento Ramen il rito del ramen è un piccolo racconto illustrato: lanterne rosse accese, l\'onda di Hokusai sul muro, il vapore che sale da ogni ciotola come in una tavola di manga. Ogni brodo — miso, soia o tantanmen — nasce da ore di cottura lenta, per un piatto che scalda e racconta una storia.',
    'about.text2': '"Location artefatta che richiama una tipica locanda giapponese... uno dei ramen più buoni di Milano." — Recensione Tripadvisor',
    'about.feature1': 'Brodo Fatto in Casa',
    'about.feature2': 'Chashu Cotto Lentamente',
    'about.feature3': 'Atmosfera da Tokyo',
    'about.feature4': 'Ricette Autentiche',

    // Menu
    'menu.kicker': '拉麺',
    'menu.title': 'Il Nostro Ramen',
    'menu.subtitle': 'Scorri piano: ogni ciotola si svela una alla volta, come le tavole di un manga. Ecco alcuni dei piatti che trovi davvero nel nostro menu.',
    'menu.item1.title': 'Chashu Ramen',
    'menu.item1.desc': 'Brodo miso, fette di maiale brasato, uovo marinato, naruto, alga nori, cipollotto e sesamo.',
    'menu.item2.title': 'Gyu Ramen',
    'menu.item2.desc': 'Ramen con manzo giapponese bollito, verdure, alga nori, funghi, uovo, mais e cipollotto.',
    'menu.item3.title': 'Yasai Ramen',
    'menu.item3.desc': 'La versione vegetariana: solo verdure di stagione, funghi, uovo, mais, naruto e alga nori.',
    'menu.item4.title': 'Calamari Fritti',
    'menu.item4.desc': 'Uno dei piatti più richiesti del locale: calamari impanati e fritti, croccanti fuori e teneri dentro.',
    'menu.item5.title': 'Pollo Fritto',
    'menu.item5.desc': 'Bocconcini di pollo impanati e fritti, serviti con salsa agrodolce della casa.',
    'menu.item6.title': 'Mochi',
    'menu.item6.badge': 'Dolce',
    'menu.item6.desc': 'Il finale perfetto: morbidi mochi giapponesi al tè matcha e al cocco.',
    'menu.note': '✦ Scegli il tuo brodo: MISO (originale), SOIA (speziato salato) o TANTANMEN (speziato piccante) — qui sotto il menu completo esposto in locale ✦',

    // Gallery
    'gallery.kicker': '店内',
    'gallery.title': 'L\'Atmosfera',
    'gallery.subtitle': 'Lanterne rosse, l\'onda di Hokusai, legno scuro: un piccolo pezzo di Giappone a due passi da Via Cenisio.',
    'gallery.cap1': 'La Sala Principale',
    'gallery.cap2': 'Lanterne e Atmosfera',
    'gallery.cap3': 'In Via Cenisio 13',

    // Reviews
    'reviews.kicker': '評判',
    'reviews.title': 'Cosa Dicono di Noi',
    'reviews.ta.count': '31 recensioni',
    'reviews.google.count': '998 recensioni',
    'reviews.r1.text': '"Location artefatta che richiama una tipica locanda giapponese. Uno dei ramen più buoni di Milano. Personale gentilissimo."',
    'reviews.r1.source': 'Tripadvisor · Recensione "Eccezionale"',
    'reviews.r2.text': '"Menù non vastissimo, ma piatti ben preparati: il ramen, in diverse varianti, buono. Ottimo il servizio, prezzo giusto."',
    'reviews.r2.source': 'Tripadvisor',
    'reviews.r3.text': '"Ho cenato da Sento Ramen e l\'esperienza è stata fantastica. Il vero punto di forza è la personalizzazione del brodo, ricco e saporito."',
    'reviews.r3.source': 'Google · Local Guide',

    // Hours
    'hours.kicker': '場所',
    'hours.title': 'Orari & Dove Siamo',
    'hours.subtitle': 'Ci trovi in Via Cenisio 13, a Milano.',
    'hours.info.title': '🕐 Orari di Apertura',
    'hours.mon': 'Lunedì', 'hours.tue': 'Martedì', 'hours.wed': 'Mercoledì', 'hours.thu': 'Giovedì',
    'hours.fri': 'Venerdì', 'hours.sat': 'Sabato', 'hours.sun': 'Domenica',
    'hours.closed': 'Chiuso',
    'hours.time': '12:00–15:00 / 19:00–23:00',
    'hours.address.title': '📍 Indirizzo',
    'hours.address.text': 'Via Cenisio 13, 20154 Milano (MI)',
    'hours.address.directions': 'Indicazioni stradali →',

    // Booking
    'booking.label': 'Prenotazioni',
    'booking.title': 'Prenota il tuo tavolo',
    'booking.text': 'Compila il modulo per una richiesta diretta, oppure prenota in un clic tramite TheFork. Ti aspettiamo per la tua prossima ciotola di ramen.',
    'booking.thefork': 'Prenota su TheFork',
    'booking.phone.label': 'Telefono',
    'booking.address.label': 'Indirizzo',
    'booking.form.title': 'Richiedi Prenotazione',
    'booking.form.name': 'Nome e Cognome',
    'booking.form.name.placeholder': 'Il tuo nome',
    'booking.form.phone': 'Telefono',
    'booking.form.phone.placeholder': 'Il tuo numero',
    'booking.form.date': 'Data',
    'booking.form.time': 'Ora',
    'booking.form.guests': 'Numero Ospiti',
    'booking.form.guests.placeholder': 'Quante persone?',
    'booking.form.notes': 'Note (opzionale)',
    'booking.form.notes.placeholder': 'Richieste speciali, allergie, etc.',
    'booking.form.submit': 'Invia Richiesta di Prenotazione',
    'booking.form.success.title': 'Richiesta Inviata!',
    'booking.form.success.text': 'Ti ricontatteremo al più presto per confermare. In alternativa, chiamaci al 02 4977 0189.',

    // Footer
    'footer.brand.desc': 'Ristorante giapponese specializzato in ramen artigianale, nel cuore di Milano.',
    'footer.nav.title': 'Navigazione',
    'footer.contact.title': 'Contatti',
    'footer.copyright': '© 2026 Sento Ramen. Tutti i diritti riservati.',
    'footer.madewith': 'Fatto con <span>♥</span> a Milano',
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'Our Story',
    'nav.menu': 'Menu',
    'nav.reviews': 'Reviews',
    'nav.hours': 'Find Us',
    'nav.booking': 'Book',

    // Hero
    'hero.badge': '✦ From the Heart of Tokyo to Milan ✦',
    'hero.title': 'SENTO RAMEN',
    'hero.sticker1': 'Piping Hot!',
    'hero.sticker2': 'Slurp~',
    'hero.description': 'Broth simmered for hours, noodles cooked just right, chashu that melts in your mouth. A slice of Japan on Via Cenisio, for anyone who lives ramen like a scene from a manga.',
    'hero.cta': 'Book a Table',
    'hero.cta2': 'Discover the Menu',
    'hero.scroll': 'Scroll',
    'hero.google': 'Google · 998 reviews',
    'hero.tripadvisor': 'Tripadvisor · 31 reviews',

    // About
    'about.tag': 'Shop',
    'about.label': 'Our Story',
    'about.title': 'A corner of Japan, drawn like a manga',
    'about.text1': 'At Sento Ramen, the ramen ritual is a small illustrated story: red lanterns glowing, Hokusai\'s wave on the wall, steam rising from every bowl like in a manga panel. Every broth — miso, soy or tantanmen — is born from hours of slow cooking, for a dish that warms you and tells a story.',
    'about.text2': '"A setting that truly recalls a typical Japanese inn... one of the best ramens in Milan." — Tripadvisor review',
    'about.feature1': 'Homemade Broth',
    'about.feature2': 'Slow-Cooked Chashu',
    'about.feature3': 'Tokyo Atmosphere',
    'about.feature4': 'Authentic Recipes',

    // Menu
    'menu.kicker': 'Ramen',
    'menu.title': 'Our Ramen',
    'menu.subtitle': 'Scroll slowly: every bowl reveals itself one at a time, like the panels of a manga. Here are some of the dishes you\'ll really find on our menu.',
    'menu.item1.title': 'Chashu Ramen',
    'menu.item1.desc': 'Miso broth, braised pork slices, marinated egg, naruto, nori seaweed, spring onion and sesame.',
    'menu.item2.title': 'Gyu Ramen',
    'menu.item2.desc': 'Ramen with boiled Japanese beef, vegetables, nori seaweed, mushrooms, egg, corn and spring onion.',
    'menu.item3.title': 'Yasai Ramen',
    'menu.item3.desc': 'The vegetarian version: seasonal vegetables only, mushrooms, egg, corn, naruto and nori seaweed.',
    'menu.item4.title': 'Fried Calamari',
    'menu.item4.desc': 'One of the most popular dishes on the menu: breaded fried squid, crispy outside and tender inside.',
    'menu.item5.title': 'Fried Chicken',
    'menu.item5.desc': 'Breaded fried chicken bites, served with our house sweet and sour sauce.',
    'menu.item6.title': 'Mochi',
    'menu.item6.badge': 'Dessert',
    'menu.item6.desc': 'The perfect ending: soft Japanese mochi in matcha and coconut.',
    'menu.note': '✦ Choose your broth: MISO (original), SOY (spiced & salty) or TANTANMEN (medium spicy) — full in-store menu below ✦',

    // Gallery
    'gallery.kicker': 'Interior',
    'gallery.title': 'The Atmosphere',
    'gallery.subtitle': 'Red lanterns, Hokusai\'s wave, dark wood: a small piece of Japan just steps from Via Cenisio.',
    'gallery.cap1': 'The Main Dining Room',
    'gallery.cap2': 'Lanterns and Atmosphere',
    'gallery.cap3': 'On Via Cenisio 13',

    // Reviews
    'reviews.kicker': 'Reviews',
    'reviews.title': 'What People Say',
    'reviews.ta.count': '31 reviews',
    'reviews.google.count': '998 reviews',
    'reviews.r1.text': '"A setting that truly recalls a typical Japanese inn. One of the best ramens in Milan. Extremely kind staff."',
    'reviews.r1.source': 'Tripadvisor · "Excellent" review',
    'reviews.r2.text': '"The menu isn\'t huge, but the dishes are well prepared: the ramen, in its various versions, is good. Great service, fair price."',
    'reviews.r2.source': 'Tripadvisor',
    'reviews.r3.text': '"I had dinner at Sento Ramen and it was fantastic. The real strength is the broth customization — rich and flavorful."',
    'reviews.r3.source': 'Google · Local Guide',

    // Hours
    'hours.kicker': 'Location',
    'hours.title': 'Hours & Location',
    'hours.subtitle': 'Find us at Via Cenisio 13, Milan.',
    'hours.info.title': '🕐 Opening Hours',
    'hours.mon': 'Monday', 'hours.tue': 'Tuesday', 'hours.wed': 'Wednesday', 'hours.thu': 'Thursday',
    'hours.fri': 'Friday', 'hours.sat': 'Saturday', 'hours.sun': 'Sunday',
    'hours.closed': 'Closed',
    'hours.time': '12:00–3:00 PM / 7:00–11:00 PM',
    'hours.address.title': '📍 Address',
    'hours.address.text': 'Via Cenisio 13, 20154 Milan (MI), Italy',
    'hours.address.directions': 'Get Directions →',

    // Booking
    'booking.label': 'Reservations',
    'booking.title': 'Book your table',
    'booking.text': 'Fill out the form for a direct request, or book in one click via TheFork. We\'re waiting for your next bowl of ramen.',
    'booking.thefork': 'Book on TheFork',
    'booking.phone.label': 'Phone',
    'booking.address.label': 'Address',
    'booking.form.title': 'Request a Reservation',
    'booking.form.name': 'Full Name',
    'booking.form.name.placeholder': 'Your name',
    'booking.form.phone': 'Phone',
    'booking.form.phone.placeholder': 'Your number',
    'booking.form.date': 'Date',
    'booking.form.time': 'Time',
    'booking.form.guests': 'Number of Guests',
    'booking.form.guests.placeholder': 'How many people?',
    'booking.form.notes': 'Notes (optional)',
    'booking.form.notes.placeholder': 'Special requests, allergies, etc.',
    'booking.form.submit': 'Send Reservation Request',
    'booking.form.success.title': 'Request Sent!',
    'booking.form.success.text': 'We\'ll contact you shortly to confirm. You can also call us at +39 02 4977 0189.',

    // Footer
    'footer.brand.desc': 'Japanese restaurant specializing in handmade ramen, in the heart of Milan.',
    'footer.nav.title': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2026 Sento Ramen. All rights reserved.',
    'footer.madewith': 'Made with <span>♥</span> in Milan',
  }
};


/* ---------- State ---------- */
let currentLang = localStorage.getItem('sento-lang') || 'it';


/* ---------- i18n Functions ---------- */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sento-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang]?.[key];
    if (translation !== undefined) {
      if (translation.includes('<') && translation.includes('>')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[lang]?.[key];
    if (translation !== undefined) {
      el.placeholder = translation;
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;
}


/* ---------- Navbar Scroll Behavior ---------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}


/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}


/* ---------- Scroll Reveal Animations ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger, .dish-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}


/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 76;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}


/* ---------- Booking Form ---------- */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formCard = document.querySelector('.booking__form-card');
    const successMsg = document.querySelector('.form-success');

    if (formCard && successMsg) {
      form.style.display = 'none';
      successMsg.classList.add('visible');
    }

    setTimeout(() => {
      window.location.href = 'tel:+390249770189';
    }, 2200);
  });

  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }
}


/* ---------- Language Button Handlers ---------- */
function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
}


/* ---------- Parallax Effect (subtle) ---------- */
function initParallax() {
  const hero = document.querySelector('.hero__bg img');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.25}px) scale(1.1)`;
    }
  }, { passive: true });
}


/* ---------- Initialize Everything ---------- */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initBookingForm();
  initLanguageSwitcher();
  initParallax();
});
