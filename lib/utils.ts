import Cookies from "js-cookie";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Toast } from ".";
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSlides(
  count: number,
  path: string,
  extension?: string,
  layout?: { id: number; width: number; height: number }[]
): { id: number; url: string; width?: number; height?: number }[] {
  let images = [];
  images = Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    url: `${path}${
      index + 1 >= 10
        ? `image_${index + 1}.${extension ? `${extension}` : "png"}`
        : `image_0${index + 1}.${extension ? `${extension}` : "png"}`
    }`,
  }));
  if (layout) {
    images = images.map((image, index) => {
      return {
        ...image,
        width: layout[index].width,
        height: layout[index].height,
      };
    });
  }
  return images;
}

export const axiosError = (
  error: any,
  push?: (url: string) => Promise<boolean>
) => {
  let message = "Something went wrong! Try again";
  if (error.response) {
    message =
      error.response.data.error ||
      error.response.data.message ||
      "Something went wrong!, Try again";
  }
  Toast.error(message);
};

export const getHash = (val: string): string => {
  return CryptoJS.SHA256(val.toLowerCase()).toString(CryptoJS.enc.Hex);
};

const generateFbp = (): string => {
  const subdomainIndex = 1;
  const creationTime = Date.now();
  const randomNumber = Math.floor(Math.random() * 1_000_000_000);
  return `fb.${subdomainIndex}.${creationTime}.${randomNumber}`;
};

export const getFbp = (): string | null => {
  const fbp = Cookies.get("_fbp");
  if (fbp) {
    return fbp;
  } else {
    const newFbp = generateFbp();
    Cookies.set("_fbp", newFbp, { expires: 730 });
    return newFbp;
  }
};

export const getPartneroAffiliateId = () => {
  return Cookies.get("partnero_partner");
};

export const getValuesIdentifierAppLink = (baseUrl?: string): string => {
  const affiliateId = getPartneroAffiliateId();
  const base = baseUrl
    ? baseUrl
    : process.env.NEXT_PUBLIC_VALUES_IDENTIFIER_APP!;
  return affiliateId ? `${base}?aff=${affiliateId}` : base;
};

export const getFbc = (): string | undefined => {
  const fbc = Cookies.get("_fbc");
  return fbc;
};
