/* ==========================================================================
   I18N — Hindi / English dictionary + apply function
   Selected language is remembered in localStorage ('gss_lang') and swapped
   without a page reload. Elements opt in via data-i18n (textContent) or
   data-i18n-placeholder (placeholder attribute).
   ========================================================================== */
const TRANSLATIONS = {
  hi: {
    nav_home: "Home", nav_about: "About Us", nav_work: "Our Work", nav_gallery: "Gallery",
    nav_news: "News", nav_contact: "Contact", nav_donate: "Donate Now",
    hero_title_1: "गौ सेवा ही,", hero_title_2: "सबसे बड़ी सेवा है",
    hero_desc: "आइए, गौ माता की सेवा में योगदान दें और उनके जीवन को बेहतर बनाएं। हर छोटा प्रयास एक नई शुरुआत ला सकता है।",
    hero_cta_primary: "गौ सेवा में सहयोग करें", hero_cta_secondary: "हमारे बारे में जानें",
    stat1_label: "गौ माता की सेवा", stat2_label: "सालों का अनुभव", stat3_label: "सेवक हमारे साथ", stat4_label: "गौ माता सुरक्षित",
    about_eyebrow: "हमारे बारे में", about_title: "गौ सेवा समिति नीमच",
    about_desc: "हमारा उद्देश्य गौ माता की सेवा, संरक्षण और उनके स्वास्थ्य की देखभाल करना है। हम नीमच में बेसहारा, बीमार, घायल और विकलांग गौवंश की सेवा-उपचार के लिए दिन-रात कार्यरत हैं, जहाँ हर गौ माता को सम्मान और देखभाल मिलती है।",
    about_check1: "24/7 देखभाल, रेस्क्यू और उपचार सेवा", about_check2: "संचालित उपचार शाला — 70+ गोवंश निरंतर उपचाराधीन",
    about_check3: "रोज़ाना जल सेवा वाहन द्वारा पेयजल व्यवस्था", about_cta: "हमारे बारे में और पढ़ें",
    services_eyebrow: "हमारे कार्य", services_title: "हम क्या करते हैं",
    donate_title: "गौ सेवा में आपका सहयोग", donate_desc: "आपका छोटा सा योगदान गौ माता के जीवन में बड़ा बदलाव ला सकता है।",
    bank_card_title: "बैंक ट्रांसफर विवरण", donate_other_amount: "अन्य राशि",
    donate_progress_raised: "₹6,40,000 जुटाए गए", donate_progress_goal: "लक्ष्य ₹10,00,000",
    donate_phonepe_btn: "PhonePe से सीधा भुगतान करें", donate_cta_call: "अभी सहयोग करें ♥",
    donate_qr_badge: "🙏 गौ सेवा हेतु सहयोग", donate_qr_subtitle: "Scan the QR using PhonePe, Google Pay or any UPI App",
    donate_qr_label: "स्कैन करके सीधा दान करें",
    donate_qr_trust1: "सुरक्षित UPI भुगतान", donate_qr_trust2: "सीधे गौ सेवा समिति नीमच को", donate_qr_trust3: "कोई थर्ड पार्टी नहीं",
    gallery_eyebrow: "हमारा वास्तविक कार्य", gallery_title: "गैलरी",
    filter_all: "सभी", filter_gaushala: "गौशाला", filter_medical: "चिकित्सा सेवा", filter_rescue: "रेस्क्यू",
    news_eyebrow: "मीडिया में हम", news_title: "दैनिक भास्कर में गौ सेवा समिति की पहल",
    news_desc: "11 मई 2026 के दैनिक भास्कर, नीमच संस्करण में हमारी टीम के \"जल सेवा वाहन\" अभियान को कवर किया गया। भीषण गर्मी में गौवंश और बेज़ुबान जीवों की प्यास बुझाने के लिए बीते 6 वर्षों से टीम शहरभर में 2000 लीटर क्षमता की टंकियों से पेयजल पहुँचा रही है, और अब तक शहर के 25 से अधिक स्थानों पर यह सेवा दी जा चुकी है।",
    news_cta: "अभियान के बारे में जानें",
    press_eyebrow: "प्रेस में हमारा कार्य", press_title: "समाचार पत्रों में", press_view_more: "और समाचार देखें ↓",
    contact_eyebrow: "हमसे संपर्क करें", contact_title: "हम आपकी सुनने के लिए यहाँ हैं",
    contact_desc: "कोई प्रश्न, सुझाव या सहयोग का प्रस्ताव हो — नीचे दिया गया फॉर्म भरें, हमारी टीम जल्द ही आपसे संपर्क करेगी।",
    contact_point1: "24/7 आपातकालीन रेस्क्यू हेल्पलाइन", contact_point2: "दान व स्वयंसेवा सम्बन्धी सहायता", contact_point3: "24 घंटे के भीतर उत्तर",
    contact_label_name: "पूरा नाम", contact_ph_name: "आपका नाम",
    contact_label_phone: "मोबाइल नंबर", contact_ph_phone: "+91 98765 43210",
    contact_label_email: "ईमेल", contact_ph_email: "you@example.com",
    contact_label_subject: "विषय", contact_ph_subject: "दान / स्वयंसेवा / अन्य",
    contact_label_message: "संदेश", contact_ph_message: "अपना संदेश यहाँ लिखें...",
    contact_submit: "संदेश भेजें",
    footer_about: "गौ सेवा समिति नीमच का मुख्य उद्देश्य गौ माता की सेवा, संरक्षण और उनके कल्याण के लिए समर्पित रहना है।",
    footer_quick_links: "त्वरित लिंक", footer_contact_info: "संपर्क जानकारी", footer_hours: "Open 24/7 <br> Rej. 07/24/01/17288/22",
    footer_newsletter_title: "हमारे साथ जुड़ें", footer_newsletter_desc: "हमारे साथ जुड़ें और गौ सेवा की जानकारी पाएं।",
    footer_newsletter_placeholder: "अपना ईमेल दर्ज करें", footer_newsletter_btn: "सब्सक्राइब करें",
    footer_copyright: "© 2024 गौ सेवा समिति नीमच | सभी अधिकार सुरक्षित",
  },
  en: {
    nav_home: "Home", nav_about: "About Us", nav_work: "Our Work", nav_gallery: "Gallery",
    nav_news: "News", nav_contact: "Contact", nav_donate: "Donate Now",
    hero_title_1: "Serving Cows Is", hero_title_2: "Serving Humanity",
    hero_desc: "Join us in serving Gau Mata and improving their lives. Every small effort can bring a new beginning.",
    hero_cta_primary: "Support Gau Seva", hero_cta_secondary: "Learn About Us",
    stat1_label: "Cows Cared For", stat2_label: "Years of Service", stat3_label: "Volunteers With Us", stat4_label: "Cows Protected",
    about_eyebrow: "About Us", about_title: "Gau Sewa Samiti Neemuch",
    about_desc: "Our mission is to serve, protect and care for the health of Gau Mata. We work day and night in Neemuch caring for and treating homeless, sick, injured and disabled cattle, giving every cow dignity and care.",
    about_check1: "24/7 care, rescue and treatment service", about_check2: "Active treatment shelter — 70+ cattle under continuous care",
    about_check3: "Daily drinking-water service by our water tanker", about_cta: "Read More About Us",
    services_eyebrow: "Our Work", services_title: "What We Do",
    donate_title: "Your Support For Gau Seva", donate_desc: "Your small contribution can bring a big change to the life of Gau Mata.",
    bank_card_title: "Bank Transfer Details", donate_other_amount: "Other Amount",
    donate_progress_raised: "₹6,40,000 raised", donate_progress_goal: "Goal ₹10,00,000",
    donate_phonepe_btn: "Pay Directly via PhonePe", donate_cta_call: "Donate Now ♥",
    donate_qr_badge: "🙏 Support Gau Seva", donate_qr_subtitle: "Scan the QR using PhonePe, Google Pay or any UPI App",
    donate_qr_label: "Scan to donate directly",
    donate_qr_trust1: "Secure UPI Payment", donate_qr_trust2: "Direct to Gau Seva Samiti Neemuch", donate_qr_trust3: "No Third Party",
    gallery_eyebrow: "Our Real Work", gallery_title: "Gallery",
    filter_all: "All", filter_gaushala: "Gaushala", filter_medical: "Medical Care", filter_rescue: "Rescue",
    news_eyebrow: "In The Media", news_title: "Gau Sewa Samiti's Initiative Featured In Dainik Bhaskar",
    news_desc: "The 11 May 2026 Neemuch edition of Dainik Bhaskar covered our team's \"Water Service Vehicle\" campaign. For the past 6 years, our team has been delivering drinking water across the city using 2000-litre tankers to quench the thirst of cattle and other voiceless animals during severe heat, reaching 25+ locations across the city so far.",
    news_cta: "Learn About The Campaign",
    press_eyebrow: "Press Coverage", press_title: "In The Newspapers", press_view_more: "View More News ↓",
    contact_eyebrow: "Get In Touch", contact_title: "We're Here To Listen",
    contact_desc: "Have a question, suggestion or wish to collaborate? Fill out the form below and our team will get back to you soon.",
    contact_point1: "24/7 emergency rescue helpline", contact_point2: "Donation & volunteering support", contact_point3: "Response within 24 hours",
    contact_label_name: "Full Name", contact_ph_name: "Your name",
    contact_label_phone: "Phone Number", contact_ph_phone: "+91 98765 43210",
    contact_label_email: "Email", contact_ph_email: "you@example.com",
    contact_label_subject: "Subject", contact_ph_subject: "Donation / Volunteering / Other",
    contact_label_message: "Message", contact_ph_message: "Write your message here...",
    contact_submit: "Send Message",
    footer_about: "Gau Sewa Samiti Neemuch is dedicated to the service, protection and welfare of Gau Mata.",
    footer_quick_links: "Quick Links", footer_contact_info: "Contact Info", footer_hours: "Open 24/7 <br> Reg. 07/24/01/17288/22",
    footer_newsletter_title: "Stay Connected", footer_newsletter_desc: "Join us and get updates on our Gau Seva work.",
    footer_newsletter_placeholder: "Enter your email", footer_newsletter_btn: "Subscribe",
    footer_copyright: "© 2024 Gau Sewa Samiti Neemuch | All Rights Reserved",
  }
};

function applyLanguage(lang, silent) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.hi;
  document.documentElement.lang = lang === 'en' ? 'en' : 'hi';
  localStorage.setItem('gss_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky nav blur on scroll ---------- */
  const nav = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');

  document.querySelectorAll(".media-card__video video, .hero__bg-video").forEach(v => {
    v.muted = true;
    v.play().catch(err => console.log("Autoplay blocked:", err));
  });

  /* ---------- Precisely measure header height (fixes any gap above hero) ---------- */
  const topbar = document.querySelector('.topbar');
  const setHeaderHeight = () => {
    const h = (topbar?.offsetHeight || 0) + (nav?.offsetHeight || 0);
    document.documentElement.style.setProperty('--header-h', h + 'px');
  };
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('load', setHeaderHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setHeaderHeight);
  }
  let resizeDebounce;
  document.addEventListener('scroll', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(setHeaderHeight, 150);
  }, { passive: true });

  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
    if (window.scrollY > 500) backTop.classList.add('is-visible');
    else backTop.classList.remove('is-visible');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  }));

  /* ---------- Language dropdown ---------- */
  const langSwitch = document.getElementById('langSwitch');
  const langBtn = document.getElementById('langBtn');
  const langBtnLabel = document.getElementById('langBtnLabel');
  const langMenu = document.getElementById('langMenu');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitch.classList.toggle('is-open');
  });
  langMenu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      langMenu.querySelectorAll('li').forEach(x => x.classList.remove('is-active'));
      li.classList.add('is-active');
      langBtnLabel.textContent = li.textContent;
      langSwitch.classList.remove('is-open');
      applyLanguage(li.dataset.lang);
    });
  });
  document.addEventListener('click', () => langSwitch.classList.remove('is-open'));

  /* ---------- i18n: apply saved/selected language on load ---------- */
  const savedLang = localStorage.getItem('gss_lang') || 'hi';
  const savedLi = langMenu.querySelector(`li[data-lang="${savedLang}"]`);
  if (savedLi) {
    langMenu.querySelectorAll('li').forEach(x => x.classList.remove('is-active'));
    savedLi.classList.add('is-active');
    langBtnLabel.textContent = savedLi.textContent;
  }
  applyLanguage(savedLang, true);

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.stat__num');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + '+';
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countIO.observe(el));

  /* ---------- Services carousel: infinite auto-scroll, no arrows ----------
     - Clones the card set once so scrolling past the original set seamlessly
       continues into an identical copy (infinite-loop illusion).
     - Auto-advances by one card every ~3.2s, smooth scroll, no visible jump.
     - Pauses on hover, touch, and keyboard focus; resumes automatically after.
     - Fully keyboard accessible (Arrow Left/Right) and touch-swipe friendly
       (native overflow-x scrolling handles the swipe gesture itself). */
  const track = document.getElementById('carouselTrack');
  if (track) {
    const originalCards = Array.from(track.children);

    // Duplicate the set so looping never shows an empty gap or hard jump.
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a, button').forEach(el => el.setAttribute('tabindex', '-1'));
      track.appendChild(clone);
    });

    let isPaused = false;
    let resumeTimeout;
    let autoScrollInterval;

    const cardStep = () => (track.querySelector('.service-card')?.offsetWidth || 270) + 26;
    const loopWidth = () => track.scrollWidth / 2;

    const scrollNext = () => {
      if (isPaused) return;
      track.scrollBy({ left: cardStep(), behavior: 'smooth' });
      // Once we've scrolled past the first (original) set, snap back losslessly
      // — content is identical, so the reset is invisible to the user.
      setTimeout(() => {
        if (track.scrollLeft >= loopWidth() - 4) {
          track.scrollLeft -= loopWidth();
        }
      }, 550);
    };

    const startAutoScroll = () => {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(scrollNext, 3200);
    };
    startAutoScroll();

    const pauseAutoScroll = () => { isPaused = true; };
    const resumeAutoScrollSoon = (delay = 1200) => {
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => { isPaused = false; }, delay);
    };

    track.addEventListener('mouseenter', pauseAutoScroll);
    track.addEventListener('mouseleave', () => { isPaused = false; });
    track.addEventListener('touchstart', pauseAutoScroll, { passive: true });
    track.addEventListener('touchend', () => resumeAutoScrollSoon(1500));
    track.addEventListener('focusin', pauseAutoScroll);
    track.addEventListener('focusout', () => { isPaused = false; });

    // Keyboard accessibility: Arrow Left/Right manually navigate the carousel.
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        pauseAutoScroll();
        track.scrollBy({ left: cardStep(), behavior: 'smooth' });
        resumeAutoScrollSoon();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pauseAutoScroll();
        track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
        resumeAutoScrollSoon();
      }
    });
  }

  /* ---------- Donation amount selector ---------- */
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const amt = btn.textContent.replace(/[₹,]/g, '').trim();
      const phonepeBtn = document.getElementById('phonepeBtn');
      if (phonepeBtn && !isNaN(amt)) {
        phonepeBtn.href = `upi://pay?pa=YOUR-UPI-ID@bank&pn=Gau%20Sewa%20Samiti%20Neemuch&am=${amt}&cu=INR`;
      }
    });
  });

  /* ---------- Gallery "View More" / "View Less" ----------
     The extra images already sit in the DOM (inside #galleryMore, collapsed
     via CSS max-height:0). This just measures the real content height and
     animates to/from it, so the transition is smooth no matter how many
     images are inside. Once fully open, the inline max-height is cleared
     to 'none' so a later window resize (which can change row height on a
     grid) never clips the content. Doesn't touch the main gallery grid,
     its hover effects, or the lightbox — those keep working exactly as
     before for both the first 8 images and the revealed ones. */
  const galleryMore = document.getElementById('galleryMore');
  const galleryMoreBtn = document.getElementById('galleryMoreBtn');
  // The main grid also hides its own extra items (beyond the initial
  // 3-on-mobile / 4-on-tablet+desktop, see styles.css) via display:none.
  // These fade in/out in step with #galleryMore below.
  const mainGalleryGrid = document.querySelector('.gallery__grid:not(.gallery__grid--more)');
  if (galleryMore && galleryMoreBtn) {
    const toggleLabel = galleryMoreBtn.querySelector('.gallery__toggle-text');
    let onTransitionEnd;

    galleryMoreBtn.addEventListener('click', () => {
      const isOpen = galleryMore.classList.contains('is-open');
      galleryMore.removeEventListener('transitionend', onTransitionEnd);

      if (isOpen) {
        // Collapsing: fix the current pixel height first so the browser
        // has a "from" value to animate down to 0 from.
        galleryMore.style.maxHeight = galleryMore.scrollHeight + 'px';
        requestAnimationFrame(() => {
          galleryMore.style.maxHeight = '0px';
        });
        galleryMore.classList.remove('is-open');
        galleryMoreBtn.classList.remove('is-open');
        galleryMoreBtn.setAttribute('aria-expanded', 'false');
        if (toggleLabel) toggleLabel.textContent = 'और तस्वीरें देखें';

        // Fade the main grid's extra items back out, then hide them.
        if (mainGalleryGrid) {
          mainGalleryGrid.querySelectorAll('.gallery__item.is-fade-in').forEach(el => {
            el.classList.remove('is-fade-in');
          });
          mainGalleryGrid.classList.remove('is-expanded');
        }
      } else {
        galleryMore.classList.add('is-open');
        galleryMore.style.maxHeight = galleryMore.scrollHeight + 'px';
        galleryMoreBtn.classList.add('is-open');
        galleryMoreBtn.setAttribute('aria-expanded', 'true');
        if (toggleLabel) toggleLabel.textContent = 'कम तस्वीरें देखें';

        onTransitionEnd = (e) => {
          if (e.propertyName === 'max-height' && galleryMore.classList.contains('is-open')) {
            galleryMore.style.maxHeight = 'none';
          }
        };
        galleryMore.addEventListener('transitionend', onTransitionEnd);

        // Reveal the main grid's extra items: remove display:none first,
        // then add the opacity class a frame later so it actually fades in.
        if (mainGalleryGrid) {
          mainGalleryGrid.classList.add('is-expanded');
          requestAnimationFrame(() => {
            mainGalleryGrid.querySelectorAll('.gallery__item').forEach(el => {
              el.classList.add('is-fade-in');
            });
          });
        }

        // Keep the button in view; no jarring jump, just a gentle nudge
        // so the user can see the new images appear.
        requestAnimationFrame(() => {
          galleryMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      }
    });
  }

  /* ---------- Gallery filter tabs ---------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterableItems = document.querySelectorAll('.gallery__item[data-category]');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const filter = tab.dataset.filter;
      filterableItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-filtered-out', !match);
      });
      // If the "more" section is collapsed, expand it once a real filter is
      // chosen so filtered results from that block are actually visible.
      if (filter !== 'all' && galleryMore && !galleryMore.classList.contains('is-open')) {
        galleryMoreBtn?.click();
      }
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxStage = document.getElementById('lightboxStage');
  const lightboxClose = document.getElementById('lightboxClose');
  document.querySelectorAll('[data-lightbox]').forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.dataset.img || item.querySelector('img')?.src || '';
      lightboxStage.innerHTML = `<img src="${fullSrc}" alt="गौ माता गैलरी" />`;
      lightbox.classList.add('is-open');
    });
  });
  const closeLightbox = () => lightbox.classList.remove('is-open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- Hero floating particles ---------- */
  const particlesRoot = document.getElementById('particles');
  const particleCount = window.innerWidth < 600 ? 12 : 26;
  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('span');
    const size = 2 + Math.random() * 4;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (10 + Math.random() * 14) + 's';
    p.style.animationDelay = (Math.random() * 14) + 's';
    p.style.opacity = (0.3 + Math.random() * 0.5).toString();
    particlesRoot.appendChild(p);
  }

  /* ---------- Hero parallax on mouse move (desktop only) ---------- */
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero__content');
  if (window.matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      heroContent.style.transform = `translate(${x}px, ${y}px)`;
    });
    hero.addEventListener('mouseleave', () => { heroContent.style.transform = 'translate(0,0)'; });
  }

  /* ---------- Newsletter subscribe (static/demo — swap with real endpoint) ---------- */
  const subscribeForm = document.getElementById('subscribeForm');
  const subscribeNote = document.getElementById('subscribeNote');
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    subscribeNote.textContent = 'धन्यवाद! आप सब्सक्राइब हो गए हैं।';
    subscribeForm.reset();
  });

  /* ---------- Contact form: Web3Forms (static, no backend) ----------
     Validates required fields client-side, then POSTs JSON straight to
     Web3Forms' API. Shows a loading spinner on the button while in flight
     and a success/error message below the form; never navigates away. */
  const web3Form = document.getElementById('web3contactForm');
  const cfSubmitBtn = document.getElementById('cfSubmitBtn');
  const cfStatus = document.getElementById('cfStatus');

  const cfMessages = {
    hi: {
      required: 'यह फ़ील्ड आवश्यक है',
      email: 'कृपया एक मान्य ईमेल दर्ज करें',
      phone: 'कृपया एक मान्य मोबाइल नंबर दर्ज करें',
      success: 'धन्यवाद! आपका संदेश भेज दिया गया है। हम जल्द संपर्क करेंगे।',
      error: 'कुछ गलत हो गया। कृपया दोबारा प्रयास करें या हमें सीधे कॉल करें।',
    },
    en: {
      required: 'This field is required',
      email: 'Please enter a valid email',
      phone: 'Please enter a valid phone number',
      success: 'Thank you! Your message has been sent. We will get back to you soon.',
      error: 'Something went wrong. Please try again or call us directly.',
    }
  };
  const cfLang = () => (localStorage.getItem('gss_lang') === 'en' ? 'en' : 'hi');

  const validateField = (field) => {
    const errorEl = web3Form.querySelector(`[data-error-for="${field.id}"]`);
    let message = '';
    if (field.hasAttribute('required') && !field.value.trim()) {
      message = cfMessages[cfLang()].required;
    } else if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      message = cfMessages[cfLang()].email;
    } else if (field.type === 'tel' && field.value && !/^[0-9+\-\s]{7,15}$/.test(field.value)) {
      message = cfMessages[cfLang()].phone;
    }
    field.classList.toggle('is-invalid', !!message);
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle('is-visible', !!message);
    }
    return !message;
  };

  if (web3Form) {
    const fields = web3Form.querySelectorAll('input[required], textarea[required], input[type="email"], input[type="tel"]');
    fields.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => { if (field.classList.contains('is-invalid')) validateField(field); });
    });

    web3Form.addEventListener('submit', async (e) => {
      e.preventDefault();
      cfStatus.textContent = '';
      cfStatus.className = 'contact-form__status';

      let allValid = true;
      fields.forEach(field => { if (!validateField(field)) allValid = false; });
      if (!allValid) return;

      cfSubmitBtn.classList.add('is-loading');
      cfSubmitBtn.disabled = true;

      try {
        const formData = new FormData(web3Form);
        const payload = Object.fromEntries(formData.entries());
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
          cfStatus.textContent = cfMessages[cfLang()].success;
          cfStatus.classList.add('is-success');
          web3Form.reset();
        } else {
          throw new Error(result.message || 'Web3Forms error');
        }
      } catch (err) {
        cfStatus.textContent = cfMessages[cfLang()].error;
        cfStatus.classList.add('is-error');
      } finally {
        cfSubmitBtn.classList.remove('is-loading');
        cfSubmitBtn.disabled = false;
      }
    });
  }

});


/* ==========================================================================
   PRESS COVERAGE — carousel (built from one master list) + "View More"
   modal + dedicated Newspaper Viewer. Independent from the gallery
   lightbox. #pressModalGrid is the single source of truth for every
   cutting; the carousel is generated from it automatically.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const modalGrid = document.getElementById('pressModalGrid');
  if (!modalGrid) return;

  const masterEls = Array.from(modalGrid.children).filter(el => el.classList.contains('press-card'));
  masterEls.forEach((el, i) => el.setAttribute('data-press-index', String(i)));
  const masterItems = masterEls.map(el => {
    const im = el.querySelector('img');
    return { src: im?.src || '', alt: im?.alt || 'समाचार पत्र' };
  });

  const track = document.getElementById('pressCarouselTrack');
  if (track) {
    // Build [clone-set][real interactive set][clone-set] so the auto-scroll
    // can loop infinitely in either direction without a visible seam.
    const formatCaptionMeta = (span) => {
      if (!span) return;
      const raw = span.textContent.trim();
      const parts = raw.split('·').map(s => s.trim()).filter(Boolean);
      const source = parts[0] || raw;
      const date = parts[1] || '';
      span.innerHTML = '<span class="press-carousel__source">📰 ' + source + '</span>' +
        (date ? '<span class="press-carousel__date">📅 ' + date + '</span>' : '');
    };
    const buildCarouselSet = (hidden) => masterEls.map((el) => {
      const clone = el.cloneNode(true);
      if (hidden) {
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('tabindex', '-1');
      } else {
        clone.setAttribute('role', 'group');
        clone.setAttribute('aria-roledescription', 'slide');
      }
      formatCaptionMeta(clone.querySelector('.press-card__caption span'));
      return clone;
    });
    buildCarouselSet(true).forEach((c) => track.appendChild(c));
    buildCarouselSet(false).forEach((c) => track.appendChild(c));
    buildCarouselSet(true).forEach((c) => track.appendChild(c));
  }

  const viewer       = document.getElementById('pressViewer');
  const stage        = document.getElementById('pressViewerStage');
  const zoomWrap     = document.getElementById('pressZoomWrap');
  const viewerImg    = document.getElementById('pressViewerImg');
  const viewerClose  = document.getElementById('pressViewerClose');
  const viewerPrev   = document.getElementById('pressPrev');
  const viewerNext   = document.getElementById('pressNext');
  const zoomInBtn    = document.getElementById('pressZoomIn');
  const zoomOutBtn   = document.getElementById('pressZoomOut');
  const zoomResetBtn = document.getElementById('pressZoomReset');
  const counter      = document.getElementById('pressCounter');

  let openViewer = () => {};
  let closeViewer = () => {};

  if (viewer && stage && viewerImg) {
    let currentIndex = 0, scale = 1, panX = 0, panY = 0;
    const MIN_SCALE = 1, MAX_SCALE = 5;

    const applyTransform = (animate = true) => {
      zoomWrap.classList.toggle('is-dragging', !animate);
      zoomWrap.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
      zoomResetBtn.textContent = Math.round(scale * 100) + '%';
    };
    const clampPan = () => {
      const r = stage.getBoundingClientRect();
      const maxX = (r.width * (scale - 1)) / 2 + 40;
      const maxY = (r.height * (scale - 1)) / 2 + 40;
      panX = Math.max(-maxX, Math.min(maxX, panX));
      panY = Math.max(-maxY, Math.min(maxY, panY));
    };
    const setScale = (next, animate = true) => {
      scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next));
      if (scale === 1) { panX = 0; panY = 0; }
      clampPan(); applyTransform(animate);
    };
    const resetView = (animate = true) => { scale = 1; panX = 0; panY = 0; applyTransform(animate); };
    const renderCurrent = () => {
      const item = masterItems[currentIndex];
      if (!item) return;
      resetView(false);
      viewerImg.src = item.src; viewerImg.alt = item.alt;
      counter.textContent = `${currentIndex + 1} / ${masterItems.length}`;
      viewerPrev.disabled = masterItems.length <= 1;
      viewerNext.disabled = masterItems.length <= 1;
    };
    const goTo = (delta) => {
      if (!masterItems.length) return;
      currentIndex = (currentIndex + delta + masterItems.length) % masterItems.length;
      renderCurrent();
    };

    openViewer = (index) => {
      currentIndex = index;
      renderCurrent();
      viewer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    closeViewer = () => {
      viewer.classList.remove('is-open');
      const modalOpen = document.getElementById('pressModal')?.classList.contains('is-open');
      document.body.style.overflow = modalOpen ? 'hidden' : '';
    };

    viewerClose.addEventListener('click', closeViewer);
    viewer.addEventListener('click', (e) => { if (e.target === viewer) closeViewer(); });
    viewerPrev.addEventListener('click', () => goTo(-1));
    viewerNext.addEventListener('click', () => goTo(1));
    zoomInBtn.addEventListener('click', () => setScale(scale + 0.4));
    zoomOutBtn.addEventListener('click', () => setScale(scale - 0.4));
    zoomResetBtn.addEventListener('click', () => resetView());

    document.addEventListener('keydown', (e) => {
      if (!viewer.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') goTo(-1);
      else if (e.key === 'ArrowRight') goTo(1);
      else if (e.key === '+' || e.key === '=') setScale(scale + 0.4);
      else if (e.key === '-') setScale(scale - 0.4);
    });

    stage.addEventListener('wheel', (e) => {
      if (!viewer.classList.contains('is-open')) return;
      e.preventDefault();
      setScale(scale + (e.deltaY < 0 ? 0.25 : -0.25));
    }, { passive: false });

    let isDragging = false, dragStartX = 0, dragStartY = 0, panStartX = 0, panStartY = 0;
    zoomWrap.addEventListener('mousedown', (e) => {
      if (scale <= 1) return;
      isDragging = true; dragStartX = e.clientX; dragStartY = e.clientY; panStartX = panX; panStartY = panY;
    });
    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      panX = panStartX + (e.clientX - dragStartX);
      panY = panStartY + (e.clientY - dragStartY);
      clampPan(); applyTransform(false);
    });
    window.addEventListener('mouseup', () => { isDragging = false; });

    let touchStartX = 0, touchStartY = 0, pinchStartDist = 0, pinchStartScale = 1, touchPanning = false;
    const touchDist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) { pinchStartDist = touchDist(e.touches); pinchStartScale = scale; }
      else if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY;
        touchPanning = scale > 1; panStartX = panX; panStartY = panY;
      }
    }, { passive: true });
    stage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        setScale(pinchStartScale * (touchDist(e.touches) / pinchStartDist), false);
      } else if (e.touches.length === 1 && touchPanning) {
        e.preventDefault();
        panX = panStartX + (e.touches[0].clientX - touchStartX);
        panY = panStartY + (e.touches[0].clientY - touchStartY);
        clampPan(); applyTransform(false);
      }
    }, { passive: false });
    stage.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1 && scale <= 1 && !touchPanning) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) goTo(dx < 0 ? 1 : -1);
      }
      touchPanning = false;
    });
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('#pressCarouselTrack .press-card, #pressModalGrid .press-card');
    if (!card) return;
    const idx = card.dataset.pressIndex;
    if (idx !== undefined) openViewer(Number(idx));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('#pressCarouselTrack .press-card, #pressModalGrid .press-card');
    if (!card) return;
    e.preventDefault();
    const idx = card.dataset.pressIndex;
    if (idx !== undefined) openViewer(Number(idx));
  });

  const viewMoreBtn = document.getElementById('pressViewMoreBtn');
  const pressModal = document.getElementById('pressModal');
  const pressModalClose = document.getElementById('pressModalClose');
  let closeModal = () => {};
  if (viewMoreBtn && pressModal) {
    const openModal = () => { pressModal.classList.add('is-open'); document.body.style.overflow = 'hidden'; };
    closeModal = () => {
      pressModal.classList.remove('is-open');
      if (!viewer || !viewer.classList.contains('is-open')) document.body.style.overflow = '';
    };
    viewMoreBtn.addEventListener('click', openModal);
    pressModalClose.addEventListener('click', closeModal);
    pressModal.addEventListener('click', (e) => { if (e.target === pressModal) closeModal(); });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (viewer && viewer.classList.contains('is-open')) closeViewer();
    else if (pressModal && pressModal.classList.contains('is-open')) closeModal();
  });

  if (track && masterEls.length) {
    const N = masterEls.length;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const visibleCount = () => {
      const w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 1024) return 2;
      if (w <= 1280) return 3;
      return 4;
    };
    const cardStep = () => {
      const card = track.querySelector('.press-card');
      if (!card) return 280;
      const cs = getComputedStyle(track);
      const gap = parseFloat(cs.columnGap || cs.gap) || 26;
      return card.getBoundingClientRect().width + gap;
    };

    let pos = 0;          // virtual card index, kept close to [0, N)
    let dragOffset = 0;   // live px offset while dragging
    let isDragging = false;

    const applyTransform = () => {
      const x = -((N + pos) * cardStep()) + dragOffset;
      track.style.transform = `translateX(${x}px)`;
    };
    const jumpInstant = () => {
      track.classList.add('is-instant');
      applyTransform();
      void track.offsetHeight; // force reflow so the jump commits before easing returns
      track.classList.remove('is-instant');
    };
    const normalize = () => {
      if (pos >= N || pos < 0) { pos = ((pos % N) + N) % N; jumpInstant(); }
    };
    const goTo = (target) => {
      let diff = target - pos;
      if (diff > N / 2) diff -= N;
      if (diff < -N / 2) diff += N;
      pos += diff;
      dragOffset = 0;
      applyTransform(); // animates via the CSS transition
    };
    const next = () => goTo(Math.round(pos) + 1);
    const prev = () => goTo(Math.round(pos) - 1);

    jumpInstant();

    /* ---- Pagination dots ---- */
    const dotsWrap = document.getElementById('pressCarouselDots');
    let dotEls = [];
    const updateDots = () => {
      if (!dotEls.length) return;
      const perPage = visibleCount();
      const normPos = ((pos % N) + N) % N;
      const page = Math.round(normPos / perPage) % dotEls.length;
      dotEls.forEach((d, i) => d.classList.toggle('is-active', i === page));
    };
    const buildDots = () => {
      if (!dotsWrap) return;
      const perPage = visibleCount();
      const pages = Math.max(1, Math.ceil(N / perPage));
      dotsWrap.innerHTML = '';
      dotEls = [];
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'press-carousel__dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `स्लाइड ${i + 1}`);
        dot.addEventListener('click', () => { pauseInteraction(); goTo(i * perPage); resumeSoon(); });
        dotsWrap.appendChild(dot);
        dotEls.push(dot);
      }
      updateDots();
    };
    buildDots();

    track.addEventListener('transitionend', (e) => {
      if (e.propertyName !== 'transform') return;
      normalize();
      updateDots();
    });

    /* ---- Autoplay: efficient requestAnimationFrame timer ---- */
    const INTERVAL = 3800;
    let lastTick = 0, paused = false, tabHidden = document.hidden;
    const loop = (t) => {
      if (!lastTick) lastTick = t;
      if (paused || tabHidden || isDragging || prefersReducedMotion) {
        lastTick = t;
      } else if (t - lastTick >= INTERVAL) {
        next();
        lastTick = t;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const pauseInteraction = () => { paused = true; };
    let resumeTimer;
    const resumeSoon = (delay = 1500) => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, delay);
    };

    /* Pause on hover (desktop) */
    track.addEventListener('mouseenter', pauseInteraction);
    track.addEventListener('mouseleave', () => { paused = false; });

    /* Pause when the browser tab is inactive; resume when it's active again */
    document.addEventListener('visibilitychange', () => { tabHidden = document.hidden; });

    /* Keyboard focus support */
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); pauseInteraction(); next(); resumeSoon(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); pauseInteraction(); prev(); resumeSoon(); }
    });
    track.addEventListener('focusin', pauseInteraction);
    track.addEventListener('focusout', () => { paused = false; });

    /* Drag (mouse) + swipe (touch/pen), unified via Pointer Events */
    let pointerId = null, startX = 0, moved = false;

    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      moved = false;
      isDragging = true;
      dragOffset = 0;
      pauseInteraction();
      track.classList.add('is-dragging');
      try { track.setPointerCapture(pointerId); } catch (_) {}
    });
    track.addEventListener('pointermove', (e) => {
      if (!isDragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      dragOffset = dx;
      applyTransform();
    });
    const endDrag = (e) => {
      if (!isDragging || (pointerId !== null && e.pointerId !== pointerId)) return;
      isDragging = false;
      track.classList.remove('is-dragging');
      const step = cardStep();
      const deltaSteps = Math.round(-dragOffset / step);
      dragOffset = 0;
      if (deltaSteps !== 0) goTo(pos + deltaSteps); else applyTransform();
      pointerId = null;
      resumeSoon(moved ? 1500 : 800);
    };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('pointerleave', (e) => { if (isDragging) endDrag(e); });

    /* A drag release shouldn't also open the newspaper viewer */
    track.addEventListener('click', (e) => {
      if (moved) { e.stopPropagation(); moved = false; }
    }, true);

    /* Touch-hold pause as a safety net on browsers with partial Pointer Events support */
    track.addEventListener('touchstart', pauseInteraction, { passive: true });
    track.addEventListener('touchend', () => resumeSoon(1500), { passive: true });

    /* Responsive: recompute card width / dots on resize */
    let resizeDebounce2;
    window.addEventListener('resize', () => {
      clearTimeout(resizeDebounce2);
      resizeDebounce2 = setTimeout(() => { jumpInstant(); buildDots(); }, 200);
    });
  }

});
/* ==========================================================================
   PREMIUM POLISH LAYER — v2
   Purely additive micro-interactions layered on top of everything above:
   button ripple, magnetic hover, and a mouse-tracked spotlight on cards.
   Runs in its own DOMContentLoaded listener so nothing existing is touched.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---- Button ripple on click (works on every .btn) ---- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'btn-ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* ---- Magnetic pull for primary CTA buttons (desktop only) ---- */
  if (canHover) {
    document.querySelectorAll('.btn--primary, .btn--donate, .btn--phonepe').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        btn.style.transform = `translate(${x}px, ${y - 2}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    /* ---- Spotlight cursor tracking for cards (sets --mx/--my used in CSS) ---- */
    const spotlightEls = document.querySelectorAll(
      '.service-card, .press-card, .glass-card, .stats-card'
    );
    spotlightEls.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    });
  }

  /* ---- Gallery: collapse any item whose image fails to load, so a
     missing/broken photo never leaves a visible hole in the grid ---- */
  document.querySelectorAll('.gallery__item img').forEach(img => {
    img.addEventListener('error', () => {
      img.closest('.gallery__item')?.classList.add('is-broken');
    });
  });

});