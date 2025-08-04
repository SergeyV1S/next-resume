import {
  CandidateInfoSidebar,
  CoursesSection,
  EducationSection,
  ProjectSection,
  RelevantActivitySection,
  WorkExperienceSection
} from "./_components";

const Home = () => (
  <div className='border-accent-foreground my-10 grid grid-cols-[30%_1fr] gap-10 rounded-xl border'>
    <CandidateInfoSidebar />
    <main className='flex flex-col gap-6 p-6 pl-0'>
      <WorkExperienceSection />

      <EducationSection />

      <CoursesSection />

      <RelevantActivitySection />

      <ProjectSection />
    </main>
  </div>
);

export default Home;
