import Image from "next/image";
import Link from "next/link";

function Project({ project }) {
  return (
    <div
      key={project.id}
      className={`w-screen h-screen bg-gray-50 flex justify-center items-center `}
    >
      <div className="rounded-md shadow-2xl w-full lg:w-2/4 gap-6 flex flex-col p-8 m-2">
        <div className="h-[100px] sm:h-[300px] w-full relative border ">
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="object-cover sm:object-fill   rounded"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-body font-semibold tracking-wider uppercase text-center  text-black">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 text-center font-semibold">
          {project.liveLink && (
            <Link
              target="_blank"
              href={project.liveLink}
              className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-500 ease-in-out hover:bg-transparent hover:text-black uppercase w-full sm:w-auto text-center"
            >
              SEE LIVE
            </Link>
          )}
          {project.codeLink && (
            <Link
              target="_blank"
              href={project.codeLink}
              className="p-2 md:p-4 rounded-lg ring-1 ring-black transition duration-500 ease-in-out hover:bg-black hover:text-white uppercase w-full sm:w-auto text-center"
            >
              SEE CODE
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
