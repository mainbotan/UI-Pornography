'use client';

import Modules from "./slides/modules/modules";
import PresentationCanvas from "./slides/presentation-canvas/canvas";
import RaysCanvas from "./slides/rays-canvas/canvas";

export default function Page() {
    return (
        <>
            <PresentationCanvas />
            <Modules />
            <RaysCanvas />
            <Modules />
        </>
    );
}