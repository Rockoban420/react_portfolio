import './App.css';
import { useState } from 'react';
import {
  Navbar,
  AboutMe,
  Work,
  Banner,
  Contact,
  Footer,
} from './components';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [currentTab, setCurrentTab] = useState('AboutMe');
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {/* <Banner /> */}
      {
        currentTab === 'AboutMe' ? <AboutMe /> 
        : currentTab === 'Work' ? <Work />
        : <Contact 
          
        />
      }
    <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
