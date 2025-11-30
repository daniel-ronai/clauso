import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* existing config options */
    reactCompiler: true,

    images: {
        domains: ["img.clerk.com"], // allow external images from Clerk
    },
};

export default nextConfig;
