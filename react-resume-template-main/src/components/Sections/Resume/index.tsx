import { FC, memo } from 'react';

import { education, experience, SectionId, skills } from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        
        {/* EDUCATION */}
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        {/* WORK EXPERIENCE — ✅ ONLY RENDER IF DATA EXISTS */}
        {experience.length > 0 && (
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
        )}

        {/* SKILLS */}
        <ResumeSection title="Skills">
          {/* Skill Categories */}
          <div className="mb-8 flex flex-wrap gap-3">
            {skills.map((group, index) => (
              <span
                key={`${group.name}-${index}`}
                className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-textPrimary"
              >
                {group.name}
              </span>
            ))}
          </div>

          {/* Skill Pills */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map(group =>
              group.skills.map((skill, index) => (
                <span
                  key={`${skill.name}-${index}`}
                  className="rounded-md border border-border bg-surface px-4 py-2 text-sm text-textPrimary text-center"
                >
                  {skill.name}
                </span>
              )),
            )}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
