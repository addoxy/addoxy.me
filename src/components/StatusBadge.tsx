import { BusyIcon, CheckIcon } from './Icons';

type StatusBadgeProps = {
  available: boolean;
};

const StatusBadge = (props: StatusBadgeProps) => {
  const { available } = props;

  return (
    <div className="flex w-fit items-center gap-x-2 rounded-full border border-sky-400 bg-gradient-to-r from-sky-800 to-sky-700 px-3 py-2">
      {available && (
        <>
          <CheckIcon className="size-3.5 text-zinc-200" />
          <p className="text-zinc-100">Available for work</p>
        </>
      )}
      {!available && (
        <>
          <BusyIcon className="size-3.5 text-zinc-200" />
          <p className="text-zinc-100">Busy with work</p>
        </>
      )}
    </div>
  );
};

export default StatusBadge;
