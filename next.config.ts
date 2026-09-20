import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/project", destination: "/#work", permanent: false },
      { source: "/projects", destination: "/#work", permanent: false },
      { source: "/resume", destination: "/resume/Kapil-Jadhav-Resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
