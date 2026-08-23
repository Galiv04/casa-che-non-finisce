/* ============ LUOGHI — la lettura della scena ============
   Un pulsante sul quadro, e una scheda che spiega cosa si sta guardando.

   PERCHÉ ESISTE. Richiesta del committente, 23 agosto 2026: «ogni scena grafica,
   un tastino che puoi cliccare, un piccolo pop-up che ti spiega la scena, cosa
   vivi, elementi che potrebbero essere interessanti sia per la storia che per altre
   dinamiche nel gioco».

   COS'È E COSA NON È. È una didascalia da museo: dice cosa c'è nel quadro, perché
   quel posto esiste, e cosa ci si può fare. **Non anticipa niente.** Parla solo di
   quello che è già sullo schermo o già detto dal Narratore.

   E IN QUESTO GIOCO, UNA REGOLA IN PIÙ. Il Grigiore è una metafora, e le schede la
   trattano come tale: si parla di **colore che viene compresso**, di stanze, di
   impianti. Mai termini clinici, mai diagnosi, mai la parola che il gioco non usa.
   Il demone non è Daniele: è la cosa che gli sta addosso. Le schede lo dicono
   tenendolo separato, come fa tutto il resto del gioco.

   IL RIUSO. `apri()` e `aggiorna()` sono identici in tutti i giochi della serie
   (copia di riferimento in ../dnd-motore/tools/luoghi-rendering.js). */

const Luoghi = (() => {

  const LUOGHI = {
    strada: {
      titolo: 'Sotto il palazzo di Daniele',
      ora: 'Le 21:40 — la chat è muta da tre giorni',
      guarda: [
        ['Il marciapiede', 'Cinque persone in piedi che fanno finta che sia una cosa normale. Nessuno si siede, perché sedersi vorrebbe dire aspettare.'],
        ['Il palazzo', 'Palazzina di periferia, tre piani, intonaco che si stacca a chiazze regolari. Le luci accese sono quelle che dovrebbero essere accese.'],
        ['La finestra del terzo piano', 'La sua. Non è buia e non è accesa: è di un colore che non è nessuno dei due.'],
        ['I telefoni', 'Settantadue ore di messaggi con una spunta sola. Non «non risponde»: **non visualizza**.'],
      ],
      storia: 'La spunta sola è il dettaglio che ha fatto muovere cinque persone di sera: vuol dire che il telefono è acceso e connesso, e che nessuno lo guarda. Un telefono spento darebbe meno paura. Le amicizie che durano dai tempi della scuola hanno tutte un protocollo non scritto per il momento in cui uno smette di rispondere, e stasera lo state usando per la prima volta.',
      gioco: 'È la scena in cui si decide con che faccia si entra: le scelte qui non danno oggetti ma danno il tono, e il gioco se lo ricorda fino alla fine. Da qui non si torna indietro senza suonare quel citofono.',
    },

    palazzo: {
      titolo: 'L’androne',
      ora: 'Subito dopo il citofono a vuoto',
      guarda: [
        ['Il citofono', 'Suona a vuoto. Tre volte, cinque, dieci, fino a quando il ronzio diventa una nota sola.'],
        ['La cassetta della posta', 'Trabocca. Le bollette in cima sono di questo mese, quelle sotto no.'],
        ['Le etichette dei pacchi', 'Consegnati e mai ritirati. Le date si leggono, e messe in fila dicono da quando.'],
        ['Le chiavi di scorta', 'Quelle che Federico ha in tasca da quattro anni, date con una battuta che stasera non fa ridere nessuno.'],
      ],
      storia: 'Una cassetta che trabocca è l’orologio più preciso che ci sia: la posta arriva ogni giorno, quindi lo spessore misura i giorni. Il fatto che le bollette siano tutte di questo mese vuol dire che il conto è più corto di quanto sembra — e più lungo di tre giorni.',
      gioco: 'Le etichette sono il primo indizio leggibile del gioco, e leggerle è una scelta: chi si ferma a guardarle sa una cosa in più quando conterà. Da qui si sale.',
    },

    pianerottolo: {
      titolo: 'Terzo piano, la porta di Daniele',
      ora: 'Un minuto dopo',
      guarda: [
        ['La porta', 'Verde da condominio, lo spioncino, tutto come ve lo ricordate.'],
        ['Lo zerbino', 'NON SIETE I BENVENUTI, MA ENTRATE. Regalo di Federico, che Daniele finge di odiare da quattro anni e non ha mai tolto.'],
        ['La fessura sotto la porta', 'Da lì dovrebbe uscire uno spiffero, o la luce, o l’odore di casa di qualcuno. Esce una cosa sola, e non è nessuna delle tre.'],
        ['Il pianerottolo', 'Due porte e una tromba di scale. Contatele: torneranno.'],
      ],
      storia: 'Uno zerbino tenuto per quattro anni è una dichiarazione d’affetto travestita da dispetto, che è il modo in cui gli amici veri si dicono le cose. È anche l’ultima cosa normale che vedrete per un po’.',
      gioco: 'Qui si sceglie come entrare, e come si entra conta: la porta si può aprire con le chiavi, o si può prima ascoltare. Ascoltare, in questo gioco, è sempre un’opzione ed è quasi sempre quella che dà qualcosa.',
    },

    appartamento: {
      titolo: 'Il bilocale di Daniele',
      ora: 'Dentro, e ogni volta che ci si torna',
      guarda: [
        ['L’ordine', 'I libri allineati, i cavi arrotolati, i cuscini in piedi come soldatini. Daniele tiene un disordine funzionale e territoriale: «so dov’è ogni cosa, il caos è un archivio».'],
        ['La cucina', 'Grigia da cartone bagnato. Non sporca: **scolorita**.'],
        ['Il nascondiglio della moka', 'Dove la tiene sempre, perché la moka è l’unica cosa che difende da chiunque venga a dormire.'],
        ['La Switch', 'Accesa. Il led respira nel buio con la sua regolarità da elettrodomestico.'],
      ],
      storia: 'Il colore, in questa casa, non è stato cancellato: è stato **compresso**. Il grigio non toglie il rosso e il verde — li schiaccia, li impacchetta, li tiene tutti lì dentro in uno spazio più piccolo. È la differenza fra una stanza svuotata e una stanza in cui tutto è stato messo in scatola: dalla porta sembrano uguali.',
      gioco: 'L’appartamento è la base: ci si torna, e ogni volta è un po’ diverso. Gli oggetti di casa sono oggetti veri dell’inventario — la moka, il cacciavite, le tovaglie — e serviranno tutti.',
    },

    corridoio: {
      titolo: 'Il corridoio che non c’era',
      ora: 'Il momento in cui la casa smette di finire',
      guarda: [
        ['Le pareti', 'Quelle di casa di Daniele: stessa carta da parati, stessi battiscopa. Ma ripetute in loop, come una texture stirata da un computer pigro.'],
        ['I quadri', 'Paesaggi che sarebbero belli se qualcuno non avesse scolato via tutto il colore.'],
        ['L’aria', 'Più fredda a ogni passo, e più ferma.'],
        ['La porta d’ingresso', 'Dietro di voi. Dovrebbe essere a sei metri.'],
      ],
      storia: 'La ripetizione non è pigrizia: è la firma della cosa che abita qui. Costruire una stanza nuova costa; copiarne una che c’è già, no. Tutto quello che vedrete d’ora in avanti è fatto con questo criterio, e riconoscerlo è metà del lavoro.',
      gioco: 'È il primo posto in cui si prendono danni, e il primo in cui si capisce che scappare non è una strategia. Il corridoio si può misurare — contare i quadri, contare i passi — e misurarlo serve.',
    },

    salotto: {
      titolo: 'Il salotto, e lo specchio',
      ora: 'Ogni volta che ci ritornate, e non è mai uguale',
      guarda: [
        ['Lo specchio', 'Grande, sopra il divano. Il riflesso copia con un decimo di secondo di ritardo, e in quel decimo si vede che sta tornando da qualche parte.'],
        ['Il vetro', 'Si appanna dal **suo** lato.'],
        ['Il muro nuovo', 'Dove prima c’era la porta. L’intonaco è liscio e freddo, e nessuno l’ha tirato su stanotte.'],
        ['Il divano', 'Al suo posto, coi cuscini in piedi. È l’unica cosa della casa che sembra aspettare qualcuno.'],
      ],
      storia: 'Uno specchio è un dispositivo semplice: restituisce quello che gli si mette davanti, con un ritardo pari a zero. Qualunque ritardo, per piccolo che sia, vuol dire che in mezzo c’è qualcosa che decide.',
      gioco: 'Lo specchio è una delle porte del gioco, e le porte di questo gioco si aprono in due sensi. Il salotto è anche il nodo da cui si raggiunge quasi tutto il resto: se vi perdete, tornate qui.',
    },

    biblioteca: {
      titolo: 'La Biblioteca che Sussurra',
      ora: 'Dentro il primo grande spazio impossibile',
      guarda: [
        ['Gli scaffali', 'Alti dieci metri, in un appartamento di sessanta metri quadri. Scale a chiocciola che salgono nel buio.'],
        ['L’odore', 'Carta vecchia, e sotto un’altra cosa: carne che ha imparato a stare ferma.'],
        ['Il fruscìo', 'Non sono pagine mosse dall’aria. Sono i libri, e **sussurrano**.'],
        ['Le coste', 'Ogni libro ha un nome sulla costa, e i nomi sono nomi di persone.'],
        ['La sala di catalogazione', 'Ordinata, con un banco, un timbro e un registro. Qualcuno lavora qui.'],
      ],
      storia: 'Una biblioteca che tiene un volume per persona non è una biblioteca: è un archivio. E un archivio esiste per una ragione sola — perché qualcuno, prima o poi, deve poter ritrovare una cosa. Il che vuol dire che questo posto è organizzato secondo un criterio, e che il criterio si può imparare.',
      gioco: 'È la parte più grande del gioco e la più ricca di indizi: qui si trovano i nomi, e i nomi sono armi. Il Bibliotecario ha delle regole, e le regole si possono usare a proprio favore invece che subire.',
    },

    porte: {
      titolo: 'Il Corridoio delle Porte Sbagliate',
      ora: 'Fra due posti che non si toccano',
      guarda: [
        ['Le porte', 'Tante, tutte diverse, tutte chiuse. Ognuna ha una targhetta, e le targhette non mentono: dicono davvero cosa c’è dietro.'],
        ['La sala d’aspetto', 'Sedie di plastica, una pianta finta, e una signora che sferruzza con un filo che non c’è.'],
        ['La signora', 'Ha aspettato decenni che qualcuno facesse la domanda giusta.'],
        ['Il pavimento', 'Linoleum da ufficio pubblico. È il dettaglio che fa più paura di tutta la stanza.'],
      ],
      storia: '«Da spiriti non si esce, tesoro. Si RIENTRA.» Il grigio toglie dal mazzo, ma la carta non la strappa: è una distinzione che in questo posto vale tutto, e che spiega perché la sala d’aspetto è una sala d’**aspetto**.',
      gioco: 'Le targhette sono la mappa: leggerle tutte prima di aprirne una è la mossa che fa la differenza. Alcune porte si possono aprire una volta sola, e il gioco non ve lo dice due volte.',
    },

    cameretta: {
      titolo: '1994 — La cameretta dei gemelli',
      ora: 'Un anno che è una stanza',
      guarda: [
        ['I letti a castello', 'Uno sopra e uno sotto, rifatti. La stanza è stata sistemata da qualcuno che ci teneva.'],
        ['I poster', 'Calciatori coi colori sbiaditi nel modo sbagliato: le maglie grigie, i prati grigi, e solo i palloni ancora accesi come tizzoni.'],
        ['Il nastro adesivo', 'Marrone, da parete a parete, che divide la stanza esattamente a metà. Sono due bambini che hanno litigato.'],
        ['La soglia', 'Federico si ferma lì, e la voce che usa non è la sua solita.'],
      ],
      storia: 'La striscia di nastro per terra è un’usanza universale dei fratelli in una stanza in due: nessuno l’ha inventata e tutti l’hanno fatta. Il fatto che nel 1994 quella striscia sia ancora al suo posto vuol dire che nessuno l’ha mai tolta — e che la stanza è rimasta il giorno del litigio.',
      gioco: 'Le stanze-anno funzionano tutte allo stesso modo: c’è un loop, e il loop ha un punto in cui si può entrare. Le parole giuste dette al momento giusto lo spezzano; le parole qualunque vengono **respinte**, e si vede.',
    },

    spiaggia_grigia: {
      titolo: 'Gaeta — la spiaggia di Serapo, di cenere',
      ora: 'Un pomeriggio che non è di quest’anno',
      guarda: [
        ['La baia', 'La riconoscete dalla curva, dalla montagna spaccata, dal punto esatto dove piantate l’ombrellone da dieci anni.'],
        ['La sabbia', 'È cenere. Fine, tiepida, si alza a ogni passo e sa di posacenere.'],
        ['Il mare', 'C’è, e fa il rumore giusto. Le onde arrivano una alla volta, e ne arriva una che non c’entra.'],
        ['Il cielo', 'Aperto. È la prima volta da un’ora che qualcosa in questa casa ha un cielo.'],
      ],
      storia: 'Serapo è la spiaggia di Gaeta chiusa fra Monte Orlando e la Montagna Spaccata: la baia più riconoscibile del golfo, e per chi è cresciuto da queste parti la spiaggia dell’infanzia intera. Ricostruire un posto così, fino al punto in cui si piantava l’ombrellone, richiede di sapere molto di chi ci andava.',
      gioco: 'I posti belli, in questo gioco, sono i più pericolosi: sono fatti col materiale che vi hanno preso. Qui si può guadagnare qualcosa di vero, ma bisogna riconoscere il dettaglio sbagliato prima che sia lui a riconoscere voi.',
    },

    cabina: {
      titolo: 'Imbarco — la cabina infinita',
      ora: 'Un volo che non parte',
      guarda: [
        ['I sedili', 'File tre-più-tre a perdita d’occhio, avanti e indietro. Nessuna cabina di pilotaggio, nessuna coda: solo la pancia.'],
        ['I passeggeri', 'Manichini. Cinture allacciate, mani sui braccioli, facce lisce girate verso i finestrini.'],
        ['I finestrini', 'Non si vede fuori. Non perché sono chiusi: perché fuori non è previsto.'],
        ['Il controllo documenti', 'C’è, e funziona. Qualcuno controlla che siate in regola per un viaggio che non avviene.'],
      ],
      storia: 'Un aereo pieno di gente allacciata che non decolla è la forma perfetta di una cosa sola: l’attesa organizzata. Tutto è al suo posto, tutte le procedure sono rispettate, e il volo non parte. È il posto più preciso di tutta la casa.',
      gioco: 'Qui il gioco chiede documenti, e i documenti sono oggetti che potete avere o non avere. È una delle scene in cui l’inventario decide da sé come va: quello che avete raccolto prima vale adesso.',
    },

    stanza_sommersa: {
      titolo: 'NON APRIRE — la stanza sommersa',
      ora: 'Dietro la porta con la targhetta più chiara di tutte',
      guarda: [
        ['La parete d’acqua', 'Nera, verticale, dal pavimento al soffitto. Trattenuta da niente: il corridoio finisce e l’acqua comincia.'],
        ['La superficie', 'Ferma come una lastra. Senza vetro, senza incantesimo visibile, senza scusa.'],
        ['Dentro', 'Nel buio liquido si intravede una stanza arredata, e l’arredamento è in piedi.'],
        ['La targhetta', 'NON APRIRE. È l’unica di tutto il corridoio che dà un ordine invece di un nome.'],
      ],
      storia: 'Una targhetta che dice non aprire è un’informazione, non un divieto: vuol dire che qualcuno si è preso il tempo di scriverla, e che la scriveva per qualcuno che sarebbe passato. Nessuno mette un cartello per sé stesso.',
      gioco: 'È una delle stanze che si possono saltare, e il gioco tiene il conto anche di quello che non aprite. Se entrate, l’acqua è una meccanica: prende, e per uscirne serve una cosa che non è il coraggio.',
    },

    cucina_fredda: {
      titolo: 'La Cucina Fredda',
      ora: 'Il freezer ronza',
      guarda: [
        ['Il frigo', 'Pieno di cena. Piatti coperti con la pellicola, porzioni singole, tutte etichettate.'],
        ['Il fondo del frigo', 'L’ultima cosa calda che è stata messa lì dentro. Si vede da quanto è rimasta.'],
        ['Il pozzetto', 'Il freezer a pozzetto, col coperchio pesante. Dentro, sotto il ghiaccio, un occhio di pesce.'],
        ['L’occhio', 'Fissa. E poi fa una cosa che gli occhi di pesce non fanno: **si sposta**. Non verso di voi: oltre di voi.'],
      ],
      storia: 'Il frigo di casa di qualcuno è il documento più onesto che esista: dice cosa mangia, quanto cucina, se cucina per uno o per due, e da quanto tempo non apre lo sportello. Questo frigo è pieno, ed è pieno di porzioni singole con l’etichetta.',
      gioco: 'La Cucina Fredda è dove si trova il cibo, e il cibo qui cura per davvero. È anche il posto da cui si passa per andare più sotto: il pannello dietro il pozzetto non è l’unico che si muove.',
    },

    sottoscala: {
      titolo: 'Il Sottoscala — gli inferi domestici',
      ora: 'La calata, e il rumore che fa',
      guarda: [
        ['La cordata di tovaglie', 'Annodate una all’altra. Tengono, e si sente quanto tengono.'],
        ['I pioli', 'Il terzo regge. Il quarto regge. Il quinto **si ritrae**, come una lingua che rientra in bocca.'],
        ['Gli oblò', 'Nel muro, a intervalli. Da fermi si vede dentro, e dentro c’è qualcosa che sta come si sta in una cuccetta.'],
        ['Il buio in basso', 'Non è la fine della scala: è dove la scala smette di essere una scala.'],
      ],
      storia: 'Il sottoscala di un palazzo è il posto dove finiscono le cose che non si buttano: le biciclette rotte, gli scatoloni del trasloco, le cose di chi non c’è più. Ogni condominio ne ha uno, e nessuno sa cosa contiene esattamente il proprio.',
      gioco: 'La calata è una delle sequenze in cui il gioco chiede a chi tira e a chi scende due cose diverse, e le scelte di uno cambiano cosa capita all’altro. Qui si perde roba, e quello che si perde non torna da solo.',
    },

    mercante: {
      titolo: 'Il Mercante Grigio',
      ora: 'Nell’intercapedine, dietro il banco',
      guarda: [
        ['Il banco', 'Compensato montato fra due tubi-vena, come una bancarella abusiva all’inferno.'],
        ['La bilancia', 'Di ottone, a due piatti. Pesa una cosa che non si dovrebbe poter pesare.'],
        ['La merce', 'Disposta con cura da orefice. Ogni pezzo ha il suo posto e il suo prezzo.'],
        ['Il gilet', 'Da ferramenta, con le taschine piene di cacciaviti. È l’unico dettaglio rassicurante di tutta la scena.'],
      ],
      storia: 'Si compra e si vende **Colore**: è la valuta di questo posto, e come tutte le valute vale perché qualcuno la accetta. Un mercante non è un nemico e non è un amico: è uno che fa un mestiere, e i mestieri hanno delle regole che valgono anche per lui.',
      gioco: 'È il negozio del gioco, e funziona nei due sensi: si compra, e si vende. Vendere qui costa qualcosa che non è denaro, e il gioco vi fa vedere esattamente quanto prima di battere il martelletto.',
    },

    galleria: {
      titolo: 'La Galleria dei Sonnambuli',
      ora: 'Oltre il banco del Mercante',
      guarda: [
        ['Le teche', 'File e file, di vetro, illuminate da dentro. In ognuna una persona.'],
        ['Le persone', 'In pigiama, in tuta, in vestaglia. Sedute su poltrone identiche, davanti a uno schermo identico.'],
        ['La luce', 'Viene da dentro le teche, e ha il colore dei pomeriggi passati al chiuso.'],
        ['Una teca spenta', 'Ce n’è una. È vuota, e il vetro è pulito.'],
      ],
      storia: 'Qui bisogna abbassare la voce, come nei musei e negli ospedali — e questo posto è tutte e due le cose. Ogni teca ha una targhetta con un anno, e gli anni non sono in ordine: sono in ordine di **entrata**.',
      gioco: 'La galleria è dove si capisce l’impianto: le teche hanno un’alimentazione, e le alimentazioni si possono seguire. È anche la scena in cui una domanda banale — «che anno è?» — vale più di un attrezzo.',
    },

    sala_switch: {
      titolo: 'La Sala della Switch',
      ora: 'Il cuore dell’impianto',
      guarda: [
        ['Lo schermo', 'Una parete intera, curva, senza cornice. Trasmette Daniele.'],
        ['Daniele sullo schermo', 'Sorride. Beve una cola senza marca, l’etichetta un rettangolo grigio con scritto COLA. Vince a Mario Kart su una pista senza avversari.'],
        ['I quindici secondi', 'Ogni tanto qualcosa si ripete. Contate quanto dura il giro.'],
        ['I cavi', 'Molti. Uno solo è vero, e gli altri sono scenografia.'],
      ],
      storia: 'Una vittoria senza avversari non è una vittoria: è un filmato. Tutto quello che si vede su questo schermo è costruito per essere gradevole e per non finire mai, che sono le due caratteristiche di una cosa che serve a tenere qualcuno fermo.',
      gioco: 'Qui si stacca qualcosa, e staccare la cosa sbagliata ha un prezzo che il gioco vi mostra prima. La regola pratica è quella di ogni impianto: si segue il cavo, non si indovina il cavo.',
    },

    trono: {
      titolo: 'Il Divano-Trono',
      ora: 'La stanza in fondo',
      guarda: [
        ['Il bozzolo', 'Filamenti grigi, lucidi, tesi come corde di violino, fusi coi cuscini.'],
        ['Il cavo', 'Spesso, caldo, pulsante. Entra dove un cavo non dovrebbe entrare mai, e la pelle intorno si è richiusa sopra la guaina.'],
        ['Daniele', 'È lui. Ed è **dentro**, che non è la stessa cosa che essere lui.'],
        ['I filamenti', 'Tagliarli si può. Ognuno ha il suo prezzo, e il prezzo è visibile.'],
      ],
      storia: 'Il bozzolo non tiene prigioniero: **alimenta**. È una differenza che cambia tutto quello che si può fare in questa stanza, e la si vede da un dettaglio — la direzione in cui scorre.',
      gioco: 'È la stanza delle decisioni costose. Il gioco non nasconde i costi: li mette in fila prima, e poi vi lascia scegliere. Qualunque cosa scegliate, la cosa in fondo alla casa lo saprà.',
    },

    cattedrale: {
      titolo: 'La Cattedrale del Grigiore',
      ora: 'In fondo alla scala, dove il soffitto se ne va',
      guarda: [
        ['La navata', 'Centinaia di divani fusi insieme come cera, allineati in file da chiesa, che digradano verso l’altare.'],
        ['Al posto delle vetrate', 'Televisori alti dieci metri, accesi su canali che non esistono.'],
        ['La luce', 'Quella dei pomeriggi in cui non si è fatto niente. È l’unica luce del posto, e viene dagli schermi.'],
        ['La Sala dei Trofei', 'Di lato. Quello che è appeso lì non è stato vinto: è stato **raccolto**.'],
      ],
      storia: 'Una cattedrale è un edificio costruito per far sentire piccolo chi entra e grande quello che sta in fondo. Questa è costruita col materiale più economico che esista, e funziona esattamente come le altre.',
      gioco: 'È l’ultimo posto, e non introduce niente di nuovo: usa tutto quello che avete imparato nelle stanze prima. Quello che avete portato conta, ma conta di più quello che avete deciso di non lasciare indietro.',
    },

    alba_colori: {
      titolo: 'La casa che finisce',
      ora: 'Dopo',
      guarda: [
        ['Le pareti', 'Tornano pareti. La navata si ripiega in un salotto, e il salotto in un bilocale di sessanta metri quadri che finisce **da tutti i lati**.'],
        ['Il grigio', 'Cade verso l’alto e si accende.'],
        ['La finestra', 'La stessa del terzo piano, vista da dentro. Fuori è mattina.'],
        ['I colori', 'Tornano al loro posto uno alla volta, e non tornano tutti nello stesso momento.'],
      ],
      storia: 'Il colore compresso non era distrutto: era impacchettato. Quando la compressione cede, quello che era dentro torna fuori — e torna fuori tutto, perché non se n’è mai andato niente.',
      gioco: 'È l’epilogo, e il gioco qui fa i conti: vi dice chi c’è, cosa avete tenuto, e anche quello che non vi ha mostrato. È l’unico sfondo del gioco a colori pieni, e non è un caso.',
    },
  };

  /* ---------- il rendering: identico in tutti i giochi della serie ---------- */

  const $ = id => document.getElementById(id);
  let corrente = null;

  function apri(key, titoloHUD) {
    const L = LUOGHI[key];
    if (!L) return;
    const box = $('modal-generic-content');
    if (!box) return;
    box.innerHTML = `<h2>🔎 ${L.titolo}</h2>`
      + `<p style="color:var(--text-dim);margin:-6px 0 14px">${L.ora}</p>`
      + (titoloHUD && titoloHUD !== L.titolo
          ? `<p style="color:var(--text-dim);font-size:.92em;margin:-10px 0 14px">Nel gioco, adesso: <b>${titoloHUD}</b></p>` : '')
      + `<h3>👁 Cosa vedete nel quadro</h3><ul style="margin:0 0 14px;padding-left:18px">`
      + L.guarda.map(([n, t]) => `<li style="margin-bottom:7px"><b>${n}.</b> ${t}</li>`).join('')
      + `</ul><h3>📜 Perché questo posto esiste</h3><p style="margin:0 0 14px">${L.storia}</p>`
      + `<h3>🎲 Cosa c'entra col gioco</h3><p style="margin:0 0 4px">${L.gioco}</p>`
      + `<p style="color:var(--text-dim);font-size:.86em;margin:14px 0 0">Questa scheda racconta solo quello che`
      + ` avete già davanti agli occhi: non anticipa niente di quello che deve ancora succedere.</p>`;
    const chiudi = document.createElement('button');
    chiudi.className = 'btn';
    chiudi.style.marginTop = '14px';
    chiudi.textContent = '↩ Torna alla scena';
    chiudi.onclick = () => $('modal-generic').classList.add('hidden');
    box.appendChild(chiudi);
    $('modal-generic').classList.remove('hidden');
  }

  /* Chiamata dal motore dopo ogni Scenes.paint(): accende il pulsante se questo
     luogo ha una scheda, lo spegne se non ce l'ha. Un luogo senza scheda non
     mostra un pulsante che apre il vuoto. */
  function aggiorna(key, titoloHUD) {
    corrente = key;
    const b = $('btn-scena');
    if (!b) return;
    const haScheda = !!LUOGHI[key];
    b.classList.toggle('hidden', !haScheda);
    if (!haScheda) return;
    b.onclick = () => apri(key, titoloHUD);
    b.title = 'Cosa sto guardando?';
  }

  return { LUOGHI, apri, aggiorna, corrente: () => corrente };
})();
