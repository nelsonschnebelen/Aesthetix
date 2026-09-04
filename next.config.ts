import type { NextConfig } from "next";

/**
 * `STATIC_EXPORT=1 npm run build` emits a plain folder of HTML in `out/` that
 * any static host will serve — drag-and-drop, S3, whatever. The default build
 * is unchanged and still uses the Next runtime, so the Netlify repo deploy
 * keeps image optimisation.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? ({ output: "export", trailingSlash: true } as const)
    : {}),

  turbopack: {
    root: process.cwd(),
  },

  images: {
    // There is no image server behind a static export, so images ship as
    // authored. Every source is already sized: remote URLs carry width
    // parameters and the local files in public/img are pre-resized.
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
