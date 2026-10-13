interface LogoProps {
  className?: string;
  size?: number;
  alt?: string;
}

export default function Logo({
  className = 'w-10 h-10',
  size = 160,
  alt = 'Yayasan Albakriatul Mudassirin',
}: LogoProps) {
  return (
    <img
      src="/images/logo_icon.png"
      alt={alt}
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      className={`object-contain select-none ${className}`}
    />
  );
}

