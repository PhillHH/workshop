import React, { useState, useEffect } from 'react';
import { CheckIcon } from '../components/Icons';

const Checkout = () => {
  const [courseParam, setCourseParam] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'prepayment' // 'prepayment' | 'bunq'
  });

  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    setCourseParam(url.searchParams.get('course'));
  }, []);

  const getCourseDetails = (id: string | null) => {
    switch(id) {
      case 'grundlagen': return { title: 'KI sinnvoll nutzen', price: 99 };
      case 'beruf': return { title: 'KI im Beruf', price: 299 };
      case 'automatisierung': return { title: 'KI-Automatisierung', price: 799 };
      default: return { title: 'KI sinnvoll nutzen', price: 99 }; // Default
    }
  };

  const course = getCourseDetails(courseParam);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.paymentMethod === 'bunq') {
       setRedirecting(true);
       // Simulate redirect delay
       setTimeout(() => {
          window.location.href = "https://bunq.me/growento"; // Dummy link
       }, 2000);
    } else {
       setSubmitted(true);
    }
  };

  if (redirecting) {
     return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
           <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-white mb-2">Weiterleitung zu Bunq.me...</h2>
              <p className="text-gray-30">Bitte warten Sie einen Moment.</p>
           </div>
        </div>
     );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-gray-90 p-8 md:p-12 rounded-2xl border border-primary shadow-2xl max-w-lg text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Vielen Dank!</h2>
          <p className="text-gray-30 mb-6">
            Wir haben Ihre Buchung für <strong>{course.title}</strong> erhalten.
            <br/><br/>
            Sie erhalten in Kürze eine E-Mail mit der Rechnung und den Überweisungsdaten an <strong>{formData.email}</strong>.
          </p>
          <a href="/" className="inline-block bg-gray-80 text-white px-6 py-3 rounded-lg hover:bg-gray-70 transition-colors">
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-12 text-center">Buchung abschließen</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-gray-90 p-8 rounded-2xl border border-gray-80">
              <h2 className="text-xl font-bold text-white mb-6">Ihre Daten</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="firstName">Vorname</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="lastName">Nachname</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="email">E-Mail Adresse</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="address">Straße & Hausnummer</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="zip">PLZ</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-40 text-sm font-bold mb-2" htmlFor="city">Stadt</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      className="w-full bg-gray-80 border border-gray-70 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-80">
                  <h3 className="text-xl font-bold text-white mb-4">Zahlungsmethode</h3>
                  <div className="space-y-4">
                     <label className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${formData.paymentMethod === 'prepayment' ? 'border-primary bg-primary/10' : 'border-gray-70 bg-gray-80'}`}>
                        <input
                           type="radio"
                           name="paymentMethod"
                           value="prepayment"
                           checked={formData.paymentMethod === 'prepayment'}
                           onChange={handleChange}
                           className="text-primary focus:ring-primary h-5 w-5"
                        />
                        <span className="ml-3 text-white font-medium">Vorauszahlung / Überweisung</span>
                     </label>
                     <label className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${formData.paymentMethod === 'bunq' ? 'border-primary bg-primary/10' : 'border-gray-70 bg-gray-80'}`}>
                        <input
                           type="radio"
                           name="paymentMethod"
                           value="bunq"
                           checked={formData.paymentMethod === 'bunq'}
                           onChange={handleChange}
                           className="text-primary focus:ring-primary h-5 w-5"
                        />
                        <span className="ml-3 text-white font-medium">Direct Checkout (BankLink / bunq.me)</span>
                     </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg text-lg transition-colors mt-8"
                >
                  Kostenpflichtig buchen
                </button>
              </form>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4">
             <div className="bg-gray-90 p-6 rounded-2xl border border-gray-80 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-4">Zusammenfassung</h3>
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-80">
                   <div>
                      <p className="text-white font-medium">{course.title}</p>
                      <p className="text-gray-50 text-sm">Workshop Ticket</p>
                   </div>
                   <p className="text-white font-bold">{course.price} €</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                   <p className="text-gray-50">Zwischensumme</p>
                   <p className="text-gray-30">{course.price} €</p>
                </div>
                <div className="flex justify-between items-center mb-6">
                   <p className="text-gray-50">MwSt. (19%)</p>
                   <p className="text-gray-30">{(course.price * 0.19).toFixed(2)} €</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-80">
                   <p className="text-white font-bold text-lg">Gesamtsumme</p>
                   <p className="text-primary font-bold text-lg">{(course.price * 1.19).toFixed(2)} €</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
