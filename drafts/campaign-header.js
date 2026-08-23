/* ============ LA CASA CHE NON FINISCE — campagna completa ============
   Formato identico al motore Relais. In più:
   - killRoller: true   → chi ha appena tirato (e fallito) MUORE DAVVERO: resta come SPIRITO
   - unlockHero: 'id'   → l'eroe si unisce al gruppo (Daniele, allo snodo)
   - choice.sacrifice   → il tavolo sceglie CHI resta (morte volontaria)
   - requires.hero / requires.spirit / requires.heroDead nelle scelte
   - reviveAll: true    → solo nei finali che se lo meritano
   - Valuta: G.gold = COLORE (🎨). Si guadagna con le scelte vive e coraggiose,
     si spende dal Mercante Grigio. La resurrezione costa carissimo.            */

const ITEMS = {
  /* --- cure e consumabili --- */
  kit_emanuela:   { name: 'Kit della borsa Kerastase', desc: 'Garze, cerotti, ago da sutura e una calma da salone pieno il sabato. Ripristina 10 PV.', usable: true, heal: 10 },
  lattina_zero:   { name: 'Coca Zero di Daniele', desc: 'Della scorta industriale. Fredda al punto giusto anche quando non dovrebbe. +4 PV e lucidità immediata. Daniele approverebbe. Anzi: pretenderebbe.', usable: true, heal: 4 },
  birra_limone:   { name: 'Birra al limone di Federico', desc: 'Della scorta tattica ("ne servono DIECI al giorno, è scienza"). +3 PV e un rutto di conforto che sfida il Grigiore.', usable: true, heal: 3 },
  ipa_gaetano:    { name: 'IPA di Gaetano', desc: 'Luppolo serio per momenti seri. +4 PV e il coraggio amaro di chi legge le etichette.', usable: true, heal: 4 },
  taralli:        { name: 'Taralli della borsa di Emanuela', desc: 'Dalla borsa Kerastase: il pronto soccorso, il salone di bellezza, e i taralli. +2 PV e un morale insospettabilmente migliore.', usable: true, heal: 2 },
  tronello:       { name: 'Tronello di riserva', desc: 'Rollato da Natalino con cura liturgica. Troppo prezioso per fumarselo in fretta: la Casa rispetta le cose fatte con amore. "Non è vizio, è MANUTENZIONE."', usable: false },
  caffe_moka:     { name: 'La moka di Daniele', desc: 'Il caffè di casa sua, nero e VIVO. Ricarica TUTTE le abilità di una persona.', usable: true, recharge: true },
  gocce_dottore:  { name: 'Le Gocce del Dottore', desc: 'La scorta di Daniele, con la ricetta e la sua grafia sui promemoria. Il dottore sa il fatto suo: +6 PV e scioglie il Grigiore dalle vene.', usable: true, heal: 6, cureVeleno: true },
  boccata_colore: { name: 'Boccata di Colore', desc: 'Una fiala del Mercante: dentro c\'è un tramonto di qualcun altro. Cura il GRIGIORE e scalda il resto (+3 PV).', usable: true, heal: 3, cureVeleno: true },
  cuore_colore:   { name: 'Cuore di Colore', desc: 'Batte. Nella borsa, batte. L\'oggetto più raro della Casa: riporta indietro uno SPIRITO. Uno solo. Sceglietelo bene.', revive: true },

  /* --- oggetti da combattimento --- */
  spray_kerastase: { name: 'Spray professionale Kerastase', desc: 'Prodotto di punta, uso improprio: dritto negli occhi (quando ci sono). 1d2 danni e il bersaglio, accecato, attacca con svantaggio.', combat: { distract: true, dice: [1, 2], distractText: ' Lo spray professionale ACCECA: svantaggio al prossimo attacco!' }, icon: '💇' },
  accendino_bbq:   { name: 'Accendigas della grigliata', desc: 'Quello delle grigliate stile Pasquetta di Gaetano. Una fiamma VERA, calda e viva: 2d4 danni, DOPPI alle cose del Grigiore. Il gas basta per un colpo.', combat: { dice: [2, 4], holy: true }, icon: '🔥' },
  lattina_agitata: { name: 'Coca Zero agitata', desc: 'Agitata con odio per trenta secondi. Aperta in faccia: 2d6 danni di schiuma pressurizzata. Daniele NON approverebbe lo spreco. Capirebbe l\'urgenza.', combat: { dice: [2, 6] }, icon: '🥤' },
  cassa_bluetooth: { name: 'Cassa bluetooth (playlist dell\'estate)', desc: 'La playlist delle vacanze, a tutto volume. La musica VIVA ferma le cose grigie: le piccole si bloccano un giro, le grandi esitano. Un uso: poi la batteria muore.', combat: { calm: true }, icon: '🔊' },
  pallina_racchettoni: { name: 'La pallina dei racchettoni', desc: 'Servita da Claudia o da Gaetano, è una fucilata che decapita i passanti. 2d8 danni, DOPPI alle cose del Grigiore: non c\'è niente di più VIVO di quel dritto.', combat: { dice: [2, 8], holy: true }, icon: '🎾' },

  /* --- oggetti chiave --- */
  chiavi_scorta:   { name: 'Chiavi di scorta di Daniele', desc: 'Ve le diede "per le emergenze". Lanciate in faccia a una cosa grigia fanno 1d4 danni e un bel rumore metallico — il rumore di una porta che si APRE.', combat: { dice: [1, 4], distractText: ' — il tintinnio delle chiavi lo distrae!' }, icon: '🔑' },
  manuale_annotato: { name: 'Il Manuale Annotato', desc: 'Il Cialdini di Daniele, sottolineato in tre colori. A margine, le sue note: il libretto di istruzioni del nemico, scritto dalla vittima.', usable: false },
  foto_meta_federico: { name: 'Mezza foto (Federico)', desc: 'Metà di una foto strappata: un bambino su un letto a castello, che ride. Il bordo strappato CERCA l\'altra metà.', usable: false },
  foto_meta_daniele: { name: 'Mezza foto (Daniele)', desc: 'L\'altra metà: lo stesso letto, lo stesso identico riso. Strappata dal centro, dove le due spalle si toccavano.', usable: false },
  foto_gemelli:    { name: 'La foto dei gemelli (intera)', desc: 'Ricomposta col nastro adesivo: due gemelli che ridono della STESSA cosa. Mostrata in combattimento, la Casa NON RIESCE a guardarla: 2d4 danni a TUTTI, più il doppio se è roba grigia. Un uso: poi il nastro cede.', combat: { all: true, dice: [2, 4], holy: true, distract: true, distractText: ' — la foto intera li ACCECA di colore!' }, icon: '📸' },
  d20_daniele:     { name: 'Il d20 di Daniele', desc: 'Dal suo set da gioco di ruolo mai usato ("un giorno li porto a giocare a D&D"). UNA volta, permette di RITIRARE una prova fallita: il gioco ve lo proporrà al momento giusto.', usable: false },
  conchiglia_gaeta: { name: 'Conchiglia di Gaeta', desc: 'Il rumore del mare VERO, dentro una conchiglia grigia. Portata all\'orecchio di una cosa del Grigiore: 1d6 danni e svantaggio, perché il mare è l\'ultimo colore che resiste. Un uso: poi il suono si spegne.', combat: { dice: [1, 6], holy: true, distract: true, distractText: ' — il mare dentro la conchiglia lo pietrifica!' }, icon: '🐚' },
  joycon_sinistro: { name: 'Il joy-con sinistro', desc: 'Il pezzo mancante della Switch di Daniele. La Casa l\'aveva nascosto nel 1994. I salvataggi non si cancellano: si SOSPENDONO.', usable: false },
  maschera_daniele: { name: 'La maschera di Eleinad', desc: 'Cartapesta grigia col volto di Daniele, caduta quando ha smesso di fingere. Da un lato è una faccia; dall\'altro, lucida, RIFLETTE. Chi la alza davanti al demone gli mostra cos\'è.', usable: false, lore: `Pesa niente. È questo che colpisce: tutto quel terrore, e in mano sono trenta grammi di cartapesta grigia.\n\nDal lato interno, dove ha aderito per settimane a un volto che non era il suo, la superficie si è fatta liscia e lucida come uno specchio da borsetta. Ci si vede benissimo. Ci si vede TROPPO bene: ci si vede come si è, non come si vorrebbe.\n\nEcco perché Eleinad non la indossa più: alla fine, a forza di rubare una faccia, lo specchio guarda anche DENTRO. E là dentro non c'era nessuno.` },
};

/* Le piste che valgono un CHECKPOINT (cura+ricarica alla prima volta — vedi engine.js) */
const CHECKPOINT_FLAGS = ['via_biblioteca', 'via_porte', 'via_cucina', 'daniele_in_squadra'];

/* ---- Testi ispezionabili (Zaino → 📖 Ispeziona) ---- */
ITEMS.gocce_dottore.lore = `Il flacone delle Gocce del Dottore, trovato in bagno, tenuto BENE: etichetta dritta, tappo pulito, livello a metà.

Daniele le prendeva. Regolarmente — si vede dal calendarietto a crocette accanto, compilato fino a tre giorni fa — il giorno esatto in cui la casa se l'è preso. Non è un dettaglio: è la prova che stava COMBATTENDO, con gli strumenti giusti, da prima che il Grigiore barasse.

Curano l'INGRIGITO (🩶 −2): il grigio le odia, perché funzionano.`;
ITEMS.cuore_colore.lore = `Un cuore di colore compresso: rosso-arancio-oro, caldo, batte da solo.

Non è un organo — è una RISERVA: tutto il colore che il Grigiore ha spremuto a qualcuno, impacchettato così stretto da diventare materia. Avvicinatelo a una persona: si ACCORDA al suo battito in tre secondi. Cerca un proprietario.

È l'unica cosa in tutta la casa che vuole tornare indietro. Può riaccendere chi si è spento — anche chi si è spento DEL TUTTO.`;
ITEMS.manuale_annotato.lore = `"LE ARMI DELLA PERSUASIONE" — il libro sul comodino di Daniele, riletto fino a spaccarne la costa.

I margini sono PIENI di appunti a penna, la grafia di Daniele: "questa la usa la TV", "questa mia madre", "questa IO, smettere". E nell'ultima pagina, scritto grosso, sottolineato tre volte:

"Se conosci il trucco, il trucco non funziona. VALE ANCHE PER QUELLO GRANDE."

Non stava leggendo un manuale. Stava preparando un ARSENALE. Nei Duelli di Parole, queste note sono la vostra munizione migliore.`;
ITEMS.joycon_sinistro.lore = `Il joy-con sinistro di Daniele. Azzurro, con l'adesivo di un fungo mezzo staccato.

La Casa l'aveva nascosto nel 1994 — in una cella che non c'entrava niente — perché è il pezzo MANCANTE: senza sinistro non si gioca, si guarda e basta. E guardare e basta è esattamente la dieta del Grigiore.

I salvataggi non si cancellano: si SOSPENDONO. Riattaccatelo alla console del bozzolo, e si riparte dall'ultimo checkpoint.`;
ITEMS.lattina_zero.lore = `Una Coca Zero del frigo di Daniele: l'ultima della freccia di lattine — le uniche cose a COLORI in tutta la casa.

Le ha disposte lui, una alla volta, come briciole di Pollicino al contrario: non per ritrovare la strada di casa, ma per farla trovare A VOI. Fredda, rossa, viva. Il Grigiore non è riuscito a toccarle: certe fedeltà quotidiane sono impermeabili.`;
ITEMS.conchiglia_gaeta.lore = `Una conchiglia di Serapo, estate di qualche anno fa. Sta nella tasca di qualcuno da allora.

Avvicinatela all'orecchio: non fa il rumore del mare — fa il rumore di QUEL giorno di mare: le racchette, le risate, Daniele che vince a racchettoni contro Federico e non lo fa dimenticare per due estati.

I giorni troppo belli sono indigesti, per il Grigiore.`;
ITEMS.foto_gemelli.lore = `La foto ricomposta: Federico e Daniele da bambini, 1994, in cameretta — PRIMA della lite del nastro adesivo.

Ridono. Della stessa cosa, nello stesso istante, con la stessa faccia in due taglie. Il Grigiore l'aveva strappata a metà, un fratello per pezzo: il litigio dei gemelli è il suo giacimento più antico, e questa foto è la prova che la miniera NON è sempre stata aperta.

Mostratela al momento giusto: certe liti muoiono davanti alle prove.`;


/* ============ LA CASA CHE NON FINISCE — BLOCCO A: PROLOGO + SOGLIA ============
   Scene a0-a8 (prologo) + s1-s6 (soglia). Uscita unica fuori dal blocco: h1.
   Valuta: G.gold = COLORE 🎨. Nessuna morte in questo blocco.                  */
