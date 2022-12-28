import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 's2yudpk9',
  dataset: 'production',
  apiVersion: '2022-12-28',
  useCdn: true,
  token:'skTtR9r0kWin4JSTUqeBvWimqiV9m9UnI37JVEheG2OOSbsM28bHlQH83oofCoI3QErlEr5qNKcb30NTV4EZPnhTbyHkE0TL2m8E1AbHogen6onKh0mJjXkU0iUhEPPqiSXbUqf0yRmsBetgZ2awGkCcFfW3HQAMfSwIXMxSKvUdwo08yMXh',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);