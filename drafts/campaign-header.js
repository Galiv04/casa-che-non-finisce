/* ============ LA CASA CHE NON FINISCE — campagna completa ============
   Formato identico al motore Relais. In più:
   - killRoller: true   → chi ha appena tirato (e fallito) MUORE DAVVERO: resta come SPIRITO
   - unlockHero: 'id'   → l'eroe si unisce al gruppo (Daniele, allo snodo)
   - choice.sacrifice   → il tavolo sceglie CHI resta (morte volontaria)
   - requires.hero / requires.spirit / requires.heroDead nelle scelte
   - reviveAll: true    → solo nei finali che se lo meritano
   - Valuta: G.gold = COLORE (🎨). Si guadagna con le scelte vive e coraggiose,
     si spende dal Mercante Grigio. La resurrezione costa carissimo.            */

const ITEMS = {
  /* --- cure e consumabili --- */
  kit_emanuela:   { name: 'Kit della borsa Kerastase', desc: 'Garze, cerotti, ago da sutura e una calma da salone pieno il sabato. Ripristina 10 PV.', usable: true, heal: 10 },
  lattina_zero:   { name: 'Coca Zero di Daniele', desc: 'Della scorta industriale. Fredda al punto giusto anche quando non dovrebbe. +4 PV e lucidità immediata. Daniele approverebbe. Anzi: pretenderebbe.', usable: true, heal: 4 },
  birra_limone:   { name: 'Birra al limone di Federico', desc: 'Della scorta tattica ("ne servono DIECI al giorno, è scienza"). +3 PV e un rutto di conforto che sfida il Grigiore.', usable: true, heal: 3 },
  ipa_gaetano:    { name: 'IPA di Gaetano', desc: 'Luppolo serio per momenti seri. +4 PV e il coraggio amaro di chi legge le etichette.', usable: true, heal: 4 },
  taralli:        { name: 'Taralli di scorta', desc: 'Razionati da Emanuela con criteri militari. +2 PV e un morale insospettabilmente migliore.', usable: true, heal: 2 },
  tronello:       { name: 'Tronello di riserva', desc: 'Rollato da Natalino con cura liturgica. +5 PV e dieci minuti in cui la Casa fa un po\' meno paura. "Non è vizio, è MANUTENZIONE."', usable: true, heal: 5 },
  caffe_moka:     { name: 'La moka di Daniele', desc: 'Il caffè di casa sua, nero e VIVO. Ricarica TUTTE le abilità di una persona.', usable: true, recharge: true },
  gocce_dottore:  { name: 'Le Gocce del Dottore', desc: 'La scorta di Daniele, con la ricetta e la sua grafia sui promemoria. Il dottore sa il fatto suo: +6 PV e scioglie il Grigiore dalle vene.', usable: true, heal: 6, cureVeleno: true },
  boccata_colore: { name: 'Boccata di Colore', desc: 'Una fiala del Mercante: dentro c\'è un tramonto di qualcun altro. Cura il GRIGIORE e scalda il resto (+3 PV).', usable: true, heal: 3, cureVeleno: true },
  cuore_colore:   { name: 'Cuore di Colore', desc: 'Batte. Nella borsa, batte. L\'oggetto più raro della Casa: riporta indietro uno SPIRITO. Uno solo. Sceglietelo bene.', revive: true },

  /* --- oggetti da combattimento --- */
  spray_kerastase: { name: 'Spray professionale Kerastase', desc: 'Prodotto di punta, uso improprio: dritto negli occhi (quando ci sono). 1d2 danni e il bersaglio, accecato, attacca con svantaggio.', combat: { distract: true, dice: [1, 2], distractText: ' Lo spray professionale ACCECA: svantaggio al prossimo attacco!' }, icon: '💇' },
  accendino_bbq:   { name: 'Accendigas della grigliata', desc: 'Quello delle grigliate stile Pasquetta di Gaetano. Una fiamma VERA, calda e viva: 2d4 danni, DOPPI alle cose del Grigiore. Il gas basta per un colpo.', combat: { dice: [2, 4], holy: true }, icon: '🔥' },
  lattina_agitata: { name: 'Coca Zero agitata', desc: 'Agitata con odio per trenta secondi. Aperta in faccia: 2d6 danni di schiuma pressurizzata. Daniele NON approverebbe lo spreco. Capirebbe l\'urgenza.', combat: { dice: [2, 6] }, icon: '🥤' },
  cassa_bluetooth: { name: 'Cassa bluetooth (playlist dell\'estate)', desc: 'La playlist delle vacanze, a tutto volume. La musica VIVA ferma le cose grigie: le piccole si bloccano un giro, le grandi esitano. Un uso: poi la batteria muore.', combat: { calm: true }, icon: '🔊' },
  pallina_racchettoni: { name: 'La pallina dei racchettoni', desc: 'Servita da Claudia o da Gaetano, è una fucilata che decapita i passanti. 2d8 danni, DOPPI alle cose del Grigiore: non c\'è niente di più VIVO di quel dritto.', combat: { dice: [2, 8], holy: true }, icon: '🎾' },

  /* --- oggetti chiave --- */
  chiavi_scorta:   { name: 'Chiavi di scorta di Daniele', desc: 'Ve le diede "per le emergenze". Pensavate: innaffiare le piante. Invece.', usable: false },
  manuale_annotato: { name: 'Il Manuale Annotato', desc: 'Il Cialdini di Daniele, sottolineato in tre colori. A margine, le sue note: il libretto di istruzioni del nemico, scritto dalla vittima.', usable: false },
  foto_meta_federico: { name: 'Mezza foto (Federico)', desc: 'Metà di una foto strappata: un bambino su un letto a castello, che ride. Il bordo strappato CERCA l\'altra metà.', usable: false },
  foto_meta_daniele: { name: 'Mezza foto (Daniele)', desc: 'L\'altra metà: lo stesso letto, lo stesso identico riso. Strappata dal centro, dove le due spalle si toccavano.', usable: false },
  foto_gemelli:    { name: 'La foto dei gemelli (intera)', desc: 'Ricomposta col nastro adesivo: due gemelli che ridono della STESSA cosa. La Casa non riesce a guardarla. Tenetela in alto.', usable: false },
  d20_daniele:     { name: 'Il d20 di Daniele', desc: 'Dal suo set da gioco di ruolo mai usato ("un giorno li porto a giocare a D&D"). UNA volta, permette di RITIRARE una prova fallita: il gioco ve lo proporrà al momento giusto.', usable: false },
  conchiglia_gaeta: { name: 'Conchiglia di Gaeta', desc: 'Raccolta sulla spiaggia grigia, ma dentro c\'è ancora il rumore del mare VERO. Portata addosso, le cose della Casa esitano — un attimo, non di più.', usable: false },
  joycon_sinistro: { name: 'Il joy-con sinistro', desc: 'Il pezzo mancante della Switch di Daniele. La Casa l\'aveva nascosto nel 1994. I salvataggi non si cancellano: si SOSPENDONO.', usable: false },
};
