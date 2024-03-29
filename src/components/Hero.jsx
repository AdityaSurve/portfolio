import { styles } from "../styles";
import { image } from "../assets";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915EFF]">Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI & ML Enthusiast
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-row items-center justify-center">
        <div className="w-full lg:w-3/4">
          <img src={image} alt="hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
