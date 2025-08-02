import type { ICandidateInfo } from "@models/types";

import { createFetch } from "@shared/api";

export const CandidateInfoSidebar = async () => {
  const data = await createFetch.fetchISR<ICandidateInfo>("/candidate-info");

  return <aside className=''>{data.fullName}</aside>;
};
