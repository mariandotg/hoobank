import { Entry, ILink } from '../models'

const contentfulDataAdapter = (data: Entry<any>[]) => {
  const formattedData = data.reduce<any[]>((prev: any[], acc: Entry<any>) => {
    const restBase = acc.fields.image
      ? { ...acc.fields, image: acc.fields.image.fields, uniqueId: acc.sys.id }
      : { ...acc.fields, uniqueId: acc.sys.id }

    if (acc.fields?.image?.fields?.image)
      acc.fields.image.fields.image = acc.fields.image.fields.image.fields

    const links = acc.fields.links?.reduce(
      (prev: ILink[], acc: Entry<ILink>) => {
        return [...prev, { ...acc.fields }]
      },
      []
    )

    const rest = acc.fields.links ? { ...restBase, links } : { ...restBase }
    return [...prev, rest]
  }, [])

  return formattedData
}

export default contentfulDataAdapter
