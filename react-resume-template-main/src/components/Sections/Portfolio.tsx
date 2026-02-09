import { FC, memo } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import { PrimaryButton } from '../Base';

const Portfolio: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Portfolio} className="bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-10 text-2xl font-bold text-gray-900">
          Projects
        </h2>

        <div className="space-y-8">
          {portfolioItems.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="rounded-lg border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              {project.subtitle && (
                <p className="mt-1 text-sm text-gray-500">
                  {project.subtitle}
                </p>
              )}

              {project.description && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {project.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* ✅ CORRECT BUTTON USAGE */}
              {project.githubUrl && (
                <div className="mt-6">
                  <PrimaryButton href={project.githubUrl}>
                    View on GitHub
                  </PrimaryButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

export default Portfolio;
