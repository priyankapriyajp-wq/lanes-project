import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";

const projects = [
  {
    href: "/projects/lunarr",
    imageSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69dfd651ea45c5b1d9a99739_project-img-01.avif",
    logoSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69c1c97acd725141e70c8f57_project-logo-05.svg",
    title: "Lunar+",
  },
  {
    href: "/projects/clonify",
    imageSrc:
      "https://www.findingtheuniverse.com/wp-content/uploads/2021/05/Tree-New-Mexico_by_Laurence-Norah.jpg",
    logoSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69c1c6146a8fdf974debd13f_project-logo-02.svg",
    title: "Clonify",
  },
  {
    href: "/projects/grotesks",
    imageSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69dfd8d0bddb9318746b9bd0_project-img-03.avif",
    logoSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69c1c724be6d32b6ed7b8dc7_project-logo-03.svg",
    title: "Grotesks",
  },
  {
    href: "/projects/zypher-r",
    imageSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69dfddea5dacded34de41121_project-img-04.avif",
    logoSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69c1c97acd725141e70c8f57_project-logo-05.svg",
    title: "Zypher®",
  },
  {
    href: "/projects/blob",
    imageSrc:
      "https://www.maxfosterphotography.com/images/xl/Rise-Above.jpg",
    logoSrc:
      "https://c.animaapp.com/mpa3ncljorJ2I2/assets/69c1c97acd725141e70c8f57_project-logo-05.svg",
    title: "Blob",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 md:gap-y-12 md:px-8">
        <SectionHeader
          title="Projects."
          description="Every pixel comes from a clear strategy built to help you grow."
          href="/projects"
          linkText="See all"
          linkVariant="w-[85px]"
        />

        <div role="list" className="flex flex-col gap-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              imageSrc={project.imageSrc}
              logoSrc={project.logoSrc}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

