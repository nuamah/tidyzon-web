/**
 * Responsive WebP + JPEG at 1× and 2× display widths (mobile-first).
 * Keep master sources (e.g. heroImage.jpg) in public/assets; run: npm run optimize-images
 */
import sharp from 'sharp'
import path from 'path'
import { unlink, rename } from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assets = path.join(__dirname, '..', 'public', 'assets')

const WEBP_Q = 82
const JPEG_Q = 82

/** @type {{ input: string, widths: number[], base: string }[]} */
const sets = [
  { input: 'heroImage.jpg', widths: [665, 1330], base: 'heroImage' },
  { input: 'tidyzon_vehicle_02.jpg', widths: [525, 1050], base: 'tidyzon_vehicle_02' },
  { input: 'tidyzon_cleaner_01.jpg', widths: [606, 1212], base: 'tidyzon_cleaner_01' },
  { input: 'newimage.jpg', widths: [606, 1212], base: 'newimage' },
]

async function writeTmpThenRename(tmp, finalPath) {
  await unlink(finalPath).catch(() => {})
  await rename(tmp, finalPath)
}

async function emitVariant(inputPath, width, base, ext) {
  const out = path.join(assets, `${base}-${width}.${ext}`)
  const tmp = `${out}.tmp`
  if (ext === 'webp') {
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_Q, effort: 6 })
      .toFile(tmp)
  } else {
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: JPEG_Q, mozjpeg: true })
      .toFile(tmp)
  }
  await writeTmpThenRename(tmp, out)
}

async function run() {
  for (const set of sets) {
    const inputPath = path.join(assets, set.input)
    for (const w of set.widths) {
      await emitVariant(inputPath, w, set.base, 'webp')
      await emitVariant(inputPath, w, set.base, 'jpg')
      console.log('OK', set.base, w, 'webp + jpg')
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
