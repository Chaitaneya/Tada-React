import Lottie from "lottie-react";
import { useRef } from "react";
import catAnimation from "../assets/animations/cat.json";

export default function CatCompanion() {
  const lottieRef = useRef(null);

  return (
    <div
      className="
        fixed bottom-3 left-3
        w-[170px] h-[170px]
        md:w-[200px] md:h-[200px]
        lg:w-[230px] lg:h-[230px]
        z-50
        pointer-events-auto
      "
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={catAnimation}
        loop
        autoplay={false}
        className="w-full h-full"
      />
    </div>
  );
}
