/* Assembla js/campaign.js dai draft (uso di produzione, una tantum ma ripetibile):
   header (ITEMS) + blocchi scene + CAMPAIGN + footer (CHAPTERS, DIARY_FLAGS, WORLD_MAP).
   Uso: node tests/assemble.mjs */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = f => readFileSync(join(root, f), 'utf8');

const parts = [
  read('drafts/campaign-header.js'),
  read('drafts/scene-A.js'),
  read('drafts/scene-B.js'),
  read('drafts/scene-C.js'),
  read('drafts/scene-D.js'),
  read('drafts/scene-E.js'),
  read('drafts/scene-HUB.js'),
  `\n/* ============ LA CAMPAGNA COMPLETA ============ */\nconst CAMPAIGN = Object.assign({}, SCENE_A, SCENE_B, SCENE_C, SCENE_D, SCENE_E, SCENE_HUB);\n`,
  read('drafts/campaign-footer.js'),
];

/* GUARDIA ANTI-DISASTRO (ago 2026). In questo repo i draft si erano scollati dal
   gioco: js/campaign.js aveva 248 scene, i draft 184. Lanciare l'assemble avrebbe
   cancellato 64 scene in silenzio. Da ora si rifiuta di scrivere se il risultato
   perde scene rispetto al file che sta per sovrascrivere. */
function contaScene(testo) {
  return (testo.match(/^  [a-z0-9_]+: \{$/gm) || []).length;
}
const nuovo = parts.join('\n');
const dest = join(root, 'js/campaign.js');
let vecchio = '';
try { vecchio = readFileSync(dest, 'utf8'); } catch (e) {}
const nNuovo = contaScene(nuovo), nVecchio = contaScene(vecchio);
if (vecchio && nNuovo < nVecchio) {
  console.error(`\n❌ RIFIUTO DI SCRIVERE: i draft producono ${nNuovo} scene, il file attuale ne ha ${nVecchio}.`);
  console.error(`   Perderesti ${nVecchio - nNuovo} scene. I draft sono scollati dal gioco: vanno`);
  console.error(`   rigenerati dal file vero prima di poter riusare la pipeline.\n`);
  process.exit(1);
}
writeFileSync(dest, nuovo);
console.log(`✔ js/campaign.js assemblato: ${nuovo.length} caratteri, ${nNuovo} scene` +
  (vecchio && nNuovo > nVecchio ? ` (+${nNuovo - nVecchio} rispetto a prima)` : ''));
