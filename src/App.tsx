import React from '"'"'react'"'"';
import { BrowserRouter, Route, Routes } from '"'"'react-router-dom'"'"';
import { QueryClient, QueryClientProvider } from '"'"'@tanstack/react-query'"'"';
import { ReactQueryDevtools } from '"'"'@tanstack/react-query-devtools'"'"';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === '"'"'development'"'"' && <ReactQueryDevtools initialIsOpen={false} />}
        <Routes>
          <Route path="/" element={<div>App is working</div>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
