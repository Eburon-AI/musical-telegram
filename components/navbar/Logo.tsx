import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="h-[40px] w-[40px] relative">
        <Image
          src="/images/eburon-estate-logo.png"
          alt="Eburon Estate Logo"
          fill
          sizes="40px"
          priority
          className="object-contain"
        />
      </div>
      <span className="hidden md:block font-bold text-lg">Estate</span>
    </Link>
  );
};

export default Logo;