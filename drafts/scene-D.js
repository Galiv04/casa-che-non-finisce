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
