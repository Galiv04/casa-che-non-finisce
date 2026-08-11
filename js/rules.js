/* ============ REGOLE — testi della guida ============ */

const RULES_HOWTO = `
<h3>🚪 Che gioco è questo?</h3>
<p>Un'avventura horror interattiva in stile D&amp;D, con un Narratore automatico. Si gioca <b>insieme, sullo stesso schermo</b>: si legge ad alta voce, si discute, si sceglie, e quando serve si tira un dado virtuale. Nessuna preparazione: il gioco vi guida sempre.</p>
<p><b>⚠️ Contenuti per adulti:</b> paura vera, scene macabre, linguaggio esplicito. E si può <b>morire davvero</b> — continuate a leggere.</p>

<h3>🎭 Chi siete</h3>
<p>Siete voi: Gaetano, Natalino, Claudia, Federico, Emanuela. Nella storia ci siete sempre tutti e cinque; al setup scegliete solo <b>chi viene giocato</b> (da 1 a 5 giocatori). E Daniele? Daniele è DENTRO la Casa. Andate a riprendervelo: <b>da un certo punto in poi si gioca anche lui.</b></p>

<h3>🎲 Le prove</h3>
<p>Quando una scelta ha il simbolo 🎲, si tira un <b>d20</b> e si somma il modificatore dell'eroe scelto. Se il totale raggiunge la difficoltà (CD), successo. Scegliete CHI tenta: ogni eroe è il migliore in qualcosa. Fallire non blocca mai la storia — la piega. A volte in peggio.</p>

<h3>⚔ Il combattimento</h3>
<p>A turni, in ordine di iniziativa. Nel proprio turno: <b>attacco</b>, <b>abilità speciale</b> (usi limitati), <b>oggetto</b> o <b>difesa totale</b>. Chi finisce a 0 PV nei combattimenti normali <b>sviene</b>: una cura lo rialza. Le cose del Grigiore (quasi tutte, qui dentro) prendono <b>danni doppi</b> dalle armi VIVIDE: fiamma vera, la pallina dei racchettoni, il phon di Emanuela.</p>

<h3>⚰️ La morte vera e gli Spiriti</h3>
<p>In alcuni momenti — il gioco vi AVVERTE sempre prima — si muore <b>davvero</b>. Chi muore diventa uno <b>Spirito</b>: resta con il gruppo (👻 nella barra), vede cose che i vivi non vedono e in certi luoghi apre scelte che solo i morti sbloccano. Ma non tira dadi e non combatte.</p>
<p>Per riportare indietro uno Spirito serve un <b>💗 Cuore di Colore</b>: rarissimo. Se ne trovano un paio nella Casa, ben nascosti, e uno lo vende il Mercante Grigio — a un prezzo che fa male.</p>

<h3>🗣 I Duelli di Parole</h3>
<p>Il demone di questa casa combatte anche <b>con la retorica</b>: trucchi di persuasione e fallacie logiche. Nei Duelli di Parole non si tira il dado: si <b>ragiona</b>. Leggete il suo discorso, riconoscete il trucco, nominatelo — e l'incantesimo si spezza. Sbagliate, e la manipolazione affonda. Suggerimento: nella Casa c'è un Manuale, annotato da chi il nemico lo conosce meglio di chiunque.</p>

<h3>🎨 Il Colore</h3>
<p>La valuta della notte: la vostra vitalità. Si <b>guadagna</b> con le scelte vive e coraggiose, si <b>spende</b> dal Mercante Grigio (cure, attrezzi... e la resurrezione). Il Grigiore ve lo vuole succhiare via tutto.</p>

<h3>🩶 L'Ingrigito</h3>
<p>Certe cose della Casa vi entrano nelle vene: chi è INGRIGITO ha -2 a prove e attacchi finché non si cura (Gocce del Dottore, Boccata di Colore, o certe scene).</p>

<h3>💾 Salvataggi</h3>
<p>Automatici a ogni scena, 3 slot per utente, trasferibili tra dispositivi con un codice. Potete chiudere e riprendere quando volete: la Casa vi aspetta. È il suo genere.</p>
`;

const RULES_QUICK = `
<div class="ability-box"><span class="ability-name">🎲 Prova</span><div class="ability-desc">d20 + modificatore ≥ CD. Scegliete l'eroe giusto per la prova giusta.</div></div>
<div class="ability-box"><span class="ability-name">⚔ Combattimento</span><div class="ability-desc">A turni: attacco / abilità / oggetto / difesa (+3 CA). A 0 PV si sviene (cura per rialzarsi). Armi VIVIDE = danni doppi alle cose grigie.</div></div>
<div class="ability-box"><span class="ability-name">⚰️ Morte vera</span><div class="ability-desc">Solo negli snodi segnalati. Il morto resta come SPIRITO 👻: commenta, sblocca scelte segrete, non tira dadi. Torna in vita solo con un 💗 Cuore di Colore.</div></div>
<div class="ability-box"><span class="ability-name">🗣 Duello di Parole</span><div class="ability-desc">Niente dadi: riconoscete la fallacia del nemico e nominatela. Il Manuale Annotato (e Daniele) aiutano.</div></div>
<div class="ability-box"><span class="ability-name">🎨 Colore</span><div class="ability-desc">La valuta: si guadagna col coraggio, si spende dal Mercante. La resurrezione costa carissimo.</div></div>
<div class="ability-box"><span class="ability-name">🩶 Ingrigito</span><div class="ability-desc">-2 a tutto finché non vi curate (Gocce del Dottore, Boccata di Colore).</div></div>
<div class="ability-box"><span class="ability-name">🎮 Daniele</span><div class="ability-desc">Si sblocca giocando: liberatelo, e il sesto eroe è vostro. Il colpo finale spetta a lui.</div></div>
`;
