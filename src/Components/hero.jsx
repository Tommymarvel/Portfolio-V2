import { motion } from 'framer-motion';
// import Photo from '../assets/images/WhatsApp_Image_2024-04-08_at_17.20.29_58f5f015-removebg-preview.png';

// import Logo from '../assets/images/logo.svg'

const Hero = () => {
  return (
    <div className="">
      <nav>
        {/* <img src={Logo} alt="" className='w-[100px] object-cover' /> */}
      </nav>
      <motion.div
        className="h-full flex flex-col justify-center items-start mt-20 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <div className="h-full w-full mt-8  ">

          <img
            src={Photo}
            alt=""
            className="h-[100px] w-[100px] object-cover rounded-full "
          />
        </div> */}
        <h1 className="text-4xl font-bold mt-8">
          Hello, I&apos;m Marvellous Ibironke
          <br /> I&apos;m a Software Developer
        </h1>
        <p className="text-xl  mt-6 lg:w-[500px]">
          I value <b>clarity</b>, <b>empathy</b> and <b>integrity</b>, these
          ideals guide my approach to problem solving and life in general
        </p>
        <a href="mailto:ibironketomiwa4@gmail.com?subject=Inquiry&body=Hello,%0D%0AI'm interested in your services.%0D%0ACan you please send me more information? "><motion.button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          
        >
          Let&apos;s chat
        </motion.button></a>
        
      </motion.div>
    </div>
  );
};

export default Hero;
