import {
  CandidateInfoSidebar,
  CoursesSection,
  EducationSection,
  ProjectSection,
  RelevantActivitySection,
  WorkExperienceSection
} from "./_components";

const Home = () => (
  <div className='border-accent-foreground my-10 rounded-xl border'>
    <div className='grid grid-cols-[30%_1fr] gap-10 p-6'>
      <CandidateInfoSidebar />
      <main className='flex max-h-[calc(100vh-2*40px-2*24px)] flex-col gap-6 overflow-y-auto'>
        <WorkExperienceSection />

        <EducationSection />

        <CoursesSection />

        <RelevantActivitySection />

        <ProjectSection />
      </main>
    </div>
  </div>
);

export default Home;
