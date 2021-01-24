/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"

const convertToKebabCase = (string) => string.replace(/\s+/g, '-').toLowerCase();

export const Item = ({ title }) => (
  <Flex sx={{ mr: [3, 3, 4], mb: [3, 3, 4], alignItems: `center` }}>
    <a
      sx={{
        variant: `cards.label`,
      }}
      href={`#${convertToKebabCase(title)}`}
    >
      {title}
    </a>
  </Flex>
);

export const Info = ({ children }) => {
  console.log('children: ', children);
  return (
    <Flex
      sx={{
        flexDirection: [`column`, `column`, `row`],
        variant: `cards.icon`,
      }}
    >
      {children}
    </Flex>
  )
}

