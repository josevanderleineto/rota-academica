import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../../.."),
  allowedDevOrigins: ["192.168.100.87", "localhost:3000"],
};

export default nextConfig;
