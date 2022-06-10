import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import Head from "next/head";
import {motion} from "framer-motion";
import { fadeInUp, stagger } from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState< number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
        <Head>
        <title>Web Developer | Projects | Iqbal</title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {projects.map((project, i) => (
          <motion.div variants={fadeInUp} key={i} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project}  showDetail={showDetail} setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;