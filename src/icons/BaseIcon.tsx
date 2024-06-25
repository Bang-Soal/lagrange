import React from "react";

interface IconProps {
    color: string;
    size?: number;
}

export function BaseIcon(svg: (props: IconProps) => JSX.Element) {
    return function Icon({ color, size }: IconProps) {
        return svg({ color, size });
    }
}