import { useState } from "react";
import { Blurhash } from "react-blurhash";
import Image from "next/image";
import { IPostImageProps } from "@/types/props";

export default function PostImage({ post }: IPostImageProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <>
            <Image 
                loading='lazy'
                src={post.postImage} 
                alt={`${post.username}`} 
                layout="fill" 
                objectFit='cover'
                onLoadingComplete={() => setIsImageLoaded(true)}
                style={{
                    opacity: isImageLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    zIndex: isImageLoaded ? 1 : -1,
                }}
            />
            {
                <Blurhash
                    hash={post.blurHash ?? "LEHV6nWB2yk8pyo0adR*.7kCMdnj"}
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        opacity: isImageLoaded ? 0.5 : 1,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            }
        </>
    )
}