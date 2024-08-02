import { LinkTertiary } from './link';
import Badge from './badge';

const ExperienceCard = (props) => {
  const {
    role,
    companyName,
    link,
    duration: { from, to },
    description,
    tags,
  } = props;

  return (
    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      <h3
        aria-label={`${from} to ${to}`}
        className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
      >
        {`${from} — ${to}`}
      </h3>
      <div className='z-10 sm:col-span-6'>
        <h4 className='font-medium leading-snug text-slate-200'>
          <div>
            <LinkTertiary
              href={link}
              bubbleUp={true}
              rel='noreferrer'
              target='_blank'
              ariaLabel={`${role} · ${companyName}`}
            >{`${role} · ${companyName}`}</LinkTertiary>
          </div>
        </h4>
        <p className='mt-2 text-sm leading-normal'>{description}</p>
        {!!tags.length && (
          <ul className='mt-2 flex flex-wrap'>
            {tags.map((tag, index) => (
              <li key={index} className='mr-1.5 mt-2'>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
