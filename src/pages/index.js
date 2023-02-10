import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Heading, Text, Flex } from "../components/ui"
import * as styles from "../components/404.css"

export default function Homepage(props) {
  return (
    <Box paddingY={4}>
      <Container>
        <Flex variant="column">
          <Heading variant="mega" className={styles.heading}>
            Hello
          </Heading>
          <Heading as="h1">Hey</Heading>
          <Flex variant="column" gap={0}>
            <Text variant="lead" className={styles.text}>
              Hi
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
