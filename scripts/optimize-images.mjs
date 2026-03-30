/**
 * Responsive AVIF + WebP + JPEG (mobile-first). Run: npm run optimize-images
 */
import sharp from 'sharp'
import path from 'path'
import { unlink, rename } from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assets = path.join(__dirname, '..', 'public', 'assets')

function jpegQualityForWidth(w) {
  return w >= 1200 ? 72 : w >= 900 ? 76 : w >= 800 ? 78 : 80
}

function webpQualityForWidth(w) {
  return w >= 1200 ? 64 : w >= 900 ? 68 : w >= 800 ? 72 : w >= 665 ? 76 : 78
}

function avifQualityForWidth(w) {
  return w >= 1200 ? 40 : w >= 900 ? 44 : w >= 800 ? 48 : w >= 665 ? 52 : 54
}

/** @type {{ input: string, widths: number[], base: string }[]} */
const sets = [
  // Middle width (~800–900px) covers common mobile 2× DPR without jumping to the 2× layout asset.
  // 1024w: ~500px column × 2 DPR ≈ 1008px — fills gap between 1000w and 1330w (Lighthouse “oversized” fix)
  { input: 'heroImage.jpg', widths: [665, 800, 1000, 1024, 1330], base: 'heroImage' },
  { input: 'tidyzon_vehicle_02.jpg', widths: [525, 800, 1050], base: 'tidyzon_vehicle_02' },
  // 800w: ~360–400px slot × 2 DPR lands between 606 and 900 (saves vs jumping to 900.webp)
  { input: 'tidyzon_cleaner_01.jpg', widths: [606, 800, 900, 1212], base: 'tidyzon_cleaner_01' },
  { input: 'newimage.jpg', widths: [606, 800, 900, 1212], base: 'newimage' },
  // About / Contact / Services page images (match layout + 2× DPR)
  { input: 'discover.jpg', widths: [512, 768, 1024], base: 'discover' },
  { input: 'contactImage.jpg', widths: [480, 960, 1280, 1536], base: 'contactImage' },
  { input: 'trashbin.jpg', widths: [350, 700, 1050], base: 'trashbin' },
]

async function writeTmpThenRename(tmp, finalPath) {
  await unlink(finalPath).catch(() => {})
  await rename(tmp, finalPath)
}

async function emitVariant(inputPath, width, base, ext) {
  const out = path.join(assets, `${base}-${width}.${ext}`)
  const tmp = `${out}.tmp`
  const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true })
  if (ext === 'avif') {
    await pipeline
      .avif({ quality: avifQualityForWidth(width), effort: 6 })
      .toFile(tmp)
  } else if (ext === 'webp') {
    await pipeline.webp({ quality: webpQualityForWidth(width), effort: 6 }).toFile(tmp)
  } else {
    await pipeline.jpeg({ quality: jpegQualityForWidth(width), mozjpeg: true }).toFile(tmp)
  }
  await writeTmpThenRename(tmp, out)
}

async function run() {
  for (const set of sets) {
    const inputPath = path.join(assets, set.input)
    for (const w of set.widths) {
      await emitVariant(inputPath, w, set.base, 'avif')
      await emitVariant(inputPath, w, set.base, 'webp')
      await emitVariant(inputPath, w, set.base, 'jpg')
      console.log('OK', set.base, w, 'avif + webp + jpg')
    }
  }

  const oldFlatWebp = ['heroImage.webp', 'tidyzon_vehicle_02.webp', 'tidyzon_cleaner_01.webp', 'newimage.webp']
  for (const f of oldFlatWebp) {
    await unlink(path.join(assets, f)).catch(() => {})
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
