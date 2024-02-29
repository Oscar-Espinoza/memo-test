'use client'

import React from 'react'
import { ApolloProvider } from '@apollo/client';
import client from "@/lib/apolloClient";
import {NextUIProvider} from "@nextui-org/react";

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ApolloProvider>
  )
}

export default Providers