import { cn } from "@/lib/utils";
import { TypographyParagraph } from "./types";

const Heading: React.FC<TypographyParagraph> = ({ className, children }) => {
  return (
    <h1
      className={cn(
        "font-bold font-helvetica text-[2.5rem] xl:text-[4rem]  leading-[1.2] tracking-[-0.04em] text-popover-text",
        className,
      )}
    >
      {children}
    </h1>
  );
};

const SubHeading: React.FC<TypographyParagraph> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "font-bold font-helvetica text-[32px] leading-[35.2px] xl:text-[56px] xl:leading-[1.1] tracking-[-0.04em] text-popover-text",
        className,
      )}
    >
      {children}
    </h2>
  );
};

const Paragraph: React.FC<TypographyParagraph> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "font-normal font-helvetica text-[16px] leading-[24px] xl:text-[20px] xl:leading-[1.5] text-primary-text",
        className,
      )}
    >
      {children}
    </p>
  );
};

const SubParagraph: React.FC<TypographyParagraph> = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "font-normal font-helvetica text-[1rem] leading-[1.5rem] xl:text-[1.125rem] xl:leading-[1.6875rem] text-primary-text",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Text: React.FC<TypographyParagraph> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "font-bold font-helvetica text-[20px] leading-[23px] xl:text-[24px] xl:leading-[1.3] tracking-[-0.02em]text-primary-text",
        className,
      )}
    >
      {children}
    </p>
  );
};

const SubText: React.FC<TypographyParagraph> = ({ className, children }) => {
  return (
    <p
      className={cn(
        "font-normal font-helvetica text-[14px] leading-[21px] xl:text-[16px] xl:leading-[24px] text-primary-text",
        className,
      )}
    >
      {children}
    </p>
  );
};

export { Heading, SubHeading, Paragraph, SubParagraph, Text, SubText };
