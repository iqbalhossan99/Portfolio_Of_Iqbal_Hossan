import Head from "next/head";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion"
import { fadeInUp } from "../animation";


const Resume = () => {



  return (
    <div className="px-6 py-2">
      <Head>
        <title>Web Developer | Resume | Iqbal</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Lakshmipur Polytechnic Institute
            </h5>
            <p className="text-sm font-semibold text-gray-400">(2017-2021)</p>
            <p className="my-3">
              I am currently completed Diploma In Electronics Engineering
              from Lakshmipur Polytechnic Institute.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Web Developer at Fiver </h5>
            <p className="text-sm font-semibold text-gray-400">Web Application services (2020 To Present)</p>
            <p className="my-3">{`Actually I am doing this job as a part time freelancer`}</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        {/* Languages */}
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Language & Framework`}</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
        {/* Tools */}
        <div>
          <h5 className="my-3 text-2xl font-bold">{`Tools & Softwares`}</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;