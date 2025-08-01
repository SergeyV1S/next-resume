import type { ICandidateInfo } from "@models/types";

import { createFetch } from "@shared/api";

export const CandidateInfoSection = async () => {
  const data = await createFetch.fetchISR<ICandidateInfo>("/candidate-info");

  console.log(data.city);

  return <div className=''>d</div>;
};
