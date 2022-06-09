import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
    <h6 className="my-3 text-base font-medium">
    Hi! This is Iqbal Hossan. Currently, I have completed my Diploma in Electronics Engineering from Lakshmipur Polytechnic Institute. I have deep interest in Development and also I have completed my MERN Stack Web Development training from Programming Hero. I have 1+ years of experience in Web Development and part freelancer at fiverr.
    </h6>
    <div
      className="flex-grow bg-gray-200 p-4 mt-5"
      style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
    >
      <h2 className="my-3 text-xl font-bold tracking-wide">
        What would I offer!
      </h2>

      <div className="grid gap-6 my-3 md:grid-cols-2">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (
          <div
            className="col-span-2 p-2 bg-white shadow-lg rounded-lg  md:col-span-1 "
            key={service.title}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default index;