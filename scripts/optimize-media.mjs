import { existsSync } from 'node:fs'
import { extname, resolve } from 'node:path'
import sharp from 'sharp'

const input = process.argv[2]

if (!input || !['.jpg', '.jpeg', '.png'].includes(extname(input).toLowerCase())) {
  console.error('Usage: npm run media:optimize -- path/to/photo.jpg')
  process.exit(1)
}

const source = resolve(input)
const output = source.replace(/\.(jpe?g|png)$/i, '.webp')

if (!existsSync(source) || existsSync(output)) {
  console.error('Input is missing or the .webp output already exists. No file was changed.')
  process.exit(1)
}

await sharp(source)
  .rotate()
  .resize({ width: 1400, withoutEnlargement: true })
  .webp({ quality: 76, effort: 5 })
  .toFile(output)

console.log(`Optimized photo: ${output}`)
