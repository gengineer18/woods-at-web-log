export type LinkTo = {
  name: string
  params: string
}

export type post = {
  fields: postFields
  sys: sys
}

export type category = {
  fields: categoryFields
  sys: sys
}

export type tag = {
  fields: tagFields
  sys: sys
}

type postFields = {
  body: string
  category: category
  date: string
  slug: string
  tags: Array<tag>
  title: string
}

type categoryFields = {
  definition: string
  name: string
  slug: string
  sort: number
}

type tagFields = {
  name: string
  slug: string
}

type sys = {
  createdAt: string
  updatedAt: string
}
