(() => {
  document.documentElement.classList.add('js');
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch {} },
  };

  /* ---------- Translations (EN is the HTML default) ---------- */
  const ES = {
    'nav.work': 'Proyectos',
    'work.soon': 'Próximamente',
    'nav.about': 'Sobre mí',
    'nav.archive': 'Archivo',
    'nav.contact': 'Contacto',
    'hero.scroll': 'desliza',
    'intro.title': '<span class="ln">¡Hola! Soy <span class="name"><span class="cap">L</span>ucía</span>,</span> <span class="ln">una creativa</span> <span class="ln">afincada en <span class="name"><span class="cap">B</span>oston</span>.</span>',
    'intro.line': 'Apasionada por la comunicación estratégica y la narrativa visual, mi trabajo abarca branding, publicidad, ilustración y dirección de arte.',
    'work.title': 'Proyectos destacados',
    'work.cta': 'Ver',
    'footer.case': 'Web diseñada como parte de mi propia identidad de marca:',
    'footer.caseLink': 'lee el caso →',
    'footer.top': 'arriba',
    'work.pageTitle': '<span class="cap">P</span>royectos',
    'work.viewLabel': 'Vista',
    'work.view': 'Ver',
    'filter.all': 'Todo',
    'cat.branding': 'Branding',
    'cat.campaign': 'Campaña',
    'cat.illustration': 'Ilustración',
    'desc.personal-brand': 'Identidad visual, Estrategia de marca',
    'desc.el-herrete': 'Identidad visual, Ilustración y motion graphics',
    'desc.adjuah': 'Concepto de identidad, Proyecto propio',
    'desc.givenchy': 'Estudio de ilustración de moda',
    'desc.draper': 'Cápsula de moda e ilustración',
    'desc.eight-movements': 'Diseño e ilustración de moda',
    'desc.admundi': 'Ideación de campaña, Estrategia, Diseño',
    'desc.plum-panda': 'Identidad visual',
    'archive.pageTitle': '<span class="cap">A</span>rchivo',
    'archive.photo': 'Fotografía',
    'archive.tagline': 'bocetos, fotos y visuales que me inspiran',
    'lb.close': 'Cerrar',
    'about.pageTitle': '<span class="cap">S</span>obre mí',
    'about.cap': 'la pequeña yo, ya pintando',
    'about.p1': 'Soy Lucía. Crecí entre España y Estados Unidos y ahora vivo en Boston. Recién graduada en Publicidad y Relaciones Públicas y con pasión por el arte, el diseño gráfico y la fotografía, dibujo desde que tengo memoria y hago fotos desde que tuve mi primera cámara a los catorce. La inspiración visual aparece en cualquier parte: un packaging, una obra de arte, una fotografía, la arquitectura o incluso la gente en su día a día.',
    'about.p2': 'Soy más feliz cuando estoy creando. Me atrae el trabajo práctico, sobre todo campañas, branding (¡y si puedo ilustrar, mejor!) y conceptos visuales. Soy curiosa por naturaleza y bastante organizada, así que mi lista de ideas de proyectos no para de crecer, y siempre hay algo nuevo que quiero aprender o probar.',
    'about.goalTitle': '<span class="cap">L</span>o que busco',
    'about.goal1': 'Me encantaría unirme a un equipo creativo y ayudar a dar vida a ideas y briefs, mientras sigo afinando mis habilidades visuales.',
    'about.goal2': 'Para mí es muy importante el buen ambiente: me gusta trabajar con gente que se apoya y se impulsa a crecer.',
    'about.goal3': 'Ahora mismo busco puestos junior o colaboraciones en dirección de arte, branding y creación de contenido, donde pueda aprender, crear y conocer a gente a la que le apasione esto tanto como a mí ;)',
    'about.exp': 'Experiencia',
    'about.e1': 'Head of PR, Noreste · Boston',
    'about.e2': 'Prácticas de comunicación · en remoto',
    'about.e3': 'Azafata de eventos · Málaga',
    'about.e4': 'Atención al cliente · Málaga',
    'about.e5': 'Prácticas de diseño web y contenido · Málaga',
    'about.edu': 'Formación',
    'about.ed1': 'Grado en Publicidad y RR. PP.',
    'about.ed1b': 'Universidad de Málaga',
    'about.ed3': 'Erasmus, año completo',
    'about.ed3b': 'Universidad Sapienza de Roma · Italia',
    'about.ed2': 'Design Strategy',
    'about.ed2b': 'Curso de verano · Boston University',
    'about.lang': 'Idiomas',
    'about.langs': 'Español, nativo · Inglés, nativo · Italiano, C1',
    'about.tools': 'Herramientas',
    'about.ai': 'Explorando herramientas y flujos de trabajo con IA para apoyar mi proceso creativo.',
    'about.cv': 'Descarga mi CV',
    'contact.title': '<span class="ln">¡<span class="cap">C</span>reemos</span> <span class="ln">algo</span> <span class="ln">juntos!</span>',
    'contact.lead': '¡Me encantará saber de ti! :)',
    'contact.emailLabel': 'Escríbeme a',
    'contact.findLabel': 'También en',
    'contact.or': 'o mándame un mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.thanksTitle': '¡Gracias!',
    'contact.thanksLine': 'Tu mensaje va de camino. Te responderé pronto.',
    'contact.again': 'Enviar otro',
    'contact.missing': 'Rellena los tres campos, porfa.',
    'contact.badEmail': 'Ese email no parece correcto.',
    'contact.error': 'Algo falló. Prueba a escribirme directamente al email.',
  };
  const nodes = [...document.querySelectorAll('[data-i18n],[data-i18n-html]')];
  nodes.forEach(n => { n.dataset.en = n.dataset.i18nHtml !== undefined ? n.innerHTML : n.textContent; });

  function setLang(lang) {
    document.documentElement.lang = lang;
    nodes.forEach(n => {
      const key = n.dataset.i18n || n.dataset.i18nHtml;
      const val = lang === 'es' && ES[key] ? ES[key] : n.dataset.en;
      if (n.dataset.i18nHtml !== undefined) n.innerHTML = val; else n.textContent = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(n => {
      if (n.dataset.enPh === undefined) n.dataset.enPh = n.placeholder;
      n.placeholder = lang === 'es' && ES[n.dataset.i18nPh] ? ES[n.dataset.i18nPh] : n.dataset.enPh;
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.querySelector('[data-lang-label]').textContent = lang === 'es' ? 'EN' : 'ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
    store.set('lang', lang);
  }
  const initial = 'en';   // Spanish switch turned off for now (the translations are kept above)
  if (initial === 'es') setLang('es');
  document.querySelectorAll('[data-lang-toggle]').forEach(b => b.addEventListener('click', () =>
    setLang(document.documentElement.lang === 'es' ? 'en' : 'es')));

  /* ---------- Hero logo: draw out once per session ---------- */
  const logo = document.querySelector('[data-logo]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (logo && !reduce && !store.get('logoPlayed', sessionStorage)) {
    logo.classList.add('is-drawing');
    store.set('logoPlayed', '1', sessionStorage);
  }

  /* ---------- Custom cursor: burgundy dot that trails softly, ring over links ---------- */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.className = 'cursor'; dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    document.documentElement.classList.add('has-cursor');
    let tx = -100, ty = -100, x = -100, y = -100, raf = 0;
    const ease = reduce ? 1 : 0.5;           // just a hint of lag
    const step = () => {
      x += (tx - x) * ease; y += (ty - y) * ease;
      dot.style.setProperty('--cx', x.toFixed(1) + 'px');
      dot.style.setProperty('--cy', y.toFixed(1) + 'px');
      raf = (Math.abs(tx - x) + Math.abs(ty - y) > 0.1) ? requestAnimationFrame(step) : 0;
    };
    addEventListener('pointermove', e => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      tx = e.clientX; ty = e.clientY;
      if (!dot.classList.contains('is-visible')) { x = tx; y = ty; dot.classList.add('is-visible'); }
      if (!raf) raf = requestAnimationFrame(step);
    }, { passive: true });
    document.addEventListener('pointerleave', () => dot.classList.remove('is-visible'));
    addEventListener('blur', () => dot.classList.remove('is-visible'));
    addEventListener('pointerdown', () => dot.classList.add('is-down'));
    addEventListener('pointerup', () => dot.classList.remove('is-down'));
    const hoverSel = 'a, button, [role="button"], label, summary';
    document.addEventListener('pointerover', e => { if (e.target.closest(hoverSel)) dot.classList.add('is-hover'); });
    document.addEventListener('pointerout', e => {
      const from = e.target.closest(hoverSel), to = e.relatedTarget && e.relatedTarget.closest?.(hoverSel);
      if (from && from !== to) dot.classList.remove('is-hover');
    });
  }

  /* ---------- Work page: filters + view toggle (state kept in the URL) ---------- */
  const list = document.querySelector('[data-work]');
  if (list) {
    const cards = [...list.querySelectorAll('.card')];
    const chips = [...document.querySelectorAll('[data-filter]')];
    const views = [...document.querySelectorAll('[data-view]')].filter(b => b.tagName === 'BUTTON');
    const params = new URLSearchParams(location.search);
    let filter = params.get('filter') || 'all';
    let view = ['large', 'list'].includes(params.get('view')) ? params.get('view') : 'grid';
    const apply = (push) => {
      cards.forEach(c => { c.hidden = !(filter === 'all' || c.dataset.cat === filter); });
      chips.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
      views.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
      list.dataset.view = view;
      if (push) {
        const p = new URLSearchParams();
        if (filter !== 'all') p.set('filter', filter);
        if (view !== 'grid') p.set('view', view);
        history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : '') + location.hash);
      }
    };
    chips.forEach(b => b.addEventListener('click', () => { filter = b.dataset.filter; apply(true); }));
    views.forEach(b => b.addEventListener('click', () => { view = b.dataset.view; apply(true); }));
    apply(false);

    // list view: the project's cover floats next to the cursor, in colour
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const pv = document.createElement('div');
      pv.className = 'work__preview'; pv.setAttribute('aria-hidden', 'true');
      // one stacked image per project, so switching rows is a soft crossfade (no reloading/flicker)
      const shots = cards.map(c => {
        const im = document.createElement('img'); const src = c.querySelector('img');
        im.src = src.currentSrc || src.src; im.alt = ''; im.decoding = 'async'; pv.appendChild(im); return im;
      });
      document.body.appendChild(pv);
      const W = 200, H = 250;
      let tx = 0, ty = 0, x = 0, y = 0, raf = 0, first = true;
      const step = () => {
        x += (tx - x) * 0.18; y += (ty - y) * 0.18;
        pv.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        raf = (Math.abs(tx - x) + Math.abs(ty - y) > 0.3) ? requestAnimationFrame(step) : 0;
      };
      const track = e => {
        tx = Math.min(e.clientX + 28, innerWidth - W - 16);
        ty = Math.max(16, Math.min(e.clientY - H / 2, innerHeight - H - 16));
        if (first) { x = tx; y = ty; first = false; }
        if (!raf) raf = requestAnimationFrame(step);
      };
      cards.forEach((c, i) => {
        c.querySelector('.card__link').addEventListener('pointerenter', e => {
          if (list.dataset.view !== 'list') return;
          shots.forEach((s, k) => s.classList.toggle('is-active', k === i));
          track(e); pv.classList.add('is-on');
        });
      });
      list.addEventListener('pointermove', e => { if (list.dataset.view === 'list') track(e); });
      list.addEventListener('pointerleave', () => { pv.classList.remove('is-on'); first = true; });
    }
  }

  /* ---------- Archive: set toggle + lightbox with filmstrip ---------- */
  const sets = [...document.querySelectorAll('[data-arc]')];
  if (sets.length) {
    const chipsA = [...document.querySelectorAll('[data-set]')];
    const show = (k, push) => {
      sets.forEach(s => { s.hidden = s.dataset.arc !== k; });
      chipsA.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.set === k)));
      sets.find(s => !s.hidden)?.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
      if (push) history.replaceState(null, '', location.pathname + (k === 'illu' ? '?set=illustration' : '') + location.hash);      document.documentElement.classList.toggle('arc-olive', k === 'illu');
      placeWash(); oliveScroll();
    };
    // olive backdrop behind the sketches (see CSS: html[data-olive])
    const head = document.querySelector('.arc__head'), wash = document.querySelector('.arc__wash');
    function placeWash() { if (head && wash) wash.style.setProperty('--wash-top', (head.offsetTop + head.offsetHeight + 34) + 'px'); }
    function oliveScroll() {
      const root = document.documentElement, mode = root.dataset.olive;
      if (!root.classList.contains('arc-olive')) { root.classList.remove('olive-deep'); return; }
      if (mode === 'c') {
        const t = Math.min(1, Math.max(0, scrollY / 520));
        root.style.setProperty('--olive-t', t.toFixed(3));
        root.classList.toggle('olive-deep', t > .6);
      } else if (mode === 'b' && head) {
        root.classList.toggle('olive-deep', scrollY > head.offsetTop + head.offsetHeight + 120);
      }
    }
    addEventListener('scroll', oliveScroll, { passive: true });
    addEventListener('resize', placeWash);
    chipsA.forEach(b => b.addEventListener('click', () => show(b.dataset.set, true)));
    show(new URLSearchParams(location.search).get('set') === 'illustration' ? 'illu' : 'photo', false);
  }

  /* ---------- Lookbook: pages turn like a magazine (click, drag/swipe, buttons or arrow keys) ---------- */
  document.querySelectorAll('[data-book]').forEach(book => {
    const leaves = [...book.querySelectorAll('.leaf')];
    const wrap = book.closest('.pj__book');
    const prevB = wrap.querySelector('[data-book-prev]'), nextB = wrap.querySelector('[data-book-next]'), count = wrap.querySelector('[data-book-count]');
    const max = leaves.length - (leaves[leaves.length - 1].querySelector('.leaf__b--blank') ? 1 : 0);   // the last page stays on the right
    const pages = leaves.length * 2 - (leaves[leaves.length - 1].querySelector('.leaf__b--blank') ? 1 : 0);
    let k = 0;
    const pad = n => String(n).padStart(2, '0');
    const paint = (dir) => {
      leaves.forEach((l, i) => {
        const was = l.classList.contains('is-flipped'), now = i < k;
        if (was !== now) { l.classList.add('is-turning'); setTimeout(() => l.classList.remove('is-turning'), 1000); }
        l.classList.toggle('is-flipped', now);
      });
      book.classList.toggle('is-front', k === 0);
      prevB.disabled = k === 0; nextB.disabled = k === max;
      count.textContent = k === 0 ? pad(1) + ' / ' + pad(pages) : pad(2 * k) + '–' + pad(Math.min(2 * k + 1, pages)) + ' / ' + pad(pages);
    };
    const go = d => { const n = Math.max(0, Math.min(max, k + d)); if (n !== k) { k = n; paint(d); } };
    prevB.addEventListener('click', () => go(-1)); nextB.addEventListener('click', () => go(1));
    let sx = null, moved = false;
    book.addEventListener('pointerdown', e => { sx = e.clientX; moved = false; });
    book.addEventListener('pointermove', e => { if (sx !== null && Math.abs(e.clientX - sx) > 8) moved = true; });
    book.addEventListener('pointerup', e => {
      if (sx === null) return;
      const dx = e.clientX - sx; sx = null;
      if (moved && Math.abs(dx) > 40) { go(dx < 0 ? 1 : -1); return; }
      const r = book.getBoundingClientRect();
      // click the right-hand page to go on, the left-hand one to go back (closed cover: anywhere goes on)
      if (k === 0) go(1); else go(e.clientX > r.left + r.width / 2 ? 1 : -1);
    });
    addEventListener('keydown', e => {
      const r = book.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;   // only while the book is on screen
      if (document.documentElement.classList.contains('lb-open')) return;
      if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1);
    });
    paint(0);
  });

  /* ---------- Lightbox: archive sets, and click-to-zoom images on project pages ---------- */
  const lb = document.querySelector('[data-lightbox]');
  if (lb) {
    const big = lb.querySelector('.lb__img'), strip = lb.querySelector('[data-lb-strip]'), count = lb.querySelector('[data-lb-count]');
    let items = [], cur = 0, lastFocus = null;
    // zoom: wheel/pinch zooms around the cursor, click toggles 2.5×, moving pans.
    // Everything eases toward a target on each animation frame, so panning glides instead of jumping.
    let z = 1, tz = 1, ox = 50, oy = 50, tox = 50, toy = 50, raf = 0;
    const dotEl = () => document.querySelector('.cursor');
    const frame = big.parentElement;
    const aim = (e) => {
      const r = frame.getBoundingClientRect();
      tox = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100));
      toy = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
    };
    const paint = () => {
      z += (tz - z) * 0.16; ox += (tox - ox) * 0.12; oy += (toy - oy) * 0.12;
      if (Math.abs(tz - z) < 0.001) z = tz;
      if (Math.abs(tox - ox) < 0.02) ox = tox;
      if (Math.abs(toy - oy) < 0.02) oy = toy;
      big.style.transformOrigin = ox.toFixed(2) + '% ' + oy.toFixed(2) + '%';
      big.style.transform = 'scale(' + z.toFixed(4) + ')';
      raf = (z !== tz || ox !== tox || oy !== toy) ? requestAnimationFrame(paint) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(paint); };
    const setZoom = (nz, e) => {
      const wasOut = tz <= 1.01;
      tz = Math.min(4, Math.max(1, nz));
      if (e) { aim(e); if (wasOut) { ox = tox; oy = toy; } }
      big.classList.toggle('is-zoomed', tz > 1.01);
      const d = dotEl(); if (d) { d.classList.toggle('is-zoom-in', tz <= 1.01); d.classList.toggle('is-zoom-out', tz > 1.01); }
      kick();
    };
    const resetZoom = () => {
      cancelAnimationFrame(raf); raf = 0; z = tz = 1; ox = oy = tox = toy = 50;
      big.style.transform = ''; big.style.transformOrigin = ''; big.classList.remove('is-zoomed');
    };
    big.addEventListener('click', e => { e.stopPropagation(); setZoom(tz > 1.01 ? 1 : 2.5, e); });
    big.addEventListener('wheel', e => { e.preventDefault(); setZoom(tz * Math.exp(-e.deltaY * 0.0025), e); }, { passive: false });
    big.addEventListener('pointermove', e => { if (tz > 1.01) { aim(e); kick(); } });
    big.addEventListener('pointerenter', () => { const d = dotEl(); if (d) d.classList.add(tz > 1.01 ? 'is-zoom-out' : 'is-zoom-in'); });
    big.addEventListener('pointerleave', () => { const d = dotEl(); if (d) d.classList.remove('is-zoom-in', 'is-zoom-out'); });
    const go = (i) => {
      resetZoom();
      cur = (i + items.length) % items.length;
      const im = items[cur].querySelector('img');
      big.style.opacity = 0;
      const src = im.dataset.full || im.src;
      const pre = new Image(); pre.onload = pre.onerror = () => { big.src = src; big.style.opacity = 1; }; pre.src = src;
      count.textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
      [...strip.children].forEach((t, k) => t.classList.toggle('is-current', k === cur));
      const th = strip.children[cur];
      if (th) strip.scrollTo({ left: th.offsetLeft - strip.clientWidth / 2 + th.clientWidth / 2 });
    };
    const open = (list, i, setName) => {
      items = list;
      strip.innerHTML = '';
      items.forEach((it, k) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'lb__thumb'; b.setAttribute('aria-label', 'Image ' + (k + 1));
        const im = document.createElement('img'); im.src = it.querySelector('img').src; im.alt = ''; b.appendChild(im);
        b.addEventListener('click', () => go(k)); strip.appendChild(b);
      });
      lastFocus = document.activeElement;
      lb.dataset.set = setName || '';
      lb.hidden = false; document.documentElement.style.overflow = 'hidden'; document.documentElement.classList.add('lb-open');
      requestAnimationFrame(() => lb.classList.add('is-open'));
      go(i); lb.querySelector('[data-lb-close]').focus();
    };
    const close = () => {
      lb.classList.remove('is-open'); document.documentElement.style.overflow = ''; document.documentElement.classList.remove('lb-open'); resetZoom();
      setTimeout(() => { lb.hidden = true; }, 350); lastFocus?.focus();
    };
    sets.forEach(s => { const list = [...s.querySelectorAll('.arc__item')]; list.forEach((it, i) => it.addEventListener('click', () => open(list, i, s.dataset.arc))); });
    const zooms = [...document.querySelectorAll('[data-zoom]')];
    zooms.forEach((it, i) => it.addEventListener('click', () => open(zooms, i, 'zoom')));
    lb.querySelector('[data-lb-close]').addEventListener('click', close);
    lb.querySelector('[data-lb-prev]').addEventListener('click', () => go(cur - 1));
    lb.querySelector('[data-lb-next]').addEventListener('click', () => go(cur + 1));
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb__stage')) close(); });
    addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') go(cur + 1); else if (e.key === 'ArrowLeft') go(cur - 1);
    });
    let sx = 0;
    lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) go(cur + (d < 0 ? 1 : -1)); }, { passive: true });
  }

  /* ---------- Burgundy seams: rise with scroll momentum, settle when you stop ---------- */
  const makeSeam = (el, also) => {
    let lag = 0, target = 0, raf = 0;
    const set = v => { el.style.setProperty('--lag', v); if (also) document.documentElement.style.setProperty('--endlag', v); };
    const tick = () => {
      lag += (target - lag) * 0.2;
      target *= 0.85;
      set(lag.toFixed(2));
      raf = (lag > 0.1 || target > 0.1) ? requestAnimationFrame(tick) : (set(0), 0);
    };
    return (amount) => { target = Math.min(70, target + amount); if (!raf) raf = requestAnimationFrame(tick); };
  };
  if (!reduce) {
    const seam = document.querySelector('.seam');
    const pushHero = seam && makeSeam(seam);
    const endSeam = document.createElement('div'); endSeam.className = 'end-seam'; endSeam.setAttribute('aria-hidden', 'true');
    document.body.appendChild(endSeam);
    const pushEnd = makeSeam(endSeam, true);
    // archive: mini seam hanging from the burgundy line above the olive
    const arcSeam = document.querySelector('.arc__seam'), pushArc = arcSeam && makeSeam(arcSeam);
    // about: a mini seam on the top edge of every sheet that slides in
    const sheetSeams = [...document.querySelectorAll('.sheet__seam')].map(el => ({ el, push: makeSeam(el) }));
    let last = scrollY;
    addEventListener('scroll', () => {
      const v = scrollY - last; last = scrollY;
      if (pushHero && v > 0 && scrollY < innerHeight * 1.2) pushHero(v * 0.35);
      if (v > 0) sheetSeams.forEach(({ el, push }) => {
        const y = el.getBoundingClientRect().top;
        if (y > 2 && y < innerHeight) push(v * 0.3);     // only while the sheet is still sliding up
      });
      if (pushArc && v > 0 && document.documentElement.classList.contains('arc-olive')) {
        const y = arcSeam.getBoundingClientRect().top;
        if (y > -40 && y < innerHeight) pushArc(v * 0.3);
      }
    }, { passive: true });
    // at the very bottom there's nothing left to scroll, so listen to the wheel / touch instead
    const atEnd = () => innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
    addEventListener('wheel', e => { if (e.deltaY > 0 && atEnd()) pushEnd(Math.min(e.deltaY, 60) * 0.35); }, { passive: true });
    let ty0 = 0;
    addEventListener('touchstart', e => { ty0 = e.touches[0].clientY; }, { passive: true });
    addEventListener('touchmove', e => { const d = ty0 - e.touches[0].clientY; ty0 = e.touches[0].clientY; if (d > 0 && atEnd()) pushEnd(d * 0.5); }, { passive: true });
  }

  /* ---------- Contact form ---------- */
  const form = document.querySelector('[data-contact]');
  if (form) {
    const note = form.querySelector('[data-contact-note]');
    const thanks = document.querySelector('[data-contact-thanks]');
    const hens = document.querySelector('[data-chickens]');
    const t = (k, en) => (document.documentElement.lang === 'es' && ES[k]) || en;
    const done = () => {
      form.hidden = true; thanks.hidden = false; form.reset();
      if (hens) { hens.classList.remove('is-hop'); void hens.offsetWidth; hens.classList.add('is-hop'); }
    };
    form.addEventListener('input', e => { e.target.closest('.field')?.classList.remove('is-invalid'); note.textContent = ''; });
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const f = form.elements; let bad = false;
      ['name', 'email', 'message'].forEach(n => { const empty = !f[n].value.trim(); f[n].closest('.field').classList.toggle('is-invalid', empty); bad = bad || empty; });
      if (bad) { note.textContent = t('contact.missing', 'Please fill in all three, thank you.'); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value.trim())) { f.email.closest('.field').classList.add('is-invalid'); note.textContent = t('contact.badEmail', 'That email doesn’t look quite right.'); return; }
      if (f._gotcha.value) return;   // a bot filled the hidden field
      const endpoint = form.dataset.endpoint;
      if (!endpoint) {
        // no form service connected yet: open the visitor's email app with everything filled in
        const subject = 'Hello from ' + f.name.value.trim();
        const body = f.message.value.trim() + '\n\n— ' + f.name.value.trim() + ' (' + f.email.value.trim() + ')';
        location.href = 'mailto:luciatapiaag@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        done(); return;
      }
      const btn = form.querySelector('.contact__send'); btn.disabled = true;
      try {
        const r = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!r.ok) throw 0; done();
      } catch { note.textContent = t('contact.error', 'Something went wrong. Try emailing me directly.'); }
      btn.disabled = false;
    });
    document.querySelector('[data-contact-again]')?.addEventListener('click', () => { thanks.hidden = true; form.hidden = false; form.elements.name.focus(); });
  }

  /* ---------- Project pages: hard-cut slideshows (instant swap, no easing) ---------- */
  document.querySelectorAll('[data-cut]').forEach(box => {
    const slides = [...box.querySelectorAll('.cut__slide')]; if (slides.length < 2) return;
    let i = 0, timer = 0;
    const step = () => { slides[i].classList.remove('is-on'); i = (i + 1) % slides.length; slides[i].classList.add('is-on'); };
    const ms = +box.dataset.interval || 1600;
    slides.forEach(s => { s.loading = 'eager'; });            // so every cut is instant, nothing pops in late
    let seen = false, held = false;
    const run = () => { clearInterval(timer); if (seen && !held && !reduce) timer = setInterval(step, ms); };
    new IntersectionObserver(([e]) => { seen = e.isIntersecting; run(); }).observe(box);
    // press and hold (mouse or finger) to pause on the current image; let go to carry on
    const hold = (v) => { held = v; box.classList.toggle('is-held', v); run(); };
    box.addEventListener('pointerdown', e => { e.preventDefault(); hold(true); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(t => box.addEventListener(t, () => held && hold(false)));
    box.addEventListener('contextmenu', e => e.preventDefault());
  });

  /* ---------- About: sticky sheets ---------- */
  const s1 = document.querySelector('.about__s1'), hold = document.querySelector('[data-hold]');
  if (s1) {
    const goal = hold && hold.querySelector('.about__goal');
    const navEl = document.querySelector('[data-nav]');
    const fit = () => {};
    const onScroll = () => {
      // as the olive sheet slides up, the beige content drifts up a little with it (instead of sitting still)
      const r = hold ? hold.getBoundingClientRect() : { bottom: 0 };
      const q = Math.min(1, Math.max(0, (2 * innerHeight - r.bottom) / innerHeight));
      goal && goal.style.setProperty('--lift', (-q * innerHeight * 0.22).toFixed(1) + 'px');
      // cream nav while it's over an olive sheet
      if (navEl) {
        const under = document.elementsFromPoint(innerWidth / 2, 40).find(e => e.dataset && e.dataset.sheet);
        navEl.classList.toggle('nav-light', !!under && under.dataset.sheet === 'olive');
      }
    };
    fit(); onScroll();
    addEventListener('resize', () => { fit(); onScroll(); });
    addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Back to top (footer button) ---------- */
  document.querySelectorAll('[data-to-top]').forEach(b => b.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* ---------- Nav: transparent over hero, solid after ---------- */
  const nav = document.querySelector('[data-nav]');
  const hero = document.querySelector('.hero');
  if (nav && hero) {
    new IntersectionObserver(([e]) => nav.classList.toggle('is-solid', !e.isIntersecting),
      { rootMargin: '-70px 0px 0px 0px' }).observe(hero);
  } else nav?.classList.add('is-solid');

  /* ---------- Ticker: duplicate row for a seamless loop ---------- */
  document.querySelectorAll('[data-ticker] .ticker__row').forEach(row => {
    [...row.children].forEach(img => {
      const c = img.cloneNode(true); c.setAttribute('aria-hidden', 'true'); row.appendChild(c);
    });
  });

  /* ---------- Gentle reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
