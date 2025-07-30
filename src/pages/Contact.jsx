import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const contacts = t('contact.contacts', { returnObjects: true });


  return (
    <>
    <Navbar />
    {/* WRAPPER */}
    <div className="flex flex-col min-h-screen">
      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <section className="py-12 mt-10 md:mt-32 pt-32 sm:py-16 lg:py-20 font-sans">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-aos="fade-down">
              {t('contact.title')}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-10" data-aos="fade-up">
              {t('contact.description')}
            </p>

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl text-left"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.role}</h3>
                  <p className="text-md text-gray-700 mb-1">
                    <span className="font-semibold">Name:</span> {contact.name}
                  </p>
                  <p className="text-lg font-bold text-primary mb-3">
                    <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className="hover:underline">
                      {contact.phone}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 italic">{contact.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-gray-500" data-aos="fade-up" data-aos-delay="200">
              {t('contact.note')}
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>

    </>
  );
};

export default Contact;
