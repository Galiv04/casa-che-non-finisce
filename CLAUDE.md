# CLAUDE.md — La Casa che non Finisce

Horror interattivo HARDCORE in italiano per 1-5 giocatori (+ Daniele, che si sblocca giocando).
**Riusa il motore del Relais di Lord Gregorio** (a sua volta figlio della Corona): la documentazione
completa di motore, stile e processo vive nel repo condiviso [Galiv04/dnd-motore](https://github.com/Galiv04/dnd-motore) (`../dnd-motore/docs/`).

- **Live**: https://galiv04.github.io/casa-che-non-finisce/
- **Design di questo gioco**: [docs/DESIGN.md](docs/DESIGN.md) — struttura, meccaniche nuove, finali, vincoli etici
- **Motore e guida di produzione**: `../dnd-motore/docs/` e `../relais-lord-gregorio/CLAUDE.md`

## Cosa cambia rispetto al Relais

| Aspetto | Casa |
|---|---|
| Tono | **Horror hardcore**: gore senza censure, turpiloquio pieno, niente sesso esplicito. Testi 150-350 parole, MAI prolissi: la durata viene dalla varietà. |
| Protagonisti | I 5 amici + **Daniele** (`locked: true`, si sblocca con `unlockHero` allo snodo m5) |
| Villain | **Eleinad** ("Daniele" allo specchio): parassita-riflesso che ruba il colore. NON è Daniele. |
| Valuta | `G.gold` = **Colore** 🎨 |
| Condizioni | `h.veleno` = **INGRIGITO** (-2, si cura con `gocce_dottore`/`boccata_colore`) · `h.preso` come nel Relais · **`h.morto` = MORTE VERA**: l'eroe resta come Spirito 👻 |
| Morte vera | `killRoller: true` nelle scene (mai sull'ultimo vivo) e `choice.sacrifice: true` (il tavolo sceglie chi). Resurrezione SOLO con item `revive: true` (`cuore_colore`) o `reviveAll: true` nei finali migliori |
| Scelte | In più rispetto al Relais: `requires.hero` / `requires.spirit` / `requires.heroDead` |
| Meccanica firma | **Duelli di Parole**: fallacie logiche/armi di Cialdini come incantesimi — pattern nel BRIEF (`drafts/BRIEF.md`) |
| Nemici | `undead: true` = cosa del Grigiore → danni doppi dalle armi VIVIDE (`holy`): phon, fiamma, pallina dei racchettoni |
| Echi nei boss | `foto_ricomposta`, `daniele_sabota` (finché Daniele non è in squadra), `sonnambuli_svegli`, `gemelli_pace`, `manuale_annotato_letto`, `eleinad_vacilla`, `sorpresa` (js/combat.js, blocco d'apertura) |
| Finali | `e_parola` (Daniele smonta il demone — reviveAll), `e_gemelli` (la pace dei gemelli — reviveAll), `e_colori` (battaglia: gli spiriti RESTANO spiriti), `e_scambio` (uno resta), `e_grigio` (resa) |
| Struttura | Prologo `a*` → Soglia `s*` → hub `h1` con TRE piste non esclusive (biblioteca `b*`, porte `u*`, cucina `k*`) → Snodo `m*` (liberazione di Daniele) → Cattedrale `z*` |
| Mappa | `WORLD_MAP.scenes` si calcola DA `CAMPAIGN` via `MAP_ZONE_BY_LOCATION` (fondo di campaign.js): non va tenuta a mano |

## ⚠️ Vincoli etici (impegno preso col committente — NON negoziabili)

Daniele è una persona reale in un momento delicato. Il demone NON è lui; il tema-apatia vive solo
nella metafora del Grigiore; MAI riferimenti ad autolesionismo o termini clinici; le Gocce del
Dottore (la terapia) sono SEMPRE alleate; ritratto di Daniele sempre eroico e affettuoso.
Dettagli completi in [docs/DESIGN.md](docs/DESIGN.md).

## Numeri (si ricalcolano DAL MOTORE, mai a memoria: `node tests/validate.mjs` li stampa)

Oltre 180 scene e più di 40.000 parole · 5 finali · 34 imprese · 21 ambientazioni · 8 Duelli di
Parole · una partita esplorativa dura ~5-7 ore. Le simulazioni headless tagliano corto (~85 scene
per run): la stima di durata si fa su 110-130 scene visitate, che è quello che fa un gruppo vero.

## "Cosa manca e dove" (rigiocabilità servita)

`seenScenes`/`markSeen` in engine.js tracciano le scene viste CUMULATIVE per profilo;
`chapterProgress()` calcola per capitolo la % di stanze viste (dai `prefixes` dei CHAPTERS) e le
imprese mancanti, dedotte automaticamente dalla scena che imposta il flag. Il menu "🗝 Rientra
nella Casa" mostra lo stato capitolo per capitolo; la schermata del finale mostra "Quello che la
Casa non vi ha mostrato" (solo TITOLI: nessuno spoiler) col salto diretto al capitolo giusto.
**Se si aggiungono scene o capitoli, aggiornare i `prefixes` dei CHAPTERS.**

## Minigiochi e checkpoint (ago 2026)

Il modulo riusabile `js/minigames.js` (copiato dal Relais) aggiunge `scene.minigame` — vedi
`../dnd-motore/docs/MINIGIOCHI.md` per tipi, API e regole d'uso. `CHECKPOINT_FLAGS`: via_biblioteca/via_porte/via_cucina/daniele_in_squadra. Minigiochi: Traversata dei Lettori (b5, corsa) e Inventario del Mercante (k6, calcolo).
Il motore cura+ricarica il gruppo alla prima volta di ogni flag in `CHECKPOINT_FLAGS`.

## Comandi

```bash
node tests/validate.mjs      # controlli statici (grafo, dati, sprite, flag, stinger, capitoli)
node tests/playthrough.mjs   # partite complete simulate headless
```

Regole operative identiche agli altri due giochi: **test verdi prima di ogni push** (la CI di GitHub
li riesegue a ogni push), audit visivo con `__audit`/`__auditGrid` sul sito live, **niente localhost
su questa macchina** (timeout: si testa headless o su Pages), push con `curloptResolve`
(`git config http.curloptResolve "github.com:443:140.82.121.3"`), cache Pages ~10 minuti.

## 🔎 Guardare le grafiche: strumenti, non pazienza

Prima di toccare un painter e prima di dire che una scena è a posto:

```bash
node ../dnd-motore/tools/fondali-in-png.mjs                 # tutti in /tmp/fondali
node ../dnd-motore/tools/fondali-in-png.mjs --solo nome     # uno, subito
node ../dnd-motore/tools/fondali-in-png.mjs --provino       # tutti su una lastra
node ../dnd-motore/tools/fondali-in-png.mjs --sfondo '#ff00ff'   # i buchi si vedono
node ../dnd-motore/tools/fondali-in-png.mjs --pulisci       # e si buttano
```

`tools/provino.html` fa la stessa cosa nel browser (anche da telefono, via Pages) con
fondo magenta, scala e velo di profondità.

**Le tre regole che valgono più di ogni ritocco** (lezioni 58-62):
1. **Un fondale ha UN soggetto**, grande almeno un terzo dell'inquadratura, più due o
   tre elementi di contesto sopra i cento pixel. Sotto i sessanta pixel un oggetto non
   dice cosa è, dice solo che c'è.
2. **Le proporzioni delle cose vere si cercano, non si stimano** — e un oggetto che dopo
   due tentativi non si riconosce si TOGLIE, non si ritocca una terza volta.
3. **Il quadro deve mostrare quello che il testo dice.** Si rilegge la scena, si segnano
   le cose che nomina, e si verifica che ci siano tutte.

## 🚩 Le promesse non mantenute: `flag-orfani.mjs`

```bash
node ../dnd-motore/tools/flag-orfani.mjs           # dal repo del gioco
node ../dnd-motore/tools/flag-orfani.mjs --dove    # e dove viene impostato ognuno
```

Dice tre numeri, e il terzo è quello che conta:

- **scritti e mai letti** — il gioco registra che il giocatore SA una cosa e poi non gliela
  fa mai usare né dire. È debito: si paga dando al flag la sua scena, una riga di CRONACA
  nell'epilogo, una nota nel Quaderno — o togliendolo, se non prometteva niente.
- **letti e mai scritti** — una scelta che non può comparire mai, o un premio che il motore
  promette e la storia non concede. **Questo numero deve stare a zero: è un bug.**
- **di cui CRITICI** — i flag che sono l'**unico** effetto di una scelta. Quella scelta non
  fa niente: il giocatore la premeva, il gioco segnava una crocetta su un foglio che non
  legge nessuno, e la storia restava dov'era. **Anche questo a zero.**

## I controlli che il validatore fa e che non sono ovvi

- **chiavi doppie in una scena**: in JavaScript una chiave ripetuta non è un errore, vince
  l'ultima *in silenzio*. È così che una scena ha perso il flag che dava più aria in
  immersione, restando verde a tutti i collaudi.
- **tutte le uscite `once: true`**: chi ritorna nella scena non ha più dove andare.
- **paragrafi ripetuti** dentro la stessa scena: un inserimento chirurgico che ha lasciato
  accanto la versione vecchia. Guarda solo la prosa, non le battute.
- **oggetti citati dal motore che non esistono in ITEMS**: il motore di questi cinque giochi
  si copia da un repo all'altro e si porta appresso i riferimenti degli altri. Un premio
  irraggiungibile non è codice morto innocuo: è una promessa che il giocatore non scoprirà.
- **stinger che non esistono in sound.js**: un suono fantasma è silenzio.
