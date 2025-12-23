import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import NETS from "vanta/dist/vanta.net.min";

const VantaBackground = ({ theme }) => {
  const ref = useRef(null);
  const effect = useRef(null);

  useEffect(() => {
    if (effect.current) {
      effect.current.destroy();
      effect.current = null;
    }

    if (!ref.current) return;

    if (theme.id === "chit") {
      effect.current = CLOUDS({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        skyColor: 0xff8c42,
        cloudColor: 0xffc37d,
        cloudShadowColor: 0xff7a18,
        sunColor: 0xffae42,
        sunGlareColor: 0xffd194,
        sunlightColor: 0xffd194,
        speed: 0.6,
      });
    }

    if (theme.id === "chat") {
      effect.current = NETS({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundColor: 0x0b1020,
        color: 0x6ee7ff,
        points: 10,
        maxDistance: 24,
        spacing: 18,
      });
    }

    return () => {
      if (effect.current) {
        effect.current.destroy();
        effect.current = null;
      }
    };
  }, [theme.id]);

  return (
    <div
      ref={ref}
      className="fixed inset-0"
      style={{
        zIndex: -20,   // IMPORTANT
      }}
    />
  );
};

export default VantaBackground;
