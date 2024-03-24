/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    },
    distDir: 'build',
    trailingSlash: true,
    httpAgentOptions: { keepAlive: true },
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: {
      unoptimized: true,
    },
  

    compiler: {
      removeConsole: {
        exclude: ["error"],
      },
    },
  
  
  };
  

export default nextConfig;