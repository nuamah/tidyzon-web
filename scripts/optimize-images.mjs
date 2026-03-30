/**
 * Resize + WebP for hero + marketing images (~2× mobile display width).
 * Photo fallbacks use JPEG. Re-run after replacing sources in public/assets.
 * For vehicle/cleaner, source PNGs can be re-downloaded from production if needed.
 */
import sharp from 'sharp'
import path from 'path'
import { unlink, rename } from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assets = path.join(__dirname, '..', 'public', 'assets')

const jobs = [
  { input: 'heroImage.jpg', width: 1330, webp: 'heroImage.webp', out: 'heroImage.jpg', format: 'jpeg' },
  {
    input: 'tidyzon_vehicle_02.jpg',
    width: 1050,
    webp: 'tidyzon_vehicle_02.webp',
    out: 'tidyzon_vehicle_02.jpg',
    format: 'jpeg',
  },
  {
    input: 'tidyzon_cleaner_01.jpg',
    width: 1212,
    webp: 'tidyzon_cleaner_01.webp',
    out: 'tidyzon_cleaner_01.jpg',
    format: 'jpeg',
  },
  { input: 'newimage.jpg', width: 1212, webp: 'newimage.webp', out: 'newimage.jpg', format: 'jpeg' },
]

async function writeResized(inputPath, width, format, destPath) {
  const tmp = `${destPath}.tmp`
  const pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true })
  if (format === 'jpeg') {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp)
  } else {
    await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(tmp)
  }
  await unlink(destPath).catch(() => {})
  await rename(tmp, destPath)
}

async function run() {
  for (const j of jobs) {
    const inputPath = path.join(assets, j.input)
    const outWebp = path.join(assets, j.webp)
    const outDest = path.join(assets, j.out)

    const tmpWebp = `${outWebp}.tmp`
    await sharp(inputPath)
      .resize({ width: j.width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(tmpWebp)
    await unlink(outWebp).catch(() => {})
    await rename(tmpWebp, outWebp)

    await writeResized(inputPath, j.width, j.format, outDest)

    console.log('OK', j.input, '→', j.webp, '+', j.out)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
