import { type IconType } from 'react-icons/lib'
import {
  SiAstro,
  SiC,
  SiCplusplus,
  // SiCsharp,
  SiCss3,
  SiGo,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJson,
  SiKotlin,
  SiLatex,
  SiMarkdown,
  SiMdx,
  SiOracle,
  SiPython,
  SiReact,
  SiTypescript,
  SiYaml,
} from 'react-icons/si'

export const languageIcons: { [key: string]: IconType } = {
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  python: SiPython,
  c: SiC,
  'c++': SiCplusplus,
  // 'c#': SiCsharp,
  typescript: SiTypescript,
  markdown: SiMarkdown,
  mdx: SiMdx,
  json: SiJson,
  yaml: SiYaml,
  tex: SiLatex,
  java: SiIntellijidea,
  kotlin: SiKotlin,
  react: SiReact,
  go: SiGo,
}

export const getLanguageIcon = (language: string): JSX.Element | null => {
  const Icon = languageIcons[language]
  return Icon ? <Icon /> : null
}
