/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  assetPrefix: ".",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
}

export default nextConfig;
