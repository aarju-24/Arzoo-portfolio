import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description } = aboutData;

  return (
    <Section
      sectionId={SectionId.About}
      className="bg-neutral-50 text-gray-900"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold text-blue-600">
          About
        </h2>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>
            I’m a data-focused problem solver with a strong foundation in statistics, 
            machine learning, and analytics.
          </p>

          <p>
            I enjoy transforming raw data into clear insights, building reproducible 
            pipelines, and validating models with real-world constraints like class 
            imbalance and business KPIs.
          </p>

          <p>
            My work spans marketing analytics, fraud detection, and financial time-series analysis.
          </p>
        </div>

      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
