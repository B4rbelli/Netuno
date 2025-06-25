import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Container principal */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start gap-5`}
      >
        {/* Elemento decorativo à esquerda */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Texto de introdução */}
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white break-words`}>
            {" "}         
            <span className="text-[#915EFF]">Tecnologia que transforma o seu negócio</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 break-words`}
          >
            Na SB Tech & Support, acreditamos que tecnologia só faz sentido quando resolve de verdade. Somos especialistas em infraestrutura de TI, redes, automação e desenvolvimento de soluções sob medida. Atendemos empresas que precisam evoluir seus processos com agilidade, segurança e inovação — sempre com um suporte técnico que realmente funciona.
🚀 Conectamos performance à simplicidade para impulsionar seus resultados.
          </p>
        </div>
      </div>

      {/* Animação do botão de rolagem */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
