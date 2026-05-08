// Real PRUMO Soalheiro logo (PNG with built-in wordmark)
import Image from "next/image";
import logo from "../../public/brand/logo-prumo.png";

export default function Logo({ height = 56 }) {
  return (
    <Image
      src={logo}
      alt="PRUMO Soalheiro, Lda."
      height={height}
      // width is auto-derived from intrinsic aspect ratio
      className="object-contain w-auto"
      style={{ height: `${height}px` }}
      priority
    />
  );
}
