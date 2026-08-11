# 🚪 La Casa che non Finisce

[![Test](https://github.com/Galiv04/casa-che-non-finisce/actions/workflows/test.yml/badge.svg)](https://github.com/Galiv04/casa-che-non-finisce/actions/workflows/test.yml)

> Daniele non risponde da tre giorni. Entrate in casa sua con le chiavi di scorta:
> la porta sparisce dietro di voi, e dentro la casa non finisce più.
> Il suo demone, **Eleinad**, colleziona la voglia di vivere — e stanotte vuole la vostra.

**🎮 Gioca subito: https://galiv04.github.io/casa-che-non-finisce/**

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
- **5 finali**, oltre 30 imprese collezionabili, diario della notte, cronache, capitoli
  rigiocabili ("Rientra nella Casa"), difficoltà Tranquilla/Normale/Incubo.

## Sviluppo

```bash
node tests/validate.mjs      # controlli statici
node tests/playthrough.mjs   # partite simulate headless
```

Motore ereditato da [La Corona di Mezzanotte](https://github.com/Galiv04/dnd-corona-di-mezzanotte)
e [Il Relais di Lord Gregorio](https://github.com/Galiv04/relais-lord-gregorio).
Guida di produzione: `CLAUDE.md` e `docs/DESIGN.md`.

*Per Daniele. Nessuno resta sul divano per sempre.* 🎨
