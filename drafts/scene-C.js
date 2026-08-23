const SCENE_C = {

  /* ==================== u1 — IL CORRIDOIO ==================== */


  u9_consiglio: {
    location: 'porte',
    caption: 'Il consiglio della sala d\'aspetto',
    text: `La signora posa il lavoro a maglia sul grembo — il filo che non c'è resta a mezz'aria, paziente — e guarda lo Spirito con l'aria di chi ha aspettato decenni che qualcuno facesse LA domanda giusta.

> La signora: "Da spiriti non si esce, tesoro. Si RIENTRA." *(riprende a sferruzzare)* "Il grigio ti ha tolto dal mazzo, ma la carta non l'ha strappata: l'ha messa da parte. Per rientrare in gioco serve che qualcuno di là — qualcuno VIVO, che ti vuole bene — punti su di te qualcosa di suo. Colore vero. Non un pensiero: un GESTO."

> Il ragazzo del cruciverba: *(senza alzare la testa)* "A me nessuno ha mai puntato niente. Settantaquattro orizzontale: 'Ciò che resta quando nessuno ti nomina più'. Sei lettere."

> La signora: "Ignoralo, fa così coi nuovi. La cosa da dire ai tuoi amici è questa: il Cuore di Colore, i gesti, i nomi detti ad alta voce — TUTTO quello che è dato gratis funziona da biglietto di ritorno. E se stanotte arrivate al demone... ricordategli che ogni carta messa da parte è un DEBITO. E i debiti, prima o poi, li riscuote qualcuno."

Sulla porta, lo Spirito si volta un'ultima volta. La signora sorride, e il sorriso è di un colore che il grigio non è mai riuscito a toccare.

> La signora: "Vai, vai. E tesoro... quando esci, dì il mio nome, se lo trovi. Sono la SETTANTAQUATTRO ORIZZONTALE, da troppo tempo."

**(Si rientra con un gesto GRATIS di chi ti ama. Gli spiriti della casa sono debiti che il demone spera vi scordiate.)**`,
    sets: { consiglio_spiriti: true },
    choices: [
      { text: '🚪 Tornare dagli altri, con la notizia più strana della serata', next: 'u1' },
    ],
  },


  u14_targhetta: {
    location: 'porte',
    caption: 'La targhetta sotto il bavero',
    text: `Claudia solleva il bavero della toga afflosciata con due dita, come si fa con le cose morte che potrebbero non esserlo.

Sotto, cucita a mano, una targhetta da sartoria. Ricamata fine, con filo che una volta era blu:

*"Avv. R. M. — su misura, 1988. Per l'uomo che vinse novantasei cause su novantasette."*

E sotto, aggiunto dopo, con un filo più grigio e punti più stanchi:

*"La novantasettesima era la sua."*

> Federico: "Novantasei a uno. E il Grigiore se l'è preso per l'UNICA che ha perso."

> Claudia: *(riabbassando il bavero, piano)* "No, Federico. Guarda i punti: la seconda riga l'ha ricamata LUI. Se l'è cucita addosso da solo, la sconfitta. Il Grigiore non l'ha preso per la causa persa..." *(si alza)* "...l'ha preso perché ha smesso di contare le novantasei vinte."

Silenzio. La toga, a terra, sembra più piccola di prima. Una taglia da uomo che si era convinto di essere la propria peggior sentenza.

> Natalino: "Novantasei a uno, avvocà. Dove sto io, si chiama CARRIERA. Riposati, che hai vinto."

**(L'Avvocato aveva un nome e un record quasi perfetto — e la lezione è cucita nel bavero: è il conteggio che scegli a prenderti o salvarti.)**`,
    sets: { toga_targhetta: true },
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
    ],
  },

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
      { text: '🛰 La porta "SALA CONTROLLO" — cento telefoni che squillano insieme', next: 'u10' },
      { text: '🪩 La porta "IBIZA" — bassi che pompano a volume zero', next: 'u11' },
      { text: '✂️ La porta "IL SALONE" — forbici che tagliano da sole', next: 'u12' },
      { text: '📅 La porta "AGOSTO 2019" — le vostre risate, registrate male', once: true, next: 'u13' },
      { text: '⚖️ La porta color torto, targhetta "OBIEZIONE" — una voce che sa i vostri nomi', requires: { notFlag: 'obiezione_vinta' }, next: 'u14' },
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
      { text: '✋ Strappare il nastro adesivo: dividere non si divide più', sets: { nastro_strappato: true }, next: 'u3' },
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

**(🎨 Colore +1: avete capito il gioco del padrone di casa. E il joy-con sinistro è vostro: a qualcuno servirà una mano per tornare a giocare.)**`,
    gold: 1,
    sets: { segreto_gemelli: true },
    item: 'joycon_sinistro',
    choices: [
      { text: '🚪 Fuori di qui, prima che il pasto si accorga di voi', next: 'u3' },
      { text: '🔇 Dire qualcosa che i bambini non si sono MAI detti: rompere il loop', tag: 'Prova di Carisma — CD 13', once: true, check: { stat: 'CAR', dc: 13, success: 'u3', fail: 'u2_ko' }, gold: 1 },
    ],
  },


  u2_ko: {
    location: 'cameretta',
    caption: 'Le parole respinte',
    damage: 1,
    text: `Le parole nuove escono — e la stanza le RIFIUTA. Il loop dei bambini si alza di volume, coprendole, e le voci registrate si fanno più veloci, più strette, come uno spiedo che gira il doppio: la miniera ha sentito che qualcuno provava a chiuderla, e per rappresaglia SERVE UNA PORZIONE DOPPIA.

Trent'anni di litigio vi passano attraverso in dieci secondi. È come farsi attraversare da una lastra di gennaio.

> Gaetano: *(coi denti che battono)* "Registrato. La stanza si difende. Servono le parole ESATTE, non parole qualunque — o l'occasione giusta."`,
    choices: [
      { text: '🚪 Fuori dalla cameretta, per ora', next: 'u3' },
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
    combat: { enemies: ['gemello_sbagliato'], victory: 'u3b', defeat: 'u_ko', loot: { gold: 1 } },
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

**(🎨 Colore +1: qualcosa che era rotto da trent'anni ha smesso di fare rumore.)**`,
    gold: 1,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '🧸 Un\'ultima occhiata: il nastro adesivo sul pavimento è SPARITO', once: true, sets: { nastro_sparito: true }, next: 'u1' },
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
    combat: { enemies: ['monologante'], victory: 'u4b', defeat: 'u_ko', loot: { gold: 1 } },
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

**(🎨 Colore +1. La conchiglia di Gaeta va nello zaino: è piccola, ma è accesa.)**`,
    gold: 1,
    sets: { vibe_salvata: true },
    item: 'conchiglia_gaeta',
    choices: [
      { text: '🏐 I racchettoni piantati in riva: sono i vostri.', next: 'u4d' },
      { text: '🌊 Emanuela fa un passo nell\'acqua: "Questa spiaggia me la riprendo ORA"', tag: 'Prova di Saggezza — CD 12', once: true, check: { stat: 'SAG', dc: 12, success: 'u4e', fail: 'u4_ko' } },
    ],
  },

  u4e: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — L\'acqua fredda giusta',
    sets: { mare_ha_risposto: true },
    text: `Emanuela entra fino alle caviglie, poi fino al ginocchio, in un mare che da tre giorni è una lastra. E il mare **reagisce**.

Prima le si stringe addosso: freddo vero, freddo di maggio, quello che fa bestemmiare e ridere insieme. Poi, dal punto esatto dove ha messo i piedi, parte un cerchio — un'onda circolare che si allarga verso l'orizzonte, piano, ostinata, e dove passa la lastra di vetro sporco si increspa e **torna acqua**.

> Emanuela: *(senza voltarsi, le braccia larghe)* "Si è ricordato di me. Stronzi. SI È RICORDATO DI ME."

> Gaetano: *(guardando il cerchio allargarsi, e la voce gli trema di matematica)* "Un'onda circolare su un fluido fermo. È un sasso buttato dentro al contrario: non è l'acqua che accoglie il sasso, è il sasso che sveglia l'acqua."

Il cerchio arriva all'orizzonte e non torna indietro. Da qualche parte, oltre, per un istante si sente una risacca VERA.

**(Un mare morto ha battuto ciglio. Emanuela non lo racconterà a nessuno, e lo racconterà a tutti.)**`,
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


  u4_ko: {
    location: 'spiaggia_grigia',
    caption: 'L\'onda che afferra',
    damage: 2,
    text: `Emanuela fa il passo — e il mare di vetro fa il suo. L'onda singola che sembrava un regalo si richiude intorno alla caviglia come una mano educata ma FERMA, e tira: non per affogare. Per TRATTENERE. Il Grigiore non è mai stato violento: è insistente.

La tirano fuori in tre, e la caviglia porta il segno — una fascia pallida, esangue, dove il colore della pelle tornerà con calma.

> Emanuela: *(seduta sulla sabbia grigia, massaggiandosi la caviglia, più offesa che spaventata)* "Ha provato a TENERMI. Con la buona maniera. Come le zie che non ti lasciano andare via dal pranzo."

> Natalino: "E tu che hai fatto?"

> Emanuela: "Quello che si fa con le zie. Ho promesso che torno."`,
    choices: [
      { text: '🚪 Via dalla spiaggia, con una promessa da non mantenere', next: 'u4d' },
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
      { text: '🌊 Restare un momento: l\'onda ha lasciato qualcosa sulla battigia', once: true, next: 'u4f' },
    ],
  },

  u4f: {
    location: 'spiaggia_grigia',
    caption: 'GAETA — Quello che l\'onda ha lasciato',
    sets: { battigia_vista: true },
    text: `Dove l'onda si è ritirata la cenere è bagnata, e la battigia ha una riga scura come tutte le battigie del mondo. Vi accucciate a guardarla, perché su quella spiaggia l'avete fatto mille volte.

Sulla riga ci sono: quattro conchiglie rotte, un pezzo di plastica azzurra levigato in vent'anni di mare, un portachiavi a forma di racchetta da spiaggia — e **un'impronta di piede**. Una sola. Quarantaquattro, tallone affondato, direzione: verso l'acqua.

> Claudia: "Quarantaquattro. Daniele porta il quarantaquattro."

> Gaetano: "Ed è FRESCA. Impronta fresca su cenere bagnata da due minuti. Il che è impossibile, perché lui sta quattro piani più in alto dentro un bozzolo." *(si alza, si pulisce le mani sui jeans, e per la prima volta da quando è entrato in questa casa sorride)* "A meno che non stia girando i posti suoi mentre il padrone di casa guarda altrove."

> Emanuela: *(mette il piede accanto all'impronta, il suo trentotto dentro quel quarantaquattro)* "È passato da qui. Ha guardato il suo mare. Poi è risalito a fare danni nei fusibili."

> Natalino: "Fratello mio, un giorno mi spieghi come si fa."

**(Sulla battigia c'è un'impronta del quarantaquattro, fresca. Daniele gira ancora la sua Casa.)**`,
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
      { text: '🩹 Ricomporre la foto col nastro, adesso, davanti a tutti i manichini', requires: { item: 'foto_meta_federico' }, removeItem: 'foto_meta_federico', removeItem2: 'foto_meta_daniele', item: 'foto_gemelli', sets: { foto_ricomposta: true }, gold: 1, next: 'u5d' },
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
    combat: { enemies: ['hostess', 'manichino_vita'], victory: 'u5b', defeat: 'u_ko', loot: { gold: 1 } },
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
      { text: '📋 I fogli di volo nella tasca del 19A: qualcuno ha scritto qualcosa', once: true, next: 'u5e' },
    ],
  },

  u5e: {
    location: 'cabina',
    caption: 'IMBARCO — I fogli di volo del 19A',
    sets: { foglio_volo_letto: true },
    text: `Nella tasca del sedile 19A, dietro la rivista di bordo che pubblicizza destinazioni che non esistono, ci sono tre fogli di volo. Moduli veri: nome, destinazione, motivo del viaggio. Due sono vuoti.

Il terzo è compilato. Grafia piccola e nervosa, stampatello, penna premuta forte:

*"NOME: non me lo ricordo più. DESTINAZIONE: casa. MOTIVO DEL VIAGGIO: mi aspettano. — 19A, giorno quattromila e qualcosa."*

Sotto, in mezzo al modulo, una colonna di trattini. Migliaia. Uno per giorno, finché la penna ha smesso di scrivere — e i trattini continuano, incisi a secco, per altre due colonne.

> Claudia: *(li conta per venti secondi, poi si ferma)* "Un passeggero. Uno che non è mai atterrato e ha continuato a segnare i giorni comunque."

> Natalino: "Ma quello è il posto di Daniele."

> Gaetano: "No. Quello è il posto che la Casa DÀ a chi ha paura di volare." *(guarda le file infinite di manichini)* "Prima di Daniele c'è stato qualcun altro, su questo sedile. E dopo Daniele ci sarebbe stato un altro ancora."

> Emanuela: "E invece stanotte l'aereo lo svuotiamo noi."

**(Sul 19A c'era già stato qualcuno. Segnava i giorni. Nessuno è venuto a prenderlo. Voi sì.)**`,
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
      { text: '🌊 L\'acqua ha preso. Non avrà anche il Cuore: si ritenta.', once: true, next: 'u6' },
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

**(🎨 Colore +1. Il Cuore di Colore è vostro: con questo, qualcuno può TORNARE. Ma nell'acqua nera, dietro di voi, gli scogli si stanno muovendo.)**`,
    gold: 1,
    sets: { cuore_sommerso_preso: true },
    item: 'cuore_colore',
    choices: [
      { text: '⚠️ Qualcosa vi ha visti. Qualcosa si alza.', next: 'u7' },
      { text: '🔦 Studiare il Cuore: capire COME funziona prima dello scontro', once: true, next: 'u6_cuore' },
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

**(🎨 Colore +1. Il Cuore di Colore è vostro senza un graffio. Ma l'applauso — l'applauso l'ha sentito anche l'acqua.)**`,
    gold: 1,
    sets: { cuore_sommerso_preso: true },
    item: 'cuore_colore',
    choices: [
      { text: '⚠️ La superficie nera si increspa. Si alza.', next: 'u7' },
      { text: '🔦 Esaminare il Cuore mentre c\'è tempo: è caldo, pulsa', once: true, next: 'u6_cuore' },
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
      { text: '🚪 Chiudere la porta ADESSO, prima che esca del tutto', next: 'u1' },
    ],
  },


  u6_cuore: {
    location: 'stanza_sommersa',
    caption: 'Come funziona un Cuore di Colore',
    text: `Gaetano lo esamina alla sua maniera: torcia, controluce, il pollice che preme piano per sentire la consistenza. Il Cuore pulsa — caldo, rosso-arancio-oro — e a ogni battito il buio intorno arretra di un palmo, come una marea al contrario.

> Gaetano: "Ok. Osservazioni. Uno: batte da SOLO, senza un corpo. Quindi non è un organo — è una RISERVA. Il colore compresso di qualcuno, impacchettato così stretto che è diventato materia." *(lo gira, delicatissimo)* "Due: scalda la mano ma non si consuma. E tre — la più importante — guardate cosa fa quando lo avvicino a Emanuela."

Lo avvicina. Il Cuore accelera. Il battito si sincronizza, in tre secondi netti, con quello di lei.

> Gaetano: "Si ACCORDA. Cerca un proprietario. Questo coso è fatto per essere RESTITUITO — è l'unica cosa in tutta la casa che vuole tornare indietro." *(lo posa, e la voce gli si abbassa)* "Il che significa due usi: riaccendere qualcuno che si è spento... o riaccenderlo DENTRO qualcosa. Una cura o un'arma, dipende da dove lo mettiamo. Scegliamo bene."

> Claudia: "E se il Grigiore rivuole il suo magazzino?"

> Gaetano: "Il Grigiore ACCUMULA e basta. La restituzione non l'ha mai prevista. È il suo punto cieco: nessun avaro immagina il rimborso."

**(Il Cuore è una riserva che CERCA un proprietario — e il Grigiore non ha difese contro un RESO.)**`,
    sets: { cuore_studiato: true },
    choices: [
      { text: '⚠️ La superficie nera si increspa. Qualcosa si alza', next: 'u7' },
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
    combat: { enemies: ['cosa_sommersa'], victory: 'u7b', defeat: 'u_ko', loot: { gold: 1, items: ['lattina_zero'] } },
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

**(🎨 Colore +1, e le conchiglie vere scaldano: +3 PV a tutti. La paura di Claudia, da stanotte, ha una stanza in meno dove abitare.)**`,
    gold: 1,
    heal: 3,
    choices: [
      { text: '🚪 Tornare al corridoio delle porte', next: 'u1' },
      { text: '🐚 Le conchiglie di Gaeta: raccoglierne una per Daniele', once: true, sets: { conchiglia_per_daniele: true }, next: 'u1' },
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

**(La casa vi ha rimessi in piedi per rigiocarvi: PV pieni, ma 🎨 Colore −1. Il conto lo paga sempre qualcuno.)**`,
    fullHeal: true,
    goldLoss: 1,
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

**(Il corridoio delle porte non vi fa più paura. Adesso è la casa che deve ricordarsi di voi.)**`,
    sets: { via_porte: true },
    choices: [
      { text: '🏛 Tornare al Salotto-Cattedrale', next: 'h1' },
      { text: '🚪 Un\'ultima porta — quella in fondo, senza targhetta', once: true, requires: { spirit: true }, next: 'u9' },
    ],
  },

  u9: {
    location: 'porte',
    caption: 'La porta senza targhetta',
    text: `C'è una porta che gli altri non vedono. Chi è vivo ci passa davanti e l'occhio gli scivola via. Ma chi di voi è MORTO stanotte la vede benissimo: bianca, senza targhetta, senza colore sbagliato — perché non è un ricordo rubato. È una porta di SERVIZIO.

Lo Spirito la attraversa. Da solo. Dall'altra parte c'è una sala d'aspetto: sedie di plastica avvitate a terra, un distributore di caffè spento, riviste con le date illeggibili, e una luce da ambulatorio alle sei di sera. Sulle sedie, altri come voi: trasparenti, pazienti. Una signora anziana lavora a maglia un filo che non c'è. Un ragazzo con gli occhiali anni Settanta fa un cruciverba senza penna.

> La signora: *(senza alzare gli occhi dalla maglia)* "Fresco fresco, eh? Si vede. I nuovi hanno sempre quella faccia da 'dev'esserci un errore'." *(sorride, gentile)* "Siediti, ché qui il tempo non conta. E ascolta la cosa importante, che a noi nessuno l'ha detta e abbiamo perso decenni: IL GRIGIO NON CI VEDE."

> Lo Spirito: "...come, non ci vede?"

> Il ragazzo del cruciverba: "Non può. Lui colleziona quello che la gente ha ancora da perdere. Noi abbiamo già perso tutto: siamo INVENTARIO EVASO. Per lui siamo aria." *(alza gli occhi, e dietro gli occhiali c'è qualcosa di feroce e allegro insieme)* "Ci pensi? In questa casa, i più liberi di tutti siamo NOI. Passiamo dappertutto. Usalo, ragazzo. Noi non l'abbiamo usato, e guarda che fine: l'abbonamento alle riviste."

**(🎨 Colore +1. Adesso lo sapete: il Grigiore non può toccare ciò che è già stato perso. Gli Spiriti passano OVUNQUE.)**`,
    gold: 1,
    sets: { indizio_spiriti: true },
    choices: [
      { text: '🚪 Tornare dagli altri, con la notizia più strana della serata', next: 'u1' },
      { text: '👻 Chiedere alla signora: "Come si esce di qui? Da spiriti, intendo"', once: true, next: 'u9_consiglio' },
    ],
  },

  /* ==================== SALA CONTROLLO — L'INCUBO DI GAETANO ==================== */

  u10: {
    location: 'cabina',
    caption: 'SALA CONTROLLO — Il satellite che cade da tre giorni',
    stinger: 'campana',
    text: `La porta si apre su una sala operativa. File di postazioni, sedili con le cinture — CINTURE, in una sala controllo — e una parete di monitor che mostrano tutti la stessa cosa: una traiettoria. Un puntino che scende, scende, scende verso una linea che dice SUOLO. E non la tocca mai. Il timer in alto lampeggia: **RIENTRO NON CONTROLLATO — GIORNO 3 — ORA 71 — È URGENTE**.

E squillano i telefoni. Tutti. Fissi anni Novanta, cordless, un Nokia fossile incastrato tra due tastiere: trentasei telefoni, e squillano con la STESSA suoneria. Gaetano la riconosce al primo giro. È la sua.

> Gaetano: "No. No no no. Porca puttana, no."

In mezzo alla sala, su una sedia girevole che gira da sola, piano, c'è il cliente. Grigio. Giacca grigia. La faccia liscia e forata come la placca di un citofono, e da ogni foro esce la stessa frase:

> Il Cliente: "È urgente. Mi serviva per ieri. È urgente. Resto in linea. È urgente."

Su un monitor laterale, alle 21:00 in punto, arriva un messaggio: *"Prof, domani ho la verifica. Può farmi 4 ore stasera? Anche 5."* Mittente: **L. G.** Gaetano emette un suono che nessuno di voi gli aveva mai sentito fare.

> Claudia: "Amore. Guardami. È una stanza. È la TUA stanza: qui il professionista sei tu."

> Gaetano: "È il mio inferno, questa. L'emergenza nel tempo libero. Il satellite che cade SEMPRE e non cade MAI, così non smetti mai di essere reperibile. Lo tengono in aria APPOSTA."

> Federico: "E quindi? Stacchiamo le spine?"

> Gaetano: *(facendo scrocchiare le dita, sedendosi alla console centrale)* "No. I ticket non si staccano. I ticket si CHIUDONO."`,
    choices: [
      { text: '🧠 Gaetano al terminale: chiudere il ticket. Una volta per sempre.', tag: 'Prova di Intelligenza — CD 13', check: { stat: 'INT', dc: 13, success: 'u10b', fail: 'u10c' } },
      { text: '🚪 Ritirata strategica: fuori dalla sala, verso il corridoio', next: 'u1' },
    ],
  },

  u10b: {
    location: 'cabina',
    caption: 'SALA CONTROLLO — RISOLTO, NON RIAPRIRE',
    text: `Gaetano non tocca i telefoni. Li lascia squillare. Apre il ticket #00001, legge i log come si leggono le analisi di un parente, e trova quello che sapeva di trovare: il satellite è RIENTRATO. Settantuno ore fa. In mare, senza danni. Qualcuno — qualcosa — continua a ricaricare la pagina della caduta, in loop, come la lite del 1994.

> Gaetano: "Non è un'emergenza. È il FOSSILE di un'emergenza. La mungono come tutto il resto."

Scrive nel campo risoluzione, dettando ad alta voce per il verbale:

> Gaetano: "Analisi: il carico utile di questo ticket è ansia, non hardware. Il satellite è giù da tre giorni. Azione correttiva: nessuna. Stato: RISOLTO." *(pausa, poi in maiuscolo, un tasto alla volta, con gusto)* "NON. RIAPRIRE."

Invio.

I telefoni muoiono uno alla volta, da sinistra a destra, come candeline soffiate. Il Cliente fa in tempo a dire "è urg—" e Gaetano, senza voltarsi:

> Gaetano: "Il ticket è chiuso. Riceverà un questionario di gradimento."

Il Cliente si affloscia sulla sedia girevole compilandolo — lo giurereste — e si dissolve. Sui monitor, il puntino attraversa finalmente la linea del suolo e diventa una riga luminosa, pulita, una stella cadente al contrario di ogni paura. Esprimete tutti un desiderio. Nessuno dice quale. Tutti lo sapete.

Sul messaggio delle 21:00, Gaetano digita con due dita, lentamente, la risposta che aspettava da anni: *"Ci vediamo lunedì con calma. Stasera il prof è in ferie. Anche il satellite."*

> Natalino: "Come ti senti?"

> Gaetano: "Leggero. Tipo... rientrato."

**(🎨 Colore +1: un'emergenza eterna è stata chiusa da un professionista. La casa ODIA i professionisti.)**`,
    gold: 1,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '🖥 I monitor di sfondo: uno trasmette ancora qualcosa', once: true, next: 'u10d' },
    ],
  },

  u10d: {
    location: 'cabina',
    caption: 'SALA CONTROLLO — Il monitor di servizio',
    sets: { monitor_segreto: true },
    text: `Sulla parete di monitor restano solo traiettorie spente. Tutti tranne uno: in basso a destra, piccolo, cornice di plastica ingiallita. Quello non trasmette satelliti.

Trasmette **Daniele**. Su un divano. Che sorride, beve una cola senza marca, vince una gara senza avversari. Poi riparte da capo.

> Claudia: *(si accovaccia davanti allo schermino, e la voce le esce con un rumore che nessuno le aveva mai sentito)* "Quindici secondi. È un loop di quindici secondi. E questo monitor sta in una stanza all'altro capo della casa."

> Gaetano: "È un monitor di SERVIZIO. Come quelli in regia, o all'ingresso di un cantiere: serve a chi lavora qui per controllare che il pezzo forte funzioni." *(batte due dita sulla cornice)* "Ragazzi. Tutta questa casa è personale di servizio. E il pezzo forte è LUI, in diretta, ventiquattro ore su ventiquattro."

> Federico: "Quindi c'è un posto dove lo trasmettono DAL VIVO."

> Gaetano: "C'è un posto dove lo trasmettono dal vivo. E noi ci andiamo."

**(Un monitor di servizio trasmette Daniele in loop. Ogni stanza di questa casa guarda lo stesso, unico programma.)**`,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
    ],
  },

  u10c: {
    location: 'cabina',
    caption: 'SALA CONTROLLO — Il cliente ha riaperto il ticket',
    text: `Gaetano scrive la risoluzione, preme invio — e il sistema chiede le credenziali. Le mette. Il sistema chiede la verifica in due passaggi. Il codice arriva via SMS. Su QUALE telefono? Su tutti e trentasei, contemporaneamente, ognuno con un codice diverso, e squillano mentre lo fanno.

> Gaetano: "FIGLI DI—"

Sul monitor centrale, una notifica gonfia come un'ustione: **IL CLIENTE HA RIAPERTO IL TICKET.** Poi un'altra: **IL CLIENTE HA AGGIUNTO 4 PARTECIPANTI.** Poi la peggiore di tutte: **IL CLIENTE HA PROGRAMMATO UNA CALL RICORRENTE — OGNI GIORNO, PER SEMPRE, SENZA ORDINE DEL GIORNO.**

Il Cliente adesso è in piedi, più vicino di prima senza aver camminato, e dai fori della faccia la frase esce più fitta, sovrapposta, a canone:

> Il Cliente: "È urgente-è urgente-mi serviva per ieri-resto in linea-è urgenteurgenteurgente—"

E i telefoni cominciano a spuntare dove non erano: uno sotto la sedia di Claudia, uno nella borsa Kerastase (Emanuela lo tira fuori con due dita, come un topo morto), uno che VIBRA nella tasca interna di Natalino, che di telefoni fissi non ne ha mai posseduti in vita sua.

> Natalino: "Toglietemelo! TOGLIETEMELO! Se squilla giuro che mordo qualcuno!"

> Claudia: *(strappando cavi a manciate)* "Gaetano! Respira e RIPROVA! Tu i sistemi li conosci: questa merda è solo un gestionale col vestito da fantasma!"

**(−3 PV a tutti: la reperibilità eterna logora anche i vivi.)**`,
    damage: 3,
    choices: [
      { text: '🔁 Di nuovo alla console: stavolta si chiude davvero', next: 'u10' },
      { text: '🚪 Battere in ritirata verso il corridoio', next: 'u1' },
    ],
  },

  /* ==================== IBIZA — IL PASSATO DI EMANUELA ==================== */

  u11: {
    location: 'spiaggia_grigia',
    caption: 'IBIZA — La pista vuota',
    text: `La porta si apre su una notte del 2004. Un beach club: consolle vuota, palme grigie, pista da ballo deserta con le luci che girano — luci STROBO, ma grigie, che lampeggiano buio su buio. La macchina della schiuma sputa cenere, piano, come una sigaretta dimenticata.

E i bassi. Li sentite nello sterno, nei denti, nelle otturazioni: la cassa pompa a tutto volume una musica a volume ZERO. Il silenzio più rumoroso in cui siate mai stati.

> Emanuela: *(ferma sulla soglia, e non è paura: è riconoscimento)* "Io qui ci ho lavorato tre estati. Non QUI qui. Ma qui."

Al bancone c'è un uomo. Non urla, non monologa — quello dell'ombrellone di Serapo almeno lo sentivi arrivare, questo NO. Sta solo lì, gomito sul banco, due drink grigi già versati, e sorride nel vuoto. Guardate la pista: è al bancone. Guardate il bancone: è due sgabelli più vicino. Non l'avete mai visto muoversi. È il tipo di cosa che si avvicina SOLO nei momenti in cui non la guardi.

> Il Molesto Eterno: *(piano, a nessuno, a tutte)* "Ti offro da bere. Ti conosco. Ballavi qui. Ti conosco. Dai, un sorriso."

Dietro il bancone, su una mensola tra i liquori grigi, c'è una cosa che non c'entra niente col 2004: uno spray Kerastase. IL SUO. Con l'etichetta mezza consumata dal sale.

> Emanuela: "La casa colleziona. E questa merda l'ha messa a fare la guardia alla mia roba." *(si sistema la borsa a tracolla, da battaglia)* "Ragazzi. Protocollo. Ma stavolta lo aggiorniamo: con questi non funziona ignorare. Questi vivono nei momenti in cui abbassi gli occhi. Quindi NESSUNO abbassa gli occhi."`,
    choices: [
      { text: '🕶 Attraversare la pista a testa alta: Emanuela dirige, nessuno abbassa lo sguardo', tag: 'Prova di Carisma (di gruppo) — CD 13', check: { stat: 'CAR', dc: 13, success: 'u11b', fail: 'u11c' } },
      { text: '🚪 Uscire dalla discoteca, per ora', next: 'u1' },
    ],
  },

  u11b: {
    location: 'spiaggia_grigia',
    caption: 'IBIZA — Il mare vero batte le luci finte',
    text: `Attraversate la pista in formazione, sei sguardi alti — cinque, più quello di Daniele che vi portate dentro — e il Molesto Eterno comincia a sfarfallare come una lampadina che ha capito. Senza i vostri occhi bassi non ha dove stare.

Emanuela arriva al bancone per ultima, di proposito. Lo guarda. DRITTO.

> Emanuela: "Ti conosco. Non te: la SPECIE. Vent'anni fa mi rovinavi le serate perché avevo diciassette anni e il turno fino alle quattro. Adesso ne ho quaranta, ho cinque persone dietro e una a casa che aspetta." *(allunga la mano oltre lui, e prende lo spray dalla mensola come si riprende una figlia)* "E questa è MIA."

Una spruzzata. Nell'aria grigia si apre una nuvola di profumo VERO — il primo odore vero della serata, sale e fiori e piastra calda — e il Molesto Eterno si dirada dentro quella nuvola come fumo di dopobarba scadente, con un'ultima frase che muore a metà: *"dai, un sorri—"*

I bassi si spengono. Il silenzio, finalmente, è solo silenzio.

Dietro la discoteca c'è la "spiaggia": un fondale DIPINTO, luci finte, un mare di plastica lucida. Emanuela lo guarda a braccia conserte, e poi ride — ride davvero, la prima risata piena della notte.

> Emanuela: "Guardatelo. GUARDATELO. E io a vent'anni pensavo che questo fosse il massimo." *(scuote la testa)* "Il massimo è Serapo alle sei di mattina, dopo il turno, coi piedi nell'acqua fredda giusta e Federico che dorme sull'asciugamano. La casa può fotocopiare Ibiza quanto vuole. Il mare mio non lo sa fare."

> Federico: "Confermo la parte in cui dormo."

**(🎨 Colore +1. Lo spray Kerastase torna a casa: e adesso è un'arma.)**`,
    gold: 1,
    item: 'spray_kerastase',
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '🍸 Dietro il bancone: una bottiglia ha ancora il colore', once: true, next: 'u11d' },
    ],
  },

  u11d: {
    location: 'spiaggia_grigia',
    caption: 'IBIZA — La bottiglia in fondo alla mensola',
    sets: { bottiglia_colore: true },
    text: `Dietro il bancone, in fondo alla mensola dei liquori grigi — dove il braccio arriva solo se ti sporgi tutta — c'è una bottiglia che non è grigia.

Limoncello. Fatto in casa, in una bottiglia di vetro riciclata, tappo di sughero tagliato a mano, etichetta di carta scritta a pennarello: **"AGOSTO — NON APRIRE DA SOLI"**.

> Emanuela: *(la tira fuori e la guarda controluce: il giallo dentro è così acceso che fa male agli occhi)* "Questa non è del 2004. Questa viene da una cucina. Da una cucina VERA, dove qualcuno ha grattato scorze per due ore di seguito."

> Natalino: "E chi l'ha messa qui?"

> Emanuela: "Uno che è passato prima di noi e sapeva dove si nasconde la roba buona: **in fondo**. Sempre in fondo, dove il grigio non si sporge." *(se la infila in borsa, tra le garze)* "'Non aprire da soli'. Tranquillo, chiunque tu sia. Non è nel nostro stile."

> Claudia: "Fotografo l'etichetta. Se stanotte ne usciamo, quella grafia la cerchiamo."

**(Una bottiglia a colori, nascosta in fondo da qualcuno che sapeva. Non siete i primi a combattere qua dentro.)**`,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
    ],
  },

  u11c: {
    location: 'spiaggia_grigia',
    caption: 'IBIZA — Il drink che non avete ordinato',
    text: `L'attraversamento parte bene. Poi Natalino inciampa in un gradino della pista — un gradino che prima non c'era, ci giurerebbe — e abbassa gli occhi mezzo secondo. Mezzo secondo basta.

> Il Molesto Eterno: "Vi ho preso da bere."

È al vostro tavolo. Non c'era un tavolo. Adesso c'è, e ci siete SEDUTI, tutti e cinque, senza che nessuno ricordi di essersi seduto, con sei drink grigi davanti — sei, e il sesto è davanti a una sedia vuota, ed è questo il dettaglio che vi gela più di tutto.

> Il Molesto Eterno: "Ti conosco. Ballavi qui. Un sorriso. Solo un sorriso. Che ti costa un sorriso?"

E il punto è che non alza mai la voce. Non tocca nessuno. Ruba qualcosa di più sottile: sentite la serata RESTRINGERSI, i piani cambiare, la voglia di stare lì che si scusa e se ne va. Claudia si accorge di aver risposto "magari dopo" a una domanda che non ricorda. Federico sta annuendo A VUOTO, gli occhi grigi in faccia.

> Emanuela: *(in piedi di colpo, la sedia che stride)* "TUTTI IN PIEDI. Ora. Non si ringrazia, non ci si scusa, non si finisce il discorso. Il 'magari dopo' è la porta da cui entra." *(tira su Federico per il colletto)* "E TU. Vent'anni che te lo dico: mai accettare drink dai vibe-killer."

> Federico: "...aveva detto che mi conosceva."

> Emanuela: "Lo dicono a TUTTI. È il loro mestiere."

**(−3 PV a tutti, e chi ha guidato l'attraversata se lo sente addosso come fumo nei capelli: Ingrigito — −2 finché non si cura.)**`,
    damage: 3,
    poisonRoller: true,
    choices: [
      { text: '🔁 Riformare la fila: stavolta nessuno abbassa gli occhi', next: 'u11' },
      { text: '🚪 Fuori dalla discoteca, a riprendere fiato', next: 'u1' },
    ],
  },

  /* ==================== IL SALONE — NATALINO ED EMANUELA ==================== */

  u12: {
    location: 'cabina',
    caption: 'IL SALONE — Clienti fissi',
    stinger: 'jumpscare',
    text: `La porta si apre su un odore che Natalino ed Emanuela riconoscerebbero bendati: fissativo, shampoo, phon caldo. Solo che qui l'odore è FREDDO, come il profumo su un cappotto in un armadio chiuso da anni.

È il loro salone. Le poltrone in fila, gli specchi, i caschi asciugacapelli. E le poltrone sono OCCUPATE: manichini, coi bigodini avvitati nel cranio — dentro il cranio, si vede la plastica sollevata a bozzi — e i teli annodati al collo troppo stretti, come garrote gentili. Aspettano. I manichini nei saloni aspettano sempre.

Sopra di loro, a mezz'aria, LE FORBICI LAVORANO DA SOLE. Tre, quattro paia, che aprono e chiudono nel vuoto — *snip, snip* — e a ogni taglio cade una ciocca di capelli che non appartiene a nessuno. Il pavimento ne è coperto. Lo scarico del lavatesta ne è INTASATO, e ogni tanto tira, con un risucchio da cosa che inghiotte.

> Natalino: *(bianco, ma di una rabbia bianca)* "Le mie giapponesi le ho addosso, grazie a Dio. Ma quelle lì sono le MIE forbici da banco. E nessuno — NESSUNO — tocca le forbici di un altro parrucchiere. È la prima regola della civiltà."

Emanuela sfoglia l'agenda appuntamenti sul banco. Ogni riga, ogni ora, ogni giorno, lo stesso nome scritto con la stessa grafia grigia: **GRIGIO — piega. GRIGIO — piega. GRIGIO — piega.**

> Emanuela: "Ci ha rubato il salone e ci ha messo dentro il suo cliente fisso."

Il primo manichino si alza dalla poltrona senza slegarsi il telo. Il secondo pure. I bigodini cominciano a SVITARSI da soli, piano, con un rumore di tappi.

> Natalino: "Emanuela. Grembiule." *(se lo annoda come una corazza)* "Il salone è NOSTRO."`,
    combat: { enemies: ['manichino_vita', 'manichino_vita'], victory: 'u12b', defeat: 'u_ko', loot: { gold: 1 } },
    choices: [],
  },

  u12b: {
    location: 'cabina',
    caption: 'IL SALONE — Dopo la chiusura',
    text: `I due manichini giacciono smembrati tra le poltrone, i bigodini sparsi sul pavimento come bossoli. Le forbici volanti, rimaste senza pubblico, si sono infilzate da sole nel bancone e vibrano piano, tipo coltelli da lancio delusi.

Ma il salone è ancora SBAGLIATO. Gli asciugamani buttati storti. I prodotti fuori posto, le boccette piene di un'acqua grigiastra che nessuno dei due ha mai ordinato. Gli specchi unti di una patina che non riflette voi: riflette il salone VUOTO, senza nessuno dentro, mai più nessuno dentro — la versione del futuro che la casa si augura.

> Federico: "Ok, i mostri sono a terra. Si va?"

> Natalino: *(fermo in mezzo al SUO salone, le mani sui fianchi)* "No."

> Federico: "Come no?"

> Natalino: "Tu lasceresti il tuo ufficio così? Coi preventivi per terra e il caffè rovesciato sulla scrivania?"

> Federico: "...sinceramente sì."

> Natalino: "Ecco perché hai l'ufficio che hai. QUESTO è un salone. Un salone lasciato in disordine è un salone che ha PERSO. E io stasera non perdo." *(si volta verso Emanuela, e non c'è bisogno di dire altro: vent'anni di aperture e chiusure insieme)* "Si riapre?"

> Emanuela: *(già con lo straccio in mano)* "Si riapre."`,
    choices: [
      { text: '🧹 Rimettere in ordine il salone. Tutto. Come atto di guerra.', next: 'u12c' },
      { text: '🚪 Lasciar perdere e tornare al corridoio', next: 'u1' },
    ],
  },

  u12c: {
    location: 'cabina',
    caption: 'IL SALONE — La riapertura',
    text: `Quello che succede nei venti minuti seguenti non è pulizia. È LITURGIA.

Natalino stacca le sue forbici da banco dal legno, le disinfetta una a una, le asciuga col panno buono e le riappende in ordine di misura, ognuna al suo gancio, con la cura con cui rolla i tronelli. Emanuela svuota le boccette d'acqua grigia nel lavatesta — lo scarico inghiotte e SI LAMENTA, un gorgoglio offeso — e riallinea i prodotti per marca e per colore, anche se il colore non si vede: lei sa qual è, e lo mette al suo posto per quando tornerà. Gli asciugamani piegati a tre, il pavimento spazzato, l'agenda: Emanuela strappa le pagine del cliente GRIGIO una per una, e sull'ultima riga libera scrive, con la penna che tiene nella borsa: *"CHIUSO PER FERIE. RIAPRIAMO NOI."*

E il salone RISPONDE. Le luci sopra gli specchi scaldano di un mezzo tono. La patina grigia si ritira dagli specchi come fiato che evapora, e per un attimo il riflesso è quello GIUSTO: voi cinque, stanchi e vivi, in un salone in ordine.

> Natalino: *(guardandosi intorno, piano)* "Lo sapete perché Daniele viene da me una volta al mese? Mica per i capelli, che tanto glieli faccio uguali da dieci anni. Viene perché qui dentro si sta mezz'ora su una poltrona e qualcuno si occupa di te. Il salone serve a QUESTO. La gente entra storta e esce dritta." *(appende il grembiule)* "Ecco perché questa casa ce l'aveva coi saloni. Sono il suo contrario."

**(La riapertura scalda le ossa: +4 PV a tutti. Il salone è di nuovo un posto dove si esce dritti.)**`,
    heal: 4,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '💇 Le forbici giapponesi, nel gancio giusto: Natalino le accarezza un\'ultima volta', once: true, sets: { salone_benedetto: true }, next: 'u1' },
    ],
  },

  /* ==================== AGOSTO 2019 — LA VACANZA COPIATA MALE ==================== */

  u13: {
    location: 'spiaggia_grigia',
    caption: 'AGOSTO 2019 — La grigliata sbagliata',
    text: `La porta si apre sul tramonto del quattordici agosto 2019, e per un secondo — vergognoso, meraviglioso — ci CASCATE.

La spiaggia. La griglia accesa. Le sedie pieghevoli in cerchio. E VOI: le vostre copie, sedute a ridere, tutti e sei — sei, perché c'è anche Daniele, col libro chiuso sul ginocchio e la lattina in mano, che ride nel punto giusto della battuta. La serata più bella di quell'estate, ricostruita in scala uno a uno.

Poi Claudia — l'occhio assoluto — si irrigidisce.

> Claudia: "Fermi. Guardate le mani."

La copia di Federico beve una birra NORMALE. Senza limone. La copia di Gaetano ha in mano una lager da discount — lui, l'uomo delle IPA. Il tronello della copia di Natalino è rollato STORTO, una cosa che Natalino vero non produrrebbe nemmeno sotto tortura. La borsa della copia di Emanuela ha il logo Kerastase SBAGLIATO. E la copia di Daniele —

> Claudia: *(la voce che si incrina)* "— beve Coca ROSSA. Normale. Daniele non tocca la Coca normale da quindici anni. Dice che sa di dentista."

E le risate. Adesso che lo sapete, le sentite: arrivano mezzo secondo DOPO le battute, come un film doppiato male — la risata di Emanuela in bocca a Federico, quella di Natalino appiccicata a Gaetano.

> Claudia: *(tirando fuori il telefono, dove ha gli screenshot di TUTTO, anche del 2019)* "Ha copiato la serata dalle foto. Ma le foto non dicono chi beve cosa. Non dicono PERCHÉ ridevamo." *(alza gli occhi, feroce)* "Glielo diciamo?"`,
    choices: [
      { text: '📢 Dirlo ad alta voce, un errore alla volta, davanti alle copie', next: 'u13b' },
      { text: '🚪 Uscire in silenzio da questa fotocopia', next: 'u1' },
    ],
  },

  u13b: {
    location: 'spiaggia_grigia',
    caption: 'AGOSTO 2019 — Il collaudo dell\'amore',
    text: `> Claudia: "Federico beve SOLO birra al limone, dieci al giorno, dice che è scienza. Gaetano beve IPA e giudica chi non lo fa. Il tronello si rolla DRITTO o Natalino ti disereda. La borsa è Kerastase con l'accento giusto. E Daniele—" *(la voce ferma, da regia)* "—Daniele beve Coca ZERO. Sempre. Solo. Zero."

A ogni errore nominato, la copia corrispondente SI INCEPPA. La birra di Federico-copia trema e va a fuoco di grigio. Il tronello storto si sfa. Le risate arrivano sempre più in ritardo — un secondo, tre, dieci — finché le copie ridono nel silenzio totale, a bocche aperte, senza suono.

Resta per ultima la copia di Daniele. Vi guarda. E dentro gli occhi grigi c'è qualcosa di GENUINAMENTE confuso — la confusione della casa stessa, che parla attraverso la sua fotocopia migliore:

> La copia: "Non... capisco. Ho preso ogni dettaglio. Ho mangiato mille serate come questa. Ho le foto, le voci, le sedie, il fumo della griglia. Perché tornate SEMPRE? Cosa c'è nella serata che non è NELLA serata?"

> Emanuela: *(quasi gentile, ed è la gentilezza più spietata della notte)* "Ecco perché perderai."

La copia si dissolve con la domanda ancora addosso. La spiaggia finta si affloscia come un gazebo smontato — e dove il fuoco finto bruciava grigio, resta un braciere di colore VERO, piccolo.

Vi sedete intorno cinque minuti. Non ne parlate. Federico alza una birra immaginaria, e tutti insieme alzate una Coca Zero immaginaria verso qualcuno che non è lì ma sta arrivando.

> Federico: "Al quattordici agosto. Quello VERO. E al prossimo."

**(🎨 Colore +1: la casa ha appena ammesso di non capire il suo nemico. Voi sì.)**`,
    gold: 1,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '🔥 Il braciere di colore vero: riscaldarsi un minuto prima di andare', once: true, heal: 2, sets: { braciere_agosto: true }, next: 'u1' },
    ],
  },

  /* ==================== OBIEZIONE — DUELLO DI PAROLE (AD HOMINEM) ==================== */

  u14: {
    location: 'porte',
    caption: 'OBIEZIONE — L\'Avvocato del Grigio',
    stinger: 'penna',
    text: `Dietro la porta color torto non c'è una stanza: c'è una nicchia del corridoio con un leggio d'ottone. E sopra il leggio, sospesa a mezz'aria, una TOGA. Grigia, vuota, con una parrucca da tribunale inglese appoggiata sul niente. Quando parla, la voce esce da dove dovrebbe esserci la faccia — asciutta, ragionevole, il tono di chi ha già vinto.

**🗣 DUELLO DI PAROLE**

> L'Avvocato del Grigio: "Esaminiamo la mozione 'salvare Daniele'. Non la mozione: i PROPONENTI. Federico: vende parole a ore, uno che fattura opinioni — e dovremmo fidarci della sua opinione? Natalino: taglia capelli e rolla tabacco, e stanotte fa il filosofo. Emanuela: cocktail e bigodini, curriculum perfetto per decidere della vita di un uomo. Gaetano: l'ingegnere coi satelliti che CADONO. Claudia: una che vive facendo screenshot delle vite altrui. Questa è la giuria che pretende di sapere cosa serve a Daniele. Io non devo nemmeno discutere la vostra tesi: mi basta leggere i vostri curriculum. Persone così non possono avere ragione. L'udienza è tolta."

E il punto è che AFFONDA. Ogni parola trova il livido giusto: ognuno di voi, per un secondo, si vede col titolo di studio sbagliato per l'amore che prova.

*(E vi torna in mente una cosa che Daniele vi ha detto una sera, tra una gara e l'altra di Mario Kart, senza alzare gli occhi dallo schermo: "Quando uno ce l'ha col pilota invece che con la traiettoria, è perché la gara la sta perdendo.")*

La toga attende, le maniche incrociate sul nulla. C'è UNA parola che la spezza. Qual è il trucco del suo discorso?`,
    choices: [
      { text: '⚖️ AD HOMINEM — attacca chi parla, mai quello che dice', next: 'u14b' },
      { text: '⚖️ AUTORITÀ — si traveste da tribunale per sembrare legge', once: true, next: 'u14c' },
      { text: '⚖️ RICATTO EMOTIVO — colpisce i lividi per farvi tacere', once: true, next: 'u14c' },
    ],
  },

  u14b: {
    location: 'porte',
    caption: 'OBIEZIONE — L\'arringa si spezza',
    sets: { obiezione_vinta: true },
    text: `> Federico: *(un passo avanti, e la voce è quella delle riunioni in cui si gioca tutto)* "Ad hominem. Fallacia da manuale — pagina quaranta del libro sul comodino di mio fratello. Non hai toccato la nostra tesi NEMMENO UNA VOLTA. Hai letto i curriculum perché l'argomento non lo sai battere: 'Daniele va salvato' resta vero se lo dice un consulente, un parrucchiere, una social media manager o un pappagallo ammaestrato. Chi parla non cambia quello che dice. Obiezione accolta. Anzi no, scusa: causa PERSA."

La toga si inceppa.

> L'Avvocato del Grigio: "I proponenti... i proponenti sono... chi siete VOI per— chi siete— chi si— chi—"

La voce salta come un disco rigato, sempre sulla stessa domanda, perché è l'unica domanda che ha: togligli il "voi" e non gli resta niente. La parrucca scivola dal nulla e cade sul leggio — sotto non c'era una testa, non c'era MAI stata una testa — e la toga si affloscia a terra, piano, con la dignità di un bucato steso male.

> Natalino: "'Taglia capelli e rolla tabacco.' Guarda che io queste due cose le faccio BENISSIMO, comunque. Lo metta a verbale."

> Claudia: *(già col telefono in mano)* "Messo. Screenshot."

> Gaetano: "E per la cronaca: quel satellite l'ho fatto ATTERRARE, stasera."

> Emanuela: *(raccogliendo la parrucca con due dita e buttandola dietro il leggio)* "L'udienza è tolta davvero. Ma decidiamo noi quando."

**(🎨 Colore +1: la retorica del Grigio si è rotta sulla pagina quaranta del libro di Daniele. Da qualche parte, sul suo divano, qualcuno sta sorridendo.)**`,
    gold: 1,
    choices: [
      { text: '🚪 Tornare nel corridoio delle porte', next: 'u1' },
      { text: '📜 La toga a terra: sotto il bavero c\'è cucita una targhetta', once: true, next: 'u14_targhetta' },
    ],
  },

  u14c: {
    location: 'porte',
    caption: 'OBIEZIONE — L\'arringa affonda',
    text: `Sbagliato. E lo capite dal silenzio: la toga non ribatte nemmeno. Si limita a girare le maniche vuote verso di voi, una alla volta, come si sfoglia un fascicolo.

> L'Avvocato del Grigio: "Vedete? Non sapete NEMMENO riconoscere un argomento. E pretendete di smontare una casa. Prendo atto: il consulente non consulta, l'ingegnere non ingegna, la fotografa non mette a fuoco. Aggiungo al fascicolo."

E le parole di prima, quelle che avevano già trovato i lividi, adesso ci si SIEDONO sopra. Federico sente nelle orecchie ogni cena in cui qualcuno gli ha chiesto "ma quindi di preciso che lavoro fai?". Emanuela rivede la faccia di quel cliente che le diede del "manico di scopa con l'opinione". Gaetano fa i conti, contro la sua volontà, di quante volte ha detto "sono solo un tecnico". La nicchia si restringe di mezzo metro — la vedete restringersi — come un tribunale che si china sull'imputato.

> Claudia: *(a denti stretti, scuotendo Federico per un braccio)* "È RETORICA. È solo retorica. Respirate e RAGIONATE: cos'ha attaccato per tutto il tempo? La tesi... o NOI?"

> Natalino: "Io c'ho un'ipotesi ma se sbaglio ancora quello ci fa anche le spese processuali."

La toga risale sul leggio, si ricompone, e attende. I processi, qui dentro, non finiscono finché non vincete voi.

**(−3 PV a tutti: le parole sbagliate pesano come sentenze.)**`,
    damage: 3,
    choices: [
      { text: '🔁 Tornare davanti al leggio e dare la risposta giusta', next: 'u14' },
      { text: '🚪 Sospendere l\'udienza: fuori, nel corridoio', next: 'u1' },
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
