import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};

export default App;
