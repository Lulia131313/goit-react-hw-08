import ContactForm from "../components/ContactForm/ContactForm";
import Contact from "../components/ContactList/Contact/Contact";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </div>
  );
};

export default ContactsPage;
