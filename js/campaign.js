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
  taralli:        { name: 'Taralli di scorta', desc: 'Razionati da Emanuela con criteri militari. +2 PV e un morale insospettabilmente migliore.', usable: true, heal: 2 },
  tronello:       { name: 'Tronello di riserva', desc: 'Rollato da Natalino con cura liturgica. +5 PV e dieci minuti in cui la Casa fa un po\' meno paura. "Non è vizio, è MANUTENZIONE."', usable: true, heal: 5 },
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
  chiavi_scorta:   { name: 'Chiavi di scorta di Daniele', desc: 'Ve le diede "per le emergenze". Pensavate: innaffiare le piante. Invece.', usable: false },
  manuale_annotato: { name: 'Il Manuale Annotato', desc: 'Il Cialdini di Daniele, sottolineato in tre colori. A margine, le sue note: il libretto di istruzioni del nemico, scritto dalla vittima.', usable: false },
  foto_meta_federico: { name: 'Mezza foto (Federico)', desc: 'Metà di una foto strappata: un bambino su un letto a castello, che ride. Il bordo strappato CERCA l\'altra metà.', usable: false },
  foto_meta_daniele: { name: 'Mezza foto (Daniele)', desc: 'L\'altra metà: lo stesso letto, lo stesso identico riso. Strappata dal centro, dove le due spalle si toccavano.', usable: false },
  foto_gemelli:    { name: 'La foto dei gemelli (intera)', desc: 'Ricomposta col nastro adesivo: due gemelli che ridono della STESSA cosa. La Casa non riesce a guardarla. Tenetela in alto.', usable: false },
  d20_daniele:     { name: 'Il d20 di Daniele', desc: 'Dal suo set da gioco di ruolo mai usato ("un giorno li porto a giocare a D&D"). UNA volta, permette di RITIRARE una prova fallita: il gioco ve lo proporrà al momento giusto.', usable: false },
  conchiglia_gaeta: { name: 'Conchiglia di Gaeta', desc: 'Raccolta sulla spiaggia grigia, ma dentro c\'è ancora il rumore del mare VERO. Portata addosso, le cose della Casa esitano — un attimo, non di più.', usable: false },
  joycon_sinistro: { name: 'Il joy-con sinistro', desc: 'Il pezzo mancante della Switch di Daniele. La Casa l\'aveva nascosto nel 1994. I salvataggi non si cancellano: si SOSPENDONO.', usable: false },
};

/* ============ LA CASA CHE NON FINISCE — BLOCCO A: PROLOGO + SOGLIA ============
   Scene a0-a8 (prologo) + s1-s6 (soglia). Uscita unica fuori dal blocco: h1.
   Valuta: G.gold = COLORE 🎨. Nessuna morte in questo blocco.                  */

const SCENE_A = {

  /* ==================== PROLOGO — LA CHAT MUTA ==================== */

  a0: {
    location: 'strada',
    caption: 'Sotto il palazzo di Daniele — ore 21:40',
    text: `**La chat del gruppo è muta da tre giorni.**

Non muta come "Daniele non risponde". Muta come "Daniele non VISUALIZZA". Settantadue ore di messaggi con una spunta sola, e stasera siete tutti e cinque sotto casa sua, sul marciapiede, a fare finta che sia una cosa normale.

> Natalino: "Tre giorni. Daniele non sta zitto tre giorni manco quando ha ragione. SOPRATTUTTO quando ha ragione."

> Federico: "Sta bene. È mio fratello, lo saprei se non sta bene. È una cosa da gemelli, funziona così." *(svapa un cerchietto che gli esce storto, e lo guarda come se l'avesse tradito)*

> Emanuela: "Fede. Amore. Hai scritto in chat quarantadue volte. Le ho contate."

> Federico: "Erano argomentazioni."

Gaetano guarda il palazzo. È un palazzo qualunque — citofono, cassette della posta, un lampione che sfrigola — ma stasera ha qualcosa addosso, come un vestito della taglia sbagliata.

> Claudia: "Aspettate un secondo." *(ha già il telefono in mano, ovvio, ma stavolta lo abbassa)* "Prima di suonare voglio guardare le finestre. Terzo piano, giusto? Datemi un secondo. UN secondo."

> Gaetano: "O suoniamo e basta. È Daniele, mica un covo. Suoniamo, lui apre in pigiama, ci manda affanculo con affetto e domenica ci ridiamo sopra."

Nessuno si muove. Perché nessuno ci crede, alla domenica.`,
    choices: [
      { text: '🔔 Citofonare. Adesso.', next: 'a1' },
      { text: '👀 Claudia guarda le finestre del terzo piano', tag: 'Prova di Saggezza — CD 10', check: { stat: 'SAG', dc: 10, success: 'a0b', fail: 'a1' } },
    ],
  },

  a0b: {
    location: 'strada',
    caption: 'La finestra del terzo piano',
    text: `Claudia ha l'occhio assoluto. È il suo lavoro: vede il pixel fuori posto, il dettaglio che stona, lo screenshot che vale oro. E adesso vede la finestra di Daniele.

C'è luce. Luce di TV: quel blu freddo che pulsa contro le tende. Normale. Danielissimo, anzi: divano, serie, Coca Zero.

Solo che pulsa **a un ritmo sbagliato**.

> Claudia: "Guardate. No, GUARDATE. Uno... due... tre... lampo. Uno... due... tre... lampo."

Ha ragione. La luce di una TV vera balbetta, sfarfalla, cambia col montaggio. Questa no. Questa va come un metronomo. Come una cosa che ha imparato a fare "la luce della TV" studiandola da fuori, e la esegue. Precisa. Paziente.

Come un respiro.

> Natalino: "Sarà in pausa su un menu."

> Claudia: "Da tre giorni?"

> Gaetano: *(piano)* "I segnali periodici in natura non esistono quasi mai. O è una macchina... o è una cosa che vuole sembrare una macchina."

> Federico: "Che cazzo significa 'una cosa che vuole sembrare'—"

La luce si spegne. Di colpo, tutta insieme. Come se al terzo piano qualcuno avesse sentito la frase di Gaetano e avesse deciso che lo spettacolo, per il pubblico di sotto, era finito.

**(🎨 Colore +1: l'avete visto, e non avete distolto lo sguardo.)**`,
    gold: 1,
    sets: { finestra_vista: true },
    choices: [
      { text: '🔔 Al citofono. Subito.', next: 'a1' },
    ],
  },

  a1: {
    location: 'palazzo',
    caption: 'L\'androne — la cassetta che trabocca',
    text: `Il citofono suona a vuoto. Tre volte, cinque, dieci. Federico tiene il pulsante premuto così a lungo che il ronzio diventa una nota sola, poi molla e tira fuori un mazzo di chiavi.

> Federico: "Chiavi di scorta. Me le ha date lui, eh. 'Se muoio, il primo che entra spegne la Switch, che consuma.' Testuale."

*(nessuno ride. Federico per primo)*

Dentro, l'androne sa di cantina e di detersivo al limone. E la fila delle cassette della posta vi ferma come un muro.

Quella di Daniele **trabocca**. Non è piena: VOMITA. Avvisi di giacenza incastrati nella fessura, pacchi Amazon accatastati sotto, sul pavimento, contro il muro. Emanuela ne conta le etichette con il dito.

> Emanuela: "Coca Zero. Coca Zero. Coca Zero... Ragazzi, sono DODICI giorni di consegne. Ordinate prima, arrivate dopo. Mai ritirate."

> Natalino: "Daniele non salta un ritiro. MAI. Il corriere lo conosce per nome, gli fa gli auguri a Natale. Una volta è sceso con la febbre a trentotto e mezzo perché 'il pacco non si lascia in giacenza, è una questione di principio'."

Dodici giorni di principio, abbandonati in un androne.

> Gaetano: "Ok." *(la voce di quando smette di sperare che sia compressione dell'immagine)* "Si sale."

Le scale sono buie. L'interruttore della luce scatta a vuoto, due volte, e al terzo tentativo la lampadina si accende — fioca, giallastra, e un filo troppo tardi. Come se ci avesse pensato su.`,
    item: 'chiavi_scorta',
    choices: [
      { text: '🪜 Terzo piano. Insieme.', next: 'a2' },
    ],
  },

  a2: {
    location: 'pianerottolo',
    caption: 'Terzo piano — la porta di Daniele',
    text: `La porta di Daniele è come ve la ricordate: verniciata di un verde da condominio, lo spioncino, lo zerbino con scritto **"NON SIETE I BENVENUTI, MA ENTRATE"** — regalo di Federico, ovviamente, che Daniele finge di odiare da quattro anni e non ha mai tolto.

È tutto normale. Tutto tranne una cosa.

Dalla fessura sotto la porta, dove lo spiffero passa da sempre, sporge una **ciocca di capelli**. Castani. Lunghi quattro dita. Escono da sotto la porta come l'erba dal marciapiede, e quando Natalino si china — il parrucchiere, l'unico con il coraggio professionale di guardare — vede che alla base sono attaccati a qualcosa. Un frammento piccolo, rosato, molle. Che è cresciuto NELLA fessura, aderente al legno, come certe cose crescono negli scogli.

> Natalino: *(si rialza piano, bianco)* "Non sono tagliati. Sono... spuntati. I capelli non spuntano dal legno. Ve lo dico da professionista: i capelli non spuntano dal LEGNO, porca puttana."

> Emanuela: "Non toccarli."

> Natalino: "Manu, ti giuro su tutti i tronelli miei che non li tocco manco con le forbici della concorrenza."

Claudia fa una foto. Le trema la mano — nella foto, dopo, la ciocca verrà sfocata. Solo la ciocca.

> Federico: *(chiavi in mano, che tintinnano)* "Bussiamo prima? O apro?"`,
    choices: [
      { text: '✊ Bussare. Dare a Daniele la possibilità di aprire lui.', next: 'a2b' },
      { text: '🔑 Aprire con le chiavi, adesso.', next: 'a3' },
    ],
  },

  a2b: {
    location: 'pianerottolo',
    caption: 'La voce dietro la porta',
    text: `Federico bussa. Tre colpi, quelli di sempre: due secchi e uno lungo, il codice dei gemelli da quando avevano sei anni.

Silenzio. Poi passi. Passi che arrivano alla porta **troppo in fretta** — come se qualcuno fosse già lì dietro, in piedi, ad aspettare, e i passi li avesse aggiunti dopo, per credibilità.

> La voce: "Tutto bene! Sto benissimo! Andate via!"

È la voce di Daniele. Il timbro, l'altezza, perfino quel filo di raucedine da troppa aria condizionata. Tutti tirano un mezzo respiro — tranne Federico, che si è irrigidito come un cavo d'acciaio.

> La voce: "Ho solo bisogno di stare un po' da solo. Davvero. Grazie di essere passati... **Fede**."

Silenzio sul pianerottolo.

Federico odia "Fede". Lo odia da trent'anni. Daniele lo sa meglio di chiunque, perché è stato LUI a piantargli in testa il tormentone che "Fede è un nome da bagnino" — e da allora, per protocollo di guerra fraterna, lo chiama Federico, sempre, per intero, anche negli auguri, anche nelle liti, ANCHE NELLE LITI SUI SOLDI, che è tutto dire.

> Federico: *(alla porta, piano, quasi dolce)* "Come mi hai chiamato?"

Dietro la porta, la cosa capisce di avere sbagliato. I passi si allontanano — all'indietro, senza girarsi, si sente dallo scricchiolio — e da qualche parte, dentro, una TV si accende da sola.

> Federico: "Apri. APRI. Dammi 'ste chiavi—" *(le ha già in mano)*`,
    sets: { voce_sbagliata: true },
    choices: [
      { text: '🔑 Dentro. SUBITO.', next: 'a3' },
    ],
  },

  a3: {
    location: 'appartamento',
    caption: 'Il bilocale di Daniele — qualcosa non torna',
    text: `La chiave gira liscia. La porta si apre su casa di Daniele, e casa di Daniele è **in ordine**.

Questo è il primo problema: Daniele tiene un disordine funzionale e territoriale, "so dov'è ogni cosa, il caos è un archivio". Qui invece i libri sono allineati, i cavi arrotolati, i cuscini del divano in piedi come soldatini. Qualcuno ha riordinato. Qualcuno che di Daniele ha capito la casa ma non l'inquilino.

Il secondo problema è **il colore**. C'è, ma è stanco: il rosso della libreria è un rosso che si scusa, il giallo della cucina sembra passato in lavatrice cento volte. Come una foto lasciata al sole. Come il palazzo visto da fuori, ma peggio.

Il terzo problema è **il silenzio**. Non assenza di rumore: presenza di silenzio. Spesso, gommoso, da sala d'attesa del dentista. Vi accorgete che state parlando piano senza esservi messi d'accordo.

> Emanuela: "Daniele? Dani, siamo noi!" *(la voce le muore a un metro dalla bocca, come inghiottita)*

> Gaetano: "L'acustica è sbagliata. Il riverbero... non c'è. Le stanze piccole risuonano, è fisica. Questa ci sta ASSORBENDO."

> Natalino: "Bello. Bellissimo. Adoro quando la fisica si mette a fare l'antipatica."

Il corridoio del bilocale è corto: cucina a sinistra, salotto in fondo. Dalla porta del salotto filtra il pulsare blu della TV.

Uno-due-tre-lampo. Uno-due-tre-lampo.

> Claudia: *(a mezza voce)* "Ve l'avevo detto, del ritmo."`,
    choices: [
      { text: '🍳 Prima la cucina — di qua', next: 'a4' },
      { text: '📺 Dritti al salotto, verso la TV', next: 'a5' },
    ],
  },

  a4: {
    location: 'appartamento',
    caption: 'La cucina — grigio da cartone bagnato',
    text: `La cucina di Daniele è normale. È questa la cosa che non regge: è NORMALE, ma come la fotocopia di una fotocopia. Il piano di lavoro pulito, la moka smontata ad asciugare, i post-it sul frigo — e tutto dello stesso grigio spento, uniforme, da cartone lasciato sotto la pioggia.

Tranne il frigo. Dentro il frigo, in fila perfetta sul ripiano centrale, **le lattine di Coca Zero**. Rosse e nere e vive, gli unici oggetti A COLORI dell'intera stanza. Brillano come brace in un camino spento.

> Federico: "Le lattine no. Guardate: TUTTO è sbiadito, e le lattine no. Perché le lattine no?"

> Gaetano: "O il grigio non riesce a prenderle... o qualcuno le sta difendendo."

> Emanuela: *(ne prende due, le mette nella borsa Kerastase con la delicatezza che riserva ai flaconi da 80 euro)* "Scorta. Se le difende qualcuno, è Daniele. E se è Daniele, queste sono SUE, e gliele riportiamo piene di rispetto e vuote di contenuto se serve."

Sul tavolo, il portafrutta: mele grigie, banane grigie. Natalino ne sfiora una e la ritira di scatto — al tatto è **tiepida**, e cede come una guancia.

> Natalino: "La frutta non fa così. Niente qui dentro fa quello che deve."

Claudia si guarda intorno con l'occhio da lavoro, quello che trova il dettaglio nascosto negli screenshot. Qui dentro Daniele viveva. E Daniele lascia sempre tracce — per chi lo conosce abbastanza da cercarle nei posti giusti.`,
    item: 'lattina_zero',
    item2: 'lattina_zero',
    choices: [
      { text: '🔍 Cercare come cercherebbe un amico: nei posti SUOI', tag: 'Prova di Saggezza — CD 11', check: { stat: 'SAG', dc: 11, success: 'a4b', fail: 'a5' } },
      { text: '🚿 Controllare il bagno, di là', next: 's6' },
      { text: '📺 Basta cucina: al salotto', next: 'a5' },
    ],
  },

  a4b: {
    location: 'appartamento',
    caption: 'Il nascondiglio della moka',
    text: `Chi conosce Daniele sa che il caos è un archivio — e che le cose importanti non le mette al sicuro: le mette **dove solo un amico guarderebbe**.

Emanuela apre il barattolo del caffè. Niente. Natalino controlla dietro i libri di Cialdini. Niente. Poi Claudia solleva la moka smontata, svita il filtro, e dentro — piegato in otto, asciutto, al riparo — c'è un foglietto.

La grafia di Daniele. Fitta, dritta, lucidissima.

*"Se leggete questo, tre cose. UNO: non è una crisi. Lo so cosa pensate, NON è quello — è un inquilino abusivo, ed è pure sboccato. DUE: non ascoltate la mia faccia. Qualsiasi cosa dica la mia faccia, la mia faccia al momento è SUBAFFITTATA. TRE: Federico, se hai già toccato la Switch giuro che infesto io te. Sto lavorando dall'interno. Portate pazienza e qualcosa da bere. — D."*

Silenzio. Poi Federico ride — una risata corta, strozzata, che è per metà un singhiozzo e non lo ammetterà mai.

> Federico: "È vivo. Questo stronzo è vivo e sta facendo il simpatico DA DENTRO UNA COSA CHE GLI HA RUBATO LA FACCIA."

> Emanuela: "È il suo modo di dirci di non avere paura."

> Gaetano: "No. È il suo modo di dirci che POSSIAMO combattere. C'è differenza. Ce lo sta ordinando."

Claudia fotografa il biglietto, poi lo piega e lo rimette nella moka. Regola del gruppo, non detta: le cose di Daniele restano dove Daniele le ha messe.

**(🎨 Colore +1: la voce vera di Daniele vale più di cento lampadine.)**`,
    gold: 1,
    sets: { nota_daniele: true },
    choices: [
      { text: '📺 Al salotto. Con una ragione in più.', next: 'a5' },
    ],
  },

  s6: {
    location: 'appartamento',
    caption: 'Il bagno — il mobiletto',
    text: `Il bagno è grigio come il resto, ma il mobiletto sopra il lavandino ha lo sportello socchiuso. Dentro: dentifricio, rasoio, e una **boccetta di vetro scuro** con il contagocce, l'etichetta della farmacia, la ricetta piegata accanto.

Le gocce di Daniele. Quelle del dottore.

Attaccato all'anta, un foglietto a quadretti con la sua grafia: una colonna di date e spunte. *"Preso ✓. Preso ✓. Preso ✓."* Tre settimane di spunte, in fila, precise come i suoi ritiri del corriere. Poi si fermano. **Tre giorni fa.** Il giorno esatto in cui la chat è diventata muta.

> Emanuela: *(piano)* "Guardate le date. Le prendeva. Le ha prese SEMPRE, fino all'ultimo giorno. Non ha mollato lui — è che la casa se l'è preso, e da dentro un bozzolo il contagocce non lo raggiungi."

> Natalino: "Il dottore di Daniele sa il fatto suo, comunque. Gliel'ho sentito dire: 'con queste vedo più chiaro'. Testuale. E Daniele non fa complimenti a nessuno, figuriamoci ai dottori."

> Gaetano: "Vedere più chiaro." *(prende la boccetta, la solleva contro la luce: dentro, il liquido ha un riflesso che il grigio della stanza non riesce a toccare)* "In una casa che sbiadisce tutto, una cosa che fa VEDERE PIÙ CHIARO non è una medicina. È un'arma."

> Federico: "Allora si porta. E quando lo tiriamo fuori, gliele ridiamo con le scuse per l'invasione di domicilio."

Emanuela le sistema nella borsa, nella tasca imbottita, quella dei flaconi che non devono rompersi MAI.`,
    item: 'gocce_dottore',
    sets: { gocce_trovate: true },
    choices: [
      { text: '📺 Al salotto — la TV pulsa ancora', next: 'a5' },
    ],
  },

  a5: {
    location: 'salotto',
    caption: 'Il salotto — e la porta che non c\'è più',
    stinger: 'jumpscare',
    text: `Il salotto vi accoglie con la scena più normale del mondo, ed è questo a farla atroce.

Il divano di Daniele, con l'incavo del suo corpo ancora stampato nei cuscini. Lo toccate: **è caldo**. Caldo di qualcuno che si è alzato trenta secondi fa. La TV è accesa su una tempesta di static che pulsa — uno-due-tre-lampo — e sotto, sul mobiletto, la Switch è in pausa. Mario Kart. Schermata di gara congelata a metà curva.

> Federico: *(la voce che gli si incrina)* "Manca il joy-con sinistro. Il resto è tutto qui e manca il joy-con SINISTRO. Chi si porta via mezzo controller?"

> Natalino: "Uno che vuole finire la partita da un'altra parte."

> Claudia: "O una casa che colleziona pezzi di lui."

Emanuela apre bocca per rispondere—

—e il rumore che fate tutti insieme è il rumore di cinque persone che si voltano nello stesso istante, perché l'aria alle vostre spalle ha appena fatto qualcosa. Un movimento senza suono. Come una palpebra.

**La porta d'ingresso non c'è più.**

Non chiusa. Non sparita nel buio. NON C'È. Al suo posto, muro: intonaco liscio, continuo, dello stesso grigio stanco del resto, senza cornice, senza cardini, senza il segno che lì una porta sia MAI esistita. Lo zerbino di Federico è rimasto dentro, ai piedi del muro, con la sua scritta idiota rivolta verso il nulla.

*"NON SIETE I BENVENUTI, MA ENTRATE."*

Entrare, a quanto pare, era la parte facile.`,
    choices: [
      { text: '🧱 Al muro. Toccarlo, batterlo, capire.', next: 'a6' },
    ],
  },

  a6: {
    location: 'salotto',
    caption: 'Il muro nuovo — e il corridoio che non torna',
    text: `Le mani sul muro dove c'era la porta. È freddo, solido, VERO. Federico ci prende a pugni finché Emanuela non gli ferma i polsi; Natalino gratta l'intonaco con la chiave e ne cava una polverina grigia che, appena tocca terra, **striscia via da sola** verso il battiscopa.

> Natalino: "L'avete vista tutti, sì? Ditemi che l'avete vista tutti."

> Claudia: "Fotografata. Nella foto non c'è. C'è solo il pavimento. STA SCEGLIENDO cosa farsi fotografare, la stronza."

Gaetano, intanto, è rimasto immobile a fissare il corridoio. Quello da cui siete arrivati. Cucina a sinistra, salotto in fondo: otto metri, a dire tanto, in un bilocale.

> Gaetano: "Ragazzi. Il corridoio."

Vi voltate. Il corridoio **continua**. La porta della cucina è ancora lì, a sinistra — ma dopo, dove prima c'era il muro del bagno, adesso c'è altro corridoio. E poi altro. Prospettiva che si allunga nel buio, con le porte che si ripetono a intervalli regolari come i pali della luce in autostrada.

> Gaetano: *(già in ginocchio, che fruga nello zaino)* "Ho il metro a nastro. Non ridete: ho SEMPRE il metro a nastro. Misuriamo. Se lo spazio mente, voglio sapere di quanto."

> Emanuela: "Amore mio, sei l'unica persona al mondo che risponde all'orrore cosmico con la ferramenta."

> Gaetano: "L'orrore cosmico non ha mai conosciuto un ingegnere di satelliti incazzato."`,
    choices: [
      { text: '📐 Misurare il corridoio. Con metodo.', tag: 'Prova di Intelligenza — CD 11', check: { stat: 'INT', dc: 11, success: 'a6b', fail: 'a6c' } },
    ],
  },

  a6b: {
    location: 'salotto',
    caption: 'Trentaquattro metri',
    text: `Gaetano lavora come in sala pulita: punti di riferimento, doppia misurazione, Claudia che annota i numeri sul telefono.

Il metro corre lungo il corridoio. Cinque metri: fin qui, il bilocale è d'accordo. Dieci. Quindici. Il nastro giallo si srotola nel buio e il buio lo lascia fare, educato, quasi divertito.

**Trentaquattro metri.** Poi il metro finisce — non il corridoio.

> Gaetano: "Trentaquattro metri lineari. In un bilocale di sessantacinque metri quadri. In un palazzo largo QUINDICI." *(riavvolge il nastro con gesti lenti, da laboratorio)* "Quindi: o l'intero isolato è cavo, o..."

> Claudia: "O?"

> Gaetano: "O 'dentro' e 'fuori' hanno smesso di essere collegati. Siamo in uno spazio che non deve rendere conto alla topologia di niente. Il che, tra l'altro, spiega la sfocatura, il silenzio, il—"

> Federico: "Gaeta. GAETA. In italiano."

> Gaetano: "La casa è più grande dentro che fuori, e lo fa apposta."

> Natalino: "Ecco. Visto? Si poteva dire subito. Adesso ho paura in una lingua che capisco."

Ma sotto il sarcasmo, il gruppo si è raddrizzato. Perché Gaetano ha fatto la cosa che sa fare: ha preso il mostro e gli ha dato un NUMERO. E le cose con un numero addosso sembrano già un po' meno onnipotenti.

**(🎨 Colore +1: misurare l'impossibile è il primo modo di sconfiggerlo.)**`,
    gold: 1,
    sets: { misure_impossibili: true },
    choices: [
      { text: '🚶 Nel corridoio che non c\'era. In fila stretta.', next: 'a7' },
    ],
  },

  a6c: {
    location: 'salotto',
    caption: 'Il metro a nastro non torna indietro',
    text: `Gaetano srotola il metro nel corridoio con la sicurezza di chi l'ha fatto mille volte. Cinque metri. Dieci. Quindici, e il nastro giallo scompare nel buio come una lenza in acqua scura.

> Gaetano: "Venti... venticinque... ma quanto—"

Il metro **dà uno strattone**.

Non si incastra: TIRA. Come se all'altro capo qualcosa avesse abboccato. Gaetano, da ingegnere e da idiota — le due cose stasera coincidono — invece di mollare stringe, e il corridoio se lo carica in avanti di due metri buoni, con le suole che fischiano sul parquet.

> Gaetano: "IL MIO METRO NO! È UNO STANLEY PROFESSIONALE—"

> Emanuela: "MOLLA, DISGRAZIATO!"

Molla. Il metro schizza via nel buio a velocità da frustata, sbatacchiando contro le pareti, e viene **risucchiato dentro il muro** di fondo — che per un istante si increspa come acqua, lo inghiotte, e torna intonaco. Dal punto dell'impatto arriva, attutito, un rumore di masticazione. Breve. Soddisfatto.

Silenzio. Poi il muro **rutta**. Non c'è un'altra parola: è un rutto, sordo e grasso, e sputa fuori la clip metallica del nastro, che rotola ai piedi di Gaetano come un nocciolo.

> Natalino: "Il muro ha mangiato lo Stanley e ha fatto pure il maleducato."

> Gaetano: *(raccoglie la clip, la intasca, gelido)* "Trentaquattro metri. Li ho letti sul nastro prima che... ecco. TRENTAQUATTRO. In un bilocale. Ho perso il metro ma il dato è acquisito."

**(-2 PV a tutti: lo strattone, lo spavento, e un lutto di ferramenta.)**`,
    damage: 2,
    choices: [
      { text: '🚶 Nel corridoio. Lontani dalle pareti.', next: 'a7' },
    ],
  },

  a7: {
    location: 'corridoio',
    caption: 'Il corridoio che non c\'era — primo sangue',
    text: `Il corridoio vi inghiotte a passi piccoli. Le pareti sono quelle di casa di Daniele — stessa carta da parati, stessi battiscopa — ma ripetute, in loop, come una texture stirata da un computer pigro. Ogni tanto un quadro: e nei quadri, paesaggi che sarebbero belli se qualcuno non avesse scolato via tutto il colore.

L'aria si fa più fredda a ogni metro. E poi, davanti, nel buio: **un rumore di unghie sul parquet.**

> Natalino: *(si ferma di colpo)* "No."

> Emanuela: "Nata—"

> Natalino: "NO. Io quel rumore lo conosco. È IL rumore. Ditemi che è un termosifone. Mentitemi. Sono pronto a credervi con tutto il cuore."

Dal buio escono in due. **Topi.** Ma grossi come gatti, e SBAGLIATI: il pelo è grigio-cenere, uniforme, senza riflessi, e dove dovrebbero esserci gli occhi ci sono due bottoni opachi, come teste di spillo infilate nel feltro. Si muovono a scatti — fermi, avanti, fermi — col ritmo che ormai riconoscete.

Uno-due-tre-scatto. Uno-due-tre-scatto.

> Claudia: "Vanno a tempo con la TV. Vanno a tempo con TUTTO. È la casa che respira attraverso di loro."

> Federico: *(si sfila la cintura, se la avvolge sul pugno)* "Allora facciamole venire l'asma."

Il primo topo apre la bocca. Dentro non c'è lingua: c'è **altro pelo**, fitto, che si muove da solo. E carica.`,
    combat: { enemies: ['topo_grigio', 'topo_grigio'], victory: 'a8', defeat: 'a7_ko', loot: { gold: 2 } },
  },

  a7_ko: {
    location: 'corridoio',
    caption: 'A terra — ma non abbastanza',
    text: `Andate giù uno dopo l'altro — chi per i morsi, chi per la stanchezza improvvisa e innaturale che i topi si portano addosso come un odore.

E poi succede la cosa peggiore: **non vi finiscono.**

I topi vi camminano SOPRA. Zampette fredde sul petto, sulla faccia, senza fretta, senza fame — vi annusano, vi catalogano, e se ne vanno nel buio da dove sono venuti. Come operai a fine turno. Come se il lavoro, con voi, fosse già venuto bene così.

Restate a terra un tempo che nessuno misura. Il soffitto del corridoio, sopra di voi, è dello stesso grigio del resto, e per un momento — un momento solo, orribile — sdraiati lì vi sembra quasi COMODO.

> Emanuela: *(la prima a rialzarsi, sempre lei)* "In piedi. IN PIEDI, ho detto. Non lo vedete che cosa sta facendo?"

> Gaetano: "Non ci vuole morti." *(si tira su a fatica, un braccio graffiato)* "Ci vuole STANCHI. È un predatore che non ha bisogno di ucciderti: gli basta che tu ti sdrai."

> Natalino: "Allora sappiatelo: io mi rialzo per PURO dispetto."

> Federico: "È la motivazione più sana che abbia sentito stasera."

Vi rimettete in piedi. Il grigio, intorno, sembra quasi deluso.

**(PV ripristinati. 🎨 Colore -2: la casa vi ha assaggiati, e le è piaciuto.)**`,
    fullHeal: true,
    goldLoss: 2,
    choices: [
      { text: '⚔️ Ai topi. Stavolta si morde per primi.', next: 'RETRY_COMBAT' },
      { text: '🏃 Superarli di corsa mentre sono nel buio (non è vigliaccheria, è cardio)', gold: -1, next: 'a8' },
    ],
  },

  a8: {
    location: 'corridoio',
    caption: 'Cenere — e la borsa Kerastase',
    text: `L'ultimo topo cade, e quello che succede dopo è peggio del combattimento.

Non c'è sangue. I due corpi **si sbriciolano**: si afflosciano, si seccano, e franano su loro stessi in due mucchietti di cenere grigia, fine come borotalco. Niente ossa. Niente umido. Come se dentro non ci fosse mai stato un animale — solo grigio pressato in forma di paura.

> Claudia: "Niente sangue." *(non fa nemmeno la foto, e Claudia che non fa la foto è la misura esatta della cosa)* "Le cose vive sporcano, quando muoiono. Queste no. È PEGGIO, il no."

> Gaetano: "Non erano vive. Erano... in funzione."

Natalino, che per tutto lo scontro ha combattuto con gli occhi chiusi a momenti, si accende mezzo tronello con le mani che gli ballano.

> Natalino: "Ho preso a forbiciate un topo gigante. IO. Se me lo dicevano stamattina rollavo doppio."

Emanuela intanto ha aperto la borsa Kerastase sul pavimento, e la borsa — come sempre — contiene un piccolo pronto soccorso, un piccolo autogrill e un piccolo salone di bellezza.

> Emanuela: "Allora. Spray termoprotettore professionale: negli occhi fa MALISSIMO, parola di una che si è sbagliata una volta sola. E i taralli. UNO a testa, la crisi la certifico io, e questa È una crisi certificata."

> Federico: "Sposami."

> Emanuela: "Sei già il mio fidanzato, Federico."

> Federico: "E io ti dico di non accontentarti."

Davanti, il corridoio continua. Alle pareti, adesso, ci sono delle cornici. E dentro le cornici — foto.`,
    item: 'spray_kerastase',
    item2: 'taralli',
    choices: [
      { text: '🖼 Le foto. Guardare le foto.', next: 's1' },
    ],
  },

  /* ==================== SOGLIA — LA CASA SI PRESENTA ==================== */

  s1: {
    location: 'corridoio',
    caption: 'Le foto alle pareti',
    text: `Le conoscete, queste foto. Sono le VOSTRE.

Le vacanze del gruppo, incorniciate lungo il corridoio come in casa di una nonna: il weekend in montagna, il capodanno del divano rotto, la spiaggia di Gaeta con Emanuela che indica il mare come se l'avesse inventato lei, i racchettoni, la grigliata, Daniele che dorme su ogni divano di ogni casa in ogni epoca storica.

Solo che Daniele, in casa sua, queste foto non le ha mai appese. E mentre le guardate, **si stanno scolorendo**. Adesso. Sotto i vostri occhi: i rossi che mollano per primi, poi i blu, le facce che sbiadiscono come giornali al sole — velocissimo, un'estate di deterioramento ogni tre secondi.

> Federico: "Ehi. EHI. Quella è la nostra— sta cancellando la NOSTRA—"

> Gaetano: "Non cancellando. MANGIANDO. Guardate come va: prima il colore, poi i contorni. Si nutre in ordine."

Ma una resiste. La foto di Gaeta — il mare, il sole cattivo delle due, Emanuela che ride a bocca aperta e tutti gli altri mezzi bruciati e felici — sbiadisce PIÙ PIANO. I colori arretrano e poi tornano, arretrano e tornano, come una cosa che non si arrende.

> Emanuela: *(ci mette un dito sopra, piano)* "Quel giorno là nessuno voleva tornare a casa. Ve lo ricordate? NESSUNO. Manco Daniele, che odia la sabbia."

> Claudia: "Forse è questo che non riesce a digerire."

> Natalino: "Allora gliene faremo mangiare ancora, di giorni così. Fino a farle venire il vomito."`,
    sets: { foto_gaeta_vista: true },
    choices: [
      { text: '📺 Un rumore dal salotto: la TV ha cambiato voce', next: 's2' },
    ],
  },

  s2: {
    location: 'salotto',
    caption: 'La TV si accende — Daniele, quello vero',
    text: `Rientrate nel salotto e la TV **vi sta aspettando**. Lo static si piega, si organizza, e diventa un'immagine: sgranata, a scatti, con l'audio che gracchia come una radio sotto un ponte.

**Daniele.** In primo piano, da qualche parte di buio. Stanco — le occhiaie sono un pugno — ma gli occhi sono i SUOI: accesi, lucidi, incazzati nel modo giusto.

> Daniele: "—unzionare, dai, funziona... Ok. Non so quanto tempo ho, questa frequenza me la lascia usare finché non se ne accorge. Tre regole, memorizzatele. UNO: non firmate niente. NIENTE. Qualsiasi cosa vi metta davanti, per quanto ragionevole sembri: la sua penna è peggio dei suoi denti. DUE: non sedetevi sul divano. Lo so che è comodo. È comodo DI LAVORO. TRE—" *(si avvicina alla telecamera, e per un attimo lo schermo si riempie dei suoi occhi)* "—qualsiasi cosa abbia la mia faccia: NON è la mia faccia. Insultatela pure. Anzi, ve lo chiedo per favore."

Dietro di lui, un rumore metallico. Daniele si volta un istante, poi torna.

> Daniele: "Devo andare. Io sono nei fusibili, per così dire — sto sabotando quello che posso da tre giorni: i suoi tempi, le sue luci, le sue porte. Se qualcosa qua dentro s'inceppa al momento giusto, sono io. Non è fortuna. Sono IO. Ah, e Federico—"

Lo schermo muore. L'ultima parola arriva dal buio, solo audio, con dentro un sorriso:

> Daniele: "—stai perdendo a Mario Kart contro una casa. Riflettici."

**(🎨 Colore +1: è vivo. È LUI. E sta combattendo.)**`,
    gold: 1,
    sets: { daniele_vivo: true },
    choices: [
      { text: '🚶 E adesso troviamolo. Da dove si—', next: 's3' },
    ],
  },

  s3: {
    location: 'salotto',
    npc: ['eleinad'],
    caption: 'Eleinad — il padrone di casa',
    text: `Non lo sentite arrivare, perché non arriva. **C'è**, in mezzo al salotto, come una macchia che c'era da sempre e solo adesso mettete a fuoco.

Ha la faccia di Daniele. Ed è questo il punto: è la faccia di Daniele portata da qualcosa che l'ha comprata di seconda mano — un millimetro fuori asse, il sorriso che parte prima degli occhi, le palpebre che battono a turno. Indossa un completo grigio perla, elegantissimo, e tiene sottobraccio una cartellina di pelle umana. Speriamo ecopelle. Non sembra ecopelle.

> Eleinad: "Ospiti! Finalmente, cazzo — tre giorni che apparecchia, questa casa, e non veniva mai NESSUNO." *(la voce è quella di Daniele con dentro un'eco che arriva mezzo secondo dopo)* "Prego, prego. Mettetevi comodi. Il divano è nuovo di zecca: lo usa solo un proprietario, la domenica e SEMPRE."

> Federico: "Tu non sei mio fratello."

> Eleinad: "Ovvio che no, tesoro: sono la versione migliorata. Stessi contenuti, zero ansie, e finalmente un po' di stile." *(apre la cartellina: dentro, un documento fitto e una penna dall'aria sbagliata)* "Ma parliamo di voi. **Contratto di Soggiorno**: vitto, alloggio, TV sempre accesa, nessuna scadenza, nessuna sveglia, nessuna FATICA, per sempre. Tutto compreso. Firma una, vale cinque. Da quando siete entrati, tecnicamente, siete già morosi — ma sono un padrone di casa di manica larga."

Sorride. Il sorriso arriva agli occhi con un secondo di ritardo, come un servo chiamato col campanello.`,
    choices: [
      { text: '✍️ Firmare. Sembra ragionevole. (SEMBRA.)', next: 's3b' },
      { text: '🎩 Rifiutare con stile: gelo, classe, e nessuna paura visibile', tag: 'Prova di Carisma — CD 12', check: { stat: 'CAR', dc: 12, success: 's3c', fail: 's3d' } },
      { text: '🤬 Lasciar parlare Federico. Ha trent\'anni di allenamento con quella faccia.', next: 's3e' },
    ],
  },

  s3b: {
    location: 'salotto',
    caption: 'La penna — e il sabotaggio',
    text: `Il contratto è scritto in un corsivo che si muove se lo guardi di sbieco. Le clausole sembrano ragionevoli — è questo il loro lavoro. Una mano del gruppo si allunga verso la penna.

La penna è **calda**.

La penna ha **un'unghia**.

Non è una penna: è un dito. Lungo, pallido, con una nocca a metà fusto e la punta che suda un inchiostro denso e scuro che non è inchiostro da nessuna parte del mondo. E nel momento esatto in cui ve ne accorgete, il dito **si piega** e vi afferra lui — stringe come una tagliola, tira la mano verso la riga della firma—

—e la TV **esplode**.

Non si rompe: DETONA. Lampo bianco, vetro ovunque, una frustata di scintille che attraversa il salotto — e il dito-penna molla la presa con uno strillo sottile, da cosa scottata. Nell'ultimo sfrigolio dello schermo, per un quarto di secondo, passa un frame solo: **Daniele che fa l'occhiolino.**

> Eleinad: *(per la prima volta, la maschera si increspa)* "QUEL... piccolo... abusivo dei miei coglioni. TRE GIORNI che mi fulmina gli elettrodomestici. SO CHE MI SENTI, DANIELE. STO PERDENDO LA PAZIENZA."

Dalle pareti, debolissimo, un ronzio elettrico. Se il ronzio fosse una frase, direbbe: *provaci*.

> Claudia: *(sottovoce, medicando la mano graffiata)* "'Io sono nei fusibili.' Non stava esagerando."

**(-3 PV: schegge, scintille, e il morso dell'inchiostro. Chi ha allungato la mano si sente il grigio nelle vene.)**`,
    damage: 3,
    poisonRoller: true,
    sets: { daniele_sabota: true },
    choices: [
      { text: '🗣 Eleinad si ricompone. E cambia strategia.', next: 's4' },
    ],
  },

  s3c: {
    location: 'salotto',
    caption: 'Il rifiuto con stile',
    text: `Il gruppo si scambia un'occhiata sola — di quelle che tra amici veri valgono una riunione — e poi il rifiuto arriva, compatto, freddo, ELEGANTE.

> Emanuela: *(raddrizza la borsa sulla spalla come una corazza)* "Guardi, l'offerta è interessante, ma noi abbiamo già un programma. Recuperiamo il nostro amico, le lasciamo la casa in ordine e non le facciamo perdere altro tempo. Lei ha l'aria di uno... impegnato."

> Claudia: "E il contratto lo leggerei anche, ma non firmo mai niente di cui non posso fare lo screenshot."

> Gaetano: "Inoltre le clausole vessatorie vanno approvate per iscritto con doppia firma, articolo 1341 del codice civile. La sua vale la metà del necessario."

Silenzio. Natalino si accende il tronello con una calma da cerimonia del tè, guardando Eleinad negli occhi.

> Natalino: "Non ci sediamo, grazie. Ci fa gonfiare i capelli, il grigio."

E il sorriso di Eleinad **slitta**. Un millimetro, non di più — ma su una faccia già un millimetro fuori asse, un millimetro in più è una frana. Per un istante gli angoli della bocca restano su mentre TUTTO il resto scende, e quello che ne esce non è un'espressione: è un errore di caricamento.

> Eleinad: *(si ricompone, ma la voce ha perso l'eco per una sillaba)* "...Che gruppo DELIZIOSO. Educati. Compatti. Pieni di colore." *(e la parola "colore" gliela sentite masticare come una fame)* "Faremo grandi cose insieme."

**(🎨 Colore +2: gli avete detto no, e gliel'avete detto BENE.)**`,
    gold: 2,
    sets: { rifiuto_stile: true },
    choices: [
      { text: '🗣 Ma lui non ha finito: cambia strategia.', next: 's4' },
    ],
  },

  s3d: {
    location: 'salotto',
    caption: 'Il rifiuto balbettato',
    stinger: 'risata',
    text: `Il rifiuto parte bene e muore in gola.

> Emanuela: "Guardi, noi... cioè, l'offerta è anche... no, nel senso, NO, però—"

> Gaetano: "Quello che lei propone è contrattualmente... la firma... c'è un articolo che—" *(e per la prima volta nella storia documentata, a Gaetano non viene il numero)*

> Natalino: "Noi non... il divano... noi abbiamo il pullman."

IL PULLMAN. Nessuno ha un pullman. Nessuno ha mai avuto un pullman. La parola resta lì, in mezzo al salotto, nuda.

Eleinad vi guarda. Uno per uno, con calma, come si guarda una vetrina. E poi **ride**.

Non è la risata di Daniele. È una risata che ne contiene TANTE — una risata a strati, come se dietro quella bocca ridesse una platea intera, tutti quelli che hanno balbettato un no davanti a lui negli ultimi cent'anni. Dura troppo. Vi entra nello sterno e ci si siede.

> Eleinad: "Il... il PULLMAN—" *(si asciuga un occhio che non lacrima)* "Oh, siete squisiti. No, davvero: di solito i gruppi mi annoiano entro un'ora, voi invece avete questo... POTENZIALE COMICO. Lo apprezzo. Lo apprezzeremo insieme. A lungo."

La risata vi ha lasciato addosso qualcosa: una stanchezza fredda nelle braccia, come dopo un trasloco. Il grigio, sul soffitto, sembra un centimetro più vicino.

> Federico: *(a denti stretti)* "Ok. Ho sentito abbastanza. Adesso parlo IO con questa fotocopia venuta male."

**(-2 PV: la risata pesa, ed è progettata per pesare.)**`,
    damage: 2,
    choices: [
      { text: '🗣 Eleinad alza le mani, teatrale: "Facciamo sul serio."', next: 's4' },
    ],
  },

  s3e: {
    location: 'salotto',
    caption: 'L\'insulto di Federico — quaranta secondi di capolavoro',
    text: `Federico fa un passo avanti. Si sfila lo svapo di tasca, lo ripone — segnale di massima allerta — e comincia.

Non lo si può trascrivere tutto, l'insulto di Federico. Dura **quaranta secondi netti** e non ripete mai lo stesso concetto: parte dal completo grigio ("un vestito da RAPPRESENTANTE DI CAMOMILLE"), passa per la postura, la voce ("hai l'eco, ti si sente il RITARDO, sei mio fratello BUFFERIZZATO"), demolisce il contratto, la cartellina, la penna, e chiude — in crescendo, senza respirare — sulla questione centrale:

> Federico: "—e soprattutto hai preso in prestito la faccia dell'unica persona al mondo che litiga con me ad ARMI PARI da trent'anni, e la porti COSÌ, floscia, come un pigiama rubato. Lui quella faccia la usa per vincere le discussioni. Tu la usi per fare il piazzista. Non sei mio fratello: sei la BROCHURE di mio fratello, stampata male, coi margini sbagliati. E si vede, coglione. Si vede DA LONTANO."

Silenzio.

Eleinad apre la bocca. La richiude. La riapre. E per la prima volta in tre giorni — si sente, si sente dalla casa intera che trattiene il fiato — **non ha la battuta pronta**.

> Eleinad: "Tu." *(e la voce adesso è diversa: l'eco è sparita, e sotto c'è qualcosa di vecchio e di attento)* "Tu sei il GEMELLO."

> Federico: "Piacere di conoscermi."

> Eleinad: "No." *(piano, quasi tra sé)* "No, il piacere non c'entra niente."

E qualcosa, nella sua voce, è cambiato per sempre.

**(🎨 Colore +1: quaranta secondi di arte.)**`,
    gold: 1,
    sets: { federico_insulto: true, eleinad_teme_gemelli: true },
    choices: [
      { text: '🗣 Eleinad si scrolla, si ricompone, e cambia arma.', next: 's4' },
    ],
  },

  s4: {
    location: 'salotto',
    npc: ['eleinad'],
    caption: 'Il primo Duello di Parole',
    text: `Eleinad fa schioccare le dita, e la luce del salotto cambia: calda, morbida, da spot pubblicitario. Perfino la sua voce si scalda. Ecco l'arma vera.

**🗣 DUELLO DI PAROLE**

> Eleinad: "Lasciamo perdere i contratti, avete ragione: che volgarità, la carta. Parliamo da persone intelligenti." *(passeggia, le mani dietro la schiena, la faccia di Daniele accesa del suo sorriso migliore)* "Lo sapete quante persone, in questo esatto momento, sono sedute su un divano? MILIONI. Milioni di persone normali, sane, intelligenti, che stasera hanno scelto la cosa che state rifiutando voi. Sono tutti scemi, loro? Tutti deboli? O forse — forse — hanno capito una cosa che voi cinque, sudati e graffiati in un corridoio, non avete ancora capito?" *(si ferma, apre le braccia)* "E non serve guardare lontano. Guardatevi. Guardati, Natalino: le mani ti tremano ancora. Claudia, quante ore che non ti siedi? Gaetano, quella spalla. Siete STANCHI. Tutti quanti. E quando tutti quelli intorno a te fanno la stessa cosa e sentono la stessa cosa... di solito è perché è la cosa GIUSTA, no? Il mondo intero si è già seduto. Sta solo aspettando che vi mettiate comodi anche voi."

La stanchezza, mentre parla, sembra vera. È questo il problema: sembra VOSTRA.

*(vi torna in mente Daniele, dalla TV: "non ascoltate la mia faccia" — e Daniele, quello vero, dei ragionamenti degli ALTRI non si è mai fidato per principio: "il conteggio delle teste", lo chiamava, "non è un argomento")*

Dov'è il trucco?`,
    choices: [
      { text: '⚖️ RIPROVA SOCIALE: "Milioni di seduti non rendono giusta la sedia."', next: 's4b' },
      { text: '🎓 AUTORITÀ: "E tu chi saresti per dircelo?"', once: true, next: 's4c' },
      { text: '⏳ SCARSITÀ: "Ci stai mettendo fretta per farci firmare."', once: true, next: 's4c' },
    ],
  },

  s4b: {
    location: 'salotto',
    caption: 'L\'incantesimo si spezza',
    text: `> Claudia: "Riprova sociale."

Lo dice così, secca, col tono di quando becca un profilo falso al primo colpo.

> Claudia: "'Milioni di persone lo fanno.' È il trucco più vecchio del mio MESTIERE, tesoro. Lo uso io per vendere gli integratori. Il numero dei seduti non dice niente sulla sedia: dice solo che sai contare."

> Gaetano: "Conteggio delle teste. Daniele lo chiama così. 'Non è un argomento.'"

> Federico: "E infatti guardalo: non sta argomentando. Sta facendo il MARKETING."

Ed Eleinad **si inceppa**.

Non è un modo di dire: si INCEPPA, fisicamente, a metà di un gesto — la mano aperta a mezz'aria, il sorriso caricato al sessanta per cento — e per due secondi interi resta lì, fermo, mentre dentro la sua faccia qualcosa ronza a vuoto come un motorino d'avviamento. Quando riparte, riparte da un punto SBAGLIATO della frase, come un disco spostato di solco.

> Eleinad: "—comodi anche v... voi. Voi. VOI." *(si passa una mano sulla faccia, e la faccia, sotto la mano, per un istante non oppone resistenza)* "Interessante. Nessuno mi nomina i trucchi da... da quanto? Da LUI."

E intorno a voi succede una cosa che vedrete per sempre: **il grigio arretra**. Un metro buono, visibile, misurabile — il pavimento riprende il suo miele, la libreria il suo rosso, come una marea che molla la presa sulla sabbia.

> Eleinad: *(già dentro il muro fino alla cintola, se ne va come si scende in acqua)* "Godetevela, la tinta fresca. Tanto avete già perso: avete solo il fiato per non accorgervene. Ci vediamo A CASA. Cioè ovunque."

**(🎨 Colore +2: la prima parola spezzata. La prima crepa in lui.)**`,
    gold: 2,
    sets: { duello_tutorial_vinto: true },
    choices: [
      { text: '👀 Il salotto, alle sue spalle, comincia a MUOVERSI', next: 's5' },
    ],
  },

  s4c: {
    location: 'salotto',
    caption: 'Il contraccolpo',
    text: `Lo dite — e lo sentite subito, dal silenzio, che avete sbagliato trucco.

> Eleinad: *(un sospiro paziente, da insegnante di sostegno)* "No, no, no. Vedete? Vi arrampicate. Io non vi ho messo FRETTA — avete tutto il tempo del mondo, è letteralmente nel contratto. E non vi ho chiesto di fidarvi di ME." *(si avvicina di un passo, e la luce calda si avvicina con lui)* "Vi ho solo fatto notare quello che sapete già: che siete stanchi, e che tutti gli altri l'hanno già ammesso. Negare l'evidenza È la stanchezza, amori miei. È il suo sintomo più carino."

E la frase **affonda**. Perché è costruita per affondare: entra dove siete stanchi davvero — le gambe, la spalla di Gaetano, le mani di Natalino — e lì si allarga come acqua fredda nelle ossa. Per un secondo, un secondo solo, il divano alle sue spalle vi sembra la cosa più ragionevole della stanza. È il secondo più spaventoso della serata.

> Emanuela: *(si morde la lingua, forte, e il dolore la sveglia)* "No. NO. Ragazzi, ricordate la TV: non ascoltate la faccia. Il trucco c'è, l'abbiamo solo sbagliato di nome. Pensate a COME l'ha costruita, la frase. Cosa c'era dentro. CHI c'era dentro."

Milioni di persone. I vostri stessi amici, guardali. Tutti quanti. Tutti.

> Eleinad: "Con calma, eh. Io non ho fretta." *(sorride)* "Io ho VOI."

**(-3 PV: la stanchezza vi entra nelle ossa come acqua fredda.)**`,
    damage: 3,
    choices: [
      { text: '🗣 Riprovare. Il trucco ha un nome, e lo troverete.', next: 's4' },
    ],
  },

  s5: {
    location: 'salotto',
    caption: 'La casa si apre',
    text: `Eleinad è appena sparito nel muro quando il salotto **respira**.

Prima il soffitto: sale. Non crolla, non si trasforma — SALE, in silenzio, come un sipario, e si porta dietro le pareti, che si allontanano l'una dall'altra con un lungo scricchiolio di legno stirato. Il lampadario di Daniele — tre lampadine IKEA — rimpicciolisce su, su, su, finché non è una costellazione. Il bilocale di sessantacinque metri quadri diventa una **cattedrale**: navate di carta da parati, colonne di battiscopa impilati, e il buio in alto al posto del cielo.

> Natalino: "Il monolocale di mio cugino faceva schifo, ma almeno restava delle stesse dimensioni."

> Gaetano: *(a testa in su, e la clip del metro stretta in tasca come un amuleto)* "Adesso capisco perché trentaquattro metri le sembravano pochi."

E poi la casa vi mostra **le sue tre gole**.

A sinistra, una porta fatta di **libri**: costole impilate a formare l'arco, e da dietro un fruscio di pagine che sussurrano — troppe voci, tutte basse, come una biblioteca che parla di voi.

Al centro, un **corridoio di porte**: decine, tutte diverse, tutte scolorite — porte di camerette, porte di uffici, un portellone d'aereo, una porta con l'oblò — che si perdono nel buio a coppie, come denti.

A destra, la porta della **cucina**: socchiusa, e da dentro esce un freddo da cella frigorifera e una luce bianca, ferma, senza pulsazione. L'unica luce di tutta la casa che non va a tempo con niente.

Da qualche parte là dentro c'è Daniele, nei fusibili, che aspetta.

La casa non finisce. Ma nemmeno voi.`,
    sets: { casa_aperta: true },
    choices: [
      { text: '⛪ Avanzare nella cattedrale — da dove si comincia?', next: 'h1' },
    ],
  },

};

/* ============================ NOTE DI BLOCCO ============================

   FLAG IMPOSTATI (e consumatori previsti):
   - finestra_vista      → a0b  → IMPRESA ("L'occhio di Claudia": notare il respiro della casa da fuori)
   - voce_sbagliata      → a2b  → IMPRESA ("Fede è un nome da bagnino": smascherare la voce falsa)
   - nota_daniele        → a4b  → DIARIO (la nota nella moka: "non è una crisi, è un inquilino abusivo")
   - gocce_trovate       → s6   → DIARIO (le Gocce del Dottore: prese ogni giorno fino al rapimento — arma di visione)
   - misure_impossibili  → a6b  → DIARIO (34 metri in un bilocale: lo spazio non rende conto a niente)
   - foto_gaeta_vista    → s1   → DIARIO (la foto di Gaeta resiste al Grigiore: i giorni felici sono indigesti)
   - daniele_vivo        → s2   → DIARIO (il video: le tre regole + "sono nei fusibili")
   - daniele_sabota      → s3b  → DIARIO (la TV esplosa sulla firma: il sabotaggio è reale e mirato)
   - rifiuto_stile       → s3c  → IMPRESE / scelte future (Eleinad ricorda chi gli ha detto no con classe)
   - federico_insulto    → s3e  → IMPRESE / scelte future (i 40 secondi: Eleinad senza battuta pronta)
   - eleinad_teme_gemelli→ s3e  → scelte future (pista U / finale e_gemelli: il demone teme i due che smettono di litigare)
   - duello_tutorial_vinto → s4b → IMPRESE / scelte future (primo trucco nominato: Riprova Sociale)
   - casa_aperta         → s5   → snodo strutturale: apre l'hub h1 (consumato dal blocco HUB)

   ITEM DATI:
   - chiavi_scorta (a1) · lattina_zero x2 (a4) · gocce_dottore (s6) ·
     spray_kerastase + taralli (a8)

   ORO/COLORE: +1 a0b, +1 a4b, +1 a6b, +2 loot a7, +1 s2, +2 s3c, +1 s3e,
   +2 s4b · perdite: -2 a7_ko (goldLoss), -1 scelta di fuga in a7_ko

   STINGER USATI: jumpscare (a5) · risata (s3d)

   MORTI POSSIBILI: nessuna (blocco tutorial — sconfitta a7_ko non letale per design)

   USCITE FUORI DAL BLOCCO: solo h1 (da s5)
   ======================================================================== */

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

/* ============ BLOCCO C — IL CORRIDOIO DELLE PORTE SBAGLIATE (u*) ============
   Pista non esclusiva dall'hub h1. Porte su ricordi corrotti del gruppo.
   Dà: le due metà della FOTO DEI GEMELLI, il SEGRETO 2 (segreto_gemelli),
   il joy-con sinistro, una MORTE VERA possibile (u6_morte), un Cuore di Colore.
   Uscite ammesse: SOLO h1.                                                  */

const SCENE_C = {

  /* ==================== u1 — IL CORRIDOIO ==================== */

  u1: {
    location: 'porte',
    caption: 'Il Corridoio delle Porte Sbagliate',
    text: `Le porte non finiscono. Le contate fino a quaranta, poi Claudia smette perché contarle le fa venire il mal di mare: il corridoio si allunga MENTRE lo guardate, come una gomma tirata da qualcuno che non vedete.

Ogni porta è di un colore sbagliato. Non brutto: SBAGLIATO — il verde di una cosa che dovrebbe essere azzurra, il rosa di una cosa che dovrebbe essere carne. Alcune hanno targhette d'ottone, scritte a mano con una grafia che conoscete tutti perché è quella di Daniele quando compila i moduli: **"1994"**. **"GAETA"**. **"IMBARCO"**. E una, in fondo ma mai abbastanza in fondo, con la vernice nera colata come sangue vecchio: **"NON APRIRE"**.

> Gaetano: "Sono i nostri ricordi. Schedati. Questa casa di merda ci ha ARCHIVIATI."

> Natalino: "E ha pure sbagliato i colori. Da professionista ve lo dico: chi sbaglia i colori apposta, lo fa per farti male."

Da dietro la porta "1994" arrivano due voci di bambini che litigano. Da "GAETA", un silenzio che sa di cenere. Da "IMBARCO", il ding-dong di un annuncio di volo, in loop. Da "NON APRIRE" non arriva niente, ed è la cosa peggiore di tutte.

**(ATTENZIONE: la porta "NON APRIRE" non scherza. Là dentro si può morire DAVVERO — morte vera, di quelle da cui si torna solo come Spirito. Il gioco ve lo dice una volta sola: questa.)**

> Federico: "Ok. Chi vota per la porta che NON dice 'non aprire'?"`,
    choices: [
      { text: '🚪 La porta "1994" — le voci dei bambini', next: 'u2' },
      { text: '🏖 La porta "GAETA" — il silenzio di cenere', next: 'u4' },
      { text: '✈️ La porta "IMBARCO" — l\'annuncio in loop', next: 'u5' },
      { text: '⚫ La porta "NON APRIRE" — sapendo che qui si muore davvero', next: 'u6' },
      { text: '👻 La porta senza targhetta, quella che i vivi non vedono', once: true, requires: { spirit: true }, next: 'u9' },
      { text: '🔙 Chiudere col corridoio e tornare al Salotto', once: true, next: 'u8' },
    ],
  },

  /* ==================== 1994 — LA CAMERETTA DEI GEMELLI ==================== */

  u2: {
    location: 'cameretta',
    caption: '1994 — La cameretta dei gemelli',
    text: `Letti a castello. Poster di calciatori coi colori sbiaditi nel modo sbagliato: le maglie grigie, i prati grigi, solo i palloni ancora accesi come tizzoni. E per terra, da parete a parete, una striscia di nastro adesivo marrone che divide la stanza ESATTAMENTE a metà.

> Federico: *(fermo sulla soglia, la voce che non è la sua solita)* "Il nastro l'ho messo io. Avevo otto anni. Daniele aveva messo un piede di qua e..."

Non finisce, perché la stanza finisce per lui. Le voci partono dal nulla, due bambini, la stessa identica voce sdoppiata:

*"—è MIO, l'ha detto mamma—" "—non è vero, l'hai rotto TU—" "—ridammelo—" "—ti odio—" "—ti odio PRIMA io—"*

E poi ricomincia. Identica. E poi ancora. Solo che al terzo giro le voci sono un po' più lente, un po' più fonde, come un nastro masticato: la lite è FOSSILE, incastonata nella stanza da trent'anni, e qualcosa la sta consumando come una caramella.

Sul cuscino del letto di sotto c'è mezza fotografia, strappata a metà con rabbia: un bambino che ride, maglietta rossa — l'unica cosa ROSSA della stanza. Federico bambino. L'altra metà non c'è.

> Emanuela: "Amore, respira. È una stanza. È solo una stanza."

> Federico: "No. È il posto dove abbiamo cominciato a litigare. E qualcuno l'ha tenuto in FRIGO."

**(Raccogliete la metà della foto: scotta come una guancia dopo uno schiaffo.)**`,
    item: 'foto_meta_federico',
    choices: [
      { text: '👂 Ascoltare il loop fino in fondo: cosa lo fa girare?', tag: 'Prova di Saggezza — CD 12', check: { stat: 'SAG', dc: 12, success: 'u2b', fail: 'u3' } },
    ],
  },

  u2b: {
    location: 'cameretta',
    caption: '1994 — Il loop che qualcuno mangia',
    text: `Chi di voi ascolta, ascolta DAVVERO — e al quinto giro lo sente: sotto le voci dei bambini c'è un altro suono. Umido. Ritmico. Un suono di bocca.

La stanza non sta RICORDANDO la lite. La sta SERVENDO. La riproduce in loop come si gira lo spiedo, e a ogni giro qualcosa — sotto il pavimento, dentro i muri, ovunque — ne succhia via un po'. Trent'anni di "ti odio" detti da due bambini che non lo pensavano: per la cosa che abita questa casa è un giacimento. Una miniera che si rinnova ogni volta che Federico e Daniele, da grandi, ricominciano.

> Gaetano: "Ecco perché la lite non è mai finita. Non GLI CONVIENE che finisca. La coltiva."

> Federico: *(bianco)* "Trent'anni. Ci ha munto per trent'anni, a me e a mio fratello, e noi pensavamo di litigare per i soldi."

> Claudia: "Allora fare pace non è fare pace. È chiudergli il rubinetto."

Nessuno lo dice, ma lo pensate tutti: due gemelli che smettono di litigare, per una cosa che si nutre di liti, non sono un pasto. Sono ILLEGGIBILI.

E poi Natalino, che si era chinato a guardare sotto il letto per puro istinto da mamma, tira fuori una cosa che non c'entra NIENTE col 1994: un joy-con. Sinistro. Azzurro. Con l'adesivo di un fungo mezzo staccato.

> Natalino: "Questo è di Daniele. Di ADESSO. Che cazzo ci fa nel 1994?"

> Emanuela: "La casa colleziona. Mette le cose care nelle celle care."

**(🎨 Colore +2: avete capito il gioco del padrone di casa. E il joy-con sinistro è vostro: a qualcuno servirà una mano per tornare a giocare.)**`,
    gold: 2,
    sets: { segreto_gemelli: true },
    item: 'joycon_sinistro',
    choices: [
      { text: '🚪 Fuori di qui, prima che il pasto si accorga di voi', next: 'u3' },
    ],
  },

  u3: {
    location: 'cameretta',
    caption: '1994 — Il Gemello Sbagliato',
    stinger: 'jumpscare',
    text: `L'anta dell'armadio si apre da sola, piano, con la cortesia orrenda delle cose educate.

Dentro non ci sono vestiti. C'è un bambino di trent'anni. Alto come Federico, seduto come Daniele, e la faccia — la faccia è TUTTE E DUE. Non a metà: INSIEME, sovrapposte, due nasi che condividono le narici, quattro occhi in due orbite, una bocca che quando sorride si strappa agli angoli perché sta sorridendo in due modi diversi contemporaneamente. La carne dove le due facce non combaciano è cucita con nastro adesivo marrone. Quello del pavimento.

> Il Gemello Sbagliato: *(con la voce di Federico)* "Tu non hai MAI creduto in me." *(con la voce di Daniele)* "Tu ti sei venduto." *(con tutte e due)* "Mamma voleva più bene a—"

> Federico: "CHIUDI QUELLA BOCCA."

> Il Gemello Sbagliato: "Quale delle due?"

E parte. L'archivio completo: le frasi peggiori di trent'anni di liti, in ordine cronologico, con la pronuncia ORIGINALE — quelle dette per ferire, quelle dette da ubriachi, quella del funerale della nonna che nessuno dei due ha mai perdonato a se stesso. Le sa TUTTE. Le ha mangiate tutte.

> Emanuela: *(sfilando lo spray dalla borsa)* "Federico. Non è tuo fratello. È il rutto di chi se l'è mangiato."

**(Il Gemello Sbagliato striscia fuori dall'armadio sulle mani. Troppe mani.)**`,
    combat: { enemies: ['gemello_sbagliato'], victory: 'u3b', defeat: 'u_ko' },
    choices: [],
  },

  u3b: {
    location: 'cameretta',
    caption: '1994 — Due metà',
    text: `Il Gemello Sbagliato cade in ginocchio e si SFALDA lungo il nastro adesivo, come un pacco aperto male: due sagome di bambino, una per lato, grigie e tremanti nella luce della cameretta.

Non urlano. Non attaccano. Si guardano.

E poi — piano, con la lentezza delle cose che non hanno mai avuto il permesso di succedere — una delle due tende la mano attraverso la linea del nastro. L'altra la guarda. La prende.

Restano così un secondo intero, due bambini grigi mano nella mano sopra il confine che li ha divisi per trent'anni. Poi si dissolvono, insieme, nello stesso istante, come se finalmente qualcuno avesse spento la registrazione.

Il loop delle voci si ferma. Il silenzio della cameretta, per la prima volta dal 1994, è un silenzio NORMALE.

> Federico: *(seduto sul letto di sotto, la metà della foto in mano)* "Quando usciamo di qui gli telefono. A Daniele. Prima ancora di uscire dal portone, col telefono di qualcuno di voi, e gli dico..." *(si ferma)* "Gli dico una cosa. Fatti miei."

> Natalino: "Piangi?"

> Federico: "È la polvere del 1994, coglione."

> Natalino: "Certo. Annata terribile, per la polvere."

**(🎨 Colore +2: qualcosa che era rotto da trent'anni ha smesso di fare rumore.)**`,
    gold: 2,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
    ],
  },

  /* ==================== GAETA — LA SPIAGGIA GRIGIA ==================== */

  u4: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — La spiaggia di cenere',
    text: `La porta si apre su un cielo. Ci mettete un secondo a capire che il corridoio è finito e siete SU UNA SPIAGGIA — la vostra. Serapo. La riconoscete dalla curva della baia, dalla montagna spaccata, dal punto esatto dove piantate l'ombrellone da dieci anni.

Solo che la sabbia è cenere. Fine, tiepida, che si alza a ogni passo e sa di posacenere pieno. E il mare — il mare è FERMO. Non calmo: fermo. Una lastra di vetro sporco fino all'orizzonte, senza una ruga, senza un riflesso. Un mare a cui hanno staccato la spina.

> Emanuela: *(un filo di voce)* "Questo è il mio mare. Cosa gli avete fatto. COSA GLI AVETE FATTO, PEZZI DI MERDA."

In riva, piantati dritti nella cenere come due lapidi, i racchettoni. QUELLI: i pro, quelli di Claudia e Gaetano, i manici consumati nei punti giusti. E sotto l'ombrellone — il vostro ombrellone, grigio come tutto — c'è un uomo. Polo salmone diventata color topo, occhiali a specchio che non specchiano niente. Sta parlando. Capite subito, dal ritmo, che sta parlando DA SEMPRE.

> Il Monologante: "—e quindi io a mio cugino gliel'ho detto, perché io sono uno diretto, io le cose le dico, poi la gente si offende ma il problema è loro, comunque il crossfit ti cambia la vita, te lo dico io, tu quanto alzi? No perché io—"

> Natalino: "Oddio. Ce l'ha anche lei una spiaggia così, Emanuela?"

> Emanuela: *(già rimboccandosi le maniche)* "Questa È la mia. E quello lo conosco. Non LUI: la SPECIE."`,
    choices: [
      { text: '🗣 Prova di gruppo: Emanuela dirige, voi eseguite il protocollo anti-vibe-killer', tag: 'Prova di Carisma (di gruppo) — CD 13', check: { stat: 'CAR', dc: 13, success: 'u4b', fail: 'u4c' } },
      { text: '⚔️ Al diavolo il protocollo: farlo tacere con le maniere spicce', next: 'u4_fight' },
    ],
  },

  u4_fight: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — Le maniere spicce',
    text: `Il Monologante vi vede arrivare in formazione e fa la cosa più terrificante che potesse fare: SI ALZA per venirvi incontro, a braccia aperte, senza smettere di parlare.

> Il Monologante: "—oh, finalmente gente NUOVA, no perché quelli di prima a un certo punto non rispondevano più, secondo me maleducati, comunque ve lo stavo dicendo, il segreto è la costanza, io per esempo—"

Da vicino è peggio. La bocca non si chiude MAI, nemmeno tra una parola e l'altra: le labbra si sono consumate agli angoli come una cerniera usata troppo, e dietro i denti si vede che il buio continua, giù, giù, un pozzo con la voce. Non respira tra le frasi. Non gli serve. Il fiato lo prende DA VOI: lo sentite, un tiraggio sottile alle tempie, la voglia di rispondere "ah" e "eh già" che vi cola via come sangue.

> Gaetano: "È un sifone. Parla per fare il vuoto."

> Claudia: "Allora si tappa. RACCHETTONI."

**(I racchettoni-lapide si lasciano strappare dalla cenere con un suono di radice. Sono ancora VIVI: il manico caldo, la voglia di colpire intatta.)**`,
    combat: { enemies: ['monologante'], victory: 'u4b', defeat: 'u_ko' },
    choices: [],
  },

  u4b: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — Una onda',
    text: `Il silenzio, quando arriva, è così improvviso che fa MALE alle orecchie — come quando si spegne un frigo che ronzava da anni e capisci solo allora quanto rumore facevi finta di non sentire.

Il Monologante non c'è più. Resta la polo, floscia sulla sdraio, e gli occhiali a specchio in cui adesso, finalmente, si specchia qualcosa: voi sei. Cinque in piedi e uno — lo giurereste — in uno dei riflessi c'è anche Daniele, seduto sul divano, che applaude piano.

E poi il mare fa una cosa.

UN'onda. Una sola. Piccola, da riva, di quelle che ti bagnano le caviglie e basta — si alza dalla lastra di vetro sporco, corre fino alla battigia, si rompe con il suono VERO delle onde vere, e si ritira. Come un applauso. Come un grazie. Come uno che si sveglia un attimo per dirti che sta ancora lì sotto.

> Emanuela: *(in ginocchio nella cenere bagnata, una mano nell'acqua)* "L'ho sentita. È fredda giusta. È la MIA acqua fredda giusta." *(si volta, gli occhi lucidi e feroci insieme)* "Questa spiaggia me la riprendo. Non oggi. Ma me la riprendo."

Dove l'onda si è ritirata, la cenere si è aperta: una conchiglia. Rigata, intera, e dentro — lo sentite tenendola in mano — c'è ancora un'estate intera di sole VERO. Le cose grigie, vicino a lei, esitano.

**(🎨 Colore +2. La conchiglia di Gaeta va nello zaino: è piccola, ma è accesa.)**`,
    gold: 2,
    sets: { vibe_salvata: true },
    item: 'conchiglia_gaeta',
    choices: [
      { text: '🏐 I racchettoni piantati in riva: sono i vostri.', next: 'u4d' },
    ],
  },

  u4c: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — Il monologo affonda',
    text: `Il protocollo di Emanuela è collaudato in vent'anni di spiagge: non annuire, non fare domande, i mono-sillabi come muro, lo sguardo al mare. Funziona con TUTTI i vibe-killer del Tirreno.

Ma questo non è un vibe-killer. È il loro dio.

> Il Monologante: "—no ma infatti, il non rispondere, GIUSTISSIMO, ne parlavo proprio con uno come voi, uno che non rispondeva, bravissima persona, alla fine mi dava ragione, alla fine mi danno TUTTI ragione, è questione di costanza, ve lo dicevo no? La costanza—"

Le parole vi entrano SOTTO. Non dalle orecchie: dalla pelle. Ogni frase è una cannuccia, e sentite — fisicamente, un freddo che sale dai polpacci — la voglia di stare in piedi che vi cola via verso quella bocca che non si chiude mai. Natalino si siede sulla sdraio senza aver deciso di sedersi. Claudia lo tira su per un braccio, e la sdraio prova a TENERSELO, la tela già mezza chiusa su di lui come un labbro.

> Emanuela: "Via dalla sdraio! Non sedetevi, non annuite, NON DITE 'EH GIÀ'!"

> Federico: *(grigio in faccia)* "...eh già."

> Emanuela: "FEDERICO!"

**(−3 PV a tutti: il monologo prosciuga. E chi ha guidato la prova se lo sente NELLE VENE: Ingrigito — −2 a prove e attacchi finché non si cura.)**`,
    damage: 3,
    poisonRoller: true,
    choices: [
      { text: '🔁 Riorganizzarsi e riprovare — o cambiare metodo', next: 'u4' },
    ],
  },

  u4d: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — I racchettoni-lapide',
    text: `Claudia e Gaetano si avvicinano ai racchettoni piantati nella cenere come si va a trovare qualcuno al cimitero. Poi li riconoscono DAVVERO — la crepa riparata col nastro, le iniziali a pennarello sbiadito — e il cimitero finisce lì.

> Claudia: "Sono i nostri. I NOSTRI nostri. Quelli del torneo."

> Gaetano: "La casa li ha messi in posa da lapidi. Per dirci che quella roba lì è morta." *(li strappa dalla cenere, uno per mano, e il suono è quello di una radice che molla)* "Ha sbagliato posa."

Tra i due manici, mezza sepolta, c'è LEI: la pallina. E la pallina — unica cosa in tutta la spiaggia — è ancora GIALLA. Un giallo violento, radioattivo, il giallo di mille estati di sassate che decapitano. La cenere intorno a lei si tiene a distanza, in un cerchio perfetto, come se scottasse.

Claudia la raccoglie. La lancia a Gaetano senza guardare. Gaetano la prende senza guardare. Dieci anni di automatismi in due gesti.

> Gaetano: "Pronta?"

> Claudia: "Io sono SEMPRE pronta. Preoccupati per loro."

Non c'è bisogno di dire chi sono "loro". La pallina, in mano ai due pro, non è più un ricordo: è munizione. E le cose grigie di questa casa stanno per imparare cosa succedeva a Serapo a chi entrava nel campo sbagliato.

**(La pallina dei racchettoni va nello zaino: 2d8, danni DOPPI alle cose grigie. La palla non cadrà.)**`,
    item: 'pallina_racchettoni',
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
    ],
  },

  /* ==================== IMBARCO — LA CABINA ==================== */

  u5: {
    location: 'cabina',
    caption: 'IMBARCO — La cabina infinita',
    stinger: 'risata',
    text: `Oltre la porta c'è un corridoio d'aereo. File di sedili tre-più-tre a perdita d'occhio, avanti e indietro, senza cabina di pilotaggio e senza coda: solo la pancia infinita di un volo che non parte.

Tutti i sedili sono occupati. Manichini. Cinture allacciate, mani sui braccioli, facce lisce girate verso i finestrini — e dai finestrini non si vede il cielo: si vede la pista. Ferma. Da sempre.

*"Ding."*

> La Hostess: "Benvenuti a bordo. Vi INFORMIAMO che il comandante ha previsto turbolenze, guasti, uccelli nei motori e la statistica. Per la vostra sicurezza, restiamo a terra." *(arriva lungo il corridoio senza che le gambe si muovano al ritmo giusto, e sorride: il sorriso continua due denti oltre il punto dove dovrebbe fermarsi, per lato)* "Restiamo a terra PER SEMPRE. È la nostra promessa di qualità."

> Natalino: "La paura dell'aereo di Daniele. Ci hanno costruito un AEREO INTERO dentro."

> Gaetano: "No. Guardate."

Sul sedile 19A — corridoio, mai finestrino, il posto che Daniele sceglierebbe se lo costringessero a salire — c'è un cuscino di plexiglass, come una teca. Sotto: mezza fotografia. Un bambino che ride, maglietta blu. Daniele bambino. L'altra metà di QUELLA foto.

> Claudia: "Non è una scenografia. È una CASSAFORTE. La casa tiene qui le cose di Daniele, dentro la sua paura, perché lui qui non verrebbe MAI a riprendersele."

La Hostess è ferma tre file più in là, girata verso di voi, e sorride. Non vi guarda: vi INVENTARIA.`,
    choices: [
      { text: '🤫 Sfilare la foto dalla teca in silenzio, mentre lei guarda altrove', tag: 'Prova di Destrezza — CD 12', check: { stat: 'DES', dc: 12, success: 'u5b', fail: 'u5c' } },
      { text: '🎭 Distrazione di gruppo: recitare i passeggeri difficili, tutti insieme', tag: 'Prova di Carisma — CD 12', check: { stat: 'CAR', dc: 12, success: 'u5b', fail: 'u5c' } },
    ],
  },

  u5b: {
    location: 'cabina',
    caption: 'IMBARCO — Le due metà scottano',
    text: `La foto è vostra. La teca si richiude con un sospiro pneumatico e la Hostess non si è mossa: sorride a una fila di manichini, tre file più in là, congratulandosi con loro per aver scelto di non partire.

Daniele bambino ride, nella mezza foto. Maglietta blu, un dente da latte in meno, e il braccio destro che finisce nel bordo strappato — teso verso qualcosa che non c'è più.

E se qualcuno di voi ha in tasca l'altra metà, succede una cosa che nessuno si aspetta: le due metà SCOTTANO. Avvicinatele di un centimetro e tirano, come due calamite, come due mani che si cercano al buio da trent'anni. Il bordo strappato dell'una combacia col bordo strappato dell'altra al millimetro: il braccio di Daniele bambino arriva sulla spalla di Federico bambino. Ci arrivava. Ci è SEMPRE arrivato.

> Emanuela: *(piano)* "Chi l'ha strappata, questa foto?"

> Federico: *(più piano)* "Non me lo ricordo. Giuro su Dio che non me lo ricordo. Ma il nastro ce l'ho." *(tira fuori dal portafoglio, tra le carte fedeltà, un rotolino di scotch)* "Non chiedetemi perché ce l'ho."

I manichini, tutti insieme, girano la testa di un grado verso di voi. La casa sta ASCOLTANDO.`,
    choices: [
      { text: '🩹 Ricomporre la foto col nastro, adesso, davanti a tutti i manichini', requires: { item: 'foto_meta_federico' }, removeItem: 'foto_meta_federico', removeItem2: 'foto_meta_daniele', item: 'foto_gemelli', sets: { foto_ricomposta: true }, gold: 2, next: 'u5d' },
      { text: '🚪 Tenere le due metà separate, per ora, e tornare al corridoio', next: 'u1' },
    ],
    item: 'foto_meta_daniele',
  },

  u5c: {
    location: 'cabina',
    caption: 'IMBARCO — Controllo documenti',
    text: `*"Ding."*

La Hostess è DIETRO di voi. Non l'avete sentita passare perché non è passata: c'era già.

> La Hostess: "I signori passeggeri sono pregati di NON toccare gli effetti personali del signor Daniele. Il signor Daniele resta a terra. I suoi oggetti restano a terra. VOI restate a terra." *(il sorriso si apre ancora di due denti per lato, e stavolta si sente il rumore, un crick di guanto di lattice)* "Per la vostra sicurezza."

E i manichini si slacciano le cinture. Tutti. Insieme. Il *clack* di mille fibbie in un colpo solo, come un applauso di ossa.

Il primo si alza dal 21C ruotando sul busto in un modo che i busti non fanno, la faccia liscia puntata su di voi. Non ha fretta. Nessuno qui ha fretta: il volo non parte, il tempo è TUTTO loro.

> Natalino: "Io l'ho sempre detto che l'aereo è pericoloso. DANIELE AVEVA RAGIONE, PORCA PUTTANA."

> Claudia: "Glielo dici dopo. SOTTO!"

**(La Hostess si liscia la divisa e viene a completare l'imbarco.)**`,
    combat: { enemies: ['hostess', 'manichino_vita'], victory: 'u5b', defeat: 'u_ko' },
    choices: [],
  },

  u5d: {
    location: 'cabina',
    caption: 'IMBARCO — La foto intera',
    stinger: 'item',
    text: `Federico stende le due metà sul cuscino di plexiglass del 19A, le combacia, e passa il nastro con una cura che non gli avete mai visto mettere in NIENTE, nemmeno nei preventivi.

La foto intera: un letto a castello, il 1994, due gemelli seduti sul materasso di sotto che ridono. Non uno CONTRO l'altro. Non uno DELL'altro. Ridono della STESSA cosa, fuori campo, persa per sempre — e il braccio di Daniele è sulla spalla di Federico, e la maglietta rossa e quella blu si toccano, e il nastro adesivo sul pavimento della cameretta, sullo sfondo, non c'è ANCORA.

La foto, intera, è CALDA. Batte piano, come una cosa col polso.

E la cabina reagisce. Le luci calano in un ringhio elettrico. I finestrini si anneriscono uno dopo l'altro, *tac, tac, tac*, lungo tutta la fila, come palpebre che si chiudono. I manichini girano la faccia DALL'ALTRA parte, tutti insieme: la casa non vuole guardare. Non PUÒ guardare.

> Gaetano: "Le fa male. Una foto col nastro adesivo, e le fa male."

> Emanuela: "Non è la foto. È quello che dice: che quei due hanno riso della stessa cosa. Per una che campa delle loro liti, questa è una bestemmia in chiesa."

Quando tornate verso la porta, il corridoio dell'aereo è più CORTO. Sensibilmente. La casa lo sta accorciando per sputarvi fuori prima.

> Federico: *(la foto in tasca, sul petto)* "Bene. Facciamole venire lo sfratto."`,
    choices: [
      { text: '🚪 Fuori, verso il corridoio delle porte', next: 'u1' },
    ],
  },

  /* ==================== NON APRIRE — LA STANZA SOMMERSA ==================== */

  u6: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — La stanza sommersa',
    text: `La porta si apre su una parete d'acqua.

Nera. Verticale. Dal pavimento al soffitto, TRATTENUTA da niente: il corridoio finisce e l'acqua comincia, ferma come una lastra, senza vetro, senza incantesimo visibile, senza scusa. Se allungate una mano — nessuno la allunga — la superficie aspetterebbe le vostre dita.

Dentro, nel buio liquido, si intuiscono gli scogli: masse più nere del nero, coi profili sbagliati, coperti di qualcosa che si muove piano come capelli. E in fondo, incastonata tra due rocce come una perla nel pugno chiuso, una luce. Calda. Rossa-arancio-oro, TUTTI i colori che questa casa ha rubato, concentrati in una cosa grande come un cuore. Che batte.

> Claudia: *(un passo indietro, la voce piatta di chi sta usando tutta se stessa per non urlare)* "È la mia. Questa stanza è MIA. L'acqua profonda, gli scogli, le cose che stanno sotto. Lo sapevo che c'era una porta per me."

> Gaetano: "Un Cuore di Colore. È quello di cui parlava il Mercante. Con quello si RIPORTA INDIETRO la gente."

> Natalino: "E l'hanno messo nel posto dove per prenderlo devi morire. Che signori."

**(Leggete bene, perché il gioco lo dice senza girarci intorno: chi si immerge e fallisce MUORE. Non sviene. Non "va KO". Muore davvero, e torna come Spirito. Il premio è una seconda vita per qualcuno; il prezzo può essere la vostra. Decidete da amici: sobri, contati, e guardandovi in faccia.)**`,
    choices: [
      { text: '🌊 Immergersi nell\'acqua nera. Fino in fondo. Sapendo il prezzo.', tag: '⚰️ Prova di Costituzione — CD 14 — QUI SI MUORE DAVVERO', check: { stat: 'COS', dc: 14, success: 'u6b', fail: 'u6_morte' } },
      { text: '🎯 Ingegnarsi da riva: agganciare il Cuore senza entrare', tag: 'Prova di Destrezza — CD 14', check: { stat: 'DES', dc: 14, success: 'u6c', fail: 'u6d' } },
      { text: '🚪 Rinunciare. Nessun tesoro vale un amico.', next: 'u1' },
    ],
  },

  u6_morte: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — L\'acqua prende',
    stinger: 'defeat',
    text: `L'acqua nera non oppone resistenza. È questo l'inganno: entra come seta, tiepida, quasi gentile — per i primi tre metri.

Poi gli scogli si accorgono.

Quello che da fuori sembrava alghe erano DITA. Lunghe, grigie, con troppe falangi, che si srotolano dalle rocce come si srotola la pazienza. La prima si chiude su una caviglia. La seconda sul polso. Non strattonano: TRATTENGONO, con la calma oscena di chi ha tutto il tempo del mondo, mentre l'aria nei polmoni diventa prima preziosa, poi disperata, poi un ricordo. Il Cuore di Colore è LÌ, a due bracciate, e batte più forte — o forse è il vostro, che batte più piano. Il buio non arriva dai lati: arriva da DENTRO, come inchiostro versato negli occhi.

L'ultima cosa che il corpo sente è che l'acqua non è più tiepida.

E poi — dall'ALTRA parte dell'acqua, come uscire da uno specchio — qualcuno riemerge. In piedi accanto agli amici, asciutto, leggero, SBAGLIATO. E guarda, attraverso la parete nera, il proprio corpo che affonda piano verso le dita che se lo aggiustano addosso come una coperta.

> Lo Spirito: *(guardandosi le mani, che si vedono attraverso)* "...ok. Ok ok ok. Non ditelo a mia madre. E qualcuno — qualcuno mi TENGA IL POSTO, che io di qua non ci resto, avete capito? Non ci resto."

Il Cuore di Colore, in fondo, batte ancora. Adesso sapete anche PER CHI potrebbe battere.

**(⚰️ Chi ha tirato è MORTO. Cammina con voi come Spirito: niente prove, niente attacchi — ma i morti, in questa casa, vedono porte che i vivi non vedono.)**`,
    killRoller: true,
    choices: [
      { text: '🌊 L\'acqua ha preso. Non avrà anche il Cuore: si ritenta.', next: 'u6' },
      { text: '🚪 Basta. Via da questa stanza maledetta.', next: 'u1' },
    ],
  },

  u6b: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — Il tuffo',
    text: `Chi si immerge lo fa nel modo giusto: veloce, dritto, senza lasciare all'acqua il tempo di pensare.

Le dita grigie si srotolano dagli scogli — le vedete, stavolta, e vederle è quasi peggio — ma il corpo che scende non è una preda che annaspa: è una freccia. Una bracciata, due, il fuoco del fiato trattenuto nel petto, le dita che sfiorano un polpaccio e si chiudono su acqua e basta.

Il Cuore di Colore si stacca dalla roccia con uno strappo da frutto maturo. E appena tocca la pelle, SCALDA: una vampata di rosso-arancio-oro che risale il braccio, il collo, la faccia, e per un secondo — un secondo solo — l'acqua nera intorno diventa acqua di mare vera, verde e azzurra e piena di sole, l'acqua di Serapo, l'acqua di prima.

Poi il nero si richiude, ma ormai chi doveva uscire è fuori: in piedi sul pavimento del corridoio, fradicio, ansimante, con in mano un cuore che batte e illumina le facce di tutti come un falò.

> Claudia: *(che non ha respirato per tutto il tempo insieme a chi era sotto)* "Mai. Più. MAI PIÙ, hai capito?"

> Natalino: "Però guardalo. Guarda che roba. È la cosa più viva che abbiamo visto da quando siamo entrati."

**(🎨 Colore +2. Il Cuore di Colore è vostro: con questo, qualcuno può TORNARE. Ma nell'acqua nera, dietro di voi, gli scogli si stanno muovendo.)**`,
    gold: 2,
    sets: { cuore_sommerso_preso: true },
    item: 'cuore_colore',
    choices: [
      { text: '⚠️ Qualcosa vi ha visti. Qualcosa si alza.', next: 'u7' },
    ],
  },

  u6c: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — L\'ingegno da riva',
    text: `> Gaetano: "Nessuno entra. Ragioniamo. Cosa abbiamo che allunga, aggancia e non ha paura?"

Il piano nasce in tre minuti di quel silenzio operoso che il gruppo tira fuori solo nelle emergenze vere: il manico di scopa trovato nel corridoio, la cintura di Federico, l'uncino ricavato dalle forbici da parrucchiere di Natalino — *"le giapponesi NO. Queste sono le altre, le porto per gelosia"* — il tutto assemblato con la precisione di un ingegnere di satelliti che per una volta ha un'emergenza nel tempo libero e la sta GODENDO.

L'attrezzo entra nell'acqua nera piano, senza sbattere. Le dita grigie sugli scogli si orientano verso il movimento, ondeggiano, ASSAGGIANO — e non trovano carne. Non trovano paura. Trovano un manico di scopa, e un manico di scopa non ha niente da dargli.

L'uncino morde il Cuore al terzo tentativo. Claudia guida il recupero a voce — *"sinistra, SINISTRA, adesso su, PIANO"* — con l'occhio assoluto di chi inquadra per mestiere, e il Cuore di Colore esce dall'acqua nera SENZA che nessuno si sia bagnato nemmeno un dito.

Quando è in mano vostra, caldo come un animale addormentato, vi permettete l'unica cosa vietata in questa casa: un applauso.

> Federico: "Ecco perché lo porto in vacanza, l'ingegnere."

**(🎨 Colore +2. Il Cuore di Colore è vostro senza un graffio. Ma l'applauso — l'applauso l'ha sentito anche l'acqua.)**`,
    gold: 2,
    sets: { cuore_sommerso_preso: true },
    item: 'cuore_colore',
    choices: [
      { text: '⚠️ La superficie nera si increspa. Si alza.', next: 'u7' },
    ],
  },

  u6d: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — Il tentativo sveglia l\'acqua',
    text: `L'attrezzo improvvisato entra nell'acqua nera, ondeggia verso la luce del Cuore... e sbatte su uno scoglio. Un colpo solo. Sordo. Piccolo.

L'acqua lo sente come un tamburo.

La superficie verticale — ferma da chissà quanti anni, ferma come una lastra — si INCRESPA. Un brivido la percorre tutta, dal pavimento al soffitto, e le dita grigie sugli scogli smettono di ondeggiare piano: si RITRAGGONO, tutte insieme, come si ritira la corda di un arco. In fondo, intorno alla luce calda del Cuore, il buio si sta RIORGANIZZANDO: masse che si staccano dalle rocce, si radunano, prendono una forma che ha spalle.

> Claudia: *(indietreggiando)* "Fuori la canna. FUORI LA CANNA, SUBITO."

> Natalino: "La sto tirando, la sto tirando! Pesa! Perché pesa?!"

Pesa perché all'altro capo c'è ATTACCATO QUALCOSA. Natalino molla la presa un decimo di secondo prima che il manico di scopa venga risucchiato nel nero come uno spaghetto, e la superficie dell'acqua si GONFIA verso di voi, tesa, come una membrana premuta da dentro da una fronte.

> Emanuela: "Ditemi che almeno adesso rinunciamo."

> Gaetano: "Temo che la decisione non sia più nostra."

**(L'acqua è sveglia. E sta uscendo LEI.)**`,
    choices: [
      { text: '⚔️ Quello che esce dall\'acqua, si affronta', next: 'u7' },
    ],
  },

  u7: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — La Cosa tra gli scogli',
    stinger: 'jumpscare',
    text: `L'acqua nera si apre dall'interno, senza un'onda, come una tenda.

La Cosa tra gli scogli esce IN VERTICALE, violando la parete d'acqua come se la fisica fosse un regolamento per gli altri. È fatta di tutto quello che Claudia ha sempre saputo esserci, sotto: roccia nera incrostata di conchiglie MORTE, capelli d'alga che si muovono contro corrente, e un corpo lungo sbagliato che non finisce mai di uscire — ogni volta che pensate di averla vista tutta, ne esce ancora. Dove dovrebbe avere la faccia ha un cerchio di dita. Le dita degli scogli. TUTTE.

> La Cosa: *(e la voce è il rumore esatto dell'acqua nelle orecchie quando vai giù e capisci che è troppo giù)* "Restituite. Il fondo. Tiene. Ciò che. Affonda."

> Claudia: *(e qui succede la cosa che nessuno si aspettava: Claudia fa un passo AVANTI)* "Ventotto anni che sogno questa merda, di notte. Ventotto anni che mi svegli col cuore in gola." *(alza il racchettone, e la mano non trema)* "Sai cosa non hai mai capito di me? Che sono ventotto anni che MI PREPARO."

> Gaetano: *(al suo fianco, pallina in mano)* "Servizio tuo, amore."

**(La Cosa tra gli scogli cala su di voi come un'onda che ha scelto.)**`,
    combat: { enemies: ['cosa_sommersa'], victory: 'u7b', defeat: 'u_ko' },
    choices: [],
  },

  u7b: {
    location: 'stanza_sommersa',
    caption: 'NON APRIRE — Il fondale asciutto',
    text: `La Cosa tra gli scogli si affloscia come un sacco svuotato e SCIVOLA all'indietro dentro la parete d'acqua, giù, in silenzio, senza nemmeno la dignità di un tonfo.

E l'acqua se ne va con lei.

Non defluisce: si RITIRA, tutta insieme, risucchiata verso il basso in una spirale nera che non finisce in nessun tubo, in nessun buco — semplicemente nel niente, come sporco lavato via da un vetro. In dieci secondi, dove c'era una parete liquida alta fino al soffitto, resta una stanza. Asciutta. Con un pavimento di sabbia chiara e scogli che, senza l'acqua nera addosso, sono solo ROCCE: normali, grigie del grigio onesto delle rocce vere.

E sul fondale, sparse come regali dimenticati, conchiglie. VERE. Rigate, rosa dentro, coi colori accesi — conchiglie di Gaeta, di quelle che Emanuela riconosce a occhio da trenta metri.

> Emanuela: *(raccogliendone una, poi due, poi riempendosi le tasche senza vergogna)* "Le ha tenute QUI. Tutte le estati che ha rubato, le ha tenute sul fondo, dove nessuno andava a guardare."

> Claudia: *(seduta su uno scoglio — SEDUTA, su uno scoglio, lei)* "Sapete che c'è? Non fa più paura. Guardatela: è solo una stanza con dei sassi."

> Natalino: "Detto questo, io il bagno qui non lo farei comunque."

**(🎨 Colore +2, e le conchiglie vere scaldano: +3 PV a tutti. La paura di Claudia, da stanotte, ha una stanza in meno dove abitare.)**`,
    gold: 2,
    heal: 3,
    choices: [
      { text: '🚪 Tornare al corridoio delle porte', next: 'u1' },
    ],
  },

  /* ==================== SCONFITTA / USCITE / SPIRITI ==================== */

  u_ko: {
    location: 'porte',
    caption: 'Il Corridoio — risputati',
    text: `Il buio non vi uccide. Fa di peggio: vi RESTITUISCE.

Vi risvegliate sul pavimento del corridoio, tutti e cinque in fila ordinata davanti alle porte, composti come cappotti appesi. La casa vi ha raccolti, trasportati e DISPOSTI — e il pensiero delle mani che l'hanno fatto, mentre eravate spenti, è peggio di qualunque livido.

Vi guardate. Siete più grigi. Non metaforicamente: Federico alza una mano e la pelle ha perso un tono, come una foto lasciata al sole. La casa ha trattenuto il disturbo, e il disturbo era un pezzo del vostro colore.

> La casa: *(nessuna voce — solo una targhetta d'ottone nuova, su una porta che prima non c'era, con scritto sopra in bella grafia: "RIPOSATEVI")*

> Natalino: "Col cazzo che mi riposo. Col CAZZO, hai capito?" *(alla porta, col dito puntato)* "Prima regola del mio salone: il cliente non decide lui quando è finita."

> Emanuela: *(già in piedi, già con la borsa in mano, già feroce)* "Contati. Cinque. In piedi. Si ricomincia."

Le porte aspettano, coi loro colori sbagliati. Da qualche parte là sotto, Daniele sta aspettando da tre giorni: e lui non ha avuto nessuno che lo tirasse su per il braccio.

**(La casa vi ha rimessi in piedi per rigiocarvi: PV pieni, ma 🎨 Colore −2. Il conto lo paga sempre qualcuno.)**`,
    fullHeal: true,
    goldLoss: 2,
    choices: [
      { text: '⚔️ Tornare là dentro e finire quello che è iniziato', next: 'RETRY_COMBAT' },
      { text: '🚪 Riprendere fiato nel corridoio delle porte', next: 'u1' },
    ],
  },

  u8: {
    location: 'porte',
    caption: 'Il Corridoio — chiudere i cassetti',
    text: `C'è un momento, in ogni casa infestata, in cui un corridoio smette di essere un mistero e diventa un archivio che avete già schedato. Questo momento è adesso.

Vi fermate al centro del corridoio, e per la prima volta lo guardate senza paura: porte coi colori sbagliati, targhette con la grafia rubata a Daniele, ricordi messi in barattolo da una cosa che li mangia. Sapete cosa c'è dietro. Ci siete ENTRATI. E ne siete usciti con le tasche più piene di come eravate entrati.

> Gaetano: "Ricapitolo da ingegnere: la casa archivia i ricordi che le servono e li tiene in produzione. Cellette, loop, mungitura. Adesso lo sappiamo."

> Claudia: "E sappiamo che i suoi archivi si SVUOTANO. L'abbiamo fatto. Più di una volta."

> Federico: "Quindi la strategia è chiara: si va avanti, si trova mio fratello, e a questa casa le presentiamo il conto. Con l'IVA."

> Natalino: "E gli interessi di mora. Io c'ho un commercialista che è un DEMONE, altro che questo."

Mentre tornate verso il Salotto-Cattedrale, il corridoio alle vostre spalle fa un'ultima cosa: le targhette d'ottone, una a una, si anneriscono. Come se qualcuno, nell'ufficio archivi, stesse prendendo nota che questi sei — questi qui — le porte le APRONO.

Bene. Che prenda nota.

**(🎨 Colore +1: il corridoio delle porte non vi fa più paura. Adesso è la casa che deve ricordarsi di voi.)**`,
    gold: 1,
    sets: { via_porte: true },
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
    ],
  },

  u9: {
    location: 'porte',
    caption: 'La porta senza targhetta',
    text: `C'è una porta che gli altri non vedono. Chi è vivo ci passa davanti e l'occhio gli scivola via, come su un gradino che si conosce a memoria. Ma chi di voi è MORTO stanotte la vede benissimo: bianca, senza targhetta, senza colore sbagliato — perché non è un ricordo rubato. È una porta di SERVIZIO.

Lo Spirito la attraversa. Da solo. Dall'altra parte c'è una sala d'aspetto: sedie di plastica avvitate a terra, un distributore di caffè spento, riviste su un tavolino con le date illeggibili, e una luce da ambulatorio alle sei di sera. Sulle sedie, altri come voi: trasparenti, pazienti, coi cappotti di mode diverse. Una signora anziana lavora a maglia un filo che non c'è. Un ragazzo con gli occhiali anni Settanta fa un cruciverba senza penna.

> La signora: *(senza alzare gli occhi dalla maglia)* "Fresco fresco, eh? Si vede. I nuovi hanno sempre quella faccia da 'dev'esserci un errore'." *(sorride, gentile)* "Siediti, ché qui il tempo non conta. E ascolta la cosa importante, che a noi nessuno l'ha detta e abbiamo perso decenni: IL GRIGIO NON CI VEDE."

> Lo Spirito: "...come, non ci vede?"

> Il ragazzo del cruciverba: "Non può. Lui colleziona quello che la gente ha ancora da perdere. Noi abbiamo già perso tutto: siamo INVENTARIO EVASO. Per lui siamo aria." *(alza gli occhi, e dietro gli occhiali c'è qualcosa di feroce e allegro insieme)* "Ci pensi? In questa casa, i più liberi di tutti siamo NOI. Passiamo dappertutto. Usalo, ragazzo. Noi non l'abbiamo usato, e guarda che fine: l'abbonamento alle riviste."

**(🎨 Colore +2. Adesso lo sapete: il Grigiore non può toccare ciò che è già stato perso. Gli Spiriti passano OVUNQUE.)**`,
    gold: 2,
    sets: { indizio_spiriti: true },
    choices: [
      { text: '🚪 Tornare dagli altri, con la notizia più strana della serata', next: 'u1' },
    ],
  },

};

/* ============ REGISTRO DEL BLOCCO C ============
   FLAG IMPOSTATI → CONSUMATORE:
   - segreto_gemelli (u2b)       → scelta nel finale z* (smontare Eleinad col segreto) + eco boss in combat.js + voce diario DIARY_FLAGS
   - foto_ricomposta (u5d)       → finale e_gemelli + eco nel boss eleinad_vero (la foto lo ACCECA) + diario
   - via_porte (u8)              → gate d'accesso allo snodo m1 (con le altre piste)
   - vibe_salvata (u4b)          → impresa ("Il protocollo di Emanuela") + cronaca epiloghi (il mare di Gaeta si riaccende)
   - cuore_sommerso_preso (u6b/u6c) → impresa ("Il tuffo nel nero") + diario (dove nascono i Cuori di Colore)
   - indizio_spiriti (u9)        → scelte requiresSpirit nei blocchi m e z (gli spiriti passano ovunque) + diario

   ITEM DATI:
   - foto_meta_federico (u2), foto_meta_daniele (u5b), foto_gemelli (ricomposizione in u5b→u5d)
   - joycon_sinistro (u2b) — servirà a liberare Daniele allo snodo m*
   - conchiglia_gaeta (u4b), pallina_racchettoni (u4d — 2d8, danni doppi alle cose grigie)
   - cuore_colore (u6b oppure u6c — MAI entrambi: stessa fonte, flag unico)

   MORTI VERE POSSIBILI:
   - u6_morte (killRoller: fallire COS 14 nella Stanza Sommersa) — il morto diventa Spirito

   USCITE DAL BLOCCO: SOLO h1 (da u8).
   STINGER USATI: jumpscare (u3, u7), risata (u5), item (u5d), defeat (u6_morte).
   =============================================== */

/* ============ LA CASA CHE NON FINISCE — BLOCCO D ============
   LA CUCINA FREDDA E IL SOTTOSCALA (pista k*, dall'hub h1)
   Dà: i segnali di Daniele · il Mercante Grigio · la Galleria dei
   Sonnambuli · il Segreto del Trono · una morte vera (la calata) ·
   Luca Giunti (mini-boss) · un Cuore di Colore trovabile.       */

const SCENE_D = {

  /* ==================== LA CUCINA FREDDA ==================== */

  k1: {
    location: 'cucina_fredda',
    caption: 'La Cucina Fredda — il frigo pieno di cena',
    text: `La cucina è grande il doppio di quanto una cucina abbia il diritto di essere, e fredda come una cella frigorifera. Il fiato di Emanuela esce bianco. Al centro, un frigo industriale a doppia anta, di quelli da ristorante — e Daniele NON ha un frigo da ristorante.

Claudia lo apre. È pieno. È questo il problema: è pieno di **CENA**. Lasagne, parmigiana, pasta al forno, impilate con cura maniacale su ogni ripiano — tutte dello stesso grigio del cartone bagnato. Cibo cucinato, mai mangiato, catalogato come reperti.

Natalino apre il cassetto delle verdure e lo richiude di scatto, con tutte e due le mani.

> Natalino: "Là dentro c'è una cosa che RESPIRA. Ve lo dico da professionista del settore estetico: non è insalata. L'insalata non ha le costole."

Poi Gaetano vede il ripiano centrale, e per un secondo nessuno respira. Dodici lattine di **Coca Zero**. Rosse e nere e VIVE — le uniche cose a colori dell'intera cucina. Disposte in fila perfetta. **A freccia.** La punta indica la porta della dispensa.

> Gaetano: "La casa non le ha sbiadite. Non ci è riuscita, o..."

> Federico: "O mio fratello ci sta lasciando i segnali, cazzo. Da DENTRO. Sta sabotando questa merda di posto pezzo per pezzo."

> Emanuela: "Allora smettiamo di guardare la freccia e seguiamola, no?"

Da qualche parte, in fondo alla cucina, un citofono comincia a suonare. In una casa che non ha più una porta d'ingresso.

**(🎨 +1 Colore: Daniele sta combattendo, e adesso lo sapete.)**`,
    gold: 1,
    sets: { daniele_sabota: true },
    choices: [
      { text: '🥤 Seguire la freccia di lattine fino alla dispensa', next: 'k3' },
      { text: '🧊 Frugare il frigo fino in fondo — se lui lascia segnali, magari ne ha lasciati altri', tag: 'Prova di Costituzione — CD 12', check: { stat: 'COS', dc: 12, success: 'k1b', fail: 'k1c' } },
      { text: '📞 Il citofono. Rispondere al citofono che non può esistere.', next: 'k2' },
    ],
  },

  k1b: {
    location: 'cucina_fredda',
    caption: 'Il fondo del frigo — l\'ultima cosa calda',
    stinger: 'item',
    text: `Chi ha lo stomaco più saldo infila le braccia tra le teglie grigie, oltre le lasagne di cartone, oltre una cosa che nel buio del secondo ripiano si sposta educatamente per farvi passare. In fondo, dietro tutto, c'è un'ultima teglia coperta di stagnola.

È **CALDA**.

Claudia la tira fuori con le mani che tremano — non di paura, stavolta. Sotto la stagnola: una parmigiana. A COLORI. Il rosso del pomodoro, il bianco della mozzarella, la crosticina dorata ai bordi. Profuma di casa vera, di domenica, di qualcuno che ti vuole bene e non sa dirtelo.

Sul bordo della teglia, un post-it con la grafia di Daniele: *"Per venerdì. Se non rispondo ai messaggi è perché sto cucinando. Non è vero, sto giocando a Mario Kart, però la parmigiana è vera."*

Venerdì. **Tre giorni fa.** L'aveva fatta per voi. Poi ha aperto la porta sbagliata dentro casa sua, e la parmigiana è rimasta qui, calda, ad aspettare — l'unica cosa che la casa non è riuscita a spegnere, perché c'era troppo amore dentro l'impasto.

> Federico: *(voce che non gli esce dritta)* "Che stronzo. Non me l'aveva detto che cucinava per noi."

> Emanuela: "Mangiate. Tutti. È un ordine e anche una medicina."

La mangiate in piedi, al freddo, con le mani. È la cosa più buona che abbiate mai mangiato in vita vostra.

**(+4 PV a tutti. 🎨 +1 Colore. Nessuno lascia indietro Daniele. NESSUNO.)**`,
    heal: 4,
    gold: 1,
    sets: { parmigiana_daniele: true },
    choices: [
      { text: '🥤 Ora la freccia di lattine. Fino in fondo.', next: 'k3' },
    ],
  },

  k1c: {
    location: 'cucina_fredda',
    caption: 'Il cassetto delle verdure — vi aveva avvertiti',
    stinger: 'jumpscare',
    text: `Le braccia affondano tra le teglie, e il freddo sale su per i polsi come acqua. Poi la mano tocca il bordo del cassetto delle verdure — quello che Natalino aveva richiuso — e il cassetto si apre DA SOLO.

Dentro non c'è insalata. C'è una bocca.

Una fila di denti piccoli e fitti nel fondo di plastica, gengive del colore della verdura marcia, e il cassetto **MORDE** — scatta come una tagliola su polso e avambraccio, e per un secondo lunghissimo tira, tira VERSO IL FONDO del frigo, dove il buio tra i ripiani è molto più profondo dei sessanta centimetri che dovrebbe essere.

Vi strappate via tutti insieme, in un groviglio di braccia e bestemmie, e il frigo si richiude con uno sbuffo pneumatico soddisfatto, come dopo un rutto.

> Natalino: "L'AVEVO DETTO. L'avevo detto che respirava! Nessuno mi ascolta finché la casa non si mangia mezzo braccio a qualcuno, PORCA PUTTANA."

> Gaetano: *(fasciando col nastro isolante trovato su una mensola, perché è pur sempre Gaetano)* "Registrato: il frigo è ostile. La freccia di lattine invece è di Daniele. Fidiamoci del fratello, non dell'elettrodomestico."

Sul pavimento, davanti alla dispensa, le lattine sembrano quasi impazienti.

**(-3 PV a tutto il gruppo, tra i denti e lo spavento.)**`,
    damage: 3,
    choices: [
      { text: '🥤 Basta frigo. Seguite la freccia.', next: 'k3' },
    ],
  },

  k2: {
    location: 'cucina_fredda',
    caption: 'Il citofono — sono SEMPRE le 21:00',
    text: `Il citofono è su una parete dove prima non c'era una parete. Schermo in bianco e nero, cornetta gialla anni '90, e suona con la pazienza atroce delle cose che sanno che prima o poi risponderete.

Sopra il citofono, l'orologio della cucina: **le 21:00.** Gaetano lo guarda. La lancetta dei secondi arriva al 12, e riparte da capo. 21:00. Sempre. Per sempre.

> Gaetano: "No. No no no. Le nove di sera. Il giorno prima della verifica. Vi prego, ditemi che non è—"

Claudia solleva la cornetta. Sullo schermo si accende un pianerottolo che non esiste, e sul pianerottolo c'è un ragazzino con lo zaino in spalla, il libro di fisica sotto il braccio, e il sorriso fiducioso di chi non ha MAI aperto quel libro.

> Luca Giunti: "Prof! Prof, lo so che è tardi! Domani ho la verifica sui moti armonici! Facciamo QUATTRO ORE? Anche cinque! Io porto le merendine! PROF, LO SENTO CHE C'È!"

> Federico: *(piano)* "Gaetano. Chi cazzo è."

> Gaetano: *(grigio in faccia, e non per la casa)* "Luca Giunti. Ripetizioni. Scrive sempre alle nove di sera del giorno prima. SEMPRE. La casa me l'ha... l'ha messo in loop. È il mio inferno personale con lo zaino Invicta."

Il citofono suona di nuovo. E di nuovo. E la porta della cucina — quella col vetro smerigliato — comincia a scaldarsi di una luce da pianerottolo.

> Luca Giunti: *(dal citofono, eterno)* "Proooof! Me lo rispiega tutto da settembre?"`,
    choices: [
      { text: '🚪 Non aprire. Non aprire MAI.', next: 'k2b' },
      { text: '💪 Gaetano affronta il suo destino: aprite voi, a testa alta', next: 'k2b' },
    ],
  },

  k2b: {
    location: 'cucina_fredda',
    caption: 'Luca Giunti delle 21:00 — mini-boss',
    text: `Non importa cosa avete deciso: la porta si apre **da sola**, perché a Luca Giunti non è mai servito il permesso di nessuno.

Entra nella cucina fredda e la luce da pianerottolo entra con lui. Da vicino è peggio: gli occhi sono due fotocopie sbiadite, lo zaino è pieno di fogli a quadretti che si muovono da soli, e il libro di fisica — mai aperto, con il cellophane ANCORA SU — gli pende dalla mano come una mazza.

> Luca Giunti: "Prof, ho portato gli esercizi! Cioè, non li ho fatti, però li ho PORTATI! Partiamo dalle formule? Quali formule? Prof? PROF, QUATTRO ORE BASTANO? Me lo rispiega? ME LO RISPIEGA TUTTO?"

Apre lo zaino. I fogli a quadretti sciamano fuori come vespe: esercizi in bianco, verifiche in bianco, "svolgere e semplificare" scritto con una grafia che vi entra sotto le unghie. Ogni domanda vi toglie qualcosa — tempo, fiato, la voglia di spiegare qualsiasi cosa a chiunque, mai più.

> Emanuela: "È un vibe-killer. È il RE dei vibe-killer. Ragazzi, questo va abbattuto per il bene di tutti i professori del mondo."

> Claudia: "Gaetano, amore: stavolta la verifica gliela facciamo NOI."

**(Combattimento! Luca Giunti attacca con richieste all'ultimo minuto, esercizi mai fatti e "me lo rispiega?" a raffica.)**`,
    combat: { enemies: ['luca_giunti'], victory: 'k2c', defeat: 'k_ko' },
    choices: [],
  },

  k2c: {
    location: 'cucina_fredda',
    caption: 'La verifica di Luca Giunti',
    stinger: 'risata',
    text: `Luca Giunti si siede per terra, in mezzo alla cucina fredda, sconfitto. Lo zaino sgonfio, i fogli a quadretti che si dissolvono come neve sporca. Tira fuori il libro di fisica, e per la prima volta nell'eternità — si sente il cellophane che si strappa — **lo apre.**

> Luca Giunti: *(piano, guardando la pagina 1 come un paese straniero)* "Prof. Io volevo solo passare la verifica."

Ed è l'unica cosa vera che abbia mai detto. Silenzio. Poi Gaetano si siede accanto a lui, sul pavimento gelato, e sospira il sospiro di ogni insegnante dall'alba dei tempi.

> Gaetano: "Il moto armonico. UNA cosa. Te ne spiego una sola, ma te la spiego BENE. Guarda: una molla. Va, torna. Va, torna. Tutto qui il segreto: le cose che oscillano vogliono solo tornare a casa."

Glielo spiega. Con le mani, con una lattina vuota che dondola appesa al filo del citofono, con la pazienza che ha sempre avuto anche alle nove di sera del giorno prima. E Luca Giunti — l'incubo, il loop, il re dei vibe-killer — **capisce**. Si vede il momento esatto: gli occhi da fotocopia diventano occhi.

> Luca Giunti: "...prof, ma allora è FACILE. Perché nessuno me l'aveva—" *(si guarda le mani, che cominciano a fare luce)* "—prof, secondo me domani la passo."

Sorride. E si dissolve così, sorridendo, promosso, libero.

> Federico: "Gaetano ha appena sconfitto un demone COL MOTO ARMONICO. Io questa la racconto ai matrimoni."

**(🎨 +2 Colore: insegnare bene una cosa sola vale più di quattro ore.)**`,
    gold: 2,
    sets: { luca_promosso: true },
    choices: [
      { text: '🥤 Tornare alla freccia di lattine', next: 'k1' },
    ],
  },

  k3: {
    location: 'cucina_fredda',
    caption: 'La dispensa — le cose care a qualcuno',
    text: `La freccia di lattine finisce contro la porta della dispensa, che si apre su un piccolo miracolo: **scorte vere.** A colori. Pasta con la marca giusta, il barattolo di caffè, l'accendino lungo del barbecue appeso al chiodo, e — Gaetano quasi si commuove — due bottiglie della sua IPA, quella buona, che Daniele teneva in casa SOLO per lui.

La casa ci ha provato, a sbiadirle: si vedono gli aloni grigi sui bordi, come ditate. Ma non ce l'ha fatta.

> Claudia: "Non riesce a spegnere le cose che sono care a qualcuno. Guardate: tutto quello che è a colori qui dentro è un REGALO. Roba comprata pensando a una persona."

> Natalino: "Quindi il Grigiore digerisce tutto tranne l'affetto. Segnamocelo, che mi sa che è un'arma."

E poi Emanuela sposta un sacco di patate grigie, e sotto c'è una **borsa frigo portatile**. Quella di Federico. Quella che Federico ha lasciato A CASA SUA, a duecento metri e un universo da qui. Dentro, ordinate come pallottole: le birre al limone.

> Federico: *(fermo, la voce a metà)* "Questa stamattina era nel mio garage. Daniele... Daniele me le ha portate QUI? Da dentro QUESTO posto, ha pensato alle mie birre di merda?"

> Emanuela: "Amore. Respira."

> Federico: "NON sto piangendo, è il freddo. È scienza."

**(Trovati: l'accendino del barbecue — fiamma VERA, le cose grigie la odiano — e le IPA di Gaetano.)**`,
    item: 'accendino_bbq',
    item2: 'ipa_gaetano',
    choices: [
      { text: '🍺 Prendere anche le birre al limone dalla borsa frigo di Federico', once: true, item: 'birra_limone', sets: { birre_ritrovate: true }, next: 'k4' },
      { text: '🚪 C\'è un tappeto, in fondo alla dispensa. E sotto il tappeto c\'è uno spigolo.', next: 'k4' },
    ],
  },

  k4: {
    location: 'cucina_fredda',
    caption: 'La botola — il buio che respira',
    text: `Sotto il tappeto della dispensa c'è una **botola**. Anta di legno scuro, maniglia a incasso, e dalla fessura sale il freddo — IL freddo, quello che gela tutta la cucina: viene da qui sotto.

Gaetano la apre. Sotto, una scala a pioli scende in un buio che non è vuoto. Si sente. Il buio là sotto **respira**: dentro, fuori, lento, come una cosa enorme che dorme male. E in fondo, lontanissima, una lucina. Da campeggio.

> Claudia: "C'è una LUCE. Là sotto c'è qualcuno che ha acceso una luce."

> Natalino: "O QUALCOSA che usa la luce come esca. Funziona coi pesci, eh. Quelli brutti degli abissi."

Gaetano tasta il primo piolo. Il legno è umido, e sotto l'umido è **molle**, come tastare una gengiva. La scala scende per almeno dieci metri, forse molti di più: il buio qui sotto mente sulle distanze.

> Gaetano: "Ragazzi. Parlo da ingegnere: questa calata è OLTRE i margini di sicurezza. Se si scende, si scende legati, in cordata, e piano. E lo dico chiaro, guardandovi in faccia—"

Vi guarda in faccia. Uno per uno.

> Gaetano: "—qui sotto si può MORIRE. Morire davvero. Non svenire, non 'game over riprova': morire. Decidiamo insieme."

Il buio, sotto, inspira. Ed espira. La lucina da campeggio, lontanissima, fa un piccolo cenno — su e giù, su e giù — come una mano che chiama.

**(⚠️ AVVISO: la calata è uno snodo a morte vera. Chi fallisce la prova può morire davvero.)**`,
    choices: [
      { text: '🧗 Calarsi in cordata: le tovaglie annodate, i nodi li fa Gaetano', tag: 'Prova di Forza — CD 13 ⚰️', check: { stat: 'FOR', dc: 13, success: 'k5', fail: 'k4_morte' } },
      { text: '🧠 Cercare un\'altra via: una casa così DEVE avere un montavivande', once: true, tag: 'Prova di Intelligenza — CD 13', check: { stat: 'INT', dc: 13, success: 'k5', fail: 'k4b' } },
      { text: '↩️ Rinunciare. Non stanotte. Non così.', next: 'k1' },
    ],
  },

  k4_morte: {
    location: 'sottoscala',
    caption: 'La calata — il rumore che fa',
    stinger: 'defeat',
    killRoller: true,
    text: `Il terzo piolo regge. Il quarto regge. Il quinto **cede** — non si spezza: si RITRAE, come una lingua che rientra in bocca — e la cordata di tovaglie si tende con uno schiocco da frusta.

Per un secondo tiene. Sentite il peso dell'amico appeso nel buio, lo sentite nelle braccia e nella schiena, e state già tirando su, state URLANDO e tirando su—

Poi il buio tira dall'altra parte. Ed è più forte.

Il nodo non si scioglie: si APRE, con gentilezza, come slacciato da dita pazienti. E il rumore che fa un amico che cade nel buio che respira è questo: un fruscio, un colpo lontano, umido. E poi il silenzio. Il buio smette di respirare per un momento, come chi trattiene il fiato per assaporare.

Nessuno si muove. Nessuno bestemmia. C'è solo il bordo della botola, le tovaglie flosce, e il vapore dei vostri fiati.

Poi dal buio sale una luce fredda, piccola, che risale la scala **senza toccare i pioli**. È l'amico. È il suo Spirito: trasparente, calmo, con addosso una luce da vecchia TV. Vi guarda dalla scala. Sa. E la faccia di chi resta — quella è la cosa peggiore che la casa vi abbia fatto finora.

> Lo Spirito: "...ok. Ok, niente panico. Sono io, sono qui, e vi giuro che fa meno male di quanto sembra. Il problema è che DA QUI si vedono un sacco di cose, e voi dovete scendere lo stesso. Quindi asciugatevi la faccia, rifate quei nodi DECENTEMENTE... e finiamola, questa storia. Per me."

**(⚰️ Chi ha tirato è MORTO. Davvero. Da adesso è uno Spirito: niente prove né attacchi, ma vede quello che i vivi non vedono. La resurrezione esiste — e costa.)**`,
    choices: [
      { text: '🧗 Proseguire la calata, con più cautela e un morto a fare strada', next: 'k5' },
      { text: '↩️ Risalire. Ora serve un piano — o un miracolo da comprare.', next: 'k1' },
    ],
  },

  k4b: {
    location: 'cucina_fredda',
    caption: 'Il montavivande — respinti',
    text: `Il montavivande c'è. Ovvio che c'è: Gaetano lo trova dietro un pannello della dispensa in quaranta secondi, sportello d'acciaio, corda a doppio carrello, tutto in scala per calare al piano di sotto una persona alla volta, piegata come un pollo arrosto.

Il problema è che il montavivande **non è d'accordo**.

Claudia entra per prima, lo sportello si chiude, la corda scorre — mezzo metro — e poi il vano comincia a STRINGERSI. Le pareti d'acciaio flettono verso l'interno con un lamento di lamiera, lo sportello ringhia sui cardini, e da sotto, dal fondo del condotto, sale un odore di stomaco vuoto.

> Claudia: "TIRATEMI SU. TIRATEMI SU CHE MI STA MASTICANDO, PORCA—"

La tirate fuori a forza mentre lo sportello le morde l'aria dietro i talloni. Il montavivande risale da solo, vuoto, offeso, e si richiude col pannello sopra, come chi mette il cartello CHIUSO.

> Claudia: *(controllandosi le caviglie, furiosa)* "La casa ci lascia UNA porta sola per il sotto. Quella scala di merda. Vuole che passiamo da lì."

> Natalino: "Le esche funzionano così, sì. Ci vuole vedere in fila sulla scala. Be'. Almeno adesso lo sappiamo: legati STRETTI."

**(-2 PV, tra la lamiera e lo strattone.)**`,
    damage: 2,
    choices: [
      { text: '↩️ Tornare alla botola. Non c\'è altra via.', next: 'k4' },
    ],
  },

  /* ==================== IL SOTTOSCALA ==================== */

  k5: {
    location: 'sottoscala',
    caption: 'Il Sottoscala — gli inferi domestici',
    text: `Toccate il fondo, e il fondo è tiepido. Questo è il primo orrore: dopo tutto quel freddo, qui sotto fa **caldo di corpo**, un tepore da ascella, da letto sfatto altrui.

Il sottoscala non è uno scantinato. È un'intercapedine infinita: pareti di mattoni vivi che si stringono e si allargano a perdita d'occhio, e in mezzo, a canne d'organo, le **tubature** — centinaia, migliaia — che pulsano. Non come tubi. Come vene. Dentro ci passa qualcosa di denso, e dove un giunto perde, la parete intorno ha fatto la crosta.

E ovunque, incastrate tra i tubi come cibo tra i denti: **le cose dimenticate.** Non solo di questa casa: di TUTTE le case. Un triciclo con la ruggine a forma di dita. Dentiere in fila su una mensola, che masticano piano nel sonno. Un acquario pieno non d'acqua ma di capelli, dove qualcosa continua comunque a nuotare. Un intero armadio a muro, strappato via col suo pezzo di parete, da cui esce un odore di naftalina e di carne tenuta al buio troppo a lungo.

> Emanuela: "Ok. Ho capito dove siamo. Questo è il posto dove le case digeriscono."

> Federico: "Emanuela, ti prego—"

> Emanuela: "Sotto ogni casa felice c'è uno stomaco, Federico. Noi ci abitiamo SOPRA, agli stomaci. Camminate al centro e non toccate le vene."

Avanti, tra le canne d'organo di tubi, la lucina da campeggio adesso è vicina. E accanto alla luce, qualcuno ha steso un banco.

> La voce dal banco: "Clienti! Finalmente. Venite, venite: qui sotto il Colore lo trattiamo IO SOLO."`,
    choices: [
      { text: '🏮 Avvicinarsi al banco con la lampada da campeggio', next: 'k6' },
    ],
  },

  /* ==================== IL MERCANTE GRIGIO ==================== */

  k6: {
    location: 'mercante',
    npc: ['mercante_guardia'],
    caption: 'Il Mercante Grigio — si compra e si vende Colore',
    text: `Il banco è di compensato, montato tra due tubi-vena come una bancarella abusiva all'inferno. Sopra: una lampada da campeggio, una bilancia di ottone, e merce disposta con cura da orefice. Dietro il banco c'è **il Mercante Grigio**.

Indossa un gilet da ferramenta, con le taschine piene di cacciaviti, e questo è l'unico dettaglio rassicurante, perché dentro il gilet non c'è un uomo: c'è una cosa alta e piegata in punti sbagliati, con troppa faccia distribuita male, che sorride con generosità eccessiva. Accanto a lui, arrotolato su se stesso come una manichetta, dorme qualcosa con la targhetta: *"RISCOSSORE"*.

> Il Mercante: "Guardate pure, toccate no. Io compro e vendo l'unica valuta che conta: il **COLORE**. Voi ne avete addosso — si sente, profumate come un'estate — e io ho merce che di sopra non trovate. Facciamo affari?"

Sul banco, sotto una campana di vetro, una cosa che pulsa piano di tutti i colori insieme: un **CUORE DI COLORE**. Il cartellino: *"Resurrezione. Un'anima intera, riaccesa. Prezzo: 12 di Colore E un oggetto del cuore."* Il Mercante segue il vostro sguardo.

> Il Mercante: "Ah, quello. Quello ripaga i morti, sì. Ma il Colore da solo non basta: serve un oggetto rollato, cucito, comprato CON AMORE. L'affetto fatto a mano, qui sotto, vale oro." *(gli occhi — tutti — puntano il taschino di Natalino)* "Quel tronello, per esempio. Liturgia pura. Lo sento da qui."

> Natalino: "Il tronello no. IL TRONELLO NO."`,
    choices: [
      { text: '🎨 Boccata di Colore — "un sorso d\'estate, cura il Grigiore" (3🎨)', requiresGold: 3, gold: -3, item: 'boccata_colore' },
      { text: '🥤 Coca Zero "d\'annata" — "del suo lotto. Lui capirebbe." (2🎨)', requiresGold: 2, gold: -2, item: 'lattina_zero' },
      { text: '🧨 Lattina agitata — "arma da lancio. Non chiedete." (2🎨)', requiresGold: 2, gold: -2, item: 'lattina_agitata' },
      { text: '🔊 Cassa bluetooth con la playlist dell\'estate — "le cose grigie la ODIANO" (4🎨)', requiresGold: 4, gold: -4, item: 'cassa_bluetooth' },
      { text: '💗 ⚠️ CUORE DI COLORE — 12🎨 E il tronello di Natalino. Una vita intera.', requires: { item: 'tronello' }, requiresGold: 12, gold: -12, removeItem: 'tronello', item: 'cuore_colore', once: true },
      { text: '🗣 "Il Divano-Trono. Cosa sai del Trono?" — pagare con una storia vera', next: 'k7' },
      { text: '🕶 Fregarlo. Una boccata sparisce dal banco mentre Claudia lo distrae.', once: true, tag: 'Prova di Destrezza — CD 13', check: { stat: 'DES', dc: 13, success: 'k7b', fail: 'k7b_fail' } },
      { text: '🚶 Lasciare il banco: più avanti l\'intercapedine si allarga in una sala', next: 'k8' },
    ],
  },

  k7: {
    location: 'mercante',
    caption: 'Il prezzo di un segreto — una storia vera',
    stinger: 'gold',
    text: `Il Mercante appoggia sul banco tutte le mani che ha, e per la prima volta smette di sorridere. È peggio.

> Il Mercante: "Il Trono. Domanda da dodici, questa. Il Colore non basta: i segreti si pagano coi segreti. Raccontatemi una storia VERA. Una che non avete mai raccontato. Io mi nutro anche di quelle, nei mesi magri."

Vi guardate. Poi qualcuno parla — chi, resta tra voi e il sottoscala — e racconta una cosa vera: piccola, scomoda, di quelle che si tengono sotto la lingua per anni. Il Mercante ascolta con tutta la faccia, annuisce, e quando la storia finisce se la mette in una taschina del gilet, piegata come una banconota.

> Il Mercante: "Onesta. Sa di vero. Va bene: ascoltate." *(si china, e la lampada da campeggio si abbassa da sola)* "Il vostro demone, quello col volto rubato. Va forte, eh? Immortale, dappertutto, la casa è sua. Ma ogni notte — OGNI notte — deve tornare al **Divano-Trono**, nella Sala della Switch. La vita finta che tiene in loop là sopra non è scenografia: è la sua FLEBO. Si ricarica lì, staccato dal Grigiore, spina alla presa. E in quei minuti..." *(sorride di nuovo, e stavolta il sorriso è quasi umano)* "...in quei minuti è solo una cosa stanca su un divano. **Vulnerabile.** Non ditegli chi ve l'ha detto: è il mio padrone di casa, e l'affitto qui è già un furto."

> Claudia: "Perché ce lo dici davvero, però? Che ci guadagni?"

> Il Mercante: "Se vincete voi, il quartiere si riempie di Colore. E io campo di COMMERCIO, signorina, non di Grigiore. Un mercato morto non serve a nessuno."

**(🎨 +2 Colore: adesso sapete DOVE il demone sanguina. Segreto del Trono acquisito.)**`,
    gold: 2,
    sets: { segreto_trono: true },
    choices: [
      { text: '🚶 Verso la sala più avanti, dove l\'intercapedine si allarga', next: 'k8' },
    ],
  },

  k7b: {
    location: 'mercante',
    caption: 'Il furto — mani d\'estate',
    text: `Claudia si pianta davanti al banco e fa la cosa che le riesce meglio al mondo: **l'occhio assoluto.**

> Claudia: "Scusa, ma questa bilancia è taroccata. Il piatto sinistro è più basso di due millimetri. DUE. Io di mestiere guardo le cose per vivere: tu stai fregando i clienti."

> Il Mercante: *(TUTTA la faccia si gira verso la bilancia, offesa in ogni sua parte)* "La MIA bilancia? La mia bilancia è calibrata sul battito di un usignolo del 1961, io VI DENUNCIO—"

Mentre il Mercante conta millimetri col naso sul piatto, una mano — di chi, resta tra voi e il sottoscala — passa sul banco con la leggerezza di chi ruba racchettonate a rete. Una **Boccata di Colore** sparisce nella tasca, tiepida come un sorso di luglio.

Vi allontanate dal banco con la disinvoltura atroce di cinque persone che fischiettano nello stesso momento.

> Natalino: *(a denti stretti)* "Abbiamo appena derubato una cosa con sei mani e un socio che si chiama RISCOSSORE. Sono orgoglioso e terrorizzato in parti uguali."

> Federico: "Tecnicamente è esproprio. I suoi prezzi erano criminali. È scienza."

Dietro di voi, il Mercante sta ancora litigando con la propria bilancia.

**(Rubata: una Boccata di Colore. Il conto, forse, arriverà.)**`,
    item: 'boccata_colore',
    sets: { furto_riuscito: true },
    choices: [
      { text: '↩️ Tornare al banco con la faccia più innocente del mondo', next: 'k6' },
    ],
  },

  k7b_fail: {
    location: 'mercante',
    caption: 'Il Riscossore — si srotola',
    text: `La mano arriva a metà banco. Poi il banco **suona** — una campanella d'ottone che nessuno ha toccato — e la cosa arrotolata accanto al Mercante apre un occhio. Poi un altro. Poi altri undici.

> Il Mercante: *(senza nemmeno voltarsi, riordinando la merce)* "Taccheggio. Che peccato. Io VENDO, non regalo: c'è differenza, e la differenza si chiama—"

> Il Riscossore: *(srotolandosi)* "**RISCOSSIONE.**"

Si srotola e si srotola e SI SROTOLA — era piegato come una manichetta perché da disteso non ci starebbe in nessuna stanza onesta: una colonna di giunture e guanti da lavoro, con un blocchetto di ricevute cucito nel petto e una penna legata a uno spago. Ogni ricevuta strappata fa il rumore di un osso piccolo.

> Il Riscossore: "Articolo uno: merce sottratta. Articolo due: disturbo alla quiete del banco. Articolo tre..." *(si china, e la lampada da campeggio trema)* "...gli INTERESSI."

> Emanuela: "Ragazzi, il monologo del regolamento. Questo lo conosco: o lo zittiamo noi o va avanti fino all'articolo quaranta."

**(Combattimento! Il Riscossore riscuote. Il Mercante guarda: per lui è solo amministrazione.)**`,
    combat: { enemies: ['mercante_guardia'], victory: 'k7c', defeat: 'k_ko' },
    choices: [],
  },

  k7c: {
    location: 'mercante',
    caption: 'Assunti — sconto del dieci per cento',
    text: `Il Riscossore crolla in ginocchio — che per lui vuol dire piegarsi in otto punti — e si riavvolge da solo, docile, fino a tornare la manichetta di prima. L'ultima ricevuta gli scivola dal petto: c'è scritto *"SALDATO"*.

Silenzio nel sottoscala. Poi il Mercante Grigio comincia ad applaudire. **Lento.** Una mano dopo l'altra, e ne ha parecchie, quindi l'applauso non finisce più: rimbalza tra le tubature come pioggia su un tetto di latta.

> Il Mercante: "Trent'anni. Sono TRENT'ANNI che nessuno mi stende il Riscossore. L'ultimo era un idraulico polacco, e barava." *(si sporge oltre il banco, tutta la faccia in avanti, raggiante nel modo peggiore)* "Siete ASSUNTI. Onorari. Niente turni, niente busta: solo lo **sconto del dieci per cento** e il mio rispetto, che qui sotto vale di più."

> Federico: "Abbiamo menato il buttafuori e ci hanno fatto la tessera fedeltà. Questo posto ha una logica di mercato che RISPETTO."

> Gaetano: "Fossi in noi non lo direi troppo forte, ma... sì. Anche io."

Il Riscossore, riavvolto nell'angolo, apre un occhio solo e ve lo tiene addosso. Non ostile. Da collega.

**(🎨 +2 Colore: avete vinto a casa d'altri, secondo le regole d'altri.)**`,
    gold: 2,
    choices: [
      { text: '↩️ Tornare al banco — da clienti stimati, stavolta', next: 'k6' },
    ],
  },

  /* ==================== LA GALLERIA DEI SONNAMBULI ==================== */

  k8: {
    location: 'galleria',
    caption: 'La Galleria dei Sonnambuli',
    text: `Oltre il banco, l'intercapedine si allarga in una sala lunga, e capite subito che qui bisogna abbassare la voce, come nei musei e negli ospedali. Perché è tutte e due le cose.

**Teche di vetro.** File e file di teche illuminate da dentro, e in ogni teca: una persona. In pigiama, in tuta, in vestaglia. Seduti su poltrone identiche, davanti a piccole TV che mandano tutte lo stesso canale — un programma grigio, in loop, che da fuori non si vede bene ed è meglio così. Respirano. Ogni tanto uno ride, piano, di niente. Sulle teche, targhette d'ottone: *"Via Respighi 4"*, *"Condominio Le Mimose"*, *"Casa singola, con giardino"*.

> Natalino: *(un filo di voce)* "Sono gli altri. Gli assimilati delle ALTRE case. Il demone... li colleziona qui sotto. Come le figurine."

E poi Claudia lo vede, e vi fermate tutti. Su una teca in fondo, incastonato nel meccanismo come una batteria, pulsa un **CUORE DI COLORE**. Vivo, caldo, una resurrezione in tasca. E il cavo del Cuore scende dritto dentro la teca: È LUI che tiene acceso il televisorino del sonnambulo là dentro — un signore sulla sessantina, pigiama a righe, che sorride piano al suo programma grigio.

> Gaetano: *(piano, da ingegnere, odiandosi)* "Se lo stacchiamo, la teca si spegne. E lui... si spegne con la teca. Guardate il quadro: non c'è alimentazione di riserva."

> Emanuela: "Quindi il prezzo di una resurrezione dei nostri è... lui."

Il sonnambulo, dentro il vetro, ride piano. Di niente.`,
    choices: [
      { text: '💗 Prenderlo. Serve ai vostri. *(sarà terribile)*', next: 'k8_prendi' },
      { text: '🧠 Gaetano studia il meccanismo: DEVE esserci un altro modo', tag: 'Prova di Intelligenza — CD 14', check: { stat: 'INT', dc: 14, success: 'k8b', fail: 'k8c' } },
      { text: '🚶 Lasciar stare. Non a questo prezzo. Verso il fondo della Galleria.', next: 'k9' },
    ],
  },

  k8_prendi: {
    location: 'galleria',
    caption: 'La teca spenta',
    text: `Lo fate. Lo fa Claudia, perché nessun altro ha alzato la mano, e qualcuno doveva.

Il Cuore di Colore si stacca dall'incastonatura con uno scatto morbido, e per un secondo la Galleria intera si abbassa di un tono, come quando salta la corrente in tutto il palazzo. La TV del sonnambulo fa un puntino bianco. Si spegne.

E il signore in pigiama a righe **si affloscia.** Non cade: si SVUOTA, piano, come un cappotto che scivola dalla gruccia. Il sorriso resta appeso alla faccia un secondo più del resto, e poi se ne va anche quello. La teca diventa una vetrina vuota con dentro un uomo che non ride più di niente, e non riderà mai più di qualcosa.

Nessuno parla. Il Cuore, in mano a Claudia, pulsa caldo e meraviglioso, e nessuno riesce a guardarlo.

> Claudia: "Ditemi che serviva. Qualcuno me lo dica, cazzo."

> Federico: "Serviva." *(pausa lunga)* "Non lo so se serviva. Ma se stanotte tocca a uno di noi, io questa cosa la rifarei, e mi odierei uguale."

> Natalino: "Camminiamo. Camminiamo e basta, per favore."

Vi rimettete in marcia. La targhetta della teca spenta dice: *"Casa singola, con giardino."* Chissà che giardino aveva.

**(Ottenuto: un CUORE DI COLORE. 🎨 -2 Colore: certi acquisti scoloriscono chi li fa.)**`,
    item: 'cuore_colore',
    goldLoss: 2,
    sets: { cuore_rubato_teca: true },
    choices: [
      { text: '🚶 Verso il fondo della Galleria, senza voltarsi', next: 'k9' },
    ],
  },

  k8b: {
    location: 'galleria',
    caption: 'Il bypass di Gaetano — "che anno è?"',
    stinger: 'item',
    text: `Gaetano gira intorno alla teca tre volte, in silenzio, col dito che segue i cavi. Poi si ferma, e chi lo conosce riconosce la faccia: è la faccia dei satelliti, quella che fa quando un problema smette di essere un problema e diventa uno schema.

> Gaetano: "Il Cuore non ALIMENTA la teca. La teca è un parassita: gli sta attaccata e succhia. Guardate il verso dei morsetti. Se io faccio un ponte QUI—" *(sfila il nastro isolante dalla tasca, e nessuno chiede perché ce l'avesse)* "—la teca crede di avere ancora la sua batteria, per i tre secondi che mi servono. E in quei tre secondi..."

Lo fa. Ponte, scatto, torsione da polso di racchettonaro professionista — e il **Cuore di Colore** gli si stacca in mano mentre la TV del sonnambulo fa una cosa che nessuna teca aveva previsto: **cambia canale.** Statico. Poi neve. Poi niente.

E il signore in pigiama a righe apre gli occhi.

Ci mette un minuto intero. Si guarda le mani, la vestaglia, il vetro. Gaetano apre la teca — non era nemmeno chiusa a chiave: tanto chi scappa, da un programma che piace? — e il sonnambulo mette fuori un piede, come si tasta l'acqua fredda. La prima cosa che dice, con una voce arrugginita da chissà quanto:

> Il sonnambulo: "...che anno è?"

> Emanuela: *(e le si rompe la voce a metà)* "Uno buono, signore. Uno buono. Venga, che fuori è meglio."

**(Ottenuto: un CUORE DI COLORE — e un uomo vivo. 🎨 +3 Colore: le due cose insieme. Solo Gaetano.)**`,
    item: 'cuore_colore',
    gold: 3,
    sets: { sonnambulo_salvato: true },
    choices: [
      { text: '🚶 Accompagnarlo verso il fondo della Galleria, dove c\'è il quadro elettrico', next: 'k9' },
    ],
  },

  k8c: {
    location: 'galleria',
    caption: 'L\'allarme — le teche si aprono TUTTE',
    stinger: 'jumpscare',
    text: `Il ponte di Gaetano regge due secondi. Al terzo, da qualche parte nel meccanismo, una cosa piccola fa *click* nel modo sbagliato — e la Galleria intera **si accorge di voi.**

Le luci delle teche passano dal bianco ospedale al rosso. Un allarme parte, ma non è una sirena: è un CORO — tutte le piccole TV che alzano il volume insieme, lo stesso programma grigio a tutto volume da cento teche, una risata registrata che rimbalza sulle vetrine come grandine.

E le teche **si aprono. TUTTE.**

I sonnambuli si alzano dalle poltrone senza svegliarsi. Escono in pigiama, in vestaglia, in ciabatte, gli occhi pieni di programma grigio, e si voltano verso di voi tutti nello stesso istante, con il sorriso di chi difende il televisore di casa.

> Natalino: "Non li voglio menare, sono NONNI—"

> Emanuela: "Sono nonni che ci vogliono mettere in poltrona PER SEMPRE, Natalino. Ginocchia basse e scusatevi mentre colpite."

> Claudia: "È la cosa più triste che farò in vita mia e lo faccio SUBITO."

**(Combattimento! I sonnambuli difendono il loro canale. Non svegliateli: fermateli.)**`,
    combat: { enemies: ['sonnambulo', 'sonnambulo', 'sonnambulo'], victory: 'k9', defeat: 'k_ko' },
    choices: [],
  },

  k9: {
    location: 'galleria',
    caption: 'Il quadro elettrico della Galleria',
    text: `In fondo alla Galleria, dietro l'ultima fila di teche, ronza un **quadro elettrico** alto come un armadio: file di interruttori d'epoca, etichette scritte a mano — *"TECHE 1-40"*, *"TECHE 41-80"*, *"LOOP"*, *"SONNO"* — e una leva grande, rossa, con sopra due parole che vi guardano:

*"SVEGLIA GENERALE."*

> Gaetano: "È il risveglio di TUTTI. Ogni teca, ogni sonnambulo, tutto il piano." *(segue i cavi col dito, e la faccia gli si fa seria)* "Ma non è una leva e via: il quadro è in tensione, i contatti sono marci, e se sbaglio la sequenza ci prendiamo la scarica noi. La casa non lascia maniglie gratis."

> Claudia: "E se funziona? Cento persone in pigiama, qui sotto, sveglie e incazzate?"

> Federico: "Cento persone in pigiama sveglie e incazzate CONTRO IL DEMONE, Claudia. È un esercito. Il peggior esercito mai visto, ma è un esercito."

> Natalino: "Io dico proviamo. Se stanotte finisce male, almeno finisce male in tanti. Che detto così fa schifo, però mi sono capito."

Il quadro ronza. Da qualche parte, dietro di voi, cento piccole TV mormorano lo stesso programma grigio, tutte insieme, come un rosario al contrario.`,
    choices: [
      { text: '⚡ Gaetano tenta la sequenza: sveglia generale', tag: 'Prova di Intelligenza — CD 12', check: { stat: 'INT', dc: 12, success: 'k9b', fail: 'k9c' } },
      { text: '🚶 Lasciare il quadro com\'è e risalire: si è visto abbastanza', next: 'k10' },
    ],
  },

  k9b: {
    location: 'galleria',
    caption: 'Sveglia generale',
    text: `Gaetano lavora in silenzio: tre interruttori giù, due su, il ponte col nastro isolante sul contatto marcio, e poi — la leva rossa, con tutte e due le mani.

**CLUNK.**

Le TV si spengono. Tutte. Cento puntini bianchi che muoiono insieme, e per un secondo la Galleria è solo buio e respiro. Poi le teche si aprono — piano, stavolta, senza allarme, come finestre di mattina — e i sonnambuli **si svegliano.**

Non tutti subito. Non tutti bene. C'è chi piange senza sapere perché, chi chiama un nome, chi si guarda le ciabatte come oggetti alieni. Una signora in vestaglia si avvicina al vetro, vi vede, e fa una cosa che nessuno qui sotto faceva da anni: vi **saluta con la mano.**

> La signora: "Scusate... avete visto che fine ha fatto il pomeriggio? Ne avevo uno, sono sicura."

> Emanuela: *(salutando a sua volta, con gli occhi lucidi)* "Glielo andiamo a riprendere, signora. Stiamo andando proprio lì."

E da tutta la Galleria, uno dopo l'altro, i risvegliati si voltano verso di voi. Non ostili. **In debito.** Qualcuno annuisce. Un signore in pigiama a righe si rimbocca le maniche del pigiama, il che non serve a niente ed è bellissimo.

> Federico: "Ve l'avevo detto. L'esercito in pigiama. Se stanotte serve una mano, questi se la ricordano, la leva rossa."

**(🎨 +2 Colore. Qualcosa ci dice che li rivedrete quando conterà davvero.)**`,
    gold: 2,
    sets: { sonnambuli_svegli: true },
    choices: [
      { text: '🧗 Risalire: la cucina, e poi il resto della notte', next: 'k10' },
    ],
  },

  k9c: {
    location: 'galleria',
    caption: 'La scarica — il quadro si difende',
    text: `Tre interruttori giù, due su, il ponte sul contatto marcio — e il contatto marcio **mente.** Sotto la crosta di ossido non c'è rame: c'è una cosa umida che aspettava una mano da stringere.

La scarica prende Gaetano al polso e passa per la cordata di mani che si erano allungate a tenerlo — perché vi tenete sempre, è il vostro difetto migliore — e per un secondo bianco e infinito la Galleria vi guarda ballare la peggiore tarantella della storia. Poi il quadro vi sputa via, tutti e cinque, seduti a terra coi capelli in stili nuovi e interessanti.

Sopra la leva rossa, con un ronzio soddisfatto, gli interruttori tornano da soli in posizione. Il quadro si BLINDA: uno sportello d'acciaio scende dove prima non c'era.

> Gaetano: *(contando le dita, per fortuna ancora dieci)* "Il quadro era esca fino al terzo contatto. La casa impara dai tentativi. Ha imparato da NOI."

> Natalino: *(con i capelli dritti come dopo il phon sbagliato)* "Da parrucchiere: questo look non lo salvo nemmeno io."

Dietro di voi, cento piccole TV mormorano il loro programma grigio, imperturbate. I sonnambuli dormono. Stanotte, per loro, non era la notte giusta.

**(-3 PV a tutto il gruppo. La Galleria resta addormentata.)**`,
    damage: 3,
    choices: [
      { text: '🧗 Risalire: la cucina, e poi il resto della notte', next: 'k10' },
    ],
  },

  k10: {
    location: 'sottoscala',
    caption: 'La risalita — le pareti si stringono',
    text: `Trovate la scala della botola e cominciate a risalire, e a metà scala lo capite tutti nello stesso momento: **la casa ha cambiato idea su di voi.**

Qui sotto avete imparato troppo. Il segnale delle lattine, il banco del Mercante, la leva rossa, il Trono. E le pareti dell'intercapedine — quelle vene di mattoni vivi — cominciano a **stringersi.** Non di colpo: con calma. Un centimetro alla volta, da tutte le parti, col rumore di una mandibola che si chiude per bene sul boccone.

> Emanuela: "SU. Su su su, uno alla volta ma VELOCI—"

Salite come si sale nei sogni brutti, coi pioli che diventano molli sotto le mani e il respiro del buio che adesso non è più lento: è **interessato.** Un tubo-vena scoppia accanto alla testa di Federico e schizza sulla parete qualcosa di denso che è meglio non guardare; Natalino, ultimo della fila, sente le pareti sfiorargli le spalle da entrambi i lati — due dita di margine, poi una.

> Natalino: "SPINGETE CHI STA SOPRA, IO HO FINITO I CENTIMETRI—"

Claudia e Gaetano lo agguantano per i polsi e lo strappano fuori dalla botola nell'istante esatto in cui l'intercapedine si chiude sotto di lui con uno schiocco umido, definitivo, da bocca che ha perso il boccone.

Sdraiati sul pavimento della cucina fredda, a pancia in su, ansimando. La botola sotto il tappeto non c'è più: solo piastrelle. Ma quello che avete imparato là sotto, quello risale con voi.

**(🎨 +1 Colore. La via della cucina è vostra: ora sapete cosa nutre la casa, e dove dorme il suo padrone.)**`,
    gold: 1,
    sets: { via_cucina: true },
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
    ],
  },

  /* ==================== SCONFITTA ==================== */

  k_ko: {
    location: 'sottoscala',
    caption: 'Riscossi e rivenduti',
    text: `Il buio, e nel buio una voce che compila moduli.

> Il Riscossore: "...cinque unità, usurate ma funzionanti. Valore di realizzo: modesto. Sentimentale: alto. Firmi qui il padrone, che io una firma la voglio sempre."

Vi svegliate **al piano di sopra**, sul pavimento della cucina fredda, disposti in fila ordinata come merce resa. Addosso avete cartellini del prezzo, scritti a mano, appesi col filo: sul vostro c'è una cifra e poi, sbarrata, una cifra più bassa. Siete stati SCONTATI.

> Federico: *(strappandosi il cartellino)* "Ci ha riscossi. Ci ha RISCOSSI e RIVENDUTI alla casa. Come i vuoti a rendere. Io quel gilet ambulante lo denuncio all'antitrust degli inferi, giuro su ogni birra che ho."

> Emanuela: "Però ci ha rivenduti INTERI, notare. Poteva farci a rate."

Sul pavimento, accanto alla testa di Gaetano, un biglietto con la grafia fitta del Mercante: *"Niente di personale: il vostro Colore l'ho trattenuto come penale, il resto ve lo lascio. Siete merce che si rialza — è la qualità che preferisco, nei clienti. Torni chi vuole: lo sconto regge."*

Vi rialzate. Perché è quello che fa, la vostra qualità.

**(PV al massimo. 🎨 -2 Colore, trattenuti "come penale".)**`,
    fullHeal: true,
    goldLoss: 2,
    choices: [
      { text: '⚔️ Tornare giù e finire quello che vi ha steso', next: 'RETRY_COMBAT' },
      { text: '↩️ Riprendere fiato dalla cucina fredda', next: 'k1' },
    ],
  },

};

/* ============================================================
   BLOCCO D — REGISTRO FLAG, ITEM E MORTI

   FLAG IMPOSTATI → CONSUMATORE PREVISTO:
   - daniele_sabota (k1)      → eco nel boss finale (Daniele sabota da dentro) + voce di diario
   - parmigiana_daniele (k1b) → impresa/cronaca/diario (momento cuore)
   - luca_promosso (k2c)      → impresa/cronaca/diario ("promosso un demone")
   - birre_ritrovate (k3)     → impresa/cronaca/diario (Federico commosso)
   - segreto_trono (k7)       → FINALE: sblocca la scelta sul Divano-Trono (Eleinad vulnerabile)
   - furto_riuscito (k7b)     → impresa/cronaca/diario ("derubato il Mercante Grigio")
   - cuore_rubato_teca (k8_prendi) → impresa/cronaca/diario (il prezzo pagato dal sonnambulo)
   - sonnambulo_salvato (k8b) → impresa/cronaca/diario (il bypass di Gaetano, "che anno è?")
   - sonnambuli_svegli (k9b)  → eco nel boss finale (i risvegliati arrivano ad aiutare)
   - via_cucina (k10)         → gate d'accesso allo snodo m1

   ITEM DATI:
   - k1b: (nessun item — heal+flag) · k3: accendino_bbq, ipa_gaetano (+birra_limone da scelta once)
   - k6 (negozio): boccata_colore 3🎨 · lattina_zero 2🎨 · lattina_agitata 2🎨 ·
     cassa_bluetooth 4🎨 · cuore_colore 12🎨+tronello (once, requires tronello)
   - k7b: boccata_colore (furto) · k8_prendi: cuore_colore · k8b: cuore_colore

   MORTI VERE POSSIBILI:
   - k4_morte (killRoller: la calata — FOR CD 13 fallita)

   USCITE DAL BLOCCO: solo h1 (da k10).
   COMBATTIMENTI: k2b (luca_giunti) · k7b_fail (mercante_guardia) ·
   k8c (sonnambulo x3) — tutti con defeat → k_ko (fullHeal, goldLoss 2, RETRY_COMBAT).
   ============================================================ */

/* ============ BLOCCO E — LO SNODO (Sala della Switch) + IL FINALE (Cattedrale del Grigiore) + EPILOGHI ============
   Ingressi: m1 (dall'hub h1), z1 (da m9). Nessuna uscita fuori dal blocco: gli epiloghi chiudono. */

const SCENE_E = {

  /* ==================== SNODO m* — LA SALA DELLA SWITCH ==================== */

  m1: {
    location: 'sala_switch',
    caption: 'La porta della Sala della Switch — lo schermo al posto del mondo',
    text: `La porta si apre su una parete che non è una parete: è uno SCHERMO. Enorme, curvo, senza cornice, dal pavimento al soffitto — e trasmette Daniele.

Daniele che sorride. Daniele che beve una cola senza marca, l'etichetta un rettangolo grigio con scritto COLA. Daniele che vince a Mario Kart su una pista senza avversari: taglia il traguardo primo su uno, e il gioco applaude lo stesso. Poi il loop ricomincia. Sorriso. Cola. Vittoria vuota. Sorriso. Cola. Vittoria vuota.

> Claudia: "Guardate gli occhi. Il resto della faccia sorride, gli occhi NO. Ho visto rendering migliori nelle pubblicità dei materassi."

> Federico: *(piano, per la prima volta stanotte davvero piano)* "Quella non è la vita di mio fratello. È il TRAILER della vita di mio fratello. Fatto da qualcuno che lo odia."

> Gaetano: "È una gabbia. Gli trasmettono una vita finta abbastanza comoda da non voler controllare se è vera."

> Emanuela: "Allora si spegne. Stanotte si spegne TUTTO, qua dentro."

Sullo schermo, il Daniele finto beve un altro sorso di niente. Da qualche parte oltre quella parete di luce c'è quello vero.

> Natalino: "Andiamo a cambiare canale."`,
    choices: [
      { text: '📺 Oltre lo schermo: dentro la Sala della Switch', next: 'm2' },
    ],
  },

  m2: {
    location: 'sala_switch',
    caption: 'La Sala della Switch — il cuore dell\'impianto',
    text: `Oltre lo schermo, la sala. Ed è sbagliata in un modo nuovo.

I cavi non corrono lungo le pareti: le ATTRAVERSANO, dentro e fuori dall'intonaco come radici in cerca d'acqua. HDMI spessi come polsi, pulsanti sottopelle, e il pavimento — la moquette — si alza e si abbassa. Piano. Regolare. Respira.

> Natalino: "La moquette respira. La moquette RESPIRA. Lo dico ad alta voce così poi non potete dire che non l'avevo fatto notare."

> Gaetano: "Respira, e tutti i cavi vanno nella stessa direzione. Convergono. Là in fondo."

Là in fondo, su una pedana di cuscini fusi insieme, c'è IL DIVANO-TRONO. Tre posti diventati uno solo, i braccioli cresciuti in braccioli di cattedra, lo schienale alto come un altare. E sopra il trono, avvolto in qualcosa di grigio che luccica di bagnato, c'è una forma.

Una forma seduta. Delle dimensioni di un amico.

> Federico: *(già camminando)* "Daniele."

> Emanuela: "Federico, ASPETTA—"

Non aspetta. Nessuno di voi aspetta, in realtà: attraversate la moquette che respira tutti insieme, e la moquette, sotto i vostri passi, trattiene il fiato.`,
    choices: [
      { text: '🏃 Al trono. Di corsa.', next: 'm3' },
    ],
  },

  m3: {
    location: 'trono',
    caption: 'Il Divano-Trono — il bozzolo',
    stinger: 'jumpscare',
    text: `È Daniele. Ed è dentro un BOZZOLO.

Filamenti grigi, lucidi, tesi come corde di violino, lo avvolgono dal petto in giù, fusi coi cuscini del trono. Un cavo HDMI — spesso, caldo, PULSANTE — gli entra nella base del collo, sotto l'attaccatura dei capelli, dove un cavo non dovrebbe entrare mai: la pelle intorno si è richiusa sopra la guaina come una gengiva su un dente. Gli occhi sono aperti e seguono lo schermo. La faccia è piatta. La faccia è quella del loop.

> Federico: "Ok. Ok. Porca puttana. OK." *(non è ok)*

> Emanuela: "Non toccate il cavo. Se è innestato lì, strapparlo a caso è la cosa peggiore che—"

> Claudia: "ZITTI. Zitti zitti zitti. Guardate la mano."

La mano destra. Le dita battono sul bracciolo. Non un tremito: un RITMO. Corto-lungo, pause, di nuovo. Claudia si inginocchia, il telefono già fuori — ha lo screenshot del corso di Morse che fece per gioco due estati fa, ovvio che ce l'ha.

> Claudia: "Punto linea linea linea... J. Poi O. Y... C... O... N." *(alza la testa)* "JOY-CON. Sta scrivendo JOY-CON. È SVEGLIO. È sveglio là sotto e ci sta dicendo come aprirlo."

> Gaetano: "La casa è una console. E lui ci sta passando il controller."`,
    choices: [
      { text: '🎮 Accoppiare il joy-con sinistro alla console del bozzolo', requires: { item: 'joycon_sinistro' }, next: 'm4' },
      { text: '🔪 Tagliare il bozzolo a mano, filamento per filamento', next: 'm5_sacrificio' },
      { text: '🔍 Cercare un\'altra via: cavi, prese, punti deboli', once: true, tag: 'Prova di Intelligenza — CD 13', check: { stat: 'INT', dc: 13, success: 'm4b', fail: 'm4c' } },
    ],
  },

  m4: {
    location: 'sala_switch',
    caption: 'Il joy-con sinistro — PAUSA',
    sets: { bozzolo_pausa: true },
    text: `Il joy-con sinistro — quello trovato nelle viscere della casa, quello che Daniele ha nascosto per voi — vibra appena lo avvicinate al trono. Si sta cercando col suo gemello. Come tutti, qua dentro.

> Gaetano: "La casa è una console. E le console hanno una regola sacra, universale, più vecchia del Grigiore."

> Federico: "Il tasto PAUSA."

Lo premete insieme, il pollice di Federico sopra quello di Gaetano.

Il mondo fa CLIC.

La moquette smette di respirare a metà respiro. Lo schermo-parete si congela sul Daniele finto con la cola a mezz'aria. I cavi nelle pareti si afflosciano tutti insieme, come vene senza pressione. E il bozzolo — il bozzolo si APRE, dall'alto in basso, con un suono di velcro bagnato che vi resterà nelle orecchie per anni: filamento dopo filamento che si stacca dalla pelle portandosi via un luccichio grigio, il cavo HDMI che scivola fuori dal collo con un risucchio osceno e ricade morto sui cuscini.

> Natalino: "Che schifo. Che schifo MERAVIGLIOSO."

> Emanuela: *(già avanti, garze in mano)* "Prendetelo. PRENDETELO, sta venendo giù—"

La forma dentro il bozzolo si piega in avanti, verso di voi, fuori dalla luce dello schermo.`,
    choices: [
      { text: '🤲 Prenderlo al volo', next: 'm6' },
    ],
  },

  m4b: {
    location: 'sala_switch',
    caption: 'Il cavo vero — e la casa se ne accorge',
    text: `Gaetano segue i cavi come si segue uno schema elettrico: scarta i finti — troppo puliti, troppo in vista, ESPOSITIVI — e trova, sotto la pedana del trono, mimetizzato tra dodici gemelli identici, l'unico che è CALDO.

> Gaetano: "Eccolo. Alimentazione vera. Gli altri sono scenografia." *(lo afferra con due mani)* "Questo lo stacco di netto. Ingegneria irpina: se non sai cosa fa un cavo, è colpa di chi non l'ha etichettato."

> Claudia: "Aspetta, se lo stacchi la casa lo sente—"

> Gaetano: "La casa lo sente COMUNQUE."

STRAPPO. Una scintilla grigia, un odore di polvere bruciata, e il bozzolo si affloscia di un terzo — i filamenti si allentano, il cavo nel collo di Daniele perde pressione. Sta funzionando.

Poi il soffitto si muove.

Qualcosa di lungo, nero, con un solo tasto rosso grande come un piatto, si SROTOLA dai cavi lassù come una serpe che ha finito di dormire. Il tasto si accende. C'è scritto qualcosa, e leggerlo fa male ai denti: **CONTINUA A GUARDARE**.

> Natalino: "Il telecomando. Il telecomando di due metri e mezzo. Certo. CERTO. Perché no."`,
    choices: [
      { text: '⚔ Difendere il bozzolo', next: 'm5' },
    ],
  },

  m4c: {
    location: 'sala_switch',
    caption: 'La casa vi anticipa',
    stinger: 'jumpscare',
    text: `Cercate un'altra via. Il problema è che la casa vi guarda cercare.

Ogni cavo che Gaetano tocca smette di essere caldo un secondo prima delle sue dita. Ogni presa che Claudia fotografa si richiude nell'intonaco come una bocca offesa. La casa sposta i suoi organi mentre la operate, e lo fa con la calma stronza di chi ha tutto il tempo del mondo.

> Gaetano: "Non ha senso. Lo schema si RISCRIVE. Non posso trovare il punto debole di una cosa che—"

Il soffitto risponde per lui.

Si srotola dai cavi come una serpe sazia che avete svegliato voi: due metri e mezzo di telecomando universale, gomma nera e pancia di pile, un solo tasto rosso grande come un piatto che si accende a un palmo dalla faccia di Natalino: **CONTINUA A GUARDARE**.

> Natalino: "No grazie, ho già visto tutto." *(forbici fuori)* "PROGRAMMA DI MERDA."

> Emanuela: "Intorno al trono! Nessuno si spegne stasera, e MENO CHE MAI lui!"`,
    choices: [
      { text: '⚔ Combattere il Guardiano del Bozzolo', next: 'm5' },
    ],
  },

  m5: {
    location: 'trono',
    caption: 'Il Guardiano del Bozzolo',
    text: `Il Guardiano cala dal soffitto e atterra tra voi e il trono con un tonfo di gomma piena. Da vicino è peggio: la plastica ha i pori, i tasti piccoli lungo il corpo sono UNGHIE, e dallo sportellino delle pile cola qualcosa che le pile non contengono.

Punta il tasto rosso addosso a Federico, e la stanza si riempie di un ronzio che sa di pomeriggi persi. Sul bozzolo, alle sue spalle, le dita di Daniele hanno ripreso a battere il Morse: stavolta è una parola sola, ripetuta, e Claudia non ha nemmeno bisogno dello screenshot per tradurla. F-O-R-Z-A.

> Federico: "Io NON continuo a guardare un cazzo. È il finale di stagione, brutto stronzo: e mio fratello esce in questa puntata."

> Claudia: "Racchettoni ALTI. Gaetano: come in spiaggia. Quello è solo un telecomando cresciuto male — e noi le cose che volano le SCHIACCIAMO."

**(Difendete il bozzolo: Daniele è a due metri da voi.)**`,
    combat: { enemies: ['bozzolo_guardiano'], victory: 'm6', defeat: 'm_ko' },
  },

  m5_sacrificio: {
    location: 'trono',
    caption: 'I filamenti — il prezzo del taglio',
    text: `Da vicino, i filamenti dicono la verità: non si tagliano da fuori. Sono tesi DALL'INTERNO, ancorati sotto la pelle del bozzolo come tiranti — le forbici di Natalino scivolano sopra senza morderli, e ogni tentativo li fa stringere di un giro attorno al petto di Daniele.

> Natalino: "Si aprono solo da dentro. C'è lo spazio: uno di noi entra tra i filamenti, arriva alle ancore e le molla una a una."

> Emanuela: "E il Grigiore se lo prende. Chi entra là dentro, la casa lo PRENDE — è la sua bocca, è ovvio che è la sua bocca."

> Claudia: "Quindi uno di noi si spegne perché lui si riaccenda."

> Federico: *(guardando il fratello, poi voi, poi il fratello)* "Ditemi voi. Perché io una risposta ce l'ho, e non è obiettiva per niente."

La mano di Daniele, sul bracciolo, ha smesso di battere il Morse. Aspetta anche lui.

**(Chi entra apre il bozzolo da dentro — e ci resta, come Spirito, finché un Cuore di Colore non lo riporta.)**`,
    choices: [
      { text: '🕯 Qualcuno entra nei filamenti.', sacrifice: true, sacrificeSets: 'entrato_bozzolo', sacrificeTitle: 'Chi entra nei filamenti?', sacrificeText: 'Chi entra apre il bozzolo da dentro. E ci resta, come spirito, finché un Cuore di Colore non lo riporta. Decidete insieme.', next: 'm6_sacrificio' },
      { text: '↩ No. Troviamo un altro modo. Indietro.', next: 'm3' },
    ],
  },

  m6_sacrificio: {
    location: 'trono',
    caption: 'Il bozzolo si apre da dentro',
    sets: { bozzolo_aperto: true },
    text: `Chi entra, entra piano. I filamenti si aprono per accoglierlo — la casa non è mai stata così gentile, ed è la cosa più oscena che le avete visto fare.

Da fuori vedete le mani muoversi nel grigio: una ancora mollata, due, tre. Il bozzolo si allenta. Il cavo scivola fuori dal collo di Daniele. E intanto il grigio SALE lungo le braccia di chi è dentro, come acqua in una spugna, e nessuno di voi riesce a dire niente perché qualunque cosa direste sarebbe "esci", e uscire adesso significherebbe richiudere tutto.

L'ultima ancora cede. Il bozzolo si spalanca con un suono di velcro bagnato.

E chi è entrato non esce. Ne esce la sua FORMA: un contorno di luce bassa, in piedi accanto al trono, che guarda Daniele rovesciarsi in avanti tra le vostre braccia — vivo, libero, FUORI.

Lo spirito sorride. Si guarda le mani che non pesano più, poi voi, poi il bozzolo vuoto.

> Lo spirito: "Visto? Bastava leggere le istruzioni dal lato di dentro." *(un mezzo passo indietro, nella luce)* "Ora rimettetelo in piedi. E poi venite a riprendermi, eh. Non è che qua si sta MALE... ma il finale voglio vederlo coi miei occhi."

Nessuno risponde. Rispondere adesso vorrebbe dire piangere, e non c'è tempo.`,
    choices: [
      { text: '🤲 Prendere Daniele mentre viene giù', next: 'm6' },
    ],
  },

  m6: {
    location: 'trono',
    caption: 'La liberazione',
    stinger: 'victory',
    unlockHero: 'daniele',
    text: `Daniele viene giù dal trono come un uomo che scende da un aereo dopo dodici ore: piegato, pallido, le gambe che ricordano male il mestiere. Emanuela lo prende per un braccio, Federico per l'altro. Apre la bocca. Tossisce grigio.

E la prima cosa che dice — la PRIMA, dopo tre giorni nel bozzolo — non è "grazie".

> Daniele: "Una Zero. SUBITO."

> Natalino: *(voce rotta e risata insieme)* "È lui. È lui, porca puttana, è LUI."

Poi l'abbraccio. Tutti e sei, uno sopra l'altro, sopra il divano-trono di un demone, e non è elegante e non è breve. Claudia piange e giura di no. Emanuela conta le costole di Daniele A PELLE, per lavoro. Gaetano tiene il perimetro guardando la porta, il che è il suo modo di abbracciare.

Per ultimi, i gemelli. Federico e Daniele si guardano — stessa faccia, tre giorni di terrore da una parte e tre giorni di bozzolo dall'altra.

> Federico: "Il bozzolo andava aperto dal basso. L'ho capito subito."

> Daniele: "Dal basso morivo. Si apriva ESATTAMENTE come l'avete aperto."

> Federico: "Lo dici perché è andata bene."

> Daniele: "Lo dico perché ho ragione. Come sempre. Da trentadue anni."

E lì, a metà lite, ridono. Tutti e due, insieme, la stessa risata — ed è il suono più a colori che questa casa abbia mai contenuto.

**(DANIELE si unisce al gruppo!)**`,
    choices: [
      { text: '🥤 Dargli la Zero. Ce l\'avete. L\'avete portata fin qui.', once: true, requires: { item: 'lattina_zero' }, removeItem: 'lattina_zero', sets: { zero_bevuta: true }, gold: 1, next: 'm7' },
      { text: '🗣 "La Zero dopo. Prima: che cazzo sta succedendo?"', next: 'm7' },
    ],
  },

  m7: {
    location: 'sala_switch',
    caption: 'Il briefing di Daniele',
    gold: 2,
    sets: { dentro_eleinad: true },
    text: `Se gli avete dato la Zero, l'ha scolata in quattro secondi, occhi chiusi, come un rito. Comunque sia: quando riapre la bocca, il Daniele che parla è LUI al settanta per cento e sale.

> Daniele: "Briefing. Tre giorni fa mi si presenta in casa una cosa con la mia faccia. Non l'ho invitata: le cose così non chiedono, ASPETTANO che smetti di chiudere le porte. Mi mette nel bozzolo. Errore suo: dal bozzolo si accede all'impianto. Tre giorni che gli giro nei fusibili — il joy-con l'ho nascosto io, le lattine in fila le ho messe io, e ogni volta che una porta vi si apriva al momento giusto... prego."

> Claudia: "Lo SAPEVO che i segnali erano tuoi. Ho gli screenshot."

> Daniele: "Il demone si chiama come me, letto allo specchio. Eleinad. È un parassita-riflesso: non è la mia anima, non è il mio lato oscuro, niente poesia — è una SANGUISUGA con una laurea in retorica presa copiando. Da me." *(si alza in piedi, quasi dritto)* "Ah. Una cosa. Questa non è casa mia."

Silenzio.

> Daniele: "Casa mia è finita tre giorni fa. Sessanta metri quadri, finivano eccome. Guardatevi intorno: la moquette respira. I cavi sono vene. Il divano è un trono perché è il CUORE." *(vi guarda, uno a uno)* "Siamo DENTRO di lui. E lui lo sa, che l'abbiamo capito. Sta arrivando."`,
    choices: [
      { text: '⚔ Che venga.', next: 'm8' },
    ],
  },

  m8: {
    location: 'sala_switch',
    npc: ['eleinad'],
    caption: 'Eleinad — a trono vuoto',
    stinger: 'campana',
    text: `Arriva dal pavimento. La moquette si gonfia, si apre, e lo partorisce in piedi, già vestito, già in posa.

Ha ancora la faccia di Daniele. E per la prima volta da quando lo conoscete, NON SORRIDE.

> Eleinad: "Fuori. Dal mio. Trono." *(la voce è sbagliata, le vocali durano troppo)* "Tre giorni a prepararlo. Tre giorni di marinatura nel comfort, e voi me lo scodellate via che è ancora CRUDO. Lo sapete quanto ci vuole a spegnere uno che legge i saggi PER PIACERE?"

> Daniele: *(di fianco a voi, braccia incrociate, guardando la propria faccia addosso a un'altra cosa)* "Portala male, la mia faccia. STIRATELA, almeno. Guarda lì, hai il sorriso storto — io il sorriso ce l'ho ASIMMETRICO, che è diverso, chiedi a mia madre."

> Eleinad: "Tu. TU. Ti ho dato la vita perfetta—"

> Daniele: "Mi hai dato un LOOP di sette secondi con una cola FINTA. Io bevo Zero, disgraziato. Manco il product placement sai fare."

Eleinad ringhia — e il ringhio ha le voci di tutti quelli che avete deluso, tutte insieme, ed è la cosa peggiore che avete sentito stanotte.

> Emanuela: "Ha finito di parlare. Phon."`,
    combat: { enemies: ['eleinad_maschera'], victory: 'm9', defeat: 'm_ko' },
  },

  m9: {
    location: 'sala_switch',
    caption: 'La maschera cade',
    gold: 2,
    text: `Il colpo che lo piega è uno solo, ma la caduta è lunga.

Eleinad barcolla, si porta le mani alla faccia — e la faccia di Daniele SI STACCA. Non strappata: si scolla dai bordi come cellophane da un piatto ancora caldo, arriccia, e viene via intera, appesa alle sue dita come una cosa che si butta.

Sotto, niente.

Non buio: NIENTE. Un buco a forma di persona, un ritaglio nell'aria dove una persona dovrebbe stare — e il buco URLA. Urla con le voci di tutti quelli che avete deluso: un cliente di Federico, uno studente di Gaetano, la madre di qualcuno, voi stessi da piccoli. Claudia si tappa le orecchie. Non serve: le voci non passano dalle orecchie.

Poi il buco si volta e FUGGE — verso il basso, attraverso la moquette, giù nel profondo della casa che è il profondo di sé, e la faccia di Daniele resta a terra, vuota, a sorridere al soffitto.

> Daniele: *(la guarda a lungo. Poi la scavalca.)* "Tenetela pure, i complimenti alla maschera. Noi andiamo a prendere l'ORIGINALE."

Dove il buco è passato, la moquette è morta: una scala a chiocciola di molle e imbottitura scende nel buio, e dal fondo sale un odore di polvere e di domeniche perse.

> Federico: "Fino in fondo, allora. Famiglia al completo."`,
    choices: [
      { text: '🌀 Scendere: verso la Cattedrale del Grigiore', next: 'z1' },
    ],
  },

  m_ko: {
    location: 'sala_switch',
    caption: 'Lo schermo vince un round',
    stinger: 'defeat',
    fullHeal: true,
    goldLoss: 2,
    text: `Il colpo che vi stende non fa male: fa SONNO. È questo il trucco, ed è per questo che funziona.

Vi risvegliate sulla moquette, in fila ordinata, le teste tutte girate verso lo schermo-parete — la casa vi ha SISTEMATI, come si sistemano i telecomandi sul bracciolo. Sullo schermo, il loop ha aggiunto una scena: ci siete anche voi, adesso, seduti sul divano accanto al Daniele finto, con dei sorrisi che non vi appartengono.

> Emanuela: *(già in piedi, già furiosa, già con le garze in mano)* "In piedi. IN PIEDI, ho detto. Guardatemi: nessuno si spegne stasera. Ho i cerotti, ho la piastra carica, e ho una FILA di gente lunedì — quindi questa storia la chiudiamo STANOTTE."

> Natalino: *(rialzandosi, spolverandosi il grigio di dosso come forfora)* "E poi l'avete visto il montaggio? Quei sorrisi non sono NOSTRI. Io sorrido MEGLIO. Andiamo a farci rimborsare."

**(Un po' di Colore se n'è andato nello schermo. Il resto ve lo riprendete.)**`,
    choices: [
      { text: '⚔ Di nuovo addosso', next: 'RETRY_COMBAT' },
      { text: '↩ Riprendere fiato dall\'ingresso della sala', next: 'm2' },
    ],
  },

  /* ==================== FINALE z* — LA CATTEDRALE DEL GRIGIORE ==================== */

  z1: {
    location: 'cattedrale',
    caption: 'La Cattedrale del Grigiore',
    stinger: 'campana',
    text: `La scala finisce e il soffitto se ne va: siete in una NAVATA.

Divani. Centinaia di divani, fusi insieme come cera, allineati in file da chiesa — panche di velluto stanco che digradano verso l'altare. Al posto delle vetrate, televisori: alti dieci metri, accesi su canali che non esistono, e la luce che ne cade è quella dei pomeriggi in cui fuori piove e dentro non si accende nessuno. Da qualche parte, un organo suona una sigla. La riconoscete tutti. Nessuno ricorda di cosa.

> Natalino: "Una chiesa fatta di domeniche buttate. Io qua non mi ci siedo manco morto — e stanotte la frase ha un peso, quindi la ritiro."

> Gaetano: "Il cuore. Tutti i cavi della casa partivano da qui."

In fondo, sull'altare, C'È.

Non seduto: DEPOSTO, come una cosa in un espositore. Il buco a forma di persona, più grande adesso, più fondo — e attorno al ritaglio, il Grigiore gli fa da mantello, aggrappato ai bordi del niente.

> Daniele: *(piano)* "Casa sua. Anzi no: LUI. Camminiamo sul suo pavimento, respiriamo la sua aria. Ricordatevelo tra un minuto, quando vi offrirà qualcosa: qua dentro, anche la GENTILEZZA è un organo suo."

Il buco si accorge di voi. E la sigla, dall'organo, si ferma a metà nota.`,
    choices: [
      { text: '🚶 Percorrere la navata, fino all\'altare', next: 'z2' },
    ],
  },

  z2: {
    location: 'cattedrale',
    caption: 'L\'altare — l\'ultima trattativa',
    text: `La voce di Eleinad non esce dal buco: esce dai TELEVISORI, tutti insieme, ognuno con un timbro di qualcuno che conoscete.

> Eleinad: "Fermi lì. Parliamo. È l'ultima offerta, e le ultime offerte sono le più oneste: chiedete a qualunque commerciante in chiusura." *(il buco si allarga di un millimetro)* "Vi ho guardati, stanotte. Siete stanchi. STANCHISSIMI. E io sono l'unico, nell'universo intero, che non vi chiederà mai di essere all'altezza. Sedetevi. Le panche sono comode. La programmazione è infinita. Nessuno — sentite bene — NESSUNO vi chiederà mai più niente."

E la cosa oscena è che per un secondo — un secondo — suona BENE.

> Daniele: *(a mezza voce, senza staccare gli occhi dal buco)* "Eccolo. Il tavolo da gioco. Scegliete l'arma, io copro qualunque puntata."

> Federico: "Le trattative sono il mio mestiere, coso. E la prima regola è: chi ha fretta di chiudere, sta perdendo."

Il Grigiore attorno al buco si increspa. Aspetta la vostra mossa.`,
    choices: [
      { text: '🗣 "Smontiamolo. Pezzo per pezzo." — la via della Parola', requires: { hero: 'daniele', item: 'manuale_annotato' }, next: 'z3' },
      { text: '👥 "Federico. Daniele. La foto." — la via dei Gemelli', requires: { flag: 'foto_ricomposta', flag2: 'segreto_gemelli', hero: 'daniele' }, next: 'z6' },
      { text: '⚔ "Basta parlare." — la via della Forza', next: 'z7' },
      { text: '🕯 Ascoltare l\'offerta fino in fondo', next: 'z9' },
      { text: '👻 "I morti non ti temono." — la scelta degli Spiriti', requires: { spirit: true }, next: 'z2b' },
    ],
  },

  z2b: {
    location: 'cattedrale',
    caption: 'Gli spiriti attraversano il Grigiore',
    gold: 2,
    sets: { eleinad_vacilla: true },
    text: `Chi di voi è luce si stacca dal gruppo. E cammina verso l'altare.

Eleinad si ritrae — SI RITRAE, il buco che si stringe ai bordi come una pupilla nella luce — perché il Grigiore ha potere su chi ha qualcosa da perdere, e uno spirito ha già pagato tutto.

> Lo spirito: "Tranquillo. Non mordo. Non ho più niente per mordere." *(entra nel ritaglio. Lo ATTRAVERSA. Ne riemerge dall'altra parte, lentissimo, come chi esce da un lago)* "Interessante, casa tua. Il retro, intendo."

Torna da voi. E riferisce, con la calma di chi non ha più fretta di niente:

> Lo spirito: "Là dentro è VUOTO, ma non vuoto e basta: vuoto SPAVENTATO. Si regge tutto su una cosa sola: che voi crediate che sia pieno. I bordi del buco tremano quando non gli credete. Guardateli, i bordi, mentre parlate con lui: sono il suo battito. Mira lì. Qualunque arma scegliate: mira ai BORDI."

I televisori sfarfallano tutti insieme. Per la prima volta, la voce di Eleinad esce con mezzo secondo di ritardo.

> Eleinad: "...i morti non fanno testo."

> Lo spirito: "I morti fanno SOLO testo, tesoro. Chiedi in giro."`,
    choices: [
      { text: '↩ Tornare dal gruppo: la mossa adesso è vostra', next: 'z2' },
    ],
  },

  z3: {
    location: 'cattedrale',
    caption: 'Il Duello Finale — primo assalto',
    text: `**🗣 DUELLO DI PAROLE**

Daniele apre il manuale annotato — il SUO manuale, tre colori di sottolineature — e lo posa sull'ultima panca come un ferro chirurgico. Eleinad attacca per primo, dai televisori, con la voce ragionevole di un professore stanco:

> Eleinad: "Ah, il manuale. Certo. Perché è questo che siete venuti a dirmi, no? Che la vita è TUTTA fatica e chi si riposa è un fallito. Che chi passa una domenica sul divano è un verme. Guardateli, i vostri apostoli della produttività: vietato sedersi, vietato respirare, vietato un pomeriggio di pace — questa è la vostra proposta? Io almeno OFFRO qualcosa. Loro offrono la frusta."

Le panche scricchiolano in segno d'assenso. Un televisore applaude.

> Daniele: *(piano, a voi, indicando il manuale senza aprirlo)* "Sentito? Io non ho mai detto niente del genere. Ha costruito un pupazzo con la mia paglia e sta menando IL PUPAZZO. Il nome del trucco lo sapete: chiamatelo per nome e guardatelo cadere."

**(Riconoscete la fallacia. Una sola risposta è giusta: si vince ragionando, non tirando.)**`,
    choices: [
      { text: '🗣 "STRAWMAN. Argomento fantoccio: attacchi una cosa che nessuno ha detto."', next: 'z4' },
      { text: '🗣 "AD HOMINEM. Attacchi noi invece dell\'argomento."', once: true, next: 'z3_colpo' },
      { text: '🗣 "RIPROVA SOCIALE. Le panche che annuiscono non sono un pubblico."', once: true, next: 'z3_colpo' },
    ],
  },

  z3_colpo: {
    location: 'cattedrale',
    caption: 'Il contraccolpo — primo assalto',
    damage: 4,
    text: `Nome sbagliato. E il Grigiore lo SA prima che finiate la frase.

L'aria della navata si fa spessa, e l'argomento fantoccio — mai smontato, ancora in piedi — vi crolla addosso con tutto il suo peso di paglia bagnata: per un istante ci CREDETE, che siete gli apostoli della frusta, che chi ama il divano vi fa schifo, che Daniele in fondo lo giudicavate. È falso. Lo sapete che è falso. Ma il falso, qua dentro, ha i denti.

> Eleinad: *(dai televisori, dolcissimo)* "Visto? Non sapete nemmeno VOI cosa state difendendo."

> Daniele: *(una mano sulla spalla di chi ha parlato, la voce ferma)* "Respira. Ha vinto lo scambio, non la partita. Torna sulla domanda giusta: non 'ha ragione?' — ma 'sta rispondendo a una cosa che abbiamo DETTO?' Riguarda il suo discorso: quel sermone contro la produttività... chi l'aveva tirata in ballo, la produttività? Non noi. Allora CHI?"

**(Il colpo pesa 4 PV a tutti. Il fantoccio è ancora lì: dategli il suo nome.)**`,
    choices: [
      { text: '🗣 Riprendere il duello', next: 'z3' },
    ],
  },

  z4: {
    location: 'cattedrale',
    caption: 'Il Duello Finale — secondo assalto',
    text: `**🗣 DUELLO DI PAROLE**

Il fantoccio cade e Eleinad cambia registro: via il professore, dentro il chirurgo. I televisori si spengono tutti tranne due — uno mostra il divano, caldo, la luce giusta, la pace; l'altro mostra VOI, domattina, fuori: bollette, sveglie, telefonate, la vita che ricomincia a chiedere.

> Eleinad: "Semplifichiamo, che è tardi. Le strade sono DUE. La prima: restate, e il dolore finisce stanotte — niente più all'altezza, niente più prestazioni, il divano per sempre. La seconda: uscite, e firmate per il dolore PER SEMPRE — perché là fuori non vi aspetta l'alba, vi aspetta LUNEDÌ. Divano per sempre, o dolore per sempre. Non c'è una terza opzione. Non c'è MAI stata una terza opzione. Scegliete."

I due televisori ronzano. Tutto il resto è buio.

> Daniele: *(guardando i due schermi, poi lo spazio buio tra loro)* "Curioso. Casa mia aveva più di due stanze. La vita pure. Quando uno ti mostra solo due porte... conta le PARETI."

**(Il trucco ha un nome. Sbagliarlo, adesso, costa carissimo.)**`,
    choices: [
      { text: '🗣 "FALSA DICOTOMIA. Le opzioni non sono due: le hai NASCOSTE, le altre."', next: 'z5' },
      { text: '🗣 "AUTORITÀ. Parli come se avessi il diritto di decidere tu le regole."', once: true, next: 'z4_colpo' },
      { text: '🗣 "SCARSITÀ. \'Ultima offerta\', \'è tardi\': la solita fretta dei venditori."', once: true, next: 'z4_colpo' },
    ],
  },

  z4_colpo: {
    location: 'cattedrale',
    caption: 'Il Grigiore prende chi sbaglia',
    stinger: 'jumpscare',
    damage: 4,
    killRoller: true,
    text: `Nome sbagliato. E stavolta non è un contraccolpo: è una SENTENZA.

Il buio tra i due televisori si muove. Chi ha risposto sta ancora finendo la frase — e la frase non finisce. Il Grigiore lo raggiunge a metà parola, gli sale dai piedi come marea in una foto, e il colore se ne va NELL'ORDINE SBAGLIATO: prima gli occhi, che vi cercano; poi la voce, che stava ancora dicendo il vostro nome; per ultima la mano, tesa verso di voi, che sbiadisce ANCORA CALDA.

Dove c'era un amico, resta una luce bassa a forma di amico. Uno spirito. In piedi, esattamente dov'era, con l'aria stupita di chi ha mancato un gradino.

> Eleinad: "Shhh. Sentito? Il silenzio. È così che suona una risposta sbagliata."

Nessuno di voi si muove per un secondo che dura un'ora. Poi Daniele raccoglie il manuale da terra — quando è caduto? — e lo riapre con le mani che tremano e la voce che NO.

> Daniele: "Il duello non è finito. E adesso lo smontiamo anche PER LORO. Contate le pareti. CONTATE LE PARETI."

**(Chi ha risposto è caduto: da qui in poi cammina con voi come Spirito. Il duello continua: la dicotomia è ancora lì, e adesso sapete cosa costa.)**`,
    choices: [
      { text: '🗣 Tornare al duello. Per chi è caduto.', next: 'z4' },
    ],
  },

  z5: {
    location: 'cattedrale',
    caption: 'Il Duello Finale — terzo assalto',
    text: `**🗣 DUELLO DI PAROLE**

La dicotomia crolla e Eleinad smette di fingere. I televisori si accendono TUTTI, e su tutti c'è la stessa immagine: Daniele. Sul divano. Tra un anno, tra dieci, solo, grigio, con la vostra assenza attorno come polvere.

> Eleinad: "E va bene. Parliamo del futuro, visto che vi piace tanto. Ve lo portate via, stanotte, il vostro trofeo. E poi? Poi tornate alle vostre vite, ai vostri lunedì, e lui torna al suo divano. E RICADRÀ. Lo sapete che ricadrà. E quando succederà — quando la chat tornerà muta — sarà COLPA VOSTRA. Di voi che stanotte avete fatto gli eroi e domani non avrete tempo per un caffè. Potete vivere con questo peso? Potete USCIRE da quella porta sapendo cosa gli state facendo?"

Silenzio. E nel silenzio, Daniele fa un passo avanti. Da solo.

> Daniele: "No no. Questa è mia." *(apre il manuale, pagina segnata, TRE colori)* "Punto uno: stai vendendo una colpa per comprare un ostaggio — il trucco è vecchio, l'ho sottolineato in giallo. Punto due: 'ricadrà' non è un argomento, è una scommessa — e le scommesse sul mio conto le ho sempre vinte io. Punto tre." *(chiude il manuale)* "E comunque no: la mia vita non è colpa loro. È MIA. Riprendo possesso. Da stanotte, da adesso, da questa frase."

*(Si volta verso di voi, e ha quasi un sorriso.)*

> Daniele: "Il nome del trucco però ditelo voi. A me guardarlo cadere piace di più."`,
    choices: [
      { text: '🗣 "RICATTO EMOTIVO. La colpa non è un argomento: è un guinzaglio."', next: 'z5b' },
      { text: '🗣 "IMPEGNO E COERENZA. Ci incastri con quello che abbiamo promesso."', once: true, next: 'z5_colpo' },
      { text: '🗣 "RIPROVA SOCIALE. Tutti quegli schermi che annuiscono non sono nessuno."', once: true, next: 'z5_colpo' },
    ],
  },

  z5_colpo: {
    location: 'cattedrale',
    caption: 'Il contraccolpo — terzo assalto',
    damage: 4,
    text: `Nome sbagliato — e la colpa, non smascherata, vi entra sotto le unghie.

Per un momento lo VEDETE, il futuro che ha descritto: la chat muta, il caffè rimandato, voi altrove. Pesa come una cosa vera, perché è fatto di una paura vera — è questo il talento del ricatto: usa materiale autentico e ci costruisce una gabbia.

> Eleinad: *(quasi tenero)* "Fa male perché è VERO, dite? No, tesori. Fa male perché ci TENETE. Non è la stessa cosa. Ma da qui non si vede la differenza, eh?"

> Daniele: *(senza voltarsi, gli occhi fissi sul buco)* "La differenza si vede benissimo. Un argomento ti chiede di PENSARE. Questa cosa vi sta chiedendo solo di sentirvi in colpa. Chi vi mette al guinzaglio i sentimenti che avete per me... come si chiama? Ce l'avete sulla punta della lingua. Sputatelo."

**(4 PV a tutti: la colpa taglia. Il trucco è ancora in piedi: dategli il nome.)**`,
    choices: [
      { text: '🗣 Riprendere il duello', next: 'z5' },
    ],
  },

  z5b: {
    location: 'cattedrale',
    caption: 'Eleinad si inceppa',
    gold: 2,
    sets: { eleinad_smontato: true },
    text: `RICATTO EMOTIVO. Il nome esce, la navata lo sente, e succede la cosa che Daniele aspettava da tre giorni.

Eleinad SI INCEPPA.

Non ferito: INCEPPATO. Come un video che salta il fotogramma, come una frase che ricomincia da capo perché ha perso il filo — "sarà colpa vo—", "sarà col—", "sarà—". I televisori sfarfallano tutti insieme. E i bordi del buco a forma di persona cominciano a SGRETOLARSI: briciole di grigio che si staccano e cadono verso l'alto, come polvere che ricorda di essere stata luce.

> Eleinad: "non è— il trucco non è— IO NON SONO UN TRUCCO—"

> Daniele: *(avvicinandosi di un passo a ogni parola, il manuale sotto il braccio come un verbale)* "Sei ESATTAMENTE un trucco. Sei tre fallacie in un impermeabile. Ti ho letto in tre giorni, e non eri nemmeno un buon libro: eri la FASCETTA del libro. 'Milioni di copie'. Sai cosa non regge, di voi parassiti? Il contraddittorio."

Il buco si stringe. Si stringe ANCORA. Sta franando dentro se stesso, e la navata intera trema come un applauso che non sa di esserlo.

> Federico: *(piano, a voi, con una faccia che è orgoglio puro)* "Trent'anni che perdo le discussioni con quello. TRENT'ANNI. E niente, è il più forte. Ditelo a tutti."`,
    choices: [
      { text: '🌅 Guardarlo cadere. Fino in fondo.', next: 'e_parola' },
    ],
  },

  z6: {
    location: 'cattedrale',
    caption: 'La via dei Gemelli',
    sets: { gemelli_pace: true },
    text: `Federico tira fuori la foto. Intera — le due metà ricomposte, la piega al centro come una cicatrice ben chiusa: due bambini identici su una spiaggia, uno che ride, uno che sta per ridere.

I gemelli si mettono davanti all'altare, spalla a spalla, la foto in mezzo. E fanno la cosa che il demone non può leggere, perché in trent'anni non è successa MAI.

> Federico: "Avevi ragione tu. Sul vivere piano. Io corro da vent'anni per paura che fermarsi sia perdere — e tu ti sei fermato e hai letto più vite tu da quel divano che io da tremila meeting. Ci vuole più coraggio a stare fermi. Non te l'ho mai detto perché mi rodeva. Mi rode ADESSO."

> Daniele: "Avevi ragione tu. Sui soldi. Sul mestiere. Io facevo lo snob perché invidiavo la tua faccia tosta — tu esci sul mercato a faccia aperta ogni giorno, e io ho sempre avuto paura anche solo del PREVENTIVO. La tua carriera non è vuota. È CASA. Un altro tipo di casa."

Il buco a forma di persona TREMA. Si nutre di quella lite dal 1994 — e la lite gli si sta spegnendo in mano.

> Eleinad: *(da tutti i televisori, in tutte le voci, sempre più forte)* "NO. Litigate. LITIGATE! Lui ti ha dato del venduto nel 2009! Tu gli hai detto 'sfigato' al matrimonio di— DITEVELO! DITEVELO ANCORA!"

L'urlo è un'onda. Il gruppo si stringe attorno ai gemelli: adesso si tratta solo di REGGERE.`,
    choices: [
      { text: '🛡 Fare scudo attorno alla foto', tag: 'Prova di Carisma — CD 13 (chiunque tiri, il gruppo fa scudo)', check: { stat: 'CAR', dc: 13, success: 'e_gemelli', fail: 'z6b' } },
    ],
  },

  z6b: {
    location: 'cattedrale',
    caption: 'L\'onda passa',
    damage: 4,
    text: `L'urlo vi passa ATTRAVERSO. Trent'anni di frasi peggiori, sparate tutte insieme da tutti i televisori: il venduto del 2009, lo sfigato del matrimonio, i soldi, il divano, chi ha ragione, chi ha ragione, CHI HA RAGIONE — e per un secondo le mani dei gemelli, sulla foto, tirano da due lati opposti.

La piega al centro si tende.

> Emanuela: "GUARDATEVI!" *(la voce da salone pieno, quella che ferma le risse)* "Non guardate gli schermi: GUARDATEVI!"

Si guardano. La foto regge. Ma siete a terra mezzi svuotati, e il buco sull'altare si sta già gonfiando per la prossima onda.

> Federico: *(sangue dal naso, sorriso storto)* "Io la frase del 2009 manco me la ricordavo. Che rosicone, 'sto demone."

> Daniele: "Possiamo ridirgliela in faccia con calma. O possiamo passare alle maniere di Claudia."

> Claudia: *(che ha già il racchettone in mano da tre secondi)* "Le mie maniere sono PRONTE. Voi due decidete in fretta: la prossima onda la vedo arrivare da qui."

**(4 PV a tutti. Decidete: si ritenta lo scudo, o si cambia strada.)**`,
    choices: [
      { text: '👥 Di nuovo: la foto in alto, il gruppo a scudo', next: 'z6' },
      { text: '⚔ Basta parole. La via della Forza.', next: 'z7' },
    ],
  },

  z7: {
    location: 'cattedrale',
    caption: 'La via della Forza',
    text: `> Claudia: "Ok. Io gli schermi li gestisco di mestiere, e questo qui ha rotto il cazzo."

Racchettoni fuori. La piastra di Emanuela fa clic. Natalino apre le forbici con la lentezza liturgica delle grandi occasioni, Federico si scrocchia il collo come prima dei pitch importanti, e Daniele soppesa il joy-con sinistro — quello che l'ha liberato — come un sasso scelto bene.

Il buco a forma di persona scende dall'altare. Il Grigiore gli si raccoglie addosso, mantello e armatura insieme, e la navata intera si inclina VERSO di lui, i divani che scivolano piano come limatura verso la calamita: qui dentro lui non è il padrone di casa. È LA casa.

> Eleinad: "Le mani. Certo. Finiscono SEMPRE con le mani, quando gli argomenti— be', quando gli argomenti ce li ho io."

> Daniele: "Hai i televisori, i divani e la moquette. Noi abbiamo due racchettoni professionali e una parrucchiera di Gaeta. Non c'è partita, ma non nel senso che credi tu."

**(Tutto ciò che avete conquistato stanotte — la foto, i sabotaggi, i risvegli, la pace, il manuale — scende in campo con voi.)**`,
    combat: { enemies: ['eleinad_vero'], victory: 'z8', defeat: 'z_ko' },
  },

  z8: {
    location: 'cattedrale',
    caption: 'Il colpo di grazia',
    sets: { eleinad_distrutto: true },
    text: `Eleinad è in ginocchio. Se "in ginocchio" si può dire di un buco: il ritaglio si è accartocciato su se stesso, i bordi che franano verso l'alto, il Grigiore che gli cola via di dosso come vernice sotto la pioggia.

E Daniele fa un passo avanti. Nella mano, l'ultimo Guscio Blu — e non chiedetevi da dove l'ha tirato fuori: è Daniele, ha SEMPRE l'ultimo Guscio Blu.

> Daniele: "Legge di Mario Kart: quello davanti a tutti, prima o poi, lo prende in testa." *(lo soppesa)* "E tu sei stato in testa TRE GIORNI, dentro casa mia, con la mia faccia. Fai tu il conto."

> Eleinad: "aspet—"

Lo lancia.

Il Guscio parte BASSO, curva dove non dovrebbe poter curvare, sale lungo la navata con un sibilo che tutti i televisori provano a coprire alzando il volume — e STRIKE: prende il buco esattamente nei bordi, e i bordi ERANO il battito.

L'esplosione è grigia per mezzo secondo. Poi il grigio si SBAGLIA: si crepa dall'interno, e da ogni crepa esce colore — il rosso vero, il blu vero, il giallo di un pomeriggio d'agosto — finché non resta niente da tenere insieme e tutto quello che Eleinad aveva rubato torna a chi passava di lì. La navata FIORISCE. I televisori esplodono in fuochi d'artificio educati, uno alla volta, come applausi.

> Natalino: "STRIKE! Hai visto?! STRIKE!"

> Daniele: *(soffiando sulla mano come su una pistola)* "Prima o poi lo prende in testa. È la LEGGE."`,
    choices: [
      { text: '🌅 Verso l\'alba', next: 'e_colori' },
    ],
  },

  z9: {
    location: 'cattedrale',
    caption: 'Lo Scambio — l\'offerta completa',
    text: `> Eleinad: "Finalmente. Qualcuno con l'educazione di ascoltare un'offerta INTERA."

I televisori si abbassano di volume tutti insieme, e la voce si fa una sola: pacata, contrattuale, quasi umana.

> Eleinad: "Ecco i termini. Io sono fatto di posti a sedere: uno deve essere occupato, non è cattiveria, è ANATOMIA. Quindi: UNO resta sul divano. Uno solo, chi volete, deciso da voi — non io, non il caso, VOI. Gli altri escono. TUTTI. Lui compreso." *(il buco indica Daniele, e la voce quasi si inchina)* "Il vostro trofeo ve lo tenete: ha vinto, l'ammetto senza rancore. Nessun trucco, nessuna clausola scritta piccola, nessuna scadenza nascosta. Uno resta, sei escono. È il contratto più onesto che abbia mai scritto — e lo è perché sto PERDENDO, e chi perde non può permettersi di mentire."

Silenzio. Il peggiore della serata, perché stavolta il mostro non sta mentendo, e lo sentite tutti.

> Daniele: *(gelido)* "No. Non si fa a cambio con la gente. NEANCHE con me — soprattutto DOPO di me."

> Federico: "Daniele ha ragione." *(pausa)* "L'ho detto ad alta voce. Segnatevi la data."

Ma la scelta, come tutte quelle vere, non è dei gemelli. È vostra.

**(Chi resta prende il posto di Daniele nel bozzolo. Gli altri escono. Nessun dado: solo la scelta.)**`,
    choices: [
      { text: '✋ Rifiutare: nessuno si siede. Si torna alle armi.', next: 'z2' },
      { text: '🕯 Accettare lo scambio.', sacrifice: true, sacrificeSets: 'scambiato', sacrificeTitle: 'Chi resta sul divano?', sacrificeText: 'Chi resta prende il posto di Daniele nel bozzolo. Gli altri escono. Nessun dado: solo la scelta.', next: 'e_scambio' },
    ],
  },

  z_ko: {
    location: 'cattedrale',
    caption: 'La navata vince un round',
    stinger: 'defeat',
    fullHeal: true,
    goldLoss: 3,
    text: `Cadete tutti insieme, e i divani vi RICEVONO.

Vi risvegliate seduti. In fila, sulla prima panca della navata, composti come a un funerale — e il funerale sarebbe il vostro. Davanti, i televisori trasmettono una cosa sola su tutti gli schermi: VOI. Seduti. Comodi. Lo schermo dentro lo schermo dentro lo schermo.

> Eleinad: "Restate pure. La puntata è lunga. La puntata è ETERNA."

> Daniele: *(il primo ad alzarsi, strappandosi dal velluto come da una sabbia mobile)* "In piedi. IN PIEDI. Ve lo dico da esperto: il divano di questo stronzo ha UNA regola sola — più ci stai, meno ricordi perché volevi alzarti. Guardate me: tre giorni, e mi sono alzato. Si può. SI PUÒ."

Vi alzate. Uno alla volta, le gambe di piombo, il velluto che non vuole. Ma vi alzate. E sugli schermi, per un fotogramma solo, i voi-seduti si INCRINANO: la casa deve ricalcolare la puntata, e ricalcolare le costa.

**(Il Colore paga il conto. Le forze tornano: la scelta pure.)**`,
    choices: [
      { text: '⚔ Ancora. Fino in fondo.', next: 'RETRY_COMBAT' },
      { text: '🛋 Non alzarsi più.', next: 'e_grigio' },
    ],
  },

  /* ==================== EPILOGHI ==================== */

  e_parola: {
    location: 'alba_colori',
    caption: 'Epilogo — La Parola',
    ending: true,
    reviveAll: true,
    gold: 2,
    sets: { finale_parola: true },
    stinger: 'victory',
    text: `Eleinad frana dentro se stesso senza rumore: un buco che si chiude come acqua sopra un sasso, e quando l'ultima briciola di grigio cade verso l'alto e si accende, la casa intera SI SGONFIA — pareti che tornano pareti, la navata che si ripiega in un salotto, il salotto in un bilocale di sessanta metri quadri che finisce, benedetto, DA TUTTE LE PARTI.

E se qualcuno di voi camminava come luce, adesso non più: il colore che torna al mondo torna anche a LORO — peso, fiato, battito, tutto in una volta — e c'è chi si tocca le mani senza credere alle mani, e c'è chi abbraccia e chi viene abbracciato e non si capisce più chi dei due piange di più. Va bene così. Nessuno lo racconterà giusto, comunque.

La porta d'ingresso RIAPPARE. Dietro, l'alba: e i colori fanno MALE agli occhi, nel senso buono — il rosa sguaiato, l'arancione maleducato, il cielo che non si vergogna di niente.

Daniele esce per primo. Si volta a guardare il suo bilocale tornato bilocale.

> Daniele: "Devo cambiare divano."

Un'ora dopo: il bar sotto casa, sei caffè, una Zero. E il primo litigio POST-vittoria:

> Federico: "Il colpo di grazia era il MIO 'strawman' del primo assalto. Ho aperto io la breccia."

> Daniele: "Tu hai aperto la bocca. La breccia l'ha aperta il manuale. Sottolineato da ME. In TRE colori."

> Emanuela: *(a Claudia, beata)* "Senti come litigano. Che meraviglia. Non ho mai sentito niente di più VIVO."`,
  },

  e_gemelli: {
    location: 'alba_colori',
    caption: 'Epilogo — I Gemelli',
    ending: true,
    reviveAll: true,
    gold: 2,
    sets: { finale_gemelli: true },
    stinger: 'victory',
    text: `L'urlo di Eleinad si spegne a metà, perché non trova più l'appiglio: due gemelli che si danno ragione sono una lingua che il demone non ha mai imparato a leggere. Prova a sfogliarli — lo sentite, un frugare gelido nella memoria, in cerca di una lite, UNA — e trova solo la foto: due bambini su una spiaggia, uno che ride, uno che sta per ridere.

E allora si richiude. Come un libro. Le pagine grigie che si accostano piano, la copertina che cala, il buco a forma di persona che diventa una fessura, poi una riga, poi un niente ordinato — e la casa si sgonfia attorno a quel niente fino a tornare un bilocale con la porta al suo posto e l'alba dietro la porta.

E il colore, tornando al mondo, ripassa a saldare i conti: se qualcuno di voi era luce, torna CARNE — e viene travolto dall'abbraccio più disordinato della storia del pianerottolo.

Una settimana dopo, il salotto di Daniele è ridipinto — l'hanno fatto in sei, male, con più vernice sui gemelli che sulle pareti. E sopra il divano NUOVO, appesa con quattro pezzi di nastro adesivo perché nessuno è andato a comprare una cornice e ormai è una questione di principio, c'è LEI: la foto intera, la piega al centro come una cicatrice ben chiusa.

> Federico: "Andrebbe incorniciata."

> Daniele: "Il nastro regge. Il nastro ha ragione."

> Federico: "...concordo."

E nessuno dei due ride, stavolta. Che è il loro modo di ridere più forte.`,
  },

  e_colori: {
    location: 'alba_colori',
    caption: 'Epilogo — I Colori',
    ending: true,
    gold: 2,
    sets: { finale_colori: true },
    stinger: 'victory',
    text: `Il colore vince come vincono le inondazioni: senza chiedere. Dilaga dalla navata in su, stanza per stanza, e la casa si sgonfia sotto la piena finché non resta che un bilocale sbalordito, con i mobili veri, la polvere vera, e una porta d'ingresso che stavolta c'è.

La aprite. L'alba, fuori, non sa niente di stanotte — ed è la cosa più bella che abbia da offrire.

Uscite come si esce dalle battaglie vere: contando. E se stanotte il Grigiore ha preso qualcuno di voi, il conto non torna, e non tornerà fino all'alba piena: chi è caduto cammina con voi come una luce bassa, sul pianerottolo, giù per le scale, fuori — e la luce nuova del mattino non lo cancella. Lo ONORA. Si vede meglio, nell'alba, uno spirito: come una candela portata in processione.

Nessuno parla del prezzo. Il prezzo cammina con voi, e preferisce così.

> Daniele: *(fermo sul marciapiede, la faccia nell'alba, gli occhi che lacrimano per i colori o per i colori, scegliete voi)* "Ha perso. Ricordatevelo com'era, questo momento: non 'abbiamo vinto'. HA PERSO. Non è la stessa cosa, e la differenza è tutta roba nostra."

> Emanuela: "A casa. Tutti. Si dorme, si mangia, e stasera si sta INSIEME — e non è una proposta."

> Natalino: "Io offro il caffè. A tutti quelli che... a TUTTI."

E il gruppo si avvia nel mattino sguaiato di colori — quelli che camminano e quelli che splendono — e da qualche parte, in fondo alla strada, un bar sta tirando su la serranda.`,
  },

  e_scambio: {
    location: 'alba_colori',
    caption: 'Epilogo — Lo Scambio',
    ending: true,
    sets: { finale_scambio: true },
    stinger: 'campana',
    text: `La porta si apre subito. I contratti onesti si eseguono in fretta.

Uscite nell'alba a uno a uno, e l'alba è bellissima e non ve ne frega niente, perché l'ultima cosa che vedete voltandovi è il salotto — tornato salotto, quieto, in ordine — e sul divano, comodo, col telecomando in mano, UNO DI VOI.

Vi guarda. Non piange, non trema: ha scelto, e chi ha scelto davvero ha una calma che non si compra. Alza appena il telecomando, un cenno piccolo, da casa:

"Andate."

La porta si chiude da sola, gentile, ed è la gentilezza la cosa che non perdonerete mai.

Sul marciapiede, il giuramento viene da solo, senza che nessuno lo proponga: sei voci — cinque, e quella dentro — TORNIAMO A PRENDERTI. Non "un giorno". Non "appena possiamo". Torniamo a prenderti: Gaetano sta già disegnando lo schema della casa su un foglio, Claudia ha fotografato OGNI stanza, Emanuela tiene la borsa pronta accanto alla porta di casa da quella mattina.

Daniele non parla per un'ora. Cammina, beve l'alba, tace.

Poi, al bar, con la Zero davanti:

> Daniele: "Nessuno resta lì dentro per sempre. Lo so per esperienza." *(alza la lattina verso la finestra, verso la casa, verso il divano)* "Tieni il posto caldo. Arriviamo."`,
  },

  e_grigio: {
    location: 'cattedrale',
    caption: 'Epilogo — Il Grigiore',
    ending: true,
    sets: { finale_grigio: true },
    stinger: 'defeat',
    text: `Il divano è comodo. Questa è la cosa che nessuna storia di mostri vi aveva detto: che alla fine, quando succede, è COMODO.

Sei posti, sette con Daniele — la casa lo ha rifatto largo apposta, premurosa, e la premura dei mostri è l'ultima cosa che imparerete stanotte. La TV è accesa. Trasmette le vostre vite: quelle vere, montate meglio, coi tempi morti tagliati e le risate al punto giusto. Sono belle, da qui. Sono più belle da GUARDARE che da fare, ed è esattamente questo il meccanismo, e saperlo non aiuta per niente.

Natalino ha un tronello in mano che non accende. Claudia non fotografa. Federico e Daniele, stessa faccia, stessa poltiglia grigia negli occhi, non litigano — ed è questo il dettaglio che avrebbe fatto urlare chiunque vi conoscesse.

> Eleinad: *(da nessuna parte, da ogni parte, sazio)* "Shhh. Comodi. C'è una maratona, stanotte. C'è una maratona TUTTE le notti."

Qualcuno di voi, forse, pensa ancora di alzarsi. Tra un episodio e l'altro. Tra questo e il prossimo. Dal prossimo, sicuro.

Fuori, il sole sorge su una città a colori. Dentro, la luce blu non cambia mai.

La casa, finalmente, finisce. Voi no. **Rigiocate: là fuori c'è un'alba che vi aspetta.**`,
  },

};

/* ==================== NOTE DI PRODUZIONE — BLOCCO E ====================

FLAG IMPOSTATI → CONSUMATORE:
- bozzolo_pausa (m4)          → diario/impresa "La console in pausa" (blocco meta); cronaca del finale
- entrato_bozzolo (m5_sacrificio, sacrificeSets) → m6_sacrificio + scelte spirit (z2b) + cronaca/epiloghi eroe
- bozzolo_aperto (m6_sacrificio) → impresa "Aperto da dentro" (blocco meta) + cronaca
- zero_bevuta (m6)            → cronaca "La prima Zero della libertà" (blocco meta)
- dentro_eleinad (m7)         → DIARY_FLAGS "Siamo dentro di lui" (blocco meta); eco possibile in z7 (combat.js)
- eleinad_vacilla (z2b)       → eco nel boss eleinad_vero (combat.js, blocco d'apertura — già previsto dal motore)
- eleinad_smontato (z5b)      → cronaca/impresa "Smontato pezzo per pezzo" + consumato da e_parola (via z5b→e_parola)
- gemelli_pace (z6)           → eco in combattimento z7 (già previsto dal motore, elenco del brief)
- eleinad_distrutto (z8)      → cronaca "Il Guscio Blu" (blocco meta)
- scambiato (z9, sacrificeSets) → e_scambio + HERO_EPILOGUES per tipo di finale (blocco meta)
- finale_parola / finale_gemelli / finale_colori / finale_scambio / finale_grigio → CRONACA + HERO_EPILOGUES + sblocco "Rivivi la Notte"

FLAG CONSUMATI (impostati altrove): via_biblioteca/via_porte/via_cucina (porta h1→m1, non in questo blocco),
foto_ricomposta + segreto_gemelli (z2 scelta b), manuale_annotato_letto / daniele_sabota / sonnambuli_svegli (echi in z7).

ITEM: nessun item dato in questo blocco. Item consumati: joycon_sinistro (richiesto in m3, non rimosso),
lattina_zero (rimossa in m6), manuale_annotato (richiesto in z2a).

MORTI POSSIBILI:
- m5_sacrificio (sacrifice esplicito → entrato_bozzolo)
- z4_colpo (killRoller: chi risponde male al secondo assalto del duello)
- z9 (sacrifice esplicito → scambiato)

USCITE DEL BLOCCO: nessuna (gli epiloghi chiudono). Ingressi: m1 (da h1), z1 (da m9).
STINGER USATI: jumpscare (m3, m4c, z4_colpo), victory (m6, e_parola, e_gemelli, e_colori),
campana (m8, z1, e_scambio), defeat (m_ko, z_ko, e_grigio).
======================================================================== */

/* ============ HUB — il Salotto-Cattedrale e le scene di respiro ============ */

const SCENE_HUB = {

  h1: {
    location: 'salotto',
    caption: 'Il Salotto-Cattedrale — il centro della Casa',
    text: `Il salotto di Daniele non è più il salotto di Daniele. Il soffitto è salito nel buio — dieci metri, venti, non si vede la fine — e il bilocale è diventato una **cattedrale**: il divano lungo come una navata, la TV alta come una vetrata, e la moquette che sotto i piedi, se restate fermi, **respira**.

Da qui la Casa apre le sue tre gole:

A sinistra, una porta fatta di **libri** — dorsi grigi, fitti, e da dietro un fruscio di pagine che sembra un sussurro. A destra, un corridoio di **porte scolorite**, ognuna con una targhetta e un colore che non è più il suo. In fondo, oltre la cucina, una porta di metallo da cui esce un **freddo da cella frigorifera**.

> Gaetano: "Tre ingressi. Zero uscite. Statisticamente, questa casa è un problema di merda."

> Emanuela: "Linguaggio." *(pausa, guardando il soffitto che non finisce)* "No, hai ragione. È esattamente un problema di merda."

E sopra tutto, da qualche parte oltre il soffitto, un suono bassissimo e continuo. Come uno schermo acceso in un'altra stanza. Come qualcuno che **guarda qualcosa da tre giorni.**

*Daniele è di là. Da qualche parte, oltre una di queste gole. E la Casa vuole che vi perdiate per strada.*`,
    choices: [
      { text: '📚 La porta dei libri — la Biblioteca che Sussurra', next: 'b1' },
      { text: '🚪 Il corridoio delle porte scolorite', next: 'u1' },
      { text: '🧊 La porta fredda — la cucina', next: 'k1' },
      { text: '🎮 Seguire il suono dello schermo, verso l\'alto', tag: 'Serve avere aperto almeno due strade', requires: { flag: 'via_biblioteca', flag2: 'via_porte' }, next: 'm1' },
      { text: '🎮 Seguire il suono dello schermo, verso l\'alto', tag: 'Serve avere aperto almeno due strade', requires: { flag: 'via_biblioteca', flag2: 'via_cucina', notFlag: 'via_porte' }, next: 'm1' },
      { text: '🎮 Seguire il suono dello schermo, verso l\'alto', tag: 'Serve avere aperto almeno due strade', requires: { flag: 'via_porte', flag2: 'via_cucina', notFlag: 'via_biblioteca' }, next: 'm1' },
      { text: '🌿 Un momento. Un momento SOLO. (il cerchio del tronello)', once: true, requires: { item: 'tronello' }, next: 'h2' },
      { text: '🎾 Claudia e Gaetano scaldano il braccio', once: true, next: 'h3' },
      { text: '🛋 Bivacco: cinque minuti seduti PER TERRA (mai sul divano)', once: true, next: 'h4' },
    ],
  },

  h2: {
    location: 'salotto',
    caption: 'Il cerchio del tronello',
    heal: 4,
    gold: 1,
    sets: { fumo_mappa: true },
    text: `Natalino si siede per terra a gambe incrociate, in mezzo alla navata, e rolla con la calma di un artificiere.

> Natalino: "La casa è di quel coso. D'accordo. Ma questi dieci minuti sono MIEI, e vi ci ospito volentieri."

Il cerchio si fa da solo: Gaetano e Claudia spalla a spalla, Federico che passa le birre al limone come un chierichetto passa l'incenso, Emanuela che monta la guardia coi taralli. Si fuma, si tossisce, si ride piano. Per dieci minuti la cattedrale è solo un soffitto alto sopra cinque amici seduti per terra.

**(+4 PV a tutti. Certe medicine non le vende nessuno.)**

Poi Federico soffia uno dei suoi cerchi di vapore — e il fumo del tronello ci passa in mezzo e **NON SI DISPERDE**. Resta lì. Si allunga. Si piega ad angoli retti.

> Claudia: *(già col telefono in mano)* "Ragazzi. Il fumo sta disegnando una PIANTA."

Corridoi. Stanze. E in alto, sopra tutto, un rettangolo grande con dentro un rettangolo piccolo: **uno schermo davanti a un divano**. Il fumo trema lì sopra, insiste, come un dito che batte sul vetro.

> Natalino: *(piano)* "Daniele, fratello. Ricevuto forte e chiaro."

**(Il fumo vi ha mostrato dov'è: la pianta è nel diario. Colore +1.)**`,
    choices: [
      { text: '↩ Si torna al centro della Casa. Con una direzione in più.', next: 'h1' },
    ],
  },

  h3: {
    location: 'salotto',
    caption: 'Riscaldamento — stile Gaeta',
    gold: 1,
    item: 'pallina_racchettoni',
    sets: { racchettoni_pronti: true },
    text: `Gaetano ha portato su i racchettoni per farli vedere a Daniele — quelli nuovi, professionali, che in spiaggia fanno spostare gli ombrelloni. Sono ancora nella borsa, vicino alla porta che non c'è più.

> Claudia: "Scaldiamo il braccio?"

> Gaetano: "Scaldiamo il braccio."

Quello che succede nei tre minuti seguenti, nella navata del Salotto-Cattedrale, è difficile da descrivere a chi non li ha mai visti giocare. La pallina **fischia**. I muri incassano. A un certo punto un colpo di Claudia passa così vicino alla testa di Federico che gli sposta la riga dei capelli.

> Federico: "EHI. Porca puttana. C'è un MORTO potenziale, qui."

> Claudia: *(senza fermarsi)* "C'è un morto potenziale OVUNQUE, qui. Il mio almeno è a fin di bene."

E la Casa — questo lo notate tutti — per tre minuti interi **non muove niente**. Nessun sussurro, nessuno scricchiolio. Come una cosa enorme e grigia che si è messa in un angolo a guardare due professionisti, e non ha capito **come si fa a essere così vivi.**

**(Una pallina in tasca a Gaetano: là dentro è un'arma. Colore +1.)**`,
    choices: [
      { text: '↩ Il braccio è caldo. Si torna a fare sul serio.', next: 'h1' },
    ],
  },

  h4: {
    location: 'salotto',
    caption: 'Bivacco — per terra, MAI sul divano',
    heal: 3,
    sets: { bivacco_fatto: true },
    text: `Cinque minuti. Seduti per terra, schiena contro schiena, al centro esatto della navata — il punto più lontano possibile dal divano, per unanime, tacita delibera.

> Emanuela: *(distribuendo taralli)* "UNO a testa. La crisi la certifico io, e io certifico che siamo a metà crisi."

> Federico: "Io una cosa la voglio dire." *(pausa lunga)* "L'ultima volta che l'ho sentito, ho litigato. Per una CAZZATA. Una roba di soldi, manco mi ricordo i numeri."

> Natalino: "Fede. Voi due litigate da trent'anni. Secondo te lui è là dentro a pensare al litigio?"

> Federico: "No. È là dentro a pensare a come VINCERLO, il litigio. È questo che mi tiene tranquillo: quello stronzo non molla una discussione a metà. Figurati la vita."

Silenzio. Di quello buono, stavolta.

> Gaetano: *(alzandosi, offrendo la mano a Claudia)* "Ripasso del piano: entriamo, lo riprendiamo, usciamo. E domenica grigliata da me. Stile Pasquetta."

> Emanuela: "Porto la pasta zucchine e gamberi."

> Tutti, in coro, compreso il muro che non dovrebbe avere voce: *"Lo sappiamo."*

**(+3 PV. L'ultima voce non era di nessuno di voi. Nessuno lo commenta. Ma il piano resta il piano.)**`,
    choices: [
      { text: '↩ In piedi. Daniele aspetta.', next: 'h1' },
    ],
  },

};


/* ============ LA CAMPAGNA COMPLETA ============ */
const CAMPAIGN = Object.assign({}, SCENE_A, SCENE_B, SCENE_C, SCENE_D, SCENE_E, SCENE_HUB);

/* Scena iniziale della campagna */
const CAMPAIGN_START = 'a0';

/* Rientra nella Casa: punti d'ingresso per rigiocare rami mai visti, sbloccati
   dopo il primo finale del profilo. Ogni capitolo prepara flag e zaino minimi. */
const CHAPTERS = [
  { id: 'a0',      label: '🌆 Sotto casa di Daniele', desc: 'Dall\'inizio: la chat muta, le chiavi di scorta, la porta che sparisce.' },
  { id: 's3',      label: '🩶 Il primo incontro', desc: 'Eleinad e il Contratto di Soggiorno. La faccia sbagliata di Daniele.', flags: { chiavi_prese: true } },
  { id: 'h1',      label: '🛋 Il Salotto-Cattedrale', desc: 'L\'hub delle tre gole: biblioteca, porte, cucina — e i momenti di respiro.', flags: { casa_aperta: true } },
  { id: 'b1',      label: '📚 La Biblioteca che Sussurra', desc: 'Il Bibliotecario, il Manuale Annotato, il segreto dello specchio.', flags: { casa_aperta: true } },
  { id: 'u1',      label: '🚪 Le Porte Sbagliate', desc: '1994, Gaeta in grigio, l\'Imbarco, la stanza che dice NON APRIRE.', flags: { casa_aperta: true } },
  { id: 'k1',      label: '🧊 La Cucina Fredda', desc: 'I segnali di Daniele, il Mercante Grigio, la Galleria dei Sonnambuli.', flags: { casa_aperta: true } },
  { id: 'm1',      label: '🎮 La Sala della Switch', desc: 'Il bozzolo, il Guardiano, la liberazione di Daniele.',
    flags: { casa_aperta: true, via_biblioteca: true, via_porte: true, segreto_gemelli: true },
    items: ['joycon_sinistro', 'lattina_zero', 'manuale_annotato'] },
  { id: 'z1',      label: '🩶 La Cattedrale — tutte le carte in mano', desc: 'Il finale con ogni segreto e ogni arma: provate le vie che vi mancano.',
    addHero: 'daniele',
    flags: { casa_aperta: true, daniele_in_squadra: true, dentro_eleinad: true, segreto_specchio: true, segreto_gemelli: true, segreto_trono: true, foto_ricomposta: true, manuale_annotato_letto: true, daniele_sabota: true, zero_bevuta: true },
    items: ['manuale_annotato', 'foto_gemelli', 'cuore_colore', 'pallina_racchettoni', 'lattina_zero'] },
  { id: 'z1_puro', scene: 'z1', label: '🩶 La Cattedrale — a mani nude', desc: 'Il finale senza assi nella manica: la battaglia, lo scambio, la resa.',
    addHero: 'daniele',
    flags: { casa_aperta: true, daniele_in_squadra: true, dentro_eleinad: true } },
];

/* Il Diario della Notte: le conoscenze acquisite, in chiaro. Ordine = visualizzazione. */
const DIARY_FLAGS = [
  ['nota_daniele',          'La nota di Daniele in cucina: "NON è una crisi: è un inquilino abusivo. Non ascoltate la mia faccia."'],
  ['daniele_vivo',          'Daniele è VIVO e combatte da dentro: sta nei fusibili, sabota quello che può. Non firmate, non sedetevi, non credete alla sua faccia.'],
  ['daniele_sabota',        'I segnali di Daniele: le lattine di Coca Zero — le uniche cose a colori — disposte a freccia. Vi sta guidando LUI.'],
  ['misure_impossibili',    'Il corridoio misura 34 metri in un bilocale. La geometria qui dentro è un\'opinione della Casa.'],
  ['gocce_trovate',         'Le Gocce del Dottore, coi promemoria di Daniele: preso ✓, preso ✓, preso ✓ — fino a tre giorni fa. Si è fermato quando la casa l\'ha preso. Non prima. Il dottore sa il fatto suo.'],
  ['casa_aperta',           'La Casa ha tre gole: la Biblioteca che Sussurra, il corridoio delle Porte Sbagliate, la Cucina Fredda. Daniele è oltre, in alto, dove qualcosa guarda uno schermo da tre giorni.'],
  ['fumo_mappa',            'Il fumo del tronello ha disegnato la pianta: sopra tutto c\'è una sala con uno schermo e un divano. Il fumo batteva lì sopra, come un dito su un vetro.'],
  ['eleinad_teme_gemelli',  'Quando Federico l\'ha insultato, la voce di Eleinad è CAMBIATA: "Tu. Tu sei il GEMELLO." I gemelli gli fanno paura.'],
  ['segreto_specchio',      'SEGRETO: "Eleinad" è "Daniele" allo specchio — un parassita-riflesso, la fotocopia venuta male. Non è l\'anima di Daniele. E si VERGOGNA di ciò che è.'],
  ['manuale_annotato_letto','Avete letto le note di Daniele sul Manuale: conoscete le armi del nemico — riprova sociale, autorità, scarsità, fantoccio, falsa dicotomia, ricatto emotivo — PRIMA che le usi.'],
  ['ancora_colore_nota',    'Chi tiene stretta una cosa A COLORI non affonda del tutto nel Grigiore: le ancore funzionano.'],
  ['segreto_gemelli',       'SEGRETO: il demone SI NUTRE della lite infinita tra Federico e Daniele. Due gemelli che si danno ragione sono ILLEGGIBILI, per lui.'],
  ['foto_ricomposta',       'La foto dei gemelli è INTERA: due bambini che ridono della stessa cosa. La Casa non riesce a guardarla.'],
  ['indizio_spiriti',       'Il Grigiore non può toccare ciò che è già stato perso: gli SPIRITI passano ovunque, e vedono le porte che i vivi non vedono.'],
  ['segreto_trono',         'SEGRETO: Eleinad ogni notte DEVE tornare al Divano-Trono nella Sala della Switch, a ricaricarsi di vita finta. Lì, staccato dal Grigiore, è vulnerabile.'],
  ['sonnambuli_svegli',     'I Sonnambuli della Galleria sono SVEGLI. Camminano ancora piano, ma adesso sanno da che parte stare.'],
  ['zero_bevuta',           'La prima Zero da libero: Daniele l\'ha scolata in sette secondi ed è tornato LUI al settanta per cento. Il restante trenta è rancore utilissimo.'],
  ['dentro_eleinad',        'IL TWIST: questa non è casa di Daniele. La moquette respira, le pareti digeriscono. Siete DENTRO Eleinad. La geografia è anatomia.'],
  ['eleinad_vacilla',       'Gli spiriti l\'hanno attraversato e hanno riferito: Eleinad VACILLA. I suoi primi colpi saranno più deboli.'],
  ['via_biblioteca',        'La via della Biblioteca è aperta: il Manuale è vostro.'],
  ['via_porte',             'La via delle Porte è aperta: i ricordi corrotti non vi fermano più.'],
  ['via_cucina',            'La via della Cucina è aperta: siete scesi e risaliti.'],
];

/* Mappa del mondo: le zone della Casa (per il canvas della mappa).
   Gli array `scenes` si CALCOLANO dalla campagna: niente elenchi a mano da tenere aggiornati. */
const WORLD_MAP = [
  { key: 'strada',       label: 'La Strada',      x: 0.10, y: 0.85, scenes: [] },
  { key: 'palazzo',      label: 'Il Palazzo',     x: 0.26, y: 0.72, scenes: [] },
  { key: 'appartamento', label: 'L\'Appartamento', x: 0.42, y: 0.60, scenes: [] },
  { key: 'salotto',      label: 'Il Salotto',     x: 0.50, y: 0.42, scenes: [] },
  { key: 'biblioteca',   label: 'La Biblioteca',  x: 0.20, y: 0.30, scenes: [] },
  { key: 'porte',        label: 'Le Porte',       x: 0.50, y: 0.14, scenes: [] },
  { key: 'cucina',       label: 'La Cucina',      x: 0.78, y: 0.52, scenes: [] },
  { key: 'sottoscala',   label: 'Il Sottoscala',  x: 0.88, y: 0.78, scenes: [] },
  { key: 'switch',       label: 'La Sala Switch', x: 0.74, y: 0.24, scenes: [] },
  { key: 'cattedrale',   label: 'La Cattedrale',  x: 0.90, y: 0.10, scenes: [] },
];

/* location → zona della mappa */
const MAP_ZONE_BY_LOCATION = {
  strada: 'strada',
  palazzo: 'palazzo', pianerottolo: 'palazzo',
  appartamento: 'appartamento',
  corridoio: 'salotto', salotto: 'salotto',
  biblioteca: 'biblioteca',
  porte: 'porte', cameretta: 'porte', spiaggia_grigia: 'porte', cabina: 'porte', stanza_sommersa: 'porte',
  cucina_fredda: 'cucina',
  sottoscala: 'sottoscala', mercante: 'sottoscala', galleria: 'sottoscala',
  sala_switch: 'switch', trono: 'switch',
  cattedrale: 'cattedrale', alba_colori: 'cattedrale',
};
for (const [id, scene] of Object.entries(CAMPAIGN)) {
  const zone = WORLD_MAP.find(w => w.key === MAP_ZONE_BY_LOCATION[scene.location]);
  if (zone) zone.scenes.push(id);
}
