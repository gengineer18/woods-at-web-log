export type LinkTo = {
  name: string
  params: string
}

export type Post = {
  fields: PostFields
  sys: Sys
}

export type Category = {
  fields: CategoryFields
  sys: Sys
}

export type Tag = {
  fields: TagFields
  sys: Sys
}

type PostFields = {
  body: string
  category: Category
  date: string
  slug: string
  tags: Array<Tag>
  title: string
}

type CategoryFields = {
  definition: string
  name: string
  slug: string
  sort: number
}

type TagFields = {
  name: string
  slug: string
}

type Sys = {
  id: string
  createdAt: string
  updatedAt: string
}
