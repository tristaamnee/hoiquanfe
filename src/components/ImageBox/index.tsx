import Image from "next/image";
import React from "react";

interface ImageBoxProps {
  url: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}

function ImageBox({
  url,
  alt,
  width,
  height,
  className = "flex justify-center",
}: ImageBoxProps) {
  return (
    <div className={className}>
      <div className="border-4 inline-block rounded-lg w-4/5">
        <Image
          src={url}
          alt={alt}
          className="object-fit rounded-lg w-full h-auto"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}

export default ImageBox;
