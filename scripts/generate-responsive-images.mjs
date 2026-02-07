import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = path.resolve(process.cwd());

/**
 * Naming convention:
 * - Input: public/foo.webp
 * - Output variants: public/foo-320.webp, public/foo-320.avif
 */
const imageJobs = [
  {
    input: 'public/profile-photo.webp',
    widths: [640, 960, 1200, 1600],
    formats: ['webp'],
  },
  {
    input: 'public/hero-bg.webp',
    widths: [640, 960, 1200, 1600],
    formats: ['webp', 'avif'],
  },
  {
    input: 'public/avatar/dev-avatar.webp',
    widths: [96, 128, 256, 512, 640],
    formats: ['webp', 'avif'],
  },
  {
    input: 'public/projects/wanderlust.webp',
    widths: [640, 960, 1200, 1600],
    formats: ['webp', 'avif'],
  },
  {
    input: 'public/projects/e-commerce.webp',
    widths: [640, 960, 1200, 1600],
    formats: ['webp', 'avif'],
  },
  {
    input: 'public/projects/task-manager.webp',
    widths: [640, 960, 1200, 1600],
    formats: ['webp', 'avif'],
  },
];

function withSuffix(filePath, width, format) {
  const parsed = path.parse(filePath);
  const base = path.join(parsed.dir, `${parsed.name}-${width}`);
  return `${base}.${format}`;
}

async function fileStatOrNull(filePath) {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
}

async function ensureGenerated({ input, widths, formats }) {
  const absInput = path.join(repoRoot, input);
  const inputStat = await fs.stat(absInput);

  const image = sharp(absInput, { sequentialRead: true });
  const metadata = await image.metadata();

  const inputWidth = metadata.width;
  if (!inputWidth) {
    throw new Error(`Unable to read image width for ${input}`);
  }

  for (const width of widths) {
    if (width > inputWidth) continue;

    for (const format of formats) {
      const outRel = withSuffix(input, width, format);
      const absOut = path.join(repoRoot, outRel);

      const outStat = await fileStatOrNull(absOut);
      if (outStat && outStat.mtimeMs >= inputStat.mtimeMs) {
        continue;
      }

      await fs.mkdir(path.dirname(absOut), { recursive: true });

      const pipeline = sharp(absInput, { sequentialRead: true })
        .resize({ width, withoutEnlargement: true })
        .rotate();

      if (format === 'webp') {
        await pipeline.webp({ quality: 78 }).toFile(absOut);
      } else if (format === 'avif') {
        await pipeline.avif({ quality: 50, effort: 4 }).toFile(absOut);
      } else {
        throw new Error(`Unsupported format: ${format}`);
      }

      process.stdout.write(`generated: ${outRel}\n`);
    }
  }
}

async function main() {
  for (const job of imageJobs) {
    await ensureGenerated(job);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
