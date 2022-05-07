export const meta = `
  metas {
    name
    description
    siteUrl
    ogImage {
      url(transformation: { image: { resize: { height: 150, width: 150 } } })
    }
  }
`;
