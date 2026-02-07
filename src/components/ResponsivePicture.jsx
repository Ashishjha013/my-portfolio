function buildSrcSet(src, widths, format, includeOriginal, originalWidth) {
  const dot = src.lastIndexOf('.');
  const base = dot === -1 ? src : src.slice(0, dot);

  const parts = widths.map((w) => `${base}-${w}.${format} ${w}w`);

  if (includeOriginal && Number.isFinite(originalWidth) && originalWidth > 0) {
    parts.push(`${src} ${originalWidth}w`);
  }

  return parts.join(', ');
}

export function ResponsivePicture({
  src,
  alt,
  width,
  height,
  widths,
  sizes,
  formats = ['avif', 'webp'],
  includeOriginal = true,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  className,
  style,
  imgProps,
  ...rest
}) {
  const resolvedAlt = alt ?? '';
  const resolvedWidths = Array.isArray(widths) ? widths : [];

  const hasWebp = formats.includes('webp');
  const webpSrcSet = hasWebp
    ? buildSrcSet(src, resolvedWidths, 'webp', includeOriginal, width)
    : undefined;

  return (
    <picture {...rest}>
      {formats.includes('avif') && (
        <source
          type="image/avif"
          srcSet={buildSrcSet(src, resolvedWidths, 'avif', includeOriginal, width)}
          sizes={sizes}
        />
      )}

      {hasWebp && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}

      <img
        src={src}
        alt={resolvedAlt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        sizes={sizes}
        srcSet={webpSrcSet}
        className={className}
        style={style}
        {...imgProps}
      />
    </picture>
  );
}
