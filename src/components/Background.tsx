import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export const Background = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: -1,
        },
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.35,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 4000,
            },
            value: 2000,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.1, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
