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
