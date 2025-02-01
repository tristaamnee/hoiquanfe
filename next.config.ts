import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

module.exports = withNextIntl(nextConfig);

export default nextConfig;
