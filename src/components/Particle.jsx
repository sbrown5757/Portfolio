import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import styles from "@/styles/Home.module.css";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className={styles.tsparticle}
      options={{
        fullScreen: { enable: false },
        style: {
          position: "absolute",
          height: "109%",
          top: "0",
          left: "0",
        },
        background: {
          color: {
            value: "#161b22",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            // attract: {
            //   distance: 100,
            //   factor: 3,
            // },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#6b3dcc",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 3,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 1 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
