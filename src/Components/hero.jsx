import { motion } from 'framer-motion';
import Photo from '../assets/images/WhatsApp_Image_2024-04-08_at_17.20.29_58f5f015-removebg-preview.png';


const Hero = () => {
  return (
    <div>
      <motion.div
        className="h-full flex flex-col justify-center items-start mt-20 ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full mt-8  ">

          <img
            src={Photo}
            alt=""
            className="h-[100px] w-[100px] object-cover rounded-full "
          />
        </div>
        <h1 className="text-4xl font-bold mt-8">
          I Build the Future.
          <br /> Let&apos;s Create Something Together.
        </h1>
        <p className="text-xl  mt-6">
          I&apos;m <strong>Marvellous</strong>, a passionate developer excited
          to collaborate on your next project.
        </p>
        <motion.button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Let&apos;s chat
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
