import './ShinyText.css';
import React, {type CSSProperties} from "react";
import {Heading} from "@chakra-ui/react";
import {useColorMode} from "@/components/ui/color-mode.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type {SystemProperties} from "@chakra-ui/react/dist/types/styled-system/generated/system.gen";

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    size?: SystemProperties
    style?: CSSProperties;
}

const ShinyText: React.FC<ShinyTextProps> = ({ size, text, style, disabled = false, speed = 5, className = '' }) => {
    const {colorMode} = useColorMode();
    const isDark = colorMode === 'dark';
    const animationDuration = `${speed}s`;

    return (
        <Heading
            className={`${isDark ? "shiny-text-dark" : "shiny-text"} ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration, ...style }}
            fontSize={size}
        >
            {text}
        </Heading>
    );
};

export default ShinyText;