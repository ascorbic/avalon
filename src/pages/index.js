import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Homepage(props) {
  return (
    <Layout>
      <Flex variant="column">
        <Heading variant="mega" className={styles.heading}>
          404
        </Heading>
        <Heading as="h1">Page not found</Heading>
        <Flex variant="column" gap={0}>
          <Text variant="lead" className={styles.text}>
            Hello
          </Text>
        </Flex>
      </Flex>
    </Layout>
  )
}
