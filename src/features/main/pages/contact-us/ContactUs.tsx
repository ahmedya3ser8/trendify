import { BreadCrumb } from "@/features/main";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'Contact Us'}]} />
      <ContactForm />
    </>
  )
}

export default ContactUs;
