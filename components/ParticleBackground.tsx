import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // 👇 override broken TS types once here
  const SafeParticles = Particles as any;

  return (
    <SafeParticles
      particlesInit={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false, // This is good, keeps it contained.
        fpsLimit: 60,
        background: { color: "#1D1D1F" }, // Match the new main background color
        particles: {
          number: { value: 20 }, // Reduced significantly
          color: { value: ["#2A2A2D", "#3D3D40"] }, // Subtler colors
          size: { value: { min: 0.5, max: 1.5 } }, // Smaller and less varied
          move: { enable: true, speed: 0.2, direction: "none" }, // Reduced speed
          opacity: { value: 0.2 }, // Reduced opacity
          links: { enable: false }
        }
      }}
    />
  );
}
