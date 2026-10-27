export const paths = {
  home: {
    getHref: () => "/",
  },
  blogs: {
    getHref: () => "/blog",
  },
  blog: {
    getHref: (id: string) => `/blog/${id}`,
  },
  contact: {
    getHref: () => "/contact",
  },
} as const;
