'use client';
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Earth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.9, 3],
      markerColor: [0.1, 0.8, 1], // Customize marker color here
      glowColor: [1, 1, 3],
      opacity: 1,
      offset: [0, 0],
      markers: [
        // longitude latitude
      ],
      onRender: (state: Record<string, unknown>) => {
        // Safely update `phi` for animation
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App flex items-center justify-center z-[10]">
      <canvas
        ref={canvasRef}
        style={{ width: 800, height: 800, maxWidth: '100%', aspectRatio: '1' }}
      />
    </div>
  );
};

export default Earth;
