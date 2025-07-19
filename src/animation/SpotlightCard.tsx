import React, { useRef } from "react";
import "./SpotlightCard.css";
import {Box, type BoxProps} from "@chakra-ui/react";

interface SpotlightCardProps extends React.PropsWithChildren, BoxProps{
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;

}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
                                                         children,
                                                         className = "",
                                                         spotlightColor = "rgba(255, 255, 255, 0.25)",
                                                         ...props
                                                     }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };

    return (
        <Box {...props}
            ref={divRef}
    onMouseMove={handleMouseMove}
    className={`card-spotlight ${className}`}
>
    {children}
    </Box>
);
};

export default SpotlightCard;
