export type FormErrorMessageProps = {
  message?: string;
};

export const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return <p className="min-h-6 text-base text-red-400">{message}</p>;
};
