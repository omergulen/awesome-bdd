/** @jsx jsx */
import React from "react"
import { jsx, Flex } from "theme-ui"

const Item = ({ input }: { input: string }) => (
  <Flex sx={{ mr: [3, 3, 4], mb: [3, 3, 4], alignItems: `center` }}>
    <div
      sx={{
        variant: `cards.label`,
      }}
    >
      {input}
    </div>
  </Flex>
)

const Info = () => {
  const count = 5;

  return (
    <Flex
      sx={{
        flexDirection: [`column`, `column`, `row`],
        variant: `cards.icon`,
      }}
    >
      <Item input={`${count} Websites`} />
      <Item input={`${count} CircleCI Projects`} />
    </Flex>
  )
}

export default Info
