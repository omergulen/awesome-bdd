import React, { useMemo } from "react"
import { Global, css } from "@emotion/core"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Grid from "../components/grid"
import { Info, Item } from "../components/info"

import rehypeReact from "rehype-react"
import Card from "../components/card"

const Index = ({
  data: {
    config: { siteMetadata },
    allMarkdownRemark: { edges }
  },
}) => {
  const { siteDescription, siteName, siteUrl } = siteMetadata;
  const { node: { htmlAst } } = edges[0];

  const convertToKebabCase = (string) => string.replace(/\s+/g, '-').toLowerCase();
  const isExternal = (url) => url.includes('http');

  const componentMapping = useMemo(() => {
    return {
      a: props => (<a {...props} target={isExternal(props.href) ? "_blank" : null} >{props.children}</a>),
      h2: props => (<h2 {...props} id={convertToKebabCase(props.children[0])} >{props.children}</h2>),
      h3: props => (<h3 {...props} id={convertToKebabCase(props.children[0])} >{props.children}</h3>),
      awesomecard: Card,
      awesomegrid: Grid,
      infoitem: Item,
      info: Info
    };
  }, []);

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: componentMapping,
    Fragment: React.Fragment
  }).Compiler

  return (
    <main
      css={css`
        max-width: 60rem;
        margin: 0 auto;
        padding: 2rem;
      `}
    >
      <Global
        styles={css`
          *::before,
          *::after {
            box-sizing: border-box;
          }
          ::selection {
            color: #fff;
            background-color: #3490dc;
          }
          html {
            -webkit-text-size-adjust: 100%;
          }
          body {
            border: 0;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
              "Helvetica Neue", sans-serif;
            font-size: 18px;
            color: #24242d;
            background: #f0f2fd;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="image" content={`${siteUrl}/social.png`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="bdd.tools" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}/social.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/social.png`} />
      </Helmet>
      <div css={css({ marginTop: `1rem` })} />
      {renderAst(htmlAst)}
      <footer
        css={css({
          textAlign: `center`,
          marginTop: `4rem`,
          color: `#525f74`,
          fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`,
          fontWeight: `400`,
        })}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </footer>
    </main>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    config: site {
      siteMetadata {
        siteName
        siteDescription
        siteUrl
      }
    }
    allMarkdownRemark {
      edges {
        node {
          htmlAst
        }
      }
    }
  }
`