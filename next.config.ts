import type { NextConfig } from "next";
import CompressionPlugin from "compression-webpack-plugin";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  // to be removed if app is hosted by nextjs server
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "./", "node_modules", "@uswds", "uswds", "packages"),
    ],
  },
   webpack: (config, { isServer }) => {
      if (!isServer) {
        config.plugins.push(new CompressionPlugin());
      }
      return config
    }
};

export default nextConfig;
