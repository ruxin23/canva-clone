"use client";

import { useEditor } from "@/features/editor/hooks/use-editor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { Navbar } from "./navbar";
export const Editor = () => {
    const { init } = useEditor();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            controlsAboveOverlay: true,
            preserveObjectStacking: true,
        });

        init({
            initialCanvas: canvas,
            initialContainer: containerRef.current!,
        })
    }, [init])

    return (
        <div className="h-full flex">
            <Navbar />
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
                    <div className="flex-1 h-full" ref={containerRef}>
                        <canvas ref={canvasRef}></canvas>
                    </div>
                </main>
            </div>
        </div>
    )
}