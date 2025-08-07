import {Box, type BoxProps, Image} from "@chakra-ui/react";
import {useState} from "react";

type ProgressiveImageType = BoxProps &{
    src: string;
    alt?: string;

}

export function ProgressiveImage({src, alt,...props}: ProgressiveImageType) {
    const [loaded, setLoaded] = useState(false);
    return (
        <Box {...props}>
            <Image
            position={"absolute"}
            w={"full"}
            h={"full"}
            objectFit={"cover"}
            filter={"blur(20px)"}
            transition="opacity 0.3s"
            opacity={loaded ? 0 : 1}
            />
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                transition="opacity 0.3s"
                opacity={loaded ? 1 : 0}
            />
        </Box>
    )
}