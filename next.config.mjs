/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/AboutUs",
        destination: "/about",
        permanent: true, // 301 redirect
      },
      {
        source: "/ContactUs",
        destination: "/contact",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
