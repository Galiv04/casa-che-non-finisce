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
