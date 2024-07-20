import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {

  return (

    <Authenticator>
      {({ signOut }) => (

    <main>
      <button onClick={signOut}>Sign out</button>
    </main>

      )}
    </Authenticator>
  );
}

export default App;
