/* ============ PERSONAGGI — i 5 amici + Daniele + il bestiario della Casa ============ */

/* Sistema semplificato (identico al motore Corona/Relais):
   - Caratteristiche come modificatori diretti (da -1 a +4)
   - Tiro: d20 + modificatore  vs  CD (difficoltà)
   - Attacco: d20 + mod arma   vs  CA del bersaglio
   - Danno: dadi + modificatore
   NOVITÀ della Casa:
   - locked: true  → l'eroe non appare nel setup: si sblocca GIOCANDO (Daniele)
   - h.morto       → morte vera: l'eroe resta come SPIRITO (commenta, non tira)
   - undead: true  → creatura del Grigiore: danni DOPPI dalle armi VIVIDE (holy) */

const HEROES = [
  {
    id: 'gaetano',
    sprite: 'gaetano',
    name: 'Gaetano',
    class: 'L\'Ingegnere',
    tagline: 'Progetta satelliti. Il telefono è in modalità aereo: stanotte NESSUNA emergenza lo trova. Forse.',
    role: 'La mente fredda del gruppo: analizza, pianifica, e ai racchettoni tira sassate che decapitano.',
    stats: { FOR: 1, DES: 2, COS: 2, INT: 4, SAG: 2, CAR: 0 },
    maxHp: 22, ac: 14,
    attack: { name: 'Racchettone professionale', stat: 'DES', dice: [1, 8], bonus: 1, desc: '1d8+3 danni — il dritto che in spiaggia fischia come una fucilata' },
    abilities: [
      { id: 'analisi', name: 'Analisi Strutturale', uses: 3, type: 'autohit', dice: [2, 6], bonus: 2,
        desc: 'Trova il punto debole della cosa — c\'è SEMPRE un punto debole, è fisica — e lo colpisce senza sbagliare: 2d6+2 danni automatici.' },
      { id: 'schiacciata', name: 'Schiacciata da Spiaggia', uses: 2, type: 'stun', dice: [1, 10], stat: 'DES',
        desc: 'IL colpo. Quello che a Gaeta fa spostare gli ombrelloni: 1d10+4 danni e il bersaglio, centrato in fronte, salta il turno.' },
    ],
    passive: 'Metodo Scientifico: +2 a tutte le prove di Intelligenza.',
    backstory: `Gaetano progetta satelliti, e questa settimana era LA settimana di ferie: telefono in modalità aereo, nessun cliente, nessuna emergenza in orbita, e soprattutto — l'aveva detto a tutti — NESSUNO studente delle ripetizioni che scrive alle 21 per la verifica dell'indomani. Poi Daniele ha smesso di rispondere in chat, e Gaetano ha riacceso il telefono senza nemmeno pensarci. È il fidanzato di Claudia: insieme, ai racchettoni, sono una cosa che i bagnini raccontano ai nuovi assunti a voce bassa. Il racchettone è in macchina. Per fortuna.`,
    voice: 'Cerca spiegazioni razionali finché ha voce: "C\'è una spiegazione. Non mi piace, ma c\'è."',
  },
  {
    id: 'natalino',
    sprite: 'natalino',
    name: 'Natalino',
    class: 'Il Parrucchiere',
    tagline: 'Forbici giapponesi, polso chirurgico, e due tronelli di scorta. Contati. Ricontati.',
    role: 'Rapido e letale nei colpi mirati: il pugnale del gruppo, con più stile.',
    stats: { FOR: 0, DES: 4, COS: 1, INT: 1, SAG: 1, CAR: 2 },
    maxHp: 18, ac: 14,
    attack: { name: 'Forbici professionali', stat: 'DES', dice: [1, 6], bonus: 2, desc: '1d6+6 danni' },
    abilities: [
      { id: 'taglio', name: 'Taglio Scalato', uses: 3, type: 'sneak', dice: [3, 6], stat: 'DES',
        desc: 'Vent\'anni di polso fermo, con vantaggio (2 dadi, tieni il migliore): 3d6+4 danni dove fa più male.' },
      { id: 'lacca', name: 'Lacca Extra-Forte', uses: 2, type: 'smoke',
        desc: 'Una nuvola di fissaggio professionale negli occhi di TUTTI i nemici: per un giro attaccano con svantaggio.' },
    ],
    passive: 'Mani di Fata: una volta per scontro, se tira 1 sul d20, può ritirare.',
    backstory: `Natalino fa il parrucchiere con Emanuela, ed è l'unico del gruppo che con Daniele ci parla DAVVERO, nelle sere lunghe, tra un tiro di tronello e una partita a carte. Quando la chat è ammutolita, è stato lui a dire "si va, adesso": ha chiuso il salone in anticipo — cosa mai successa nella storia della categoria — e ha rollato due tronelli di scorta con la cura delle grandi occasioni. Odia due cose al mondo: i topi, e l'idea di restare senza tronelli. La Casa, che ascolta, ha preso nota di entrambe.`,
    voice: 'Commenta l\'orrore come un cliente difficile: "Amore, questo corridoio è di un TETRO che manco i saldi a gennaio."',
  },
  {
    id: 'claudia',
    sprite: 'claudia',
    name: 'Claudia',
    class: 'L\'Osservatrice',
    tagline: 'Social media manager. Nota TUTTO: un dettaglio fuori posto, una storia che non torna.',
    role: 'Gli occhi del gruppo: percepisce, scopre, e col racchettone non perdona.',
    stats: { FOR: 0, DES: 3, COS: 1, INT: 2, SAG: 4, CAR: 1 },
    maxHp: 18, ac: 14,
    attack: { name: 'Racchettone professionale', stat: 'DES', dice: [1, 8], bonus: 1, desc: '1d8+4 danni — lo smash che a riva chiamano "la ghigliottina"' },
    abilities: [
      { id: 'flash', name: 'Ring Light a Palla', uses: 3, type: 'pet', dice: [2, 6], bonus: 2,
        desc: 'Luce da studio dritta nelle orbite: 2d6+2 danni automatici e il bersaglio, accecato, attacca con svantaggio. Nella casa grigia, la luce vera fa MALE.' },
      { id: 'scambio', name: 'Scambio Lungo', uses: 2, type: 'double', dice: [1, 8], stat: 'DES',
        desc: 'Palleggio da professionisti: DUE colpi di racchettone in un turno, 1d8+3 l\'uno, anche su bersagli diversi. La palla non cade mai.' },
    ],
    passive: 'Scroll Infinito: +2 a tutte le prove di Saggezza (percezione, dettagli, cose che non tornano).',
    backstory: `Claudia gestisce i social di un colosso degli occhiali: vive di dettagli, inquadrature e crisi disinnescate prima che esplodano. È stata lei ad accorgersi per prima che qualcosa non andava: Daniele in chat non "spariva" — DIMINUIVA. Messaggi più corti, poi emoji, poi visualizzato, poi niente. Ha lo screenshot di tutto, perché Claudia ha SEMPRE lo screenshot di tutto. Fidanzata con Gaetano, con cui condivide il segreto tecnico del racchettone perfetto. Ha una paura sola al mondo: l'acqua profonda, e quello che ci abita sotto. La Casa lo sa.`,
    voice: 'Inquadra tutto per istinto: "Fermi. FERMI. Quella porta prima non c\'era, ho la foto di dieci secondi fa."',
  },
  {
    id: 'federico',
    sprite: 'federico',
    name: 'Federico',
    class: 'Il Persuasore',
    tagline: 'Consulente di comunicazione. Gemello di Daniele. Non sono d\'accordo su NIENTE dal 1994.',
    role: 'La parlantina del gruppo: tratta, distrae, convince. E stanotte ha un conto in sospeso col sangue.',
    stats: { FOR: 1, DES: 1, COS: 1, INT: 2, SAG: 0, CAR: 4 },
    maxHp: 20, ac: 14,
    attack: { name: 'Cavatappi multiuso (della scorta tattica)', stat: 'FOR', dice: [1, 8], bonus: 1, desc: '1d8+2 danni' },
    abilities: [
      { id: 'pitch', name: 'Pitch Aggressivo', uses: 3, type: 'bighit', dice: [2, 8], stat: 'CAR',
        desc: 'Un\'invettiva così precisa e personale che fa MALE fisicamente: 2d8+4 danni. Sui mostri della Casa funziona: sono suscettibili.' },
      { id: 'meeting', name: 'Convochiamo un Meeting', uses: 2, type: 'stun', dice: [1, 8], stat: 'CAR',
        desc: '1d8+4 danni e il nemico, intrappolato in un discorso motivazionale, salta il turno per riprendersi.' },
    ],
    passive: 'Media Training: +2 a tutte le prove di Carisma.',
    backstory: `Federico ha un'agenzia di comunicazione, dieci birre al limone al giorno ("è scienza") e un fratello gemello con cui non concorda su NULLA: chi ha ragione, i soldi, le scelte di vita, perfino la pastella dei pancakes. Litigano da trent'anni con la costanza di un abbonamento. Ma quando Claudia ha detto "Daniele non risponde", Federico era già in macchina prima che finisse la frase — perché puoi litigare all'infinito solo con qualcuno che dai per SEMPRE lì. Ha portato la scorta tattica di birre al limone. Tutte e dieci. "Per Daniele", dice. Nessuno commenta.`,
    voice: 'Tratta con qualunque cosa: "Ok. OK. Sento che c\'è margine per un win-win, anche qui."',
  },
  {
    id: 'emanuela',
    sprite: 'emanuela',
    name: 'Emanuela',
    class: 'La Guaritrice',
    tagline: 'Parrucchiera, vita di mare, borsa Kerastase infinita: dentro c\'è SEMPRE quello che serve.',
    role: 'Tiene in piedi il gruppo: medica, rianima, e certi prodotti professionali negli occhi BRUCIANO.',
    stats: { FOR: 1, DES: 2, COS: 2, INT: 1, SAG: 3, CAR: 1 },
    maxHp: 20, ac: 14,
    attack: { name: 'Piastra in ceramica (rovente)', stat: 'DES', dice: [1, 8], bonus: 1, desc: '1d8+3 danni' },
    abilities: [
      { id: 'pronto_soccorso', name: 'Mani d\'Oro', uses: 3, type: 'heal', dice: [1, 8], bonus: 3,
        desc: 'Kit da borsa: garze, cerotti, ago e sangue freddo. Cura un amico di 1d8+3 PV — rialza anche chi è svenuto!' },
      { id: 'phon', name: 'Colpo di Phon', uses: 2, type: 'holy', dice: [3, 6], stat: 'DES',
        desc: 'Aria rovente a 2200W dritta in faccia: 3d6+2 danni, DOPPI contro le cose del Grigiore (il caldo VIVO le offende).' },
    ],
    passive: 'Cuore Saldo: a inizio scontro tutto il gruppo recupera 2 PV. ("Respirate. Ci sono io.")',
    backstory: `Emanuela ha fatto la parrucchiera a Ibiza, viene dal mare di Gaeta, e ha una regola di vita sola: le vibrazioni si CURANO. Un molesto che monologa a una festa? Neutralizzato in quaranta secondi con un sorriso e una scusa perfetta. Per questo la Casa la disturba a un livello personale: è il vibe-killer definitivo, un posto intero che ti parla addosso finché non ti spegni. Fidanzata con Federico, considera Daniele "il cognato saggio". Nella borsa Kerastase — che non ha un fondo documentato — stanotte c'è tutto: garze, spray professionali, taralli. E la piastra. Carica.`,
    voice: 'Calma operativa da salone pieno il sabato: "Nessuno si spegne stasera. Ho i cerotti e ho da fare lunedì."',
  },
  {
    id: 'daniele',
    sprite: 'daniele',
    name: 'Daniele',
    class: 'Il Dialettico',
    locked: true,
    tagline: 'Legge Cialdini per hobby. Il demone ha imparato la retorica da lui. Errore GRAVISSIMO.',
    role: 'Si sblocca giocando: la mente che smonta gli inganni. Nei Duelli di Parole è il fuoriclasse.',
    stats: { FOR: 0, DES: 1, COS: 1, INT: 4, SAG: 2, CAR: 3 },
    maxHp: 20, ac: 14,
    attack: { name: 'Joy-Con scagliato con rancore', stat: 'DES', dice: [1, 8], bonus: 1, desc: '1d8+2 danni — e torna indietro. Di solito.' },
    abilities: [
      { id: 'guscio_blu', name: 'Guscio Blu', uses: 2, type: 'autohit', dice: [3, 6], bonus: 3,
        desc: 'La legge più giusta dell\'universo: colpisce SEMPRE, e colpisce il primo. 3d6+3 danni automatici — puntatelo sul nemico più forte, per rispetto della tradizione.' },
      { id: 'fallacia', name: 'Chiamata di Fallacia', uses: 3, type: 'stun', dice: [1, 8], stat: 'INT',
        desc: 'Nomina ad alta voce il trucco retorico del nemico — "STRAWMAN!" — e quello si INCEPPA: 1d8+4 danni e salta il turno, umiliato sul piano argomentativo.' },
    ],
    passive: 'Ha Letto il Manuale: +2 a tutte le prove di Carisma, e nei Duelli di Parole vi suggerisce SEMPRE la risposta.',
    backstory: `Daniele è il gemello di Federico: stessa faccia, idee opposte su tutto, competitivi al punto che una briscola tra loro due va arbitrata. È il più casalingo del gruppo — divano, libri, Switch, Coca Zero in quantità industriale — e il più letto: comunicazione, psicologia, fallacie logiche, Cialdini sottolineato in tre colori. Nelle discussioni vince SEMPRE, e lo sa, e gli altri lo sanno, e rosicano. Il Grigiore se l'è preso in casa, piano, una sera per volta. Errore suo: perché Daniele il manuale del nemico l'ha già letto. Sottolineato. In tre colori.`,
    voice: 'Smonta tutto con calma chirurgica: "Questa è una falsa dicotomia e te lo dimostro in tre passaggi."',
  },
];

/* ---------- BESTIARIO DELLA CASA ---------- */
/* ai: 'random' colpisce a caso, 'weakest' chi ha meno PV, 'strongest' chi ne ha di più,
   'smart' punta chi cura. undead: true = creatura del Grigiore → danni doppi dalle armi VIVIDE. */

const BESTIARY = {
  topo_grigio: {
    name: 'Topo del Grigiore', short: 'Topo', sprite: 'topo_grigio',
    maxHp: 12, ac: 13, ai: 'weakest', undead: true,
    attack: { name: 'Morso di cenere', bonus: 5, dice: [1, 6], plus: 2 },
    flavor: 'Grosso come un gatto, grigio come la polvere sotto i mobili. Mastica le cose a cui tenete. RUMOROSAMENTE.',
  },
  manichino_vita: {
    name: 'Comparsa della Vita Finta', short: 'Comparsa', sprite: 'manichino_vita',
    maxHp: 19, ac: 14, ai: 'random', undead: true,
    attack: { name: 'Abbraccio di cartone', bonus: 5, dice: [1, 8], plus: 3 },
    flavor: 'Una sagoma con un sorriso stampato e i vestiti di qualcuno che conoscete. Recita la parte di un amico. Male.',
  },
  divorente: {
    name: 'Il Divorente', sprite: 'divorente',
    maxHp: 35, ac: 14, ai: 'strongest', undead: true, boss: true,
    attack: { name: 'Cuscini con dentro i denti', bonus: 6, dice: [1, 10], plus: 4 },
    flavor: 'Il divano. Il DIVANO. Tre posti, penisola, e uno stomaco che digerisce pomeriggi interi. Non è mai stato un mobile.',
  },
  sciame_bollette: {
    name: 'Sciame di Bollette', short: 'Sciame', sprite: 'sciame_bollette',
    maxHp: 16, ac: 15, ai: 'smart', undead: true,
    attack: { name: 'Taglio di carta (con more)', bonus: 6, dice: [1, 6], plus: 3 },
    flavor: 'Buste bianche con la finestrella, a migliaia, che volano come vespe. Ogni taglio brucia il doppio: è ADDEBITATO.',
  },
  monologante: {
    name: 'Il Monologante', sprite: 'monologante',
    maxHp: 30, ac: 13, ai: 'random', undead: true,
    attack: { name: 'Aneddoto senza uscita', bonus: 5, dice: [1, 8], plus: 4 },
    flavor: 'Un tizio in polo che parla, parla, PARLA. Non respira mai. Ogni frase ti toglie qualcosa che non sapevi di avere.',
  },
  hostess: {
    name: 'La Hostess del Volo Fermo', short: 'Hostess', sprite: 'hostess',
    maxHp: 24, ac: 15, ai: 'weakest', undead: true,
    attack: { name: 'Dimostrazione di sicurezza', bonus: 6, dice: [1, 8], plus: 3 },
    flavor: 'Sorride con troppi denti e indica le uscite. Le uscite non ci sono. "Allacciate le cinture. Restiamo a terra PER SEMPRE."',
  },
  luca_giunti: {
    name: 'Luca Giunti delle 21:00', short: 'Luca', sprite: 'luca_giunti',
    maxHp: 40, ac: 15, ai: 'smart', undead: true, boss: true,
    attack: { name: 'Richiesta all\'ultimo minuto', bonus: 7, dice: [2, 6], plus: 3 },
    flavor: 'Uno zaino, un libro di fisica mai aperto, e una domanda eterna: "Prof, domani ho la verifica. Facciamo QUATTRO ORE?" Sono le 21:00. Sono SEMPRE le 21:00.',
  },
  cosa_sommersa: {
    name: 'La Cosa tra gli Scogli', short: 'La Cosa', sprite: 'cosa_sommersa',
    maxHp: 38, ac: 14, ai: 'strongest', undead: true, boss: true,
    attack: { name: 'Presa dal fondale', bonus: 7, dice: [2, 6], plus: 3 },
    flavor: 'Sta sotto il pelo dell\'acqua nera, dove i piedi non toccano. Ha la pazienza degli scogli e le dita lunghe delle alghe.',
  },
  bibliotecario: {
    name: 'Il Bibliotecario', sprite: 'bibliotecario',
    maxHp: 32, ac: 15, ai: 'smart', undead: true,
    attack: { name: 'Recensione demolitrice', bonus: 6, dice: [1, 10], plus: 3 },
    flavor: 'Fatto di dorsi di libri mai letti. Ti legge ad alta voce i tuoi pensieri peggiori, con citazione della fonte.',
  },
  gemello_sbagliato: {
    name: 'Il Gemello Sbagliato', short: 'Gemello', sprite: 'gemello_sbagliato',
    maxHp: 32, ac: 15, ai: 'smart', undead: true,
    attack: { name: 'La frase che fa più male', bonus: 6, dice: [1, 8], plus: 4 },
    flavor: 'Ha la faccia di Federico e di Daniele insieme, e non sta bene su nessuna delle due. Dice le cose che i gemelli si urlano. Tutte. In ordine.',
  },
  sonnambulo: {
    name: 'Sonnambulo del Grigiore', short: 'Sonnambulo', sprite: 'sonnambulo',
    maxHp: 20, ac: 13, ai: 'random', undead: true,
    attack: { name: 'Presa molle', bonus: 5, dice: [1, 8], plus: 2 },
    flavor: 'Qualcuno che il Grigiore ha già preso, altrove, in un\'altra casa. Cammina in pigiama, gli occhi come schermi spenti. Non è cattivo. Non è più NIENTE.',
  },
  mercante_guardia: {
    name: 'Riscossore del Mercante', short: 'Riscossore', sprite: 'mercante_guardia',
    maxHp: 27, ac: 15, ai: 'smart', undead: true,
    attack: { name: 'Pignoramento', bonus: 6, dice: [1, 10], plus: 3 },
    flavor: 'Tre metri di contratto arrotolato con dentro qualcosa che cammina. Il Mercante non fa credito. Il Riscossore lo SPIEGA.',
  },
  bozzolo_guardiano: {
    name: 'Guardiano del Bozzolo', sprite: 'bozzolo_guardiano',
    maxHp: 54, ac: 16, ai: 'smart', undead: true, boss: true,
    attack: { name: 'Filo grigio', bonus: 7, dice: [2, 6], plus: 4 },
    flavor: 'Il telecomando universale della casa, cresciuto fino a due metri e mezzo. Ha un tasto solo, grande, rosso: CONTINUA A GUARDARE.',
  },
  eleinad_maschera: {
    name: 'Eleinad, il Volto Rubato', short: 'Eleinad', sprite: 'eleinad',
    maxHp: 61, ac: 17, ai: 'smart', undead: true, boss: true, lifesteal: true,
    attack: { name: 'Argomento Fantoccio', bonus: 8, dice: [2, 8], plus: 3 },
    flavor: 'La faccia di Daniele portata come una maschera di carnevale, un millimetro fuori asse. Sorride quando non dovrebbe. Cita le fonti. Le fonti siete voi.',
  },
  eleinad_vero: {
    name: 'ELEINAD', short: 'ELEINAD', sprite: 'eleinad_vero',
    maxHp: 81, ac: 17, ai: 'smart', undead: true, boss: true, lifesteal: true,
    attack: { name: 'Il Grigiore in persona', bonus: 9, dice: [2, 8], plus: 4 },
    flavor: 'Sotto la maschera: il contrario esatto di una persona. Un buco a forma di Daniele che parla con la voce di tutti quelli che avete deluso.',
  },
};
