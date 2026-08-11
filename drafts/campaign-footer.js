/* Scena iniziale della campagna */
const CAMPAIGN_START = 'a0';

/* Rientra nella Casa: punti d'ingresso per rigiocare rami mai visti, sbloccati
   dopo il primo finale del profilo. Ogni capitolo prepara flag e zaino minimi. */
const CHAPTERS = [
  { id: 'a0',      prefixes: ['a'], label: '🌆 Sotto casa di Daniele', desc: 'Dall\'inizio: la chat muta, le chiavi di scorta, la porta che sparisce.' },
  { id: 's3',      prefixes: ['s'], label: '🩶 Il primo incontro', desc: 'Eleinad e il Contratto di Soggiorno. La faccia sbagliata di Daniele.', flags: { chiavi_prese: true } },
  { id: 'h1',      prefixes: ['h'], label: '🛋 Il Salotto-Cattedrale', desc: 'L\'hub delle tre gole: biblioteca, porte, cucina — e i momenti di respiro.', flags: { casa_aperta: true } },
  { id: 'b1',      prefixes: ['b'], label: '📚 La Biblioteca che Sussurra', desc: 'Il Bibliotecario, il Manuale Annotato, il segreto dello specchio.', flags: { casa_aperta: true } },
  { id: 'u1',      prefixes: ['u'], label: '🚪 Le Porte Sbagliate', desc: '1994, Gaeta in grigio, l\'Imbarco, la stanza che dice NON APRIRE.', flags: { casa_aperta: true } },
  { id: 'k1',      prefixes: ['k'], label: '🧊 La Cucina Fredda', desc: 'I segnali di Daniele, il Mercante Grigio, la Galleria dei Sonnambuli.', flags: { casa_aperta: true } },
  { id: 'm1',      prefixes: ['m'], label: '🎮 La Sala della Switch', desc: 'Il bozzolo, il Guardiano, la liberazione di Daniele.',
    flags: { casa_aperta: true, via_biblioteca: true, via_porte: true, segreto_gemelli: true },
    items: ['joycon_sinistro', 'lattina_zero', 'manuale_annotato'] },
  { id: 'z1',      prefixes: ['z', 'e_'], label: '🩶 La Cattedrale — tutte le carte in mano', desc: 'Il finale con ogni segreto e ogni arma: provate le vie che vi mancano.',
    addHero: 'daniele',
    flags: { casa_aperta: true, daniele_in_squadra: true, dentro_eleinad: true, segreto_specchio: true, segreto_gemelli: true, segreto_trono: true, foto_ricomposta: true, manuale_annotato_letto: true, daniele_sabota: true, zero_bevuta: true },
    items: ['manuale_annotato', 'foto_gemelli', 'cuore_colore', 'pallina_racchettoni', 'lattina_zero'] },
  { id: 'z1_puro', scene: 'z1', label: '🩶 La Cattedrale — a mani nude', desc: 'Il finale senza assi nella manica: la battaglia, lo scambio, la resa.',
    addHero: 'daniele',
    flags: { casa_aperta: true, daniele_in_squadra: true, dentro_eleinad: true } },
];

/* Il Diario della Notte: le conoscenze acquisite, in chiaro. Ordine = visualizzazione. */
const DIARY_FLAGS = [
  ['nota_daniele',          'La nota di Daniele in cucina: "NON è una crisi: è un inquilino abusivo. Non ascoltate la mia faccia."'],
  ['daniele_vivo',          'Daniele è VIVO e combatte da dentro: sta nei fusibili, sabota quello che può. Non firmate, non sedetevi, non credete alla sua faccia.'],
  ['daniele_sabota',        'I segnali di Daniele: le lattine di Coca Zero — le uniche cose a colori — disposte a freccia. Vi sta guidando LUI.'],
  ['misure_impossibili',    'Il corridoio misura 34 metri in un bilocale. La geometria qui dentro è un\'opinione della Casa.'],
  ['gocce_trovate',         'Le Gocce del Dottore, coi promemoria di Daniele: preso ✓, preso ✓, preso ✓ — fino a tre giorni fa. Si è fermato quando la casa l\'ha preso. Non prima. Il dottore sa il fatto suo.'],
  ['casa_aperta',           'La Casa ha tre gole: la Biblioteca che Sussurra, il corridoio delle Porte Sbagliate, la Cucina Fredda. Daniele è oltre, in alto, dove qualcosa guarda uno schermo da tre giorni.'],
  ['fumo_mappa',            'Il fumo del tronello ha disegnato la pianta: sopra tutto c\'è una sala con uno schermo e un divano. Il fumo batteva lì sopra, come un dito su un vetro.'],
  ['eleinad_teme_gemelli',  'Quando Federico l\'ha insultato, la voce di Eleinad è CAMBIATA: "Tu. Tu sei il GEMELLO." I gemelli gli fanno paura.'],
  ['segreto_specchio',      'SEGRETO: "Eleinad" è "Daniele" allo specchio — un parassita-riflesso, la fotocopia venuta male. Non è l\'anima di Daniele. E si VERGOGNA di ciò che è.'],
  ['manuale_annotato_letto','Avete letto le note di Daniele sul Manuale: conoscete le armi del nemico — riprova sociale, autorità, scarsità, fantoccio, falsa dicotomia, ricatto emotivo — PRIMA che le usi.'],
  ['ancora_colore_nota',    'Chi tiene stretta una cosa A COLORI non affonda del tutto nel Grigiore: le ancore funzionano.'],
  ['segreto_gemelli',       'SEGRETO: il demone SI NUTRE della lite infinita tra Federico e Daniele. Due gemelli che si danno ragione sono ILLEGGIBILI, per lui.'],
  ['foto_ricomposta',       'La foto dei gemelli è INTERA: due bambini che ridono della stessa cosa. La Casa non riesce a guardarla.'],
  ['indizio_spiriti',       'Il Grigiore non può toccare ciò che è già stato perso: gli SPIRITI passano ovunque, e vedono le porte che i vivi non vedono.'],
  ['segreto_trono',         'SEGRETO: Eleinad ogni notte DEVE tornare al Divano-Trono nella Sala della Switch, a ricaricarsi di vita finta. Lì, staccato dal Grigiore, è vulnerabile.'],
  ['sonnambuli_svegli',     'I Sonnambuli della Galleria sono SVEGLI. Camminano ancora piano, ma adesso sanno da che parte stare.'],
  ['zero_bevuta',           'La prima Zero da libero: Daniele l\'ha scolata in sette secondi ed è tornato LUI al settanta per cento. Il restante trenta è rancore utilissimo.'],
  ['dentro_eleinad',        'IL TWIST: questa non è casa di Daniele. La moquette respira, le pareti digeriscono. Siete DENTRO Eleinad. La geografia è anatomia.'],
  ['eleinad_vacilla',       'Gli spiriti l\'hanno attraversato e hanno riferito: Eleinad VACILLA. I suoi primi colpi saranno più deboli.'],
  ['via_biblioteca',        'La via della Biblioteca è aperta: il Manuale è vostro.'],
  ['via_porte',             'La via delle Porte è aperta: i ricordi corrotti non vi fermano più.'],
  ['via_cucina',            'La via della Cucina è aperta: siete scesi e risaliti.'],
];

/* Mappa del mondo: le zone della Casa (per il canvas della mappa).
   Gli array `scenes` si CALCOLANO dalla campagna: niente elenchi a mano da tenere aggiornati. */
const WORLD_MAP = [
  { key: 'strada',       label: 'La Strada',      x: 0.10, y: 0.85, scenes: [] },
  { key: 'palazzo',      label: 'Il Palazzo',     x: 0.26, y: 0.72, scenes: [] },
  { key: 'appartamento', label: 'L\'Appartamento', x: 0.42, y: 0.60, scenes: [] },
  { key: 'salotto',      label: 'Il Salotto',     x: 0.50, y: 0.42, scenes: [] },
  { key: 'biblioteca',   label: 'La Biblioteca',  x: 0.20, y: 0.30, scenes: [] },
  { key: 'porte',        label: 'Le Porte',       x: 0.50, y: 0.14, scenes: [] },
  { key: 'cucina',       label: 'La Cucina',      x: 0.78, y: 0.52, scenes: [] },
  { key: 'sottoscala',   label: 'Il Sottoscala',  x: 0.88, y: 0.78, scenes: [] },
  { key: 'switch',       label: 'La Sala Switch', x: 0.74, y: 0.24, scenes: [] },
  { key: 'cattedrale',   label: 'La Cattedrale',  x: 0.90, y: 0.10, scenes: [] },
];

/* location → zona della mappa */
const MAP_ZONE_BY_LOCATION = {
  strada: 'strada',
  palazzo: 'palazzo', pianerottolo: 'palazzo',
  appartamento: 'appartamento',
  corridoio: 'salotto', salotto: 'salotto',
  biblioteca: 'biblioteca',
  porte: 'porte', cameretta: 'porte', spiaggia_grigia: 'porte', cabina: 'porte', stanza_sommersa: 'porte',
  cucina_fredda: 'cucina',
  sottoscala: 'sottoscala', mercante: 'sottoscala', galleria: 'sottoscala',
  sala_switch: 'switch', trono: 'switch',
  cattedrale: 'cattedrale', alba_colori: 'cattedrale',
};
for (const [id, scene] of Object.entries(CAMPAIGN)) {
  const zone = WORLD_MAP.find(w => w.key === MAP_ZONE_BY_LOCATION[scene.location]);
  if (zone) zone.scenes.push(id);
}
