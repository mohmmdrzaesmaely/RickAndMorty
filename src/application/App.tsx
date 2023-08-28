import { ApolloProvider } from "@apollo/client";
import { RouterDOM } from "../commons";
import { router } from "./Routes";
import { client } from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterDOM.RouterProvider router={router}/>
    </ApolloProvider>
  );
}

export { App };
