import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withSentryConfig(
  nextConfig,
  {
    org: "neurixis-technologies",
    project: "javascript-nextjs",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: true,
  },
  {
    widenClientFileUploads: true, // Corrected from widenClientFileUpload
    // hideSourceMaps removed as it’s not supported in v9; handled automatically
  }
);
