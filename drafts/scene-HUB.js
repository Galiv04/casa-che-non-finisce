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
    stinger: 'item',
    caption: 'Il cerchio del tronello',
    heal: 4,
    sets: { fumo_mappa: true },
    text: `Natalino si siede per terra a gambe incrociate, in mezzo alla navata, e rolla con la calma di un artificiere.

> Natalino: "La casa è di quel coso. D'accordo. Ma questi dieci minuti sono MIEI, e vi ci ospito volentieri."

Il cerchio si fa da solo: Gaetano e Claudia spalla a spalla, Federico che passa le birre al limone come un chierichetto passa l'incenso, Emanuela che monta la guardia coi taralli. Si fuma, si tossisce, si ride piano. Per dieci minuti la cattedrale è solo un soffitto alto sopra cinque amici seduti per terra.

**(+4 PV a tutti. Certe medicine non le vende nessuno.)**

Poi Federico soffia uno dei suoi cerchi di vapore — e il fumo del tronello ci passa in mezzo e **NON SI DISPERDE**. Resta lì. Si allunga. Si piega ad angoli retti.

> Claudia: *(già col telefono in mano)* "Ragazzi. Il fumo sta disegnando una PIANTA."

Corridoi. Stanze. E in alto, sopra tutto, un rettangolo grande con dentro un rettangolo piccolo: **uno schermo davanti a un divano**. Il fumo trema lì sopra, insiste, come un dito che batte sul vetro.

> Natalino: *(piano)* "Daniele, fratello. Ricevuto forte e chiaro."

**(Il fumo vi ha mostrato dov'è: la pianta è nel diario.)**`,
    choices: [
      { text: '↩ Si torna al centro della Casa. Con una direzione in più.', next: 'h1' },
      { text: '🗺 La pianta nel fumo: Claudia la ridisegna a memoria sul telefono', once: true, sets: { pianta_salvata: true }, next: 'h1' },
    ],
  },

  h3: {
    location: 'salotto',
    stinger: 'item',
    caption: 'Riscaldamento — stile Gaeta',
    item: 'pallina_racchettoni',
    sets: { racchettoni_pronti: true },
    text: `Gaetano ha portato su i racchettoni per farli vedere a Daniele — quelli nuovi, professionali, che in spiaggia fanno spostare gli ombrelloni. Sono ancora nella borsa, vicino alla porta che non c'è più.

> Claudia: "Scaldiamo il braccio?"

> Gaetano: "Scaldiamo il braccio."

Quello che succede nei tre minuti seguenti, nella navata del Salotto-Cattedrale, è difficile da descrivere a chi non li ha mai visti giocare. La pallina **fischia**. I muri incassano. A un certo punto un colpo di Claudia passa così vicino alla testa di Federico che gli sposta la riga dei capelli.

> Federico: "EHI. Porca puttana. C'è un MORTO potenziale, qui."

> Claudia: *(senza fermarsi)* "C'è un morto potenziale OVUNQUE, qui. Il mio almeno è a fin di bene."

E la Casa — questo lo notate tutti — per tre minuti interi **non muove niente**. Nessun sussurro, nessuno scricchiolio. Come una cosa enorme e grigia che si è messa in un angolo a guardare due professionisti, e non ha capito **come si fa a essere così vivi.**

**(Una pallina in tasca a Gaetano: là dentro è un'arma.)**`,
    choices: [
      { text: '↩ Il braccio è caldo. Si torna a fare sul serio.', next: 'h1' },
      { text: '🎾 Un ultimo scambio: il muro della cattedrale ha un segno che non c\'era', once: true, next: 'h5' },
    ],
  },

  h5: {
    location: 'salotto',
    caption: 'Il segno sul muro',
    sets: { segno_muro: true },
    text: `Il segno sta a due metri d'altezza, sulla parete nord della navata, e tre minuti fa non c'era: nessuno di voi ha mai visto questa Casa lasciare una prova.

È un cerchio. GIALLO. La pallina.

Un tondo di vernice gialla, grande esattamente come la pallina, stampato sul grigio come un timbro — e da lì partono quattro crepe sottilissime verso l'alto, come quando un sasso becca un parabrezza.

> Gaetano: *(ci mette un dito sopra, poi si guarda il dito)* "Ha lasciato il colore ADDOSSO. La pallina ha scaricato giallo sul muro. Il muro l'ha assorbito e si è CREPATO."

> Claudia: "Quindi non è che non digerisce il colore. È che il colore, dentro, gli fa danno STRUTTURALE."

> Gaetano: "Esatto. E noi ne abbiamo una borsa piena." *(fa un passo indietro, misura il cerchio a occhio, se lo segna sul telefono)* "Ricordatevi questo punto: se stanotte serve un buco in un muro di questa casa, si tira una pallina."

> Natalino: "Il mio contributo alla scienza sarà lanciare cose gialle alle pareti. Sono in pace con questo."

**(Il colore non lo nutre — lo CREPA. E i vostri colori sono armi da lancio.)**`,
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
      { text: '👂 Quella voce dal muro: qualcuno dice il piano', once: true, next: 'h6' },
    ],
  },

  h6: {
    location: 'salotto',
    caption: 'La voce dentro il muro',
    sets: { voce_muro: true },
    text: `Natalino non si alza. Resta seduto contro la parete, l'orecchio appoggiato al grigio come si fa da bambini con la conchiglia, e alza una mano: *zitti*.

C'è una voce. Dentro il muro, a quaranta centimetri dalla sua testa, bassissima. Non urla, non chiede aiuto. **Ripassa il vostro piano.**

> La voce dentro il muro: *(un sussurro dozzinale, la cadenza tutta sbagliata)* "...entriamo, lo riprendiamo, usciamo. Entriamo, lo riprendiamo, usciamo. E domenica grigliata da me. Stile Pasquetta."

> Emanuela: *(gelida)* "Quella è la frase di Gaetano. Parola per parola."

> Natalino: "Sì. Ma la dice MALE." *(stacca l'orecchio dal muro, piano, e si alza)* "Sentite dove mette l'accento su 'grigliata'? Come uno che ha letto la parola e non ha mai mangiato niente in vita sua."

> Gaetano: "Sta imparando il copione. Ci ascolta e RIPASSA — come faceva allo specchio." *(guarda la parete con un disprezzo tranquillo)* "Bene. Allora stanotte il piano lo cambiamo all'ultimo secondo, e non ad alta voce."

> Claudia: "Da adesso i piani si scrivono. Sul mio telefono. Nessuno li dice."

**(La Casa ripassa il vostro piano dentro i muri. Da stanotte il piano si scrive, non si dice.)**`,
    choices: [
      { text: '↩ In piedi. Daniele aspetta.', next: 'h1' },
    ],
  },

};
