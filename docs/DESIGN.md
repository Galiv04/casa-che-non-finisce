# LA CASA CHE NON FINISCE — documento di design

> Terzo gioco della serie. Motore: quello del Relais (il più avanzato). Questo documento è la MAPPA
> di tutta la produzione: struttura, meccaniche nuove, grafo delle scene, personaggi, finali.
> Ogni scelta qui dentro è stata confermata dal committente (Gaetano) l'11 agosto 2026.

## Il seme in una riga

> *Daniele non risponde da tre giorni. Entrate in casa sua con le chiavi di scorta: la porta
> sparisce dietro di voi, e dentro la casa non finisce più. Il suo demone, **Eleinad**, colleziona
> la voglia di vivere — e stanotte vuole la vostra.*

## Tono e contenuti

- **Horror hardcore**: gore descritto senza censure, body horror, immagini disturbanti,
  turpiloquio pieno (il demone è sboccato e crudele). Niente contenuto sessuale esplicito.
- Testi **150-350 parole**, MAI prolissi: la durata (~6 ore) viene da varietà di ambienti,
  twist e sviluppi — non dalla lunghezza. Critica esplicita alla Corona: troppa lettura, poca sorpresa.
- Umorismo nero del gruppo intatto: si ride PER sopravvivere.

## Vincoli etici (NON negoziabili)

1. **Il demone NON è Daniele.** Eleinad è un parassita che ha rubato il suo volto (il nome è
   "Daniele" allo specchio). Daniele-persona è eroico, lucido, dialettico micidiale: il migliore
   di tutti a smontare il demone, perché lo conosce da dentro.
2. Il tema (l'apatia che ruba la voglia) vive SOLO in metafora fantasy: **il Grigiore**.
   Mai riferimenti espliciti ad autolesionismo o suicidio. Eleinad "spegne il colore",
   "colleziona anime sul divano" — non altro.
3. **La terapia è alleata**: le "Gocce del Dottore" (i funghetti) sono pozioni di VISIONE che
   aiutano — rivelano passaggi nascosti, mai causa del male. Si scherza su divano/Switch/Coca
   Zero/dialettica, mai sulla sofferenza.
4. Ritratti di tutti e sei sempre affettuosi: nomi di battesimo, lavori sfumati, zero dettagli
   privati riconoscibili.

## Le meccaniche nuove (rispetto al Relais)

| Meccanica | Come funziona |
|---|---|
| **Valuta: Colore 🎨** | `G.gold` = il colore/la vitalità del gruppo. Si guadagna con scelte vive e coraggiose, si spende dal Mercante Grigio. La resurrezione costa MOLTO Colore. |
| **Condizione: Ingrigito** | Riuso del campo `veleno` (−2 a prove e attacchi) ribattezzato nei testi: il Grigiore nelle vene. Si cura con la **Boccata di Colore** (item) o scene specifiche. |
| **Morte vera + Spirito** | Nei ~5 snodi maggiori si muore DAVVERO (`killRoller` su prova fallita, o scelte di sacrificio esplicite). Il morto diventa **Spirito**: resta nella barra del gruppo (👻), commenta, in alcune scene apre scelte dedicate (`requiresSpirit`), ma niente prove né attacchi. Nei combattimenti normali si sviene come nel Relais. |
| **Resurrezione** | Item raro **Cuore di Colore** (2-3 nella casa, ben nascosti) o acquisto dal **Mercante Grigio** a prezzo altissimo (Colore + un item personale del gruppo). Se muoiono tutti: finale dedicato al demone che vince. |
| **Duelli di Fallacie** | La meccanica firma. Eleinad e i suoi attaccano con la retorica (armi di Cialdini, fallacie logiche). Il gioco mostra il discorso manipolatorio e 3 scelte: riconosci il trucco giusto = incantesimo spezzato (bonus); sbagli = danni/Ingrigito. Daniele, quando presente, dà l'indizio (passiva). Implementati come scene con scelte, pattern ricorrente con cornice grafica dedicata nel testo (`🗣 DUELLO DI PAROLE`). |
| **Sesto eroe sbloccabile** | Daniele è in HEROES con `locked: true`: non appare nel setup. Alla scena della liberazione (`unlockHero: 'daniele'`) entra nel party a PV pieni con modale dedicata. Il colpo di grazia a Eleinad è suo. |
| **Creature del Grigiore** | `undead: true` riusato = creatura del Grigiore → danni DOPPI dalle armi "vivide" (`holy`): il racchettone professionale, la fiamma vera, il colore. |

## I sei eroi

I 5 del Relais (statistiche riequilibrate, armi/abilità NUOVE a tema casa) + **Daniele, "Il Dialettico"**:
INT 4, CAR 3 — attacco: Joy-Con lanciato con rabbia; abilità: **Guscio Blu** (autohit sul nemico più
forte, citazione Mario Kart), **Chiamata della Fallacia** (stun: nomina il trucco retorico e il nemico
si inceppa); passiva: **Ha Letto il Manuale** — nei Duelli di Fallacie l'indizio è gratis, +2 CAR.
Item firma: **Coca Zero** in quantità industriale.

Le paure come armi del demone (una stanza/scena a testa):
- Claudia → acqua profonda, scogli, cose sott'acqua (la Stanza Sommersa)
- Natalino → topi + carestia di tronelli (i Topi Grigi; il tronello che si sbriciola)
- Federico → perdere soldi / le birre al limone (lo Sciame di Bollette; il frigo svuotato)
- Emanuela → i vibe-killer (il Molestatore Eterno: un fantasma che monologa e prosciuga)
- Gaetano → imprevisti nel tempo libero (l'Allarme Satellite; **Luca Giunti delle 21:00**, mini-boss
  comico-horror che esige 4 ore di ripetizioni prima della verifica... per l'eternità)
- Daniele → l'aereo (la Cabina, usata dal demone come cella psicologica)

Armi affettuose del gruppo: i **racchettoni pro** di Claudia e Gaetano (sassate che decapitano — arma
vivida anti-Grigiore), la **borsa Kerastase** di Emanuela (spray accecante + cure), tronello, birre
al limone, IPA, taralli.

## Struttura (clessidra con hub, ~170 scene, ~22.000 parole)

```
PROLOGO  a*   (~14 scene)  la chat muta da 3 giorni · il palazzo · l'appartamento sbagliato ·
                           la porta che sparisce · PRIMO TWIST: il corridoio che non c'era
SOGLIA   s*   (~12 scene)  prime creature · la voce di Daniele dalla TV/Switch · il Grigiore spiegato ·
                           primo incontro con Eleinad (indossa il volto di Daniele) · primo Duello
HUB      h1   il Salotto-Cattedrale: TRE piste NON esclusive + scene di respiro (tronello, racchettoni)
  PISTA B b*  (~22)  LA BIBLIOTECA CHE SUSSURRA — i libri ti leggono ad alta voce · il Bibliotecario ·
                     il Manuale Annotato di Daniele (arma per i Duelli) · SEGRETO: il nome del demone
                     è Daniele al contrario: parassita-specchio, NON la sua anima
  PISTA U u*  (~24)  IL CORRIDOIO DELLE PORTE SBAGLIATE — porte su ricordi corrotti: la cameretta dei
                     gemelli · la spiaggia dei racchettoni ingrigita · la Cabina dell'aereo · la Stanza
                     Sommersa · SEGRETO: il demone si nutre della lite tra i gemelli; la foto strappata
                     dei due, ricomposta, è un'arma
  PISTA K k*  (~22)  LA CUCINA FREDDA E IL SOTTOSCALA — il frigo pieno di cibo grigio · le lattine di
                     Coca Zero disposte da Daniele come segnali · il Mercante Grigio (negozio: cure,
                     Cuore di Colore a prezzo folle) · la Galleria dei Sonnambuli (gli assimilati di
                     prima) · SEGRETO: come si arriva al Trono
SNODO    m*   (~16)  LA SALA DELLA SWITCH / IL DIVANO-TRONO — Daniele nel bozzolo grigio davanti a una
                     vita finta in loop · boss di liberazione · DANIELE SI SBLOCCA (6° eroe) ·
                     SECONDO TWIST: la casa non è casa sua — siete DENTRO Eleinad
FINALE   z*   (~20)  LA CATTEDRALE DEL GRIGIORE — tutte le carte in tavola, il Duello finale
EPILOGHI e_*  (5)    vedi sotto
```

Ogni pista dà: un **oggetto chiave**, un **segreto su Eleinad** (che diventa una scelta nel finale),
un **personaggio memorabile**, un **momento di paura personale** e un **momento di cuore**.
Ritmo: un combattimento o prova di gruppo ogni 4-5 scene; un Duello di Fallacie per pista + 2 nel finale.
Snodi con morte vera (~5): la Stanza Sommersa, la Calata nel Sottoscala, il boss della liberazione,
un dilemma "salvi uno o l'altro" nella Galleria dei Sonnambuli, il Duello finale sbagliato due volte.

## I finali

| id | Come | Tipo |
|---|---|---|
| `e_parola` | Daniele vince il Duello di Fallacie finale: smonta Eleinad pezzo per pezzo davanti a tutti (serve il Manuale + almeno 2 segreti). IL finale migliore. | vittoria |
| `e_gemelli` | Federico e Daniele, la foto ricomposta: il demone non regge due che smettono di litigare. | vittoria |
| `e_colori` | Vittoria in battaglia: Eleinad distrutto, colpo di grazia di Daniele (Guscio Blu). | vittoria |
| `e_scambio` | Qualcuno resta sul Divano al posto di Daniele — scelta esplicita, mai subìta. | agrodolce |
| `e_grigio` | La resa / tutti morti: il gruppo al completo sul divano, per sempre. Il finale del demone. | sconfitta |

## Convenzioni tecniche

- Prefissi scene: `a` prologo · `s` soglia · `h` hub · `b` biblioteca · `u` porte · `k` cucina/sottoscala ·
  `m` snodo Switch · `z` finale · `e_` epiloghi. `eclipsePhaseFor` rimappato su questi prefissi
  (qui l'"eclissi" è il **Grigiore che avanza**: la palette si desatura col progredire della notte).
- Regola d'oro: **ogni flag ha un consumatore** (meccanica, diario, impresa o cronaca) — validato.
- Localizzazione: città italiana generica, MAI riconoscibile. Il palazzo di Daniele è inventato.
- Tutti i testi citano i sei per nome SEMPRE (framing del Relais): si sceglie solo chi si GIOCA.
  Daniele nella storia c'è sempre; giocabile solo dallo snodo in poi.
