export function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  sizes,
  srcSet,
  className,
  style,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt ?? ''}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      className={className}
      style={style}
      {...rest}
    />
  );
}
