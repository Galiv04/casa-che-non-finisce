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
