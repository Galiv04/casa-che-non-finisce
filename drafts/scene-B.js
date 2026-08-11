/* ============ LA CASA CHE NON FINISCE — BLOCCO B: LA BIBLIOTECA CHE SUSSURRA ============
   Pista non esclusiva dall'hub h1. Dà: il Manuale Annotato (arma per i Duelli di Parole),
   il SEGRETO 1 su Eleinad (segreto_specchio), il Bibliotecario, un duello, paura e cuore.
   Uscita ammessa: SOLO h1.                                                              */

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

**(Avete LETTO il manuale: il gruppo conosce le fallacie. 🎨 +2 Colore.)**`,
    sets: { manuale_annotato_letto: true },
    gold: 2,
    choices: [
      { text: '🚶 Verso la sala di lettura, con le note ancora in testa', next: 'b5' },
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
    ],
  },

  /* ---------- b5 — LA SALA DI LETTURA: I LETTORI GRIGI ---------- */

  b5: {
    location: 'biblioteca',
    caption: 'La sala di lettura — i Lettori Grigi',
    text: `La sala di lettura è vasta e silenziosa come una sala d'attesa dell'eternità. Ai tavoli, sotto lampade verdi che non scaldano niente, siedono i **Lettori Grigi**: una dozzina di figure in pigiama e vestaglia, immobili, con davanti libri aperti dalle pagine completamente **bianche**.

Non dormono. Leggono. Gli occhi sono aperti — ma spenti, come schermi in standby, e si muovono da sinistra a destra, riga dopo riga, su pagine dove non c'è scritto NIENTE.

> Natalino: *(sottovoce)* "Oh, cazzo. Sono persone. Erano persone."

> Claudia: *(sottovoce)* "Non guardarli negli occhi. È come i monitor rotti: ti ci vedi dentro."

Uno di loro è diverso. Un uomo sulla cinquantina, vestaglia grigia come gli altri — ma tra le pagine bianche del suo libro tiene un **segnalibro a colori**: un disegno di bambino, sole giallo, casa rossa, plastificato con lo scotch. E la sua mano ci sta sopra. La difende. Anche da addormentato in piedi dentro la propria vita, la difende.

Sul fondo della sala, uno scaffale girevole cigola piano, mezzo aperto su un vano buio. Da dentro viene — giuro — un odore di **crêpes**.`,
    choices: [
      { text: '🤫 Attraversare la sala in silenzio assoluto, tra i tavoli', tag: 'Prova di Destrezza — CD 12', check: { stat: 'DES', dc: 12, success: 'b7', fail: 'b6b' } },
      { text: '👀 Fermarsi a osservarli: capire COSA leggono', tag: 'Prova di Saggezza — CD 12', check: { stat: 'SAG', dc: 12, success: 'b5b', fail: 'b6b' } },
      { text: '🌈 Lo scaffale girevole che odora di crêpes: guardarci dentro', once: true, next: 'b12' },
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

**(🎨 +1 Colore. Annotato nel diario: un'àncora di colore tiene a galla.)**`,
    gold: 1,
    sets: { ancora_colore_nota: true },
    choices: [
      { text: '🤫 Ora sapete dove NON guardare: attraversare la sala', next: 'b7' },
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
    combat: { enemies: ['bibliotecario'], victory: 'b6b_vinto', defeat: 'b_ko' },
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
    combat: { enemies: ['sonnambulo', 'sonnambulo'], victory: 'b7', defeat: 'b_ko' },
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

**(🎨 +2 Colore, raccolto dalla frana. Ma qualcosa vi dice che vi mancherà, quella voce da due stelle.)**`,
    gold: 2,
    sets: { bibliotecario_morto: true },
    choices: [
      { text: '🚶 Oltre la frana, verso il fondo della biblioteca', next: 'b7' },
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

**(Il gruppo si rialza a piene forze, ma la biblioteca si è presa 2 🎨 di Colore come "tassa di collocazione".)**`,
    fullHeal: true,
    goldLoss: 2,
    choices: [
      { text: '⚔️ Giù dagli scaffali e di nuovo addosso: RIVINCITA', next: 'RETRY_COMBAT' },
      { text: '🏃 Basta così: filare verso il fondo della biblioteca, alla svelta', next: 'b7' },
    ],
  },

  /* ---------- b7 — LO SCAFFALE PROIBITO ---------- */

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

**(SEGRETO APPRESO: Eleinad è un riflesso-parassita. Il suo nome vero — "Daniele" — è la sua ferita. 🎨 +2 Colore.)**`,
    sets: { segreto_specchio: true },
    gold: 2,
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

**(Il Bibliotecario è dei vostri. Ottenete il D20 DI DANIELE. 🎨 +2 Colore.)**`,
    item: 'd20_daniele',
    sets: { bibliotecario_amico: true },
    gold: 2,
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

**(+4 PV a tutti, 🎨 +1 Colore: le cose belle, rilette, curano.)**`,
    heal: 4,
    gold: 1,
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

**(🎨 +1 Colore: siete entrati in una biblioteca che legge le paure, e ne uscite più colorati di prima.)**`,
    gold: 1,
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
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
