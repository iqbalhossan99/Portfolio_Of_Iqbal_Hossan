import { IconType } from "react-icons"

export interface Service{
    title: string,
    about: string,
    Icon: IconType
}

export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
  }
  
  export interface IProject {
    id: number,
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_client_side: string;
    github_server_side: string;
    category: Category[];
    key_techs: string[];
  }
  
  export type Category = "react" |"next" | "node" | "express" | "mongo";

  export interface Blogs {
    id: number,
    title: string;
    description: string;
    image_path: string;
  }