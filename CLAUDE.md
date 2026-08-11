# CLAUDE.md — La Casa che non Finisce

Horror interattivo HARDCORE in italiano per 1-5 giocatori (+ Daniele, che si sblocca giocando).
**Riusa il motore del Relais di Lord Gregorio** (a sua volta figlio della Corona): la documentazione
completa di motore, stile e processo vive in `../dnd-corona-di-mezzanotte/` (CLAUDE.md + docs/).

- **Live**: https://galiv04.github.io/casa-che-non-finisce/
- **Design di questo gioco**: [docs/DESIGN.md](docs/DESIGN.md) — struttura, meccaniche nuove, finali, vincoli etici
- **Motore e guida di produzione**: `../dnd-corona-di-mezzanotte/CLAUDE.md` e `../relais-lord-gregorio/CLAUDE.md`

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

## Comandi

```bash
node tests/validate.mjs      # controlli statici (grafo, dati, sprite, flag, stinger, capitoli)
node tests/playthrough.mjs   # partite complete simulate headless
```

Regole operative identiche agli altri due giochi: **test verdi prima di ogni push** (la CI di GitHub
li riesegue a ogni push), audit visivo con `__audit`/`__auditGrid` sul sito live, **niente localhost
su questa macchina** (timeout: si testa headless o su Pages), push con `curloptResolve`
(`git config http.curloptResolve "github.com:443:140.82.121.3"`), cache Pages ~10 minuti.
