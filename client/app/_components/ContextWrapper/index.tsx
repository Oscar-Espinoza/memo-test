'use client'

import React from 'react'
import { ApolloProvider } from '@apollo/client';
import client from "@/lib/apolloClient";

function ContextWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ContextWrapper