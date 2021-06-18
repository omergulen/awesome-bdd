/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"

const convertToKebabCase = (string) => string.replace(/\s+/g, '-').toLowerCase();
const tagColors = [
  `#fec5bb`,
  `#fcd5ce`,
  `#fae1dd`,
  `#f8edeb`,
  `#e8e8e4`,
  `#d8e2dc`,
  `#ece4db`,
  `#ffe5d9`,
  `#ffd7ba`,
  `#fec89a`,
];

const colors = [
  `#264653`,
  `#2a9d8f`,
  `#e9c46a`,
  `#f4a261`,
  `#e76f51`,
  `#277da1`,
  `#577590`,
  `#4d908e`,
  `#43aa8b`,
  `#90be6d`,
  `#f9c74f`,
  `#f9844a`,
  `#f8961e`,
  `#f3722c`,
  `#f94144`,
];

let count = -1;

const getRandomColor = () => {
  // return colors[Math.floor(Math.random() * tagColors.length)];
  count = (count + 1) % colors.length; 
  return colors[count];
}

export const Item = ({ title }) => {

  const color = getRandomColor();

  return (
    <Flex
      sx={{
        mr: [3, 3, 4],
        mb: [3, 3, 4],
        alignItems: `flex-start`,
      }}
    >
      <a
        sx={{
          variant: `cards.label`,
          textDecoration: `none`,
          color: color,
          backgroundColor: `${color}33`,
          ":visited": {
            color: color,
            backgroundColor: `${color}33`,
          }
        }}
        href={`#${convertToKebabCase(title)}`}
      >
        {title}
      </a>
    </Flex>
  )
};

export const Info = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: [`row`, `row`, `row`],
        variant: `cards.icon`,
        flexWrap: `wrap`,
      }}
    >
      {children}
    </Flex>
  )
}

