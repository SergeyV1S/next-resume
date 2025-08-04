import { createFetch } from "@shared/api";
import { formatDateDifference } from "@shared/helpers";
import { SectionContainer } from "@shared/ui";

import { getFullExperienceDuration } from "../_helpers";
import type { IExperience } from "../_models/types";

export const WorkExperienceSection = async () => {
  const workExperienceData = await createFetch.fetchISR<IExperience[]>("/experience");

  const allExperienceDuration = getFullExperienceDuration(workExperienceData);

  return (
    <SectionContainer title='Опыт работы' meta={allExperienceDuration}>
      {workExperienceData.map((experienceItem) => (
        <div key={experienceItem.uid} className='flex items-center gap-2'>
          <div className=''>
            {formatDateDifference(experienceItem.endDate, experienceItem.startDate)}
          </div>
          <div className=''></div>
        </div>
      ))}
    </SectionContainer>
  );
};
