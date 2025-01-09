import classNames from "classnames";
import type { PropsWithChildren } from "react";

import { FormErrorMessage, FormErrorMessageProps } from "./FormErrorMessage";

type FormFieldProps = PropsWithChildren & {
  label: string;
  formId: string;
  className?: string;
  errorMessage?: FormErrorMessageProps["message"];
};

export const FormField = ({
  label,
  formId,
  children,
  className,
  errorMessage,
}: FormFieldProps) => {
  return (
    <div className={classNames("w-full flex flex-col gap-0.5", className)}>
      <label htmlFor={formId} className="w-min text-dark-slate text-lg">
        {label}
      </label>

      {children}

      <FormErrorMessage message={errorMessage} />
    </div>
  );
};
