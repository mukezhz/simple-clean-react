import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostListWrapper from "./PostList";
import ErrorBoundary from "./ErrorBoundary";
import CreatePost from "./PostCreate";

const queryClient = new QueryClient()

const App: React.FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <CreatePost />
        <PostListWrapper />
      </QueryClientProvider>
    </Suspense>
  </ErrorBoundary>
);

export default App;
