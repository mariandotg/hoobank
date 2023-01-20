import { Content, ContentFormatted, Entry, ILink } from '../models'

const contentfulDataAdapter = (data: Entry<Content>[]) => {
  const formattedData = data.reduce<ContentFormatted[]>(
    (prev: ContentFormatted[], acc: Entry<any>) => {
      if (acc.fields?.image?.fields?.image)
        acc.fields.image.fields.image = acc.fields.image.fields.image.fields

      const restBase = acc.fields.image
        ? {
            ...acc.fields,
            image: acc.fields.image.fields.image,
            uniqueId: acc.sys.id,
          }
        : { ...acc.fields, uniqueId: acc.sys.id }

      const links = acc.fields.links?.reduce(
        (prev: ILink[], acc: Entry<ILink>) => {
          return [...prev, { ...acc.fields }]
        },
        []
      )

      const rest = acc.fields.links ? { ...restBase, links } : { ...restBase }
      return [...prev, rest]
    },
    []
  )

  return formattedData
}

export default contentfulDataAdapter
