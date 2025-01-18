import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  useEffect(() => {
    let currentScroll = 0;
    let requestId;

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      // eslint-disable-next-line no-unused-vars
      const scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        const initialPos = initialPositions[index];

        // Calculating movement in both X and Y direction with dynamic movement
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 300; // Horizontal movement
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40; // Vertical movement

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        // Apply transformation with smooth transition
        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.2s ease-out";
      });

      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-gradient-to-r from-pink-800 to-orange-800 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 md:opacity-30"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-blue-800 to-purple-800 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 md:opacity-30 hidden sm:block"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-gradient-to-r from-teal-800 to-cyan-800 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 md:opacity-30"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute -bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-yellow-800 to-red-800 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-20 hidden sm:block"
        ></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;