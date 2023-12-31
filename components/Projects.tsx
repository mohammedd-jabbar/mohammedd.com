"use client";
import { Fragment } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 sm:mmb-8">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, i) => (
          <Fragment key={i}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
