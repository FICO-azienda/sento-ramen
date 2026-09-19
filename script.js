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
    'hero.cta': 'Prenota su WhatsApp',
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
    'menu.item1.title': 'Ramen Tonkatsu',
    'menu.item1.desc': 'Ramen in brodo con cotoletta di maiale fritto, uovo marinato, naruto, verdura, alga nori, funghi, mais e sesamo.',
    'menu.item2.title': 'Chashu Ramen',
    'menu.item2.desc': 'Ramen in brodo, fette di maiale brasato, uovo marinato, naruto, alga nori, funghi, verdura, sesamo e mais.',
    'menu.item3.title': 'Anatra Ramen',
    'menu.item3.desc': 'Brodo tantanmen, ramen con anatra arrosto, funghi, mais, naruto, sesamo, uovo marinato e alga nori.',
    'menu.item4.title': 'Riso Brasato di Maiale',
    'menu.item4.desc': 'Uno dei piatti più apprezzati del locale: riso con maiale brasato e verdura.',
    'menu.item5.title': 'Antipasti più popolari',
    'menu.item5.desc': 'Pollo con salsa piccante, insalata di alghe, pollo fritto e ravioli fritti: gli antipasti più ordinati dai nostri clienti.',
    'menu.item6.title': 'Mochi',
    'menu.item6.badge': 'Dolce',
    'menu.item6.desc': 'Il finale perfetto: morbidi mochi giapponesi in tanti gusti, dal matcha al cocco.',
    'menu.veg': 'Scelte vegetariane disponibili nel menù (🌱) >>>',
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
    'hours.address.directions': '📍 Indicazioni stradali',
    'hours.address.whatsapp': '💬 Prenota su WhatsApp',

    // Booking
    'booking.label': 'Prenotazioni',
    'booking.title': 'Prenota il tuo tavolo',
    'booking.text': 'Scrivici su WhatsApp e prenota in un attimo. Ti aspettiamo per la tua prossima ciotola di ramen.',
    'booking.whatsapp': 'Prenota su WhatsApp',
    'booking.phone.label': 'Telefono',
    'booking.whatsapp.label': 'WhatsApp',
    'booking.address.label': 'Indirizzo',

    // Delivery
    'delivery.kicker': '出前',
    'delivery.title': 'Ordina a Domicilio',
    'delivery.subtitle': 'Il nostro ramen anche a casa tua: ordina su Deliveroo o Glovo.',
    'delivery.order': 'Ordina ora →',

    // Footer
    'footer.brand.desc': 'Ristorante giapponese specializzato in ramen artigianale, nel cuore di Milano.',
    'footer.nav.title': 'Navigazione',
    'footer.contact.title': 'Contatti',
    'footer.social.title': 'Seguici',
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
    'hero.cta': 'Book on WhatsApp',
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
    'menu.item1.title': 'Tonkatsu Ramen',
    'menu.item1.desc': 'Ramen in broth with fried pork cutlet, marinated egg, naruto, vegetables, nori seaweed, mushrooms, corn and sesame.',
    'menu.item2.title': 'Chashu Ramen',
    'menu.item2.desc': 'Ramen in broth, braised pork slices, marinated egg, naruto, nori seaweed, mushrooms, vegetables, sesame and corn.',
    'menu.item3.title': 'Duck Ramen',
    'menu.item3.desc': 'Tantanmen broth, ramen with roast duck, mushrooms, corn, naruto, sesame, marinated egg and nori seaweed.',
    'menu.item4.title': 'Braised Pork Rice',
    'menu.item4.desc': 'One of the most loved dishes in the restaurant: rice with braised pork and vegetables.',
    'menu.item5.title': 'Most Popular Starters',
    'menu.item5.desc': 'Chicken with spicy sauce, seaweed salad, fried chicken and fried dumplings: the starters our guests order most.',
    'menu.item6.title': 'Mochi',
    'menu.item6.badge': 'Dessert',
    'menu.item6.desc': 'The perfect ending: soft Japanese mochi in many flavors, from matcha to coconut.',
    'menu.veg': 'Vegetarian options available on the menu (🌱) >>>',
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
    'hours.address.directions': '📍 Get Directions',
    'hours.address.whatsapp': '💬 Book on WhatsApp',

    // Booking
    'booking.label': 'Reservations',
    'booking.title': 'Book your table',
    'booking.text': 'Message us on WhatsApp and book in a moment. We\'re waiting for your next bowl of ramen.',
    'booking.whatsapp': 'Book on WhatsApp',
    'booking.phone.label': 'Phone',
    'booking.whatsapp.label': 'WhatsApp',
    'booking.address.label': 'Address',

    // Delivery
    'delivery.kicker': 'Delivery',
    'delivery.title': 'Order Delivery',
    'delivery.subtitle': 'Enjoy our ramen at home too: order on Deliveroo or Glovo.',
    'delivery.order': 'Order now →',

    // Footer
    'footer.brand.desc': 'Japanese restaurant specializing in handmade ramen, in the heart of Milan.',
    'footer.nav.title': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.social.title': 'Follow Us',
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
  initLanguageSwitcher();
  initParallax();
});
