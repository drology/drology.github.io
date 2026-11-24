/* =========================================================
   Dr.Ology — interactions
   ========================================================= */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     Product data (sourced from Naver Smart Store, 2026-11-23)
     --------------------------------------------------------- */
  var STORE = 'https://smartstore.naver.com/drchoice';

  var PRODUCTS = {
    collagen: {
      img: 'assets/p-collagen-1.jpg',
      alt: '닥터올로지 올인원 저분자 피쉬 콜라겐 1박스',
      kicker: 'All In One Collagen',
      title: '올인원 저분자 피쉬 콜라겐',
      line: '블루베리 맛 액상 스틱 · 1일 1포 · 1박스 14포',
      priceLabel: '1박스 기준',
      rate: '80%', price: '16,900원', orig: '86,000원',
      chips: ['캐나다산 300달톤', '3,000mg', '5가지 원료', 'HACCP 2019-2-9170'],
      rows: [
        ['구성', '1박스 14포 — 1일 1포 기준 2주분. 2박스(28포) · 3박스(42포) · 4박스(56포) 구성도 판매 중입니다.'],
        ['1포 기준', '캐나다산 어린 콜라겐 3,000mg(300달톤, 저분자) · 프랑스산 엘라스틴 100mg · 미국산 히알루론산 120mg · 프랑스산 비오틴 300µg · 영국산 비타민C 200mg'],
        ['제형·맛', '블루베리 맛 액상 스틱 (계량 없이 그대로 섭취)'],
        ['섭취 방법', '1일 1포'],
        ['인증', 'HACCP 2019-2-9170 · 한국식품안전관리인증원장'],
        ['가격', '1박스 16,900원 / 2박스 32,500원 / 3박스 46,900원 / 4박스 59,900원 (박스당 최저 14,975원)'],
        ['배송', '네이버 내일배송 · 배송비 3,000원 (129,900원 이상 무료, 제주 3,000원·도서산간 4,000원 추가)'],
        ['평점', '4.84 · 리뷰 2,522건 (1박스 기준)']
      ],
      type: '제품 유형: 일반식품 (건강기능식품이 아닙니다)',
      url: STORE + '/products/9163172944'
    },
    set: {
      img: 'assets/p-set.jpg',
      alt: '닥터올로지 콜라겐 & 글루타치온 세트',
      kicker: 'Collagen & Glutathione',
      title: '콜라겐 + 글루타치온 세트',
      line: '콜라겐 2박스 + 영국산 글루타치온 600mg × 30정',
      priceLabel: '1개월 세트',
      rate: '80%', price: '49,900원', orig: '260,000원',
      chips: ['콜라겐 28포', '글루타치온 500mg', '영국산 비타민C'],
      rows: [
        ['구성', '올인원 콜라겐 2박스(총 28포) + 영국산 L-글루타치온&비타민C 600mg × 30정'],
        ['글루타치온 1정', '영국산 순수 환원형 L-글루타치온 500mg · 영국산 비타민C'],
        ['섭취 방법', '콜라겐 1일 1포 + 글루타치온 1일 1정'],
        ['제형', '콜라겐 액상 스틱 + 글루타치온 정'],
        ['인증', 'HACCP 인증 시설 생산'],
        ['배송', '네이버 내일배송 · 배송비 3,000원 (400,000원 이상 무료)'],
        ['평점', '4.91 · 리뷰 467건']
      ],
      type: '제품 유형: 일반식품 (건강기능식품이 아닙니다)',
      url: STORE + '/products/10019764450'
    },
    melaniq: {
      img: 'assets/p-melatonin.jpg',
      alt: '닥터올로지 멜라니크 식물성 멜라토닌 60정',
      kicker: 'Melaniq',
      title: '멜라니크',
      line: '식물성 멜라토닌 2mg · 1일 1정 · 60정(2개월분)',
      priceLabel: '2개월분',
      rate: '80%', price: '16,500원', orig: '86,000원',
      chips: ['미국산 멜라토닌', 'L-트립토판 60mg', 'PTP 개별 포장'],
      rows: [
        ['구성', '500mg × 60정 (2개월분)'],
        ['1정 기준', '미국산 식물성 멜라토닌(타트체리) 2mg · 미국산 L-트립토판 60mg · L-테아닌 50mg · 마그네슘 50mg · 독일산 비타민B6 1.5mg · 이탈리아산 시계꽃 · 캐모마일 · 레몬밤'],
        ['섭취 방법', '1일 1정'],
        ['포장', 'PTP 개별 포장'],
        ['생산', 'HACCP 인증 제조 시설'],
        ['배송', '무료배송'],
        ['평점', '4.92 · 리뷰 1,360건']
      ],
      url: STORE + '/products/13142127079'
    },
    folate: {
      img: 'assets/p-folate.jpg',
      alt: '닥터올로지 올인원 활성 엽산 800 비타민D 60정',
      kicker: 'Active Folate 800',
      title: '올인원 활성 엽산 800 + 비타민D',
      line: 'Quatrefolic® 800µg DFE · 1일 1정 · 60정(2개월분)',
      priceLabel: '2개월분',
      rate: '80%', price: '16,900원', orig: '86,000원',
      chips: ['활성형 엽산 800µg', '비타민D 1,000IU', '비타민 B군 5종'],
      rows: [
        ['구성', '500mg × 60정 (2개월분)'],
        ['1정 기준', '이탈리아산 활성형 엽산(Quatrefolic®) 800µg DFE · 비타민B1·B2·B6·B12·C · 비오틴 · 아연 · 스위스산 비타민D 1,000IU'],
        ['섭취 방법', '1일 1정'],
        ['개발', '산부인과·가정의학과 전문의 공동 개발'],
        ['생산', 'GMP 인증 건강기능식품 전문 제조 시설'],
        ['배송', '무료배송'],
        ['평점', '4.91 · 리뷰 5,264건']
      ],
      url: STORE + '/products/11665105278'
    },
    glutathione: {
      img: 'assets/p-glutathione.jpg',
      alt: '닥터올로지 영국산 글루타치온 비타민C 600mg 30정',
      kicker: 'Glutathione 600',
      title: '영국산 글루타치온 비타민C',
      line: '순수 환원형 L-글루타치온 500mg · 600mg × 30정',
      priceLabel: '1개월분',
      rate: '80%', price: '19,900원', orig: '100,000원',
      chips: ['영국산 원료', '30정', '1일 1정'],
      rows: [
        ['구성', '600mg × 30정 (1개월분)'],
        ['1정 기준', '영국산 순수 환원형 L-글루타치온 500mg · 영국산 비타민C'],
        ['섭취 방법', '1일 1정'],
        ['다른 구성', '2개월 37,900원 · 3박스 54,900원 · 4박스 69,900원'],
        ['배송', '네이버 내일배송 · 배송비 3,000원 (무료 기준은 상품 페이지 참고)'],
        ['평점', '4.87 · 리뷰 2,398건']
      ],
      type: '제품 유형: 일반식품 (건강기능식품이 아닙니다)',
      url: STORE + '/products/9478079588'
    },
    chondroitin: {
      img: 'assets/p-chondroitin.jpg',
      alt: '닥터올로지 올인원 콘드로이친 14포',
      kicker: 'Chondroitin Complex',
      title: '올인원 콘드로이친',
      line: '보스웰리아 · 커큐민 · 초록입홍합 · 소연골 · 14포',
      priceLabel: '1개 기준 · 일시품절',
      rate: '', price: '14,900원', orig: '86,000원',
      chips: ['14포', '1일 1포', '복합 원료'],
      rows: [
        ['구성', '14포 (1개)'],
        ['원료', '콘드로이친 · 보스웰리아 · 커큐민 · 초록입홍합 · 소연골'],
        ['섭취 방법', '1일 1포'],
        ['구성별 가격', '1개 14,900원 · 2개 29,500원 · 3개 43,900원 · 4개 55,900원'],
        ['판매 상태', '일시품절 (2026년 11월 23일 기준) — 재입고 여부는 스토어에서 확인해 주세요'],
        ['평점', '4.92 · 리뷰 653건']
      ],
      url: STORE + '/products/11701537979'
    }
  };

  /* ---------------------------------------------------------
     Header + progress + mobile bar
     --------------------------------------------------------- */
  var header = $('#siteHeader');
  var progress = $('#progress span');
  var mobileBar = $('#mobileBar');
  var hero = $('#top');

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-scrolled', y > 12);

    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
    }

    if (mobileBar && hero) {
      var bottom = hero.offsetTop + hero.offsetHeight;
      mobileBar.classList.toggle('is-visible', y > bottom - 120);
    }

    if (!reduced) {
      $$('.parallax').forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        var speed = parseFloat(el.getAttribute('data-speed') || '0.04');
        var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------------------------------------------------------
     Mobile menu
     --------------------------------------------------------- */
  var toggle = $('#menuToggle');
  var nav = $('#nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------
     Number counters
     --------------------------------------------------------- */
  var counters = $$('.stat-num');
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var comma = el.getAttribute('data-comma') === '1';
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;

    function fmt(v) {
      var out = comma
        ? Math.round(v).toLocaleString('ko-KR')
        : v.toFixed(decimals);
      return out + suffix;
    }
    if (reduced || isNaN(target)) { el.textContent = fmt(target || 0); return; }

    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---------------------------------------------------------
     Tabs / filtering
     --------------------------------------------------------- */
  var tabs = $$('.tab');
  var products = $$('.product');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      var filter = tab.getAttribute('data-filter');
      products.forEach(function (p) {
        var cat = p.getAttribute('data-cat');
        var show = filter === 'all' || cat === filter || cat === 'all';
        p.classList.toggle('is-hidden', !show);
        if (show) {
          p.classList.remove('is-visible');
          // re-trigger the entrance for a soft fade-in
          void p.offsetWidth;
          p.style.opacity = '1';
          p.style.transform = 'none';
        }
      });
    });
  });

  /* ---------------------------------------------------------
     Signature gallery
     --------------------------------------------------------- */
  var sigImage = $('#sigImage');
  var thumbs = $$('.sig-thumbs button');
  thumbs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      thumbs.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      if (!sigImage) return;
      sigImage.classList.add('is-fading');
      var next = btn.getAttribute('data-img');
      var alt = btn.getAttribute('data-alt') || '';
      setTimeout(function () {
        sigImage.src = next;
        sigImage.alt = alt;
        sigImage.classList.remove('is-fading');
      }, 200);
    });
  });

  /* ---------------------------------------------------------
     Pack selectors (signature + product cards)
     --------------------------------------------------------- */
  function bindPacks(selector, scopeSelector, unitLabelSelector) {
    $$(selector).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var scope = btn.closest(scopeSelector);
        if (!scope) return;
        $$(selector, scope).forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        var price = btn.getAttribute('data-price');
        var orig = btn.getAttribute('data-orig');
        var rate = btn.getAttribute('data-rate');
        var review = btn.getAttribute('data-review');
        var stars = btn.getAttribute('data-stars');
        var url = btn.getAttribute('data-url');
        var unit = btn.getAttribute('data-unit');

        var pEl = $('.price', scope);
        if (pEl && price) pEl.innerHTML = price + '<em>원</em>';
        var oEl = $('.price-orig', scope);
        if (oEl && orig) oEl.textContent = orig + '원';
        var rEl = $('[data-rate-label]', scope) || $('.rate', scope);
        if (rEl && rate) { rEl.textContent = rate + '%'; rEl.style.display = ''; }
        var rvEl = $('[data-review-label]', scope);
        if (rvEl && review) rvEl.textContent = review;
        var stEl = $('[data-stars-label]', scope);
        if (stEl && stars) stEl.textContent = stars;
        var unEl = $('[data-unit-label]', scope);
        if (unEl && unit) unEl.textContent = unit;
        var link = $('[data-store-link]', scope);
        if (link && url) link.setAttribute('href', url);
      });
    });
  }
  bindPacks('.pack', '.sig-buy');
  bindPacks('.mini-pack', '.product');

  /* ---------------------------------------------------------
     Modal
     --------------------------------------------------------- */
  var modal = $('#modal');
  var lastFocus = null;

  function openModal(key) {
    var p = PRODUCTS[key];
    if (!p || !modal) return;
    lastFocus = document.activeElement;

    var img = $('#modalImg');
    img.src = p.img; img.alt = p.alt;
    $('#modalKicker').textContent = p.kicker;
    $('#modalTitle').textContent = p.title;
    $('#modalLine').textContent = p.line;

    var priceHtml = '';
    if (p.rate) priceHtml += '<span class="rate">' + p.rate + '</span>';
    priceHtml += '<span>' + p.price + '</span>';
    if (p.orig) priceHtml += '<span class="price-orig">' + p.orig + '</span>';
    priceHtml += '<span class="free-ship">' + p.priceLabel + '</span>';
    $('#modalPrice').innerHTML = priceHtml;

    $('#modalChips').innerHTML = p.chips.map(function (c) { return '<li>' + c + '</li>'; }).join('');

    $('#modalSections').innerHTML = p.rows.map(function (r) {
      return '<div class="modal-row"><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>';
    }).join('');

    $('#modalType').textContent = p.type
      || '제품 유형: 상품 페이지의 상품정보 참고 (효능·효과를 표방하지 않습니다)';
    $('#modalStore').setAttribute('href', p.url);

    modal.hidden = false;
    document.body.classList.add('is-locked');
    var closeBtn = $('.modal-close', modal);
    if (closeBtn) closeBtn.focus();
    modal.addEventListener('keydown', trapFocus);
    modal.addEventListener('keydown', escClose);
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    modal.removeEventListener('keydown', trapFocus);
    modal.removeEventListener('keydown', escClose);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function escClose(e) { if (e.key === 'Escape') closeModal(); }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusables = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
      .filter(function (el) { return el.offsetParent !== null; });
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  $$('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn.getAttribute('data-open')); });
  });
  $$('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  /* ---------------------------------------------------------
     Smooth anchors with header offset
     --------------------------------------------------------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#' || a.hasAttribute('data-close')) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 78;
      window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
      if (history.replaceState) history.replaceState(null, '', id);
    });
  });
})();
