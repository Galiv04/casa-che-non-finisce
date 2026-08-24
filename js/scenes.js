/* ============ SCENES — sfondi pixel/blocchi procedurali ============
   "La Casa che non Finisce" — l'appartamento di Daniele divorato dal Grigiore.
   Palette generale desaturata; UN tocco di colore acceso per painter.
   L'eclissi qui è il GRIGIORE che avanza: overlay grigio + vignettatura. */

const Scenes = (() => {

  // RNG con seme, per texture riproducibili
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  /* shade(colore, fattore) — schiarisce o scurisce.
     Accetta SIA '#rrggbb' SIA 'rgb(r,g,b)', e questo non è un vezzo: shade()
     restituisce 'rgb(...)', e blocks() richiama shade() sul colore che riceve.
     Finché leggeva solo l'esadecimale, un blocks(..., shade('#3a3a42', f), ...)
     faceva parseInt('gb(58,58,66)', 16) = NaN, NaN>>16&255 = 0, e usciva
     rgb(0,0,0): un nero PERFETTAMENTE VALIDO, che nessun controllo intercetta
     (lezione 63) e che sullo sfondo nero del riquadro sembra un buco (lezione 55).
     La pedana del trono e le file di divani della cattedrale erano nere così.
     Un ramo qui sana tutti i punti di chiamata insieme, presenti e futuri. */
  function shade(col, f) {
    let r, g, b;
    if (col[0] === '#') {
      const n = parseInt(col.slice(1), 16);
      r = (n >> 16) & 255; g = (n >> 8) & 255; b = n & 255;
    } else {
      const m = col.match(/-?\d+/g) || [0, 0, 0];
      r = +m[0] || 0; g = +m[1] || 0; b = +m[2] || 0;
    }
    r = Math.max(0, Math.min(255, Math.round(r * f)));
    g = Math.max(0, Math.min(255, Math.round(g * f)));
    b = Math.max(0, Math.min(255, Math.round(b * f)));
    return `rgb(${r},${g},${b})`;
  }

  // Riempi area con blocchi stile minecraft (variazione di tono per blocco)
  function blocks(ctx, x, y, w, h, color, blockSize, rand, variance = 0.18) {
    for (let by = y; by < y + h; by += blockSize) {
      for (let bx = x; bx < x + w; bx += blockSize) {
        const f = 1 - variance / 2 + rand() * variance;
        ctx.fillStyle = shade(color, f);
        ctx.fillRect(bx, by, Math.min(blockSize, x + w - bx), Math.min(blockSize, y + h - by));
        // bordo superiore più chiaro (effetto 3D blocco)
        ctx.fillStyle = shade(color, f * 1.15);
        ctx.fillRect(bx, by, Math.min(blockSize, x + w - bx), 2);
      }
    }
  }

  function skyGradient(ctx, W, H, top, bottom, bands = 8) {
    for (let i = 0; i < bands; i++) {
      const t = i / (bands - 1);
      const c1 = parseInt(top.slice(1), 16), c2 = parseInt(bottom.slice(1), 16);
      const r = Math.round(((c1 >> 16) & 255) * (1 - t) + ((c2 >> 16) & 255) * t);
      const g = Math.round(((c1 >> 8) & 255) * (1 - t) + ((c2 >> 8) & 255) * t);
      const b = Math.round((c1 & 255) * (1 - t) + (c2 & 255) * t);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(0, Math.floor(H * i / bands), W, Math.ceil(H / bands) + 1);
    }
  }

  function stars(ctx, W, H, rand, n = 60) {
    for (let i = 0; i < n; i++) {
      const x = Math.floor(rand() * W), y = Math.floor(rand() * H * 0.7);
      ctx.fillStyle = rand() > 0.8 ? '#d8d8dc' : '#8a8a96';
      const s = rand() > 0.9 ? 3 : 2;
      ctx.fillRect(x, y, s, s);
    }
  }

  /* ---------- IL GRIGIORE ----------
     Fase 0 = il colore resiste. Fase 1 = il Grigiore ha vinto quasi tutto.
     La imposta il motore scena per scena (Engine.eclipsePhaseFor).
     Niente luna: qui l'avanzare della notte DESATURA il mondo. */
  let eclipsePhase = 0.3;
  function setEclipse(p) { eclipsePhase = Math.max(0, Math.min(1, p)); }
  function getEclipse() { return eclipsePhase; }

  // Velo del Grigiore: desaturazione progressiva + vignettatura grigia
  function grigiore(ctx, W, H, p) {
    if (p <= 0.02) return;
    // velo grigio uniforme che "beve" la saturazione
    ctx.fillStyle = `rgba(138,138,144,${0.05 + p * 0.20})`;
    ctx.fillRect(0, 0, W, H);
    // vignettatura a cornici concentriche (mai un bordo netto)
    const layers = 5;
    for (let i = 0; i < layers; i++) {
      const t = (i + 1) / layers;
      const inset = Math.round(Math.min(W, H) * 0.06 * t * (0.4 + p));
      ctx.fillStyle = `rgba(90,90,96,${0.028 * (layers - i) * p})`;
      ctx.fillRect(0, 0, W, inset);                    // alto
      ctx.fillRect(0, H - inset, W, inset);            // basso
      ctx.fillRect(0, 0, inset, H);                    // sinistra
      ctx.fillRect(W - inset, 0, inset, H);            // destra
    }
  }

  // Disco a pixel simmetrico (usato per luci tonde, sole dell'alba)
  function pixelDisc(ctx, cx, cy, r, px = 3) {
    const CX = Math.round(cx / px) * px, CY = Math.round(cy / px) * px;
    const R = Math.max(px, Math.round(r / px) * px);
    for (let dy = -R; dy < R; dy += px) {
      const yy = dy + px / 2;
      const hw = Math.sqrt(Math.max(0, R * R - yy * yy));
      const w = Math.max(px, Math.round(hw / px) * px);
      ctx.fillRect(CX - w, CY + dy, w * 2, px);
    }
  }

  function mix(a, b, t) {
    const ca = parseInt(a.slice(1), 16), cb = parseInt(b.slice(1), 16);
    const r = Math.round(((ca >> 16) & 255) * (1 - t) + ((cb >> 16) & 255) * t);
    const g = Math.round(((ca >> 8) & 255) * (1 - t) + ((cb >> 8) & 255) * t);
    const bl = Math.round((ca & 255) * (1 - t) + (cb & 255) * t);
    return `rgb(${r},${g},${bl})`;
  }

  // Compat con l'API storica: disco pieno (niente più eclissi lunare)
  function moon(ctx, x, y, r, color = '#e8e0f0') {
    ctx.fillStyle = color; pixelDisc(ctx, x, y, r);
  }

  /* ---------- helper di terreno ---------- */

  // Profilo di terreno irregolare: niente bande orizzontali nette
  function ground(ctx, W, H, topY, color, rand, blockSize = 12, jag = 8) {
    for (let x = 0; x < W; x += blockSize) {
      const off = Math.round((rand() - 0.5) * jag / blockSize) * blockSize;
      blocks(ctx, x, topY + off, blockSize, H - topY - off, color, blockSize, rand, 0.22);
    }
  }

  // Colline/skyline morbidi sul fondo (silhouette a gradini)
  function hills(ctx, W, baseY, height, color, rand, step = 24) {
    let h = height * (0.5 + rand() * 0.5);
    for (let x = 0; x < W; x += step) {
      h += (rand() - 0.5) * height * 0.5;
      h = Math.max(height * 0.25, Math.min(height, h));
      blocks(ctx, x, baseY - h, step, h + 4, color, 12, rand, 0.14);
    }
  }

  // ALBERO — la chioma poggia sul tronco
  function tree(ctx, x, groundY, size, leaf, trunk, rand) {
    const tw = Math.max(8, Math.round(size / 6) * 2);
    const topY = groundY - size;
    blocks(ctx, x - tw / 2, topY, tw, size, trunk, 6, rand);
    blocks(ctx, x - tw, groundY - 8, tw * 2, 8, trunk, 6, rand, 0.3);
    const lw = size * 1.15;
    const leafBottom = topY + size * 0.22;
    blocks(ctx, x - lw / 2, leafBottom - lw * 0.5, lw, lw * 0.5, leaf, 8, rand, 0.28);
    blocks(ctx, x - lw * 0.36, leafBottom - lw * 0.8, lw * 0.72, lw * 0.34, leaf, 8, rand, 0.28);
    blocks(ctx, x - lw * 0.2, leafBottom - lw * 0.98, lw * 0.4, lw * 0.24, leaf, 8, rand, 0.28);
  }

  function willow(ctx, x, groundY, size, leaf, trunk, rand) {
    const tw = Math.max(8, Math.round(size / 7) * 2);
    blocks(ctx, x - tw / 2, groundY - size, tw, size, trunk, 6, rand);
    const lw = size * 1.3;
    blocks(ctx, x - lw / 2, groundY - size - lw * 0.28, lw, lw * 0.42, leaf, 8, rand, 0.26);
    for (let i = -4; i <= 4; i++) {
      const bx = x + i * (lw / 10);
      const len = size * (0.5 - Math.abs(i) * 0.05) + rand() * 10;
      blocks(ctx, bx - 3, groundY - size + lw * 0.1, 6, len, leaf, 6, rand, 0.34);
    }
  }

  /* ---------- helper di costruzioni e luci ---------- */

  function house(ctx, x, groundY, w, h, wall, roof, rand, windowLit = true) {
    blocks(ctx, x, groundY - h, w, h, wall, 8, rand, 0.12);
    const steps = 7, over = 14;
    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      const rw = (w + over * 2) * (1 - t);
      blocks(ctx, x + (w - rw) / 2, groundY - h - 8 - i * 8, rw, 9, roof, 8, rand, 0.16);
    }
    ctx.fillStyle = '#3a3a40'; ctx.fillRect(x + w / 2 - 9, groundY - 28, 18, 28);
    ctx.fillStyle = '#55555c'; ctx.fillRect(x + w / 2 - 11, groundY - 31, 22, 4);
    if (windowLit) {
      for (const wx of [x + 10, x + w - 24]) {
        ctx.fillStyle = 'rgba(200,200,210,.12)'; ctx.fillRect(wx - 6, groundY - h + 6, 26, 26);
        ctx.fillStyle = '#c8c8ce'; ctx.fillRect(wx, groundY - h + 12, 14, 14);
        ctx.fillStyle = '#55555c'; ctx.fillRect(wx + 6, groundY - h + 12, 2, 14);
      }
    }
  }

  // Torcia con staffa (compat API)
  function torch(ctx, x, y, bracket = true) {
    if (bracket) { ctx.fillStyle = '#3a3a45'; ctx.fillRect(x - 5, y + 4, 16, 4); ctx.fillRect(x - 5, y + 4, 4, 12); }
    ctx.fillStyle = '#5a5248'; ctx.fillRect(x, y, 6, 22);
    ctx.fillStyle = 'rgba(232,200,140,.14)'; ctx.fillRect(x - 14, y - 22, 34, 34);
    ctx.fillStyle = '#e8c88c'; ctx.fillRect(x - 3, y - 10, 12, 12);
    ctx.fillStyle = '#f5e0aa'; ctx.fillRect(x, y - 7, 6, 6);
  }

  // Cartello con righe di "scritta" (compat API)
  function sign(ctx, x, groundY, w = 84, h = 30, lines = 2) {
    ctx.fillStyle = '#4a4440'; ctx.fillRect(x - 4, groundY - 46, 8, 46);
    ctx.fillStyle = '#6e6660'; ctx.fillRect(x - w / 2, groundY - 76, w, h);
    ctx.fillStyle = '#5a544e'; ctx.fillRect(x - w / 2, groundY - 76, w, 3);
    ctx.fillStyle = '#2e2a28';
    for (let i = 0; i < lines; i++) {
      const lw = w * (0.5 + (i % 2) * 0.2);
      ctx.fillRect(x - lw / 2, groundY - 66 + i * 9, lw, 4);
    }
  }

  // Ellisse a pixel (come pixelDisc, ma con raggi indipendenti)
  function pixelEllipse(ctx, cx, cy, rx, ry, px = 4) {
    const CX = Math.round(cx / px) * px, CY = Math.round(cy / px) * px;
    const RY = Math.max(px, Math.round(ry / px) * px);
    for (let dy = -RY; dy < RY; dy += px) {
      const t = (dy + px / 2) / RY;
      const hw = rx * Math.sqrt(Math.max(0, 1 - t * t));
      const w = Math.max(px, Math.round(hw / px) * px);
      ctx.fillRect(CX - w, CY + dy, w * 2, px);
    }
  }

  // Alone luminoso morbido: dischi pixelati concentrici, MAI rettangoli
  // (i rettangoli annidati creavano aloni squadrati attorno a ogni luce)
  function glow(ctx, x, y, w, h, rgb) {
    for (let i = 4; i >= 1; i--) {
      ctx.fillStyle = `rgba(${rgb},${0.022 * i})`;
      pixelEllipse(ctx, x, y, w * (5 - i) / 2, h * (5 - i) / 2, 4);
    }
  }

  /* Porta chiusa con stipite, maniglia e targhetta opzionale.
     LE PROPORZIONI VENGONO DALLA PORTA VERA, non dallo spazio disponibile: una
     porta interna è 0,85 x 2,05 m, cioè LARGA 0,41 VOLTE LA PROPRIA ALTEZZA.
     Tutti e sei i punti di chiamata passavano w = W*0.11-0.16 con h = 116-128,
     cioè un rapporto 1,08: due volte e mezzo troppo larghe, e il risultato non
     leggeva come porta ma come pensile da cucina — in tre fondali insieme.
     Quindi `w` qui NON è più la larghezza del battente: è il POSTO in cui la
     porta va messa, e la porta si centra dentro. I due pannelli sono verticali
     (in una porta vera sono più alti che larghi) e la maniglia sta a 105 cm da
     terra, che su 205 cm di battente è h * 0.51. */
  function door(ctx, x, floorY, w, h, leaf, frame, tag = null) {
    const lw = Math.max(9, Math.round(h * 0.42));
    const lx = Math.round(x + w / 2 - lw / 2);
    const bordo = Math.max(1, Math.round(lw * 0.12));
    ctx.fillStyle = frame; ctx.fillRect(lx - bordo - 2, floorY - h - bordo - 2, lw + bordo * 2 + 4, h + bordo + 2);
    ctx.fillStyle = leaf; ctx.fillRect(lx, floorY - h, lw, h);
    // due pannelli verticali incassati, col filo chiaro dove prendono luce
    const pw = lw - bordo * 2, ph1 = h * 0.40, ph2 = h * 0.36;
    ctx.fillStyle = shade(leaf, 0.72);
    ctx.fillRect(lx + bordo, floorY - h + bordo * 2, pw, ph1);
    ctx.fillRect(lx + bordo, floorY - h * 0.46, pw, ph2);
    ctx.fillStyle = shade(leaf, 1.22);
    ctx.fillRect(lx + bordo, floorY - h + bordo * 2, pw, 1);
    ctx.fillRect(lx + bordo, floorY - h * 0.46, pw, 1);
    // maniglia: 105 cm da terra su un battente di 205 → h * 0.51. Misura e
    // targhetta scalano col battente: su una porta da 95 px una maniglia da 5
    // non si vede, e una targhetta fissa da 18 sembra un'etichetta appiccicata.
    const mw = Math.max(4, Math.round(lw * 0.12)), my = Math.round(floorY - h * 0.51);
    ctx.fillStyle = '#8a8a90'; ctx.fillRect(lx + lw - bordo - mw, my, mw, Math.max(2, Math.round(mw * 0.45)));
    ctx.fillStyle = '#a8a8ae'; ctx.fillRect(lx + lw - bordo - mw, my, mw, 1);
    // targhetta d'ottone all'altezza degli occhi, SUL battente (prima stava sopra
    // l'architrave, dove nessuno guarda il nome di una porta)
    if (tag) {
      const tw = Math.max(12, Math.round(lw * 0.34)), th = Math.max(5, Math.round(tw * 0.42));
      const tx = lx + Math.round((lw - tw) / 2), ty = Math.round(floorY - h * 0.78);
      ctx.fillStyle = tag; ctx.fillRect(tx, ty, tw, th);
      ctx.fillStyle = shade(tag, 0.55);
      ctx.fillRect(tx + 3, ty + Math.floor(th / 2) - 1, tw - 6, 2);
      ctx.fillStyle = shade(tag, 1.2); ctx.fillRect(tx, ty, tw, 1);
    }
  }

  // Sagoma umana grigia, seduta o in piedi, appoggiata al pavimento dato
  function sagoma(ctx, x, footY, hgt, color = '#3a3a40', seated = false) {
    const w = Math.round(hgt * 0.34);
    if (seated) {
      ctx.fillStyle = color;
      ctx.fillRect(x - w / 2, footY - hgt * 0.62, w, hgt * 0.42);          // busto
      ctx.fillRect(x - w / 2, footY - hgt * 0.22, w * 1.3, hgt * 0.10);    // gambe piegate
      ctx.fillRect(x - w * 0.32, footY - hgt * 0.86, w * 0.64, hgt * 0.26); // testa
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(x - w / 2, footY - hgt * 0.72, w, hgt * 0.72);
      ctx.fillRect(x - w * 0.3, footY - hgt, w * 0.6, hgt * 0.3);
    }
  }

  // TV accesa: cassa scura + schermo, con alone morbido del colore dato
  function tvScreen(ctx, x, y, w, h, rgb = '150,170,186', screen = '#8aa2b6') {
    glow(ctx, x + w / 2, y + h / 2, w, h, rgb);
    ctx.fillStyle = '#1d1d22'; ctx.fillRect(x - 4, y - 4, w + 8, h + 8);
    ctx.fillStyle = screen; ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(x + 3, y + 3, Math.max(4, w * 0.2), 3);
  }

  // Lattina di Coca (rossa: il colore-firma di Daniele)
  function lattina(ctx, x, y) {
    ctx.fillStyle = '#c0242e'; ctx.fillRect(x, y, 7, 11);
    ctx.fillStyle = '#e8e8ea'; ctx.fillRect(x, y, 7, 2);
    ctx.fillStyle = '#f0f0f2'; ctx.fillRect(x + 1, y + 4, 5, 2);
  }

  /* Teglia da forno vista di fronte, per i ripiani del frigo della Cucina Fredda.
     Una pirofila si riconosce da tre cose e non da una: il BORDO che sporge in
     alto (il filo che prende luce), il MANICO che sporge di lato, e le fette
     dentro, che sono più scure del bordo perché stanno in ombra. Senza queste
     tre cose un rettangolo grigio su un ripiano resta un rettangolo grigio — ed
     è esattamente quello che c'era prima: cinque rettangolini su un pannello
     bianco, mentre k1 dice «pieno di CENA, impilate con cura maniacale su ogni
     ripiano». La cura maniacale non si disegna: si ottiene allineando. */
  function teglia(ctx, x, y, w, h, base) {
    ctx.fillStyle = shade(base, 0.62); ctx.fillRect(x - 3, y + h - 1, w + 6, 2);   // l'ombra sul ripiano
    ctx.fillStyle = shade(base, 0.86); ctx.fillRect(x, y, w, h);                   // il corpo
    ctx.fillStyle = shade(base, 1.24); ctx.fillRect(x, y, w, 2);                   // il bordo che prende luce
    ctx.fillStyle = shade(base, 0.70); ctx.fillRect(x + 4, y + 3, w - 8, h - 5);   // il contenuto, in ombra
    ctx.fillStyle = shade(base, 0.80);                                             // le fette / gli strati
    for (let ly = y + 6; ly < y + h - 2; ly += 4) ctx.fillRect(x + 4, ly, w - 8, 1);
    ctx.fillStyle = shade(base, 1.06);                                             // i due manici
    ctx.fillRect(x - 3, y + 2, 3, Math.max(2, Math.round(h * 0.35)));
    ctx.fillRect(x + w, y + 2, 3, Math.max(2, Math.round(h * 0.35)));
  }

  function heroesRow(ctx, W, groundY, partySpriteKeys, scale = 4) {
    const n = partySpriteKeys.length;
    const totalW = n * 20 * scale;
    let x = Math.floor(W / 2 - totalW / 2);
    for (const key of partySpriteKeys) {
      const def = Sprites.registry[key];
      if (def) Sprites.drawSprite(ctx, def.map, def.palette, x, groundY - 16 * scale, scale);
      x += 20 * scale;
    }
  }

  /* ------------- PITTORI DI LOCATION ------------- */

  const painters = {

    titolo(ctx, W, H) {
      // la facciata del palazzo di notte: UNA finestra accesa di luce TV
      const r = rng(2001);
      skyGradient(ctx, W, H, '#0a0a10', '#1a1a22', 10);
      stars(ctx, W, H, r, 24);
      const g = H - 46;
      // skyline di palazzi spenti dietro
      hills(ctx, W, g - 120, 70, '#101014', r, 44);
      // IL PALAZZO: sette piani di cemento
      const bx = W * 0.30, bw = W * 0.40, bh = H * 0.78;
      blocks(ctx, bx, g - bh, bw, bh, '#26262c', 10, r, 0.10);
      blocks(ctx, bx - 6, g - bh - 8, bw + 12, 10, '#2e2e34', 8, r, 0.08);
      // griglia di finestre TUTTE buie...
      const cols = 4, rows = 7;
      for (let ro = 0; ro < rows; ro++) for (let co = 0; co < cols; co++) {
        const wx = bx + 16 + co * (bw - 32 - 14) / (cols - 1);
        const wy = g - bh + 18 + ro * (bh - 60) / rows;
        ctx.fillStyle = '#141418'; ctx.fillRect(wx, wy, 14, 18);
        ctx.fillStyle = '#1d1d24'; ctx.fillRect(wx, wy, 14, 3);
      }
      // ...tranne UNA: luce TV pulsante grigio-azzurra (quarto piano)
      const lx = bx + 16 + 2 * (bw - 32 - 14) / (cols - 1);
      const ly = g - bh + 18 + 3 * (bh - 60) / rows;
      glow(ctx, lx + 7, ly + 9, 44, 40, '138,168,190');
      ctx.fillStyle = '#8aa8be'; ctx.fillRect(lx, ly, 14, 18);
      ctx.fillStyle = '#b8d0de'; ctx.fillRect(lx + 2, ly + 4, 6, 4);
      ctx.fillStyle = '#5a7686'; ctx.fillRect(lx + 9, ly + 10, 4, 6);
      // portone al piano terra
      ctx.fillStyle = '#17171c'; ctx.fillRect(bx + bw / 2 - 13, g - 34, 26, 34);
      ctx.fillStyle = '#33333a'; ctx.fillRect(bx + bw / 2 - 15, g - 38, 30, 5);
      // citofono con spia minuscola
      ctx.fillStyle = '#3a3a42'; ctx.fillRect(bx + bw / 2 + 17, g - 30, 6, 12);
      ctx.fillStyle = '#9ab2c2'; ctx.fillRect(bx + bw / 2 + 19, g - 28, 2, 2);
      // marciapiede e strada
      blocks(ctx, 0, g, W, 12, '#33333a', 10, r, 0.10);
      blocks(ctx, 0, g + 12, W, H - g - 12, '#1d1d22', 12, r, 0.14);
      // un lampione spento e uno stanco ai lati
      ctx.fillStyle = '#2e2e34'; ctx.fillRect(W * 0.12, g - 84, 5, 84);
      ctx.fillRect(W * 0.115, g - 88, 16, 5);
      ctx.fillStyle = '#3a3a40'; ctx.fillRect(W * 0.125 + 8, g - 86, 8, 6);
      ctx.fillStyle = '#2e2e34'; ctx.fillRect(W * 0.84, g - 84, 5, 84);
      ctx.fillRect(W * 0.835, g - 88, 16, 5);
      glow(ctx, W * 0.85 + 8, g - 82, 22, 16, '170,170,160');
      ctx.fillStyle = '#b6b6aa'; ctx.fillRect(W * 0.845 + 8, g - 86, 8, 6);
    },

    strada(ctx, W, H) {
      // strada cittadina di sera; il palazzo di Daniele in fondo
      const r = rng(2003);
      skyGradient(ctx, W, H, '#12121a', '#2a2a34', 10);
      stars(ctx, W, H, r, 14);
      const g = H - 58;
      // quinte di palazzi ai lati, in prospettiva verso il fondo
      for (const side of [0, 1]) {
        for (let i = 0; i < 3; i++) {
          const t = i / 3;
          const pw = W * (0.16 - t * 0.04), ph = H * (0.66 - t * 0.14);
          const px = side ? W - W * (0.02 + i * 0.15) - pw : W * (0.02 + i * 0.15);
          blocks(ctx, px, g - ph, pw, ph, i % 2 ? '#232329' : '#2a2a30', 9, r, 0.10);
          ctx.fillStyle = '#15151a';
          for (let wr = 0; wr < 4; wr++) for (let wc = 0; wc < 2; wc++)
            ctx.fillRect(px + 8 + wc * (pw - 26), g - ph + 12 + wr * ph / 4.6, 11, 14);
          // qualche finestra accesa, calda ma stanca
          if (i === 0) {
            ctx.fillStyle = '#c8b482';
            ctx.fillRect(px + 8, g - ph + 12 + ph / 4.6, 11, 14);
          }
        }
      }
      // in fondo: il palazzo di Daniele, riconoscibile, con la finestra TV
      const bx = W * 0.42, bw = W * 0.16, bh = H * 0.42;
      blocks(ctx, bx, g - bh, bw, bh, '#2e2e36', 8, r, 0.08);
      ctx.fillStyle = '#17171c';
      for (let ro = 0; ro < 5; ro++) for (let co = 0; co < 2; co++)
        ctx.fillRect(bx + 8 + co * (bw - 24), g - bh + 8 + ro * (bh - 26) / 5, 8, 10);
      glow(ctx, bx + 12, g - bh + 8 + 2 * (bh - 26) / 5 + 5, 26, 22, '138,168,190');
      ctx.fillStyle = '#8aa8be'; ctx.fillRect(bx + 8, g - bh + 8 + 2 * (bh - 26) / 5, 8, 10);
      // asfalto con striscia di mezzeria sbiadita che converge
      blocks(ctx, 0, g, W, H - g, '#222228', 12, r, 0.14);
      ctx.fillStyle = 'rgba(200,200,190,.20)';
      for (let i = 0; i < 5; i++) {
        const t = i / 5;
        ctx.fillRect(W * 0.5 - 8 + t * 4, g + 6 + i * (H - g - 10) / 5, 16 - t * 8, 5);
      }
      // marciapiedi
      blocks(ctx, 0, g - 4, W * 0.20, 8, '#3a3a40', 8, r, 0.10);
      blocks(ctx, W * 0.80, g - 4, W * 0.20, 8, '#3a3a40', 8, r, 0.10);
      // lampioni accesi: la luce buona della sera
      for (const fx of [0.16, 0.5, 0.84]) {
        ctx.fillStyle = '#33333a'; ctx.fillRect(W * fx - 2, g - 96, 5, 92);
        ctx.fillRect(W * fx - 10, g - 100, 21, 5);
        glow(ctx, W * fx, g - 92, 30, 22, '224,192,120');
        ctx.fillStyle = '#e0c078'; ctx.fillRect(W * fx - 5, g - 98, 11, 8);
        // pozza di luce a terra (fasce, non rettangolo netto)
        for (let k = 3; k >= 1; k--) {
          ctx.fillStyle = `rgba(224,192,120,${0.028 * k})`;
          ctx.fillRect(W * fx - 14 * k, g + 2, 28 * k, 10);
        }
      }
      // una macchina parcheggiata, spenta
      const cx = W * 0.66, cy = g - 4;
      ctx.fillStyle = '#3a3a44'; ctx.fillRect(cx, cy - 14, 66, 16);
      ctx.fillStyle = '#2c2c34'; ctx.fillRect(cx + 10, cy - 24, 44, 12);
      ctx.fillStyle = '#1a1e24'; ctx.fillRect(cx + 14, cy - 21, 15, 9); ctx.fillRect(cx + 34, cy - 21, 15, 9);
      ctx.fillStyle = '#17171c'; ctx.fillRect(cx + 8, cy - 2, 12, 8); ctx.fillRect(cx + 46, cy - 2, 12, 8);
    },

    palazzo(ctx, W, H) {
      // androne con cassette della posta; quella di Daniele trabocca di pacchi
      const r = rng(2005);
      blocks(ctx, 0, 0, W, H, '#26262c', 16, r, 0.10);
      const floorY = H - 70;
      // pavimento in graniglia
      blocks(ctx, 0, floorY, W, H - floorY, '#3a3a40', 10, r, 0.14);
      ctx.fillStyle = 'rgba(200,200,205,.06)';
      for (let i = 0; i < 40; i++) ctx.fillRect(r() * W, floorY + 4 + r() * (H - floorY - 8), 3, 2);
      // plafoniera al neon, un tubo mezzo morto
      ctx.fillStyle = '#33333a'; ctx.fillRect(W * 0.34, 14, W * 0.32, 8);
      glow(ctx, W * 0.5, 26, W * 0.28, 18, '198,206,214');
      ctx.fillStyle = '#c6ced6'; ctx.fillRect(W * 0.36, 20, W * 0.28, 4);
      ctx.fillStyle = '#6a6e74'; ctx.fillRect(W * 0.36 + W * 0.19, 20, W * 0.05, 4); // il tratto morto
      // il muro delle CASSETTE DELLA POSTA
      const mx = W * 0.08, mw = W * 0.50, my = H * 0.26, rows = 3, colsN = 5;
      blocks(ctx, mx - 8, my - 8, mw + 16, rows * 34 + 16, '#4a4a52', 8, r, 0.08);
      for (let ro = 0; ro < rows; ro++) for (let co = 0; co < colsN; co++) {
        const cxx = mx + co * (mw / colsN), cyy = my + ro * 34;
        ctx.fillStyle = '#5a5a62'; ctx.fillRect(cxx, cyy, mw / colsN - 6, 28);
        ctx.fillStyle = '#3a3a42'; ctx.fillRect(cxx + 6, cyy + 6, mw / colsN - 18, 4); // feritoia
        ctx.fillStyle = '#84848c'; ctx.fillRect(cxx + 6, cyy + 18, 12, 5);            // etichetta
      }
      // LA CASSETTA DI DANIELE: sportello divelto, posta e pacchi che traboccano
      const dx = mx + 2 * (mw / colsN), dy = my + 34;
      ctx.fillStyle = '#4a4a52'; ctx.fillRect(dx, dy, mw / colsN - 6, 28);
      ctx.fillStyle = '#8a8a92'; // sportello aperto, storto
      ctx.save(); ctx.translate(dx + 4, dy + 26); ctx.rotate(0.5); ctx.fillRect(0, 0, mw / colsN - 14, 22); ctx.restore();
      ctx.fillStyle = '#d8d4c8'; // buste che sbordano
      ctx.fillRect(dx + 4, dy + 8, 18, 6); ctx.fillRect(dx + 14, dy + 14, 20, 6); ctx.fillRect(dx + 2, dy + 18, 16, 6);
      // pila di pacchi a terra sotto la cassetta
      ctx.fillStyle = '#7a6a52'; ctx.fillRect(dx - 6, floorY - 26, 40, 26);
      ctx.fillStyle = '#8a7a5e'; ctx.fillRect(dx + 2, floorY - 46, 34, 20);
      ctx.fillStyle = '#6a5c48'; ctx.fillRect(dx + 10, floorY - 62, 26, 16);
      ctx.fillStyle = '#c8b878'; // nastro adesivo
      ctx.fillRect(dx - 6, floorY - 16, 40, 4); ctx.fillRect(dx + 2, floorY - 38, 34, 4); ctx.fillRect(dx + 10, floorY - 56, 26, 3);
      // le scale in fondo a destra, con corrimano
      for (let i = 0; i < 6; i++) blocks(ctx, W * 0.70 + i * 10, floorY - 12 - i * 13, W * 0.26 - i * 12, 13, '#33333a', 8, r, 0.10);
      ctx.fillStyle = '#54545c';
      for (let i = 0; i < 6; i++) ctx.fillRect(W * 0.72 + i * 10, floorY - 40 - i * 13, 4, 30);
      ctx.fillRect(W * 0.72, floorY - 44 - 5 * 13, 10 * 5 + 4, 4);
      // l'ascensore con la porta a soffietto e il cartello GUASTO
      ctx.fillStyle = '#3a3a42'; ctx.fillRect(W * 0.64, floorY - 104, 4, 104);
      ctx.fillStyle = '#44444c'; ctx.fillRect(W * 0.645, floorY - 100, W * 0.045, 100);
      ctx.fillStyle = '#2e2e36';
      for (let i = 0; i < 5; i++) ctx.fillRect(W * 0.648 + i * W * 0.009, floorY - 96, 2, 92);
      ctx.fillStyle = '#d8d4c8'; ctx.fillRect(W * 0.647, floorY - 70, W * 0.04, 12);
      ctx.fillStyle = '#8a3a3a'; ctx.fillRect(W * 0.651, floorY - 67, W * 0.032, 3);
      // lo zerbino condominiale sbiadito davanti al portone (in basso)
      blocks(ctx, W * 0.36, H - 22, W * 0.28, 14, '#4a4438', 6, r, 0.14);
    },

    pianerottolo(ctx, W, H) {
      // la porta di Daniele: zerbino, luce a intermittenza
      const r = rng(2007);
      blocks(ctx, 0, 0, W, H, '#232329', 16, r, 0.10);
      const floorY = H - 64;
      blocks(ctx, 0, floorY, W, H - floorY, '#33333a', 10, r, 0.12);
      // la plafoniera che sfarfalla: mezza luce, alone irregolare
      ctx.fillStyle = '#3a3a42'; ctx.fillRect(W * 0.47, 12, W * 0.06, 8);
      glow(ctx, W * 0.5, 26, 46, 22, '210,214,200');
      ctx.fillStyle = '#c2c6b6'; ctx.fillRect(W * 0.475, 18, W * 0.05, 5);
      // cono di luce debole: si ALLARGA scendendo, con ellissi morbide sovrapposte (niente rettangolo netto)
      ctx.fillStyle = 'rgba(210,214,200,.05)';
      for (let i = 0; i < 5; i++) {
        const t = i / 4;
        const cy2 = 24 + t * H * 0.5;
        const rx = W * (0.05 + t * 0.14);
        const ry = H * 0.09;
        pixelEllipse(ctx, W * 0.5, cy2, rx, ry, 4);
      }
      // LA PORTA DI DANIELE, al centro
      door(ctx, W * 0.42, floorY, W * 0.16, 128, '#4a4038', '#33302c');
      // spioncino e targhetta col nome
      ctx.fillStyle = '#8a8a90'; ctx.fillRect(W * 0.5 - 3, floorY - 104, 6, 6);
      ctx.fillStyle = '#b8b4a8'; ctx.fillRect(W * 0.5 - 14, floorY - 90, 28, 8);
      ctx.fillStyle = '#5a564e'; ctx.fillRect(W * 0.5 - 10, floorY - 88, 20, 3);
      // lo ZERBINO, consumato al centro
      blocks(ctx, W * 0.40, floorY + 4, W * 0.20, 14, '#5a5244', 6, r, 0.12);
      ctx.fillStyle = '#4a4438'; ctx.fillRect(W * 0.45, floorY + 7, W * 0.10, 8);
      // le porte dei vicini ai lati, più buie
      door(ctx, W * 0.06, floorY, W * 0.13, 116, '#3a3630', '#2a2824');
      door(ctx, W * 0.81, floorY, W * 0.13, 116, '#3a3630', '#2a2824');
      // il quadro elettrico che ronza, con la spia
      ctx.fillStyle = '#3a3a42'; ctx.fillRect(W * 0.27, H * 0.30, 26, 34);
      ctx.fillStyle = '#2a2a30'; ctx.fillRect(W * 0.27 + 4, H * 0.30 + 4, 18, 22);
      ctx.fillStyle = '#c0242e'; ctx.fillRect(W * 0.27 + 8, H * 0.30 + 8, 4, 4); // la spia ROSSA: unico colore
      glow(ctx, W * 0.27 + 10, H * 0.30 + 10, 12, 10, '192,36,46');
      // la finestrella del pianerottolo sulla notte
      ctx.fillStyle = '#33302c'; ctx.fillRect(W * 0.68, H * 0.22, 44, 54);
      ctx.fillStyle = '#101016'; ctx.fillRect(W * 0.68 + 5, H * 0.22 + 5, 34, 44);
      ctx.fillStyle = '#8a8a96'; ctx.fillRect(W * 0.68 + 26, H * 0.22 + 12, 3, 3);
      ctx.fillStyle = '#33302c'; ctx.fillRect(W * 0.68 + 20, H * 0.22 + 5, 3, 44);
      // il campanello con l'etichetta scritta a mano
      ctx.fillStyle = '#4a4a52'; ctx.fillRect(W * 0.60, floorY - 78, 8, 10);
      ctx.fillStyle = '#b8b4a8'; ctx.fillRect(W * 0.60 + 1, floorY - 76, 6, 4);
    },

    appartamento(ctx, W, H) {
      // interno bilocale ordinato ma DESATURATO: divano, TV
      const r = rng(2011);
      blocks(ctx, 0, 0, W, H, '#3a3a3e', 16, r, 0.08);
      const floorY = H - 72;
      // parquet sbiadito a doghe
      blocks(ctx, 0, floorY, W, H - floorY, '#55504a', 12, r, 0.10);
      ctx.fillStyle = 'rgba(0,0,0,.16)';
      for (let y = floorY + 10; y < H; y += 12) for (let x = ((y / 12) % 2) * 30; x < W; x += 60) ctx.fillRect(x, y, 56, 2);
      // finestra sulla città notturna
      ctx.fillStyle = '#4a4a50'; ctx.fillRect(W * 0.70, 30, 116, 96);
      ctx.fillStyle = '#121218'; ctx.fillRect(W * 0.70 + 7, 37, 102, 82);
      ctx.fillStyle = '#8a8a96'; ctx.fillRect(W * 0.70 + 20, 52, 3, 3); ctx.fillRect(W * 0.70 + 70, 44, 3, 3);
      ctx.fillStyle = '#c8b482'; ctx.fillRect(W * 0.70 + 44, 70, 6, 8); // una finestra accesa lontana
      ctx.fillStyle = '#4a4a50'; ctx.fillRect(W * 0.70 + 55, 37, 4, 82);
      // la libreria bassa ordinata, dorsi tutti grigi
      blocks(ctx, W * 0.04, floorY - 66, W * 0.16, 66, '#45413c', 8, r, 0.10);
      for (let sh = 0; sh < 3; sh++) {
        const sy = floorY - 58 + sh * 20;
        ctx.fillStyle = '#332f2b'; ctx.fillRect(W * 0.045, sy + 14, W * 0.15, 3);
        for (let b = 0; b < 7; b++) {
          ctx.fillStyle = ['#5a5a5e', '#66666a', '#4e4e52'][b % 3];
          ctx.fillRect(W * 0.05 + b * W * 0.02, sy, W * 0.015, 14);
        }
      }
      // IL DIVANO, al centro, di spalle verso la TV
      const sx = W * 0.30, sy2 = floorY - 44;
      blocks(ctx, sx, sy2, W * 0.26, 34, '#5c5c62', 8, r, 0.10);         // seduta+schienale
      blocks(ctx, sx, sy2 - 16, W * 0.26, 18, '#54545a', 8, r, 0.08);    // schienale
      ctx.fillStyle = '#4a4a50';
      ctx.fillRect(sx - 8, sy2 - 8, 12, 42); ctx.fillRect(sx + W * 0.26 - 4, sy2 - 8, 12, 42); // braccioli
      ctx.fillStyle = '#66666c'; ctx.fillRect(sx + 12, sy2 - 12, 24, 16); ctx.fillRect(sx + W * 0.26 - 38, sy2 - 12, 24, 16); // cuscini
      // il plaid piegato con cura: ORDINATO, non abbandonato
      ctx.fillStyle = '#6a6a72'; ctx.fillRect(sx + W * 0.13 - 14, sy2 - 6, 28, 10);
      ctx.fillStyle = '#5a5a62'; ctx.fillRect(sx + W * 0.13 - 14, sy2 - 2, 28, 2);
      // mobile TV + TV accesa su STATICO grigio
      blocks(ctx, W * 0.63, floorY - 26, W * 0.20, 26, '#45413c', 8, r, 0.10);
      tvScreen(ctx, W * 0.655, floorY - 78, W * 0.15, 48, '150,160,170', '#77828c');
      ctx.fillStyle = 'rgba(220,224,228,.5)';
      for (let i = 0; i < 26; i++) ctx.fillRect(W * 0.655 + r() * (W * 0.15 - 3), floorY - 78 + r() * 45, 2, 2);
      // il tavolino con UNA lattina rossa, perfettamente centrata (il colore-firma)
      blocks(ctx, W * 0.40, floorY - 2, W * 0.10, 6, '#45413c', 6, r, 0.08);
      ctx.fillStyle = '#332f2b'; ctx.fillRect(W * 0.415, floorY + 4, 5, 12); ctx.fillRect(W * 0.475, floorY + 4, 5, 12);
      lattina(ctx, W * 0.445, floorY - 13);
      glow(ctx, W * 0.448, floorY - 8, 14, 12, '192,36,46');
      /* IL CORRIDOIO BUIO sulla sinistra. Era un rettangolo di nero pieno di
         48x238 con un architrave grigio sopra: su un riquadro che ha il fondo
         nero una zona nera non legge come vuoto, legge come una COSA (lezione
         55) — e con un rapporto 1:5 quella cosa era un monolite appoggiato al
         muro. Un vano porta è 1:2,4, quindi il vano si allarga a 100 px; e il
         nero resta SOLO in fondo, perché la profondità la fanno i piani, non il
         buio: il pavimento continua dentro con la doga del parquet, la parete
         di sinistra prende la luce della lampada (che sta a destra) e quella di
         destra resta in ombra. */
      const oy = Math.round(H * 0.14), oh = floorY - oy;
      const ow = Math.round(oh / 2.4), ox = Math.round(W * 0.20);
      const fx = ox + 28, fw = ow - 56, fy = oy + 36, fbot = floorY - 24;
      // il buio in fondo, che adesso è lontananza e non una lastra
      ctx.fillStyle = '#0c0c10'; ctx.fillRect(ox, oy, ow, oh);
      // parete sinistra: quella che prende la luce della stanza
      for (let x = ox; x < fx; x++) {
        const v = (x - ox) / (fx - ox);
        ctx.fillStyle = shade('#3e3e46', 1 - v * 0.62);
        ctx.fillRect(x, Math.round(oy + (fy - oy) * v), 1, Math.round(floorY - (floorY - fbot) * v) - Math.round(oy + (fy - oy) * v));
      }
      // parete destra: in ombra
      for (let x = fx + fw; x < ox + ow; x++) {
        const v = (ox + ow - x) / (ow - fw - 28);
        ctx.fillStyle = shade('#26262c', 1 - v * 0.55);
        ctx.fillRect(x, Math.round(oy + (fy - oy) * v), 1, Math.round(floorY - (floorY - fbot) * v) - Math.round(oy + (fy - oy) * v));
      }
      // il pavimento che continua DENTRO, con la stessa doga del parquet
      for (let y = fbot; y <= floorY; y++) {
        const u = (floorY - y) / (floorY - fbot);
        const xl = Math.round(ox + (fx - ox) * u), xr = Math.round(ox + ow + (fx + fw - ox - ow) * u);
        ctx.fillStyle = shade('#55504a', 1 - u * 0.62);
        ctx.fillRect(xl, y, xr - xl, 1);
        if ((floorY - y) % 8 === 3) { ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(xl, y, xr - xl, 1); }
      }
      // il soffitto del corridoio, il piano più scuro dei tre
      for (let y = oy; y <= fy; y++) {
        const u = (y - oy) / (fy - oy);
        const xl = Math.round(ox + (fx - ox) * u), xr = Math.round(ox + ow + (fx + fw - ox - ow) * u);
        ctx.fillStyle = shade('#1c1c22', 1 - u * 0.5);
        ctx.fillRect(xl, y, xr - xl, 1);
      }
      // lo stipite: architrave, e sullo spigolo verso la stanza il filo chiaro
      ctx.fillStyle = '#4a4a50'; ctx.fillRect(ox - 7, oy - 8, ow + 14, 8);
      ctx.fillStyle = '#5c5c64'; ctx.fillRect(ox - 7, oy - 8, ow + 14, 2);
      ctx.fillStyle = '#3c3c42'; ctx.fillRect(ox - 7, oy, 7, floorY - oy);
      ctx.fillStyle = '#44444a'; ctx.fillRect(ox + ow, oy, 7, floorY - oy);
      ctx.fillStyle = '#6a6a72'; ctx.fillRect(ox + ow + 5, oy, 2, floorY - oy);
      // lampada a stelo ACCANTO al divano, appoggiata a terra
      ctx.fillStyle = '#3a3a40'; ctx.fillRect(W * 0.585, floorY - 70, 4, 70);
      ctx.fillRect(W * 0.575, floorY - 2, 24, 4);
      glow(ctx, W * 0.587, floorY - 76, 26, 18, '208,200,176');
      ctx.fillStyle = '#d0c8b0'; ctx.fillRect(W * 0.575, floorY - 82, 24, 12);
    },

    corridoio(ctx, W, H) {
      // il corridoio impossibile: prospettiva profonda, porte che si ripetono, buio in fondo
      const r = rng(2013);
      blocks(ctx, 0, 0, W, H, '#2c2c32', 16, r, 0.10);
      const floorY = H - 60;
      blocks(ctx, 0, floorY, W, H - floorY, '#44403a', 12, r, 0.12);
      // il punto di fuga: buio denso al centro
      const vpx = W * 0.5, vpy = H * 0.44;
      // pareti/soffitto/pavimento che convergono a fasce sempre più scure
      for (let i = 0; i < 6; i++) {
        const t = i / 6;
        const x0 = W * 0.5 * t, y0 = vpy * t * 0.9, w0 = W - W * t;
        const c = shade('#2c2c32', 1 - t * 0.75);
        ctx.fillStyle = c;
        ctx.fillRect(x0, y0, w0, 8);                              // soffitto che scende
        ctx.fillRect(x0, floorY - (floorY - vpy) * t, w0, 8);     // pavimento che sale
      }
      // battiscopa convergenti
      ctx.fillStyle = '#1d1d22';
      for (let i = 0; i < 8; i++) {
        const t = i / 8;
        ctx.fillRect(W * (0.06 + t * 0.38), floorY - (floorY - vpy) * t, 5, 6);
        ctx.fillRect(W * (0.94 - t * 0.38), floorY - (floorY - vpy) * t, 5, 6);
      }
      // PORTE IDENTICHE che si ripetono, sempre più piccole verso il fondo
      for (let i = 0; i < 4; i++) {
        const t = i / 4;
        const dh = 118 * (1 - t * 0.62), dw = W * 0.11 * (1 - t * 0.6);
        const fy = floorY - (floorY - vpy) * t + 4;
        door(ctx, W * (0.08 + t * 0.30), fy, dw, dh, '#4a4038', '#33302c');
        door(ctx, W * (0.92 - t * 0.30) - dw, fy, dw, dh, '#4a4038', '#33302c');
      }
      // il BUIO in fondo: un rettangolo di niente, con un ultimo gradino di luce prima
      ctx.fillStyle = 'rgba(200,204,196,.05)';
      ctx.fillRect(vpx - W * 0.09, vpy - 20, W * 0.18, floorY - (floorY - vpy) - vpy + 60);
      ctx.fillStyle = '#0c0c10';
      ctx.fillRect(vpx - W * 0.06, vpy - 12, W * 0.12, (floorY - vpy) * 0.34 + 12);
      // le plafoniere in fila: le prime accese, le ultime morte
      for (let i = 0; i < 4; i++) {
        const t = i / 4;
        const px2 = vpx, py2 = 20 + (vpy - 34) * t;
        const lw = 26 * (1 - t * 0.55);
        if (i < 2) {
          glow(ctx, px2, py2 + 4, lw + 14, 14, '206,210,198');
          ctx.fillStyle = '#c6cabe';
        } else ctx.fillStyle = '#4a4a50';
        ctx.fillRect(px2 - lw / 2, py2, lw, 4);
      }
      // la striscia di corsa del tappeto, che il fondo inghiotte
      blocks(ctx, W * 0.42, floorY + 2, W * 0.16, H - floorY - 4, '#4a3e3a', 8, r, 0.12);
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(W * 0.42, floorY + 2, W * 0.16, 2);
    },

    salotto(ctx, W, H) {
      // il Salotto-Cattedrale: soffitto altissimo nel buio, divano enorme, TV come vetrata
      const r = rng(2017);
      blocks(ctx, 0, 0, W, H, '#1a1a20', 16, r, 0.14);
      const floorY = H - 66;
      blocks(ctx, 0, floorY, W, H - floorY, '#3a3833', 12, r, 0.12);
      // colonne di "muro" che salgono e si perdono nel buio in alto
      for (const fx of [0.06, 0.28, 0.72, 0.94]) {
        blocks(ctx, W * fx - 12, 0, 26, floorY, '#26262c', 10, r, 0.12);
        ctx.fillStyle = 'rgba(10,10,14,.5)'; ctx.fillRect(W * fx - 12, 0, 26, H * 0.30);
      }
      // il buio del soffitto: fasce che si spengono salendo
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgba(8,8,12,${0.14 + i * 0.10})`;
        ctx.fillRect(0, 0, W, H * 0.28 - i * H * 0.05);
      }
      // LA TV-VETRATA: enorme, verticale, luce grigio-azzurra da cattedrale
      const tx = W * 0.40, tw = W * 0.20, ty = H * 0.10, th = floorY - ty - 30;
      glow(ctx, tx + tw / 2, ty + th / 2, tw * 1.3, th * 0.9, '138,168,190');
      ctx.fillStyle = '#17171c'; ctx.fillRect(tx - 8, ty - 8, tw + 16, th + 16);
      ctx.fillStyle = '#7a94a8'; ctx.fillRect(tx, ty, tw, th);
      // "piombature" da vetrata sopra lo schermo
      ctx.fillStyle = '#2a2a32';
      ctx.fillRect(tx, ty + th * 0.33, tw, 4); ctx.fillRect(tx, ty + th * 0.66, tw, 4);
      ctx.fillRect(tx + tw * 0.5 - 2, ty, 4, th);
      // riquadri con toni diversi, come scene di santi
      ctx.fillStyle = '#94aec0'; ctx.fillRect(tx + 4, ty + 4, tw * 0.5 - 8, th * 0.33 - 8);
      ctx.fillStyle = '#5a7486'; ctx.fillRect(tx + tw * 0.5 + 4, ty + th * 0.33 + 6, tw * 0.5 - 8, th * 0.33 - 10);
      ctx.fillStyle = '#a8bcc8'; ctx.fillRect(tx + 4, ty + th * 0.66 + 6, tw * 0.5 - 8, th * 0.33 - 12);
      // il mobile TV sotto: lo schermo POGGIA, non fluttua
      blocks(ctx, tx - 14, floorY - 30, tw + 28, 30, '#3a362f', 8, r, 0.10);
      // IL DIVANO ENORME, di spalle, davanti alla vetrata
      const sx = W * 0.22, sw = W * 0.56, sy2 = floorY - 12;
      blocks(ctx, sx, sy2 - 44, sw, 44, '#4e4e56', 10, r, 0.10);
      blocks(ctx, sx, sy2 - 64, sw, 24, '#46464e', 10, r, 0.08);
      ctx.fillStyle = '#3e3e46';
      ctx.fillRect(sx - 14, sy2 - 54, 18, 54); ctx.fillRect(sx + sw - 4, sy2 - 54, 18, 54);
      ctx.fillStyle = '#585860';
      for (let i = 0; i < 4; i++) ctx.fillRect(sx + 16 + i * sw / 4, sy2 - 60, sw / 4 - 20, 18);
      // l'impronta di CHI ci si è seduto per anni: l'incavo al centro
      ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(sx + sw * 0.42, sy2 - 58, sw * 0.16, 40);
      // candele? no: lattine-lumino ai piedi della vetrata, UNA rossa vera
      for (let i = 0; i < 5; i++) {
        const lx2 = tx - 10 + i * (tw + 20) / 4;
        ctx.fillStyle = '#55555c'; ctx.fillRect(lx2, floorY - 11, 6, 10);
      }
      lattina(ctx, tx + tw / 2 - 3, floorY - 12);
      glow(ctx, tx + tw / 2, floorY - 7, 12, 10, '192,36,46');
      // tappeto consumato davanti al divano
      blocks(ctx, W * 0.30, floorY + 6, W * 0.40, H - floorY - 10, '#443f38', 10, r, 0.12);
    },

    biblioteca(ctx, W, H) {
      // scaffali altissimi di libri grigi, scale a pioli, UNA copertina colorata
      const r = rng(2027);
      blocks(ctx, 0, 0, W, H, '#22221f', 16, r, 0.10);
      const floorY = H - 58;
      blocks(ctx, 0, floorY, W, H - floorY, '#3a362e', 12, r, 0.12);
      // tre torri di scaffali che salgono oltre il bordo alto
      for (const [fx, fw] of [[0.03, 0.27], [0.36, 0.28], [0.70, 0.27]]) {
        blocks(ctx, W * fx, 0, W * fw, floorY, '#3a352c', 8, r, 0.10);
        const shelfH = 26;
        for (let sy2 = floorY - shelfH; sy2 > -shelfH; sy2 -= shelfH) {
          ctx.fillStyle = '#2a261f'; ctx.fillRect(W * fx + 2, sy2 + shelfH - 4, W * fw - 4, 4);
          // dorsi grigi fitti, altezze irregolari
          let bx2 = W * fx + 6;
          while (bx2 < W * (fx + fw) - 10) {
            const bw2 = 5 + Math.floor(r() * 4), bh2 = 16 + Math.floor(r() * 6);
            ctx.fillStyle = ['#55554f', '#605e56', '#4a4a46', '#6a6862'][Math.floor(r() * 4)];
            ctx.fillRect(bx2, sy2 + shelfH - 4 - bh2, bw2, bh2);
            bx2 += bw2 + 1;
          }
        }
        // il buio che mangia la cima
        for (let i = 0; i < 4; i++) {
          ctx.fillStyle = `rgba(10,10,10,${0.16 + i * 0.12})`;
          ctx.fillRect(W * fx, 0, W * fw, H * 0.22 - i * H * 0.045);
        }
      }
      // LA copertina colorata: turchese acceso, ad altezza d'occhio, seconda torre
      const cx2 = W * 0.47, cy2 = floorY - 26 * 3 - 4 - 20;
      ctx.fillStyle = '#2aa8a0'; ctx.fillRect(cx2, cy2, 9, 20);
      ctx.fillStyle = '#7ae0d8'; ctx.fillRect(cx2 + 2, cy2 + 3, 5, 3);
      glow(ctx, cx2 + 4, cy2 + 10, 22, 26, '42,168,160');
      // SCALA A PIOLI appoggiata alla seconda torre, fino allo scaffale del libro
      ctx.fillStyle = '#5a5044';
      const lx0 = W * 0.52, ly0 = floorY, lx1 = W * 0.475, ly1 = cy2 - 6;
      // montanti (inclinati a gradini)
      const stepsL = 8;
      for (let i = 0; i <= stepsL; i++) {
        const t = i / stepsL;
        const mx = lx0 + (lx1 - lx0) * t, my = ly0 + (ly1 - ly0) * t;
        ctx.fillRect(mx - 10, my - 4, 4, Math.max(4, (ly0 - ly1) / stepsL + 2));
        ctx.fillRect(mx + 8, my - 4, 4, Math.max(4, (ly0 - ly1) / stepsL + 2));
        if (i < stepsL) { ctx.fillStyle = '#6a5e50'; ctx.fillRect(mx - 10, my - 4, 22, 3); ctx.fillStyle = '#5a5044'; }
      }
      // lampada da lettura a stelo, cerchio di luce sul leggio
      blocks(ctx, W * 0.62, floorY - 34, W * 0.09, 12, '#4a4438', 8, r, 0.10); // tavolo da lettura
      ctx.fillStyle = '#332f28'; ctx.fillRect(W * 0.625, floorY - 22, 5, 22); ctx.fillRect(W * 0.69, floorY - 22, 5, 22);
      ctx.fillStyle = '#3a3a40'; ctx.fillRect(W * 0.645, floorY - 62, 3, 28);
      ctx.fillRect(W * 0.635, floorY - 36, 20, 3);
      glow(ctx, W * 0.65, floorY - 60, 20, 14, '216,200,160');
      ctx.fillStyle = '#d8c8a0'; ctx.fillRect(W * 0.635, floorY - 66, 16, 8);
      // il libro aperto sul tavolo, nella pozza di luce
      ctx.fillStyle = '#c8c4b8'; ctx.fillRect(W * 0.63, floorY - 40, 22, 7);
      ctx.fillStyle = '#8a867c'; ctx.fillRect(W * 0.64, floorY - 38, 2, 5);
      // pile di libri a terra, appoggiate al pavimento
      for (const [px2, n2] of [[W * 0.10, 4], [W * 0.86, 5]]) {
        for (let i = 0; i < n2; i++) {
          ctx.fillStyle = ['#55554f', '#605e56', '#4a4a46'][i % 3];
          ctx.fillRect(px2 - 12 + (i % 2) * 3, floorY - 6 - i * 6, 26, 6);
        }
      }
    },

    porte(ctx, W, H) {
      // corridoio di porte di colori sbagliati/sbiaditi con targhette
      const r = rng(2029);
      blocks(ctx, 0, 0, W, H, '#2a2a2e', 16, r, 0.10);
      const floorY = H - 62;
      blocks(ctx, 0, floorY, W, H - floorY, '#403c36', 12, r, 0.12);
      // carta da parati a righe stanche
      ctx.fillStyle = 'rgba(170,170,175,.05)';
      for (let x = 0; x < W; x += 24) ctx.fillRect(x, 0, 8, floorY);
      /* LE PORTE. Erano cinque ante da 125x116 tutte dentro l'inquadratura: un
         rapporto 1,08 (cinque pensili appesi al muro) in una scena che si chiama
         «Il Corridoio delle Porte Sbagliate». Ora la proporzione la fa door()
         dall'altezza, e l'altezza viene dalla parete: una porta da 2,05 m su un
         muro da 2,70 occupa il 76% della sua altezza. Il passo è W/4, quindi la
         PRIMA E L'ULTIMA sono tagliate dal bordo — perché u1 dice «le porte non
         finiscono, le contate fino a quaranta», e un corridoio che finisce dentro
         il quadro dà una bugia al giocatore che ha appena letto quella riga. */
      const cols = ['#6a5a68', '#5a6a5e', '#6e6250', '#50606a', '#6a5250'];
      const tags = ['#b8b4a8', '#a8a89e', '#b0aca0', '#a0a4a8', '#b4aa9c'];
      const dh = Math.round(floorY * 0.76), dlw = Math.round(dh * 0.42), pitch = W / 4;
      for (let i = 0; i < 5; i++) {
        door(ctx, i * pitch - dlw / 2, floorY, dlw, dh, cols[i], '#2e2c2a', tags[i]);
      }
      // da SOTTO la porta di mezzo: un filo di luce calda — l'unico colore vero
      glow(ctx, 2 * pitch, floorY + 2, dlw * 0.9, 8, '224,178,96');
      ctx.fillStyle = '#e0b260'; ctx.fillRect(2 * pitch - dlw / 2 + 3, floorY - 3, dlw - 6, 3);
      // e da sotto un'altra: un'ombra che passa, buio più buio
      ctx.fillStyle = '#0e0e12'; ctx.fillRect(3 * pitch - dlw / 2 + 3, floorY - 3, dlw - 6, 3);
      // appliques nel muro TRA le porte, metà spente
      for (let i = 0; i < 4; i++) {
        const ax = (i + 0.5) * pitch;
        ctx.fillStyle = '#3a3a40'; ctx.fillRect(ax - 4, H * 0.30, 9, 12);
        if (i % 2 === 0) {
          glow(ctx, ax, H * 0.28, 18, 14, '198,198,188');
          ctx.fillStyle = '#c6c6bc'; ctx.fillRect(ax - 3, H * 0.27, 7, 7);
        } else { ctx.fillStyle = '#4a4a50'; ctx.fillRect(ax - 3, H * 0.27, 7, 7); }
      }
      // passatoia sbiadita lungo tutto il corridoio
      blocks(ctx, W * 0.02, floorY + 8, W * 0.96, H - floorY - 12, '#4a4038', 10, r, 0.12);
      ctx.fillStyle = 'rgba(180,176,168,.14)';
      ctx.fillRect(W * 0.02, floorY + 8, W * 0.96, 2); ctx.fillRect(W * 0.02, H - 6, W * 0.96, 2);
    },

    cameretta(ctx, W, H) {
      // cameretta anni '90: letto a castello, poster sbiaditi, pavimento diviso da nastro
      const r = rng(2039);
      blocks(ctx, 0, 0, W, H, '#3e3c42', 16, r, 0.08);
      const floorY = H - 68;
      blocks(ctx, 0, floorY, W, H - floorY, '#565048', 12, r, 0.10);
      /* IL NASTRO ADESIVO. u2 dice «per terra, da parete a parete, una striscia
         di nastro adesivo MARRONE che divide la stanza esattamente a metà», e
         u3 ci torna sopra: la faccia del Gemello Sbagliato è cucita «col nastro
         adesivo marrone. Quello del pavimento». Era grigio, e saliva anche sul
         muro, dove il testo non lo mette: qui la stanza si vede di fronte,
         quindi «da parete a parete» è la striscia che viene verso di noi
         attraversando tutta la fascia del pavimento. */
      ctx.fillStyle = '#7d6340';
      ctx.fillRect(W * 0.5 - 5, floorY, 9, H - floorY);
      ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(W * 0.5 + 4, floorY, 3, H - floorY);
      ctx.fillStyle = 'rgba(228,214,186,.16)'; ctx.fillRect(W * 0.5 - 5, floorY, 2, H - floorY);
      for (let y = floorY + 6; y < H; y += 21) { ctx.fillStyle = 'rgba(0,0,0,.16)'; ctx.fillRect(W * 0.5 - 5, y, 9, 3); }

      /* IL LETTO A CASTELLO, che è il soggetto della stanza. Prima era lungo
         288 px e alto 108 — due montanti, due materassi e due sponde sottili —
         e leggeva come una SCAFFALATURA, perché non aveva nessuno dei tratti
         che distinguono un letto da un ripiano. Le quote vengono dal letto
         vero: 200 cm di lunghezza per 165 di altezza, materasso basso a 40 cm,
         materasso alto a 115, sponda a 150. Qui 1 cm = 1,25 px, e da quella
         sola cifra vengono tutte le altre. I tratti che mancavano e che adesso
         ci sono: testata e pediera PIENE sui due lati corti, la coperta che
         ricade oltre il materasso, e la sponda del piano di sopra, che corre
         per due terzi della lunghezza e lascia il varco per salire. */
      const PC = 1.25, bx = 40, bl = Math.round(200 * PC), bTop = floorY - Math.round(165 * PC);
      const yMatBas = floorY - Math.round(40 * PC), yMatAlt = floorY - Math.round(115 * PC);
      const ySponda = floorY - Math.round(150 * PC), inX = bx + 20, inW = bl - 40;
      // testata e pediera: pannelli pieni, non montanti
      blocks(ctx, bx, bTop, 20, floorY - bTop, '#544a3a', 7, r, 0.10);
      blocks(ctx, bx + bl - 20, bTop, 20, floorY - bTop, '#4c4232', 7, r, 0.10);
      ctx.fillStyle = '#6a5e48'; ctx.fillRect(bx, bTop, 20, 3); ctx.fillRect(bx + bl - 20, bTop, 20, 3);
      ctx.fillStyle = '#3e3628';                          // la fuga fra le due tavole del pannello
      ctx.fillRect(bx + 9, bTop + 6, 2, floorY - bTop - 6);
      ctx.fillRect(bx + bl - 11, bTop + 6, 2, floorY - bTop - 6);
      // la sponda del piano alto: due terzi della lunghezza, poi il varco
      const spW = Math.round(inW * 0.66);
      blocks(ctx, inX, ySponda, spW, 13, '#544a3a', 7, r, 0.08);
      ctx.fillStyle = '#4c4232';
      ctx.fillRect(inX + 6, ySponda + 13, 5, yMatAlt - ySponda - 13);
      ctx.fillRect(inX + spW - 11, ySponda + 13, 5, yMatAlt - ySponda - 13);
      // i due materassi, il cuscino a capo del letto e la coperta che RICADE
      /* Il LENZUOLO chiaro e la COPERTA scura sopra, e la differenza fra i due
         toni è quello che fa la lettura: al primo tentativo materasso e coperta
         erano due grigi a due punti di distanza, e il letto tornava a leggere
         come un ripiano con delle cose sopra. Un letto si riconosce dal
         contrasto lenzuolo-coperta prima che dalla sagoma. */
      for (const [yMat, cop] of [[yMatAlt, '#5c5346'], [yMatBas, '#544c40']]) {
        blocks(ctx, inX, yMat, inW, 20, '#8a8680', 8, r, 0.07);           // materasso col lenzuolo
        ctx.fillStyle = '#a8a6a2'; ctx.fillRect(inX, yMat, inW, 2);
        ctx.fillStyle = '#9c9a96'; ctx.fillRect(inX + 5, yMat - 12, 52, 14); // cuscino
        ctx.fillStyle = '#b4b2ae'; ctx.fillRect(inX + 5, yMat - 12, 52, 3);
        ctx.fillStyle = '#7c7a76'; ctx.fillRect(inX + 5, yMat - 3, 52, 3);
        blocks(ctx, inX + 58, yMat - 2, inW - 58, 22, cop, 8, r, 0.07);    // la coperta sul lenzuolo
        ctx.fillStyle = shade(cop, 1.18); ctx.fillRect(inX + 58, yMat - 2, inW - 58, 2);
        // la ricaduta oltre il bordo, col lembo che non è mai dritto
        // a passo largo: a sei pixel il lembo veniva una frangia, non una piega
        for (let x = inX + 58; x < inX + inW; x += 14) {
          const dip = 13 + Math.round(r() * 5);
          ctx.fillStyle = shade(cop, 0.86); ctx.fillRect(x, yMat + 20, 14, dip);
          ctx.fillStyle = shade(cop, 0.66); ctx.fillRect(x, yMat + 20 + dip - 2, 14, 2);
        }
        ctx.fillStyle = '#443c30'; ctx.fillRect(inX, yMat + 20, 58, 6);    // la traversa del telaio
      }
      // la scaletta, appoggiata al fianco della pediera e a terra
      ctx.fillStyle = '#4c4232';
      ctx.fillRect(bx + bl + 4, ySponda, 5, floorY - ySponda);
      ctx.fillRect(bx + bl + 24, ySponda, 5, floorY - ySponda);
      for (let y = ySponda + 12; y < floorY - 6; y += 20) ctx.fillRect(bx + bl + 4, y, 25, 4);

      /* I POSTER. u2 promette una cosa sola a colori in tutta la stanza: «le
         maglie grigie, i prati grigi, solo i palloni ancora accesi come
         tizzoni». Nel quadro c'erano quattro rettangoli grigi vuoti con una
         barra al posto del titolo: niente calciatore, niente pallone, e quindi
         niente di quello che il gioco chiede al giocatore di notare (lezione
         62). Erano anche larghi tre volte l'altezza: un poster stampato è 68x98
         cm, cioè LARGO 0,70 VOLTE L'ALTEZZA — verticale, non orizzontale, ed è
         il verso che lascia il posto a una figura in piedi. */
      const poster = (px, py, pw, ph) => {
        ctx.fillStyle = '#33333a'; ctx.fillRect(px + 3, py + 3, pw, ph);      // l'ombra sul muro
        ctx.fillStyle = '#6c6c74'; ctx.fillRect(px, py, pw, ph);              // il cielo grigio
        ctx.fillStyle = '#5c605a'; ctx.fillRect(px, py + ph * 0.58, pw, ph * 0.42); // il prato grigio
        ctx.fillStyle = '#6e726c'; ctx.fillRect(px, py + Math.round(ph * 0.74), pw, 1); // la riga del campo
        const fh = ph * 0.62, cx = px + pw * 0.44, feet = py + ph * 0.90;
        ctx.fillStyle = '#7e7a76';                                            // gambe
        ctx.fillRect(cx - fh * 0.13, feet - fh * 0.30, fh * 0.10, fh * 0.30);
        ctx.fillRect(cx + fh * 0.05, feet - fh * 0.34, fh * 0.10, fh * 0.34);
        ctx.fillStyle = '#63636a';                                            // pantaloncini
        ctx.fillRect(cx - fh * 0.15, feet - fh * 0.46, fh * 0.30, fh * 0.16);
        /* Le braccia scendono LUNGO IL CORPO. Al primo tentativo sporgevano in
           orizzontale dalle spalle e la figura leggeva come uno spaventapasseri:
           una croce, non un uomo. Un braccio che pende è più corto da disegnare
           e dice «persona in piedi» al primo sguardo. */
        ctx.fillStyle = '#7a7a81';
        ctx.fillRect(cx - fh * 0.23, feet - fh * 0.74, fh * 0.07, fh * 0.26);
        ctx.fillRect(cx + fh * 0.16, feet - fh * 0.74, fh * 0.07, fh * 0.26);
        ctx.fillStyle = '#8c8c93';                                            // maglia
        ctx.fillRect(cx - fh * 0.17, feet - fh * 0.78, fh * 0.34, fh * 0.33);
        ctx.fillStyle = '#76767d';                                            // il numero, sbiadito
        ctx.fillRect(cx - fh * 0.05, feet - fh * 0.70, fh * 0.10, fh * 0.14);
        ctx.fillStyle = '#7c7c83';                                            // il collo della maglia
        ctx.fillRect(cx - fh * 0.07, feet - fh * 0.78, fh * 0.14, fh * 0.04);
        ctx.fillStyle = '#7e7a76'; pixelDisc(ctx, cx, feet - fh * 0.87, fh * 0.10, 2); // testa
        // IL PALLONE: l'unica cosa accesa del quadro, e sta a terra, ai piedi
        const bcx = cx + fh * 0.34, bcy = feet - 4;
        glow(ctx, bcx, bcy, 11, 11, '226,124,40');
        ctx.fillStyle = '#e07a24'; pixelDisc(ctx, bcx, bcy, 4, 2);
        ctx.fillStyle = '#f2b064'; ctx.fillRect(bcx - 3, bcy - 3, 3, 2);
        ctx.fillStyle = '#3a3a40'; ctx.fillRect(px, py, pw, 1); ctx.fillRect(px, py, 1, ph);
        ctx.fillStyle = '#4a4a50'; ctx.fillRect(px + pw - 7, py, 7, 7);       // l'angolo scollato
        ctx.fillStyle = 'rgba(214,204,178,.30)'; ctx.fillRect(px + pw * 0.5 - 6, py - 2, 12, 4); // il pezzo di scotch
      };
      poster(360, 56, 68, 97);      // il lato di Federico, oltre la scaletta
      poster(520, 44, 76, 108);
      poster(624, 52, 68, 97);      // il lato di Daniele, oltre il nastro
      poster(716, 48, 72, 103);

      // scrivania a destra con la lampada e il vecchio joypad
      blocks(ctx, W * 0.58, floorY - 36, W * 0.28, 10, '#4a4238', 8, r, 0.08);
      ctx.fillStyle = '#3a342c';
      ctx.fillRect(W * 0.59, floorY - 26, 6, 26); ctx.fillRect(W * 0.84, floorY - 26, 6, 26);
      ctx.fillStyle = '#3a3a40'; ctx.fillRect(W * 0.60, floorY - 52, 3, 16);
      ctx.fillRect(W * 0.595, floorY - 55, 14, 5);
      glow(ctx, W * 0.605, floorY - 52, 16, 12, '210,196,158');
      /* Il joypad resta grigio: il bottone rosso da 3x3 px che faceva da
         colore-firma non si vedeva (sotto i sessanta pixel un oggetto dice solo
         che c'è, e a tre pixel non dice nemmeno quello) e adesso rubava il posto
         ai palloni, che sono la cosa a colori che il testo promette. Un tocco
         acceso per painter: qui sono loro. */
      ctx.fillStyle = '#7a7a80'; ctx.fillRect(W * 0.70, floorY - 42, 20, 9);
      ctx.fillStyle = '#55555a'; ctx.fillRect(W * 0.70 - 14, floorY - 37, 14, 2);
      // tappetino da gioco a destra del nastro
      blocks(ctx, W * 0.56, floorY + 8, W * 0.30, H - floorY - 14, '#4e4a42', 8, r, 0.10);
      // giocattoli grigi sparsi (a terra, mai a mezz'aria)
      ctx.fillStyle = '#6a6a70'; ctx.fillRect(W * 0.42, floorY + 10, 12, 8);
      ctx.fillStyle = '#5a5a60'; ctx.fillRect(W * 0.36, H - 16, 16, 8);
      ctx.fillStyle = '#74747a'; ctx.fillRect(W * 0.63, H - 20, 10, 10);
    },

    spiaggia_grigia(ctx, W, H) {
      // spiaggia di cenere, mare FERMO grigio, due racchettoni piantati, ombrellone rotto
      const r = rng(2053);
      skyGradient(ctx, W, H, '#54545a', '#8a8a8e', 10);
      // un sole senza forza dietro il velo
      ctx.fillStyle = 'rgba(200,200,204,.35)'; pixelDisc(ctx, W * 0.72, H * 0.16, 22);
      const seaY = H * 0.38, shoreY = H * 0.62;
      /* IL PROMONTORIO DI GAETA e la MONTAGNA SPACCATA, a destra. Mancavano, e il testo
         di questa scena dice: «la riconoscete dalla curva della baia, dalla montagna
         spaccata, dal punto esatto dove piantate l'ombrellone da dieci anni». Cioè il
         gioco chiedeva al giocatore di riconoscere un posto, e nel quadro non c'era
         niente da riconoscere: cielo grigio, mare grigio, sabbia. Serapo è chiusa a
         est da Monte Orlando, e la fenditura che lo taglia in tre è la cosa che rende
         quella baia diversa da qualunque altra spiaggia d'Italia. Adesso c'è, e la
         fenditura è l'unica linea nera dell'inquadratura. */
      {
        const mcx = W * 0.855, mw = W * 0.34, mh = H * 0.26;
        for (let dx = -mw / 2; dx < mw / 2 + 3; dx += 3) {
          const t = dx / (mw / 2);
          let hh = mh * Math.pow(Math.max(0, 1 - t * t), 0.40);
          hh *= 0.84 + Math.sin(dx * 0.05) * 0.10 + Math.sin(dx * 0.018) * 0.06;
          if (hh < 1) continue;
          ctx.fillStyle = '#494a50';
          ctx.fillRect(mcx + dx, seaY - hh, 3, hh + 3);
          ctx.fillStyle = 'rgba(150,150,156,.22)';           // il ciglio, appena
          ctx.fillRect(mcx + dx, seaY - hh, 3, 1);
        }
        // LA FENDITURA: dall'alto fino all'acqua, e si allarga scendendo
        for (let k = 0; k < 34; k++) {
          const t = k / 33;
          const larg = 3 + t * 7;
          ctx.fillStyle = `rgba(12,12,16,${0.62 - t * 0.16})`;
          ctx.fillRect(mcx - W * 0.045 - larg / 2 + t * 5, seaY - mh * 0.86 + t * mh * 0.90, larg, 4);
        }
      }
      // IL MARE FERMO: fasce orizzontali immobili, nessuna onda. Più scuro del cielo,
      // perché prima erano lo stesso grigio e l'orizzonte non esisteva.
      for (let i = 0; i < 6; i++) {
        const t = i / 6;
        ctx.fillStyle = mix('#4a5054', '#6a7074', t);
        ctx.fillRect(0, seaY + t * (shoreY - seaY), W, (shoreY - seaY) / 6 + 1);
      }
      ctx.fillStyle = 'rgba(178,178,184,.26)'; ctx.fillRect(0, seaY, W, 1);   // l'orizzonte
      // il riflesso del sole: una colonna spenta, FERMA
      ctx.fillStyle = 'rgba(210,210,214,.12)'; ctx.fillRect(W * 0.69, seaY, W * 0.06, shoreY - seaY);
      /* LA CURVA DELLA BAIA. La riva era una riga orizzontale con qualche scalino
         casuale: una spiaggia qualunque. Serapo è un arco, e l'arco è la prima delle
         tre cose che il testo dice di riconoscere — quindi la riva scende al centro e
         risale ai lati, e l'acqua entra di più dove la baia è più profonda. */
      const arco = x => shoreY - Math.pow(Math.abs(x / W - 0.42) * 2.1, 1.7) * H * 0.085 + H * 0.030;
      for (let x = 0; x < W; x += 3) {
        const y = Math.round(arco(x) + (r() - 0.5) * 4);
        ctx.fillStyle = mix('#4a5054', '#6a7074', 1);
        ctx.fillRect(x, seaY, 3, y - seaY);                  // il mare arriva fino alla riva
        ctx.fillStyle = 'rgba(198,198,202,.20)'; ctx.fillRect(x, y, 3, 1);
        ctx.fillStyle = '#6e6a64'; ctx.fillRect(x, y + 1, 3, 9);   // la cenere bagnata
      }
      // LA SPIAGGIA DI CENERE: parte dall'arco della riva, non da una riga
      ctx.fillStyle = '#7a746a';
      for (let x = 0; x < W; x += 3) ctx.fillRect(x, Math.round(arco(x)) + 9, 3, H);
      ground(ctx, W, H, shoreY + H * 0.045, '#7a746a', r, 12, 10);
      // mucchietti di cenere e qualche conchiglia grigia
      for (let i = 0; i < 8; i++) {
        const px2 = r() * W, py2 = shoreY + 20 + r() * (H - shoreY - 30);
        ctx.fillStyle = '#68625a'; ctx.fillRect(px2, py2, 10 + r() * 12, 4);
      }
      ctx.fillStyle = '#9a968e';
      for (let i = 0; i < 5; i++) ctx.fillRect(r() * W, shoreY + 24 + r() * (H - shoreY - 36), 4, 3);
      /* LA SCALA DI QUESTA SPIAGGIA È UNA SOLA: 120 px per metro. Da lì vengono
         tutte le misure, e le misure vengono dalle cose vere — un racchettone è
         lungo 50 cm col piatto di 26x30, un ombrellone da spiaggia è alto 2,20
         con la calotta di 2 m. Prima erano alti 60 px e 66: uguali. Un oggetto
         fuori scala non legge come «importante», legge come «sbagliato», e
         questa scena si ritrovava due caramelle grandi come un ombrellone. */
      /* I DUE RACCHETTONI piantati nella cenere, uno di fronte all'altro: il
         legno è l'unico colore CALDO rimasto (la firma affettuosa). Erano un
         cerchio su un bastoncino, cioè un lecca-lecca: il pixelDisc ridisegnato
         SOPRA l'ovale riportava il piatto a un tondo pieno. Ora il piatto è un
         ovale 3:4 e non ha niente sopra, fra manico e piatto c'è il COLLO
         strozzato — che è l'unica cosa che dice «racchettone» — e la venatura
         del compensato corre verticale come nel compensato vero. */
      for (const [fx, tilt] of [[0.30, -0.12], [0.44, 0.12]]) {
        ctx.save(); ctx.translate(W * fx, H * 0.86); ctx.rotate(tilt);
        ctx.fillStyle = '#8a5228'; ctx.fillRect(-3, -22, 6, 22);            // manico piantato
        ctx.fillStyle = '#a86a3a'; ctx.fillRect(-3, -22, 2, 22);            // il filo di luce sul manico
        ctx.fillStyle = '#6e4220'; ctx.fillRect(-4, -18, 8, 7);             // la fasciatura
        ctx.fillStyle = '#8a5228'; ctx.fillRect(-4, -27, 8, 6);             // IL COLLO, strozzato
        ctx.fillStyle = '#c08448'; pixelEllipse(ctx, 0, -46, 15, 19, 3);    // il piatto: ovale 3:4
        ctx.fillStyle = '#a86a3a';                                          // le venature, VERTICALI
        ctx.fillRect(-8, -58, 3, 24); ctx.fillRect(5, -58, 3, 24);
        ctx.fillStyle = '#d09c60'; pixelEllipse(ctx, -2, -50, 7, 9, 3);     // il colpo di luce
        ctx.restore();
      }
      glow(ctx, W * 0.37, H * 0.78, 60, 34, '192,132,72');
      // la pallina, a metà strada, ferma da chissà quanto
      ctx.fillStyle = '#d8d4c8'; ctx.fillRect(W * 0.368, H * 0.89, 5, 5);
      /* L'OMBRELLONE ROTTO. Palo 2,20 m = 264 px, calotta 2 m: è LUI il soggetto
         che questa scena non aveva, e adesso sta quattro volte il racchettone
         come nel mondo vero. Mezza calotta è ancora su, dall'altra parte le
         stecche sono nude e la tela pende fino a toccare la cenere. */
      const ux = W * 0.62, uy = H * 0.93;
      ctx.save(); ctx.translate(ux, uy); ctx.rotate(-0.09);
      ctx.fillStyle = '#2e2c28'; ctx.fillRect(-14, -5, 30, 5);              // l'ombra alla base
      ctx.fillStyle = '#6a645c'; ctx.fillRect(-4, -252, 8, 252);           // il palo
      ctx.fillStyle = '#847e76'; ctx.fillRect(-4, -252, 3, 252);           // il filo di luce sul palo
      ctx.fillStyle = '#55524c'; ctx.fillRect(-8, -166, 16, 6);            // lo snodo, rotto
      // la mezza calotta ANCORA SU: un cono che scende verso sinistra
      for (let i = 0; i <= 34; i++) {
        const xx = -i * 3, yTop = -252 + i * 0.4, yBot = -252 + i * 1.9;
        ctx.fillStyle = i % 6 < 3 ? '#8e8a84' : '#7c7872';
        ctx.fillRect(xx - 3, yTop, 4, yBot - yTop);
        if (i % 6 === 0) { ctx.fillStyle = '#5c5952'; ctx.fillRect(xx - 3, yTop, 4, 2); }  // le stecche sotto
      }
      // le STECCHE NUDE dalla parte rotta, che scendono sempre più giù
      for (let sb = 0; sb < 3; sb++) {
        const len = 66 + sb * 14, pend = 0.85 + sb * 0.28;
        ctx.fillStyle = '#55524c';
        for (let i = 0; i < len; i += 3) ctx.fillRect(i, -252 + i * pend, 4, 3);
      }
      // e la TELA CROLLATA che pende dalle stecche e TOCCA la cenere
      for (let i = 0; i < 66; i += 3) {
        const xx = 24 + i, yTop = -252 + xx * 1.02;
        ctx.fillStyle = (i % 12 < 6) ? '#7c7872' : '#6a665f';
        ctx.fillRect(xx, yTop, 4, -yTop - 4);
      }
      ctx.restore();
      // orme che vanno verso il mare e SI FERMANO
      ctx.fillStyle = 'rgba(0,0,0,.20)';
      for (let i = 0; i < 6; i++) ctx.fillRect(W * 0.54 + i * 12, H * 0.92 - i * ((H * 0.92 - shoreY - 12) / 6), 7, 4);
    },

    cabina(ctx, W, H) {
      // interno aereo infinito: file di sedili con sagome, cappelliere, luce fredda
      const r = rng(2063);
      blocks(ctx, 0, 0, W, H, '#44464c', 16, r, 0.06);
      const floorY = H - 54;
      blocks(ctx, 0, floorY, W, H - floorY, '#35363c', 10, r, 0.08);
      // il tubo della fusoliera: soffitto curvo a fasce
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = shade('#4e5056', 1 - i * 0.08);
        ctx.fillRect(W * 0.02 * i, 0, W - W * 0.04 * i, 12 - i * 2);
      }
      /* Un unico punto di fuga per tutta la cabina — cappelliere, finestrini,
         file di sedili e moquette: siamo IN PIEDI nel corridoio, quindi
         l'orizzonte è all'altezza dei nostri occhi (1,60 m) e tutto converge là.
         Alla fila più vicina un metro vale 238 px: da questa sola cifra vengono
         tutte le altre quote, e le quote vengono dall'aereo vero (cappelliera
         fra 1,90 e 2,10 m, finestrino a 1,25, sedile largo 45 cm). */
      const vpx = W * 0.5, vpy = Math.round(H * 0.39), MT = 238;
      // CAPPELLIERE lungo i lati, che convergono verso il fondo
      for (const dir of [-1, 1]) for (const sq of [1, 0.63, 0.44, 0.31, 0.22]) {
        const x1 = vpx + dir * 1.05 * MT * sq, x2 = vpx + dir * 1.78 * MT * sq;
        const y1 = vpy - 0.50 * MT * sq, y2 = vpy - 0.30 * MT * sq;
        const bx = Math.min(x1, x2), bw = Math.abs(x2 - x1);
        ctx.fillStyle = shade('#5a5c64', 1 - (1 - sq) * 0.45); ctx.fillRect(bx, y1, bw, y2 - y1);
        ctx.fillStyle = shade('#6a6c74', 1 - (1 - sq) * 0.45); ctx.fillRect(bx, y1, bw, Math.max(1, 3 * sq));
        ctx.fillStyle = shade('#33353b', 1 - (1 - sq) * 0.45); ctx.fillRect(bx, y2 - Math.max(2, 5 * sq), bw, Math.max(2, 5 * sq));
      }
      // la LUCE FREDDA: strisce al neon lungo il corridoio, convergenti
      for (let i = 0; i < 5; i++) {
        const t = i / 5;
        const lw = W * 0.16 * (1 - t * 0.6);
        glow(ctx, W * 0.5, 16 + t * H * 0.30, lw, 10, '186,198,210');
        ctx.fillStyle = '#bac6d2'; ctx.fillRect(W * 0.5 - lw / 2, 14 + t * H * 0.30, lw, 3);
      }
      /* IL FONDO del corridoio, PRIMA dei sedili: quello che sta dietro si
         disegna prima (lezione 36). Non finisce: si spegne in un chiarore. */
      ctx.fillStyle = 'rgba(186,198,210,.10)'; ctx.fillRect(W * 0.44, H * 0.32, W * 0.12, H * 0.12);
      // moquette: si stringe verso il fondo una riga per volta, non a rettangoli
      for (let y = vpy; y < H; y++) {
        const sq = (y - vpy) / 230;
        const cw = Math.max(2, Math.round(150 * sq * 0.92));
        ctx.fillStyle = shade('#3e3a44', 0.7 + sq * 0.4);
        ctx.fillRect(Math.round(vpx - cw / 2), y, cw, 1);
      }
      /* I FINESTRINI, prima dei sedili perché i sedili li devono coprire in parte.
         Erano quattro fillRect quadrati di 12x16 con scritto in commento «ovali
         neri»: a quella misura non dicevano cosa fossero e sul muro leggevano
         come macchie (lezione 59) — e i finestrini sono l'UNICA cosa che dice
         «aereo». Ora sono ovali veri di 32 px sulla parete vicina, e dietro il
         vetro non c'è cielo: c'è la pista ferma, come dice u5. */
      for (const dir of [-1, 1]) for (const sw4 of [1, 0.62, 0.42, 0.29]) {
        const wx = vpx + dir * (vpx - 30) * sw4, wy = vpy + 22 * sw4;
        const rx = Math.max(4, 16 * sw4), ry = Math.max(3, 12 * sw4);
        ctx.fillStyle = shade('#585a62', 1 - (1 - sw4) * 0.45);
        pixelEllipse(ctx, wx, wy, rx + 3, ry + 3, 2);                  // la cornice
        ctx.fillStyle = shade('#1c1e24', 1 - (1 - sw4) * 0.30);
        pixelEllipse(ctx, wx, wy, rx, ry, 2);                          // il vetro
        ctx.fillStyle = shade('#4c4e56', 1 - (1 - sw4) * 0.45);        // la pista. Ferma.
        ctx.fillRect(Math.round(wx - rx * 0.8), Math.round(wy + ry * 0.3), Math.round(rx * 1.6), Math.max(1, Math.round(ry * 0.3)));
      }
      /* LE FILE DI SEDILI, tre-più-tre come dice u5. Rifatte da zero: prima erano
         fillRect pieni con una riga scura in cima, le file si sovrapponevano
         coprendo la base di quella dietro, e il risultato erano due piramidi di
         casse — «delle scale senza senso». Un sedile d'aereo si riconosce da
         quattro cose, e ora ci sono tutte: il POGGIATESTA staccato dallo
         schienale da una fessura scura, il BRACCIOLO che sporge nel corridoio,
         la TASCA del sedile (quella dove u5e fa trovare i fogli di volo del 19A)
         e il BUIO SOTTO la seduta coi piedini. La fila più vicina è alta 155 px
         e tagliata dal bordo basso: è il soggetto, e dice che siamo lì dentro.
         Le sagome sono su OGNI sedile, perché u5 dice «TUTTI i sedili sono
         occupati» e prima ce n'era una su due. */
      const filaS = [1, 0.63, 0.44, 0.31, 0.22, 0.16];
      for (let ri = filaS.length - 1; ri >= 0; ri--) {
        const sq = filaS[ri], dim = 1 - (1 - sq) * 0.45;
        const topY = Math.round(vpy + 75 * sq);      // capo dello schienale
        const hrB = Math.round(vpy + 103 * sq);      // la fessura sotto il poggiatesta
        const cuY = Math.round(vpy + 170 * sq);      // il cuscino della seduta
        const baY = Math.round(vpy + 230 * sq);      // il pavimento di questa fila
        const sw2 = 110 * sq, aw2 = 150 * sq;
        for (const dir of [-1, 1]) {
          const inner = vpx + dir * aw2 / 2;
          const bx0 = dir < 0 ? inner - 3 * sw2 : inner;
          // il buio sotto la seduta e i piedini: solo dove la fila è grande
          if (sq > 0.42) {
            ctx.fillStyle = shade('#1e2026', dim);
            ctx.fillRect(bx0, cuY, 3 * sw2, baY - cuY);
            ctx.fillStyle = shade('#3a3c42', dim);
            for (let g = 0; g <= 3; g++) ctx.fillRect(bx0 + g * sw2 - 2, cuY + 10 * sq, 5, baY - cuY - 10 * sq);
            ctx.fillStyle = shade('#4a4c54', dim);
            ctx.fillRect(bx0, cuY, 3 * sw2, Math.max(3, 13 * sq));     // il bordo del cuscino
            ctx.fillStyle = shade('#5c5e68', dim);
            ctx.fillRect(bx0, cuY, 3 * sw2, Math.max(1, 3 * sq));
          }
          for (let k = 0; k < 3; k++) {
            const sx2 = bx0 + k * sw2;
            /* Il manichino va disegnato PRIMA del sedile: da qui vediamo la nuca,
               e lo schienale gliene copre la metà bassa. Il conto è quello della
               lezione 51 — un sedile è 45 cm, una testa 22, quindi la testa è
               mezzo sedile; e sopra il capo dello schienale (1,15 m) di una testa
               ferma a 1,30 sporgono 15 cm, cioè un terzo. */
            ctx.fillStyle = shade('#2c2e35', dim);
            pixelDisc(ctx, sx2 + sw2 / 2, topY - 12 * sq, Math.max(4, 27 * sq), Math.max(2, Math.round(3 * sq)));
            // schienale a tre fasce di tono, dal poggiatesta in giù
            ctx.fillStyle = shade('#474951', dim); ctx.fillRect(sx2, hrB, sw2, cuY - hrB);
            ctx.fillStyle = shade('#41434b', dim); ctx.fillRect(sx2, hrB + (cuY - hrB) * 0.46, sw2, (cuY - hrB) * 0.54);
            ctx.fillStyle = shade('#37393f', dim); ctx.fillRect(sx2, cuY - Math.max(2, 9 * sq), sw2, Math.max(2, 9 * sq));
            ctx.fillStyle = shade('#2c2e34', dim); ctx.fillRect(sx2, hrB, Math.max(1, 3 * sq), cuY - hrB); // cucitura
            /* Il TAVOLINO chiuso con la sua chiusura, e sotto la TASCA con la
               rivista che sporge. Sono i due segni che, visti da dietro, dicono
               «sedile d'aereo» e non «anta d'armadio»: senza di loro il blocco
               di tre restava una fila di cassettiere, ed è così che la scena
               veniva letta. La rivista è anche l'unico taglio chiaro su un
               pannello grande, quindi rompe la piattezza (regola delle 3 fasce). */
            if (sq > 0.40) {
              const tw3 = sw2 * 0.80, tx3 = sx2 + (sw2 - tw3) / 2;
              const ty3 = Math.round(hrB + (cuY - hrB) * 0.22);
              ctx.fillStyle = shade('#3c3e45', dim); ctx.fillRect(tx3, ty3, tw3, Math.max(2, (cuY - hrB) * 0.16));
              ctx.fillStyle = shade('#5c5e67', dim); ctx.fillRect(tx3, ty3, tw3, 2);
              ctx.fillStyle = shade('#6a6c74', dim); ctx.fillRect(sx2 + sw2 / 2 - 3, ty3 + (cuY - hrB) * 0.16 - 1, 7, 3);
              const pw3 = sw2 * 0.68, px3 = sx2 + (sw2 - pw3) / 2;
              const py3 = Math.round(hrB + (cuY - hrB) * 0.52);
              ctx.fillStyle = shade('#8c8e96', dim);                     // la rivista che sporge
              ctx.fillRect(px3 + pw3 * 0.14, py3 - Math.max(2, 7 * sq), pw3 * 0.44, Math.max(3, 9 * sq));
              ctx.fillStyle = shade('#31333a', dim);
              ctx.fillRect(px3, py3, pw3, Math.round((cuY - hrB) * 0.34));
              ctx.fillStyle = shade('#585a63', dim); ctx.fillRect(px3, py3, pw3, 2);
            }
            // poggiatesta STACCATO dallo schienale da una fessura scura
            const hw2 = sw2 * 0.84, hx2 = sx2 + (sw2 - hw2) / 2;
            ctx.fillStyle = shade('#22242a', dim); ctx.fillRect(sx2, hrB - Math.max(1, 3 * sq), sw2, Math.max(1, 4 * sq));
            ctx.fillStyle = shade('#4e5058', dim); ctx.fillRect(hx2, topY, hw2, hrB - topY - Math.max(1, 3 * sq));
            ctx.fillStyle = shade('#5e6068', dim); ctx.fillRect(hx2, topY, hw2, Math.max(2, 4 * sq));
          }
          // bracciolo del posto sul corridoio: sporge NEL corridoio
          const arw = Math.max(3, 13 * sq);
          ctx.fillStyle = shade('#4e5058', dim);
          ctx.fillRect(dir < 0 ? inner : inner - arw, cuY - Math.max(4, 26 * sq), arw, Math.max(6, 34 * sq));
          ctx.fillStyle = shade('#64666f', dim);
          ctx.fillRect(dir < 0 ? inner : inner - arw, cuY - Math.max(4, 26 * sq), arw, Math.max(2, 5 * sq));
        }
      }
      // il segnale ALLACCIARE LE CINTURE: acceso, ambra — l'unico punto caldo
      ctx.fillStyle = '#2e3036'; ctx.fillRect(W * 0.47, 26, W * 0.06, 12);
      glow(ctx, W * 0.5, 32, 20, 12, '224,168,72');
      ctx.fillStyle = '#e0a848'; ctx.fillRect(W * 0.482, 29, 8, 6);
      ctx.fillStyle = '#8a8a92'; ctx.fillRect(W * 0.508, 29, 8, 6);
    },

    stanza_sommersa(ctx, W, H) {
      // muro d'acqua nera verticale, scogli, UNA luce calda in fondo
      const r = rng(2069);
      blocks(ctx, 0, 0, W, H, '#14161c', 16, r, 0.12);
      const floorY = H - 56;
      // pavimento di roccia bagnata
      ground(ctx, W, H, floorY, '#2a2e34', r, 12, 10);
      ctx.fillStyle = 'rgba(160,180,200,.08)';
      for (let i = 0; i < 10; i++) ctx.fillRect(r() * W, floorY + 4 + r() * (H - floorY - 8), 16, 2);
      // IL MURO D'ACQUA: una parete verticale che occupa il fondo, nera e VIVA
      const wx = W * 0.30, ww = W * 0.70;
      for (let i = 0; i < 8; i++) {
        const t = i / 8;
        ctx.fillStyle = mix('#0a0e16', '#131a26', t * 0.7);
        ctx.fillRect(wx + t * ww * 0.04, 0, ww, floorY + 8);
      }
      // il bordo dell'acqua: colonna di schiuma immobile dove il muro incontra l'aria
      for (let y = 0; y < floorY + 6; y += 10) {
        const off = Math.round((r() - 0.5) * 6);
        ctx.fillStyle = 'rgba(178,196,210,.20)'; ctx.fillRect(wx - 3 + off, y, 5, 10);
        if (r() > 0.7) { ctx.fillStyle = 'rgba(210,224,234,.25)'; ctx.fillRect(wx - 6 + off, y + 3, 3, 4); }
      }
      // dentro l'acqua: cose sospese, appena leggibili
      ctx.fillStyle = 'rgba(120,140,158,.18)';
      for (let i = 0; i < 9; i++) ctx.fillRect(wx + 24 + r() * (ww - 60), 20 + r() * (floorY - 40), 8 + r() * 14, 3);
      // una sagoma lunga, in ombra, a mezza altezza (la paura di Claudia)
      ctx.fillStyle = 'rgba(20,26,34,.85)';
      ctx.fillRect(wx + ww * 0.30, H * 0.30, ww * 0.34, 14);
      ctx.fillRect(wx + ww * 0.58, H * 0.30 + 10, ww * 0.10, 8);
      // LA LUCE CALDA in fondo, dentro l'acqua: piccola, ostinata
      const lx2 = wx + ww * 0.72, ly2 = H * 0.56;
      glow(ctx, lx2, ly2, 46, 40, '232,180,96');
      glow(ctx, lx2, ly2, 22, 20, '240,200,120');
      ctx.fillStyle = '#e8b460'; ctx.fillRect(lx2 - 5, ly2 - 5, 10, 10);
      ctx.fillStyle = '#f5d898'; ctx.fillRect(lx2 - 2, ly2 - 2, 4, 4);
      // GLI SCOGLI davanti al muro, appoggiati al pavimento
      for (const [fx, s2] of [[0.12, 34], [0.24, 24], [0.46, 40], [0.68, 28], [0.86, 36]]) {
        const gx = W * fx, gy = floorY + 8;
        blocks(ctx, gx - s2 / 2, gy - s2 * 0.7, s2, s2 * 0.7, '#3a4046', 8, r, 0.20);
        blocks(ctx, gx - s2 * 0.3, gy - s2, s2 * 0.6, s2 * 0.4, '#444a52', 8, r, 0.18);
        // il bagnato che luccica sulla cresta
        ctx.fillStyle = 'rgba(190,206,220,.22)'; ctx.fillRect(gx - s2 * 0.2, gy - s2 + 2, s2 * 0.4, 2);
      }
      // pozze sul pavimento che riflettono la luce calda
      ctx.fillStyle = 'rgba(232,180,96,.10)';
      ctx.fillRect(W * 0.55, floorY + 10, 40, 5); ctx.fillRect(W * 0.72, floorY + 16, 30, 4);
      ctx.fillStyle = 'rgba(140,160,178,.12)';
      ctx.fillRect(W * 0.16, floorY + 14, 34, 4);
    },

    cucina_fredda(ctx, W, H) {
      // cucina industriale fredda, frigo enorme aperto, lattine rosse a FRECCIA
      const r = rng(2081);
      blocks(ctx, 0, 0, W, H, '#3a3e42', 16, r, 0.08);
      const floorY = H - 66;
      // piastrelle grandi da cucina industriale
      blocks(ctx, 0, floorY, W, H - floorY, '#4a4e52', 14, r, 0.08);
      ctx.fillStyle = 'rgba(0,0,0,.18)';
      for (let y = floorY; y < H; y += 14) ctx.fillRect(0, y, W, 2);
      for (let x = 0; x < W; x += 26) ctx.fillRect(x, floorY, 2, H - floorY);
      // neon freddi a soffitto
      for (const fx of [0.22, 0.60]) {
        ctx.fillStyle = '#33363a'; ctx.fillRect(W * fx, 10, W * 0.16, 6);
        glow(ctx, W * fx + W * 0.08, 18, W * 0.14, 14, '190,206,216');
        ctx.fillStyle = '#becbd6'; ctx.fillRect(W * fx + 4, 14, W * 0.16 - 8, 3);
      }
      // il PIANO D'ACCIAIO, accorciato: il posto a destra serve all'anta che si apre
      blocks(ctx, W * 0.10, floorY - 40, W * 0.30, 12, '#8e949a', 8, r, 0.06);
      ctx.fillStyle = '#5a5e64';
      ctx.fillRect(W * 0.12, floorY - 28, 8, 28); ctx.fillRect(W * 0.36, floorY - 28, 8, 28);
      ctx.fillStyle = 'rgba(230,236,240,.20)'; ctx.fillRect(W * 0.10, floorY - 40, W * 0.30, 2);
      // due teglie grigie fuori dal frigo: la cena catalogata come reperti
      teglia(ctx, W * 0.14, floorY - 60, 62, 20, '#9aa0a8');
      teglia(ctx, W * 0.26, floorY - 60, 62, 20, '#949aa2');
      // cappa e pentole appese (alla barra della cappa, non a mezz'aria)
      ctx.fillStyle = '#4a4e54'; ctx.fillRect(W * 0.14, H * 0.14, W * 0.32, 16);
      ctx.fillStyle = '#3a3e44'; ctx.fillRect(W * 0.16, H * 0.14 + 16, W * 0.28, 4);
      for (let i = 0; i < 4; i++) {
        const px2 = W * 0.19 + i * W * 0.08;
        ctx.fillStyle = '#5e646a'; ctx.fillRect(px2, H * 0.14 + 20, 3, 8);
        ctx.fillStyle = '#787e86'; ctx.fillRect(px2 - 8, H * 0.14 + 28, 19, 12);
      }
      // lavello con rubinetto che gocciola una goccia FERMA
      blocks(ctx, W * 0.02, floorY - 34, W * 0.07, 34, '#6a7076', 8, r, 0.08);
      ctx.fillStyle = '#8e949a'; ctx.fillRect(W * 0.045, floorY - 48, 4, 14);
      ctx.fillRect(W * 0.045, floorY - 48, 14, 4);
      ctx.fillStyle = '#c8d4dc'; ctx.fillRect(W * 0.055 + 6, floorY - 40, 3, 4);

      /* ============ IL FRIGO, che è la scena ============
         k1 lo descrive in tre battute e il quadro ne smentiva tutte e tre: «un
         frigo industriale a DOPPIA ANTA» e ne aveva una; «pieno di CENA,
         lasagne, parmigiana, pasta al forno, impilate con cura maniacale su
         ogni ripiano» e dentro aveva cinque rettangolini; «dodici lattine di
         Coca Zero sul ripiano centrale, le uniche cose a colori» e le lattine
         stavano sul bancone d'acciaio, dieci metri più in là. Ed era anche la
         superficie più chiara dell'inquadratura — 218x226 di un solo grigio
         chiaro — quindi l'occhio ci andava per primo e ci trovava il vuoto: la
         scena si apre mostrando il contrario di quello che il testo fa notare.
         Adesso il frigo è il SOGGETTO (278 px su 960, alto due terzi del
         quadro, disegnato per ultimo perché è la cosa più vicina) e il vano ha
         i tre piani che gli mancavano: il fondo che prende la luce della
         lampadina, i due fianchi in ombra, il cielo e il pavimento del vano, e
         il FRONTE di ogni ripiano. La cura maniacale non si disegna: si ottiene
         allineando le teglie alla stessa x su tutti i ripiani. */
      const fw2 = Math.round(W * 0.29), fh2 = Math.round(H * 0.72);
      const fx2 = Math.round(W * 0.62), fty = floorY - fh2;
      // la luce che cola fuori PRIMA della carcassa, o gli lava sopra
      glow(ctx, fx2 + fw2 / 2, fty + fh2 / 2, fw2 * 1.15, fh2 * 0.8, '176,182,190');
      blocks(ctx, fx2, fty, fw2, fh2, '#7e848a', 8, r, 0.06);
      // IL VANO. d = la profondità apparente: da lì vengono i quattro fianchi.
      const ix = fx2 + 10, iy = fty + 10, iw = fw2 - 20, ih = fh2 - 20, d = 20;
      ctx.fillStyle = '#b6bcc4'; ctx.fillRect(ix, iy, iw, ih);          // il fondo, il più chiaro
      /* I quattro fianchi sono quadrilateri che si incastrano sulle diagonali
         degli angoli (t = min dei due lati): senza il min si sovrappongono e
         negli angoli resta un dente. Il fianco sinistro è il più scuro perché
         la luce della cucina entra dall'anta di destra. */
      for (let y = iy; y < iy + ih; y++) {
        const g = Math.round(d * Math.min(1, (y - iy) / d, (iy + ih - 1 - y) / d));
        ctx.fillStyle = '#767c85'; ctx.fillRect(ix, y, g, 1);
        ctx.fillStyle = '#8e949d'; ctx.fillRect(ix + iw - g, y, g, 1);
      }
      for (let x = ix; x < ix + iw; x++) {
        const g = Math.round(d * Math.min(1, (x - ix) / d, (ix + iw - 1 - x) / d));
        ctx.fillStyle = '#a4aab3'; ctx.fillRect(x, iy, 1, g);
        ctx.fillStyle = '#888e97'; ctx.fillRect(x, iy + ih - g, 1, g);
      }
      // IL CASSETTO DELLE VERDURE in basso: quello che Natalino richiude di scatto
      const draH = 34, draY = iy + ih - draH;
      ctx.fillStyle = '#9ea4ac'; ctx.fillRect(ix + 4, draY, iw - 8, draH - 2);
      ctx.fillStyle = '#c0c6ce'; ctx.fillRect(ix + 4, draY, iw - 8, 2);
      ctx.fillStyle = '#1a1c20'; ctx.fillRect(ix + 4, draY + 4, iw - 8, 4);  // la fessura. Respira.
      ctx.fillStyle = '#767c84'; ctx.fillRect(ix + iw / 2 - 22, draY + 14, 44, 5);
      /* QUATTRO RIPIANI. Su tre ci sono le teglie, due per pila, tre pile per
         ripiano, tutte alla stessa x: è l'allineamento che dice «catalogato».
         Il secondo dall'alto è il RIPIANO CENTRALE del testo, e lì ci stanno le
         lattine — quindi resta libero, altrimenti il rosso non si vede. */
      const compH = (ih - draH) / 4, tgW = 74, tgGap = (iw - 3 * tgW) / 4;
      // l'alone rosso sul fondo del vano, PRIMA delle teglie: se lo si disegna
      // dentro il ciclo lava di rosa anche il ripiano di sopra
      const midBot = Math.round(iy + 2 * compH);
      glow(ctx, ix + 60, midBot - 26, 92, 30, '192,36,46');
      for (let k = 0; k < 4; k++) {
        const cBot = Math.round(iy + (k + 1) * compH);
        if (k === 1) {
          /* LE DODICI LATTINE A FRECCIA, sul ripiano centrale, la punta a
             sinistra: verso il resto della cucina, dove k1 manda a cercare la
             dispensa. Cinque file a 8 px di passo su lattine alte 11, disegnate
             dal fondo in avanti: si sovrappongono di tre pixel, e la
             sovrapposizione È la profondità del ripiano. Con tre file sole i
             due bracci della punta finivano incolonnati e la freccia leggeva
             come una T; il braccio deve salire in DIAGONALE, una lattina per
             fila, o non è una punta. */
          const s3 = 8, base3 = cBot - 11, tipX = ix + 14;
          lattina(ctx, tipX + 26, base3 - 4 * s3);
          lattina(ctx, tipX + 13, base3 - 3 * s3);
          for (let i = 0; i < 8; i++) lattina(ctx, tipX + i * 13, base3 - 2 * s3);
          lattina(ctx, tipX + 13, base3 - s3);
          lattina(ctx, tipX + 26, base3);
        } else {
          for (let j = 0; j < 3; j++) {
            const tx4 = Math.round(ix + tgGap + j * (tgW + tgGap));
            teglia(ctx, tx4, cBot - 21, tgW, 20, k === 0 ? '#a2a8b0' : '#989ea6');
            teglia(ctx, tx4, cBot - 43, tgW, 20, k === 0 ? '#9aa0a8' : '#9098a0');
          }
        }
        // il FRONTE del ripiano: il filo chiaro che prende luce, e l'ombra sotto
        ctx.fillStyle = '#ccd2da'; ctx.fillRect(ix, cBot, iw, 4);
        ctx.fillStyle = '#5e646c'; ctx.fillRect(ix, cBot + 4, iw, 2);
      }
      /* LE DUE ANTE, aperte una per lato, quella di destra tagliata dal bordo
         dell'inquadratura. Lamiera secondo la convenzione di trent'anni fa
         (lezione 58): tre fasce di tono — in alto ci si riflette il neon, in
         basso il pavimento — più UN pixel chiaro sul filo libero, che è quello
         che trasforma un cartone in acciaio. */
      const lw2 = Math.round(fw2 * 0.47), lh2 = Math.round(fh2 * 0.98);
      for (const dir of [-1, 1]) {
        ctx.save();
        ctx.translate(dir < 0 ? fx2 : fx2 + fw2, fty);
        ctx.rotate(dir * 0.05);
        const x0 = dir < 0 ? -lw2 : 0;
        ctx.fillStyle = '#8e949c'; ctx.fillRect(x0, 0, lw2, lh2);
        ctx.fillStyle = '#9ca2aa'; ctx.fillRect(x0, 0, lw2, lh2 * 0.30);
        ctx.fillStyle = '#7a8086'; ctx.fillRect(x0, lh2 * 0.72, lw2, lh2 * 0.28);
        const free = dir < 0 ? x0 : x0 + lw2 - 2;
        ctx.fillStyle = '#c2c8d0'; ctx.fillRect(free, 0, 2, lh2);
        ctx.fillStyle = '#6a7076'; ctx.fillRect(dir < 0 ? x0 + 8 : x0 + lw2 - 13, lh2 * 0.30, 5, 74);
        ctx.fillStyle = '#a8aeb6'; ctx.fillRect(dir < 0 ? x0 + 8 : x0 + lw2 - 13, lh2 * 0.30, 5, 2);
        ctx.restore();
      }
    },

    sottoscala(ctx, W, H) {
      // intercapedine infernale: tubi che pulsano, scala a pioli, buio denso
      const r = rng(2087);
      blocks(ctx, 0, 0, W, H, '#17151a', 16, r, 0.18);
      const floorY = H - 46;
      blocks(ctx, 0, floorY, W, H - floorY, '#100e12', 12, r, 0.16);
      // le due pareti strette dell'intercapedine
      blocks(ctx, 0, 0, W * 0.14, H, '#221f26', 10, r, 0.14);
      blocks(ctx, W * 0.86, 0, W * 0.14, H, '#221f26', 10, r, 0.14);
      // TUBI verticali e orizzontali, ancorati alle pareti con staffe
      const pipeCols = ['#3a333c', '#443a40', '#332e38'];
      for (const [fx, pw2] of [[0.17, 10], [0.25, 7], [0.78, 12], [0.70, 6]]) {
        ctx.fillStyle = pipeCols[Math.floor(r() * 3)];
        ctx.fillRect(W * fx, 0, pw2, H);
        ctx.fillStyle = '#55505a'; // staffe
        for (let y = 30; y < H; y += 70) ctx.fillRect(W * fx - 3, y, pw2 + 6, 5);
      }
      for (const fy of [0.16, 0.52]) {
        ctx.fillStyle = pipeCols[1]; ctx.fillRect(W * 0.14, H * fy, W * 0.72, 9);
        ctx.fillStyle = '#55505a';
        ctx.fillRect(W * 0.30, H * fy - 2, 6, 13); ctx.fillRect(W * 0.62, H * fy - 2, 6, 13);
      }
      // i tubi PULSANO: giunture che spandono un rosso sordo (l'unico colore)
      for (const [px2, py2] of [[W * 0.19, H * 0.30], [W * 0.80, H * 0.62], [W * 0.46, H * 0.52 + 4], [W * 0.28, H * 0.74]]) {
        glow(ctx, px2, py2, 30, 26, '150,40,44');
        ctx.fillStyle = '#96282c'; ctx.fillRect(px2 - 5, py2 - 5, 10, 10);
        ctx.fillStyle = '#c0453e'; ctx.fillRect(px2 - 2, py2 - 2, 4, 4);
      }
      // LA SCALA A PIOLI, dritta, dal pavimento su nel buio
      const lx2 = W * 0.48;
      ctx.fillStyle = '#4a4238';
      ctx.fillRect(lx2 - 12, 0, 5, floorY + 6); ctx.fillRect(lx2 + 8, 0, 5, floorY + 6);
      ctx.fillStyle = '#5a5044';
      for (let y = 14; y < floorY; y += 20) ctx.fillRect(lx2 - 12, y, 25, 4);
      // il buio DENSO in alto: la scala ci sparisce dentro
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgba(6,5,8,${0.18 + i * 0.13})`;
        ctx.fillRect(0, 0, W, H * 0.30 - i * H * 0.05);
      }
      // in basso: il passaggio strisciante verso il banco del Mercante, con un lume lontano
      ctx.fillStyle = '#0a090c'; ctx.fillRect(W * 0.30, floorY - 34, W * 0.13, 34);
      glow(ctx, W * 0.365, floorY - 16, 18, 14, '224,178,96');
      ctx.fillStyle = '#e0b260'; ctx.fillRect(W * 0.36, floorY - 18, 4, 4);
      // cavi che corrono lungo la parete, fissati con clip
      ctx.fillStyle = '#26232a';
      for (let i = 0; i < 3; i++) {
        const cy2 = H * 0.82 + i * 5;
        ctx.fillRect(W * 0.14, cy2, W * 0.72, 2);
      }
      ctx.fillStyle = '#3a3640';
      for (let x = W * 0.2; x < W * 0.86; x += W * 0.16) ctx.fillRect(x, H * 0.81, 4, 12);
      // condensa che luccica
      ctx.fillStyle = 'rgba(150,160,180,.10)';
      for (let i = 0; i < 8; i++) ctx.fillRect(W * 0.14 + r() * W * 0.72, r() * H, 2, 6);
    },

    mercante(ctx, W, H) {
      // banco di compensato tra i tubi, lampada da campeggio, merci appese
      const r = rng(2089);
      blocks(ctx, 0, 0, W, H, '#191720', 16, r, 0.16);
      const floorY = H - 56;
      blocks(ctx, 0, floorY, W, H - floorY, '#121016', 12, r, 0.14);
      // tubi di contorno, come nel sottoscala, con staffe
      ctx.fillStyle = '#3a333c'; ctx.fillRect(W * 0.06, 0, 9, H);
      ctx.fillStyle = '#443a40'; ctx.fillRect(W * 0.92, 0, 11, H);
      ctx.fillStyle = '#55505a';
      for (let y = 24; y < H; y += 64) { ctx.fillRect(W * 0.06 - 3, y, 15, 5); ctx.fillRect(W * 0.92 - 3, y, 17, 5); }
      ctx.fillStyle = '#332e38'; ctx.fillRect(W * 0.06, H * 0.14, W * 0.86, 8);
      // IL BANCO DI COMPENSATO: assi diseguali su cavalletti
      const bx = W * 0.28, bw = W * 0.44;
      ctx.fillStyle = '#4a3e30';
      ctx.fillRect(bx + 8, floorY - 32, 10, 32); ctx.fillRect(bx + bw - 18, floorY - 32, 10, 32); // cavalletti
      ctx.fillRect(bx + 4, floorY - 26, 18, 4); ctx.fillRect(bx + bw - 22, floorY - 26, 18, 4);
      blocks(ctx, bx, floorY - 40, bw, 10, '#6a5a42', 8, r, 0.14);
      ctx.fillStyle = '#554836'; ctx.fillRect(bx, floorY - 40, bw, 2);
      ctx.fillStyle = '#3a3228'; ctx.fillRect(bx + bw * 0.35, floorY - 39, 3, 9); // la giuntura tra le assi
      // LA LAMPADA DA CAMPEGGIO sul banco: IL cerchio di luce calda della scena
      const lx2 = bx + bw * 0.5, ly2 = floorY - 54;
      glow(ctx, lx2, ly2, 90, 70, '232,180,96');
      glow(ctx, lx2, ly2, 44, 36, '240,200,120');
      ctx.fillStyle = '#3a3a40'; ctx.fillRect(lx2 - 8, ly2 + 4, 16, 10);      // base sul banco
      ctx.fillStyle = '#f0d090'; ctx.fillRect(lx2 - 6, ly2 - 8, 12, 12);      // il globo
      ctx.fillStyle = '#fae8c0'; ctx.fillRect(lx2 - 3, ly2 - 5, 6, 6);
      ctx.fillStyle = '#55555c'; ctx.fillRect(lx2 - 7, ly2 - 12, 14, 4);      // il manico
      // MERCI APPESE a una corda tesa tra i tubi (mollette comprese)
      ctx.fillStyle = '#6a625a'; ctx.fillRect(W * 0.10, H * 0.30, W * 0.80, 2);
      const wares = [
        ['#7a746a', 12, 16], ['#5c6a5e', 10, 12], ['#6a5a68', 14, 10],
        ['#556066', 9, 14], ['#6e6250', 12, 12], ['#60565e', 10, 16],
      ];
      for (let i = 0; i < wares.length; i++) {
        const [c2, ww2, wh2] = wares[i];
        const wx2 = W * (0.14 + i * 0.13);
        ctx.fillStyle = '#4a4438'; ctx.fillRect(wx2 + ww2 / 2 - 1, H * 0.30 + 2, 2, 8); // gancetto
        ctx.fillStyle = c2; ctx.fillRect(wx2, H * 0.30 + 10, ww2, wh2);
      }
      // sul banco: boccette, un barattolo che CONTIENE colore (rosso: firma)
      ctx.fillStyle = '#5a5a62'; ctx.fillRect(bx + 24, floorY - 52, 8, 12);
      ctx.fillStyle = '#6a6a72'; ctx.fillRect(bx + 38, floorY - 50, 7, 10);
      ctx.fillStyle = '#8a8a92'; ctx.fillRect(bx + bw - 60, floorY - 50, 10, 10);
      ctx.fillStyle = '#c0242e'; ctx.fillRect(bx + bw - 44, floorY - 52, 9, 12); // IL barattolo
      ctx.fillStyle = '#e8646a'; ctx.fillRect(bx + bw - 42, floorY - 50, 5, 4);
      glow(ctx, bx + bw - 40, floorY - 46, 18, 16, '192,36,46');
      // pile di cianfrusaglie ai piedi del banco
      blocks(ctx, bx - 34, floorY - 20, 30, 20, '#3a342c', 8, r, 0.16);
      blocks(ctx, bx + bw + 6, floorY - 26, 34, 26, '#332e28', 8, r, 0.16);
      ctx.fillStyle = '#55505a'; ctx.fillRect(bx + bw + 12, floorY - 32, 14, 6);
      // il buio fitto alle spalle del banco: il Mercante ci vive dentro
      // (cornici concentriche: niente rettangolo netto sospeso sul muro)
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = 'rgba(6,5,8,.20)';
        ctx.fillRect(W * (0.30 + i * 0.035), H * (0.16 + i * 0.03), W * (0.40 - i * 0.07), H * (0.22 - i * 0.055));
      }
    },

    galleria(ctx, W, H) {
      /* LA GALLERIA DEI SONNAMBULI. Rifatta: erano QUATTRO teche identiche di
         163x190 px riempite di un solo grigio (#22262c), che leggevano come
         quattro porte d'ascensore, e dentro ognuna una sagoma alta 38 px — tre
         volte troppo piccola per dire cosa fosse. Il metro qui è la teca: deve
         contenere una persona, quindi la persona è il metro di tutto il resto
         (lezione 51). Ora sono DUE teche di scorcio tagliate dai bordi (le
         «file e file» del testo) più UNA in primo piano larga un terzo
         dell'inquadratura, e dentro la grande il sonnambulo è alto 126 px, con
         la poltrona sotto, il riverbero della TV sulla faccia e le righe del
         pigiama larghe di conseguenza. Dentro ogni teca ci sono TRE PIANI —
         fondo illuminato dalla TV, fianchi in ombra, ripiano orizzontale —
         perché un unico colore piatto su 163x190 px è la definizione di
         cartone. */
      const r = rng(2099);
      blocks(ctx, 0, 0, W, H, '#1a1a1f', 16, r, 0.14);
      const floorY = H - 60;
      blocks(ctx, 0, floorY, W, H - floorY, '#26262c', 12, r, 0.10);
      // corsia lucida al centro, coi riflessi delle teche
      blocks(ctx, W * 0.02, floorY + 6, W * 0.96, H - floorY - 10, '#2e2e36', 10, r, 0.08);

      /* Una teca. `k` è la scala: 1 = la teca in primo piano, e ogni misura
         dentro è un multiplo di k, così le due laterali sono la STESSA cosa
         vista da più lontano e non un disegno diverso. */
      const teca = (tx, tw, ty, th, rgb, scr, primo) => {
        const k = th / 240, bot = ty + th;
        glow(ctx, tx + tw / 2, ty + th * 0.55, tw * 0.5, th * 0.38, rgb);
        // il fondo della teca, con l'alone chiaro dove batte la TV
        ctx.fillStyle = '#20242a'; ctx.fillRect(tx, ty, tw, th);
        ctx.fillStyle = '#2b313a';
        pixelEllipse(ctx, tx + tw * 0.52, ty + th * 0.58, tw * 0.40, th * 0.32, 4);
        // i fianchi in ombra: sono loro a dire che la teca ha una profondità
        const fw = Math.max(4, Math.round(tw * 0.07));
        ctx.fillStyle = '#15171c'; ctx.fillRect(tx, ty, fw, th); ctx.fillRect(tx + tw - fw, ty, fw, th);
        ctx.fillStyle = '#2e333b'; ctx.fillRect(tx + fw - 2, ty, 2, th); ctx.fillRect(tx + tw - fw, ty, 2, th);
        // il ripiano su cui poggia la poltrona: il terzo piano
        const rip = Math.max(6, Math.round(th * 0.12));
        ctx.fillStyle = '#2d3138'; ctx.fillRect(tx + fw, bot - rip, tw - fw * 2, rip);
        ctx.fillStyle = '#3d424a'; ctx.fillRect(tx + fw, bot - rip, tw - fw * 2, Math.max(2, Math.round(3 * k)));
        const sy = bot - rip, cx = tx + tw * 0.44;
        // LA POLTRONA: spalliera, cuscino che sporge, braccioli grossi
        const chW = Math.round(112 * k), chB = Math.round(112 * k);
        ctx.fillStyle = '#37333f'; ctx.fillRect(cx - chW / 2, sy - chB, chW, chB);
        ctx.fillStyle = '#443f4d'; ctx.fillRect(cx - chW / 2, sy - chB, chW, Math.max(2, Math.round(4 * k)));
        ctx.fillStyle = '#3f3a49'; ctx.fillRect(cx - chW / 2 - 4 * k, sy - 26 * k, chW + 8 * k, 26 * k);
        ctx.fillStyle = '#4d4759'; ctx.fillRect(cx - chW / 2 - 4 * k, sy - 26 * k, chW + 8 * k, Math.max(2, Math.round(3 * k)));
        for (const bxa of [cx - chW / 2 - 10 * k, cx + chW / 2 - 3 * k]) {
          ctx.fillStyle = '#494354'; ctx.fillRect(bxa, sy - 52 * k, 13 * k, 30 * k);
          ctx.fillStyle = '#5a536a'; ctx.fillRect(bxa, sy - 52 * k, 13 * k, Math.max(2, Math.round(3 * k)));
        }
        /* IL SONNAMBULO: 126 px nella teca grande. Le quote sono quelle di una
           persona seduta — busto 0,55 m per 0,44 di spalle, testa 0,24 — e alla
           scala della teca (109 px per metro) fanno 60x48 e 26. Quello che lo fa
           leggere come persona e non come scatola a righe è il resto: la testa
           TONDA, il collo, le spalle più strette in cima, le braccia staccate
           di tono appoggiate sui braccioli e le mani in fondo. */
        const cu = sy - 26 * k;                       // il capo del cuscino: ci si siede qui
        ctx.fillStyle = '#4a4650';                                            // gambe che vengono avanti
        ctx.fillRect(cx - 18 * k, cu - 2 * k, 54 * k, 16 * k);
        ctx.fillStyle = '#514c58'; ctx.fillRect(cx - 18 * k, cu - 2 * k, 54 * k, Math.max(1, Math.round(3 * k)));
        ctx.fillStyle = '#464250'; ctx.fillRect(cx + 22 * k, cu + 14 * k, 17 * k, sy - cu - 14 * k);
        ctx.fillStyle = '#33303a'; ctx.fillRect(cx + 20 * k, sy - 5 * k, 23 * k, 5 * k);   // le ciabatte
        // busto: spalle più strette in cima, poi il torace
        ctx.fillStyle = '#565260';
        ctx.fillRect(cx - 17 * k, cu - 60 * k, 34 * k, 8 * k);
        ctx.fillRect(cx - 24 * k, cu - 52 * k, 48 * k, 52 * k);
        // le braccia, di un tono staccato, appoggiate sui braccioli, con le mani
        for (const dirb of [-1, 1]) {
          const abx = dirb < 0 ? cx - 24 * k - 11 * k : cx + 24 * k;
          ctx.fillStyle = '#4b4756'; ctx.fillRect(abx, cu - 48 * k, 11 * k, 44 * k);
          ctx.fillStyle = '#6a6474'; ctx.fillRect(abx, cu - 10 * k, 11 * k, 8 * k);   // la mano
        }
        // le righe del pigiama, larghe in proporzione al busto
        ctx.fillStyle = '#6b6678';
        for (let sr = 0; sr < 4; sr++) ctx.fillRect(cx - 24 * k, cu - 44 * k + sr * 12 * k, 48 * k, Math.max(1, Math.round(4 * k)));
        // il collo, poi la testa TONDA; e sulla faccia il riverbero della TV
        ctx.fillStyle = '#4e4a58'; ctx.fillRect(cx - 6 * k, cu - 68 * k, 12 * k, 10 * k);
        ctx.fillStyle = '#6a6574'; pixelDisc(ctx, cx, cu - 76 * k, 15 * k, Math.max(2, Math.round(3 * k)));
        ctx.fillStyle = scr; ctx.fillRect(cx + 4 * k, cu - 82 * k, 9 * k, 16 * k);
        ctx.fillStyle = '#3c3946'; pixelDisc(ctx, cx, cu - 84 * k, 13 * k, Math.max(2, Math.round(3 * k))); // i capelli
        // LA TV: piccola, di tre quarti, lo schermo girato verso di lui
        const tvW = Math.round(46 * k), tvH = Math.round(34 * k);
        const tvX = tx + tw - fw - tvW - Math.round(14 * k), tvY = sy - tvH - Math.round(22 * k);
        ctx.fillStyle = '#2a2c32'; ctx.fillRect(tvX + tvW / 2 - 5 * k, tvY + tvH, 10 * k, 22 * k);
        ctx.fillStyle = '#34363d'; ctx.fillRect(tvX + tvW / 2 - 15 * k, sy - 5 * k, 30 * k, 5 * k);
        ctx.fillStyle = '#1c1e23'; ctx.fillRect(tvX, tvY, tvW, tvH);
        ctx.fillStyle = '#33353c'; ctx.fillRect(tvX, tvY, tvW, Math.max(2, Math.round(3 * k)));
        glow(ctx, tvX - 3 * k, tvY + tvH / 2, 22 * k, 16 * k, rgb);
        ctx.fillStyle = scr; ctx.fillRect(tvX - Math.max(3, 5 * k), tvY + 4 * k, Math.max(3, 5 * k), tvH - 8 * k);
        // il vetro davanti: montanti, cimasa e il riflesso in diagonale
        ctx.fillStyle = '#4a4e56';
        ctx.fillRect(tx - 3, ty - Math.max(4, 6 * k), tw + 6, Math.max(4, 6 * k));
        ctx.fillRect(tx - 3, ty, 4, th); ctx.fillRect(tx + tw - 1, ty, 4, th);
        ctx.fillStyle = 'rgba(210,220,230,.07)';
        for (let kk = 0; kk < 4; kk++) ctx.fillRect(tx + 10 * k + kk * 6 * k, ty + 10 * k + kk * 26 * k, Math.max(2, 4 * k), 34 * k);
        // il basamento e la targhetta d'ottone (senza nome: le parole stanno nel DOM)
        blocks(ctx, tx - 8, bot, tw + 16, floorY - bot + 12, '#3a3a42', 8, r, 0.10);
        ctx.fillStyle = '#8a8578'; ctx.fillRect(tx + tw / 2 - 14 * k, bot + 5, 28 * k, Math.max(4, 7 * k));
        ctx.fillStyle = '#6a655c'; ctx.fillRect(tx + tw / 2 - 10 * k, bot + 7, 20 * k, 2);
        // IL CUORE DI COLORE incastonato nel montante: l'unico caldo della sala,
        // ed è quello che k8_prendi fa staccare «con uno scatto morbido»
        if (primo) {
          glow(ctx, tx + tw / 2, ty - 4, 26, 18, '214,86,64');
          ctx.fillStyle = '#8a3a34'; ctx.fillRect(tx + tw / 2 - 8, ty - 12, 16, 12);
          ctx.fillStyle = '#d65640'; ctx.fillRect(tx + tw / 2 - 5, ty - 10, 10, 8);
          ctx.fillStyle = '#f0a080'; ctx.fillRect(tx + tw / 2 - 3, ty - 9, 4, 3);
        }
        // il riflesso della teca sulla corsia lucida
        ctx.fillStyle = `rgba(${rgb},.07)`; ctx.fillRect(tx + 6, floorY + 6, tw - 12, H - floorY - 12);
      };

      // due teche di scorcio, tagliate dai bordi: le «file e file» del testo
      teca(-46, 250, 108, 192, '150,160,178', '#96a0b2', false);
      teca(756, 250, 108, 192, '128,150,164', '#8096a4', false);
      // LA TECA IN PRIMO PIANO: 340 px su 960, un terzo dell'inquadratura
      teca(310, 340, 48, 240, '138,168,190', '#8aa8be', true);
      // il soffitto se lo mangia il buio
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = `rgba(8,8,12,${0.16 + i * 0.12})`;
        ctx.fillRect(0, 0, W, H * 0.16 - i * H * 0.032);
      }
    },

    sala_switch(ctx, W, H) {
      // schermo GIGANTE a parete con colori piatti finti, cavi come radici sul pavimento
      const r = rng(2111);
      blocks(ctx, 0, 0, W, H, '#1d1d24', 16, r, 0.12);
      const floorY = H - 62;
      blocks(ctx, 0, floorY, W, H - floorY, '#2a2a30', 12, r, 0.10);
      // LO SCHERMO GIGANTE: quasi tutta la parete
      const sx = W * 0.14, sw = W * 0.72, sy2 = H * 0.08, sh2 = floorY - sy2 - 26;
      glow(ctx, sx + sw / 2, sy2 + sh2 / 2, sw * 0.9, sh2 * 0.9, '150,170,186');
      ctx.fillStyle = '#111116'; ctx.fillRect(sx - 10, sy2 - 10, sw + 20, sh2 + 20);
      // la "vita finta in loop": colori PIATTI, da videogioco allegro ma tutti spenti a metà
      ctx.fillStyle = '#7a9ab0'; ctx.fillRect(sx, sy2, sw, sh2 * 0.55);                 // cielo finto
      ctx.fillStyle = '#7ba078'; ctx.fillRect(sx, sy2 + sh2 * 0.55, sw, sh2 * 0.45);     // prato finto
      ctx.fillStyle = '#b8c8d2'; pixelDisc(ctx, sx + sw * 0.78, sy2 + sh2 * 0.2, 14);    // sole piatto
      // nuvolette a blocchi
      ctx.fillStyle = '#c8d2da';
      ctx.fillRect(sx + sw * 0.16, sy2 + sh2 * 0.14, 34, 8); ctx.fillRect(sx + sw * 0.22, sy2 + sh2 * 0.10, 20, 8);
      ctx.fillRect(sx + sw * 0.50, sy2 + sh2 * 0.22, 28, 8);
      // la casetta finta e l'omino finto: la vita che Eleinad gli proietta
      // (piantata SUL prato finto, non a mezz'aria nel cielo)
      const hy2 = sy2 + sh2 * 0.55 - 26;
      ctx.fillStyle = '#a08468'; ctx.fillRect(sx + sw * 0.30, hy2, 44, 30);
      ctx.fillStyle = '#7a5a46'; for (let i = 0; i < 3; i++) ctx.fillRect(sx + sw * 0.30 - 6 + i * 6, hy2 - 6 - i * 5, 56 - i * 12, 5);
      ctx.fillStyle = '#5a5a62'; ctx.fillRect(sx + sw * 0.345, hy2 + 16, 10, 14);
      // l'omino: fermo a metà passo, DA SEMPRE
      ctx.fillStyle = '#4a4a52';
      ctx.fillRect(sx + sw * 0.58, sy2 + sh2 * 0.62, 10, 18); ctx.fillRect(sx + sw * 0.585, sy2 + sh2 * 0.56, 8, 8);
      // glitch: righe orizzontali dove il loop si riavvia
      ctx.fillStyle = 'rgba(255,255,255,.10)';
      ctx.fillRect(sx, sy2 + sh2 * 0.33, sw, 3); ctx.fillRect(sx, sy2 + sh2 * 0.78, sw, 2);
      ctx.fillStyle = 'rgba(20,20,28,.18)'; ctx.fillRect(sx + sw * 0.62, sy2, sw * 0.06, sh2);
      // il mobiletto sotto lo schermo con la console: il LED blu acceso
      blocks(ctx, sx + sw * 0.36, floorY - 26, sw * 0.28, 26, '#33333a', 8, r, 0.10);
      ctx.fillStyle = '#26262c'; ctx.fillRect(sx + sw * 0.44, floorY - 20, sw * 0.12, 10);
      ctx.fillStyle = '#4a90c8'; ctx.fillRect(sx + sw * 0.445, floorY - 18, 3, 6); // l'unico colore acceso
      glow(ctx, sx + sw * 0.45, floorY - 15, 12, 10, '74,144,200');
      // I CAVI COME RADICI: dal mobiletto si allargano su tutto il pavimento
      ctx.fillStyle = '#17171c';
      const cx2 = sx + sw * 0.5;
      for (let i = 0; i < 7; i++) {
        let px2 = cx2, py2 = floorY - 2, dirx = (i - 3) * 0.9;
        for (let seg = 0; seg < 7; seg++) {
          const len = 10 + r() * 16;
          ctx.fillRect(Math.min(px2, px2 + dirx * len), py2, Math.abs(dirx * len) + 4, 4);
          px2 += dirx * len; py2 += 5 + r() * 6;
          if (py2 > H - 8) break;
        }
      }
      // nodi/radici più grosse dove i cavi si accavallano
      ctx.fillStyle = '#221f26';
      for (let i = 0; i < 5; i++) ctx.fillRect(W * (0.2 + i * 0.15), floorY + 6 + (i % 3) * 8, 14, 7);
    },

    trono(ctx, W, H) {
      // il Divano-Trono su una pedana, bozzolo di filamenti grigi, cavo HDMI innestato
      const r = rng(2113);
      blocks(ctx, 0, 0, W, H, '#16161c', 16, r, 0.16);
      const floorY = H - 58;
      blocks(ctx, 0, floorY, W, H - floorY, '#26262c', 12, r, 0.12);
      // il buio alto della sala
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = `rgba(6,6,10,${0.16 + i * 0.13})`;
        ctx.fillRect(0, 0, W, H * 0.24 - i * H * 0.05);
      }
      // LA PEDANA a gradoni, al centro
      for (let i = 0; i < 3; i++) {
        const pw2 = W * (0.62 - i * 0.10);
        blocks(ctx, W * 0.5 - pw2 / 2, floorY - 10 - i * 10, pw2, 12, shade('#3a3a42', 1 + i * 0.06), 8, r, 0.10);
      }
      const topY = floorY - 30; // piano della pedana
      /* IL DIVANO-TRONO. Prima era tre blocks() sovrapposti a mattoni 8px: un muro
         grigio con una cornice, e nessuno ci leggeva un divano. Un divano si
         riconosce da quattro cose e non da altro — i CUSCINI separati da cuciture,
         il FILO DI LUCE sul capo di ogni cuscino, i BRACCIOLI grossi che sporgono
         IN AVANTI (quindi disegnati per ultimi, sopra la seduta), e la FASCIA
         FRONTALE sotto la seduta con l'ombra a terra. Qui sono flat fill a tre
         fasce di tono e non blocchi: la texture a mattoni era metà del problema. */
      const dx = W * 0.31, dw = W * 0.38;
      /* Le misure vengono dal divano vero, non a occhio: seduta a 45 cm, capo del
         bracciolo a 62, e uno schienale da trono che arriva a 1,60. Alla scala di
         questa pedana (1 m ≈ 68 px) fanno 30, 42 e 108 px — cioè il bracciolo è
         DUE TERZI dello schienale, non quasi uguale: quando erano uguali le due
         colonne laterali leggevano come pilastri e il tutto come una facciata. */
      const armW = 48, armH = 62, backTop = topY - 122, seatTop = topY - 44, seatBot = topY - 14;
      ctx.fillStyle = '#232329';                                             // ombra portata a terra
      ctx.fillRect(dx - 8, topY - 5, dw + 16, 7);
      // lo schienale, e sul suo capo il RULLO chiaro: è lui che dice imbottitura
      ctx.fillStyle = '#3a3a44'; ctx.fillRect(dx + 14, backTop + 10, dw - 28, seatTop - backTop);
      ctx.fillStyle = '#4e4e5a'; ctx.fillRect(dx + 18, backTop, dw - 36, 14);
      ctx.fillStyle = '#65656f'; ctx.fillRect(dx + 18, backTop, dw - 36, 3);
      // TRE cuscini di spalliera, più larghi che alti, separati da cuciture scure
      const bw = (dw - 40) / 3;
      for (let k = 0; k < 3; k++) {
        const cx3 = dx + 20 + k * bw;
        ctx.fillStyle = '#43434e'; ctx.fillRect(cx3 + 3, backTop + 16, bw - 9, seatTop - backTop - 12);
        ctx.fillStyle = '#4d4d59'; ctx.fillRect(cx3 + 6, backTop + 20, bw - 15, 20);
        ctx.fillStyle = '#5a5a66'; ctx.fillRect(cx3 + 4, backTop + 17, bw - 11, 2);
        ctx.fillStyle = '#2a2a32'; ctx.fillRect(cx3 + bw - 6, backTop + 16, 4, seatTop - backTop - 12);
      }
      ctx.fillStyle = '#26262d'; ctx.fillRect(dx + 18, seatTop + 1, dw - 36, 5); // l'incavo seduta/schienale
      // seduta: DUE cuscini col capo chiaro, e la fascia frontale sotto
      for (let k = 0; k < 2; k++) {
        const sx3 = dx + 20 + k * (dw - 40) / 2;
        ctx.fillStyle = '#50505c'; ctx.fillRect(sx3, seatTop + 6, (dw - 40) / 2 - 5, seatBot - seatTop - 6);
        ctx.fillStyle = '#65656f'; ctx.fillRect(sx3, seatTop + 6, (dw - 40) / 2 - 5, 3);
      }
      ctx.fillStyle = '#3a3a41'; ctx.fillRect(dx + 16, seatBot, dw - 32, topY - seatBot - 3); // fascia
      ctx.fillStyle = '#2c2c33'; ctx.fillRect(dx + 16, seatBot, dw - 32, 2);
      // braccioli: bassi e grossi, col rullo arrotondato in cima, disegnati per
      // ULTIMI perché in un divano sporgono in avanti e coprono il capo della seduta
      for (const ax3 of [dx, dx + dw - armW]) {
        ctx.fillStyle = '#46464f'; ctx.fillRect(ax3, topY - armH, armW, armH);
        ctx.fillStyle = '#52525e'; ctx.fillRect(ax3 + 3, topY - armH - 9, armW - 6, 12);
        ctx.fillStyle = '#666672'; ctx.fillRect(ax3 + 6, topY - armH - 9, armW - 12, 3);
        ctx.fillStyle = '#33333a'; ctx.fillRect(ax3 + armW - 4, topY - armH, 4, armH); // spigolo in ombra
      }
      /* IL BOZZOLO sul trono. Era un disco di 30 px con dentro un quadrato scuro
         di 20: sotto i sessanta pixel non diceva cosa fosse (lezione 59), e il
         quadrato scuro al centro leggeva come un buco. Ora è un ovale verticale
         alto 96 con TESTA E SPALLE FUORI, perché il testo di m3 è preciso: i
         filamenti «lo avvolgono dal petto in giù», e il cavo entra «nella base
         del collo» — quindi il collo si deve vedere, o lo spinotto non ha dove
         innestarsi. Col fuori-tutto il soggetto della scena arriva a 130 px. */
      const bx = W * 0.5, by = topY - 46;
      glow(ctx, bx, by - 6, 56, 62, '150,150,158');
      ctx.fillStyle = '#6a6a72';
      pixelEllipse(ctx, bx, by, 36, 48);                       // il bozzolo, ovale come un corpo
      ctx.fillStyle = '#7a7a82'; pixelEllipse(ctx, bx - 4, by - 8, 24, 30);
      ctx.fillStyle = '#8a8a92'; ctx.fillRect(bx - 21, by - 54, 42, 18);   // spalle di Daniele, fuori
      ctx.fillStyle = '#3c3c44'; ctx.fillRect(bx - 8, by - 52, 16, 10);    // il collo, in ombra
      ctx.fillStyle = '#9a9aa2'; ctx.fillRect(bx - 11, by - 74, 22, 24);   // la testa
      ctx.fillStyle = '#5c5c64'; ctx.fillRect(bx - 11, by - 74, 22, 6);    // i capelli
      ctx.fillStyle = '#2e2e34'; ctx.fillRect(bx - 7, by - 64, 4, 3);      // gli occhi aperti,
      ctx.fillRect(bx + 3, by - 64, 4, 3);                                 // che seguono lo schermo
      // i filamenti: fasce che avvolgono il bozzolo e SCENDONO ancorandosi a trono e pedana
      ctx.fillStyle = '#55555e';
      for (let i = 0; i < 5; i++) {
        ctx.save(); ctx.translate(bx, by); ctx.rotate(-0.6 + i * 0.3);
        ctx.fillRect(-34, -3 + i, 68, 4); ctx.restore();
      }
      ctx.fillStyle = '#4a4a52';
      ctx.fillRect(bx - 34, by + 10, 5, topY - by - 10); ctx.fillRect(bx + 28, by + 4, 5, topY - by - 4);
      ctx.fillRect(bx - 6, by + 24, 4, topY - by - 24);
      // IL CAVO HDMI: parte dalla BASE DEL COLLO, come dice m3, e serpeggia giù
      // fino a fuori scena passando davanti alla pedana
      ctx.fillStyle = '#111116';
      ctx.fillRect(bx + 10, by - 46, 22, 5);
      let px2 = bx + 32, py2 = by - 46;
      for (let seg = 0; seg < 8; seg++) {
        ctx.fillRect(px2, py2, 5, 24); py2 += 24;
        ctx.fillRect(px2, py2, 26, 5); px2 += 26;
        if (py2 > H - 14) break;
      }
      // lo spinotto nel collo, con la spia rossa: IL colore della scena
      ctx.fillStyle = '#26262c'; ctx.fillRect(bx + 6, by - 50, 10, 12);
      ctx.fillStyle = '#c0242e'; ctx.fillRect(bx + 8, by - 47, 3, 3);
      glow(ctx, bx + 9, by - 46, 14, 12, '192,36,46');
      // due bracieri ai lati della pedana... spenti; resta un fumo dritto
      for (const fx of [0.16, 0.84]) {
        blocks(ctx, W * fx - 8, floorY - 26, 18, 26, '#33333a', 6, r, 0.12);
        ctx.fillStyle = '#44444c'; ctx.fillRect(W * fx - 11, floorY - 30, 24, 6);
        ctx.fillStyle = 'rgba(150,150,158,.12)';
        for (let k = 0; k < 4; k++) ctx.fillRect(W * fx - 2 + (k % 2) * 3, floorY - 44 - k * 12, 4, 10);
      }
    },

    cattedrale(ctx, W, H) {
      // navata di divani fusi come panche, TV-vetrate, il fondo con una sagoma-buco
      const r = rng(2129);
      blocks(ctx, 0, 0, W, H, '#15151b', 16, r, 0.16);
      const floorY = H - 56;
      blocks(ctx, 0, floorY, W, H - floorY, '#2c2c32', 12, r, 0.10);
      // il buio della volta
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgba(5,5,9,${0.15 + i * 0.12})`;
        ctx.fillRect(0, 0, W, H * 0.26 - i * H * 0.045);
      }
      // TV-VETRATE lungo le pareti: alte, strette, luce da acquario
      for (const side of [0, 1]) for (let i = 0; i < 3; i++) {
        const t = i / 3;
        const vw2 = W * 0.07 * (1 - t * 0.35), vh2 = H * 0.36 * (1 - t * 0.3);
        const vx2 = side ? W * (0.97 - t * 0.20) - vw2 : W * (0.03 + t * 0.20);
        const vy2 = H * 0.16 + t * H * 0.06;
        glow(ctx, vx2 + vw2 / 2, vy2 + vh2 / 2, vw2 * 2, vh2 * 0.8, '128,158,180');
        ctx.fillStyle = '#17171d'; ctx.fillRect(vx2 - 4, vy2 - 4, vw2 + 8, vh2 + 8);
        ctx.fillStyle = '#7a98ac'; ctx.fillRect(vx2, vy2, vw2, vh2);
        ctx.fillStyle = '#2a2a32';
        ctx.fillRect(vx2, vy2 + vh2 * 0.5, vw2, 3); ctx.fillRect(vx2 + vw2 / 2 - 1, vy2, 3, vh2);
        ctx.fillStyle = '#94b0c2'; ctx.fillRect(vx2 + 2, vy2 + 2, vw2 / 2 - 4, vh2 / 2 - 4);
        // ogni vetrata poggia su una lesena LARGA quanto lei, che scende fino a terra
        const lw3 = Math.max(14, Math.round(vw2 * 0.8));
        blocks(ctx, vx2 + vw2 / 2 - lw3 / 2, vy2 + vh2 + 4, lw3, floorY - vy2 - vh2 - 4, '#2a2a31', 8, r, 0.12);
        ctx.fillStyle = '#34343c'; ctx.fillRect(vx2 - 2, vy2 + vh2 + 4, vw2 + 4, 5); // il davanzale che li unisce
      }
      /* LA NAVATA: file di divani fusi come panche. Tre correzioni, tutte
         necessarie perché si leggessero come FILE e non come una scalinata:
         (1) la distanza fra le file cresce verso l'osservatore — t^0.65 invece
             di t — così la prima fila ha 56 px di respiro e non 27, e nessuna
             fila copre la base di quella dietro (era quello a fare i gradoni);
         (2) ogni fila è SPEZZATA dalla corsia centrale, che è il segno per cui
             una fila di sedute si legge come banco di chiesa;
         (3) seduta, schienale e filo di luce sul capo dello schienale: tre toni
             più un pixel chiaro, la convenzione dell'imbottitura. Con un solo
             tono piatto una superficie legge come cartone — e nera come niente. */
      const navaD = floorY - H * 0.46;
      for (let row = 4; row >= 0; row--) {
        const t = row / 4;                          // row 4 = la fila più lontana
        const sc = 1 - t * 0.55;                    // scala prospettica dei pezzi
        const py2 = floorY - navaD * Math.pow(t, 0.65);
        const pw2 = W * (0.58 - t * 0.26), px2 = W * 0.5 - pw2 / 2;
        const aw2 = W * (0.15 - t * 0.08);          // la corsia che spezza la fila
        const seatH = Math.max(5, Math.round(15 * sc)), backH = Math.max(6, Math.round(30 * sc));
        for (const half of [[px2, W * 0.5 - aw2 / 2], [W * 0.5 + aw2 / 2, px2 + pw2]]) {
          const hx = half[0], hw = half[1] - half[0];
          if (hw < 6) continue;
          // schienale, poi seduta davanti: la seduta copre il piede dello schienale
          ctx.fillStyle = shade('#3c3c46', 1 - t * 0.30);
          ctx.fillRect(hx, py2 - seatH - backH, hw, backH);
          ctx.fillStyle = shade('#5e5e6a', 1 - t * 0.30);              // il filo di luce
          ctx.fillRect(hx, py2 - seatH - backH, hw, Math.max(1, Math.round(2 * sc)));
          ctx.fillStyle = shade('#4a4a54', 1 - t * 0.30);
          ctx.fillRect(hx, py2 - seatH, hw, seatH);
          ctx.fillStyle = shade('#585862', 1 - t * 0.30);
          ctx.fillRect(hx, py2 - seatH, hw, Math.max(1, Math.round(2 * sc)));
          ctx.fillStyle = shade('#2a2a31', 1 - t * 0.30);               // l'ombra sotto la seduta
          ctx.fillRect(hx, py2 - 2, hw, 3);
          // braccioli fusi male: gobbe dove i divani si sono saldati fra loro
          const gobbe = Math.max(1, Math.round(hw / 90));
          for (let k = 1; k <= gobbe; k++) {
            const gw = Math.max(4, Math.round(11 * sc)), gh = Math.max(3, Math.round(9 * sc));
            ctx.fillStyle = shade('#4e4e58', 1 - t * 0.30);
            ctx.fillRect(hx + k * hw / (gobbe + 1) - gw / 2, py2 - seatH - backH - gh, gw, gh);
            ctx.fillStyle = shade('#66666f', 1 - t * 0.30);
            ctx.fillRect(hx + k * hw / (gobbe + 1) - gw / 2, py2 - seatH - backH - gh, gw, 2);
          }
        }
      }
      // corsia centrale: la passatoia si stringe verso il fondo UNA RIGA PER VOLTA.
      // A blocchi di sei era una scaletta di rettangoli — un'altra scalinata dove
      // serviva una fuga prospettica.
      for (let y = Math.round(floorY - navaD); y <= floorY; y++) {
        const u = (floorY - y) / navaD;              // 0 = ai nostri piedi, 1 = in fondo
        const cw = Math.round(W * (0.145 - u * 0.085));
        ctx.fillStyle = shade('#3a3640', 1 - u * 0.30);
        ctx.fillRect(Math.round(W * 0.5 - cw / 2), y, cw, 1);
      }
      // IL FONDO: una parete di chiarore freddo... con una SAGOMA-BUCO al centro,
      // la forma di una persona dove la luce semplicemente NON c'è
      const ax = W * 0.5, aw = W * 0.20, ay = H * 0.14, ah = H * 0.34;
      glow(ctx, ax, ay + ah / 2, aw * 1.6, ah, '150,170,186');
      ctx.fillStyle = '#8aa0b2'; ctx.fillRect(ax - aw / 2, ay, aw, ah);
      ctx.fillStyle = '#9db2c2'; ctx.fillRect(ax - aw / 2 + 4, ay + 4, aw - 8, ah * 0.4);
      // la sagoma-buco: nero assoluto, in piedi, ferma
      ctx.fillStyle = '#040406';
      ctx.fillRect(ax - 9, ay + ah * 0.30, 18, ah * 0.70);        // corpo
      ctx.fillRect(ax - 6, ay + ah * 0.16, 12, ah * 0.16);        // testa
      ctx.fillRect(ax - 15, ay + ah * 0.38, 6, ah * 0.36);        // braccia lungo i fianchi
      ctx.fillRect(ax + 9, ay + ah * 0.38, 6, ah * 0.36);
      // e ai piedi della parete, UNA lattina rossa lasciata come un cero votivo
      lattina(ctx, ax - 4, H * 0.46 + 14);
      glow(ctx, ax, H * 0.46 + 19, 14, 12, '192,36,46');
    },

    alba_colori(ctx, W, H) {
      // la strada di casa ALL'ALBA: i colori SATURI che tornano — il painter più caldo del gioco
      const r = rng(2131);
      // cielo che esplode: indaco -> rosa -> oro
      skyGradient(ctx, W, H * 0.55, '#5a6ab8', '#f0907a', 12);
      skyGradient(ctx, W, H * 0.30, '#5a6ab8', '#8a7ac2', 6);
      ctx.fillStyle = 'rgba(255,196,120,.30)'; ctx.fillRect(0, H * 0.34, W, H * 0.20);
      // IL SOLE che sale in fondo alla strada
      glow(ctx, W * 0.5, H * 0.46, 120, 90, '255,200,110');
      ctx.fillStyle = '#ffd878'; pixelDisc(ctx, W * 0.5, H * 0.47, 30);
      ctx.fillStyle = '#fff0b8'; pixelDisc(ctx, W * 0.5, H * 0.47, 18);
      // nuvole accese di rosa e oro
      for (const [fx, fy, fw2] of [[0.12, 0.10, 90], [0.60, 0.07, 70], [0.78, 0.16, 100], [0.30, 0.20, 60]]) {
        ctx.fillStyle = '#f5b088'; ctx.fillRect(W * fx, H * fy, fw2, 10);
        ctx.fillStyle = '#ffd0a0'; ctx.fillRect(W * fx + 10, H * fy - 6, fw2 * 0.6, 8);
      }
      const g = H - 56;
      /* IL FONDO DELLA STRADA. Qui c'era il buco più imbarazzante di tutti e cinque i
         giochi: il cielo si fermava a H*0.55, il terreno cominciava a H-56, e in mezzo
         — cioè esattamente dove la strada va verso il sole che sorge, nell'ULTIMA
         immagine del gioco, quella dell'epilogo — nessuno dipingeva niente. Nel
         riquadro si vedeva il nero del fondo: una fascia di 495×105 in mezzo alla
         schermata che dovrebbe dire «è finita, ed è mattina». Trovato dal controllo
         nuovo sui fondali, non dall'occhio: l'ho guardata più volte e la fascia scura
         in fondo alla strada sembrava lontananza.
         Adesso è foschia: il rosa del cielo che si scalda scendendo, come succede
         all'alba quando la luce radente attraversa più aria. */
      for (let y = Math.round(H * 0.55) - 1; y < g + 2; y++) {
        const t = (y - H * 0.55) / (g - H * 0.55);
        ctx.fillStyle = mix('#f0907a', '#f8c496', Math.min(1, Math.max(0, t)));
        ctx.fillRect(0, y, W, 1);
      }
      // le quinte dei palazzi: FACCIATE COLORATE dal sole — ocra, terracotta, salvia
      const palCols = [['#d8a860', '#b8884a'], ['#c86a52', '#a85440'], ['#8aa878', '#6e8a60']];
      for (const side of [0, 1]) {
        for (let i = 0; i < 3; i++) {
          const t = i / 3;
          const pw = W * (0.16 - t * 0.04), ph = H * (0.62 - t * 0.14);
          const px = side ? W - W * (0.02 + i * 0.15) - pw : W * (0.02 + i * 0.15);
          const [wall, roofc] = palCols[(i + side) % 3];
          blocks(ctx, px, g - ph, pw, ph, wall, 9, r, 0.10);
          blocks(ctx, px - 4, g - ph - 8, pw + 8, 9, roofc, 8, r, 0.10);
          // finestre che SPECCHIANO l'alba: oro vivo
          for (let wr = 0; wr < 4; wr++) for (let wc = 0; wc < 2; wc++) {
            const wx = px + 8 + wc * (pw - 26), wy = g - ph + 12 + wr * ph / 4.6;
            ctx.fillStyle = (wr + wc + i) % 2 ? '#ffcc70' : '#f5a860';
            ctx.fillRect(wx, wy, 11, 14);
            ctx.fillStyle = '#c88848'; ctx.fillRect(wx + 5, wy, 2, 14);
          }
          // balconi con gerani ROSSI e panni stesi colorati
          ctx.fillStyle = '#7a5a3a'; ctx.fillRect(px + 4, g - ph + ph / 4.6 + 28, pw - 8, 4);
          ctx.fillStyle = '#e03a3a'; ctx.fillRect(px + 8, g - ph + ph / 4.6 + 24, 8, 5);
          ctx.fillStyle = '#3a9a4a'; ctx.fillRect(px + 9, g - ph + ph / 4.6 + 21, 6, 4);
          if (i === 0) {
            const cy2 = g - ph + 2 * ph / 4.6 + 30;
            ctx.fillStyle = '#5a5a62'; ctx.fillRect(px + 6, cy2, pw - 12, 2);
            for (let k = 0; k < 3; k++) {
              ctx.fillStyle = ['#f0c848', '#4a90c8', '#e06a9a'][k];
              ctx.fillRect(px + 10 + k * (pw - 24) / 3, cy2 + 2, 12, 14);
            }
          }
        }
      }
      // l'asfalto che si scalda di rosa; la mezzeria torna BIANCA
      blocks(ctx, 0, g, W, H - g, '#5a4a52', 12, r, 0.12);
      ctx.fillStyle = 'rgba(240,144,122,.18)'; ctx.fillRect(0, g, W, H - g);
      ctx.fillStyle = '#f0ece0';
      for (let i = 0; i < 5; i++) {
        const t = i / 5;
        ctx.fillRect(W * 0.5 - 8 + t * 4, g + 6 + i * (H - g - 10) / 5, 16 - t * 8, 5);
      }
      // marciapiedi caldi
      blocks(ctx, 0, g - 4, W * 0.20, 8, '#c8a878', 8, r, 0.10);
      blocks(ctx, W * 0.80, g - 4, W * 0.20, 8, '#c8a878', 8, r, 0.10);
      // gli alberi del viale: VERDI VERI, accesi dal controluce
      tree(ctx, W * 0.13, g + 2, 58, '#3a9a4a', '#7a5a3a', r);
      tree(ctx, W * 0.87, g + 2, 52, '#4aae56', '#7a5a3a', r);
      // i lampioni ancora accesi, inutili e bellissimi contro l'alba
      for (const fx of [0.24, 0.76]) {
        ctx.fillStyle = '#4a4a52'; ctx.fillRect(W * fx - 2, g - 88, 5, 84);
        ctx.fillRect(W * fx - 10, g - 92, 21, 5);
        glow(ctx, W * fx, g - 84, 22, 16, '255,214,140');
        ctx.fillStyle = '#ffd68c'; ctx.fillRect(W * fx - 5, g - 90, 11, 8);
      }
      // il bar all'angolo che apre: serranda a metà, luce calda, l'insegna rossa
      const bx = W * 0.70, by = g - 4;
      ctx.fillStyle = '#e0b260'; ctx.fillRect(bx, by - 40, 56, 36);
      ctx.fillStyle = '#e03a3a'; ctx.fillRect(bx + 4, by - 52, 48, 12);
      ctx.fillStyle = '#fff0d0'; ctx.fillRect(bx + 8, by - 49, 34, 5);
      ctx.fillStyle = '#8a6a3a'; ctx.fillRect(bx + 6, by - 36, 44, 4);
      glow(ctx, bx + 28, by - 16, 40, 20, '255,214,140');
      ctx.fillStyle = '#ffedb8'; ctx.fillRect(bx + 8, by - 30, 40, 26);
      ctx.fillStyle = '#3a3a42';
      for (let i = 0; i < 4; i++) ctx.fillRect(bx + 8, by - 30 + i * 7, 40, 2); // la serranda a metà
      // uccellini contro il sole
      ctx.strokeStyle = '#4a3a44'; ctx.lineWidth = 2;
      for (const [ux, uy] of [[W * 0.36, H * 0.20], [W * 0.42, H * 0.14], [W * 0.62, H * 0.18]]) {
        ctx.beginPath(); ctx.moveTo(ux - 7, uy); ctx.lineTo(ux, uy - 5); ctx.lineTo(ux + 7, uy); ctx.stroke();
      }
      // e in fondo, nel sole: CINQUE sagome che tornano a casa, più UNA che li raggiunge
      ctx.fillStyle = '#4a3a44';
      for (let i = 0; i < 5; i++) sagoma(ctx, W * 0.44 + i * 12, g + 2, 26, '#4a3a44');
      sagoma(ctx, W * 0.44 + 5 * 12 + 8, g + 2, 26, '#5a4650');
    },

  };

  /* Disegna una scena, con eventuali eroi e PNG.
     npcKeys accetta stringhe oppure oggetti posizionati:
     { key, x, y, scale, flip } con x/y in frazioni di larghezza/altezza. */
  function paint(canvasId, locationKey, heroKeys = null, npcKeys = null) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const W = canvas.width, H = canvas.height;
    const painter = painters[locationKey] || painters.corridoio;
    painter(ctx, W, H);
    // il velo del Grigiore avanza con la notte (mai sull'alba)
    if (locationKey !== 'alba_colori') grigiore(ctx, W, H, eclipsePhase);
    if (heroKeys && heroKeys.length) heroesRow(ctx, W, H - 8, heroKeys, 3);
    if (npcKeys && npcKeys.length) drawNpcs(ctx, W, H, npcKeys);
  }

  function drawNpcs(ctx, W, H, npcKeys) {
    const plain = npcKeys.filter(n => typeof n === 'string');
    const placed = npcKeys.filter(n => typeof n === 'object' && n);
    const scale = 5, size = 16 * scale;
    const baseFeet = H - 34;
    let x = Math.floor(W * 0.70 - (plain.length - 1) * (size + 16) / 2);
    for (const key of plain) {
      const def = Sprites.registry[key];
      if (def) {
        ctx.fillStyle = 'rgba(0,0,0,.35)';
        ctx.fillRect(x + 6, baseFeet - 4, size - 12, 8);
        Sprites.drawSprite(ctx, def.map, def.palette, x, baseFeet - size, scale, true);
      }
      x += size + 16;
    }
    for (const n of placed) {
      const def = Sprites.registry[n.key];
      if (!def) continue;
      const s = n.scale || 5, sz = 16 * s;
      const px = Math.round((n.x != null ? n.x * W : W * 0.7) - sz / 2);
      const finalY = n.y != null ? Math.round(n.y * H) - sz : H - 34 - sz;
      ctx.fillStyle = 'rgba(0,0,0,.3)';
      ctx.fillRect(px + 6, finalY + sz - 4, sz - 12, 7);
      Sprites.drawSprite(ctx, def.map, def.palette, px, finalY, s, n.flip !== false);
    }
  }

  return { paint, painters, rng, blocks, shade, heroesRow, tree, willow, house, torch, sign, ground, hills, moon, setEclipse, getEclipse, pixelDisc };
})();
