import { useState, useEffect } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const products = [
    { id: 1, name: "Electric Extruder", image: "./images/electric-extruder.jpeg", description: "High-capacity electric briquette extruder" },
    { id: 2, name: "Diesel Extruder", image: "./images/diesel-extruder.jpeg", description: "Powerful diesel-powered extruder" },
    { id: 3, name: "Industrial Mixer", image: "./images/mixer.jpeg", description: "Heavy-duty mixing machine" },
    { id: 4, name: "Manual Briquette Machine", image: "./images/manual-briquette-machine.jpeg", description: "Affordable manual operation" }
  ];

  const whatsappNumber1 = "254722281127";
  const whatsappNumber2 = "254735761467";

  const galleryImages = [
    { src: "./images/electric-extruder.jpeg", title: "Electric Extruder", message: "Equipment Fabrication" },
    { src: "./images/electric-bolus-extruder.jpeg", title: "Electric Bolus Extruder", message: "Mass Production Ready" },
    { src: "./images/diesel-extruder.jpeg", title: "Diesel Extruder", message: "Heavy Duty Operation" },
    { src: "./images/drying-briquette.jpeg", title: "Drying Briquettes", message: "Operation in Progress" },
    { src: "./images/kiln-2.jpeg", title: "Carbonization Kiln", message: "Carbonisation in Progress" },
    { src: "./images/mixer.jpeg", title: "Industrial Mixer", message: "Equipment Fabrication" },
    { src: "./images/manual-briquette-machine.jpeg", title: "Manual Briquette Machine", message: "Affordable Technology" },
    { src: "./images/burning-jiko.jpeg", title: "Clean Burning Jiko", message: "Serving International Customers" },
    { src: "./images/training-in-Marsabit.jpeg", title: "Training in Marsabit", message: "Training in Progress" },
    { src: "./images/training-on-carbonising-of-materials.jpeg", title: "Training on Carbonising", message: "Training in Progress" },
    { src: "./images/operations.jpeg", title: "Operations", message: "Operation in Progress" },
    { src: "./images/operation-in-progress.jpeg", title: "Production Line", message: "Operation in Progress" },
    { src: "./images/mass-production-of-equipment.jpeg", title: "Mass Production", message: "Mass Production of Equipment" },
    { src: "./images/logistics.jpeg", title: "Logistics", message: "Logistics and Delivery" },
    { src: "./images/international-customers.jpeg", title: "International Customers", message: "Serving International Customers" },
    { src: "./images/international-collaborators.jpeg", title: "International Collaborators", message: "Partnering with International Bodies" }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className="fixed top-20 right-6 z-50 bg-[#7CB342] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        {darkMode ? "☀️" : "🌙"}
      </button>

      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="./images/logo.jpeg" alt="Logo" className="h-12 w-auto object-contain" />
            <h1 className="text-2xl font-bold tracking-wide">
              <span className="text-[#7CB342]">DAMOS</span>
              <span className="text-[#558B2F]"> TECHNICAL </span>
              <span className="text-[#33691E]">SERVICES</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-[#7CB342]">Home</a>
            <a href="#about" className="hover:text-[#7CB342]">About</a>
            <a href="#services" className="hover:text-[#7CB342]">Services</a>
            <a href="#products" className="hover:text-[#7CB342]">Products</a>
            <a href="#gallery" className="hover:text-[#7CB342]">Gallery</a>
            <a href="#contact" className="hover:text-[#7CB342]">Contact</a>
          </div>
          <button className="md:hidden text-3xl text-[#7CB342]" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 flex flex-col gap-4">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-24 bg-linear-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 dark:text-white">Sustainable <span className="text-[#7CB342]">Clean Cooking</span> Solutions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">Promoting appropriate technology in clean cooking fuel production through biomass briquettes, equipment fabrication, training, and research.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#7CB342] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#558B2F] hover:scale-105 transition-all duration-300">View Products</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#7CB342] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#558B2F] hover:scale-105 transition-all duration-300">Contact Us</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#7CB342]">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">DAMOS TECHNICAL SERVICES is committed to promoting sustainable clean cooking technologies through biomass fuel production, equipment fabrication, community training, and research.</p>
          <div className="flex justify-center mt-8">
            <div className="max-w-md text-center cursor-pointer" onClick={() => setSelectedImage("./images/CEO-and-FOUNDER-of-Damos.jpeg")}>
              <img src="./images/CEO-and-FOUNDER-of-Damos.jpeg" alt="CEO" className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition duration-300" />
              <div className="bg-black/70 text-white py-2 px-4 rounded-b-2xl mt-2"><p className="font-semibold">CEO & Founder, DAMOS Technical Services</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#7CB342] mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"><h3 className="text-2xl font-bold mb-4 text-[#7CB342]">Biomass Briquettes</h3><p className="text-gray-600 dark:text-gray-400">Production of biomass briquettes from agro waste and forest residues.</p></div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"><h3 className="text-2xl font-bold mb-4 text-[#7CB342]">Equipment Fabrication</h3><p className="text-gray-600 dark:text-gray-400">Fabrication of briquette extruders, crushers, dryers, mixers, and kilns.</p></div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"><h3 className="text-2xl font-bold mb-4 text-[#7CB342]">Training Programs</h3><p className="text-gray-600 dark:text-gray-400">Training individuals and community groups on biomass fuel production.</p></div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"><h3 className="text-2xl font-bold mb-4 text-[#7CB342]">Research</h3><p className="text-gray-600 dark:text-gray-400">Research on clean cooking technologies and policies.</p></div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#7CB342] mb-16">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover cursor-pointer hover:scale-105 transition duration-300" onClick={() => setSelectedProduct(product)} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#7CB342]">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <button onClick={() => window.open(`https://wa.me/${whatsappNumber1}?text=Hello! I'm interested in the ${product.name}.`, '_blank')} className="bg-[#7CB342] text-white px-3 py-2 rounded-xl text-sm w-full hover:bg-[#558B2F]">WhatsApp 1</button>
                    <button onClick={() => window.open(`https://wa.me/${whatsappNumber2}?text=Hello! I'm interested in the ${product.name}.`, '_blank')} className="bg-[#558B2F] text-white px-3 py-2 rounded-xl text-sm w-full hover:bg-[#33691E]">WhatsApp 2</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full p-6" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-2xl mb-4" />
            <h3 className="text-2xl font-bold text-[#7CB342] mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProduct.description}</p>
            <div className="flex gap-2">
              <button onClick={() => window.open(`https://wa.me/${whatsappNumber1}?text=Hello! I'm interested in the ${selectedProduct.name}.`, '_blank')} className="bg-[#7CB342] text-white px-4 py-2 rounded-xl w-full">WhatsApp 1</button>
              <button onClick={() => window.open(`https://wa.me/${whatsappNumber2}?text=Hello! I'm interested in the ${selectedProduct.name}.`, '_blank')} className="bg-[#558B2F] text-white px-4 py-2 rounded-xl w-full">WhatsApp 2</button>
            </div>
            <button onClick={() => setSelectedProduct(null)} className="mt-3 text-gray-500 w-full">Close</button>
          </div>
        </div>
      )}

      <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#7CB342] mb-16">Our Work & Operations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden cursor-pointer group relative" onClick={() => setSelectedImage(image.src)}>
                <img src={image.src} alt={image.title} className="h-72 w-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-4">
                  <p className="text-white font-semibold text-sm md:text-base">{image.message}</p>
                  <p className="text-[#7CB342] text-xs mt-1 font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" className="rounded-2xl w-full" />
            <button onClick={() => setSelectedImage(null)} className="mt-4 bg-[#7CB342] text-white px-6 py-2 rounded-xl mx-auto block hover:bg-[#558B2F]">Close</button>
          </div>
        </div>
      )}

      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#7CB342] mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">📧 damostechnicalservices@gmail.com</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">📍 Loyal Drive off Dagoretti Road, Kikuyu</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">📞 +254 722 281127</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">📞 +254 735 761467</p>
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-[#7CB342]">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
              </div>
            </div>
            <div>
              <iframe title="DAMOS Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.6615!3d-1.2865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x3b7e2b4c5d8e9f0a!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="350" style={{border: 0}} allowFullScreen loading="lazy" className="rounded-2xl shadow-lg" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">📍 Located on Loyal Drive off Dagoretti Road, Kikuyu</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4"><img src="./images/logo.jpeg" alt="Logo" className="h-16 w-auto object-contain" /></div>
          <h3 className="text-2xl font-bold mb-4"><span className="text-[#7CB342]">DAMOS</span><span className="text-[#9CCC65]"> TECHNICAL </span><span className="text-[#AED581]">SERVICES</span></h3>
          <p className="text-gray-300">Promoting sustainable clean cooking solutions.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href={`https://wa.me/${whatsappNumber1}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#7CB342]">WhatsApp 1</a>
            <a href={`https://wa.me/${whatsappNumber2}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#7CB342]">WhatsApp 2</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=damostechnicalservices@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7CB342]">Email</a>
            <button onClick={scrollToTop} className="hover:text-[#7CB342] cursor-pointer">Back to Top</button>
          </div>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href={`https://wa.me/${whatsappNumber1}`} target="_blank" rel="noopener noreferrer" className="bg-[#7CB342] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current"><path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.82.92 5.42 2.48 7.52L3 29l5.68-2.44a12.94 12.94 0 0 0 7.324 2.284H16c7.184 0 13.004-5.82 13.004-13.004C29.004 8.82 23.184 3 16.004 3zm0 23.644a10.56 10.56 0 0 1-5.38-1.48l-.384-.228-3.372 1.448 1.5-3.288-.248-.404a10.52 10.52 0 1 1 7.884 3.952zm5.784-7.876c-.316-.16-1.868-.924-2.156-1.028-.288-.104-.5-.16-.712.16-.212.316-.816 1.028-1 1.24-.184.212-.368.236-.684.08-.316-.16-1.336-.492-2.544-1.568-.94-.836-1.576-1.868-1.76-2.184-.184-.316-.02-.488.14-.644.14-.14.316-.368.472-.552.156-.184.208-.316.316-.528.104-.212.052-.396-.028-.552-.08-.16-.712-1.716-.976-2.348-.26-.624-.524-.54-.712-.548l-.608-.012c-.212 0-.552.08-.84.396s-1.104 1.08-1.104 2.632 1.132 3.052 1.288 3.264c.156.212 2.224 3.396 5.388 4.76.752.324 1.34.516 1.8.66.756.24 1.444.208 1.988.128.608-.092 1.868-.764 2.132-1.5.264-.736.264-1.368.184-1.5-.08-.132-.288-.212-.604-.368z" /></svg>
        </a>
        <a href={`https://wa.me/${whatsappNumber2}`} target="_blank" rel="noopener noreferrer" className="bg-[#558B2F] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current"><path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.82.92 5.42 2.48 7.52L3 29l5.68-2.44a12.94 12.94 0 0 0 7.324 2.284H16c7.184 0 13.004-5.82 13.004-13.004C29.004 8.82 23.184 3 16.004 3zm0 23.644a10.56 10.56 0 0 1-5.38-1.48l-.384-.228-3.372 1.448 1.5-3.288-.248-.404a10.52 10.52 0 1 1 7.884 3.952zm5.784-7.876c-.316-.16-1.868-.924-2.156-1.028-.288-.104-.5-.16-.712.16-.212.316-.816 1.028-1 1.24-.184.212-.368.236-.684.08-.316-.16-1.336-.492-2.544-1.568-.94-.836-1.576-1.868-1.76-2.184-.184-.316-.02-.488.14-.644.14-.14.316-.368.472-.552.156-.184.208-.316.316-.528.104-.212.052-.396-.028-.552-.08-.16-.712-1.716-.976-2.348-.26-.624-.524-.54-.712-.548l-.608-.012c-.212 0-.552.08-.84.396s-1.104 1.08-1.104 2.632 1.132 3.052 1.288 3.264c.156.212 2.224 3.396 5.388 4.76.752.324 1.34.516 1.8.66.756.24 1.444.208 1.988.128.608-.092 1.868-.764 2.132-1.5.264-.736.264-1.368.184-1.5-.08-.132-.288-.212-.604-.368z" /></svg>
        </a>
      </div>
    </div>
  );
}