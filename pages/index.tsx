import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import  Head  from "next/head";
import {motion} from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animation";

const index = () => {
  return (
    <motion.div   variants={routeFade}
    initial="hidden"
    animate="visible"
    exit="exit" className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>Web Developer | Portfolio | Iqbal</title>
      </Head>
      {/* about text */}
      <h5 className="my-3 text-base font-medium">
      Hi! This is Iqbal Hossan. Currently, I have completed my Diploma in Electronics Engineering from Lakshmipur Polytechnic Institute. I have deep interest in Development and also I have completed my MERN Stack Web Development training from Programming Hero. I have 1+ years of experience in Web Development and part time freelancer at fiverr.
      </h5>
    <div
      className="flex-grow p-4 mt-5 bg-gray-200"
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
    >
      <h2 className="my-3 text-xl font-bold tracking-wide">
        What would I offer!
      </h2>

      {/* services */}
      <motion.div variants={stagger} initial="initial" animate="animate" className="grid gap-6 my-3 md:grid-cols-2">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (
          <motion.div variants={fadeInUp}
            className="col-span-2 p-2 bg-white rounded-lg shadow-lg md:col-span-1 "
            key={service.title}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>
  );
}

export default index;