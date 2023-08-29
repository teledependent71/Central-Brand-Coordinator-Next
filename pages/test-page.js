import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Brand Coordinator</title>
          <meta
            property="og:title"
            content="test-page - Central Brand Coordinator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_end3a8) => (
            <>
              <h1>{context_end3a8?.name}</h1>
            </>
          )}
          initialData={props.contextEnd3a8Prop}
          persistDataDuringLoading={true}
          key={props?.contextEnd3a8Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextEnd3a8Prop = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextEnd3a8Prop: contextEnd3a8Prop?.data?.[0],
    },
  }
}
