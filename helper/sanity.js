import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "91aud97t",
  dataset: "production",
  token:
    "skQbmDjDJBctQfqYfWOFSVMLLinMRAMoRNZdDR0GMnLB1ivZSXsLT2awPZ6ljJwnq1l1PCgULdLwd4tRYZHdalcz4BnxBJ2tlnZkWr4O8HLzfF9gLNsIG17N5WUvi3rD5NEHQT5iGB47G07Jj3FszyiNnMQrKLlWGS9ayWENHTXpRinMJuDY", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;
