/** @type {import('next').NextConfig} */
const nextConfig = {    
    webpack: (config, { isServer }) => {
        if (isServer) {
          // Fix react-pdf referencing canvas in SSR
          config.resolve.alias.canvas = false;
        }
        config.resolve.alias.encoding = false;
        return config;
      },
};

export default nextConfig;
