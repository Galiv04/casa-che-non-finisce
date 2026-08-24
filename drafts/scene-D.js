const SCENE_D = {

  /* ==================== LA CUCINA FREDDA ==================== */


  k15_occhio: {
    location: 'cucina_fredda',
    caption: 'L\'occhio nel pozzetto',
    text: `Prima di richiudere il coperchio, Federico fa la cosa che nessun manuale consiglia: si china sul pozzetto e guarda l'occhio di pesce DRITTO, da vicino, senza sbattere le palpebre.

L'occhio lo fissa. Federico lo fissa. Il freezer ronza.

E poi l'occhio fa una cosa che gli occhi di pesce non fanno: **si sposta.** Non verso Federico — OLTRE Federico, verso il soffitto, verso l'angolo della cucina, e poi di nuovo su Federico, e poi ANCORA verso l'angolo. Due volte. Tre volte. Insistente.

> Federico: "...mi sta indicando qualcosa."

> Claudia: "O ti sta prendendo in giro. È carne riorganizzata, Federico."

> Federico: "No, no. Questo è il gesto che fai quando non puoi parlare e vuoi che uno si VOLTI. Me lo fanno i clienti nelle riunioni, quando alle mie spalle il capo sta dicendo una stronzata."

Vi voltate. Nell'angolo indicato, in alto, dove il muro incontra il soffitto, c'è una **crepa sottile** — e dalla crepa filtra un filo di luce COLORATA. Verde, caldo, vivo. Luce che in questa cucina non dovrebbe esistere.

> Federico: *(richiudendo il pozzetto, piano, quasi con gratitudine)* "Il blocco è fatto di spesa VERA. Di cose che erano vive. E le cose vive, pure ridotte così..." *(dà due colpetti sul coperchio)* "...tifano per noi. Grazie, capo. La stronzata l'abbiamo vista."

**(C'è luce viva dietro una crepa della cucina — e perfino il mostro nel freezer sta dalla vostra parte.)**`,
    sets: { occhio_pozzetto: true },
    choices: [
      { text: '🚪 Richiudere il pozzetto e tornare alla cucina', next: 'k1' },
    ],
  },

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

**(Daniele sta combattendo, e adesso lo sapete.)**`,
    sets: { daniele_sabota: true },
    choices: [
      { text: '🥤 Seguire la freccia di lattine fino alla dispensa', next: 'k3' },
      { text: '🧊 Frugare il frigo fino in fondo — se lui lascia segnali, magari ne ha lasciati altri', tag: 'Prova di Costituzione — CD 12', check: { stat: 'COS', dc: 12, success: 'k1b', fail: 'k1c' } },
      { text: '📞 Il citofono. Rispondere al citofono che non può esistere.', next: 'k2' },
      { text: '❄️ Il congelatore a pozzetto, in fondo alla cucina. Ronza. E nessuno vuole guardarci dentro.', tag: 'Prova di Costituzione — CD 13', check: { stat: 'COS', dc: 13, success: 'k15', fail: 'k15b' } },
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

**(+4 PV a tutti. Nessuno lascia indietro Daniele. NESSUNO.)**`,
    heal: 4,
    sets: { parmigiana_daniele: true },
    choices: [
      { text: '🥤 Ora la freccia di lattine. Fino in fondo.', next: 'k3' },
      { text: '📝 Il post-it: girarlo — c\'è scritto qualcosa anche dietro', once: true, next: 'k1d' },
    ],
  },

  k1d: {
    location: 'cucina_fredda',
    caption: 'Il retro del post-it',
    sets: { postit_retro: true },
    text: `Claudia gira il post-it. Sul retro c'è la stessa grafia, ma più veloce: scritta dopo, di corsa, con la penna premuta così forte da bucare la carta in due punti.

*"Se leggete questo, io non sono in cucina. TAPPETO. →↓"*

Una freccia a destra. Poi una freccia in GIÙ.

> Federico: "Che cazzo vuol dire 'tappeto giù'—"

> Gaetano: *(già in ginocchio, che tira il tappeto per un angolo)* "Vuol dire che sotto il tappeto c'è una BOTOLA. E che tuo fratello l'ha trovata prima di noi. E che ce l'ha lasciata aperta."

Sotto il tappeto: una fessura quadrata nel pavimento, i bordi sporchi di ditate. Chiusa. Ma non chiusa a chiave.

> Claudia: *(rimette il post-it in tasca, dal lato della parmigiana)* "Ha scritto la cena davanti e le istruzioni dietro. Prima ci ha nutriti, poi ci ha dato la mappa. In quest'ordine. Tipico suo."

**(Sotto il tappeto c'è una botola, e Daniele ve l'ha segnata sul retro di un post-it.)**`,
    choices: [
      { text: '🖊 Scrivere una risposta sul retro del post-it e rimetterlo in tasca a Claudia', once: true, gold: 1, next: 'k3' },
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
      { text: '🩹 Emanuela: prima fasciare il braccio, poi camminare', once: true, heal: 1, next: 'k3' },
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
    combat: { enemies: ['luca_giunti'], victory: 'k2c', defeat: 'k_ko', loot: { gold: 1, items: ['taralli'] } },
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

**(🎨 +1 Colore: insegnare bene una cosa sola vale più di quattro ore.)**`,
    gold: 1,
    sets: { luca_promosso: true },
    choices: [
      { text: '🥤 Tornare alla freccia di lattine', next: 'k1' },
      { text: '📐 Il libro di fisica: Gaetano lo sfoglia e trova un esercizio svolto DA DANIELE', once: true, next: 'k2d' },
    ],
  },

  k2d: {
    location: 'cucina_fredda',
    caption: 'L\'esercizio a matita — pagina 214',
    sets: { esercizio_daniele: true },
    text: `Il libro di fisica di Luca Giunti resta per terra, aperto. Gaetano lo raccoglie per deformazione professionale — e si blocca a pagina 214. Moti armonici. Esercizio 7.

È svolto. A matita, nel margine larghissimo, con una grafia che Federico riconosce prima ancora di leggerla.

*"Molla, k = 40 N/m, massa 0,5 kg. T = 2π√(m/k) ≈ 0,70 s."* E sotto, più piccolo, completamente fuori tema: *"cioè torna al punto di partenza ogni sette decimi di secondo. Per sempre. Senza stancarsi. VOGLIO ESSERE UNA MOLLA."*

> Gaetano: *(che questa pagina l'ha spiegata duecento volte e non l'aveva mai letta così)* "Non è un esercizio. È uno che ha capito la formula e poi ci ha messo dentro se stesso. E il passaggio è pure GIUSTO, il che è la parte che mi commuove professionalmente."

> Federico: "Quando l'ha scritto?"

> Gaetano: "Non c'è la data. Ma la matita è mia: è una di quelle che lasciavo a casa sua quando gli spiegavo statistica." *(chiude il libro, piano)* "Quindi anni fa. Quindi già allora si allenava a tornare."

> Emanuela: "Allora ce lo riprendiamo, che deve tornare a rompere il cazzo sulle molle."

**(Un esercizio svolto a matita, e una nota fuori tema che vale più della soluzione.)**`,
    choices: [
      { text: '🥤 Tornare alla freccia di lattine', next: 'k1' },
    ],
  },

  k3: {
    location: 'cucina_fredda',
    stinger: 'item',
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
      { text: '🍳 Fermarsi. Accendere i fuochi. Cucinare qualcosa di VERO, adesso, con le scorte di Daniele.', once: true, next: 'k17' },
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

> Gaetano: "Ragazzi, questa calata è oltre qualunque margine." *(si sta già legando in vita, e lo dice mentre stringe il nodo)* "Quindi scendo io per primo, legato, e da sotto vi dico cosa c'è. Se tiene per me tiene per tutti. Ma si scende in cordata e piano, e questo lo dico guardandovi in faccia—"

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

Per un secondo tiene. Sentite il peso dell'amico appeso nel buio, nelle braccia e nella schiena, e state già tirando su, URLANDO e tirando su—

Poi il buio tira dall'altra parte. Ed è più forte.

Il nodo non si scioglie: si APRE, con gentilezza, come slacciato da dita pazienti. E il rumore che fa un amico che cade nel buio è questo: un fruscio, un colpo lontano, umido. Poi il silenzio. Il buio smette di respirare, come chi trattiene il fiato.

Nessuno si muove. Nessuno bestemmia. C'è solo il bordo della botola, le tovaglie flosce, e il vapore dei vostri fiati.

Poi dal buio sale una luce fredda, piccola, che risale la scala **senza toccare i pioli**. È l'amico. Il suo Spirito: trasparente, calmo, con addosso una luce da vecchia TV. Vi guarda dalla scala. Sa. E la faccia di chi resta — quella è la cosa peggiore che la casa vi abbia fatto finora.

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


  k11_oblo: {
    location: 'sottoscala',
    caption: 'Dentro gli oblò, da fermi',
    text: `Vi avvicinate agli oblò adesso che i giorni sono fermi, e guardate dentro come si guarda in un acquario spento.

Ogni lavatrice conteneva un giorno intero, e adesso che non gira più si vede COSA c'era nel carico: la scrivania col post-it "URGENTE" mai staccato. Il divano con l'incavo a forma di persona. La sveglia puntata alle 7:15 di un giorno che non è mai arrivato alle 7:16. Un giorno per oblò, identico a se stesso, piegato e ripiegato da anni di centrifuga.

Ma nell'ultimo oblò, il carico è diverso. Non c'è un giorno: c'è **un calendario.** Da tavolo, di quelli con la spirale. E ha una cosa che nessun altro oggetto del sottoscala ha: una pagina STRAPPATA. Via, di netto — il 17 del mese non c'è più.

> Emanuela: "Qualcuno, in mezzo al ciclo, ha strappato UN giorno ed è scappato."

> Gaetano: "O l'ha nascosto. Un giorno intero, sottratto alla centrifuga. Se la casa ricicla i giorni..." *(si china, e sotto la lavatrice, nella polvere, c'è dell'inchiostro: qualcuno ci ha scritto, a mano, dal basso)* "...c'è scritto qualcosa. 'IL 17 È MIO. NON È IN VENDITA. — D.'"

Silenzio lungo.

> Natalino: *(piano)* "D. Il 17. Ragazzi... Daniele è nato il 17. La casa gli macinava i giorni, e lui gliene ha strappato UNO. Il suo."

**(Perfino qui sotto, Daniele ha lasciato un segno di resistenza. Il suo compleanno non si tocca.)**`,
    sets: { oblò_ispezionati: true },
    choices: [
      { text: '🚶 Risalire, col diciassette in tasca come una bandiera', next: 'k5' },
    ],
  },

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
      { text: '🌀 Seguire un rumore di centrifughe, oltre le canne d\'organo dei tubi', next: 'k11' },
      { text: '📋 Una bacheca condominiale, avvitata tra due tubi-vena. E qualcuno la sta aggiornando.', next: 'k16' },
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

Sul banco, sotto una campana di vetro, una cosa che pulsa piano di tutti i colori insieme: un **CUORE DI COLORE**. Il cartellino: *"Resurrezione. Un'anima intera, riaccesa. Prezzo: 8 di Colore E un oggetto del cuore."* Il Mercante segue il vostro sguardo.

> Il Mercante: "Ah, quello. Quello ripaga i morti, sì. Ma il Colore da solo non basta: serve un oggetto rollato, cucito, comprato CON AMORE. L'affetto fatto a mano, qui sotto, vale oro." *(gli occhi — tutti — puntano il taschino di Natalino)* "Quel tronello, per esempio. Liturgia pura. Lo sento da qui."

> Natalino: "Il tronello no. IL TRONELLO NO."`,
    choices: [
      { text: '🎨 Boccata di Colore — "un sorso d\'estate, cura il Grigiore" (2🎨)', requiresGold: 2, gold: -2, item: 'boccata_colore' },
      { text: '🥤 Coca Zero "d\'annata" — "del suo lotto. Lui capirebbe." (1🎨)', requiresGold: 1, gold: -1, item: 'lattina_zero' },
      { text: '🧨 Lattina agitata — "arma da lancio. Non chiedete." (1🎨)', requiresGold: 1, gold: -1, item: 'lattina_agitata' },
      { text: '🔊 Cassa bluetooth con la playlist dell\'estate — "le cose grigie la ODIANO" (3🎨)', requiresGold: 3, gold: -3, item: 'cassa_bluetooth' },
      { text: '💗 ⚠️ CUORE DI COLORE — 8🎨 E il tronello di Natalino. Una vita intera.', requires: { item: 'tronello' }, requiresGold: 8, gold: -8, removeItem: 'tronello', item: 'cuore_colore', once: true },
      { text: '💗 CUORE DI COLORE, prezzo da colleghi — 5🎨 E il tronello. "Lo sconto è sconto." ', once: true, requires: { flag: 'sconto_mercante', item: 'tronello' }, requiresGold: 5, gold: -5, removeItem: 'tronello', item: 'cuore_colore' },
      { text: '🗣 "Il Divano-Trono. Cosa sai del Trono?" — pagare con una storia vera', next: 'k7' },
      { text: '🧰 "Cercate manodopera?" — il Mercante ha l\'aria di uno coi crediti in sospeso', once: true, next: 'k12' },
      { text: '🧮 "Le torna l\'inventario?" — il Mercante paga chi sa contare (paga 2🎨) — 🎮 MINIGIOCO', once: true, next: 'mg_inventario' },
      { text: '🕶 Fregarlo. Una boccata sparisce dal banco mentre Claudia lo distrae.', once: true, tag: 'Prova di Destrezza — CD 13', check: { stat: 'DES', dc: 13, success: 'k7b', fail: 'k7b_fail' } },
      { text: '👁 Il Mercante ha smesso di sorridere. Sostenere lo sguardo.', requires: { flag: 'furto_riuscito', notFlag: 'furto_a_libro' }, next: 'k6_furto' },
      { text: '🚶 Lasciare il banco: più avanti l\'intercapedine si allarga in una sala', next: 'k8' },
    ],
  },

  k6_furto: {
    location: 'mercante',
    caption: 'Il conto del collega',
    sets: { furto_a_libro: true },
    text: `Tornate al banco e il Mercante non dice niente. È questo, il problema.

Ha smesso di sorridere con generosità eccessiva. Ha rimesso la bilancia in bolla — dritta, perfetta, un rimprovero di ottone — e adesso vi guarda. TUTTA la faccia insieme, tutti gli occhi distribuiti male, fermi su di voi come una batteria di fari.

> Il Mercante: "Ammiro il mestiere. Sinceramente." *(la voce è cordiale e non c'entra niente col resto della faccia)* "Rubare a chi ruba è la forma più pura di rispetto professionale. Dentro di me vi ho applaudito."

> Claudia: "E fuori?"

> Il Mercante: "Fuori tengo i libri." *(apre il quadernone unto a una pagina nuova e ci scrive due righe a matita, senza guardare)* "Una Boccata. Segnata a debito, con la data di stanotte. Non vi mando il Riscossore, tesori: siete colleghi." *(chiude il quaderno con un colpo secco)* "Vi mando la FATTURA. Prima o poi. Quando vi fa più male."

> Natalino: *(a denti stretti, allontanandosi)* "Che è peggio del Riscossore."

> Gaetano: "Molto peggio. Il Riscossore arriva e finisce. Una fattura aperta te la porti in giro."

**(Il furto è a libro contabile, con la data di stanotte. Il Mercante non vi odia: vi ha ARCHIVIATI.)**`,
    choices: [
      { text: '↩ Tornare al banco e fare come se niente fosse', next: 'k6' },
    ],
  },


  mg_inventario: {
    location: 'mercante',
    stinger: 'dice',
    caption: 'L\'inventario del Mercante',
    text: `Il Mercante tira fuori un quadernone unto, pieno di colonne che non tornano da anni.

> Il Mercante: "Il Grigiore non sa contare. Sorprendente, eh? Sa TOGLIERE, ma i totali li sbaglia. Se mi chiudete quattro conti su cinque, tre Colore sono vostri. Se sbagliate... be', avrò riso gratis, che quaggiù non è poco."

*(🎮 MINIGIOCO — L'Inventario: cinque conti a tempo, si risponde ad alta voce tutti insieme. Ne servono quattro.)*`,
    minigame: {
      type: 'calcolo',
      success: 'k6_inv_ok', fail: 'k6_inv_ko',
      tag: 'L\'Inventario del Mercante — 5 conti a tempo, ne servono 4',
      config: {
        titolo: '🧮 L\'Inventario del Mercante',
        secondi: 20,
        domande: [
          { q: 'Dodici giorni di consegne, tre pacchi al giorno: quanti pacchi nell\'androne?', r: [ { t: '36', ok: true }, { t: '32', ok: false }, { t: '38', ok: false }, { t: '30', ok: false } ] },
          { q: 'Otto lavatrici, ogni ciclo macina un giorno: quanti giorni a settimana macina il sottoscala?', r: [ { t: '56', ok: true }, { t: '48', ok: false }, { t: '64', ok: false }, { t: '54', ok: false } ] },
          { q: 'Il Cuore costa 12🎨, lo sconto è di 4: prezzo da colleghi?', r: [ { t: '8', ok: true }, { t: '9', ok: false }, { t: '7', ok: false }, { t: '6', ok: false } ] },
          { q: 'Sei giorni di fila, due Coca Zero a sera: quante lattine nella freccia?', r: [ { t: '12', ok: true }, { t: '14', ok: false }, { t: '10', ok: false }, { t: '16', ok: false } ] },
          { q: 'Trentasei Lettori Grigi, e UNO ha il segnalibro: quanti leggono la stessa pagina da anni?', r: [ { t: '35', ok: true }, { t: '36', ok: false }, { t: '34', ok: false }, { t: '30', ok: false } ] },
        ],
      },
    },
  },

  k6_inv_ok: {
    location: 'mercante',
    stinger: 'success',
    caption: 'L\'inventario torna',
    text: `Il Mercante ricontrolla, matita tra i denti, e alla fine fa un verso che non gli sentirete mai più fare: un piccolo grugnito di RISPETTO.

> Il Mercante: "Quadra. Quadra TUTTO. Sapete quanti anni erano che il mio quadernone non vedeva un totale giusto?" *(spinge tre grumi di Colore sul bancone, caldi come sassi d'estate)* "La paga. E un consiglio in omaggio, che qui niente è gratis tranne oggi: il Grigiore sbaglia i conti perché ODIA i numeri precisi. Se stanotte arrivate al Trono... contate AD ALTA VOCE. Lo innervosisce da morire."

**(🎨 Colore +2, guadagnato col pallottoliere. E un'arma in più: i numeri precisi, detti forte.)**`,
    gold: 2,
    sets: { inventario_mercante: true },
    choices: [
      { text: '↩ Al bancone del Mercante', next: 'k6' },
    ],
  },

  k6_inv_ko: {
    location: 'mercante',
    stinger: 'fail',
    caption: 'L\'inventario non torna',
    sets: { inventario_sbagliato: true },
    text: `Il Mercante segue le vostre correzioni con la matita, poi si ferma. Ripercorre. Sospira dal profondo del cappotto.

> Il Mercante: "No. Adesso è SBAGLIATO IN UN MODO NUOVO, che quasi quasi è un talento." *(riprende il quadernone, quasi con tenerezza)* "Niente paga. Ma vi dico una cosa consolante: nemmeno il Grigiore sa contare, e guardate che carriera. Andate, andate. E se vi chiedono chi ha pasticciato la colonna dei riporti... io non vi ho mai visti."

**(Niente Colore stavolta. Il quadernone del Mercante vi sopravviverà a tutti.)**`,
    choices: [
      { text: '↩ Al bancone, fischiettando innocenza', next: 'k6' },
    ],
  },

  k7: {
    location: 'mercante',
    caption: 'Il prezzo di un segreto — una storia vera',
    stinger: 'gold',
    text: `Il Mercante appoggia sul banco tutte le mani che ha, e per la prima volta smette di sorridere. È peggio.

> Il Mercante: "Il Trono. Domanda da dodici, questa. Il Colore non basta: i segreti si pagano coi segreti. Raccontatemi una storia VERA. Una che non avete mai raccontato. Io mi nutro anche di quelle, nei mesi magri."

Vi guardate. Poi qualcuno parla — chi, resta tra voi e il sottoscala — e racconta una cosa vera, piccola, scomoda. Il Mercante ascolta con tutta la faccia, annuisce, e quando la storia finisce se la mette in una taschina del gilet, piegata come una banconota.

> Il Mercante: "Onesta. Sa di vero. Va bene: ascoltate." *(si china, la lampada da campeggio si abbassa da sola)* "Il vostro demone, quello col volto rubato. La casa è sua. Ma ogni notte — OGNI notte — deve tornare al **Divano-Trono**, nella Sala della Switch. La vita finta che tiene in loop là sopra non è scenografia: è la sua FLEBO. Si ricarica lì, staccato dal Grigiore, spina alla presa. E in quei minuti..." *(sorride di nuovo, e stavolta il sorriso è quasi umano)* "...in quei minuti è solo una cosa stanca su un divano. **Vulnerabile.** Non ditegli chi ve l'ha detto: è il mio padrone di casa, e l'affitto qui è già un furto."

> Claudia: "Perché ce lo dici davvero, però? Che ci guadagni?"

> Il Mercante: "Se vincete voi, il quartiere si riempie di Colore. E io campo di COMMERCIO, signorina, non di Grigiore. Un mercato morto non serve a nessuno."

**(🎨 +1 Colore: adesso sapete DOVE il demone sanguina. Segreto del Trono acquisito.)**`,
    gold: 1,
    sets: { segreto_trono: true },
    choices: [
      { text: '🚶 Verso la sala più avanti, dove l\'intercapedine si allarga', next: 'k8' },
      { text: '🛒 Prima di andare: il banco ha qualcosa di nuovo in vetrina', once: true, next: 'k6' },
    ],
  },

  k7b: {
    location: 'mercante',
    stinger: 'item',
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
      { text: '🚶 Filarsela verso la Galleria, prima che se ne accorga', next: 'k8' },
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
    combat: { enemies: ['mercante_guardia'], victory: 'k7c', defeat: 'k_ko', loot: { gold: 1 } },
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

**(🎨 +1 Colore: avete vinto a casa d'altri, secondo le regole d'altri.)**`,
    gold: 1,
    choices: [
      { text: '↩️ Tornare al banco — da clienti stimati, stavolta', next: 'k6' },
      { text: '🚶 Avanti: la Galleria dei Sonnambuli, con lo sconto in tasca', next: 'k8' },
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

> Gaetano: *(piano, e odiandosi)* "Se lo stacchiamo, la teca si spegne. E lui... si spegne con la teca. Guardate il quadro: non c'è alimentazione di riserva."

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
    stinger: 'item',
    caption: 'La teca spenta',
    text: `Lo fate. Lo fa Claudia, perché nessun altro ha alzato la mano, e qualcuno doveva.

Il Cuore di Colore si stacca dall'incastonatura con uno scatto morbido, e per un secondo la Galleria intera si abbassa di un tono, come quando salta la corrente in tutto il palazzo. La TV del sonnambulo fa un puntino bianco. Si spegne.

E il signore in pigiama a righe **si affloscia.** Non cade: si SVUOTA, piano, come un cappotto che scivola dalla gruccia. Il sorriso resta appeso alla faccia un secondo più del resto, e poi se ne va anche quello. La teca diventa una vetrina vuota con dentro un uomo che non ride più di niente, e non riderà mai più di qualcosa.

Nessuno parla. Il Cuore, in mano a Claudia, pulsa caldo e meraviglioso, e nessuno riesce a guardarlo.

> Claudia: "Ditemi che serviva. Qualcuno me lo dica, cazzo."

> Federico: "Serviva." *(pausa lunga)* "Non lo so se serviva. Ma se stanotte tocca a uno di noi, io questa cosa la rifarei, e mi odierei uguale."

> Natalino: "Camminiamo. Camminiamo e basta, per favore."

Vi rimettete in marcia. La targhetta della teca spenta dice: *"Casa singola, con giardino."* Chissà che giardino aveva.

**(Ottenuto: un CUORE DI COLORE. 🎨 -1 Colore: certi acquisti scoloriscono chi li fa.)**`,
    item: 'cuore_colore',
    goldLoss: 1,
    sets: { cuore_rubato_teca: true },
    choices: [
      { text: '🚶 Verso il fondo della Galleria, senza voltarsi', next: 'k9' },
      { text: '🪦 Leggere la targhetta della teca. Almeno il nome.', once: true, next: 'k8_targhetta' },
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

**(Ottenuto: un CUORE DI COLORE — e un uomo vivo. 🎨 +2 Colore: le due cose insieme. Solo Gaetano.)**`,
    item: 'cuore_colore',
    gold: 2,
    sets: { sonnambulo_salvato: true },
    choices: [
      { text: '🚶 Accompagnarlo verso il fondo della Galleria, dove c\'è il quadro elettrico', next: 'k9' },
      { text: '👴 Prima: chiedergli cosa vedeva nel programma grigio', once: true, next: 'k8_programma' },
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
    combat: { enemies: ['sonnambulo', 'sonnambulo', 'sonnambulo'], victory: 'k9', defeat: 'k_ko', loot: { gold: 1 } },
    choices: [],
  },


  k8_targhetta: {
    location: 'galleria',
    caption: 'La targhetta della teca',
    text: `Claudia torna alla vetrina vuota. Se il Cuore è costato quello che è costato, il MINIMO è sapere a chi apparteneva.

La targhetta d'ottone è piccola, avvitata storta, incisa a mano:

*"RINO — piano terra, interno 2. Rideva alle repliche. TUTTE le repliche. Anche quelle che sapeva a memoria. SOPRATTUTTO quelle che sapeva a memoria. — Acquisito per abbandono: nessuno lo chiamava da 3 anni, 2 mesi, 11 giorni."*

> Claudia: *(legge due volte, poi tira fuori il telefono e FOTOGRAFA la targhetta)* "Rino. Piano terra, interno 2. Se usciamo di qui, io al citofono dell'interno 2 ci suono. Mi invento un sondaggio, una raccolta firme, qualsiasi cosa. Una volta a settimana."

> Federico: "Claudia..."

> Claudia: "'Acquisito per abbandono', Federico. La casa non l'ha RAPITO. L'ha RACCOLTO. Come si raccoglie una cosa che nessuno stava tenendo." *(mette via il telefono, e la voce le si indurisce in una cosa che somiglia a un giuramento)* "Il demone non crea il grigio. Il grigio glielo REGALIAMO noi, un numero non chiamato alla volta. Be': io da stanotte richiamo."

**(Il nome era Rino, e la sua storia è un'accusa — la casa raccoglie ciò che noi lasciamo cadere. Claudia non lo dimenticherà.)**`,
    sets: { teca_nome_letto: true },
    choices: [
      { text: '🚶 Avanti, con un nome in più da restituire', next: 'k9' },
    ],
  },


  k8_programma: {
    location: 'galleria',
    caption: 'Cosa dava il programma grigio',
    text: `Il signore in pigiama a righe — sveglio, confuso, vivo — si massaggia gli occhi come dopo un pomeriggio intero di TV. Natalino gli porge il braccio e la domanda insieme:

> Natalino: "Signò, senza fretta. Ma che davano, là dentro? Che cosa stava guardando da... da tutto questo tempo?"

Il signore ci pensa. E la faccia che fa è la cosa più triste della stanza:

> Il signore: "...il MIO programma. Quello che aspettavo sempre. Solo che non cominciava mai." *(si guarda le mani)* "C'era la sigla, capite? La sigla partiva, e io dicevo 'ecco, adesso inizia'. E ripartiva la sigla. Per anni. E io lì, comodo, che aspettavo. Perché la sigla era BELLA, e aspettare una cosa bella... non sembra tempo perso. Sembra quasi vivere."

Silenzio. Poi aggiunge, piano, la cosa peggiore:

> Il signore: "La poltrona era comodissima. È questo che dovete capire, ragazzi, se volete battere questa casa: non ti LEGA. Ti METTE COMODO."

> Federico: *(sottovoce, a nessuno in particolare)* "La sigla senza il programma. Il trailer senza il film. Lo scroll senza il post che cercavi." *(scuote la testa)* "Questa casa non ha inventato NIENTE. Ha solo alzato il volume."

**(Il Grigiore non incatena — ACCOMODA. E la sigla eterna è la sua arma migliore. Sapere come lavora è già mezza uscita.)**`,
    sets: { programma_svelato: true },
    choices: [
      { text: '🚶 Avanti, e da domani meno sigle per tutti', next: 'k9' },
    ],
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

**(🎨 +1 Colore. Qualcosa ci dice che li rivedrete quando conterà davvero.)**`,
    gold: 1,
    sets: { sonnambuli_svegli: true },
    choices: [
      { text: '🧗 Risalire: la cucina, e poi il resto della notte', next: 'k10' },
      { text: '👋 La signora in vestaglia: ha qualcosa da dirvi', once: true, next: 'k9d' },
    ],
  },

  k9d: {
    location: 'galleria',
    caption: 'Il consiglio della signora in vestaglia',
    sets: { signora_consiglio: true },
    text: `La signora in vestaglia si avvicina al vetro rotto della sua teca e vi fa cenno di abbassarvi, come si fa coi nipoti quando c'è da dire la cosa importante.

> La signora: "Voi lo andate a cercare, quello grande. Si vede. Allora sentite una vecchia che ci ha dormito dentro." *(si stringe la vestaglia al collo)* "Non combattetelo coi pugni, il grigio. Coi pugni ci va a nozze: i pugni sono roba che si stanca."

> Federico: "E con cosa, allora?"

> La signora: "Con i **NOMI**. Il grigio odia chi ha un nome, perché il nome è un colore che non sbiadisce. Qua sotto per anni sono stata 'quella della quaranta-due'. Stanotte quel ragazzo là" *(indica Gaetano)* "ha tirato una leva e io sono tornata a essere **ADELE**. Sentite come suona? Suona che esisto."

> Emanuela: *(che si è già asciugata gli occhi due volte facendo finta di no)* "Adele. Piacere. Emanuela."

> La signora: "Piacere mio, tesoro." *(le stringe la mano, e la mano è tiepida)* "Adesso andate. E a quello là in cima diteglielo in faccia, il suo nome. Vedrete che gli si storta la bocca."

**(Il grigio si combatte coi NOMI. Adele, quaranta-due, non la dimenticherete.)**`,
    choices: [
      { text: '🧗 Risalire: la cucina, e poi il resto della notte', next: 'k10' },
    ],
  },

  k9c: {
    location: 'galleria',
    stinger: 'hit',
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
      { text: '🔧 Gaetano studia lo sportello blindato: la prossima volta non ci frega', once: true, next: 'k9_sportello' },
    ],
  },


  k9_sportello: {
    location: 'sottoscala',
    caption: 'Lo sportello, studiato',
    text: `Gaetano si prende trenta secondi che nessuno gli vuole concedere e li usa tutti: torcia tra i denti, dita sui bordi dello sportello blindato, la faccia a un palmo dal metallo.

> Gaetano: "Interessante. Non è blindato per tenere FUORI noi." *(indica i cardini: sono montati al contrario, la battuta è interna)* "È blindato per tenere DENTRO qualcosa. E guardate qua—" *(la torcia illumina, lungo il bordo, una fila di graffi sottili, tutti alla stessa altezza)* "—questi non sono attrezzi. Sono UNGHIE. Dall'interno. Qualcosa là dentro gratta da anni, sempre nello stesso punto, con una pazienza da ergastolano."

> Emanuela: "E questo ci aiuta COME, esattamente?"

> Gaetano: "Ci aiuta così: la casa ha cose che TEME. Cose sue, che chiude a chiave. Il che significa due notizie: la prima è che non è onnipotente nemmeno in casa propria." *(spegne la torcia)* "La seconda è che se mai ci servisse un diversivo... sappiamo dove la casa tiene i suoi problemi."

**(La casa ha prigionieri SUOI. Una serratura che teme ciò che chiude è una debolezza con i cardini.)**`,
    sets: { quadro_studiato: true },
    choices: [
      { text: '🚶 Avanti — e quei graffi, meglio non pensarci troppo', next: 'k10' },
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

**(La via della cucina è vostra: ora sapete cosa nutre la casa, e dove dorme il suo padrone.)**`,
    sets: { via_cucina: true },
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
      { text: '🧊 La cucina fredda: adesso che la botola è chiusa, c\'è qualcosa di nuovo sul bancone', once: true, next: 'k10b' },
    ],
  },

  k10b: {
    location: 'cucina_fredda',
    caption: 'Omaggio della ditta',
    stinger: 'item',
    sets: { cucina_dopo_botola: true },
    item: 'boccata_colore',
    text: `Sul bancone della cucina fredda, dove dieci minuti prima non c'era niente, c'è un pacchetto. Carta da macellaio, spago, e sopra — appoggiato con cura da orefice — un cartoncino unto:

*"OMAGGIO DELLA DITTA. Voi non avete visto niente della mia contabilità, io non ho visto niente delle vostre mani. — Il M."*

Dentro il pacchetto: una fiala tiepida di **Boccata di Colore**. E un tarallo. Un tarallo solo, di quelli buoni.

> Natalino: "Ci ha mandato un regalo. Una cosa con sei mani e un socio che si chiama RISCOSSORE ci ha mandato un regalo."

> Gaetano: "Non è un regalo. È un patto di non belligeranza redatto in linguaggio commerciale. Il che lo rende più affidabile di un regalo."

> Emanuela: *(si mette la fiala in borsa, poi spacca il tarallo in cinque pezzi identici a occhio, perché è brava)* "Va bene comunque. Stanotte prendo alleati anche brutti."

**(Nello zaino: una Boccata di Colore, omaggio della ditta. La cucina, vista da sotto, ha cambiato idea su di voi.)**`,
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
    ],
  },

  /* ============ LA LAVANDERIA DEI GIORNI UGUALI ============ */

  k11: {
    location: 'sottoscala',
    caption: 'La Lavanderia dei Giorni Uguali',
    text: `Il rumore di centrifughe vi porta in una rientranza dell'intercapedine dove qualcuno — qualcosa — ha allestito una **lavanderia condominiale**. Otto lavatrici contro la parete di mattoni vivi, allacciate ai tubi-vena con raccordi che pulsano. Girano tutte. Girano da SEMPRE: il pavimento sotto ognuna è consumato a conca, come i gradini delle chiese.

Vi avvicinate agli oblò, e capite. Dentro non ci sono panni.

Dentro girano **giornate.** Nell'oblò della prima: una scrivania, un monitor, una tazza — che ruotano nell'acqua grigia, si afflosciano, si distendono, ricominciano. Nella seconda: un divano e una TV accesa, piegati e ripiegati come lenzuola. Nella terza una sveglia che suona, si spegne, suona, si spegne. Sono i giorni di qualcuno. **Lo stesso giorno**, di qualcuno, lavato e rilavato finché non stinge.

> Claudia: "È qui che li fa diventare grigi. Non gli ruba i giorni: glieli LAVA. A novanta gradi, finché non escono tutti uguali."

> Gaetano: *(leggendo la targhetta di una lavatrice)* "'Ciclo: QUOTIDIANO. Durata: —'. Non c'è la durata. Non finisce."

> Natalino: "Ho passato la vita a dire 'io una routine così me la sogno'. Ritiro tutto. RITIRO TUTTO."

Sulla parete, un cartello scritto a mano: *"NON APRIRE DURANTE IL CICLO. Il ciclo è sempre."*

> Federico: "Quindi o non si apre mai, o quel cartello è una supercazzola. Tertium non datur."`,
    choices: [
      { text: '🌀 Aprire un oblò durante il ciclo. Il cartello non è la vostra mamma.', next: 'k11b' },
      { text: '🔌 Gaetano studia i raccordi: fermarle TUTTE, in sequenza, senza far scoppiare le vene', tag: 'Prova di Intelligenza — CD 13', check: { stat: 'INT', dc: 13, success: 'k11c', fail: 'k11b' } },
      { text: '💪 Al diavolo la sequenza: strappare i raccordi a mano, tutti e otto', tag: 'Prova di Forza — CD 13', check: { stat: 'FOR', dc: 13, success: 'k11c', fail: 'k11b' } },
      { text: '🚶 Lasciar girare. Tornare alle canne d\'organo.', next: 'k5' },
    ],
  },

  k11b: {
    location: 'sottoscala',
    caption: 'L\'oblò aperto — il giorno esce a vedere chi è',
    stinger: 'jumpscare',
    text: `L'oblò si apre. Che l'abbiate forzato voi o che sia scattato da solo per punire le mani sui raccordi, non fa differenza: la lavatrice **finisce il ciclo in anticipo**, e il ciclo non l'ha presa bene.

L'acqua grigia esce sul pavimento, ma non si allarga come acqua: si allarga come una GIORNATA. Sul bagnato prendono forma le otto di mattina — una radio che parla di traffico, l'odore di caffè fatto senza voglia — poi mezzogiorno, poi le sei di sera, tutto in dieci secondi, tutto addosso a voi. Vivete un giorno intero di qualcun altro, un giorno grigio e identico a se stesso, e lo vivete IN LOOP: tre giri, quattro, e a ogni giro vi pesa di più alzarvi dal punto in cui siete, e a ogni giro la radio dice le stesse identiche parole sul traffico in tangenziale.

Poi dall'oblò esce una **mano** — molle, stirata, coi segni della centrifuga — e vi tasta la faccia. Non per farvi male. Per vedere se siete NUOVI. Se siete da lavare.

Ve la staccate di dosso urlando, e Emanuela richiude l'oblò con una ginocchiata da buttafuori di Ibiza.

> Emanuela: "NO. Lui NO. Noi i giorni ce li sporchiamo DA SOLI, grazie."

> Natalino: *(seduto per terra, bianco)* "Ho sentito la tangenziale, ragazzi. Ho sentito la tangenziale DENTRO."

**(-3 PV a tutto il gruppo. Il giorno di qualcun altro vi resta appiccicato come bagnato.)**`,
    damage: 3,
    choices: [
      { text: '🔌 Adesso basta: fermarle tutte, con metodo', tag: 'Prova di Intelligenza — CD 13', check: { stat: 'INT', dc: 13, success: 'k11c', fail: 'k11b' } },
      { text: '💪 Adesso basta: fermarle tutte, a strappo', tag: 'Prova di Forza — CD 13', check: { stat: 'FOR', dc: 13, success: 'k11c', fail: 'k11b' } },
      { text: '🚶 Indietreggiare e tornare alle canne d\'organo', next: 'k5' },
    ],
  },

  k11c: {
    location: 'sottoscala',
    caption: 'Fine ciclo — il silenzio che non sentivano da anni',
    stinger: 'gold',
    text: `L'ultimo raccordo si stacca con un sospiro di vapore, e le otto lavatrici **si fermano insieme.**

Il silenzio che segue è un oggetto fisico. Le centrifughe giravano da così tanto che il rumore era diventato parete, pavimento, aria — e adesso che non c'è più, il sottoscala sembra più grande e molto più freddo. Le vostre orecchie fischiano. Il fiato torna a uscire bianco, come di sopra, come se il tepore da stomaco di questo posto fosse — anche lui — solo un ciclo che qualcuno aveva dimenticato acceso.

Dentro gli oblò, i giorni si **depositano.** La scrivania smette di girare. Il divano si affloscia sul fondo. La sveglia suona un'ultima volta, piano, e nessuno la spegne, e va bene così. L'acqua grigia scola via nei tubi-vena, e per un momento — un momento solo — dai tubi arriva un suono che nessuno di voi dimenticherà: come cento persone, lontanissime, che si girano nel letto **dall'altra parte.**

> Claudia: "Non li abbiamo svegliati. Però... gli abbiamo spento la lavatrice. Da domani i giorni se li sporcano di nuovo da soli."

> Gaetano: "In termini tecnici: abbiamo tolto il ricircolo. Il Grigiore qui sotto adesso gira a vuoto."

> Federico: *(alzando una birra al limone immaginaria)* "Alla fine del ciclo. Che è la cosa più bella che si possa dire in una lavanderia."

Fa freddo. È il freddo giusto: quello dei posti dove non si lava più niente per forza.

**(🎨 +1 Colore. Otto giorni uguali, restituiti ai legittimi proprietari.)**`,
    gold: 1,
    choices: [
      { text: '🚶 Tornare alle canne d\'organo dei tubi', next: 'k5' },
      { text: '👀 Guardare dentro gli oblò: cosa resta di un giorno quando smette di girare?', once: true, next: 'k11_oblo' },
    ],
  },

  /* ============ IL LAVORETTO DEL MERCANTE ============ */

  k12: {
    location: 'mercante',
    caption: 'Il pegno insoluto — un lavoretto pulito',
    text: `Il Mercante Grigio smette di lucidare la bilancia. Tutta la faccia — ogni sua parte, distribuita male — vi guarda con l'interesse improvviso di un datore di lavoro davanti a manodopera gratis.

> Il Mercante: "Manodopera. MANODOPERA, dice. Sedetevi— no, non c'è dove. Restate in piedi con entusiasmo." *(fruga in una taschina del gilet, tira fuori una ricevuta gialla, antica)* "Un cliente, anni fa. Comprò a credito e lasciò in pegno la cosa più preziosa che aveva: **il ricordo della sua prima casa.** Odore di pittura fresca, la moglie che ride nelle stanze vuote, tutto in un barattolo. Poi il cliente sparì — la casa se lo mangiò, capita — e la CASA, quella grande, quella di sopra, mi ha SEQUESTRATO il pegno. Confiscato. A me. Per 'morosità del debitore'. Capite l'affronto?"

> Gaetano: "E dove lo tiene, la casa, la roba confiscata?"

> Il Mercante: "In Galleria. Ultima fila. Una teca senza sonnambulo dentro — solo il mio barattolo, e davanti alla teca **l'Ufficiale**: il riscossore DELLA CASA. Quello abusivo. Quello che riscuote senza partita IVA." *(tutte le mani si stringono a pugno, una dopo l'altra)* "Riportatemi il pegno. Il barattolo non apritelo — il ricordo non è vostro e i ricordi altrui danno la nausea. Pagamento alla consegna. Pago BENE. Per i miei standard. Che sono standard."

> Natalino: "Stiamo per fare un recupero crediti per conto di una cosa con sei mani. Lo dico ad alta voce così domani non potrò dire che non lo sapevo."`,
    choices: [
      { text: '🧰 Accettare il lavoretto: ultima fila della Galleria, teca sorvegliata', next: 'k13' },
      { text: '↩️ "Ci pensiamo." Tornare al banco.', next: 'k6' },
    ],
  },

  k13: {
    location: 'galleria',
    caption: 'La teca confiscata — l\'Ufficiale della casa',
    text: `Ultima fila della Galleria, dove le luci delle teche si diradano e il vetro è più sporco. Eccola: una teca **senza poltrona e senza TV**, e dentro, su un cuscinetto da gioielleria, un barattolo da conserva. Dentro il barattolo, una luce piccola e calda che si muove come una casa vista da fuori, la sera, quando dentro c'è qualcuno che ami.

Davanti alla teca c'è **l'Ufficiale.**

È come il Riscossore del Mercante, ma peggio: più alto, più giunture, e al posto del blocchetto di ricevute ha un **timbro** cucito nel petto, che sale e scende da solo — TUNK, TUNK — timbrando l'aria, per tenersi in esercizio. Addosso ha una fascia da ufficiale giudiziario fatta con la stoffa di una vestaglia. Accanto a lui, di guardia, un sonnambulo in ciabatte con gli occhi pieni di programma grigio.

> L'Ufficiale: *(senza voltarsi)* "Bene confiscato. Articolo undici. Chi tocca, viene messo agli atti." *(TUNK)* "Voi avete la faccia di chi sta per farsi mettere agli atti."

> Emanuela: "Senti, bello: il barattolo non è tuo, non è della casa, ed era di un signore che voi vi siete MANGIATI. Questo non è un pignoramento, è sciacallaggio col timbro."

> L'Ufficiale: *(si volta, tutto insieme, con troppe giunture)* "Resistenza a pubblico ufficiale." *(TUNK)* "Aggravata." *(TUNK)* "Da FACCIA." *(TUNK)*

> Federico: "Menatelo. Menatelo e basta, ho la partita IVA e questo mi offende personalmente."

**(Combattimento! L'Ufficiale timbra a distanza, il sonnambulo difende il vetro. Il barattolo, dentro la teca, fa una luce piccola e tifa per voi.)**`,
    combat: { enemies: ['mercante_guardia', 'sonnambulo'], victory: 'k14', defeat: 'k_ko', loot: { gold: 1 } },
    choices: [],
  },

  k14: {
    location: 'mercante',
    caption: 'Pagamento alla consegna',
    stinger: 'campana',
    text: `L'Ufficiale giace smontato in ordine alfabetico, il sonnambulo dorme accoccolato contro la sua teca — l'avete ADAGIATO, mica siete bestie — e il barattolo adesso ce l'ha in mano Claudia, tenuto con due mani, come si tengono i pulcini e le cose di valore altrui.

Al banco, il Mercante Grigio lo prende e fa una cosa che non vi aspettavate: **non lo mette via.** Lo tiene un momento contro quello che dovrebbe essere il petto, e tutta la faccia — ogni parte, distribuita male — si chiude come una serranda a fine giornata.

> Il Mercante: "Trent'anni che il mio cliente non c'è più, e io il suo pegno lo custodivo LO STESSO. Perché un pegno è una promessa: 'torno a riprendermelo'. Finché il pegno è al suo posto, il cliente può ancora tornare." *(lo posa sotto il banco, piano)* "Non tornerà. Ma adesso la promessa è di nuovo a casa MIA, non in una teca di quel padrone ladro. È diverso. Nel mio mestiere è TUTTO."

Poi batte una mano sul banco — una a caso, ne ha — e torna Mercante.

> Il Mercante: "Pagamento alla consegna, come da accordi. Scegliete: una **Boccata di Colore**, omaggio della ditta — oppure ve lo segno come CREDITO: **sconto vero sul pezzo grosso in vetrina.** Il Cuore. Da dodici a otto, più l'oggetto d'amore. Non fatemelo ripetere che mi sanguina il gilet."

> Gaetano: "Un demone ci offre il welfare aziendale. Comunque vada stanotte, questo posto mi mancherà."`,
    choices: [
      { text: '🎨 La Boccata di Colore, subito: un sorso d\'estate in tasca', once: true, requires: { notFlag: 'sconto_mercante' }, item: 'boccata_colore', sets: { ricompensa_ritirata: true }, next: 'k6' },
      { text: '💗 Il credito: lo sconto sul Cuore di Colore. Le vite prima dei sorsi.', once: true, requires: { notFlag: 'ricompensa_ritirata' }, sets: { sconto_mercante: true }, next: 'k6' },
      { text: '↩️ Tornare al banco senza decidere ancora', next: 'k6' },
    ],
  },

  /* ============ IL CONGELATORE A POZZETTO ============ */

  k15: {
    location: 'cucina_fredda',
    caption: 'Il pozzetto — guardare fino in fondo',
    stinger: 'item',
    text: `Il congelatore a pozzetto ronza in fondo alla cucina come una cosa che finge di dormire. Il coperchio si solleva con un risucchio di guarnizione, e il fiato del pozzetto vi sale in faccia: freddo VECCHIO, freddo di anni.

Dentro, sotto il primo strato di brina, c'è **la cosa che nessuno voleva guardare.** È stata una spesa, una volta: si riconoscono le forme — polli, braciole, un polpo intero — ma il gelo l'ha fusa in un blocco unico, e il blocco ha fatto quello che fa la carne in questa casa quando nessuno la guarda: si è **riorganizzata.** Ali dove non vanno ali. Una fila di ventose lungo una costata, che si stringono piano nel ghiaccio. E in mezzo al blocco, un occhio di pesce, grande come un piatto, che vi segue senza sciogliersi.

Chi sta guardando NON distoglie lo sguardo. È l'unico modo: la carne riorganizzata odia i testimoni. Sotto il vostro sguardo fisso smette di stringersi, si ritira, si finge di nuovo spesa — e sul fondo del pozzetto, incastonata nel ghiaccio pulito, appare la sorpresa.

Una confezione di **IPA**. A colori. Con un post-it congelato: *"Scorta d'emergenza di Gaetano. Se Gaetano sta leggendo: te l'avevo detto che le nascondevo bene. — D."*

> Gaetano: *(tirandola fuori dal ghiaccio, la voce non proprio ferma)* "Le ha nascoste SOTTO il mostro. Perché sapeva che io fino in fondo al pozzetto non ci sarei mai andato."

> Emanuela: "E invece ci sei andato. Salute, ingegnere."

**(Trovata: l'IPA di Gaetano, gelata al punto giusto. Avete guardato in fondo e il fondo ha ceduto per primo.)**`,
    item: 'ipa_gaetano',
    choices: [
      { text: '↩️ Richiudere il coperchio, piano, e tornare al centro della cucina', next: 'k1' },
      { text: '👁 L\'occhio di pesce: prima di chiudere, guardarlo DRITTO', once: true, next: 'k15_occhio' },
    ],
  },

  k15b: {
    location: 'cucina_fredda',
    caption: 'Il pozzetto — la carne conta i testimoni',
    stinger: 'jumpscare',
    text: `Il coperchio si solleva, il fiato del pozzetto vi sale in faccia — e chi sta guardando **sbatte le palpebre.**

Basta quello.

Il blocco di carne sotto la brina si muove TUTTO INSIEME, con lo scricchiolio di un iceberg che cambia idea. Le ventose lungo la costata si aprono come bocche di neonato, l'occhio di pesce grande come un piatto ruota nel ghiaccio e vi mette A FUOCO, e dal fondo del pozzetto sale una zampa — era un pollo, si vede ancora l'etichetta del prezzo attaccata, 4,90 al chilo — che afferra il bordo con le dita che i polli non hanno.

Il pozzetto **prova a inghiottirvi.** Il coperchio vi si abbatte sulla schiena come una mandibola, la brina vi morde i polsi, e per un secondo vedete il fondo: il fondo è molto, molto più in basso del fondo, e laggiù la carne di tutte le spese dimenticate del mondo aspetta compagnia.

Vi strappate indietro in un groviglio, e il coperchio si richiude da solo con uno sbuffo di guarnizione, offeso.

> Natalino: "IL POLLO AVEVA ANCORA IL PREZZO. Quattro e novanta. Io questa cosa la sogno per DIECI ANNI."

> Claudia: *(ansimando, la schiena contro il frigo)* "Ho visto una cosa in fondo. Una cosa A COLORI. C'è qualcosa di VERO là sotto, ragazzi. Sotto tutta quella... spesa."

> Federico: "Ovvio che c'è. È questa casa: le cose belle le mette sempre SOTTO le cose orrende. È il suo modello di business."

**(-3 PV, tra il morso del coperchio e il freddo vecchio.)**`,
    damage: 3,
    choices: [
      { text: '❄️ Riaprire. Stavolta senza battere le palpebre.', tag: 'Prova di Costituzione — CD 13', check: { stat: 'COS', dc: 13, success: 'k15', fail: 'k15b' } },
      { text: '↩️ Il pozzetto ha vinto questo round. Tornare al centro della cucina.', next: 'k1' },
    ],
  },

  /* ============ DUELLO DI PAROLE: L'AMMINISTRATORE ============ */

  k16: {
    location: 'sottoscala',
    caption: 'La bacheca condominiale — l\'Amministratore',
    text: `La bacheca è vera, di quelle col vetro e la chiavetta, avvitata tra due tubi-vena. Dentro, avvisi ingialliti: *"Si ricorda ai condomini che il COLORE va conferito negli appositi contenitori"*, *"L'assemblea del 12 u.s. ha deliberato il SILENZIO"*. E davanti alla bacheca, di spalle, c'è una cosa in giacca e cravatta che appende un avviso nuovo con quattro puntine e sei dita per mano.

Si volta. Ha una faccia da fototessera: piatta, grigia, valida per tutti gli usi di legge.

**🗣 DUELLO DI PAROLE**

> L'Amministratore: "Ah. I condomini nuovi. Arrivate a proposito: c'è un avviso che vi riguarda." *(indica il foglio appena appeso, timbrato tre volte)* "**Regolamento condominiale, articolo 9: è fatto divieto ai condomini di abbandonare l'immobile.** Approvato dall'assemblea, ratificato dal proprietario, timbrato dall'ufficio competente. Vedete i timbri? TRE. Non sono io a dirlo, capite: è il REGOLAMENTO. Io sono solo l'amministratore: io le regole le applico, mica le discuto. Nessuno le discute. Sarebbe come discutere la gravità, o l'IMU. Firmate qui la presa visione, e accomodatevi ai vostri posti: il programma sta per ricominciare."

E la penna che vi porge è già intinta di grigio.

*(Vi torna in mente una cosa che Daniele diceva sempre, dal divano, senza alzare gli occhi dalla Switch: "Un timbro non è un argomento. Quando ti sventolano una firma, chiedi sempre CHI ha firmato, e perché ne saprebbe più di te.")*`,
    choices: [
      { text: '⚖️ "FALSA DICOTOMIA! Non è vero che o firmiamo o siamo fuorilegge!"', once: true, next: 'k16c' },
      { text: '📜 "AUTORITÀ! Un timbro non è un argomento: chi ha firmato quel regolamento non ha NESSUN potere su di noi!"', next: 'k16b' },
      { text: '👥 "RIPROVA SOCIALE! Non firmiamo solo perché tutti i condomini hanno firmato!"', once: true, next: 'k16c' },
    ],
  },

  k16b: {
    location: 'sottoscala',
    caption: 'La ratifica mancante',
    stinger: 'risata',
    text: `> Voi: "Autorità. È l'argomento dell'AUTORITÀ, e non ce l'hai. Tre timbri, dici? E CHI li ha messi? 'L'ufficio competente'? Competente su cosa? 'L'assemblea'? Convocata quando, con quali firme? Quel regolamento non ha nessun potere su di noi: noi non l'abbiamo mai firmato, non siamo condomini, e un timbro non è un argomento — è un TIMBRO. Inchiostro a forma di cerchio. La gravità funziona anche senza ratifica. Il tuo articolo 9 no."

L'Amministratore apre la bocca. La richiude. Riapre la bocca e — **si inceppa.** Le sei dita per mano corrono agli avvisi in bacheca, girano i fogli, cercano la pagina con la risposta, e la pagina non c'è: sotto i timbri non c'è NIENTE, gli avvisi sono ingialliti perché sono VUOTI, sempre stati vuoti, e adesso lo vedete tutti e lo vede anche lui.

> L'Amministratore: "L'assemblea... l'assemblea del 12 u.s. ha... l'assemblea..." *(la faccia da fototessera comincia a scollarsi a un angolo, come un bollo mal messo)* "...non c'è mai stata un'assemblea. Amministro un condominio che non ha... nessuno mi ha mai... **chi mi ha assunto?**"

Ed è questa domanda che lo smonta: si affloscia dentro la giacca come un ombrello chiuso, e la giacca resta lì, appesa al nulla, davanti alla sua bacheca di fogli vuoti.

> Federico: "Trent'anni di riunioni di condominio mi hanno preparato ESATTAMENTE a questo momento. Ne è valsa la pena."

> Claudia: *(staccando l'avviso dell'articolo 9, piegandolo, intascandolo)* "Souvenir. E ricordatevi tutti la regola di Daniele: un timbro non è un argomento."

**(🎨 +1 Colore: l'incantesimo dell'Autorità si spezza con una domanda sola — "chi l'ha detto?")**`,
    gold: 1,
    choices: [
      { text: '📬 Frugare l\'archivio dell\'Amministratore: se aveva le chiavi, forse aveva anche i DEBITI', once: true, next: 'k16d' },
      { text: '🚶 Tornare alle canne d\'organo dei tubi', next: 'k5' },
    ],
  },

  k16d: {
    location: 'sottoscala',
    caption: 'L\'archivio — le bollette si difendono',
    stinger: 'jumpscare',
    text: `Dietro la bacheca, dove prima c'era solo muro, l'Amministratore lascia in eredità un **schedario** — quattro cassetti d'acciaio, ognuno con l'etichetta di un anno, e l'ultimo cassetto non ha anno: ha scritto **"SEMPRE"**.

Federico lo apre. Dentro: **bollette.** Migliaia. Buste bianche con la finestrella, impilate come mattoni, e ognuna — OGNUNA — intestata a Daniele. Gas, luce, acqua, internet, assicurazione, la rata della palestra mai disdetta, l'abbonamento allo streaming che non guarda da mesi e non cancella per pigrizia, e in fondo a tutto una busta rossa con scritto **"MORA"** che pulsa come un cuore malato.

> Gaetano: "Non sono vere. Cioè: sono bollette VERE, ma non sono le SUE — sono la PAURA delle sue. Il Grigiore le ha incubate dalla sua ansia e le ha archiviate qui sotto come munizioni."

Poi il cassetto SEMPRE si spalanca da solo, e le bollette **escono.**

Escono VOLANDO — un vortice di buste bianche con la finestrella, i bordi taglienti come rasoi, che vi frullano intorno tagliando l'aria e la pelle. Ogni taglio brucia il doppio: perché è ADDEBITATO. Sul polso di Natalino, dove una busta ha graffiato, compare un numero rosso piccolo, una cifra con la virgola: il costo del taglio, in euro e centesimi.

> Natalino: "MI STANNO FATTURANDO IL SANGUE. Io queste le cestino TUTTE."

> Emanuela: "Phon. PHON: la carta brucia, e le bollette sono CARTA."

**(Combattimento! Lo Sciame di Bollette taglia a raffica: ogni colpo si propaga al vicino, come gli interessi.)**`,
    combat: { enemies: ['sciame_bollette', 'sciame_bollette'], victory: 'k16e', defeat: 'k_ko', loot: { gold: 1 } },
    choices: [],
  },

  k16e: {
    location: 'sottoscala',
    caption: 'Debito estinto',
    stinger: 'gold',
    sets: { bollette_incenerite: true },
    text: `L'ultimo sciame cade come coriandoli — buste bianche che si accartocciano in volo, carbonizzate dal phon o sventrate dalle forbici, e il sottoscala per un momento sembra la mattina dopo Capodanno: carta ovunque, silenzio, e l'odore di qualcosa che è finito.

Sul pavimento, tra i resti, le cifre rosse sui fogli si CANCELLANO una a una — i numeri sbiadiscono, le virgole si sciolgono, e per ultimo sparisce la busta rossa della MORA, che non pulsa più: è solo cartone, adesso, con un numero che non significa niente.

> Gaetano: *(raccogliendo una bolletta mezza bruciata)* "Guardate la data: non ce l'ha. Nessuna di queste ha una data. Erano paure SENZA SCADENZA — il Grigiore le tiene in circolo perché non scadano mai."

> Federico: "Sai cosa, Gaetano? Domani chiamo il commercialista di mio fratello e gli faccio fare un bel check-up. Quello vero. Perché le bollette vere si pagano e si dimenticano. Queste qui erano ALTRE, e adesso sono cenere."

> Claudia: *(fotografando il pavimento coperto di carta bruciata)* "Una per l'album. Didascalia: 'il giorno che abbiamo estinto un mutuo a pugni.'"

**(Il debito era finto: la paura no. Averla bruciata vale.)**`,
    choices: [
      { text: '🚶 Tornare alle canne d\'organo dei tubi', next: 'k5' },
      { text: '🗄 Perquisire l\'archivio SEMPRE: le bollette coprivano qualcosa', once: true, sets: { archivio_perquisito: true }, next: 'k5' },
    ],
  },

  k16c: {
    location: 'sottoscala',
    stinger: 'hit',
    caption: 'La penna grigia — presa visione',
    text: `Il nome della fallacia esce, e l'Amministratore **sorride.** È il sorriso di chi ha visto respingere il ricorso.

> L'Amministratore: "Interessante obiezione. Verbalizzo: 'il condomino solleva eccezione infondata'. Respinta." *(TUNK: da qualche parte, un timbro)* "Vede, l'eccezione va sollevata CONTRO L'ARTICOLO GIUSTO. Lei ha bussato alla porta sbagliata del regolamento, e il regolamento... lo APPREZZA. Firmi qui."

E la penna vi è già in mano. Non ricordate di averla presa. È fredda, pesa come una chiave, e mentre la fissate la punta scende DA SOLA verso il foglio della presa visione — e voi con lei, la schiena che si piega centimetro dopo centimetro nella postura esatta di chi firma cose che non ha letto, da una vita, perché tanto le firmano tutti, perché tanto è il regolamento, perché tanto.

La mano di qualcuno — di chi, resta tra voi e il sottoscala — vi afferra il polso e STRAPPA via la penna, e la penna urla come un citofono. La scagliate contro la bacheca; il vetro si crepa; l'Amministratore la raccoglie con calma e la rimette nel taschino, paziente come le pratiche giacenti.

> L'Amministratore: "Riproviamo con comodo. Il regolamento non ha fretta: il regolamento ha PROTOCOLLO."

> Emanuela: *(scrollandovi per le spalle)* "Ragazzi. RAGIONATE. Il trucco è tutto in quei tre timbri: chi è che ce li ha messi? In nome di CHE COSA?"

**(-3 PV: la presa visione morde. Ma il duello non è chiuso.)**`,
    damage: 3,
    choices: [
      { text: '🗣 Tornare davanti alla bacheca e rispondere di nuovo', next: 'k16' },
    ],
  },

  /* ============ LA CUCINA VIVA (momento di cuore) ============ */

  k17: {
    location: 'cucina_fredda',
    stinger: 'heal',
    caption: 'La cucina accesa — lo stendardo',
    text: `L'idea è di Emanuela, ed è un'idea da generale: *"Questa cucina è morta perché nessuno ci cucina. E allora noi adesso CI CUCINIAMO."*

I fornelli, sotto il grigio, funzionano: la fiamma esce grigia, poi Gaetano la tocca con l'accendino lungo del barbecue e la fiamma **si ricorda di essere arancione.** Da lì è una battaglia: Claudia al taglio, Federico che apre i barattoli e li annusa da sommelier ("questo è pomodoro VERO, si sente che ha sofferto"), Natalino che gestisce le padelle come le forbici giapponesi, Emanuela che comanda, e la ricetta è una sola, ovvia: **la parmigiana di Daniele.** Fatta a memoria, a occhio, a sbagli — la vostra versione, quella che lui domani avrà il DOVERE di assaggiare e stroncare.

La cucina si arrende un centimetro alla volta. Il vapore scioglie il freddo. L'odore di frittura invade i ripiani grigi come una truppa di liberazione. Il frigo ronza più piano, quasi imbarazzato. Perfino la cosa nel cassetto delle verdure smette di respirare per annusare.

> Natalino: "Guardate le piastrelle. GUARDATE. Vicino ai fornelli stanno tornando bianche."

> Claudia: *(fotografando tutto, per la prima volta stanotte non come prova: come ricordo)* "La casa digerisce le case. Ma una cucina accesa non la digerisce nessuno."

Mangiate in piedi, dalle teglie, ustionandovi, ridendo. Non è buona come la sua. È buona come la vostra. Contro il Grigiore, è la stessa arma.

> Federico: "Quando esce, gliela facciamo assaggiare. Dirà che la mozzarella andava asciugata meglio." *(pausa)* "Non vedo l'ora, cazzo."

**(+4 PV a tutto il gruppo. La parmigiana è uno stendardo, e voi l'avete issato.)**`,
    heal: 4,
    choices: [
      { text: '↩️ Spegnere i fuochi con rispetto e tornare al centro della cucina', next: 'k1' },
      { text: '🍽 Lasciare un piatto coperto in frigo: per quando Daniele torna', once: true, sets: { piatto_per_daniele: true }, next: 'k1' },
    ],
  },

  /* ==================== SCONFITTA ==================== */

  k_ko: {
    location: 'sottoscala',
    stinger: 'fail',
    caption: 'Riscossi e rivenduti',
    text: `Il buio, e nel buio una voce che compila moduli.

> Il Riscossore: "...cinque unità, usurate ma funzionanti. Valore di realizzo: modesto. Sentimentale: alto. Firmi qui il padrone, che io una firma la voglio sempre."

Vi svegliate **al piano di sopra**, sul pavimento della cucina fredda, disposti in fila ordinata come merce resa. Addosso avete cartellini del prezzo, scritti a mano, appesi col filo: sul vostro c'è una cifra e poi, sbarrata, una cifra più bassa. Siete stati SCONTATI.

> Federico: *(strappandosi il cartellino)* "Ci ha riscossi. Ci ha RISCOSSI e RIVENDUTI alla casa. Come i vuoti a rendere. Io quel gilet ambulante lo denuncio all'antitrust degli inferi, giuro su ogni birra che ho."

> Emanuela: "Però ci ha rivenduti INTERI, notare. Poteva farci a rate."

Sul pavimento, accanto alla testa di Gaetano, un biglietto con la grafia fitta del Mercante: *"Niente di personale: il vostro Colore l'ho trattenuto come penale, il resto ve lo lascio. Siete merce che si rialza — è la qualità che preferisco, nei clienti. Torni chi vuole: lo sconto regge."*

Vi rialzate. Perché è quello che fa, la vostra qualità.

**(PV al massimo. 🎨 -1 Colore, trattenuti "come penale".)**`,
    fullHeal: true,
    goldLoss: 1,
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
   - k6 (negozio): boccata_colore 2🎨 · lattina_zero 1🎨 · lattina_agitata 1🎨 ·
     cassa_bluetooth 3🎨 · cuore_colore 8🎨+tronello (once, requires tronello)
   - k7b: boccata_colore (furto) · k8_prendi: cuore_colore · k8b: cuore_colore

   MORTI VERE POSSIBILI:
   - k4_morte (killRoller: la calata — FOR CD 13 fallita)

   USCITE DAL BLOCCO: solo h1 (da k10).
   COMBATTIMENTI: k2b (luca_giunti) · k7b_fail (mercante_guardia) ·
   k8c (sonnambulo x3) — tutti con defeat → k_ko (fullHeal, goldLoss 2, RETRY_COMBAT).
   ============================================================ */

/* ============ BLOCCO E — LO SNODO (Sala della Switch) + IL FINALE (Cattedrale del Grigiore) + EPILOGHI ============
   Ingressi: m1 (dall'hub h1), z1 (da m9). Nessuna uscita fuori dal blocco: gli epiloghi chiudono. */
