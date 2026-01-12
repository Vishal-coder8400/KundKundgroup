import sanityClient from "@sanity/client";
const projectId = process.env.NEXT_PUBLIC_SANITY_APP;
export default sanityClient({
  projectId,
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
