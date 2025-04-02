import Link from "next/link";
import { ProjectDetails } from "../utils/data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {ProjectDetails.map((data) => (
          <div key={data.id} className="card bg-neutral text-white shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={data.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {data.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{data.description}</p>
              <div className="card-actions justify-end flex-wrap gap-2">
                <Link href={`${data.href}`} className="badge badge-outline">
                  View Project
                </Link>
                <div className="badge badge-outline">{data.stack}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
