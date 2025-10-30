// === Theme Toggle ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(`theme-${savedTheme}`);
updateThemeIcon(savedTheme);

themeToggle?.addEventListener('click', () => {
  const isDark = body.classList.contains('theme-dark');
  body.classList.toggle('theme-dark', !isDark);
  body.classList.toggle('theme-light', isDark);
  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle?.querySelector('i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// === Translations ===
const translations = {
  id: {
    nav: { home: "Home", about: "Tentang", services: "Layanan", projects: "Proyek", skills: "Keahlian", contact: "Kontak" },
    hero: {
      greeting: "👋 Hi, I'm",
      title: "💻 Full-Stack Developer | 📱 Mobile Enthusiast | 🎓 IT Student | 🌱 Lifelong Learner",
      slogan: "Code. Learn. Build. Inspire.",
      view_projects: "Lihat Proyek",
      contact_me: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      p1: "Hey there! 👋",
      p2: "Saya <strong>Muhammad Raihan Azmi</strong>, seorang <strong>Full-Stack Developer</strong> dan <strong>Project Manager</strong> asal Kalimantan Selatan, Indonesia 🇮🇩.",
      p3: "Saya berfokus pada pengembangan website interaktif dan aplikasi mobile cerdas yang membantu orang menjalani hidup lebih efisien dan produktif.",
      p4: "Saya menempuh pendidikan di <strong>Pondok Pesantren Al-Baladul Amin Kandangan</strong>, mulai dari SMP hingga SMA, dan lulus pada tahun 2023.",
      p5: "Saat ini, saya sedang melanjutkan studi <strong>S1 Teknologi Informasi di UIN Antasari Banjarmasin</strong>, tempat saya memperdalam keterampilan di bidang teknologi, kreativitas, dan inovasi digital.",
      quote: "“Code with purpose. Build with passion. Lead with vision.”"
    },
    services: {
      title: "Apa yang Saya Lakukan",
      web: "🌐 Web Development",
      web_desc: "Membangun situs modern dan responsif menggunakan HTML, CSS, JavaScript, dan PHP.",
      fullstack: "⚙️ Full-Stack Engineering",
      fullstack_desc: "Mengembangkan aplikasi lengkap berbasis React, Laravel, dan Node.js.",
      mobile: "📱 Mobile Development",
      mobile_desc: "Menciptakan aplikasi mobile dengan Flutter dan Kotlin.",
      iot: "📡 IoT & Embedded Systems",
      iot_desc: "Bereksperimen dengan Arduino, ESP32, dan Wokwi untuk solusi teknologi terhubung.",
      ai: "🤖 AI-Assisted Development",
      ai_desc: "Menggunakan ChatGPT, Gemini, dan Claude untuk mempercepat proses pengembangan.",
      pm: "🧩 Project Management",
      pm_desc: "Memimpin tim pengembang kecil dalam merancang dan mengimplementasikan solusi digital inovatif."
    },
    projects: {
      title: "Proyek Unggulan",
      proj1: { title: "🧩 Website Pemantauan Siswa", desc: "Aplikasi web untuk memantau data dan kinerja siswa secara real-time." },
      proj2: { title: "📝 QuickNote App", desc: "Aplikasi pencatat minimalis untuk mencatat ide dan tugas harian." },
      proj3: { title: "⚡ Keva Project", desc: "Eksperimen kreatif dengan framework modern untuk membangun UI responsif." },
      view_github: "Lihat di GitHub",
      more: "💡 Lihat lebih banyak proyek di"
    },
    skills: {
      title: "Tech Stack",
      lang: "Bahasa & Framework",
      db: "Database & DevOps",
      tools: "Alat & Desain",
      ai: "AI & Asisten Developer",
      iot: "IoT & Embedded"
    },
    contact: {
      title: "Mari Terhubung",
      description: "Ingin berkolaborasi atau berdiskusi tentang teknologi? Yuk hubungi aku lewat salah satu platform di bawah ini 👇"
    }
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "👋 Hi, I'm",
      title: "💻 Full-Stack Developer | 📱 Mobile Enthusiast | 🎓 IT Student | 🌱 Lifelong Learner",
      slogan: "Code. Learn. Build. Inspire.",
      view_projects: "View Projects",
      contact_me: "Contact Me"
    },
    about: {
      title: "About Me",
      p1: "Hey there! 👋",
      p2: "I'm <strong>Muhammad Raihan Azmi</strong>, a <strong>Full-Stack Developer</strong> and <strong>Project Manager</strong> from South Kalimantan, Indonesia 🇮🇩.",
      p3: "I focus on building interactive websites and smart mobile apps that help people live more efficiently and productively.",
      p4: "I studied at <strong>Pondok Pesantren Al-Baladul Amin Kandangan</strong> from junior high to senior high school, graduating in 2023.",
      p5: "Currently, I'm pursuing a <strong>Bachelor's in Information Technology at UIN Antasari Banjarmasin</strong>, where I deepen my skills in technology, creativity, and digital innovation.",
      quote: "“Code with purpose. Build with passion. Lead with vision.”"
    },
    services: {
      title: "What I Do",
      web: "🌐 Web Development",
      web_desc: "Building modern and responsive websites using HTML, CSS, JavaScript, and PHP.",
      fullstack: "⚙️ Full-Stack Engineering",
      fullstack_desc: "Developing complete applications based on React, Laravel, and Node.js.",
      mobile: "📱 Mobile Development",
      mobile_desc: "Creating mobile apps with Flutter and Kotlin.",
      iot: "📡 IoT & Embedded Systems",
      iot_desc: "Experimenting with Arduino, ESP32, and Wokwi for connected tech solutions.",
      ai: "🤖 AI-Assisted Development",
      ai_desc: "Using ChatGPT, Gemini, and Claude to accelerate development.",
      pm: "🧩 Project Management",
      pm_desc: "Leading small dev teams to design and implement innovative digital solutions."
    },
    projects: {
      title: "Featured Projects",
      proj1: { title: "🧩 Student Monitoring Website", desc: "A web app to monitor student data and performance in real-time." },
      proj2: { title: "📝 QuickNote App", desc: "A minimalist note-taking app for daily ideas and tasks." },
      proj3: { title: "⚡ Keva Project", desc: "Creative experiments with modern frameworks to build responsive UIs." },
      view_github: "View on GitHub",
      more: "💡 See more projects on"
    },
    skills: {
      title: "Tech Stack",
      lang: "Languages & Frameworks",
      db: "Database & DevOps",
      tools: "Tools & Design",
      ai: "AI & Developer Assistants",
      iot: "IoT & Embedded"
    },
    contact: {
      title: "Let's Connect",
      description: "Want to collaborate or discuss technology? Feel free to reach out via any of the platforms below 👇"
    }
  },
  ar: {
    nav: { home: "الرئيسية", about: "عني", services: "الخدمات", projects: "المشاريع", skills: "المهارات", contact: "اتصل بي" },
    hero: {
      greeting: "👋 مرحبًا، أنا",
      title: "💻 مطور ويب كامل | 📱 متحمس للتطبيقات المحمولة | 🎓 طالب تقنية معلومات | 🌱 متعلم مدى الحياة",
      slogan: "اكتب. تعلّم. ابنِ. ألهم.",
      view_projects: "عرض المشاريع",
      contact_me: "اتصل بي"
    },
    about: {
      title: "عني",
      p1: "مرحبًا! 👋",
      p2: "أنا <strong>محمد ريحان عزمي</strong>، <strong>مطور ويب كامل</strong> و<strong>مدير مشاريع</strong> من جنوب كاليمانتان، إندونيسيا 🇮🇩.",
      p3: "أركز على بناء مواقع تفاعلية وتطبيقات ذكية تساعد الناس على العيش بكفاءة وإنتاجية أكبر.",
      p4: "درستُ في <strong>معهد البلاذل الأمين بكاندنجان</strong> من المرحلة الإعدادية حتى الثانوية، وتخرّجتُ عام 2023.",
      p5: "حاليًا، أتابع دراسة <strong>البكالوريوس في تقنية المعلومات في جامعة أنتاساري الإسلامية ببنجرماسين</strong>، حيث أعمّق مهاراتي في التكنولوجيا والإبداع والابتكار الرقمي.",
      quote: "“اكتب بقصد. ابنِ بشغف. قُد برؤية.”"
    },
    services: {
      title: "ما أقوم به",
      web: "🌐 تطوير الويب",
      web_desc: "بناء مواقع عصرية وسريعة باستخدام HTML وCSS وJavaScript وPHP.",
      fullstack: "⚙️ هندسة الواجهة الكاملة",
      fullstack_desc: "تطوير تطبيقات كاملة باستخدام React وLaravel وNode.js.",
      mobile: "📱 تطوير التطبيقات المحمولة",
      mobile_desc: "إنشاء تطبيقات محمولة باستخدام Flutter وKotlin.",
      iot: "📡 أنظمة إنترنت الأشياء والمدمجة",
      iot_desc: "التجريب مع Arduino وESP32 وWokwi لحلول التكنولوجيا المتصلة.",
      ai: "🤖 التطوير بمساعدة الذكاء الاصطناعي",
      ai_desc: "استخدام ChatGPT وGemini وClaude لتسريع عملية التطوير.",
      pm: "🧩 إدارة المشاريع",
      pm_desc: "قيادة فرق تطوير صغيرة لتصميم وتنفيذ حلول رقمية مبتكرة."
    },
    projects: {
      title: "المشاريع البارزة",
      proj1: { title: "🧩 موقع مراقبة الطلاب", desc: "تطبيق ويب لمراقبة بيانات الطلاب وأدائهم في الوقت الفعلي." },
      proj2: { title: "📝 تطبيق QuickNote", desc: "تطبيق بسيط لتدوين الأفكار والمهام اليومية." },
      proj3: { title: "⚡ مشروع كِفا", desc: "تجارب إبداعية بإطارات عمل حديثة لبناء واجهات مستخدم متجاوبة." },
      view_github: "عرض على GitHub",
      more: "💡 شاهد المزيد من المشاريع على"
    },
    skills: {
      title: "تقنياتي",
      lang: "اللغات وإطارات العمل",
      db: "قواعد البيانات وDevOps",
      tools: "الأدوات والتصميم",
      ai: "الذكاء الاصطناعي ومساعدو المطورين",
      iot: "إنترنت الأشياء والأنظمة المدمجة"
    },
    contact: {
      title: "لنبقى على تواصل",
      description: "هل ترغب في التعاون أو مناقشة التكنولوجيا؟ تواصل معي عبر إحدى المنصات أدناه 👇"
    }
  },
  ja: {
    nav: { home: "ホーム", about: "自己紹介", services: "サービス", projects: "プロジェクト", skills: "スキル", contact: "お問い合わせ" },
    hero: {
      greeting: "👋 こんにちは、私は",
      title: "💻 フルスタック開発者 | 📱 モバイル愛好家 | 🎓 IT学生 | 🌱 終身学習者",
      slogan: "コードを書く。学ぶ。構築する。インスパイアする。",
      view_projects: "プロジェクトを見る",
      contact_me: "お問い合わせ"
    },
    about: {
      title: "自己紹介",
      p1: "こんにちは！ 👋",
      p2: "私は<strong>ムハンマド・ライハン・アズミ</strong>と申します。<strong>フルスタック開発者</strong>兼<strong>プロジェクトマネージャー</strong>で、インドネシア・南カリマンタン出身です🇮🇩。",
      p3: "人々がより効率的で生産的に生活できるよう、インタラクティブなウェブサイトやスマートなモバイルアプリの開発に注力しています。",
      p4: "中学校から高校まで<strong>アラ・バラドゥル・アミン・カダンガン校</strong>で学び、2023年に卒業しました。",
      p5: "現在、<strong>UINアンタサリ・バンジャルマシン</strong>で<strong>情報技術学士号</strong>を取得中です。テクノロジー、創造性、デジタルイノベーションのスキルを深めています。",
      quote: "「目的を持ってコードを書く。情熱を持って構築する。ビジョンを持って導く。」"
    },
    services: {
      title: "提供サービス",
      web: "🌐 ウェブ開発",
      web_desc: "HTML、CSS、JavaScript、PHPを使用して、モダンでレスポンシブなウェブサイトを構築します。",
      fullstack: "⚙️ フルスタックエンジニアリング",
      fullstack_desc: "React、Laravel、Node.jsをベースに完全なアプリケーションを開発します。",
      mobile: "📱 モバイル開発",
      mobile_desc: "FlutterやKotlinでモバイルアプリを作成します。",
      iot: "📡 IoT・組込みシステム",
      iot_desc: "Arduino、ESP32、Wokwiを活用し、接続型テクノロジーソリューションを実験しています。",
      ai: "🤖 AI支援開発",
      ai_desc: "ChatGPT、Gemini、Claudeを活用して開発プロセスを加速します。",
      pm: "🧩 プロジェクトマネジメント",
      pm_desc: "小規模開発チームを率いて、革新的なデジタルソリューションを設計・実装します。"
    },
    projects: {
      title: "注目のプロジェクト",
      proj1: { title: "🧩 生徒モニタリングWebアプリ", desc: "生徒のデータとパフォーマンスをリアルタイムで監視するWebアプリです。" },
      proj2: { title: "📝 QuickNoteアプリ", desc: "アイデアや日々のタスクを記録するミニマリストなメモアプリです。" },
      proj3: { title: "⚡ Kevaプロジェクト", desc: "モダンなフレームワークでレスポンシブUIを構築するための創造的実験です。" },
      view_github: "GitHubで見る",
      more: "💡 もっと多くのプロジェクトを"
    },
    skills: {
      title: "使用技術",
      lang: "言語・フレームワーク",
      db: "データベース・DevOps",
      tools: "開発ツール・デザイン",
      ai: "AI・開発アシスタント",
      iot: "IoT・組込み"
    },
    contact: {
      title: "つながりましょう",
      description: "テクノロジーについて協力したり、話し合いたいですか？下のプラットフォームから気軽に連絡してください 👇"
    }
  }
};

// === Language Switcher ===
const languageSelect = document.getElementById('languageSelect');
const htmlTag = document.documentElement;

const savedLang = localStorage.getItem('language') || 'id';
if (languageSelect) {
  languageSelect.value = savedLang;
  translatePage(savedLang);
}

languageSelect?.addEventListener('change', (e) => {
  const lang = e.target.value;
  localStorage.setItem('language', lang);
  translatePage(lang);
});

function translatePage(lang) {
  htmlTag.setAttribute('lang', lang);
  htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let text = getNestedValue(translations[lang], key) || el.innerText;
    el.innerHTML = text;
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// === Smooth Scroll + Mobile Menu ===
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      }
      ticking = false;
    });
    ticking = true;
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      const navMenu = document.getElementById("navMenu");
      if (navMenu) navMenu.classList.remove("active");
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu?.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (navMenu && !navMenu.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// === Scroll Animations ===
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const type = el.dataset.aos;
    if (type === "fade-right") el.style.transform = "translateX(30px)";
    else if (type === "fade-left") el.style.transform = "translateX(-30px)";
    else if (type === "fade-up") el.style.transform = "translateY(30px)";
    else if (type === "zoom-in") el.style.transform = "scale(0.92)";
  });

  setTimeout(() => {
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
  }, 100);
});

// === Tech Stack Slider Drag ===
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('techStackSlider');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('dragging');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('dragging');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('dragging');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
      isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});
