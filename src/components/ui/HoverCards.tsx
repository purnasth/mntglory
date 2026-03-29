const HoverCards = () => {
  return (
    <>
      <div className="group relative w-full cursor-pointer overflow-hidden">
        <div className="absolute inset-0 z-10 size-full outline outline-1 -outline-offset-[10px] outline-white transition-all duration-500 ease-linear group-hover:-outline-offset-[30px] group-hover:outline-white/50" />
        <img
          src="https://jijivishanepal.com/wp-content/themes/yootheme/cache/b4/jijivisha-nepal-sustainable-clothing-natural-dyeing-fibers-b47708b9.webp"
          alt="Deluxe Room"
          className="h-96 w-full object-cover shadow-lg transition-all duration-500 ease-linear group-hover:scale-110 md:h-[28rem]"
          draggable="false"
        />
        <div className="pointer-events-none absolute inset-0 z-0 size-full bg-gradient-to-t from-black/60 to-black/0 opacity-70 transition-all duration-500 ease-linear group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/50 group-hover:opacity-100" />
        <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-center p-4 text-center text-white">
          <div className="max-w-sm translate-y-56 px-4 text-white transition-all duration-500 ease-linear group-hover:translate-y-0">
            <h3 className="mb-24 scale-110 text-xl font-medium transition-all duration-500 ease-linear group-hover:mb-3 group-hover:scale-100">
              Quality Education
            </h3>
            <p className="line-clamp-2 text-xs opacity-0 transition-all duration-[550ms] ease-linear group-hover:opacity-100">
              We provide a comprehensive curriculum that fosters critical
              thinking, creativity, and holistic development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCards;
