# 🚪 La Casa che non Finisce

### ▶ [GIOCA ORA](https://galiv04.github.io/casa-che-non-finisce/)

[![Test](https://github.com/Galiv04/casa-che-non-finisce/actions/workflows/test.yml/badge.svg)](https://github.com/Galiv04/casa-che-non-finisce/actions/workflows/test.yml)

> Daniele non risponde da tre giorni. Entrate in casa sua con le chiavi di scorta:
> la porta sparisce dietro di voi, e dentro la casa non finisce più.
> Il suo demone, **Eleinad**, colleziona la voglia di vivere — e stanotte vuole la vostra.

Horror interattivo in stile D&D, in italiano, per **1-5 giocatori sullo stesso schermo**
(più un sesto da salvare — e poi da giocare). Narratore automatico, zero preparazione,
salvataggi automatici. Sito 100% statico: HTML/CSS/JS vanilla, grafica canvas e audio
WebAudio generati via codice, nessuna dipendenza.

## ⚠️ Contenuti

Gioco **per adulti**: paura vera, gore esplicito, linguaggio molto forte. E si può
**morire davvero** — chi muore resta come Spirito 👻, e riportarlo indietro costa carissimo.

## Il gioco

- **Tre piste non esclusive** dentro la Casa: la Biblioteca che Sussurra, il corridoio
  delle Porte Sbagliate, la Cucina Fredda col Mercante Grigio.
- **Duelli di Parole**: il demone combatte con fallacie logiche e trucchi di persuasione.
  Riconosci il trucco, nominalo, e l'incantesimo si spezza.
- **Daniele si sblocca giocando**: liberatelo dal bozzolo, e il Dialettico è vostro.
  Il colpo di grazia spetta a lui.
- **🎨 Il Colore compra il secondo tentativo**: la valuta della notte non è un punteggio.
  Quando un dado va male — una prova o un colpo in combattimento — potete rimetterci del
  vostro colore e **ritirare**: 2🎨 il primo ritiro, poi 3, 5, 8 se insistete nella stessa
  stanza (cambiate stanza e si torna a 2). Il Colore si guadagna con le scelte vive, ed è
  poco: gli stessi 🎨 servono al Mercante Grigio per le cure e per il 💗 Cuore di Colore,
  l'unico oggetto che riporta indietro un morto — e che in combattimento **paga la morte**
  del gruppo intero, una volta.
- **5 finali**, 38 imprese e 20 cronache collezionabili, diario della notte, cronache, difficoltà
  Tranquilla/Normale/Incubo.
- **248 scene e oltre 53.000 parole**: una partita esplorativa dura ~5-7 ore, con
  salvataggio automatico.
- **Il gioco ti dice cosa ti manca**: a fine partita elenca i capitoli con stanze e imprese
  ancora da scoprire — solo i titoli, nessuno spoiler — e con **🗝 Rientra nella Casa** salti
  direttamente al capitolo giusto, con zaino e conoscenze già pronti. Niente rigiocate da zero.

## Sviluppo

```bash
node tests/validate.mjs      # controlli statici
node tests/playthrough.mjs   # partite simulate headless
```

Motore ereditato da [La Corona di Mezzanotte](https://github.com/Galiv04/dnd-corona-di-mezzanotte)
e [Il Relais di Lord Gregorio](https://github.com/Galiv04/relais-lord-gregorio).
Guida di produzione: `CLAUDE.md` e `docs/DESIGN.md`.

*Per Daniele. Nessuno resta sul divano per sempre.* 🎨
