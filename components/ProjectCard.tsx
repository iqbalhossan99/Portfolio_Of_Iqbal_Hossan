import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail:(id: number | null) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_client_side,
    github_server_side,
    key_techs,
  },
  showDetail,
  setShowDetail
}) => {

  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
       __html: description,
    }
 }

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
        quality="100"
      />
      <p className="my-2 text-center">{name}</p>
      <div className="text-center">   
        <button onClick={() => setShowDetail(id)} className="text-lg bg-gray-300   py-1 px-2 rounded hover:text-green hover:bg-gray-100">Details</button>
      </div>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded md:grid-cols-2 gap-x-12">
          <div>
            {/* <img src={image_path} alt={name} /> */}
            <div className="border-4 border-gray-100">
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
              />
              </div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                target="_blank" rel='noreferrer'
                href={github_client_side}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 "
              >
                <AiFillGithub /> <span> Client</span>
              </a>
              <a
                target="_blank" rel='noreferrer'
                href={github_server_side}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 "
              >
                <AiFillGithub /> <span> Server </span>
              </a>
              <a
                target="_blank" rel='noreferrer'
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 "
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium" dangerouslySetInnerHTML={createMarkup()} />

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200  rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none "
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;