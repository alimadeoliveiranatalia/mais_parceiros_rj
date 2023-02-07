/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assertPrefix = "";

let basePath = "/";

if(isGithubActions){
 const repositorio = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

 assertPrefix = `/${repositorio}/`;

 basePath = `/${repositorio}/`;
}

const nextConfig = {
  assetPrefix: assertPrefix,
  basePath: basePath,
  
}

module.exports = nextConfig
