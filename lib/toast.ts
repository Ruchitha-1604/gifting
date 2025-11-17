import toast from "react-hot-toast";

const error = (message: string, durationinMs?: number) => {
  toast.dismiss();
  toast.error(message, {
    duration: durationinMs || 3000,
    style: {
      fontSize: "1rem",
      maxWidth: "100%",
      wordWrap: "break-word",
      whiteSpace: "normal",
      fontFamily: "Roboto, sans-serif",
    },
  });
};

const success = (message: string, durationinMs?: number) => {
  toast.dismiss();
  toast.success(message, {
    duration: durationinMs || 3000,
    style: {
      fontSize: "1rem",
      maxWidth: "100%",
      wordWrap: "break-word",
      whiteSpace: "normal",
      fontFamily: "Roboto, sans-serif",
    },
  });
};

export { error, success };
