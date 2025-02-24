const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-6 xl:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
