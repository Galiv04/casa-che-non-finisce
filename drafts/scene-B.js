const SCENE_B = {

  /* ---------- b1 — L'INGRESSO: I LIBRI CHE LEGGONO VOI ---------- */

  b1: {
    location: 'biblioteca',
    caption: 'La Biblioteca che Sussurra — l\'ingresso',
    text: `La porta si apre su una biblioteca che non può stare dentro un appartamento: scaffali alti **dieci metri**, scale a chiocciola che salgono nel buio, e un odore di carta vecchia e di qualcos'altro — carne che ha imparato a stare ferma.

Poi capite cos'è il fruscìo. Non sono pagine mosse dall'aria. Sono i libri. **Sussurrano.** E ogni libro accanto a cui passate legge ad alta voce i pensieri di chi gli passa vicino.

> *(un dorso rilegato in pelle grigia, verso Natalino)* "...zampette dentro i muri, zampette sotto il letto, e l'ultimo tronello che si sbriciola tra le dita..."

> *(un atlante gonfio d'umido, verso Claudia)* "...l'acqua scura sotto lo scoglio, e la cosa che ti sfiora la caviglia NON è un'alga..."

> *(un registro contabile, verso Federico)* "...gentile cliente, l'importo è stato TRIPLICATO, le birre sono state PIGNORATE..."

> *(un galateo ottocentesco, verso Emanuela)* "...e lui continua a parlarti, e parla, e parla, e il locale si svuota e lui PARLA ancora..."

> *(un diario scolastico, verso Gaetano)* "...ciao prof, scusa l'orario: domani ho la verifica, mi serviresti per quattro orette..."

> Gaetano: "Come CAZZO fa a sapere di Luca Giunti."

E poi un libretto sottile, in fondo, sussurra a nessuno: *"...il portellone si chiude, le ruote si staccano da terra..."* — la paura di qualcuno che qui non c'è. Ma c'è stato.

> Emanuela: "Daniele è passato di qua. E questi stronzi rilegati l'hanno letto."`,
    choices: [
      { text: '🚶 Inoltrarsi tra gli scaffali, un passo dopo l\'altro', next: 'b2' },
      { text: '🙉 Tapparsi le orecchie e CORRERE oltre il corridoio dei sussurri', tag: 'Prova di Costituzione — CD 11', check: { stat: 'COS', dc: 11, success: 'b3', fail: 'b2b' } },
      { text: '🐭 Un fruscìo fitto di zampette dagli scaffali bassi. Natalino diventa bianco: seguire il rumore', once: true, next: 'b15' },
    ],
  },

  b2b: {
    location: 'biblioteca',
    caption: 'Il corridoio dei sussurri — troppo lenti',
    stinger: 'jumpscare',
    text: `Correte con le mani sulle orecchie, e non serve a niente: i sussurri non entrano dalle orecchie. **Salgono dai polsi**, dalle vene, come acqua fredda che risale una cannuccia.

Chi rallenta un attimo — un attimo solo — sente la propria paura letta ad alta voce con la SUA stessa voce, ma sbagliata, più piatta, come una segreteria telefonica di se stesso. E la paura, letta così, pesa il doppio.

> Claudia: "Non ascoltate! È come i commenti sotto i post: NON SI LEGGONO!"

> Federico: "Facile per te, il tuo libro parla d'acqua! Il mio mi ha appena letto l'ISEE!"

Uscite dal corridoio piegati in due, col fiato rotto e qualcosa di grigio appiccicato addosso, sottopelle, come polvere che non viene via.

**(-3 PV a tutti. Chi ha tirato — e ha rallentato — è INGRIGITO: il Grigiore nelle vene, -2 a prove e attacchi.)**

Davanti a voi, tra due scaffali, qualcosa si muove. Qualcosa di grosso. Fatto di libri.`,
    damage: 3,
    poisonRoller: true,
    choices: [
      { text: '📚 Non ha senso scappare: affrontare la cosa fatta di libri', next: 'b2' },
    ],
  },

  /* ---------- b2 — IL BIBLIOTECARIO ---------- */

  b2: {
    location: 'biblioteca',
    npc: ['bibliotecario'],
    caption: 'La sala di catalogazione — il Bibliotecario',
    stinger: 'risata',
    text: `Esce da tra gli scaffali senza fretta, perché niente qui dentro ha fretta: una figura alta tre metri, fatta interamente di **dorsi di libri mai letti**. Costole di brossura intatta, dita di segnalibri vergini, e al posto della faccia una copertina bianca senza titolo. Quando parla, la voce viene da tutte le pagine insieme.

> Il Bibliotecario: "**Due stelle.** L'ingresso del gruppo manca di struttura. Il personaggio con le forbici è promettente ma sottoutilizzato. Il finale, temo, è già scritto."

Non attacca. Fa qualcosa di peggio: vi **cataloga**. Un dito di segnalibri vi sfiora uno per uno, e sentite — fisicamente — la sensazione di essere riassunti in una riga.

> Il Bibliotecario: "Cinque volumi in visione. Copertine vivaci. Contenuto..." *(pausa lunghissima)* "...da verificare."

> Natalino: "Senti, coso. Noi cerchiamo il nostro amico. Daniele. Occhiali, Coca Zero, ha letto più libri lui di quanti tu ne HAI addosso."

La copertina bianca si inclina di lato. Interessata.

> Il Bibliotecario: "**Daniele.** Quattro stelle e mezzo. Un lettore vero. Sottolineava. Qui i lettori veri sono... rari. E cari alla direzione." *(le pagine frusciano, più piano)* "Cosa volete sapere? Scegliete bene. Ogni domanda va a catalogo."`,
    choices: [
      { text: '📗 "Portaci alla sezione di Daniele. Ai SUOI libri."', next: 'b3' },
      { text: '🎨 "Parlaci di ELEINAD." — il nome costa: la biblioteca ascolta', requiresGold: 1, gold: -1, next: 'b4' },
      { text: '⚔️ Basta chiacchiere: attaccare la cosa fatta di libri', next: 'b6' },
    ],
  },

  /* ---------- b3 — LA SEZIONE DI DANIELE ---------- */

  b3: {
    location: 'biblioteca',
    caption: 'La sezione di Daniele — scaffale D-1994',
    stinger: 'item',
    text: `Il Bibliotecario vi guida per corridoi che si riordinano al vostro passaggio, fino a uno scaffale basso, a misura d'uomo, con una targhetta d'ottone: **D-1994**.

E lì ci sono i libri VERI di Daniele. Non copie grigie: i suoi. *Le armi della persuasione* di Cialdini sottolineato in **tre colori** con un sistema che solo lui capisce. Saggi di psicologia con gli angoli piegati. Manuali di logica pieni di post-it. In mezzo al grigiore della biblioteca, questo scaffale **brilla** come una vetrina di Natale.

> Il Bibliotecario: "Cinque stelle. Annotazione a margine di rara qualità. La direzione ha provato a sbiancarli. I libri..." *(fruscìo che somiglia a un sorriso)* "...hanno rifiutato."

Federico prende il Cialdini e lo apre a caso. A margine, la grafia fitta del gemello: *"Questa la usa sempre Federico quando ha torto. Funziona. Purtroppo."*

> Federico: "..." *(lo richiude)* "Ce lo portiamo. TUTTO quanto lo scaffale, se serve."

> Claudia: "Il manuale. Guardate il manuale: ha annotato OGNI trucco retorico con un esempio. È tipo... un bestiario. Un bestiario delle stronzate."

**(Ottenete il MANUALE ANNOTATO: l'arma per i Duelli di Parole. Le note di Daniele riconoscono le fallacie al volo.)**`,
    item: 'manuale_annotato',
    sets: { via_biblioteca: true },
    choices: [
      { text: '📖 Fermarsi a leggere le note con calma: mezz\'ora di Daniele puro', next: 'b3b' },
      { text: '🚶 Non c\'è tempo: proseguire verso la sala di lettura', next: 'b5' },
      { text: '📚 Da dietro lo scaffale, un coro sottile di carta che striscia: "...finiscimi..." — andare a vedere', once: true, next: 'b14' },
    ],
  },

  b3b: {
    location: 'biblioteca',
    caption: 'Le note a margine — mezz\'ora di Daniele puro',
    text: `Vi sedete sul pavimento della biblioteca maledetta, in cerchio, e per mezz'ora leggete Daniele. Le sue note sono lucide, spietate, e fanno ridere forte — il che, qui dentro, è un atto di guerra.

*Il piccolo glossario del gemello, a margine di pagina 41:*

> *"**RIPROVA SOCIALE**: 'lo fanno tutti'. Se lo fanno tutti, chiediti chi guadagna dal fatto che lo fai anche tu."*

> *"**AUTORITÀ**: 'lo dice l'esperto'. Il camice non è un argomento. Chiedi SEMPRE: esperto di cosa? Dice DOVE?"*

> *"**SCARSITÀ**: 'ultima occasione'. Se scade tra dieci minuti, è perché al decimo minuto ci arriveresti da solo che è una fregatura."*

> *"**FALSA DICOTOMIA**: 'o con me o contro di me'. Le opzioni vere sono sempre almeno tre. La terza è quella che non ti mostrano."*

> *"**RICATTO EMOTIVO**: quando finiscono gli argomenti, iniziano le lacrime. Le lacrime non dimostrano niente. (Vale anche per Federico a Mario Kart.)"*

> Federico: "IO NON PIANGO A MARIO KART. Ho una lacrimazione competitiva."

> Emanuela: "Ragazzi. Abbiamo appena fatto ripetizioni dal nostro amico scomparso, tramite margine. E ha funzionato."

Vi rialzate diversi. Le parole, adesso, le vedete arrivare.

**(Avete LETTO il manuale: il gruppo conosce le fallacie. 🎨 +1 Colore.)**`,
    sets: { manuale_annotato_letto: true },
    gold: 1,
    choices: [
      { text: '🚶 Verso la sala di lettura, con le note ancora in testa', next: 'b5' },
      { text: '📖 Un\'ultima pagina: Daniele ha sottolineato qualcosa TRE volte', once: true, sets: { nota_tripla: true }, next: 'b3c' },
    ],
  },

  b3c: {
    location: 'biblioteca',
    caption: 'Sottolineato tre volte',
    sets: { trucco_conosciuto: true },
    text: `L'ultima pagina del Cialdini di Daniele non è di Cialdini. È sua. Una riga sola, in stampatello grosso, e sotto **tre righe di sottolineatura**: tre penne diverse, tre inchiostri diversi — uno che è tornato su quella frase tre volte, in tre momenti, per essere sicuro di crederci ancora.

*"Se conosci il trucco, il trucco non funziona. **VALE ANCHE PER QUELLO GRANDE.**"*

> Claudia: "'Quello grande.' Non 'quelli'. QUELLO. Al singolare."

> Gaetano: "Non sospettava: SAPEVA. E si stava preparando. Questa non è una nota di studio, ragazzi. È un ordine operativo lasciato a chi arrivava dopo."

> Federico: *(passa il dito sulle tre sottolineature, una per volta, come si conta un battito)* "Tre volte. Mio fratello ha sottolineato tre volte perché la terza era per NOI."

> Natalino: "E allora impariamocelo, cazzo. Tutto quanto, dalla prima pagina."

**("Se conosci il trucco, il trucco non funziona. VALE ANCHE PER QUELLO GRANDE." Adesso lo sapete anche voi.)**`,
    choices: [
      { text: '🚶 Verso la sala di lettura, con la frase in testa', next: 'b5' },
    ],
  },

  /* ---------- b4 — IL NOME PROIBITO ---------- */

  b4: {
    location: 'biblioteca',
    npc: ['bibliotecario'],
    caption: 'Il nome che costa — verso lo scaffale proibito',
    text: `Al nome **Eleinad**, tutta la biblioteca smette di sussurrare. Insieme. Diecimila libri che trattengono il fiato.

Il Bibliotecario resta immobile così a lungo che Natalino fa per ripetere la domanda — e la copertina bianca si abbassa di scatto, a un palmo dalle vostre facce.

> Il Bibliotecario: "**Una stella.** Domanda pericolosa, struttura ingenua, esito prevedibilmente fatale." *(pausa; le pagine frusciano piano, quasi gentili)* "Però onesta. Qui non entra mai niente di onesto."

Si volta e cammina, e capite che dovete seguirlo. Vi porta in fondo alla biblioteca, dove gli scaffali si fanno storti e i libri non hanno più titoli — solo dorsi lisci, grigi, come denti senza smalto. In fondo a tutto: uno scaffale **chiuso da una catena di carta**. Carta, sì. Ma nessuno dei libri intorno osa toccarla.

> Il Bibliotecario: "La sezione della direzione. La biografia del padrone di casa. Io non posso aprirla: sono rilegato al regolamento, alla lettera." *(la testa-copertina si inclina)* "Ma voi non siete a catalogo. Ancora."

> Gaetano: "Perché ci aiuti?"

> Il Bibliotecario: "Due stelle e mezzo alla domanda. Nessuno legge più, qui. Sapete cosa diventa una biblioteca dove nessuno legge?" *(indica se stesso, tutto se stesso)* "**Questo.**"`,
    choices: [
      { text: '📕 Aprire lo scaffale proibito: la biografia di Eleinad', next: 'b8' },
      { text: '↩ Troppo rischioso. Tornare alla sala di lettura col segreto del nome', next: 'b5' },
    ],
  },

  /* ---------- b5 — LA SALA DI LETTURA: I LETTORI GRIGI ---------- */


  b16_capitolo: {
    location: 'biblioteca',
    caption: 'Pagina 1987 di 4000',
    text: `Prima che il Capobranco si assesti nel suo nuovo, beato disordine, Gaetano legge l'ultima pagina scritta — la 1987, quella dove sessant'anni di ostinazione hanno mollato la presa.

Non è quello che si aspettava. Non è epica, non è tragedia. È un **elenco.**

*"Capitolo 84 — Le cose lasciate a metà che stavano bene così: il muro del giardino (il glicine ci passa attraverso, e va bene). La lettera a mio fratello (l'ho chiamato invece, e va bene). Il maglione di lana (mezza manica, d'estate, e va bene). La casa che non finisce—"*

E lì, a metà dell'ultima riga, la grafia cambia. Si fa più larga, più libera, quasi allegra:

*"—che forse non va FINITA. Va ABITATA."*

> Gaetano: *(rileggendo ad alta voce, due volte)* "La casa che non finisce non va finita. Va abitata." *(alza gli occhi)* "Ragazzi. Questo manoscritto ha capito la casa meglio di noi. Il Grigiore vuole COMPLETARE tutto — catalogare, chiudere, finire. E le cose vive... le cose vive restano a metà. È la METÀ che le tiene vive."

> Natalino: "Quindi il piano è: restare incompiuti con orgoglio."

> Gaetano: "Il piano è esattamente questo, sì."

**(La lezione di pagina 1987 — vivo è ciò che resta a metà. Al demone che vuole CHIUDERE ogni conto, adesso, avete una risposta.)**`,
    sets: { ultimo_capitolo_letto: true },
    choices: [
      { text: '🚶 La sala si riapre: verso la sala di lettura', next: 'b5' },
    ],
  },

  b5: {
    location: 'biblioteca',
    caption: 'La sala di lettura — i Lettori Grigi',
    text: `La sala di lettura è vasta e silenziosa come una sala d'attesa dell'eternità. Ai tavoli, sotto lampade verdi che non scaldano niente, siedono i **Lettori Grigi**: trentasei figure in pigiama e vestaglia, immobili, con davanti libri aperti dalle pagine completamente **bianche**.

Non dormono. Leggono. Gli occhi sono aperti — ma spenti, come schermi in standby, e si muovono da sinistra a destra, riga dopo riga, su pagine dove non c'è scritto NIENTE.

> Natalino: *(sottovoce)* "Oh, cazzo. Sono persone. Erano persone."

> Claudia: *(sottovoce)* "Non guardarli negli occhi. È come i monitor rotti: ti ci vedi dentro."

Uno di loro è diverso. Un uomo sulla cinquantina, vestaglia grigia come gli altri — ma tra le pagine bianche del suo libro tiene un **segnalibro a colori**: un disegno di bambino, sole giallo, casa rossa, plastificato con lo scotch. E la sua mano ci sta sopra. La difende. Anche da addormentato in piedi dentro la propria vita, la difende.

Sul fondo della sala, uno scaffale girevole cigola piano, mezzo aperto su un vano buio. Da dentro viene — giuro — un odore di **crêpes**.`,
    choices: [
      { text: '🤫 Attraversare la sala in silenzio assoluto, tra i tavoli', once: true, tag: 'Prova di Destrezza — CD 12', check: { stat: 'DES', dc: 12, success: 'b7', fail: 'b6b' } },
      { text: '👀 Fermarsi a osservarli: capire COSA leggono', once: true, tag: 'Prova di Saggezza — CD 12', check: { stat: 'SAG', dc: 12, success: 'b5b', fail: 'b6b' } },
      { text: '🌈 Lo scaffale girevole che odora di crêpes: guardarci dentro', once: true, next: 'b12' },
      { text: '🗄 Una porticina bassa, targa d\'ottone: "ARCHIVIO — DIARI IN CONSULTAZIONE"', once: true, next: 'b13' },
      { text: '🏃 La sfida di Federico: attraversare di CORSA, saltando i libri-trappola — 🎮 MINIGIOCO', once: true, next: 'mg_corsa_libri' },
      { text: '🚶 Attraversare la sala e basta, senza fermarsi', next: 'b7' },
    ],
  },

  b5b: {
    location: 'biblioteca',
    caption: 'I Lettori Grigi — quello col segnalibro',
    text: `Vi fermate. Guardate. E chi di voi ha l'occhio buono lo vede.

Le pagine non sono bianche per tutti allo stesso modo. Sotto la lampada giusta, sulla carta si intravede un'ombra di testo — sempre la stessa. Tutti i Lettori Grigi leggono **la stessa pagina**. Da anni. La pagina della loro vita in cui si sono seduti, riletta in loop finché non è sbiadita del tutto.

> Emanuela: "È questo che fa il Grigiore. Non ti toglie il libro. Ti blocca sulla pagina."

E poi l'uomo col segnalibro. La sua pagina è sbiadita come le altre — ma dove il segnalibro tocca la carta, il bianco NON ha attaccato. Un margine di colore, largo un dito, resiste da chissà quanto. Sole giallo, casa rossa. Una cosa piccola, tenuta stretta, che non lo lascia affondare del tutto.

> Claudia: *(piano)* "Segnatevelo. Chi tiene qualcosa di colorato... non affonda fino in fondo. Funziona. Ce l'abbiamo DAVANTI che funziona."

> Federico: *(tira fuori dalla tasca una birra al limone, la guarda)* "Non è un segnalibro, ma è gialla. Conta?"

> Emanuela: "Per te conta, amore. Purtroppo per te, conta."

**(Annotato nel diario: un'àncora di colore tiene a galla.)**`,
    sets: { ancora_colore_nota: true },
    choices: [
      { text: '🤫 Ora sapete dove NON guardare: attraversare la sala', next: 'b7' },
      { text: '🌈 Il segnalibro: provare a toccarlo, piano', once: true, next: 'b5_segnalibro' },
    ],
  },

  /* ---------- b6 / b6b — I COMBATTIMENTI ---------- */

  b6: {
    location: 'biblioteca',
    npc: ['bibliotecario'],
    caption: 'Pessima recensione — il Bibliotecario attacca',
    text: `Il primo colpo lo tira Natalino, forbici giapponesi alla mano, dritto nella copertina bianca. Le forbici affondano nella carta con un rumore OSCENO — carta e qualcos'altro sotto, umido, che non dovrebbe stare dentro un libro.

Il Bibliotecario barcolla indietro. La copertina bianca si APRE a metà, dall'alto in basso, come una bocca verticale, e dentro ci sono pagine e pagine di denti di carta, fitti, che frusciano tutti insieme.

> Il Bibliotecario: "**UNA STELLA.** Violenza gratuita. Sviluppo dei personaggi: assente. La direzione sarà informata. IL RESO... È... PREVISTO."

Gli scaffali intorno si piegano verso di voi come spettatori. I libri smettono di sussurrare e cominciano a **scandire**, tutti insieme, un catalogo di ossa: i vostri nomi, ripetuti, con un numero di collocazione accanto.

Vi stanno già assegnando lo scaffale.

> Gaetano: "Ormai è fatta. ABBATTIAMO LA BIBLIOGRAFIA."`,
    combat: { enemies: ['bibliotecario'], victory: 'b6b_vinto', defeat: 'b_ko', loot: { gold: 1 } },
  },

  b6b: {
    location: 'biblioteca',
    caption: 'La sala di lettura — i Lettori si alzano',
    stinger: 'jumpscare',
    text: `Un rumore. Piccolo — un tavolo urtato, un respiro troppo forte, non importa: nella sala di lettura è un TUONO.

Dodici teste si sollevano dalle pagine bianche nello stesso istante, con lo stesso scatto, come pupazzi appesi allo stesso filo. Gli occhi-schermo si accendono di un grigio attivo, e i Lettori più vicini si ALZANO — le sedie strisciano all'indietro tutte insieme, un solo stridio lunghissimo.

Si muovono male, come chi ha dimenticato il proprio corpo in un cassetto. Ma si muovono verso di VOI. E i libri bianchi restano aperti sui tavoli, alle loro spalle, come ciotole che aspettano il ritorno del cane.

> Natalino: "Non vogliono farci male. Vogliono farci SEDERE."

> Claudia: "È la stessa cosa, Natalì! QUI è la stessa identica cosa!"

L'uomo col segnalibro non si alza. Stringe il suo sole giallo e resta seduto, e forse — forse — vi guarda passare con qualcosa che somiglia a un tifo silenzioso.

**(Non uccideteli: sono persone. Basterà respingerli. Ma i loro abbracci grigi pesano come sonno.)**`,
    combat: { enemies: ['sonnambulo', 'sonnambulo'], victory: 'b7', defeat: 'b_ko', loot: { gold: 1 } },
  },

  b6b_vinto: {
    location: 'biblioteca',
    caption: 'La frana di libri — il cuore del Bibliotecario',
    text: `Il Bibliotecario crolla come crollano gli scaffali nei terremoti: prima un cedimento in basso, poi tutto insieme, una **frana di libri mai letti** che rimbalza e scivola e si spande per la sala. La copertina bianca cade per ultima, piatta, con un suono di porta chiusa piano.

E nella frana, in mezzo a mille dorsi intonsi, qualcosa batte. Piano. Come un cuore dentro un pacco regalo.

Scavate. Lo trovate. Il cuore del Bibliotecario è un libro **mai scritto**: rilegatura fatta a mano, pagine vuote ma calde, e in copertina un titolo inciso a metà, mai finito — *"I CINQUE CHE..."*

> Emanuela: "I cinque che cosa?"

> Gaetano: "Non l'ha mai saputo nemmeno lui. Per questo catalogava tutto: perché il SUO, di libro, non l'ha mai..."

Nessuno finisce la frase. Il libro-cuore batte ancora due volte, poi smette, e le pagine si raffreddano sotto le dita come una mano che si lascia andare.

Là sotto c'era un lettore. Un lettore vero, rilegato vivo nel regolamento. E voi l'avete saputo solo adesso.

**(🎨 +1 Colore, raccolto dalla frana. Ma qualcosa vi dice che vi mancherà, quella voce da due stelle.)**`,
    gold: 1,
    sets: { bibliotecario_morto: true },
    choices: [
      { text: '🚶 Oltre la frana, verso il fondo della biblioteca', next: 'b7' },
      { text: '📖 Le pagine calde: leggere il titolo inciso, "I CINQUE CHE..."', once: true, next: 'b6_titolo' },
    ],
  },

  b_ko: {
    location: 'biblioteca',
    caption: 'Sconfitta — scaffalati',
    text: `Buio. Poi un fruscìo di pagine, vicinissimo. Poi la cosa peggiore: **la vista dall'alto**.

Vi risvegliate SUGLI scaffali. Distesi, rigidi, incastrati tra un'enciclopedia e un atlante, a sei metri da terra — catalogati. Sul petto di ognuno, una targhetta scritta a mano con una grafia da recensione:

*"GAETANO — saggistica tecnica, tende a spiegare. NATALINO — artigianato, volume di pregio. CLAUDIA — fotografia, occhio assoluto. FEDERICO — economia e commercio, reso frequente. EMANUELA — viaggi, edizione solare."*

> Federico: "RESO FREQUENTE? Io ti denuncio. Non so a chi, ma ti denuncio."

Vi tirate giù l'uno con l'altro, a strattoni, staccandovi di dosso etichette e polvere. Le gambe reggono. L'orgoglio meno. E dal fondo della biblioteca, il fruscìo di qualcosa che riordina — e che può riordinare ANCHE VOI, tutte le volte che vuole.

**(Il gruppo si rialza a piene forze, ma la biblioteca si è presa 1 🎨 di Colore come "tassa di collocazione".)**`,
    fullHeal: true,
    goldLoss: 1,
    choices: [
      { text: '⚔️ Giù dagli scaffali e di nuovo addosso: RIVINCITA', next: 'RETRY_COMBAT' },
      { text: '🏃 Basta così: filare verso il fondo della biblioteca, alla svelta', next: 'b7' },
    ],
  },

  /* ---------- b7 — LO SCAFFALE PROIBITO ---------- */


  b5_segnalibro: {
    location: 'biblioteca',
    caption: 'Il segnalibro',
    text: `Emanuela si avvicina all'uomo col segnalibro come ci si avvicina a un passero: di lato, piano, senza promettere niente.

E lo tocca. Solo il segnalibro — il margine giallo e rosso, sole e casa — non l'uomo.

L'uomo non si muove. Ma la pagina sì: sotto il dito di Emanuela, per un istante, il colore del segnalibro **sanguina nella carta** — un millimetro di giallo che invade il bianco, come inchiostro nell'acqua — e nella riga sbiadita che l'uomo rilegge da anni ricompare UNA parola. Una sola, leggibile:

*"...domenica..."*

L'uomo respira. Diverso: più fondo. Le dita, sulla pagina, si spostano di un centimetro — verso la parola, come piante verso la finestra.

> Emanuela: *(ritirando la mano con una lentezza da sminatore)* "Non possiamo salvarli tutti stanotte. Ma questo qui... questo ha una domenica che lo aspetta da qualche parte. Il colore CHIAMA il colore, avete visto? Una parola gliel'abbiamo riaccesa."

> Natalino: "E quando spacchiamo tutto, le altre tornano da sole. Tenetevela stretta, questa cosa: funziona così anche per Daniele."

**(Il colore chiama il colore. Una parola riaccesa stanotte, un intero libro dopo la vittoria.)**`,
    sets: { segnalibro_toccato: true },
    choices: [
      { text: '🤫 Attraversare la sala, senza svegliare nessun altro', next: 'b7' },
    ],
  },


  b6_titolo: {
    location: 'biblioteca',
    caption: 'I cinque che...',
    text: `Claudia prende il libro-cuore con due mani e passa il dito sull'incisione a metà. *"I CINQUE CHE..."* — e poi il legno liscio, mai inciso, in attesa da chissà quanto.

> Claudia: "Aspettate. Cinque. Noi siamo in CINQUE."

> Gaetano: "Coincidenza. In tutte le storie sono cinque, o tre, o sette, è statistica narrativa—"

E mentre lo dice, sotto il dito di Claudia, l'incisione **si allunga.** Da sola. Un graffio nuovo, lento, come inciso da una mano invisibile che ha ripreso coraggio: una **V**.

*"I CINQUE CHE V..."*

> Natalino: "V. Vincono? Vendicano? VOMITANO? Perché io sono vicino alla terza."

> Emanuela: *(piano)* "Non l'ha finito perché non SAPEVA come finiva. È un libro che si scrive guardando. E adesso sta guardando NOI."

Il libro batte una volta sola, caldo, come un applauso timido. Claudia lo posa sul leggìo con una cura da madre.

> Claudia: "Allora diamogli un bel finale da guardare. E se stanotte va come deve andare... torniamo a leggere come continua."

**(Da qualche parte nella biblioteca, un libro sta scrivendo la vostra storia in diretta. Non deludetelo.)**`,
    sets: { titolo_incompiuto_letto: true },
    choices: [
      { text: '🚶 Oltre la frana, verso il fondo della biblioteca', next: 'b7' },
    ],
  },


  mg_corsa_libri: {
    location: 'biblioteca',
    caption: 'La traversata di corsa',
    text: `> Federico: "Teoria: i Lettori Grigi reagiscono al RUMORE LENTO. Passi felpati, fruscii, esitazioni. Ma una cosa VELOCE e decisa? Non fanno in tempo a catalogarla."

> Gaetano: "La tua teoria ha un campione statistico di zero."

> Federico: "La mia teoria ha FIDUCIA IN SE STESSA. Guardate e imparate."

Il corridoio centrale della sala è lungo, dritto, e disseminato di pile di libri che il Grigiore fa scivolare sul pavimento come trappole pigre. Chi corre, corre da solo: gli altri guardano da dietro lo scaffale, pronti a negare di conoscerlo.

*(🎮 MINIGIOCO — La Traversata: un tasto = salto. Superate le pile di libri senza inciampare tre volte, o la sala intera alzerà gli occhi.)*`,
    minigame: {
      type: 'corsa', hero: null,
      success: 'b5_corsa_ok', fail: 'b5_corsa_ko',
      tag: 'La Traversata dei Lettori — un tasto, tre inciampi massimo',
      config: { titolo: '📚 La Traversata dei Lettori', tema: 'libri', ostacoli: 9, velocita: 270, cielo: '#171420', suolo: '#241d28' },
    },
  },

  b5_corsa_ok: {
    location: 'biblioteca',
    caption: 'La teoria di Federico regge',
    text: `L'ultima pila di libri passa sotto i piedi, e la corsa finisce contro lo scaffale in fondo con un tonfo attutito e trionfale.

I Lettori Grigi... non hanno alzato la testa. NESSUNO. Il Grigiore ha provato a catalogare la cosa veloce che gli attraversava la sala e ha rinunciato a metà pratica.

> Federico: *(ricomponendosi il colletto, senza fiato ma con dignità)* "Campione statistico: UNO. Percentuale di successo: CENTO. La scienza ringrazia."

> Gaetano: "La scienza ti denuncia. Però... segnato: la velocità decisa lo manda in confusione. Può servire di là."

**(🎨 Colore +1: la teoria di Federico ora è un DATO. E correre, in questa casa, si può.)**`,
    gold: 1,
    sets: { corsa_lettori_ok: true },
    choices: [
      { text: '🚶 Oltre la sala, verso il fondo della biblioteca', next: 'b7' },
    ],
  },

  b5_corsa_ko: {
    location: 'biblioteca',
    caption: 'La teoria di Federico inciampa',
    text: `Terzo inciampo. La pila di libri esplode in un ventaglio di pagine, il rumore rimbalza tra i tavoli — e trentasei teste grigie si ALZANO insieme, con il fruscio di un'unica pagina enorme che si volta.

Non attaccano. Fanno di peggio: FISSANO. Lo sguardo collettivo di una sala di lettura disturbata è un'arma che nessuna palestra prepara ad affrontare.

> Federico: *(a terra tra i libri, senza guardare nessuno)* "La teoria va raffinata."

> Emanuela: *(tirandolo su per un braccio)* "La teoria va SEPPELLITA. Cammina e non toccare più niente."

Uscite dalla sala accompagnati da trentasei paia d'occhi, con la dignità sotto le scarpe e un freddo nuovo addosso.

**(−2 PV a chi è inciampato... cioè a tutti, per solidarietà d'imbarazzo.)**`,
    damage: 2,
    choices: [
      { text: '🚶 Fuori dalla sala, in fila, zitti', next: 'b7' },
    ],
  },

  b7: {
    location: 'biblioteca',
    caption: 'Il fondo della biblioteca — lo scaffale proibito',
    text: `Il fondo della biblioteca è dove la carta smette di fingere. Gli scaffali qui sono storti, organici, con venature che pulsano piano sotto la vernice. I libri non hanno titoli: dorsi grigi e lisci, come denti senza smalto, tutti uguali.

Tutti tranne uno scaffale. Chiuso da una **catena di carta** — anelli di pagine intrecciate, fragili in modo insultante, eppure nessun libro della biblioteca osa sfiorarli. Dietro la catena, un solo volume, rilegato in uno specchio opaco: la sezione di **ELEINAD**.

> Claudia: "Una catena di carta. La strappo con due dita."

> Gaetano: "Appunto. Se una prigione di carta REGGE, non è la catena che tiene chiuso il libro. È il libro che non vuole essere aperto da chiunque."

Accanto allo scaffale, buttato lì come dopo un trasloco, un oggetto assurdo: uno **specchio da toeletta**, di quelli con la cornice dorata e il piedistallo. In una biblioteca. Ovviamente.

> Natalino: "Odio quando le case maledette fanno le cose CON CRITERIO."`,
    choices: [
      { text: '📕 Strappare la catena e aprire la biografia di Eleinad', next: 'b8' },
      { text: '🗣 Un fruscìo alle vostre spalle: il Bibliotecario vi ha seguiti. Affrontarlo a parole', requires: { notFlag: 'bibliotecario_morto' }, next: 'b10' },
      { text: '🎲 Tra la frana di libri, un tintinnare di plastica: cercare cosa custodiva il Bibliotecario', requires: { flag: 'bibliotecario_morto' }, once: true, tag: 'Prova di Saggezza — CD 13', check: { stat: 'SAG', dc: 13, success: 'b7b', fail: 'b8' } },
      { text: '🗃 Sotto lo scaffale proibito, una scatola da scarpe piena di tessere della biblioteca', once: true, next: 'b17' },
    ],
  },

  b7b: {
    location: 'biblioteca',
    caption: 'Quello che il Bibliotecario custodiva',
    stinger: 'item',
    text: `Chi di voi ha orecchio segue il tintinnìo fino in fondo alla frana di libri, sposta tre enciclopedie e un dizionario che sospira — e lo trova.

Uno scatolino di cartoncino, tenuto insieme dallo scotch, con sopra la grafia di Daniele: *"SET GDR — NON APRIRE PRIMA DELLA CAMPAGNA"*. Dentro: schede mai compilate, matite mai temperate, e un **d20 blu e bianco** che rotola in un angolo come se aspettasse da anni il suo turno.

Il Bibliotecario lo teneva nella sua sala. Non a catalogo: **nascosto**. Un libro mai scritto che custodiva un gioco mai giocato.

Sotto i dadi, un foglietto piegato in quattro. La grafia del gemello:

*"Un giorno li porto a giocare a D&D. Federico dirà che è da sfigati. Giocherà più forte di tutti."*

Nessuno dice niente. Federico tiene il foglietto un secondo di troppo prima di ridarlo indietro.

> Federico: "È da sfigati." *(pausa)* "Il d20 lo tengo io. Da... custode. Della roba da sfigati."

> Emanuela: *(a bassa voce, agli altri)* "Non glielo tocca nessuno, quel dado. Chiaro?"

**(Ottenete il D20 DI DANIELE: il portafortuna mai lanciato.)**`,
    item: 'd20_daniele',
    choices: [
      { text: '📕 Ora la biografia. Strappare la catena di carta', next: 'b8' },
      { text: '🎲 Lanciare il d20 una volta, per scaramanzia: se esce 20, è un buon segno', once: true, sets: { d20_lanciato: true }, next: 'b7c' },
    ],
  },

  b7c: {
    location: 'biblioteca',
    caption: 'Il d20 che aspettava',
    sets: { diciassette_firma: true },
    text: `Federico lo tira per terra, sul pavimento della biblioteca maledetta, senza cerimonie. Il dado rotola per tre metri, sbatte contro il dorso di un'enciclopedia che si ritrae offesa, e si ferma.

**DICIASSETTE.**

> Federico: "Diciassette. Ma vaffanculo."

> Claudia: "Perché, è brutto?"

> Federico: *(con la faccia di uno preso alle spalle)* "È il diciassette. È il suo compleanno. È il numero che chiama sempre, a qualunque cosa giochi, dalla tombola al fantacalcio — 'perché il diciassette porta sfortuna agli ALTRI'." *(raccoglie il dado e lo stringe in pugno)* "Prima volta che questo dado rotola in vita sua. E fa il numero suo."

> Natalino: *(piano)* "Allora non l'hai tirato tu."

Nessuno risponde. Federico si rimette il d20 in tasca — nella tasca interna, quella dei documenti.

**(Diciassette. Non era un buon segno: era una FIRMA.)**`,
    choices: [
      { text: '📕 Ora la biografia. Strappare la catena di carta', next: 'b8' },
    ],
  },

  /* ---------- b8 / b9 — LA BIOGRAFIA E IL SEGRETO ---------- */

  b8: {
    location: 'biblioteca',
    caption: 'La biografia di Eleinad — il libro allo specchio',
    text: `La catena di carta si strappa con un suono di piccolo lamento. Il libro rilegato a specchio è freddo, e pesa più di quanto dovrebbe — pesa come una persona piccola.

Lo aprite. Ed è **scritto al contrario**. Non solo le lettere, rovesciate come timbri: il libro COMINCIA dall'ultima pagina. La prima riga leggibile, in fondo a tutto, capovolta, dice: *".enif al è otseuQ"*

> Federico: "Ok. Chi di noi legge lo speculare? Claudia, tu fai i post, avrai presente—"

> Claudia: "Io faccio gli SCREENSHOT, Federico, non le sedute spiritiche tipografiche."

Provate a leggerlo così com'è, e dopo tre righe le lettere rovesciate cominciano a **girare nella testa** come acqua sporca in uno scarico. C'è un solo modo pulito: lo specchio da toeletta è lì apposta. Il libro davanti allo specchio, gli occhi sul riflesso — e leggere il libro come il libro non vuole essere letto.

> Gaetano: "Attenzione, però. Va tenuto ferMO, l'angolo giusto, la pagina giusta. Se sbagliamo il verso, quello ci legge lui."`,
    choices: [
      { text: '🪞 Sistemare specchio e libro e leggere il riflesso, con metodo', tag: 'Prova di Intelligenza — CD 12', check: { stat: 'INT', dc: 12, success: 'b9', fail: 'b8b' } },
      { text: '📖 Sfogliare il libro senza specchio: cercare figure, schemi, qualcosa di leggibile', sets: { biografia_sfogliata: true }, next: 'b11' },
    ],
  },

  b8b: {
    location: 'biblioteca',
    caption: 'Il libro che legge te — la nausea grigia',
    text: `Sbagliate l'angolo. O forse è il libro che LO sbaglia per voi: la pagina scivola, il riflesso si sdoppia, e per un lungo istante nello specchio da toeletta non c'è il libro — ci siete **voi**, scritti al contrario, e qualcosa vi sta leggendo ad alta voce dall'altra parte del vetro.

La nausea arriva subito, grigia e densa, come aver bevuto acqua di lavatrice. Natalino fa in tempo a girarsi. Federico no.

> Federico: *(piegato in due)* "Ho visto il mio estratto conto allo specchio. Era IN ATTIVO. Non era il mio. NIENTE lì dentro è nostro."

> Emanuela: "Respira. Guarda me, non il vetro. È come i tizi che ti parlano addosso in spiaggia: non gli dai l'attenzione, e muoiono di fame."

Lo specchio torna specchio. Il libro aspetta, paziente come solo la carta sa essere. Vi asciugate la bocca. La pagina è ancora lì.

**(-2 PV a tutti: il Grigiore vi è passato dalla gola.)**`,
    damage: 2,
    choices: [
      { text: '🪞 Riprovare: angolo giusto, pagina ferma, occhi sul riflesso', next: 'b8' },
      { text: '🚪 Lasciar perdere il libro maledetto: verso l\'uscita della biblioteca', next: 'b11' },
    ],
  },

  b9: {
    location: 'biblioteca',
    caption: 'IL SEGRETO — il nome allo specchio',
    text: `L'angolo giusto. La pagina ferma. E nello specchio, le lettere si raddrizzano tutte insieme, docili, come se aspettassero solo di essere guardate nel modo che ODIANO.

La biografia è breve. E non è una biografia: è un **atto di nascita**, redatto con astio da qualcuno — o qualcosa — che conosceva bene la creatura.

*"Non è nato. È stato RIFLESSO. Quando un lettore vero si fermò troppo a lungo davanti al proprio specchio grigio, l'immagine imparò a restare. Non è l'anima di Daniele: è la sua fotocopia venuta male. Scimmiotta la sua intelligenza e produce solo crudeltà; scimmiotta la sua ironia e produce solo veleno. E lo SA. Ogni giorno si guarda e sa di essere il verso sbagliato di qualcuno migliore, e questo lo divora d'invidia più di qualunque fame."*

E in fondo, sottolineato tre volte, l'unica riga scritta nel verso GIUSTO — perché chi l'ha scritta voleva che si potesse leggere anche di fretta, anche terrorizzati:

*"Il suo nome è il nome del lettore, rovesciato. Chi lo NOMINA al contrario mentre lo guarda negli occhi, gli ricorda cos'è."*

> Claudia: *(piano)* "Eleinad... E-L-E-I-N-A-D. Al contrario è..."

> Federico: "**Daniele.**" *(un silenzio lunghissimo)* "Quel figlio di puttana ha rubato il nome di mio fratello e non ha nemmeno avuto la fantasia di CAMBIARLO."

**(SEGRETO APPRESO: Eleinad è un riflesso-parassita. Il suo nome vero — "Daniele" — è la sua ferita. 🎨 +1 Colore.)**`,
    sets: { segreto_specchio: true },
    gold: 1,
    choices: [
      { text: '🗣 Un applauso lento di pagine, dal buio: il Bibliotecario ha ascoltato tutto. Affrontarlo', requires: { notFlag: 'bibliotecario_morto' }, next: 'b10' },
      { text: '🚪 Portare il segreto fuori di qui, verso l\'uscita', next: 'b11' },
    ],
  },

  /* ---------- b10 — IL DUELLO DI PAROLE ---------- */

  b10: {
    location: 'biblioteca',
    npc: ['bibliotecario'],
    caption: '🗣 Duello di Parole — il difensore del catalogo',
    text: `**🗣 DUELLO DI PAROLE**

Il Bibliotecario si para tra voi e l'uscita, e per la prima volta la copertina bianca ha qualcosa scritto sopra: **REGOLAMENTO**. Le pagine di tutto il suo corpo frusciano insieme, e la voce che esce non recensisce più. **Sentenzia.**

> Il Bibliotecario: "Quello che avete letto va restituito. È scritto nel regolamento della direzione, articolo primo: *ciò che è a catalogo resta a catalogo*. Non lo dico io — lo dice IL LIBRO. E i libri non mentono: se mentissero, non li avremmo messi nelle biblioteche. Chi siete voi per discutere con la carta stampata? Avete letto UNA biografia. Io ne INDOSSO diecimila. L'autorità della carta è l'unica autorità rimasta al mondo, e la carta dice: **restituite il segreto e sedetevi**."

Suona giusto. Suona TIMBRATO, protocollato, inevitabile — come tutte le cose dette con il tono di chi ha la legge dalla sua.

*(Vi torna in mente una nota a margine di Daniele, letta nella sua sezione: "il camice non è un argomento". Nemmeno la rilegatura, forse.)*

Dov'è il trucco?`,
    choices: [
      { text: '⚖️ AUTORITÀ: "Il libro lo DICE? E chi l\'ha scritto, il libro? La carta non ha ragione: ha solo la copertina."', next: 'b10b' },
      { text: '👥 RIPROVA SOCIALE: "Diecimila libri la pensano come te? Allora sbagliano in diecimila."', once: true, next: 'b10c' },
      { text: '⚔️ FALSA DICOTOMIA: "O restituiamo o ci sediamo? Scegliamo la terza: usciamo."', once: true, next: 'b10c' },
    ],
  },

  b10c: {
    location: 'biblioteca',
    caption: 'Il contraccolpo — protocollato',
    text: `Il Bibliotecario non alza la voce. La **protocolla**.

> Il Bibliotecario: "Obiezione ricevuta, valutata, respinta. Come da regolamento." *(le pagine frusciano compiaciute)* "Vedete? Ho perfino ASCOLTATO. Lo dice l'articolo quarto: la direzione ascolta sempre. Sta scritto. Dunque è vero."

E la sentenza vi cade addosso come uno scaffale: le parole sbagliate rimbalzano sulla sua rilegatura e tornano indietro con gli interessi, timbrate, in triplice copia. Vi sentite piccoli, non a norma, **fuori catalogo** — e il grigio ne approfitta, entra dalle crepe dell'orgoglio come spiffero sotto la porta.

> Natalino: "Ragazzi, non funziona. Stiamo discutendo col regolamento, non con LUI."

> Claudia: "Aspetta... è questo il punto. Continua a dire che lo dice IL LIBRO. Mai che lo dice LUI. Chiedetevi PERCHÉ."

**(-3 PV a tutti: la sentenza pesa. Ma adesso il trucco si vede meglio.)**`,
    damage: 3,
    choices: [
      { text: '🗣 Riprendere il duello, mirando meglio', next: 'b10' },
    ],
  },

  b10b: {
    location: 'biblioteca',
    caption: 'Il Bibliotecario si slega',
    stinger: 'item',
    text: `La parola **Autorità** gli arriva addosso come un dito che indica. E il Bibliotecario... si INCEPPA.

> Il Bibliotecario: "La carta dice— la carta— chi l'ha scritto, il..." *(le pagine sfarfallano, perdono il ritmo, e per la prima volta la voce esce da UNA pagina sola, piccola, in fondo)* "...non lo so. Non l'ho mai... controllato. Ho passato la vita a catalogare gli autori e non ho mai chiesto chi ha scritto il MIO regolamento."

E si slega. Letteralmente: la rilegatura si allenta, i dorsi si aprono a ventaglio, e da sotto diecimila libri mai letti affiora una cosa piccola e stanca che una volta era un **lettore** — occhiaie, cardigan, e l'aria di chi torna da un turno lunghissimo.

> Il Bibliotecario: "Quattro stelle. Argomentazione tagliente, tempismo perfetto. Come le note di quel ragazzo. Il vostro amico." *(fruga tra i propri scaffali, tira fuori uno scatolino con lo scotch)* "Custodivo questa. Non a catalogo: da AMICO. Ditegli che aspettiamo ancora la sua campagna."

Dentro: il set da GdR di Daniele, mai usato. Schede bianche, matite intatte, un **d20 blu e bianco**. E un foglietto: *"Un giorno li porto a giocare a D&D. Federico dirà che è da sfigati. Giocherà più forte di tutti."*

> Federico: "È da sfigati." *(si mette il d20 in tasca, piano, come una cosa fragile)* "Ci giochiamo appena esce da qui. E faccio il guerriero."

**(Il Bibliotecario è dei vostri. Ottenete il D20 DI DANIELE. 🎨 +1 Colore.)**`,
    item: 'd20_daniele',
    sets: { bibliotecario_amico: true },
    gold: 1,
    choices: [
      { text: '🚪 Il Bibliotecario vi indica l\'uscita: seguire la sua scia di segnalibri', next: 'b11' },
      { text: '📕 Prima, se non l\'avete ancora letta: la biografia allo scaffale proibito', next: 'b8' },
    ],
  },

  /* ---------- b12 — IL LIBRO DELLE COSE BELLE ---------- */

  b12: {
    location: 'biblioteca',
    caption: 'Lo scaffale girevole — il Libro delle Cose Belle',
    stinger: 'item',
    text: `Dietro lo scaffale girevole c'è un vano piccolo come un confessionale, e dentro, su un leggìo, UN solo libro. È l'unica cosa in tutta la biblioteca che ha i **colori**: la copertina è calda come una foto d'estate, e il Grigiore intorno ci ha provato — si vedono i segni, ditate grigie sui bordi — ma non è riuscito a sbiancarlo.

Lo aprite. E dentro ci siete **voi**.

La sfida pancakes contro crêpes, scritta come una cronaca sportiva: *"Federico annuncia l'ovetto segreto; Claudia lo umilia con eleganza; il giudice Natalino chiede il terzo assaggio 'per scrupolo'."* I racchettoni: *"Gaetano e Claudia, sassate che decapitano; Emanuela fa il tifo col cappello grande."* La grigliata: *"Gaetano gestisce la brace stile Pasquetta, Daniele legge sul lettino e alza gli occhi a ogni risata, per non perdersele."*

Leggerne una pagina scalda come una domenica intera. Ma sotto i vostri occhi, la pagina letta **ingiallisce** — il colore se ne va in voi, e alla carta resta l'autunno.

> Emanuela: "È il libro che ci tiene in vita. E noi lo stiamo consumando."

> Natalino: "O è lui che sta tenendo in vita NOI. Uno strappo e ce lo portiamo dietro... o lo lasciamo qui, intero, per chi passa dopo."

**(+4 PV a tutti: le cose belle, rilette, curano.)**`,
    heal: 4,
    sets: { libro_cose_belle: true },
    choices: [
      { text: '📄 Strappare la pagina più bella e portarla via, nel taschino, sul cuore', sets: { pagina_strappata: true }, next: 'b5' },
      { text: '📕 Lasciare il libro intero sul leggìo: qui dentro serve più che in tasca', next: 'b5' },
    ],
  },

  /* ---------- b11 — L'USCITA ---------- */

  b11: {
    location: 'biblioteca',
    caption: 'L\'uscita della biblioteca — i sussurri si abbassano',
    text: `La porta d'uscita è dove non era all'andata — ovvio — ma stavolta la trovate subito, come se la biblioteca avesse smesso di nascondervela.

E mentre attraversate l'ultimo corridoio, succede la cosa più strana della notte: i libri sussurrano **più piano**. Non smettono. Si abbassano. Come una classe quando passa qualcuno che si è fatto rispettare — o come lettori che sbirciano l'ultimo capitolo e non vogliono rovinarvi il finale.

> Claudia: "Perché bisbigliano così? Prima ci leggevano le paure in faccia."

> Gaetano: "Perché adesso sanno qualcosa che prima non sapevano." *(si ferma un passo, ascolta)* "O l'hanno letto. Come va a finire."

> Federico: *(al corridoio, ad alta voce)* "EHI. Se qualcuno di voi ha letto il finale... il fratello vince, sì?"

I sussurri si fermano del tutto. Un secondo. Due.

Poi un libro solo, piccolo, da qualche parte in alto, fa un fruscìo che — giurereste — somiglia a una pagina girata in fretta. Per non farsi beccare a leggere avanti.

> Emanuela: "Andiamo. Prima che ci facciano lo spoiler."

Uscite nel Salotto-Cattedrale con un manuale, un segreto, e i nomi giusti in bocca.

**(Siete entrati in una biblioteca che legge le paure, e ne uscite più colorati di prima.)**`,
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
      { text: '📖 Un libro è caduto dallo scaffale: la copertina è a COLORI', once: true, sets: { libro_colori: true }, next: 'b11b' },
    ],
  },

  b11b: {
    location: 'biblioteca',
    caption: 'Il catalogo dei colori',
    sets: { scorta_di_blu: true },
    text: `Il libro è caduto aperto, a faccia in su, e la copertina è a COLORI — la prima cosa a colori vista qui dentro dopo lo scaffale D-1994. È un catalogo tipografico di sfumature: rettangolini stampati, uno accanto all'altro, con il nome sotto.

È aperto sulla pagina dei blu. E su un rettangolino, uno solo, c'è un cerchio a penna e una nota a margine nella grafia del gemello:

*"QUESTO. Blu Serapo, ore 19:10, agosto. Se un giorno mi serve un colore da tenere in tasca, è questo."*

> Claudia: *(confronta il rettangolino con la foto di Gaeta sul telefono, e non le serve un secondo)* "È identico. È IDENTICO. Ha trovato il suo mare in un campionario da tipografia e l'ha cerchiato a penna."

> Gaetano: "Si è scelto un colore da tenere in tasca. PRIMA che qualcuno provasse a portargli via tutti gli altri." *(chiude il libro e se lo mette sotto il braccio, senza chiedere il permesso alla biblioteca)* "Questa non è nostalgia. È PREPARAZIONE."

> Federico: "Mio fratello. Che si fa la scorta di blu."

**(Nel catalogo dei colori, un blu cerchiato a penna — Serapo, ore 19:10. Daniele si era fatto la scorta.)**`,
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
    ],
  },

  /* ============ SECONDA ONDATA — ESPANSIONE DEL BLOCCO B ============ */

  /* ---------- b13 / b13b — L'ARCHIVIO DEI DIARI ALTRUI ---------- */

  b13: {
    location: 'biblioteca',
    caption: 'L\'Archivio dei Diari Altrui',
    stinger: 'penna',
    text: `L'archivio è una stanza stretta e altissima, foderata di cassetti da catalogo fino al soffitto. Su ogni cassetto, una targhetta scritta a mano. Non titoli. **Indirizzi.** Via Roma 12, Torino. Vico Sartoria 3, Napoli. Un casale in provincia di Latina.

> Claudia: "Non sono libri. Sono case. Sono TUTTE le case dove è entrato."

Aprite un cassetto a caso. Dentro, diari. Impilati con cura, con addosso la polvere di chi non torna a riprenderli. Ne leggete tre, e vi bastano per il resto della vita:

*"Papà ha smesso di fischiettare mentre si rade. Poi ha smesso di radersi. Poi io ho smesso di chiederglielo."*

*"Il gatto non entra più in salotto. Fissa il divano e soffia. Sul divano non c'è nessuno. Sul divano c'è la nonna."*

*"Giorno 40. Abbiamo tinteggiato tre volte. Il grigio non è sui muri. Ci ho messo quaranta giorni a capirlo: il grigio non è SUI muri."*

Emanuela richiude il cassetto piano, come si richiude una bara piccola.

> Emanuela: "Quante case, porca puttana. Quante. E noi che pensavamo fosse solo la nostra."

> Gaetano: "Aspettate. Guardate in fondo."

In fondo alla stanza c'è un cassetto diverso. Più piccolo, senza polvere, con la targhetta lucidata di fresco. Non è un indirizzo: dice **"RESTITUITI"**. Ed è quasi vuoto — dentro, dal rumore, UNA cosa sola che scivola avanti e indietro.

> Natalino: "Restituiti. Cioè... gente che è USCITA?"`,
    choices: [
      { text: '📔 Aprire il cassetto dei RESTITUITI', next: 'b13b' },
      { text: '🚪 Chiudere tutto e tornare nella sala di lettura', next: 'b5' },
    ],
  },

  b13b: {
    location: 'biblioteca',
    caption: 'Il diario restituito — qualcuno ce l\'ha fatta',
    stinger: 'item',
    text: `Nel cassetto c'è un diario solo. Copertina a fiori, sbiadita ai bordi ma **a colori** nel mezzo, come una cosa strappata al grigio all'ultimo momento. Prima pagina: *"Diario di Rosa. Se lo trovate, il trucco funziona anche per altri."*

Leggete. Rosa è rimasta sul divano di una casa come questa per — dice lei — "un tempo che non si conta in giorni". E poi:

*"Mia sorella veniva tutti i giorni. Non mi ha mai detto 'alzati'. Si sedeva ACCANTO, sul bracciolo, e mi raccontava le cose a colori: il mercato, la figlia, il mare mosso. La casa la odiava, perché non riusciva a stancarla. Il grigio conta su una cosa sola: che chi è fuori, prima o poi, smetta di tornare. Davanti a una che torna, e torna, e torna... non sa che fare."*

E l'ultima pagina, scritta di corsa, in salita:

*"Oggi mi sono alzata A METÀ PAGINA. Non ho finito il capitolo, non ho spento la TV, non ho messo a posto. Ho lasciato tutto a metà e sono uscita, e nessuna regola del mondo ha potuto fermarmi — perché non esiste nessuna regola che dice che devi finire. Il divano ha urlato. Ve lo giuro: ha urlato. Vuol dire che funziona."*

Sotto il diario, una boccetta piccola col tappo dorato, piena di qualcosa che si muove come un tramonto.

> Claudia: *(foto mentale, occhi lucidi)* "Daniele ha qualcuno che torna, e torna, e torna. Ha NOI. Segnatevi tutto quanto."

**(Ottenete una BOCCATA DI COLORE. E un'idea che vale più della boccetta: si può uscire a metà pagina.)**`,
    item: 'boccata_colore',
    sets: { pagina_del_salvato: true },
    choices: [
      { text: '🚶 Tornare alla sala di lettura, col diario di Rosa in mente', next: 'b5' },
      { text: '📝 Aggiungere una riga al diario di Rosa: "Cinque che tornano, e tornano, e tornano"', once: true, sets: { riga_aggiunta_rosa: true }, next: 'b5' },
    ],
  },

  /* ---------- b14 / b14b / b14c — LA SALA DEI LIBRI MAI FINITI ---------- */

  b14: {
    location: 'biblioteca',
    caption: 'La Sala dei Libri Mai Finiti',
    text: `Lo scaffale ruota e vi sputa in una sala che sa di inchiostro andato a male. Il pavimento è vivo: **manoscritti a metà** che si trascinano come animali investiti, ognuno dietro il suo segnalibro a nastro — rosso, floscio, che striscia sul parquet come una cosa che dovrebbe stare DENTRO.

E implorano. Cristo, se implorano.

> *(un giallo, fermo al capitolo 13 da sessant'anni)* "...l'assassino... stavo per DIRLO... sei parole ancora, sei parole..."

> *(un romanzo rosa, congelato a un centimetro da un bacio)* "...le nostre labbra... dal 1974... vi prego, ho i CRAMPI..."

> *(un ricettario, aperto su una riga sola)* "...sale quanto basta... QUANTO? QUANTO BASTA?!"

Un dattiloscritto vi abbranca una caviglia con le pagine, e non tira: **supplica**, con la forza precisa e oscena di una mano d'ospedale.

> Federico: "Levatemelo! Levatemelo di dosso, cazzo!"

> Natalino: "Non vogliono farci male. Vogliono un FINALE. Sono rimasti a metà così a lungo che la ferita gli si è infettata."

> Emanuela: "E allora il finale glielo diamo. Siamo cinque persone con una fantasia decente e una paura fottuta: si lavora anche peggio, di solito."

> Gaetano: "O improvvisiamo col cuore, o lo facciamo col metodo. Ma qualcosa gli diamo, o questi non ci mollano più."`,
    choices: [
      { text: '🎭 Improvvisare i finali ad alta voce, uno a testa, col cuore', tag: 'Prova di gruppo di Carisma — CD 12', check: { stat: 'CAR', dc: 12, success: 'b14b', fail: 'b14c' } },
      { text: '🧠 Metodo Gaetano: arco narrativo, matrice dei finali, colpevoli distribuiti', tag: 'Prova di gruppo di Intelligenza — CD 12', check: { stat: 'INT', dc: 12, success: 'b14b', fail: 'b14c' } },
      { text: '🚪 Scusarsi coi manoscritti e sgattaiolare verso la sala di lettura', next: 'b5' },
    ],
  },

  b14b: {
    location: 'biblioteca',
    caption: 'I finali regalati — funziona',
    text: `Funziona. Dio santo, funziona.

Claudia chiude il romanzo rosa con un bacio e un "e vissero stanchi ma contenti", e il manoscritto **sospira** — un sospiro di cinquant'anni, che sa di polvere e di sollievo — poi si chiude da solo, piano, e non si muove più. Sereno.

Il ricettario riceve da Emanuela un "due pizzichi, amore, e assaggia" e muore felice come un cliente sotto il casco.

Poi il giallo. Tocca a Federico.

> Federico: "L'assassino... è IL DENTISTA."

> *(il giallo, fremendo)* "...nel romanzo non compare nessun dentista..."

> Federico: "Appunto. Nessuno sospetta di chi non compare. Il movente è il TARTARO. Fine."

Silenzio. Il giallo ci pensa. Poi le pagine fanno una cosa che nessun libro dovrebbe fare: **applaudono** — e si chiudono con un ultimo fruscìo che somiglia troppo a una risata per essere altro.

Restano lì, i libri finiti: fermi, in pace, in fila sul parquet come sassi al sole. E — dettaglio che non vi lascerà mai più — da ognuno cola un filo sottile di inchiostro nero, dall'ultima pagina, come sangue da una ferita che finalmente si è chiusa. Qui dentro, morire finiti è il lieto fine.

**(🎨 +1 Colore: i finali regalati tornano indietro coi colori addosso.)**

Poi il pavimento **trema**. In fondo alla sala, una cosa grande come un armadio si solleva: un manoscritto di quattromila pagine, rilegato in corda e unghie. Il Capobranco.

E lui non vuole un finale. Lui vuole VOI.`,
    gold: 1,
    choices: [
      { text: '🗣 Il Manoscritto-Capobranco vi si para davanti', next: 'b16' },
      { text: '🖋 Raccogliere l\'inchiostro dei libri finiti: potrebbe servire', once: true, sets: { inchiostro_finale: true }, next: 'b16' },
    ],
  },

  b14c: {
    location: 'biblioteca',
    caption: 'La frase proibita — i manoscritti urlano',
    text: `Partite pieni di buona volontà, e la buona volontà, qui dentro, non basta un cazzo.

Federico chiude il giallo con "e poi si svegliò: era stato tutto un sogno" — e il giallo **URLA**. Un urlo di carta, verticale, che vi entra nei denti. Tutti i manoscritti della sala si irrigidiscono insieme: avete detto la frase proibita, la fine peggiore di tutte le fini, l'insulto supremo.

> *(il giallo, tra singhiozzi di pagine)* "...sessant'anni... sessant'anni ad aspettare... PER UN SOGNO?..."

> Claudia: "Federico, PORCA PUTTANA—"

> Federico: "Era la prima cosa che mi è venuta! Funziona sempre, nei film!"

> Natalino: "Non funziona MAI, nemmeno nei film! È il motivo per cui la gente TIRA COSE allo schermo!"

I manoscritti vi si stringono addosso, feriti, e il loro dolore è contagioso come uno sbadiglio: vi sale in gola tutta la stanchezza di tutte le cose lasciate a metà — le VOSTRE. La palestra di gennaio. Il corso d'inglese. Le scuse mai fatte. Pesa da piegarvi le ginocchia.

**(-2 PV a tutti: il rimorso di carta taglia sottile.)**

E il peggio arriva adesso: dal fondo della sala, svegliato dall'urlo, si alza il **Capobranco** — un manoscritto di quattromila pagine, rilegato in corda e unghie, con l'aria paziente di chi ha sentito TUTTO.`,
    damage: 2,
    choices: [
      { text: '🗣 Affrontare il Manoscritto-Capobranco', next: 'b16' },
      { text: '😰 "SCUSATE! Non era il finale vero!" Provare a calmare i libri', tag: 'Prova di Carisma — CD 13', once: true, check: { stat: 'CAR', dc: 13, success: 'b16', fail: 'b14_ko' }, heal: 1 },
    ],
  },

  /* ---------- b16 / b16v / b16k — DUELLO DI PAROLE: IL CAPOBRANCO ---------- */


  b14_ko: {
    location: 'biblioteca',
    caption: 'La tempesta di carta',
    damage: 2,
    text: `Le scuse peggiorano tutto: i manoscritti odiano la pietà quasi quanto i finali frettolosi. La sala si alza in un VORTICE di pagine — migliaia di fogli che tagliano l'aria, e la carta, quando vuole, taglia come la latta.

Ne uscite a braccia alzate, con le mani e le guance segnate da una gragnola di tagli sottili, ognuno con una riga di testo stampata al contrario sulla pelle.

> Federico: *(leggendosi il polso)* "'...e vissero'. Mi si è stampato addosso '...e vissero'. Manco FELICI E CONTENTI, solo 'e vissero'."

> Claudia: "Vista la serata, firmerei."`,
    choices: [
      { text: '⛓ Al Capobranco, coi segni della carta addosso', next: 'b16' },
    ],
  },

  b16: {
    location: 'biblioteca',
    caption: '🗣 Duello di Parole — il Manoscritto-Capobranco',
    text: `**🗣 DUELLO DI PAROLE**

Il Capobranco non striscia: **incombe**. Quattromila pagine mai finite, rilegate in corda e unghie, e una voce che esce da tutte le righe insieme — calda, ragionevole, terribilmente dalla vostra parte.

> Il Capobranco: "Vi ho guardati. Siete gente che FINISCE le cose. Avete dato un finale al rosa, al giallo, al ricettario — che gesto splendido, che gente SERIA. Ed è per questo che lo sapete già da soli: chi comincia, finisce. È quello che siete. L'avete appena dimostrato, qui, davanti a testimoni. Fermarvi adesso sarebbe... incoerente. Sarebbe tradire non me — figuriamoci, io sono solo carta — ma quello che VOI avete appena scelto di essere. Perciò sedetevi. Cominciate da pagina uno. Sono lungo, sì. Ma voi siete gente che finisce. Vero?"

Le pagine si aprono come braccia spalancate. E il ragionamento vi si chiude addosso come una porta: ha ragione, no? Avete cominciato. Sarebbe da vigliacchi fermarsi, da incoerenti, da gente-che-molla...

*(vi torna in mente una nota a margine di Daniele, intravista nella sua sezione: "La fregatura più elegante non ti chiede di credere a LEI: ti chiede di restare fedele a quello che hai già fatto. Come se tu fossi un contratto, e non una persona.")*

Dov'è il trucco?`,
    choices: [
      { text: '😢 RICATTO EMOTIVO: "Piangi pure tutte le tue pagine: non firmeremo il tuo finale per pietà."', once: true, next: 'b16k' },
      { text: '⛓ IMPEGNO/COERENZA: "Aver cominciato non è una promessa. Non siamo TENUTI a finire niente: si può cambiare idea a metà pagina."', next: 'b16v' },
      { text: '⏳ SCARSITÀ: "Ultima occasione un corno: sei qui da sessant\'anni, puoi aspettare."', once: true, next: 'b16k' },
      { text: '📔 Fare come Rosa: alzarsi a metà pagina e andarsene, senza spiegazioni', requires: { flag: 'pagina_del_salvato' }, next: 'b16v' },
    ],
  },

  b16k: {
    location: 'biblioteca',
    caption: 'Il contraccolpo — state già leggendo',
    text: `Il colpo rimbalza. Il Capobranco nemmeno si scompone: **annuisce**, con tutta la copertina, come un professore paziente davanti a un errore prevedibile.

> Il Capobranco: "Vedete? State discutendo con me. State INVESTENDO. Ogni parola che spendete qui è un'altra pagina che avete cominciato — e chi comincia, finisce. Vi state rilegando da soli, punto dopo punto, ed è bellissimo da leggere."

E ha ragione, ecco l'orrore: più parlate, più il pavimento vi sembra comodo, più andarsene adesso sembra "buttare via tutto il lavoro fatto". Le ginocchia vi si piegano da sole, in cerca della seduta. Qualcuno di voi si accorge di aver già letto TRE righe della sua prima pagina, senza volerlo, e di volere — un pochino, orribilmente — sapere come continua.

> Emanuela: "Ragazzi. RAGAZZI. È il monologhista della spiaggia. È identico al monologhista della spiaggia: più gli rispondi, più resti."

> Claudia: "Allora il punto non è COSA gli rispondiamo. È che ci sentiamo in debito perché abbiamo cominciato. Chi l'ha deciso? DOVE sta scritto?"

> Gaetano: "Da nessuna parte. Non c'è nessun contratto. C'è solo lui che ci ricorda in continuazione quello che 'siamo'..."

**(-3 PV a tutti: le ginocchia cercano il pavimento. Ma il trucco, adesso, ha un contorno preciso.)**`,
    damage: 3,
    choices: [
      { text: '🗣 Riprendere il duello — e stavolta niente pagina uno', next: 'b16' },
    ],
  },

  b16v: {
    location: 'biblioteca',
    caption: 'Il Capobranco si chiude a metà',
    stinger: 'gold',
    text: `**Impegno e coerenza.** Lo dite ad alta voce — *non siamo tenuti a finire niente* — e il Capobranco si INCEPPA.

> Il Capobranco: "Ma... avete cominciato. Chi comincia fin— chi comincia f-f—" *(le pagine sfarfallano, perdono il segno, la corda della rilegatura vibra)* "—si può... cambiare idea... a metà pagina?"

Silenzio enorme. Quattromila pagine che ci pensano.

> Il Capobranco: *(piano, da una riga sola, piccolissima)* "Allora posso smettere anch'io."

E davanti a voi, il manoscritto più ostinato della biblioteca fa la cosa che nessuno gli aveva mai concesso: **si chiude a metà**. A pagina 1987 di 4000. Senza finale, senza scuse. La corda si allenta. Le unghie della rilegatura si aprono come una mano che smette di stringere. E dal dorso esce un suono che non è un lamento — è il sospiro di uno che posa uno zaino portato per sessant'anni.

Sull'ultima pagina scritta, davanti ai vostri occhi, compaiono tre parole nuove, in una grafia stanca e finalmente libera:

*"FINE. (Più o meno.)"*

> Natalino: "Ha mollato a metà ED È FELICE. Lo racconto a mia madre, che me lo rinfaccia dal duemilaquattro con la storia del conservatorio."

> Federico: "Frena, frena. Questo NON vale per la palestra."

> Emanuela: "Vale ANCHE per la palestra, amore. Vale per tutto." *(pausa)* "Tranne che per Daniele."

Già. Per Daniele si finisce.

**(🎨 +1 Colore: l'incantesimo della coerenza si spezza — a metà, che è il modo giusto.)**`,
    gold: 1,
    choices: [
      { text: '🚶 La sala si riapre: tornare verso la sala di lettura', next: 'b5' },
      { text: '📖 Le pagine dell\'ultimo capitolo: leggerle prima che sbiadiscano', once: true, next: 'b16_capitolo' },
    ],
  },

  /* ---------- b15 / b15b — I TOPI TRA GLI SCAFFALI ---------- */

  b15: {
    location: 'biblioteca',
    caption: 'Gli scaffali bassi — i topi di carta',
    stinger: 'jumpscare',
    text: `Il fruscìo viene dagli scaffali bassi, quelli dei libri per bambini — perché questa casa di merda ha il senso dell'umorismo di un becchino.

Natalino lo dice piano, con la voce di uno che spera ancora di sbagliarsi:

> Natalino: "Ditemi che è il vento. Ditemi che in questo posto c'è il VENTO."

Non è il vento. Dal buio tra i dorsi colano fuori i **topi**: grigi, sì, ma non di pelo — di **carta masticata e polvere feltrata**, con le code di segnalibro e gli occhi come punti fermi, neri e senza fondo. Rosicchiano i libri da dentro: dai dorsi sventrati esce segatura di parole, e le pagine superstiti hanno buchi a forma di frase mangiata.

Uno si ferma. Vi guarda. E fa una cosa che i topi veri non fanno: **si alza sulle zampe posteriori e legge Natalino ad alta voce**, con una vocina di carta strappata:

> *(il topo)* "...zampette sotto il letto... l'ultimo tronello che si sbriciola tra le dita..."

> Natalino: "NO. No no no. La mia paura NON LA RECITI, brutto figlio di—"

Lo sciame parte. Tre, dieci, trenta — dai ripiani, dalle scale a chiocciola, giù dal soffitto come pigne marce. Claudia afferra un atlante e lo impugna come una racchetta. Gaetano le si mette schiena contro schiena, per puro istinto da racchettoni.

> Gaetano: "Come al mare, amore. Sassata e copertura!"

**(Non serve sterminarli: serve spezzare lo sciame.)**`,
    combat: { enemies: ['topo_grigio', 'topo_grigio', 'topo_grigio'], victory: 'b15b', defeat: 'b_ko', loot: { gold: 1, items: ['taralli'] } },
  },

  b15b: {
    location: 'biblioteca',
    caption: 'Natalino, professionista — la seconda ondata',
    text: `L'ultimo topo dello sciame esplode in coriandoli grigi sotto l'atlante di Claudia. Silenzio. Respiri.

Poi li vedete: dagli scaffali in alto, **altri occhi**. Decine. Una seconda ondata, più grossa, e in testa un topo di carta grande come un gatto, con la coda fatta di segnalibri intrecciati in una treccia.

E qui succede la cosa che vi racconterete per anni.

Natalino — Natalino che i topi li teme da prima di saper camminare — fa un passo AVANTI. Tira fuori le forbici giapponesi con la mano che trema. Poi la mano smette di tremare, perché le mani di Natalino, sul lavoro, non tremano mai. Pettine nell'altra. Postura da salone.

> Natalino: "Allora. Chi è il primo?" *(due colpi di forbice a vuoto, TAC TAC — il suono più professionale del mondo)* "Vedo doppie punte. Vedo trascuratezza. Vedo una treccia che definire criminale è un complimento. Ho l'agenda piena, ma per voi... mi libero."

Il topo grande fa mezzo passo avanti. Le forbici scattano UNA volta, precise come un giudizio: la punta della treccia-coda cade sul parquet, recisa netta.

Lo sciame si FERMA. Il topo grande guarda la propria coda. Guarda Natalino. E l'ondata intera rifluisce negli scaffali, in silenzio, come una marea che ha capito con chi ha a che fare.

> Natalino: *(riponendo le forbici, voce ferma e gambe no)* "Reggetemi. Reggetemi ADESSO, per favore. Davanti a loro non potevo."

Nella tana, tra pagine rosicchiate, il bottino: i topi la carta la mangiano, ma i **taralli** non li sanno apprezzare.`,
    choices: [
      { text: '📚 Rimettersi in marcia: più avanti, tra gli scaffali, qualcosa di GROSSO sta catalogando', next: 'b2' },
      { text: '✂️ Tenere la treccia recisa: Natalino la intreccia come portafortuna', once: true, sets: { treccia_portafortuna: true }, next: 'b2' },
    ],
  },

  /* ---------- b17 — LE TESSERE DEI LETTORI (cuore/lore) ---------- */

  b17: {
    location: 'biblioteca',
    caption: 'Le tessere dei lettori — il prestito di Daniele',
    stinger: 'item',
    text: `La scatola è una scatola da scarpe, e dentro ci sono le **tessere dei lettori**. Cartoncini timbrati, uno per persona: nome, prestiti, data di rientro. Le sfogliate e capite che state tenendo in mano i Lettori Grigi — chi erano PRIMA della vestaglia.

*"MARTA C. — ultimi prestiti: manuali di vela. Nota: chiedeva sempre libri sul mare. Poi ha smesso di chiedere."*

*"L'UOMO DEL TAVOLO 9 — ultimo prestito: 'Favole della buonanotte'. MAI RESTITUITO. Nota della direzione: irrecuperabile."*

> Claudia: "Il tavolo 9... è quello col segnalibro. Il sole giallo, la casa rossa. Capite? Sotto le pagine bianche sta ancora leggendo le favole a qualcuno. Per questo non affonda."

Nessuno parla per un po'. Poi Gaetano trova l'ultima tessera. Cartoncino nuovo, timbro fresco: **tre giorni fa**.

*"DANIELE — prestiti: Cialdini (rientrato), 'Logica del primo ordine' (rientrato), 'Le fallacie: riconoscerle e smontarle' (rientrato, con annotazioni NON autorizzate e francamente migliorative). RICHIESTO, IN ARRIVO: 'Organizzare la prima campagna di D&D per un gruppo di principianti assoluti'."*

> Federico: *(la legge due volte)* "In arrivo. Ha ordinato un libro. Da QUI DENTRO, mentre quella cosa gli scimmiotta la faccia, mio fratello ha ordinato un libro per il DOPO."

Accanto alla scatola, in equilibrio su una mensola, una **lattina di Coca Zero** usata come fermacarte. Sotto, un post-it con una freccia verso l'uscita e due parole: *"Vi aspetto."*

> Emanuela: "La lattina prendetela. È sua. Si restituisce a mano."

**(Ottenete una LATTINA ZERO — fredda, chissà come. Il dopo esiste, ed è già ordinato.)**`,
    item: 'lattina_zero',
    choices: [
      { text: '📕 Tornare allo scaffale proibito, alla biografia', next: 'b8' },
      { text: '🚪 Dritti verso l\'uscita, con la lattina in tasca', next: 'b11' },
    ],
  },

};

/* ============ REGISTRO DEL BLOCCO B ============

FLAG IMPOSTATI → CONSUMATORE:
- via_biblioteca (b3)          → progresso piste nell'hub h1 (contatore piste completate)
- segreto_specchio (b9)        → scelte del finale z (nominare "Daniele" allo specchio: e_parola)
- manuale_annotato_letto (b3b) → eco nei boss (combat.js: il gruppo riconosce le fallacie, indizio gratis/bonus nei Duelli)
- bibliotecario_amico (b10b)   → impresa + cronaca (il lettore slegato riapre la biblioteca)
- bibliotecario_morto (b6b_vinto) → gate meccanico (esclude b10/b10b, apre b7b) + impresa + cronaca
- ancora_colore_nota (b5b)     → diario (DIARY_FLAGS: un'àncora di colore tiene a galla)
- libro_cose_belle (b12)       → diario (DIARY_FLAGS: il libro che il Grigiore non sbianca)
- pagina_strappata (b12, scelta) → cronaca (la pagina nel taschino / il libro rimasto intero)

ITEM DATI:
- manuale_annotato (b3)  — l'arma per i Duelli di Parole
- d20_daniele (b10b se il Bibliotecario è vivo e il duello è vinto; altrimenti b7b con prova SAG 13, once)

MORTI POSSIBILI: nessuna. Sconfitte in combattimento → b_ko (fullHeal, goldLoss 2, RETRY_COMBAT o fuga verso b7).

USCITE DAL BLOCCO: solo h1 (da b11).
STINGER USATI: jumpscare (b2b, b6b), risata (b2), item (b3, b7b, b10b, b12) — tutti nella lista ammessa.
================================================= */

/* ============ BLOCCO C — IL CORRIDOIO DELLE PORTE SBAGLIATE (u*) ============
   Pista non esclusiva dall'hub h1. Porte su ricordi corrotti del gruppo.
   Dà: le due metà della FOTO DEI GEMELLI, il SEGRETO 2 (segreto_gemelli),
   il joy-con sinistro, una MORTE VERA possibile (u6_morte), un Cuore di Colore.
   Uscite ammesse: SOLO h1.                                                  */
