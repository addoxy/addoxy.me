type BadgeProps = {
  text: string;
  Logo?: JSX.Element;
};

const Badge = (props: BadgeProps) => {
  const { text, Logo } = props;

  return (
    <>
      {!Logo && (
        <div className="w-fit items-center gap-x-2 rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300">
          {text}
        </div>
      )}
      {Logo && (
        <div className="flex w-fit items-center gap-x-2 rounded-md bg-zinc-800 px-3 py-2 text-zinc-200">
          {Logo}
          {text}
        </div>
      )}
    </>
  );
};

export default Badge;
