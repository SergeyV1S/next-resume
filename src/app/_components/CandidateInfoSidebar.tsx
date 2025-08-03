import { MailIcon, PhoneIcon } from "lucide-react";

import type { ICandidateInfo, ISkills } from "@models/types";
import { differenceInCalendarYears } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { createFetch } from "@shared/api";
import { cn } from "@shared/lib";
import { Typography, typographyVariants } from "@shared/ui";

export const CandidateInfoSidebar = async () => {
  const candidateInfo = await createFetch.fetchISR<ICandidateInfo>("/candidate-info");
  const candidateSkills = await createFetch.fetchISR<ISkills>("/skills");

  const age = differenceInCalendarYears(new Date(), new Date(candidateInfo.birthday));

  return (
    <aside className='bg-sidebar-accent rounded-l-xl p-6'>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <div className='flex items-center justify-center'>
            <Image className='size-auto' src='/profile.png' alt='photo' width={166} height={222} />
          </div>
          <Typography variant='title_h3' tag='h1'>
            {candidateInfo.fullName.toUpperCase()}
          </Typography>
        </div>
        <div className='space-y-2'>
          <Typography variant='paragraph_16_medium'>
            Возраст: <span className={typographyVariants()}>{age}</span>
          </Typography>
          <Typography variant='paragraph_16_medium'>
            Должность: <span className={typographyVariants()}>{candidateInfo.post}</span>
          </Typography>
          <Typography variant='paragraph_16_medium'>
            Город: <span className={typographyVariants()}>{candidateInfo.city}</span>
          </Typography>
        </div>

        <SidebarInfoWithTitle title='Контакты'>
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <PhoneIcon size={16} />
              <Link href={`tel:${candidateInfo.contacts.phone}`}>
                {candidateInfo.contacts.phone}
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <MailIcon size={16} />
              <Link href={`mailto:${candidateInfo.contacts.mail}`}>
                {candidateInfo.contacts.mail}
              </Link>
            </div>
            {candidateInfo.contacts.socialMedia.map((item) => (
              <div className='flex items-center gap-2' key={item.uid}>
                <PhoneIcon size={16} />
                <Link href={item.link} target='_blank' rel='noopener noreferrer'>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </SidebarInfoWithTitle>

        <SidebarInfoWithTitle title='Навыки'>
          <SidebarSkills title='Общие' skills={candidateSkills.general} />
          <SidebarSkills title='Профессиональные' skills={candidateSkills.technical} />
        </SidebarInfoWithTitle>
      </div>
    </aside>
  );
};

interface ISidebarInfoWithTitleProps extends React.ComponentProps<"div"> {
  title: string;
}

const SidebarInfoWithTitle = ({
  title,
  className,
  children,
  ...props
}: ISidebarInfoWithTitleProps) => (
  <div className={cn("space-y-4", className)} {...props}>
    <div className='rounded border p-4'>
      <Typography variant='title_h3' tag='h2'>
        {title}
      </Typography>
    </div>
    {children}
  </div>
);

interface ISidebarSkillsProps extends React.ComponentProps<"ul"> {
  title: string;
  skills: string[];
}

const SidebarSkills = ({ skills, title, className, ...props }: ISidebarSkillsProps) => (
  <>
    <Typography>{title}</Typography>
    <ul className={cn("space-y-2", className)} {...props}>
      {skills.map((skill) => (
        <li className='ml-1 flex items-center gap-2' key={skill}>
          <div className='bg-accent-foreground size-1 rounded-full' />
          {skill}
        </li>
      ))}
    </ul>
  </>
);
