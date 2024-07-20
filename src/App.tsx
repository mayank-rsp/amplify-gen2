import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

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
