import * as S from './styles'

export type MainProps = {
  title: string
  content: string
}

export const Main = ({
  title = 'NextJS Boilerplate',
  content = 'NextJS, ReactJS, TypeScript, Styled-Components, Storybook and Testing-Library',
}: MainProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description dangerouslySetInnerHTML={{ __html: content }} />

    <S.Illustration
      src="/assets/hero-illustration.svg"
      alt="A developer walking and a screen with the text NextJS"
    />
  </S.Container>
)
