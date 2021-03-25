import Link from 'next/link'

import * as S from './styles'

export type HomeTemplateProps = {
  allSettings: SettingsProps
  page: PageProps
  posts: PostProps[]
}

type SettingsProps = {
  title: string
}

type PageProps = {
  title: string
  content: string
}

type PostProps = {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
}

export const Home = ({ page, posts, allSettings }: HomeTemplateProps) => (
  <S.Container>
    <S.Header>
      <S.Title>{allSettings.title}</S.Title>
      <S.Description dangerouslySetInnerHTML={{ __html: page.content }} />
    </S.Header>

    <S.Content>
      {posts.map((post) => (
        <S.PostItem key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>

          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />

          <span>
            {new Intl.DateTimeFormat('pt-BR', {
              dateStyle: 'long',
            }).format(new Date(post.date))}
          </span>
        </S.PostItem>
      ))}
    </S.Content>
  </S.Container>
)
