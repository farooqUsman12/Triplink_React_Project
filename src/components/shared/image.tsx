import NextImage from "next/image";
import type { ImageProps } from "next/image";

const Image = ({ src, alt, width, height, style, fill }: ImageProps) => (
    src ? <NextImage
        style={style}
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={`${src}`}
        fill={fill}
        sizes={"100vw"}
    />
        : null
);

export default Image;