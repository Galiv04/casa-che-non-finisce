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
      { text: '👁 Contare i loop: il sorriso, la cola, la vittoria. Quante volte prima che il prossimo cominci?', once: true, next: 'm1b' },
    ],
  },

  m1b: {
    location: 'sala_switch',
    caption: 'Quindici secondi',
    sets: { loop_contato: true },
    text: `Claudia tira su il cronometro del telefono e conta ad alta voce, e gli altri contano con lei, perché davanti a una cosa così contare insieme è l'unica cosa che si può fare.

**Quindici secondi.** Sorriso, cola, vittoria vuota. Da capo. Ogni quindici secondi esatti, senza una variazione, senza un fotogramma diverso.

> Claudia: "Quindici. In un giorno fanno cinquemilasettecentosessanta cicli. In tre giorni—"

> Gaetano: "Diciassettemiladuecentottanta." *(non ha nemmeno tirato fuori il telefono)*

Silenzio. Sulla parete di luce, il Daniele finto sorride per la diciassettemiladuecentottantunesima volta.

> Federico: *(che non alza la voce, e per questo fa più paura di quando la alza)* "Diciassettemila volte gli ha fatto fare la stessa faccia. A mio fratello. A uno che non ha mai ripetuto due volte la stessa battuta perché 'le battute si consumano'."

> Emanuela: "Contato. Bene. Adesso si smette di contare e si SPEGNE."

**(Più di diciassettemila cicli in tre giorni. Il conto esatto è la prima cosa che gli fa male.)**`,
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
      { text: '🔌 Strappare un cavo dalla parete prima di avvicinarsi: potrebbe servire', once: true, sets: { cavo_strappato: true }, next: 'm3' },
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
      { text: '🗣 Chiamarlo per nome, FORTE — la voce è un colore che il bozzolo non può filtrare', once: true, sets: { nome_gridato: true }, next: 'm6' },
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
      { text: '🛡 Mettere Daniele dietro il trono prima che il Guardiano arrivi', once: true, next: 'm4_scudo' },
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
      { text: '📸 Claudia: fotografare il tasto rosso — se è un tasto, ha un circuito', once: true, next: 'm4_circuito' },
    ],
  },


  m4_scudo: {
    location: 'sala_switch',
    caption: 'Lo scudo intorno a Daniele',
    text: `Tre secondi prima che il Guardiano atterri, vi muovete insieme senza bisogno di dirlo: Federico e Natalino spingono il bozzolo dietro lo schienale del trono, Emanuela ci pianta davanti la borsa Kerastase aperta come una barricata, Claudia si mette DI LATO, dove può vedere sia il mostro che l'amico.

E dal bozzolo, dalle dita di Daniele, il Morse cambia ritmo. Claudia traduce al volo, e le viene da ridere e da piangere nello stesso secondo:

*"N-O-N  D-I-E-T-R-O.  D-A-V-A-N-T-I."*

> Claudia: "Dice... dice che non vuole stare dietro. Vuole stare DAVANTI."

> Natalino: "Eh no, bello mio. Stavolta no." *(dà due colpetti sul bozzolo, teneri come uno schiaffo sulla spalla)* "Hai fatto il muro da solo per settimane — il 17 strappato, i sabotaggi, il Morse. Lo sappiamo, abbiamo visto TUTTO. Ma adesso siamo arrivati noi, e funziona così: chi ha fatto il primo turno... il cambio lo ACCETTA."

Le dita si fermano. Poi, piano, battono un'ultima cosa — corta, secca, la più Daniele di tutte:

*"O-K.  M-A  S-B-R-I-G-A-T-E-V-I.  H-O  D-A  F-A-R-E."*

> Federico: *(voltandosi verso il Guardiano che cala, con una faccia che non è più preoccupata: è FERALE)* "Hai sentito il capo. Sbrighiamoci."

**(Daniele protetto — e il gruppo che combatte davanti a lui non è uno scudo. È un CAMBIO TURNO.)**`,
    sets: { daniele_protetto: true },
    choices: [
      { text: '⚔ Il Guardiano atterra. Adesso', next: 'm5' },
    ],
  },


  m4_circuito: {
    location: 'sala_switch',
    caption: 'Il circuito del tasto rosso',
    text: `Claudia scatta col telefono in modalità macro — il tasto rosso riempie lo schermo — e passa la foto a Gaetano mentre il Guardiano ancora si srotola.

Gaetano ingrandisce. E ride. Una risata corta, cattiva, da ingegnere che ha appena trovato l'errore nel progetto di un rivale.

> Gaetano: "Non è collegato."

> Claudia: "COME non è collegato?!"

> Gaetano: "Guarda tu stessa: sotto il tasto non c'è pista, non c'è contatto, non c'è NIENTE. È un tasto FINTO. Scenografia." *(alza gli occhi verso la serpe di gomma che cala dal soffitto, e la voce diventa quasi divertita)* "'CONTINUA A GUARDARE' non è un comando che lui ESEGUE su di noi. È una scritta luminosa. Un cartello. Funziona solo se CI CREDIAMO — come i finti allarmi sulle vetrine, come le telecamere finte nei condomini."

> Emanuela: "Quindi tutta questa casa..."

> Gaetano: "...ha un solo, VERO superpotere: la nostra collaborazione. Il tasto lo premiamo NOI, ogni volta, da dentro. E una cosa che ho imparato stanotte—" *(raccoglie la pallina dei racchettoni, la fa rimbalzare una volta)* "—è che si può anche NON premere."

**(Il tasto rosso è FINTO. Il potere del Guardiano è la vostra obbedienza — e l'obbedienza, stanotte, è finita.)**`,
    sets: { tasto_fotografato: true },
    choices: [
      { text: '⚔ Combattere il Guardiano del Bozzolo — senza crederci più', next: 'm5' },
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
    combat: { enemies: ['bozzolo_guardiano'], victory: 'm6', defeat: 'm_ko', loot: { gold: 1, items: ['ipa_gaetano'] } },
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
      { text: '🥤 Dargli la Zero. Ce l\'avete. L\'avete portata fin qui.', once: true, requires: { item: 'lattina_zero' }, removeItem: 'lattina_zero', sets: { zero_bevuta: true }, next: 'm7' },
      { text: '🗣 "La Zero dopo. Prima: che cazzo sta succedendo?"', next: 'm7' },
    ],
  },

  m7: {
    location: 'sala_switch',
    caption: 'Il briefing di Daniele',
    gold: 1,
    sets: { dentro_eleinad: true },
    text: `Se gli avete dato la Zero, l'ha scolata in quattro secondi, occhi chiusi, come un rito. Comunque sia: quando riapre la bocca, il Daniele che parla è LUI al settanta per cento e sale.

> Daniele: "Briefing. Tre giorni fa mi si presenta in casa una cosa con la mia faccia. Non l'ho invitata: le cose così non chiedono, ASPETTANO che smetti di chiudere le porte. Mi mette nel bozzolo. Errore suo: dal bozzolo si accede all'impianto. Tre giorni che gli giro nei fusibili — il joy-con l'ho nascosto io, le lattine in fila le ho messe io, e ogni volta che una porta vi si apriva al momento giusto... prego."

> Claudia: "Lo SAPEVO che i segnali erano tuoi. Ho gli screenshot."

> Daniele: "Il demone si chiama come me, letto allo specchio. Eleinad. È un parassita-riflesso: non è la mia anima, non è il mio lato oscuro, niente poesia — è una SANGUISUGA con una laurea in retorica presa copiando. Da me." *(si alza in piedi, quasi dritto)* "Ah. Una cosa. Questa non è casa mia."

Silenzio.

> Daniele: "Casa mia è finita tre giorni fa. Sessanta metri quadri, finivano eccome. Guardatevi intorno: la moquette respira. I cavi sono vene. Il divano è un trono perché è il CUORE." *(vi guarda, uno a uno)* "Siamo DENTRO di lui. E lui lo sa, che l'abbiamo capito. Sta arrivando."`,
    choices: [
      { text: '🐚 "Tieni. Il mare vero, dentro." — dargli la conchiglia di Gaeta', requires: { item: 'conchiglia_gaeta', notFlag: 'regalo_conchiglia' }, next: 'm7c' },
      { text: '🍽 "Ti abbiamo tenuto un piatto." — la parmigiana lasciata in frigo', requires: { flag: 'piatto_per_daniele', notFlag: 'regalo_piatto' }, next: 'm7d' },
      { text: '📷 "Guarda che ti abbiamo portato." — la foto di Gaeta staccata dal muro', requires: { flag: 'foto_gaeta_salvata', notFlag: 'regalo_foto' }, next: 'm7e' },
      { text: '👬 Concedere ai gemelli cinque minuti, da soli, prima di combattere', once: true, next: 'm7g1' },
      { text: '⚔ Che venga.', next: 'm8' },
    ],
  },

  m7c: {
    location: 'sala_switch',
    caption: 'La conchiglia, consegnata',
    heal: 3,
    sets: { regalo_conchiglia: true },
    text: `Emanuela tira fuori la conchiglia di Gaeta e la mette in mano a Daniele senza dire niente, perché certe consegne si fanno in silenzio.

> Daniele: "E questa?"

> Emanuela: "Ce l'ha data la tua spiaggia. Quella che ti ha rubato. Mettila all'orecchio e sta' zitto."

Lui la alza. E la faccia gli fa una cosa che nessuno di voi gli aveva mai visto fare: si **arrende**. Occhi chiusi, spalle giù, la bocca aperta di mezzo centimetro.

> Daniele: *(con gli occhi ancora chiusi)* "Si sentono le racchette. E qualcuno che urla 'FUORI!' e ha torto." *(pausa)* "Ero io che urlavo. Avevo torto io."

> Federico: "Avevi torto tu."

> Daniele: *(riapre gli occhi, e sono accesi come non li vedete da tre giorni di schermi)* "Quella cosa mi ha fatto guardare una vita finta a quindici secondi per volta. E voi mi portate quattro secondi di mare VERO." *(si infila la conchiglia in tasca e la tiene stretta con la mano da fuori)* "Adesso combatto meglio. MOLTO meglio."

**(+3 PV a tutti: la conchiglia è consegnata. Daniele ha un pezzo di Serapo in tasca, e il Grigiore lo sente.)**`,
    choices: [
      { text: '🍽 "Ti abbiamo tenuto un piatto." — la parmigiana lasciata in frigo', requires: { flag: 'piatto_per_daniele', notFlag: 'regalo_piatto' }, next: 'm7d' },
      { text: '📷 "Guarda che ti abbiamo portato." — la foto di Gaeta staccata dal muro', requires: { flag: 'foto_gaeta_salvata', notFlag: 'regalo_foto' }, next: 'm7e' },
      { text: '↩ Il briefing riprende: sta arrivando.', next: 'm7' },
    ],
  },

  m7d: {
    location: 'sala_switch',
    caption: 'Il piatto tenuto da parte',
    heal: 4,
    sets: { regalo_piatto: true },
    text: `Emanuela apre la borsa Kerastase e tira fuori il piatto coperto di stagnola — quello lasciato in frigo "per quando Daniele torna" — e glielo appoggia sulle ginocchia.

> Emanuela: "L'abbiamo fatta noi. Non è come la tua. Mangia e taci."

Daniele solleva la stagnola. Guarda. La parmigiana è **ancora calda**, e in questa casa niente è caldo.

> Daniele: "La mozzarella andava asciugata meglio."

> Federico: "TE L'AVEVO DETTO. GLIELO AVEVO DETTO, A LEI!"

> Daniele: *(che ha già la bocca piena e parla comunque, perché è lui)* "Federico, sta' zitto. È buonissima." *(a Emanuela, serio, la forchetta a mezz'aria)* "Avete cucinato dentro casa SUA. Avete acceso i fuochi in una cucina che lui aveva spento. Vi rendete conto di cosa gli avete fatto?"

> Gaetano: "Dillo tu."

> Daniele: "Gli avete fatto vedere che si può. In casa sua." *(finisce il piatto in quaranta secondi netti)* "Andiamo a spegnerlo."

**(+4 PV a tutti: il piatto tenuto da parte è arrivato a destinazione. Era ancora CALDO. In questa casa niente è caldo.)**`,
    choices: [
      { text: '🐚 "Tieni. Il mare vero, dentro." — dargli la conchiglia di Gaeta', requires: { item: 'conchiglia_gaeta', notFlag: 'regalo_conchiglia' }, next: 'm7c' },
      { text: '📷 "Guarda che ti abbiamo portato." — la foto di Gaeta staccata dal muro', requires: { flag: 'foto_gaeta_salvata', notFlag: 'regalo_foto' }, next: 'm7e' },
      { text: '↩ Il briefing riprende: sta arrivando.', next: 'm7' },
    ],
  },

  m7e: {
    location: 'sala_switch',
    caption: 'La foto che resiste',
    gold: 1,
    sets: { regalo_foto: true },
    text: `Claudia tira fuori la foto di Gaeta — quella staccata dal muro del corridoio, quella che sbiadiva più piano di tutte — e la gira verso Daniele.

Il mare. Il sole cattivo delle due. Emanuela che ride a bocca aperta, tutti mezzi bruciati e felici. E lui, sullo sfondo, addormentato sotto l'ombrellone con un libro sulla faccia.

> Daniele: *(la prende con due dita, come si prende una cosa che scotta)* "Questa era appesa nel corridoio."

> Claudia: "Nel corridoio SUO. Ha appeso le nostre vacanze in casa tua e le ha guardate sbiadire come si guarda la carne che frolla."

> Daniele: "E allora perché questa non è sbiadita?"

> Emanuela: "Perché quel giorno nessuno voleva tornare a casa. Manco tu, che odi la sabbia."

Daniele guarda la foto per cinque secondi interi. Poi la piega in due, con cura, lungo un margine dove non c'è nessuno, e se la mette nella tasca del petto.

> Daniele: "Va bene. Adesso ho una cosa da fargli vedere anch'io."

**(🎨 +1 Colore: la foto che resiste è in mano a Daniele, nella tasca del petto. Quella non gliela mangia.)**`,
    choices: [
      { text: '🐚 "Tieni. Il mare vero, dentro." — dargli la conchiglia di Gaeta', requires: { item: 'conchiglia_gaeta', notFlag: 'regalo_conchiglia' }, next: 'm7c' },
      { text: '🍽 "Ti abbiamo tenuto un piatto." — la parmigiana lasciata in frigo', requires: { flag: 'piatto_per_daniele', notFlag: 'regalo_piatto' }, next: 'm7d' },
      { text: '↩ Il briefing riprende: sta arrivando.', next: 'm7' },
    ],
  },

  m7g1: {
    location: 'sala_switch',
    caption: 'Cinque minuti dei gemelli',
    text: `Daniele si stacca dal gruppo di un passo e guarda Federico con la faccia di chi sta per chiedere una cosa che gli costa più di un mostro.

> Daniele: "Cinque minuti. Prima che arrivi quello con la mia faccia peggio pettinata. Cinque minuti, e poi si combatte."

Gli altri si dividono con un tempismo che sembra casuale e non lo è: Gaetano si china sui cavi della parete con un'urgenza tecnica improvvisamente fondamentale; Emanuela rovescia la borsa Kerastase sul pavimento; Claudia fotografa il soffitto; Natalino si accende un tronello guardando altrove con dedizione sospetta. Nessuno controlla davvero niente. Tutti fanno finta benissimo.

I gemelli restano da soli. La moquette respira più piano, come se anche la casa avesse deciso di dare loro un po' di privacy.

> Federico: "Allora."

> Daniele: "Allora."

Silenzio. Il tipo di silenzio che tra due che si conoscono da trentadue anni pesa uguale a un discorso intero.

> Federico: "Ti ho detto 'sfigato' al matrimonio di Marco. Davanti a tutti. Non me lo sono mai perdonato, e non te l'ho mai detto, perché chiederti scusa mi sembrava... peggio del reato."

> Daniele: "Lo so. L'ho saputo il giorno stesso. Non serviva che me lo dicessi: ti si vedeva in faccia che ti girava le palle di averlo detto ad alta voce."

> Federico: "E allora perché diavolo non hai mai reagito?"

> Daniele: "Perché avevi ragione, coglione. Ero sfigato. Lo sono ancora un po'. La differenza è che io lo so, e mi ci diverto."

Ridono, piano, il tipo di risata che non vuole farsi sentire dagli altri.`,
    choices: [
      { text: '🗣 Continuare — c\'è ancora una cosa da dirsi', next: 'm7g2' },
      { text: '🤝 Lasciare che il silenzio dica il resto: cinque minuti bastano se sono i giusti', once: true, sets: { silenzio_gemelli: true }, next: 'm7g2' },
    ],
  },

  m7g2: {
    location: 'sala_switch',
    caption: 'La cosa non detta',
    text: `Federico si passa una mano sulla faccia — la stessa faccia di Daniele, tirata dal fumo dello svapo e da vent'anni di call — e quando riparla, la voce è quella vera, quella senza pubblico.

> Federico: "Ho sempre pensato che tu mi guardassi dall'alto. I soldi, la carriera, le dieci birre al giorno che tu chiami 'autodistruzione con ghiaccio'. Pensavo mi giudicassi."

> Daniele: "Ti ho giudicato SEMPRE. Ma non per quello. Ti giudico perché fai sconti sulle tariffe a clienti che ti trattano di merda, e perché a Natale spendi più per gli altri che per te, e non lo dici a nessuno. Ti giudico perché sei un coglione BUONO, Federico. È il genere di giudizio che uno si tiene per sé, di solito."

Federico non risponde subito. Quando lo fa, ha gli occhi lucidi e la voce che finge di non tremare.

> Federico: "Tu da quel divano hai letto più libri di quanti io ne abbia comprati per arredamento. Non sei fermo. Sei l'unico di noi due che non ha mai avuto bisogno di correre per sapere chi cazzo è."

> Daniele: "Fede."

> Federico: "Non chiamarmi Fede, mi fai impazzire."

> Daniele: "Lo so. Fede."

Si abbracciano — un abbraccio brutto, a scatti, con troppe pacche sulla schiena, come due che hanno passato trent'anni a fingersi più duri di quanto sono. Dall'altra parte della sala, quattro persone controllano con grandissima attenzione cavi che non richiedono nessuna attenzione.

> Emanuela: *(senza voltarsi, la voce che trema un po')* "Questo cavo qui è FASCINOSO. Non lo tocco per altri dieci minuti buoni."

**(+3 PV a tutti: certe paci curano più delle Gocce.)**`,
    heal: 3,
    choices: [
      { text: '⚔ Adesso sì: che venga.', next: 'm8' },
      { text: '🫂 Fare spazio ai gemelli: gli altri si stringono, un cerchio che li aspetta', once: true, sets: { cerchio_completo: true }, next: 'm8' },
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
    combat: { enemies: ['eleinad_maschera'], victory: 'm9', defeat: 'm_ko', loot: { gold: 1 } },
  },

  m9: {
    location: 'sala_switch',
    caption: 'La maschera cade',
    gold: 1,
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
      { text: '🎭 Raccogliere la maschera di Daniele: leggera come cartapesta, e riflette come un vetro', once: true, item: 'maschera_daniele', sets: { maschera_raccolta: true }, next: 'z1' },
    ],
  },

  m_ko: {
    location: 'sala_switch',
    caption: 'Lo schermo vince un round',
    stinger: 'defeat',
    fullHeal: true,
    goldLoss: 1,
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
      { text: '🏆 Prima: cosa c\'è in quella navata laterale illuminata?', once: true, next: 'z1t1' },
      { text: '🛋 La prima panca non è una panca. È IL DIVANO. Quello di Daniele.', once: true, requires: { hero: 'daniele' }, next: 'z1d' },
      { text: '👂 Ascoltarlo raccontarsi, un momento, prima del duello', once: true, next: 'z1mono' },
    ],
  },

  z1t1: {
    location: 'cattedrale',
    caption: 'La Sala dei Trofei di Eleinad',
    text: `Prima dell'altare, la cattedrale offre una deviazione che nessuno ha chiesto: una navata laterale, più piccola, illuminata come una boutique di lusso. Dentro, vetrinette. DECINE di vetrinette, illuminate da dentro, ognuna con un cuscinetto di velluto grigio e un trofeo sopra.

Un telecomando, l'ultimo tasto consumato fino al bianco. Un paio di ciabatte da salotto, sfondate sul tallone dalla stessa identica curva di piede, anno dopo anno. Un fascio di ricevute — abbonamenti in palestra mai disdetti, streaming mai cancellati, tredici euro al mese per sempre — impilate come medaglie. Ogni vetrinetta ha una targhetta d'ottone, con un nome e una data. Sono nomi che non conoscete. Sono TUTTI i nomi che non conoscete, e sono moltissimi.

> Natalino: "È un museo. Un museo delle piccole rese. Guarda quella: 'Marco, 34 anni, non ha più cambiato canale dal 2019.'"

> Claudia: "Non è raccapricciante. È PEGGIO: è ORDINATO. Ha un sistema di catalogazione migliore del mio archivio foto."

In fondo alla navata, un'ultima vetrinetta, più grande delle altre, illuminata meglio, con un piedistallo di velluto ancora VUOTO. La targhetta, però, è già pronta, già lucidata, già incisa:

**I SEI.**

> Emanuela: "Ci ha già fatto il posto. Prima ancora di conoscerci per bene."

> Gaetano: *(la voce piatta di chi sta trattenendo qualcosa)* "Ci aspettava da prima che entrassimo in casa sua."

La teca vuota luccica, silenziosa, sotto la sua luce da vetrina. Aspetta.`,
    choices: [
      { text: '💥 Spaccare il vetro della teca vuota, prendersi la targhetta', once: true, gold: 1, sets: { teca_profanata: true }, next: 'z1t2' },
      { text: '↩ Non toccarla. Tornare dal gruppo.', next: 'z2' },
    ],
  },

  z1t2: {
    location: 'cattedrale',
    caption: 'Il vetro che cede',
    text: `Il pugno di Federico entra nel vetro senza che nessuno decida chi dovesse farlo — è semplicemente il primo a muoversi, e il vetro, per essere il vetro di un demone di plastica smorta, cede come vetro qualunque: crepa a stella, poi crolla in scaglie che tintinnano sul marmo con un suono quasi ALLEGRO.

Nessun allarme, nessun ruggito. Solo, da qualche parte molto lontano nella cattedrale, un fruscio — come se ogni singola vetrinetta della navata avesse trattenuto il fiato nello stesso istante.

> Federico: *(scuotendo la mano, le nocche che sanguinano appena)* "Levati la targhetta, coso. NOI non siamo un trofeo tuo. Siamo la gente che viene a riprendersi la roba."

Prende la targhetta — "I SEI", ottone freddo, ancora lucido — e se la mette in tasca come una prova da tribunale. Il piedistallo vuoto, senza la targhetta, sembra improvvisamente patetico: un trono senza re, una vetrina senza vanto.

> Claudia: "Foto. SEMPRE la foto." *(scatta)* "Un giorno la mettiamo in un museo vero. Sotto: 'Sei coglioni che gli hanno rovinato la collezione.'"

> Natalino: "Targa più bella della sua, comunque. La nostra ce la scriviamo noi."

Da qualche parte oltre l'altare, la voce di Eleinad — ancora non vi vede, ma vi SENTE — fa una cosa nuova, per la prima volta stanotte: non ride, non minaccia. **Tace.**

E il silenzio di un demone che di solito non chiude mai la bocca è, di tutta la serata, la cosa che vi mette più paura.`,
    choices: [
      { text: '🚶 Tornare dal gruppo, la targhetta ancora in pugno', requires: { flag: 'teca_profanata' }, next: 'z2' },
      { text: '🔨 Spaccare anche il piedistallo: non lasciare niente dove rimontare la teca', once: true, sets: { piedistallo_distrutto: true }, next: 'z2' },
    ],
  },

  z1mono: {
    location: 'cattedrale',
    caption: 'Il monologo di Eleinad',
    text: `Eleinad non aspetta il vostro passo per parlare. Comincia da solo, alla navata vuota — e vi lascia ascoltare, perché ascoltare è già un modo di nutrirsi.

> Eleinad: "Sapete da dove vengo? Da NESSUNA parte, ed è la parte più elegante della mia storia. Non sono nato: mi sono ACCUMULATO. Un pomeriggio di pioggia rimandato qui, una serie vista due volte lì, un 'ci penso domani' lasciato cadere in un angolo trent'anni fa. Il tempo che la gente non voleva più spendere si è incollato, un briciolo alla volta, finché non ha avuto la forma per alzarsi in piedi. Io sono FATTO di rinvii, tesori. Sono l'interesse composto della pigrizia altrui."

Passeggia lungo la navata; dove passa, i televisori si affievoliscono come luci di sala a monologo iniziato.

> Eleinad: "Mangio colore. Non anime, che parola volgare — il COLORE: la voglia che una cosa ti faccia venire voglia di un'altra cosa. E Daniele—" *(la voce, per un attimo, quasi si commuove di sé stessa)* "—Daniele era un BANCHETTO. Un uomo che pensa così tanto, che sente così forte, che tiene tutto dentro con quella disciplina da monaco... il colore, in uno così, non si consuma mai. Si ACCUMULA. Aspetta solo un inquilino con più appetito di lui."

Si volta, e la faccia rubata sembra quasi sincera.

> Eleinad: "Non sono il suo lato oscuro. Non fate quell'errore da filosofi della domenica. Sono un parassita con buon gusto, che ha scelto la casa più ricca del palazzo. Tutto qui. Nessuna poesia. Solo fame, e un contratto d'affitto che ho scritto io."

**(Guardarlo in faccia senza abboccare vale un pezzo di voi che lui non avrà.)**`,
    choices: [
      { text: '🗣 Basta ascoltare. È ora del duello.', next: 'z2' },
      { text: '🧠 Memorizzare ogni parola: le sue debolezze sono nel suo monologo', once: true, sets: { monologo_studiato: true }, next: 'z2' },
      { text: '🪞 "C\'è un buco nel curriculum." — sbattergli in faccia la contraddizione', requires: { flag: 'segreto_specchio' }, once: true, next: 'z1contro' },
    ],
  },

  z1contro: {
    location: 'cattedrale',
    caption: 'Il buco nel curriculum',
    gold: 1,
    sets: { contraddizione_smascherata: true },
    text: `Il monologo finisce, il silenzio è pronto per gli applausi — e invece prende la parola Claudia, che di mestiere trova il pixel fuori posto.

> Claudia: "Scusa. Un attimo. C'è un buco nel curriculum."

> Eleinad: "...prego?"

> Claudia: "In biblioteca c'è la tua biografia. L'abbiamo letta allo specchio: quella scritta da uno che ti conosceva bene." *(tira fuori il telefono, perché ovviamente l'ha fotografata)* "Lì c'è scritto che sei un RIFLESSO. Uno rimasto attaccato a uno specchio perché un tizio ci si è fermato davanti troppo a lungo. E adesso invece ci racconti l'interesse composto della pigrizia altrui." *(alza gli occhi dallo schermo)* "Quale delle due, tesoro?"

Nella cattedrale, per la prima volta stanotte, il silenzio è IMBARAZZATO.

> Federico: "Ah, ho capito: la seconda suona meglio." *(allarga le braccia)* "Prima eri un riflesso, ora sei un ACCUMULO. Menti pure sul curriculum. Sei un piazzista che si gonfia il ruolo al colloquio: 'gestivo un team'. Gestivi un DIVANO."

> Eleinad: *(e la voce, per una frazione, esce senza l'eco)* "Sono... entrambe le cose."

> Gaetano: "No. Le origini sono UNA. Se non sai da dove vieni, non sei antico: sei solo VECCHIO." *(un passo avanti)* "E le cose vecchie si buttano."

**(🎨 Colore +1: l'avete beccato a mentire sulla propria storia. Chi si gonfia il curriculum ha paura del colloquio.)**`,
    choices: [
      { text: '🗣 Basta ascoltare. È ora del duello.', next: 'z2' },
    ],
  },

  z1d: {
    location: 'cattedrale',
    caption: 'Il Divano Originale',
    text: `La prima panca della navata non è una panca. È un **divano a tre posti**, con la penisola, e lo riconoscete tutti nello stesso istante — perché ci siete STATI, su quel divano, mille sere, coi piedi sul bracciolo e la pizza sulle ginocchia.

È il divano di Daniele. Quello VERO, quello dell'appartamento: trapiantato qui, fuso nella navata come un organo in un corpo nuovo, e i cuscini — i cuscini si MUOVONO. Piano. Come una bocca che mastica nel sonno.

> Daniele: *(fermo, bianco, gli occhi fissi sul suo vecchio divano)* "Eccolo. Il trono. L'originale — quello prima che la casa ci costruisse sopra una cattedrale." *(la voce gli trema, e Daniele non trema MAI)* "Tre giorni che mi masticava i pomeriggi. Ogni sera una puntata, ogni puntata un colore in meno. Lo sentivo DIGERIRE."

Il divano vi sente. I cuscini si sollevano — e sotto ci sono i **DENTI**: file di molle a spirale raddrizzate in zanne, imbottitura rosa che si contrae come gengive, e il bracciolo — quello dove Daniele appoggiava la testa — si piega verso di lui con la lentezza affamata di una cosa che rivuole il suo boccone preferito.

> Federico: "No. NO. Quel divano era il posto dove si giocava a Mario Kart e si mangiava la pizza alle due di notte. E adesso ha i DENTI. Io a questa cosa le tolgo i cuscini uno per uno."

> Claudia: "Racchettoni CORTI. Mirare alle molle: quelle sono la spina dorsale."

**(Combattimento! Il Divorente attacca con cuscini pieni di denti e braccioli che afferrano. Tre posti, una fame, nessuna pietà.)**`,
    combat: { enemies: ['divorente'], victory: 'z1e', defeat: 'z_ko', loot: { gold: 1 } },
    choices: [],
  },

  z1e: {
    location: 'cattedrale',
    caption: 'Il divano non si alza più',
    stinger: 'victory',
    gold: 1,
    sets: { divorente_distrutto: true },
    text: `L'ultimo colpo spacca il Divorente lungo la cucitura centrale — quella che Daniele aveva rattoppato col nastro adesivo due estati fa, "tanto regge". Non ha retto.

Il divano si apre come un libro e CROLLA: i cuscini esplodono in una nuvola di imbottitura grigia che si deposita sulla navata come neve sporca. Le molle-zanne tintinnano sul marmo e si fermano. Il bracciolo, quello che cercava ancora Daniele, cade per ultimo — e nel cadere fa un suono che assomiglia a un sospiro.

Tra i resti, incastrata nella struttura del divano come un cuore in un petto, c'è una cosa piccola e calda: il **telecomando** di casa di Daniele. Quello vero, quello con i tasti consumati dal pollice, col copri-batteria tenuto su dallo scotch. Funziona ancora. Non accende niente, ma funziona ancora.

> Daniele: *(lo raccoglie. Lo guarda. Lo mette in tasca.)* "Era un buon divano, prima. Ci ho letto duecento libri, su quel divano." *(pausa)* "Però i denti non ce li aveva. Quelli glieli ha messi LUI."

> Natalino: "Momento di silenzio per il divano. Serio: quel divano meritava di meglio."

> Emanuela: "Meritava di meglio, sì. E adesso lo sa anche la cattedrale: il PADRONE di quel divano è in piedi, e i divani fanno quello che dice il PADRONE."

Le altre panche della navata, tutte insieme, scricchiolano. Non si muovono: scricchiolano e basta. Come sedie che si mettono sull'attenti.

**(🎨 +1 Colore. Daniele ha distrutto il suo divano — quello vero, quello che amava — perché nessun'altra notte sia come quelle tre.)**`,
    choices: [
      { text: '🚶 Verso l\'altare. Il padrone di casa vi aspetta.', next: 'z2' },
      { text: '📺 Il telecomando: Daniele lo accende verso il buio', once: true, next: 'z1f' },
    ],
  },

  z1f: {
    location: 'cattedrale',
    caption: 'Un comando solo in memoria',
    sets: { telecomando_acceso: true },
    text: `Daniele punta il telecomando verso il buio in fondo alla navata e preme l'accensione, così, per vedere che succede. Non si accende niente. Ma lo schermino — quello piccolo dei modelli universali — si illumina di verde.

In memoria c'è un comando solo. Uno. E la cronologia dice: ripetuto per anni. Sempre di notte. Sempre alla stessa ora.

**"RIMANDA."**

> Daniele: *(lo gira tra le dita e ride di una risata brutta)* "Questo tasto non esiste. Non su un telecomando. L'ha aggiunto LUI, e l'ha premuto LUI: guardate l'ora. Tutte le notti alle tre e dieci — che è l'ora in cui io DORMIVO."

> Gaetano: *(scorre la cronologia, e la faccia gli si indurisce)* "Confermo. È un timer. Un timer che qualcuno faceva scattare da fuori, addosso a una casa che dormiva."

> Claudia: "Quindi non era lui che rimandava."

> Daniele: "No. Era lui che me la rimandava INDIETRO, la vita, un pezzo per notte." *(alza il telecomando verso l'altare, come si alza un bicchiere in faccia a qualcuno)* "Bene. Adesso il tasto è mio. Rimanda TU."

E lo schermino, da solo, una lettera alla volta, cambia scritta: **"ADESSO."**

**(In memoria un comando solo — RIMANDA — premuto ogni notte alle tre e dieci, da fuori. Adesso il telecomando dice un'altra cosa.)**`,
    choices: [
      { text: '🚶 Verso l\'altare. Il padrone di casa vi aspetta.', next: 'z2' },
    ],
  },


  z2_ko: {
    location: 'cattedrale',
    caption: 'Il vuoto guarda indietro',
    damage: 2,
    text: `Le crepe si lasciano mappare — fino a quella centrale. Lì, lo sguardo dello spirito scivola DENTRO, e il vuoto fa quello che il vuoto fa da sempre con chi lo fissa troppo: restituisce lo sguardo.

Non è un'immagine. È una VERTIGINE al contrario: per un istante lo spirito sente com'è essere il buco — l'eco senza voce, la cornice senza quadro — e quell'istante costa caro anche a chi non ha più un corpo per pagarlo.

> Lo spirito: *(riemergendo, con la luce che gli trema ai bordi)* "Ho guardato troppo a lungo. Segnate: le crepe si mappano di SBIECO. Mai frontale. Lui è fatto della stessa fame delle crepe."`,
    choices: [
      { text: '👻 Tornare al gruppo, di sbieco', next: 'z2' },
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
      { text: '🛋 "Il TRONO, Eleinad. Sappiamo del divano." — staccare la spina alla sua ricarica', requires: { flag: 'segreto_trono' }, once: true, next: 'z_trono' },
      { text: '🪞 Alzare la maschera come uno specchio e chiamarlo col suo nome VERO', requires: { flag: 'segreto_specchio', item: 'maschera_daniele' }, once: true, next: 'z_nome_vero' },
      { text: '👻 "I morti non ti temono." — la scelta degli Spiriti', requires: { spirit: true }, next: 'z2b' },
    ],
  },


  z_trono: {
    location: 'cattedrale',
    caption: 'La spina del Trono',
    text: `> Gaetano: *(un passo avanti, e per una volta non ha la voce dell'ingegnere: ha quella di chi ha letto la bolletta)* "Il Divano-Trono. Nella Sala della Switch. Ogni notte torni là a RICARICARTI, perché la vita finta non si accumula: si consuma. Il Mercante ce l'ha detto in cambio di una storia vera — che è più di quanto tu abbia mai pagato per qualcosa."

Il buco a forma di persona si ferma. Non si increspa: si FERMA, come un elettrodomestico a cui qualcuno ha appena nominato il numero di serie.

> Eleinad: *(e la voce, per la prima volta, ha una sfumatura che assomiglia al panico amministrativo)* "Il divano è... comodo. È un dettaglio. Un DETTAGLIO d'arredamento—"

> Emanuela: "È la tua PRESA DI CORRENTE, tesoro. E noi siamo cinque persone che stanotte hanno staccato ottanta cavi."

Claudia solleva il telefono e inquadra il punto esatto: nel salotto-cattedrale, dietro l'altare, si vede il filo grigio che scende dal buco e sparisce nel pavimento — verso la Sala della Switch, verso il divano.

> Daniele: *(sottovoce, e ride piano, incredulo)* "Quello è il MIO divano. Si è seduto sul mio divano per ricaricarsi mentre io stavo appeso ai cavi." *(alza la voce)* "SCENDI DAL MIO DIVANO."

Il filo grigio, sotto le vostre suole, si TENDE. Qualcosa, di là, ha appena cominciato a perdere carica.

**(🎨 Colore +2: la ricarica di Eleinad è esposta. Nello scontro finale combatterà a batteria scarica — i suoi colpi partiranno più deboli e la sua rigenerazione non funzionerà.)**`,
    gold: 2,
    sets: { trono_esposto: true, eleinad_vacilla: true },
    choices: [
      { text: '⚔ Adesso: il tavolo da gioco è vostro', next: 'z2' },
    ],
  },

  z_nome_vero: {
    location: 'cattedrale',
    caption: 'Il nome vero, allo specchio',
    text: `Federico alza la maschera. Non davanti alla propria faccia: davanti a QUELLA di Eleinad — col lato lucido girato verso il buco, come si porge uno specchio a chi ha qualcosa fra i denti.

> Federico: "Guardati. Guardati BENE, perché stasera è l'ultima occasione." *(la mano non trema, e questa è la cosa che spaventa Eleinad più di tutto)* "'Eleinad'. Che nome fantastico. Terrificante. Antico. L'hai scelto tu, vero? Davanti a uno specchio, come i ragazzini col nome d'arte."

Nella superficie lucida della cartapesta, il buco a forma di persona si riflette. E il riflesso — il riflesso DI un riflesso — è la cosa più vuota che abbiate mai visto: una faccia che non c'è che guarda una faccia che non c'è.

> Federico: "Sei DANIELE scritto al contrario. Non un demone antico: un ANAGRAMMA. Ti sei fatto il nome con le lettere di un altro perché non ne avevi di tuoi. E adesso lo dico ad alta voce, davanti a tutti, così tutta la casa lo sente—"

*(e lo dice: sillaba per sillaba, al rovescio, il nome vero)*

**"D-A-N-I-E-L-E. Sei il riflesso di MIO FRATELLO. E mio fratello È QUI, in piedi, accanto a me."**

Il buco EMETTE un suono. Non un urlo: uno stridere di vetro sotto pressione. La maschera, nella mano di Federico, si crepa a metà — e nella crepa, per un istante, si vede il salotto vero: il divano, la Switch, una lattina di Coca Zero. Casa.

> Daniele: *(accanto al fratello, la voce ferma)* "Piacere. Daniele. QUELLO CON IL CORPO."

**(🎨 Colore +2: il demone è stato NOMINATO davanti a testimoni. Ha perso il nome rubato — e con quello, l'aggancio su Daniele: comincerà lo scontro già ferito.)**`,
    gold: 2,
    removeItem: 'maschera_daniele',
    sets: { nome_vero_detto: true, eleinad_vacilla: true },
    choices: [
      { text: '⚔ Al tavolo da gioco — con un demone senza nome', next: 'z2' },
    ],
  },

  z2b: {
    location: 'cattedrale',
    caption: 'Gli spiriti attraversano il Grigiore',
    gold: 1,
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
      { text: '👻 Restare un altro momento nel vuoto: mappare le crepe', tag: 'Prova di Intelligenza — CD 14', once: true, check: { stat: 'INT', dc: 14, success: 'z2c', fail: 'z2_ko' }, gold: 1 },
    ],
  },

  z2c: {
    location: 'cattedrale',
    caption: 'La mappa delle crepe',
    sets: { crepe_mappate: true },
    text: `Lo spirito rientra nel ritaglio e stavolta ci resta. Trenta secondi. Quaranta. Poi riemerge camminando all'indietro, come chi esce da una stanza tenendo d'occhio la porta.

> Lo spirito: "Ho contato. Dietro l'altare il vuoto non è liscio: è **crepato**. Undici crepe grandi, tutte che partono dal ritaglio e salgono, e in fondo a ognuna c'è un pezzo di qualcuno." *(pausa)* "Ho riconosciuto una vestaglia. Non chiedetemi di chi."

> Gaetano: *(già disegnando col dito sul marmo)* "Undici, e vanno verso l'alto. Quindi il ritaglio non è la bocca: è la crepa PRINCIPALE. Le altre dieci sono i punti dove si è rotto da solo, sotto il proprio peso."

> Lo spirito: "E c'è la regola, sentitela bene: le crepe si aprono se lo guardi DI SBIECO. Frontale si chiudono, si fanno muro, ti mangiano il colpo. Di taglio restano aperte come bocche. Ha la stessa fame delle sue crepe, e la fame non sa fingere."

> Claudia: *(gira il racchettone di quarantacinque gradi)* "Mai fissarlo in faccia. Come i monitor rotti." *(mezzo sorriso)* "Da fotografa vi dico che è la notizia migliore della serata: la luce buona è SEMPRE di taglio."

**(🎨 Colore +1: undici crepe mappate. Mai frontale — sempre di sbieco.)**`,
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

> Eleinad: "E va bene. Parliamo del futuro, visto che vi piace tanto. Ve lo portate via, stanotte, il vostro trofeo. E poi? Poi tornate alle vostre vite, ai vostri lunedì, e lui torna al suo divano. E IL GRIGIO RISALE. Il grigio risale SEMPRE, come l'umidità nei muri. E quando risalirà — quando un giovedì qualunque nessuno avrà tempo per un messaggio — sarà COLPA VOSTRA. Di voi che stanotte avete fatto gli eroi e domani non avrete tempo per un caffè. Potete vivere con questo peso? Potete USCIRE da quella porta sapendo cosa gli state facendo?"

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
    gold: 1,
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
      { text: '🧠 "L\'hai già detto con paura: TU SEI IL GEMELLO." — ricordarglielo', requires: { flag: 'eleinad_teme_gemelli' }, once: true, next: 'z6_eco' },
      { text: '🛡 Fare scudo attorno alla foto', tag: 'Prova di Carisma — CD 13 (chiunque tiri, il gruppo fa scudo)', check: { stat: 'CAR', dc: 13, success: 'e_gemelli', fail: 'z6b' } },
      { text: '🗣 Daniele alza la voce: "Fratello mio, TIENI."', tag: 'Prova di Carisma — CD 11 (Daniele aggiunge la sua voce)', requires: { hero: 'daniele' }, check: { stat: 'CAR', dc: 11, success: 'e_gemelli', fail: 'z6b' } },
    ],
  },

  z6_eco: {
    location: 'cattedrale',
    caption: 'L\'aveva già detto con paura',
    text: `Federico non alza la foto. La tiene bassa, contro il petto, e fa una cosa più cattiva: **ricorda**.

> Federico: "Sai qual è la cosa che mi tengo di stanotte? Non il contratto. Non il divano. La tua VOCE. Quando ti ho insultato di là, hai perso il ritmo per mezzo secondo e hai detto: 'Tu. TU sei il GEMELLO.'" *(pausa)* "L'hai detto come si dice il nome di una malattia. L'hai detto con PAURA."

I televisori, tutti insieme, abbassano il volume di un gradino. Nessuno ha toccato niente.

> Daniele: *(spalla contro spalla col fratello)* "Eccola. Stessa faccia, stessa risata, e per trent'anni ci siamo usati come coltelli. Il tuo giacimento." *(alza la foto)* "Chiuso per esaurimento."

> Eleinad: *(e la voce esce piccola: la prima cosa piccola che gli sentite fare)* "...non siete uguali. Non lo siete MAI stati."

> Federico: "Su questo hai ragione! È l'unica cosa vera che hai detto stanotte." *(sorride, e non è un bel sorriso)* "Lui è meglio. E siamo d'accordo pure su questo. Prova a mangiarci ADESSO."

**(Gliel'avete ricordato con le sue stesse parole. La sua paura ha un nome, ed è il vostro cognome.)**`,
    choices: [
      { text: '🛡 Fare scudo attorno alla foto, adesso che vacilla', tag: 'Prova di Carisma — CD 12 (il gruppo fa scudo)', check: { stat: 'CAR', dc: 12, success: 'e_gemelli', fail: 'z6b' } },
      { text: '🗣 Daniele alza la voce: "Fratello mio, TIENI."', tag: 'Prova di Carisma — CD 10 (Daniele aggiunge la sua voce)', requires: { hero: 'daniele' }, check: { stat: 'CAR', dc: 10, success: 'e_gemelli', fail: 'z6b' } },
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
    combat: { enemies: ['eleinad_vero'], victory: 'z8', defeat: 'z_ko', loot: { gold: 2 } },
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
    goldLoss: 2,
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
    gold: 1,
    sets: { finale_parola: true },
    stinger: 'victory',
    text: `Eleinad frana dentro se stesso senza rumore: un buco che si chiude come acqua sopra un sasso, e quando l'ultima briciola di grigio cade verso l'alto e si accende, la casa intera SI SGONFIA — pareti che tornano pareti, la navata che si ripiega in un salotto, il salotto in un bilocale di sessanta metri quadri che finisce, benedetto, DA TUTTE LE PARTI.

E se qualcuno di voi camminava come luce, adesso non più: il colore che torna al mondo torna anche a LORO — peso, fiato, battito, tutto in una volta — e c'è chi si tocca le mani senza credere alle mani, e c'è chi abbraccia e chi viene abbracciato e non si capisce più chi dei due piange di più. Va bene così. Nessuno lo racconterà giusto, comunque.

La porta d'ingresso RIAPPARE. Dietro, l'alba: e i colori fanno MALE agli occhi, nel senso buono — il rosa sguaiato, l'arancione maleducato, il cielo che non si vergogna di niente.

E se stanotte uno di voi è passato dalla sala d'aspetto dei morti — sedie di formica, una signora che sferruzza un filo che non c'è, un ragazzo curvo su un cruciverba — adesso si ferma sul pianerottolo col telefono in mano, e cerca. *Settantaquattro orizzontale, sei lettere: "ciò che resta quando nessuno ti nomina più".* La casella non voleva GRIGIO. Voleva un NOME.

> Chi c'è stato: *(verso la porta che si sta richiudendo, ad alta voce, scandendo)* "TERESA. Ti chiami TERESA, signora. L'ho detto qua fuori, e adesso lo sanno tutti."

Dentro, per un secondo, qualcuno smette di sferruzzare.

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
    gold: 1,
    sets: { finale_gemelli: true },
    stinger: 'victory',
    text: `L'urlo di Eleinad si spegne a metà, perché non trova più l'appiglio: due gemelli che si danno ragione sono una lingua che il demone non ha mai imparato a leggere. Prova a sfogliarli — lo sentite, un frugare gelido nella memoria, in cerca di una lite, UNA — e trova solo la foto: due bambini su una spiaggia, uno che ride, uno che sta per ridere.

E allora si richiude. Come un libro. Le pagine grigie che si accostano piano, la copertina che cala, il buco a forma di persona che diventa una fessura, poi una riga, poi un niente ordinato — e la casa si sgonfia attorno a quel niente fino a tornare un bilocale con la porta al suo posto e l'alba dietro la porta.

E il colore, tornando al mondo, ripassa a saldare i conti: se qualcuno di voi era luce, torna CARNE — e viene travolto dall'abbraccio più disordinato della storia del pianerottolo.

E se stanotte uno di voi è passato dalla sala d'aspetto dei morti, sul pianerottolo si ferma un attimo col telefono in mano: *settantaquattro orizzontale, sei lettere, "ciò che resta quando nessuno ti nomina più".* Non era GRIGIO. Era **TERESA** — e viene detto ad alta voce verso la porta che si chiude, scandito, come si fanno i nomi che contano. Dentro, un ferro da maglia si ferma a metà punto.

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
    gold: 1,
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

E c'è una cosa che Eleinad non vi dirà mai, perché non riesce a spiegarsela: le dita di Daniele, sul bracciolo, BATTONO ancora. Piano. A intervalli. Punto-linea-punto. Nessuno le ascolta più — ma non hanno smesso. In questa stanza c'è uno che si arrende peggio di tutti gli altri, e lo sta facendo alla sua maniera: senza mollare la discussione a metà.

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
- teca_profanata (z1t1, scelta 💥) → consumato dalla scelta di uscita di z1t2 (requires.flag)

FLAG CONSUMATI (impostati altrove): via_biblioteca/via_porte/via_cucina (porta h1→m1, non in questo blocco),
foto_ricomposta + segreto_gemelli (z2 scelta b), manuale_annotato_letto / daniele_sabota / sonnambuli_svegli (echi in z7).

ITEM: nessun item dato in questo blocco. Item consumati: joycon_sinistro (richiesto in m3, non rimosso),
lattina_zero (rimossa in m6), manuale_annotato (richiesto in z2a).

SCENE AGGIUNTE (completamento incarico — deviazioni facoltative, once:true, tornano al filo principale):
- z1t1/z1t2 → "La Sala dei Trofei di Eleinad" (aggancio da z1, scelta 🏆): vetrine di piccole rese e la teca
  vuota "I SEI"; profanarla vale gold:2 e imposta teca_profanata, consumato subito dopo. Torna a z2.
- z1mono → "Il monologo di Eleinad" (aggancio da z1, scelta 👂): il demone si racconta, gold:1. Torna a z2.
- m7g1/m7g2 → "Cinque minuti dei gemelli" (aggancio da m7, scelta 👬): Federico e Daniele da soli, il momento
  di cuore mancante nello snodo; m7g2 dà heal:3 e gold:1. Torna a m8.

MORTI POSSIBILI:
- m5_sacrificio (sacrifice esplicito → entrato_bozzolo)
- z4_colpo (killRoller: chi risponde male al secondo assalto del duello)
- z9 (sacrifice esplicito → scambiato)

USCITE DEL BLOCCO: nessuna (gli epiloghi chiudono). Ingressi: m1 (da h1), z1 (da m9).
STINGER USATI: jumpscare (m3, m4c, z4_colpo), victory (m6, e_parola, e_gemelli, e_colori),
campana (m8, z1, e_scambio), defeat (m_ko, z_ko, e_grigio).
======================================================================== */

/* ============ HUB — il Salotto-Cattedrale e le scene di respiro ============ */
