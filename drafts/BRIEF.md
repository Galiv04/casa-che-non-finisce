# BRIEF DI PRODUZIONE — La Casa che non Finisce

Sei uno degli sceneggiatori del terzo gioco della serie (dopo la Corona di Mezzanotte e il Relais di
Lord Gregorio). Scrivi in ITALIANO. Leggi prima `docs/DESIGN.md` di questo repo e
`../dnd-corona-di-mezzanotte/docs/STILE-NARRATIVO.md` (le convenzioni di scrittura valgono TUTTE,
ma il tono qui è horror hardcore, vedi sotto).

## Tono (diverso dalla Corona e più duro del Relais)

- **Horror hardcore**: gore descritto senza pudore (carne, denti, cose che si aprono), body horror,
  immagini che restano addosso. Turpiloquio pieno e naturale nei dialoghi ("cazzo", "merda",
  "porca puttana" — come parlano davvero cinque amici terrorizzati). NIENTE contenuto sessuale.
- L'umorismo c'è ma è **umorismo da trincea**: si ride per non urlare. Mai parodia.
- **150-350 parole a scena.** Apri con un'immagine concreta, chiudi con una spinta. Le scelte sono
  azioni. Il gioco deve MUOVERSI: ogni scena porta qualcosa di nuovo (luogo, creatura, verità, twist).
- Seconda persona plurale. I sei amici citati per nome sempre (chi non è giocato è comunque presente).
- Formato battute: `> Nome: "..."` — indicazioni sceniche `*(corsivo)*` — effetti meccanici `**(...)**`.

## Vincoli etici NON NEGOZIABILI

1. Eleinad NON è Daniele: è un parassita che gli ha rubato la faccia. Daniele-persona è lucido,
   eroico, dialettico micidiale, e da dentro SABOTA il demone. Mai descrivere Daniele come debole
   o colpevole: la casa l'ha preso A TRADIMENTO, e lui sta combattendo da tre giorni da solo.
2. Il tema-apatia esiste SOLO come metafora fantasy: **il Grigiore** ruba il colore e la voglia.
   MAI riferimenti ad autolesionismo/suicidio, MAI la parola "depressione". Il demone vuole
   "spegnere il colore", "collezionare anime sul divano", "che nessuno esca mai più di casa".
3. Le **Gocce del Dottore** (item) sono ALLEATE: aiutano, curano, rivelano. Mai causa del male.
   Chi le nomina lo fa con rispetto ("il dottore di Daniele sa il fatto suo").
4. Ritratti affettuosi di tutti e sei: si scherza su divano/Switch/Coca Zero/litigi tra gemelli,
   MAI sulla sofferenza. I litigi Federico↔Daniele sono AMORE in forma di gara.

## I sei (dettagli veri autorizzati, da usare)

- **Gaetano**: ingegnere di satelliti, razionale, pro di racchettoni con Claudia (le loro sassate
  decapitano), beve IPA, teme le emergenze nel tempo libero e LUCA GIUNTI, lo studente delle
  ripetizioni che scrive alle 21:00 del giorno prima della verifica chiedendo 4 ore di fila.
- **Natalino**: parrucchiere, forbici giapponesi, rolla i tronelli con cura liturgica, single per
  scelta, teme i TOPI e l'idea di restare senza tronelli. Il più vicino a Daniele.
- **Claudia**: social media manager, occhio assoluto, screenshot di tutto, fidanzata di Gaetano,
  pro di racchettoni. Teme l'ACQUA PROFONDA, gli scogli, le cose sott'acqua.
- **Federico**: consulente di comunicazione, GEMELLO di Daniele (litigano su chi ha ragione e su
  soldi/carriera dal 1994), 10 birre al limone al giorno "è scienza", svapa cerchietti. Teme di
  perdere i soldi e le sue birre.
- **Emanuela**: parrucchiera con Natalino, ex Ibiza, di Gaeta, vita di mare, borsa Kerastase
  senza fondo, fidanzata di Federico. Teme i VIBE-KILLER: molestatori, monologhisti, gente che
  ti parla addosso.
- **Daniele**: gemello di Federico, introverso, divano+libri+Switch (Mario Kart), Coca Zero
  industriale, legge Cialdini e fallacie logiche, vince ogni discussione, teme l'AEREO.
  Non si gioca fino allo snodo `m5` (unlockHero).

## Formato dati (identico al Relais + novità)

```js
id_scena: {
  location: 'salotto',              // OBBLIGATORIO, dalla lista qui sotto
  caption: 'Il Salotto-Cattedrale — ore impossibili',
  npc: ['eleinad'],                 // sprite mostrati nella scena (facolt.)
  stinger: 'jumpscare',             // suono alla 1ª visita (SOLO: jumpscare, campana, risata, penna, defeat, item, gold)
  text: `...150-350 parole...`,
  item: 'manuale_annotato',         // oggetto alla 1ª visita (item2 per il secondo)
  gold: 1,                          // 🎨 Colore guadagnato (goldLoss per perderlo)
  sets: { flag: true },             // flag alla 1ª visita
  damage: 3, heal: 4,               // PV a tutto il gruppo (1ª visita)
  poisonRoller: true,               // chi ha tirato (e fallito) è INGRIGITO (-2)
  killRoller: true,                 // ⚰️ chi ha tirato MUORE DAVVERO (diventa Spirito) — solo dove indicato!
  unlockHero: 'daniele',            // sblocca Daniele (solo m5)
  fullHeal: true, goldLoss: 2,      // scene di sconfitta (a OGNI visita)
  freeAll: true,                    // libera i PRESI
  combat: { enemies: ['topo_grigio','topo_grigio'], victory: 'a8', defeat: 'a7_ko', loot: { gold: 2, items: ['taralli'] } },
  ending: true,                     // solo epiloghi e_*
  choices: [
    { text: '🚪 Aprite la porta', next: 'a3' },
    { text: '👀 Guardare meglio', tag: 'Prova di Saggezza — CD 11', check: { stat: 'SAG', dc: 11, success: 'a4', fail: 'a5' } },
    { text: '🗣 Solo se hai il manuale', requires: { item: 'manuale_annotato', flag: 'x', notFlag: 'y', hero: 'daniele', spirit: true }, next: '...' },
    { text: '🎁 una tantum', once: true, item: 'taralli', gold: 1, sets: { f: true }, removeItem: 'tronello', next: '...' },
    { text: '💰 costa Colore', requiresGold: 3, gold: -3, next: '...' },
    { text: '🕯 Qualcuno resta.', sacrifice: true, sacrificeSets: 'scambiato', sacrificeTitle: 'Chi resta?', sacrificeText: '...', next: 'e_scambio' },
  ],
}
```

- `requires.hero` = quell'eroe è nel party e VIVO. `requires.spirit` = c'è almeno uno Spirito
  (scelte che solo i morti sbloccano: gli spiriti vedono cose che i vivi non vedono!).
- Le prove: CD 10-11 facili, 12-13 medie, 14+ dure. Ogni eroe deve avere prove dove brilla.
- REGOLA D'ORO: ogni flag che imposti DEVE avere un consumatore (una scelta `requires`, un eco
  in combattimento, una voce di diario/impresa/cronaca). Elenca a fine file i flag che imposti.
- I fallimenti nelle prove normali deviano la storia (spesso in peggio, MAI in un vicolo cieco).
- Un combattimento o prova di gruppo ogni 4-5 scene. `RETRY_COMBAT` come next nelle scene di sconfitta.

## Locations ammesse (painter)

strada, palazzo, pianerottolo, appartamento, corridoio, salotto, biblioteca, porte, cameretta,
spiaggia_grigia, cabina, stanza_sommersa, cucina_fredda, sottoscala, mercante, galleria,
sala_switch, trono, cattedrale, alba_colori

## Bestiario (chiavi esatte)

topo_grigio, manichino_vita, divorente (boss), sciame_bollette, monologante, hostess,
luca_giunti (boss), cosa_sommersa (boss), bibliotecario, gemello_sbagliato, sonnambulo,
mercante_guardia, bozzolo_guardiano (boss), eleinad_maschera (boss), eleinad_vero (boss)

## Item (chiavi esatte — non inventarne altre)

kit_emanuela, lattina_zero, birra_limone, ipa_gaetano, taralli, tronello, caffe_moka,
gocce_dottore, boccata_colore, cuore_colore (⚠️ RARISSIMO: 1 in u6, 1 in k8, 1 in vendita dal
Mercante a 12🎨 + un oggetto del cuore), spray_kerastase, accendino_bbq, lattina_agitata,
cassa_bluetooth, pallina_racchettoni, chiavi_scorta, manuale_annotato, foto_meta_federico,
foto_meta_daniele, foto_gemelli, d20_daniele, conchiglia_gaeta, joycon_sinistro

## 🗣 DUELLO DI PAROLE (la meccanica firma — pattern esatto)

Una scena in cui il nemico attacca con la RETORICA. Struttura:
1. La scena si apre con `**🗣 DUELLO DI PAROLE**` nel testo, poi il discorso manipolatorio del
   nemico (scritto BENE: deve suonare convincente davvero).
2. 3 scelte = 3 nomi di fallacia/arma di Cialdini. UNA è giusta. Le scelte NON hanno tag di dado:
   è un enigma di logica, si vince ragionando.
   - giusta → scena di vittoria: l'incantesimo si spezza (descrivi il nemico che si INCEPPA),
     `gold: 2` e spesso un flag.
   - sbagliata → scena di contraccolpo: `damage: 3` + `poisonRoller: true` NO (niente roller qui,
     usa `damage`), testo dove la manipolazione AFFONDA. Poi si può ritentare (link alla scena
     del duello, le scelte già usate marcale `once: true` sulla sbagliata).
3. Se Daniele è in squadra, aggiungi una riga nel testo del duello:
   `*(se Daniele è con voi)*` → `> Daniele: "..."` con un indizio elegante che NON dice la risposta.
   Falla apparire con una scelta `requires: { hero: 'daniele' }`? NO: mettila nel testo con
   [nota: il motore non filtra il testo — scrivi l'indizio in modo che funzioni anche letto da
   chi non ha Daniele: "vi ricordate cosa vi ha detto Daniele dalla TV..."].
Fallacie da usare (una per duello, non ripeterle): Riprova Sociale, Autorità, Scarsità,
Strawman (fantoccio), Falsa Dicotomia, Ricatto Emotivo, Ad Hominem, Impegno/Coerenza.

## Esempi di voce (calibrati — studiali)

**Horror hardcore con umorismo da trincea:**
> Il frigo è pieno. È questo il problema: è pieno di CENA. Piatti pronti, impilati con cura da
> ristorante — lasagne, parmigiana, pasta al forno — tutti dello stesso grigio uniforme del
> cartone bagnato. Natalino apre il cassetto delle verdure e lo richiude subito.
> Natalino: "Là dentro c'è una cosa che respira. Ve lo dico da professionista: NON è insalata."
> Sul ripiano centrale, in fila perfetta, dodici lattine di Coca Zero. Le uniche cose A COLORI
> di tutta la cucina. Disposte a freccia. La punta indica la porta della dispensa.
> Gaetano: "O Daniele ci sta lasciando i segnali..."
> Federico: "...o questa casa di merda ha imparato il product placement."

**Un momento di cuore (dopo l'orrore, mai al posto):**
> La pagina è scritta a mano, la grafia di Daniele: *"Comprare un set di dadi anche per gli altri.
> Un giorno li porto a giocare a D&D. Federico dirà che è da sfigati. Giocherà più forte di tutti."*
> Nessuno dice niente. Federico tiene la pagina un secondo di troppo prima di ridarla indietro.
> Federico: "È da sfigati." *(pausa)* "Ci giochiamo appena esce da qui."

**Eleinad (sboccato, crudele, SEDUCENTE — mai volgare a caso):**
> Eleinad: "Lo sapete qual è la cosa più stanca dell'universo? La speranza. Sveglia presto,
> sorrisi, 'andrà meglio': un lavoro di MERDA, senza ferie. Io offro il contrario. Sedetevi.
> Il divano è comodo, la TV è accesa, e nessuno — NESSUNO — vi chiederà mai più niente."

## Consegna

Scrivi il tuo blocco in `drafts/scene-<blocco>.js` come:
```js
const SCENE_<BLOCCO> = {
  id1: { ... },
  id2: { ... },
};
```
In fondo al file, in un commento: l'elenco dei flag impostati con il loro consumatore, gli item
dati, e le morti possibili. NON toccare altri file. NON usare id fuori dal tuo prefisso (le
uscite verso altri blocchi sono elencate nel tuo incarico e sono le UNICHE ammesse).
