export const Copyright = () => {
  const now = new Date();

  return (
    <span className="font-inter text-xs text-white">
      &copy; {now.getFullYear()} Codelitt Inc All rights reserved
    </span>
  );
};
