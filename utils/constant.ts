export const APP_NAME = "Values Identifier" as const;

export const APP_DESCRIPTION =
  "The Values Identifier is the first data-driven assessment tool that accurately identifies what matters most to you. Using the extensive Valuegraphics Database and our secure AI technology, the Values Identifier analyzes your answers by accessing millions of data points to create your ultra-unique report." as const;

export const AZURE_BLOB_BASE_URL =
  "https://vivassets.blob.core.windows.net" as const;

export const NAV_LINKS = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Take the Identifier",
    href: "#",
  },
];

export const MENUITEMS_LIST = [
  {
    id: 1,
    slug: "/for-you",
    label: "For You",
    subTabs: [
      {
        id: 1,
        label: "For You",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/for-you`,
        target: "_blank",
      },
      {
        id: 2,
        label: "Coaching",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/coaching/individual`,
        target: "_blank",
      },
    ],
  },
  {
    id: 2,
    slug: "/for-coaches",
    label: "For Coaches",
    subTabs: [
      {
        id: 1,
        label: "For Coaches",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/for-coaches`,
        target: "_blank",
      },
      {
        id: 1,
        label: "Coach Portal Sign In",
        slug: process.env.NEXT_PUBLIC_COACH_PORTAL_URL || "#",
        target: "_blank",
      },
    ],
  },
  // {
  //   id: 2,
  //   slug: "/for-teams",
  //   label: "For Teams",
  //   subTabs: [
  //     {
  //       id: 1,
  //       label: "Coming Soon",
  //       slug: "",
  //     },
  //   ],
  // },
  {
    id: 3,
    label: "Blog",
    slug: `https://blog.valuesidentifier.com/`,
    target: "_blank",
  },
  {
    id: 4,
    label: "About Us",
    slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us`,
    target: "_blank",
    subTabs: [
      {
        id: 1,
        label: "About Values Identifier",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us/about-values-identifier`,
        target: "_blank",
      },
      {
        id: 2,
        label: "The Valuegraphics Project",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us/the-valuegraphics-project`,
        target: "_blank",
      },
    ],
  },
  {
    id: 5,
    label: "Resources",
    slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/resources`,
    target: "_blank",
    subTabs: [
      {
        id: 1,
        label: "The Science Behind Values Identifier",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/resources/the-science-behind-values-identifier`,
        target: "_blank",
      },
      {
        id: 2,
        label: "The Valuegraphics Database",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/resources/the-valuegraphics-database`,
        target: "_blank",
      },
      {
        id: 3,
        label: "56 Global Values",
        slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/resources/56-global-values`,
        target: "_blank",
      },
      {
        id: 4,
        label: "Valuegraphics White Paper",
        slug: `${AZURE_BLOB_BASE_URL}/policies/Valuegraphics-White-Paper.pdf`,
        target: "_blank",
      },
      {
        id: 5,
        label: "Values Identifier White Paper",
        slug: `${AZURE_BLOB_BASE_URL}/policies/Values-Identifier-White-Paper.pdf`,
        target: "_blank",
      },
    ],
  },
  {
    id: 6,
    label: "Support Center",
    slug: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/support-center`,
    target: "_blank",
  },
];

export const BASE_CALENDLY_LINK =
  "https://calendly.com/valuesidentifiercoaching";

export const FOOTER_LINKS = [
  { id: 1, label: "Contact Us", slug: `/support-center` },
  {
    id: 2,
    label: "Connect with a Coach",
    slug: "https://calendly.com/jean-valuesidentifier",
    target: "_blank",
  },
  {
    id: 3,
    label: "FAQ",
    slug: `/support-center`,
  },
  {
    id: 4,
    label: "Coach Portal Sign in",
    slug: `${process.env.NEXT_PUBLIC_COACH_PORTAL_URL}/sign-in`,
    target: "_blank",
  },
];

export const FOOTER_LINKS_FOR_STUDENTS = [
  {
    id: 1,
    label: "Valuegraphics White Paper",
    slug: `${AZURE_BLOB_BASE_URL}/policies/Valuegraphics-White-Paper.pdf`,
    target: "_blank",
  },
  {
    id: 2,
    label: "Values Identifier White Paper",
    slug: `${AZURE_BLOB_BASE_URL}/policies/Values-Identifier-White-Paper.pdf`,
    target: "_blank",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "facebook_icon",
    slug: "https://www.facebook.com/valuesidentifier/",
  },
  {
    id: 2,
    label: "instagram_icon",
    slug: "https://www.instagram.com/valuesidentifier/",
  },
  {
    id: 3,
    label: "linkedin_icon",
    slug: " https://www.linkedin.com/company/values-identifier",
  },
];

export const TERMS_and_PRIVACY_LINKS = [
  {
    id: 1,
    label: "Terms of Service",
    slug: `${AZURE_BLOB_BASE_URL}/policies/Values-Identifier-Terms-of-Service.pdf`,
  },
  {
    id: 2,
    label: "Privacy Policy",
    slug: `${AZURE_BLOB_BASE_URL}/policies/Values-Identifier-Privacy-Policy.pdf`,
  },
];

export const videoUrls = [
  [`${AZURE_BLOB_BASE_URL}/videos/1 Values Identifier.mp4`, 63 * 1000],
  [`${AZURE_BLOB_BASE_URL}/videos/2 Values Indentifer.mp`, 100 * 1000],
];

export const HOME_SLIDES_COUNT = 5;

export const INDIVIDUAL_SLIDES_COUNT = 10;

export const VIV_DATABASE_SLIDES_COUNT = 8;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const APP_TOKEN = "@valueIdentifier/token" as const;

export const ASSESSMENT_AMOUNT = 59.99;

export const defaultRecipient = {
  name: "",
  email: "",
  date: "",
  isClosed: false,
  isEditMode: false,
};
