interface Input extends React.HTMLProps<HTMLInputElement> {
  wrapperClassName?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  type?: "email" | "text" | "password" | "submit" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  otherProps?: any;
}

export type { Input };
