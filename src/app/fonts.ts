import localFont from "next/font/local";

export const poppins = localFont({
  src: "./fonts/Poppins-Regular.otf",
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

export const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.otf",
  variable: "--font-poppins-medium",
  display: "swap",
  weight: "500",
});
