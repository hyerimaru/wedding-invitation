console.log("window.formspree =", window.formspree);
const texts = {
    ko: {
      openingTitle: "Wedding Invitation",
      openingSubtitle: "초대장을 열어보세요",
      heroBadge: "Wedding Day",
      heroNames: "신랑 콘도 유이치 · 신부 박혜린",
      heroDate: "2026년 7월 4일 토요일 오전10시30분",
      heroVenue: "아트그레이스 웨딩홀",
  
      introTitle: "초대의 말씀",
      introBody1: "서로 다른 길을 걸어오던 두 사람이 만나 이제 같은 길을 함께 걸어가고자 합니다",
      introBody2: "소중한 여러분을 모시고 기쁜 날의 순간을 함께 나누고 싶습니다",
  
      ddayTitle: "Wedding Day Countdown",
      ddayLabel: "결혼식까지 남은 시간",
      daysLabel: "일",
      hoursLabel: "시간",
      minutesLabel: "분",
      secondsLabel: "초",
  
      infoTitle: "예식 안내",
      labelDate: "날짜",
      valueDate: "2026년 7월 4일 (토)",
      labelTime: "시간",
      valueTime: "오전10시 30분",
      labelVenue: "장소",
      valueVenue: "아트그레이스 웨딩홀",
      labelAddress: "주소",
      valueAddress: "사이타마현 사이타마시 키타구 우에타케초 1-816-7",
  
      mapTitle: "오시는 길",
      mapAddress: "사이타마현 사이타마시 키타구 우에타케초 1-816-7",
  
      galleryTitle: "갤러리",
  
      rsvpTitle: "참석 여부 회신",
      formNameLabel: "이름",
      formPhoneLabel: "전화번호",
      formEmailLabel: "이메일",
      formAttendanceLabel: "참석 여부",
      formMessageLabel: "메시지",
      privacyLabel: "개인정보 수집 및 이용에 동의합니다.",
      submitBtn: "제출하기",
  
      closingTitle: "감사합니다",
      closingMessage: "소중한 걸음으로 함께해주셔서 진심으로 감사드립니다.",
      closingNames: "신랑 콘도 유이치 · 신부 박혜린",
  
      attendanceOptions: {
        placeholder: "선택해주세요",
        yes: "참석",
        no: "불참"
      },
  
    },
  
    ja: {
      openingTitle: "Wedding Invitation",
      openingSubtitle: "招待状を開いてください",
      heroBadge: "Wedding Day",
      heroNames: "新郎 近藤悠市 · 新婦 パク・ヘリン",
      heroDate: "2026年7月04日（土）午前10時30分",
      heroVenue: "大宮アートグレイス ウエディングシャトー",
  
      introTitle: "ご挨拶",
      introBody1: "それぞれの道を歩んできた二人が出会い、これから同じ未来へ歩んでいくことになりました",
      introBody2: "大切な皆さまをお招きし、喜びの日をともに過ごせましたら幸いです",
  
      ddayTitle: "Wedding Day Countdown",
      ddayLabel: "結婚式まで残り",
      daysLabel: "日",
      hoursLabel: "時間",
      minutesLabel: "分",
      secondsLabel: "秒",
  
      infoTitle: "挙式のご案内",
      labelDate: "日付",
      valueDate: "2026年7月4日（土）",
      labelTime: "時間",
      valueTime: "午前10時30分",
      labelVenue: "会場",
      valueVenue: "大宮アートグレイス ウエディングシャトー",
      labelAddress: "住所",
      valueAddress: "埼玉県さいたま市北区植竹町1丁目816-7",
  
      mapTitle: "アクセス",
      mapAddress: "埼玉県さいたま市北区植竹町1丁目816-7",
  
      galleryTitle: "ギャラリー",
  
      rsvpTitle: "ご出欠のご返信",
      formNameLabel: "お名前",
      formPhoneLabel: "電話番号",
      formEmailLabel: "メールアドレス",
      formAttendanceLabel: "ご出欠",
      formMessageLabel: "メッセージ",
      privacyLabel: "個人情報の収集および利用に同意します",
      submitBtn: "送信する",
  
      closingTitle: "ありがとうございます",
      closingMessage: "ご多用のところお心を寄せていただき 誠にありがとうございます",
      closingNames: "新郎 近藤悠市 · 新婦 パク・ヘリン",
  
      attendanceOptions: {
        placeholder: "選択してください",
        yes: "出席",
        no: "欠席"
      },
  
    }
  };
  
  let currentLang = "ko";
  const weddingDate = new Date("2026-07-04T10:30:00+09:00");
  
  // ---------- 오프닝 ----------
  const openingOverlay = document.getElementById("openingOverlay");
  const openInvitationBtn = document.getElementById("openInvitationBtn");
  const app = document.getElementById("app");
  const envelope = document.querySelector(".envelope");
  
  openInvitationBtn.addEventListener("click", () => {
    envelope.classList.add("open");
  
    setTimeout(() => {
      openingOverlay.classList.add("hidden");
      app.classList.remove("blur");
    }, 900);
  });
  
  // ---------- 언어 전환 ----------
  const langButtons = document.querySelectorAll("[data-lang-btn]");
  
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langBtn;
      applyLanguage(lang);
      window.scrollTo({ top: 0, behavior: "smooth" });
      localStorage.setItem("wedding_lang", lang);
    });
  });
  
  function applyLanguage(lang) {
    currentLang = lang;
    const t = texts[lang];
  
    document.documentElement.lang = lang;
  
    document.getElementById("openingTitle").textContent = t.openingTitle;
    document.getElementById("openingSubtitle").textContent = t.openingSubtitle;
  
    document.getElementById("heroBadge").textContent = t.heroBadge;
    document.getElementById("heroNames").textContent = t.heroNames;
    document.getElementById("heroDate").textContent = t.heroDate;
    document.getElementById("heroVenue").textContent = t.heroVenue;
  
    document.getElementById("introTitle").textContent = t.introTitle;
    document.getElementById("introBody1").textContent = t.introBody1;
    document.getElementById("introBody2").textContent = t.introBody2;
  
    document.getElementById("ddayTitle").textContent = t.ddayTitle;
    document.getElementById("ddayLabel").textContent = t.ddayLabel;
    document.getElementById("daysLabel").textContent = t.daysLabel;
    document.getElementById("hoursLabel").textContent = t.hoursLabel;
    document.getElementById("minutesLabel").textContent = t.minutesLabel;
    document.getElementById("secondsLabel").textContent = t.secondsLabel;
  
    document.getElementById("infoTitle").textContent = t.infoTitle;
    document.getElementById("labelDate").textContent = t.labelDate;
    document.getElementById("valueDate").textContent = t.valueDate;
    document.getElementById("labelTime").textContent = t.labelTime;
    document.getElementById("valueTime").textContent = t.valueTime;
    document.getElementById("labelVenue").textContent = t.labelVenue;
    document.getElementById("valueVenue").textContent = t.valueVenue;
    document.getElementById("labelAddress").textContent = t.labelAddress;
    document.getElementById("valueAddress").textContent = t.valueAddress;
  
    document.getElementById("mapTitle").textContent = t.mapTitle;
    document.getElementById("mapAddress").textContent = t.mapAddress;
  
    document.getElementById("galleryTitle").textContent = t.galleryTitle;
  
    document.getElementById("rsvpTitle").textContent = t.rsvpTitle;
    document.getElementById("formNameLabel").textContent = t.formNameLabel;
    document.getElementById("formPhoneLabel").textContent = t.formPhoneLabel;
    document.getElementById("formEmailLabel").textContent = t.formEmailLabel;
    document.getElementById("formAttendanceLabel").textContent = t.formAttendanceLabel;
    document.getElementById("formMessageLabel").textContent = t.formMessageLabel;
    document.getElementById("privacyLabel").textContent = t.privacyLabel;
    document.getElementById("submitBtn").textContent = t.submitBtn;
  
    document.getElementById("closingTitle").textContent = t.closingTitle;
    document.getElementById("closingMessage").textContent = t.closingMessage;
    document.getElementById("closingNames").textContent = t.closingNames;
  
    updateAttendanceOptions(lang);
    updateLangSections(lang);
    updateLangButtons(lang);
  }
  
  function updateLangSections(lang) {
    document.querySelectorAll("[data-lang]").forEach((section) => {
      if (section.dataset.lang === lang) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
  
  function updateLangButtons(lang) {
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.langBtn === lang);
    });
  }
  
  function updateAttendanceOptions(lang) {
    const t = texts[lang];
    const attendanceSelect = document.querySelector('select[name="attendance"]');
  
    attendanceSelect.innerHTML = `
      <option value="">${t.attendanceOptions.placeholder}</option>
      <option value="yes">${t.attendanceOptions.yes}</option>
      <option value="no">${t.attendanceOptions.no}</option>
    `;
  }
  // ----------구글 지도 생성 함수----------
  const GOOGLE_MAPS_EMBED_API_KEY = window.CONFIG?.GOOGLE_MAPS_EMBED_API_KEY || "";

  const venue = {
      koName: "아트그레이스 웨딩홀",
      jaName: "アートグレイス ウエディングシャトー",
      lat: 35.93042246196381,
      lng: 139.62352249993768,
      addressKo: "사이타마현 사이타마시 키타구 우에타케초 1-816-7",
      addressJa: "埼玉県さいたま市北区植竹町1-816-7"
  };

  function updateEmbeddedMap(lang) {
      const mapEl = document.getElementById("weddingMap");
      const q = encodeURIComponent(
          lang === "ja" ? `${venue.jaName} ${venue.addressJa}` : `${venue.koName} ${venue.addressKo}`
      );

      mapEl.src =
      `https://www.google.com/maps/embed/v1/place` +
      `?key=${GOOGLE_MAPS_EMBED_API_KEY}` +
      `&q=${q}` +
      `&center=${venue.lat},${venue.lng}` +
      `&zoom=16` +
      `&language=${lang === "ja" ? "ja" : "ko"}`;
  }
  updateEmbeddedMap(currentLang);
  
  // ---------- 디데이 ----------
  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
  
    if (diff <= 0) {
      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";
      document.getElementById("seconds").textContent = "0";
      document.getElementById("ddayLabel").textContent =
        currentLang === "ja" ? "本日は結婚式当日です" : "오늘은 결혼식 날입니다";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = String(days);
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }


  // ---------- 슬라이더 ----------
  const slideEls = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dots");
  const prevSlideBtn = document.getElementById("prevSlide");
  const nextSlideBtn = document.getElementById("nextSlide");
  
  let currentSlide = 0;
  let sliderInterval;
  
  function renderDots() {
    dotsContainer.innerHTML = "";
    slideEls.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `dot ${index === currentSlide ? "active" : ""}`;
      dot.type = "button";
      dot.addEventListener("click", () => {
        goToSlide(index);
        restartSlider();
      });
      dotsContainer.appendChild(dot);
    });
  }
  
  function goToSlide(index) {
    slideEls[currentSlide].classList.remove("active");
    currentSlide = (index + slideEls.length) % slideEls.length;
    slideEls[currentSlide].classList.add("active");
    renderDots();
  }
  
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  function startSlider() {
    sliderInterval = setInterval(nextSlide, 4000);
  }
  
  function restartSlider() {
    clearInterval(sliderInterval);
    startSlider();
  }
  
  prevSlideBtn.addEventListener("click", () => {
    prevSlide();
    restartSlider();
  });
  
  nextSlideBtn.addEventListener("click", () => {
    nextSlide();
    restartSlider();
  });
  
  
  // ---------- 초기화 ----------
  function init() {
    const savedLang = localStorage.getItem("wedding_lang");
    const browserLang = navigator.language.toLowerCase();
    const initialLang = savedLang || (browserLang.includes("ja") ? "ja" : "ko");
  
    applyLanguage(initialLang);
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
    renderDots();
    startSlider();
  }
  
  init();

  

