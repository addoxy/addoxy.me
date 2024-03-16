type BadgeProps = {
  text: string;
};

const Badge = (props: BadgeProps) => {
  const { text } = props;

  return (
    <div className="w-fit items-center gap-x-2 rounded-md bg-zinc-900 px-2.5 py-1.5 text-zinc-200">
      {text}
    </div>
  );
};

export default Badge;
