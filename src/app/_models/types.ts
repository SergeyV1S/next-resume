export interface ISocialMedia {
  uid: string;
  mediaName: string;
  title: string;
  link: string;
}

export interface IContacts {
  phone: string;
  mail: string;
  socialMedia: ISocialMedia[];
}

export interface ICandidateInfo {
  fullName: string;
  post: string;
  birthday: number; // timestamp
  city: string;
  contacts: IContacts;
}

export interface ICourse {
  uid: string;
  endDate: number; // timestamp
  title: string;
  by: string;
}

export interface IEducation {
  uid: string;
  university: string;
  direction: string;
  branch: string;
  startDate: number; // timestamp
  endDate: number; // timestamp
}

export interface IResponsibility {
  uid: string;
  title: string;
}

export interface IExperience {
  uid: string;
  company: string;
  post: string;
  responsibilities: IResponsibility[];
  startDate: number; // timestamp
  endDate: number; // timestamp
}

export interface IProject {
  uid: string;
  title: string;
  description?: string;
  link?: string;
}

export interface IRelevantActivity {
  uid: string;
  title: string;
  link: string;
  date: number; // timestamp
}

export interface ISkills {
  general: string[];
  technical: string[];
}

export type CandidateData = {
  info: ICandidateInfo;
  courses: ICourse[];
  eduaction: IEducation[];
  experience: IExperience[];
  projects: IProject[];
  relevantActivity: IRelevantActivity[];
  skills: ISkills;
};
