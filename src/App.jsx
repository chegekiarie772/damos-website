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
    { src: "./images/operations.jpeg", title: "Operations", message: "Operation in Progress" },
    { src: "./images/operation-in-progress.jpeg", title: "Production Line", message: "Operation in Progress" },
    { src: "./images/mass-production-of-equipment.jpeg", title: "Mass Production", message: "Mass Production of Equipment" },
    { src: "./images/logistics.jpeg", title: "Logistics", message: "Logistics and Delivery" },
    { src: "./images/international-customers.jpeg", title: "International Customers", message: "Serving International Customers" },
    { src: "./images/international-collaborators.jpeg", title: "International Collaborators", message: "Partnering with International Bodies" }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className="fixed top-20 right-6 z-50 bg-[#2E7D32] text-white p-2 rounded-full shadow-md hover:scale-105 transition text-sm">
        {darkMode ? "☀️" : "🌙"}
      </button>

      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="./images/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-xl font-bold text-[#2E7D32]">DAMOS TECHNICAL SERVICES</h1>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-sm">
            <a href="#home" className="hover:text-[#2E7D32] transition">Home</a>
            <a href="#about" className="hover:text-[#2E7D32] transition">About</a>
            <a href="#services" className="hover:text-[#2E7D32] transition">Services</a>
            <a href="#products" className="hover:text-[#2E7D32] transition">Products</a>
            <a href="#gallery" className="hover:text-[#2E7D32] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#2E7D32] transition">Contact</a>
          </div>
          <button className="md:hidden text-2xl text-[#2E7D32]" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Products</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="pt-28 pb-16 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 dark:text-white">Sustainable <span className="text-[#2E7D32]">Clean Cooking</span> Solutions</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">Promoting appropriate technology in clean cooking fuel production through biomass briquettes, equipment fabrication, training, and research.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#2E7D32] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1B5E20] transition text-sm">View Products</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#2E7D32] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1B5E20] transition text-sm">Contact Us</button>
          </div>
        </div>
      </section>

cat > src/App.jsx << 'EOF'
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
    { src: "./images/operations.jpeg", title: "Operations", message: "Operation in Progress" },
    { src: "./images/operation-in-progress.jpeg", title: "Production Line", message: "Operation in Progress" },
    { src: "./images/mass-production-of-equipment.jpeg", title: "Mass Production", message: "Mass Production of Equipment" },
    { src: "./images/logistics.jpeg", title: "Logistics", message: "Logistics and Delivery" },
    { src: "./images/international-customers.jpeg", title: "International Customers", message: "Serving International Customers" },
    { src: "./images/international-collaborators.jpeg", title: "International Collaborators", message: "Partnering with International Bodies" }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className="fixed top-20 right-6 z-50 bg-[#2E7D32] text-white p-2 rounded-full shadow-md hover:scale-105 transition text-sm">
        {darkMode ? "☀️" : "🌙"}
      </button>

      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="./images/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-xl font-bold text-[#2E7D32]">DAMOS TECHNICAL SERVICES</h1>
          </div>
          <div className="hidden md:flex gap-6 font-medium text-sm">
            <a href="#home" className="hover:text-[#2E7D32] transition">Home</a>
            <a href="#about" className="hover:text-[#2E7D32] transition">About</a>
            <a href="#services" className="hover:text-[#2E7D32] transition">Services</a>
            <a href="#products" className="hover:text-[#2E7D32] transition">Products</a>
            <a href="#gallery" className="hover:text-[#2E7D32] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#2E7D32] transition">Contact</a>
          </div>
          <button className="md:hidden text-2xl text-[#2E7D32]" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Products</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#2E7D32]">Contact</a>
          </div>
        )}
      </nav>

      <section id="home" className="pt-28 pb-16 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 dark:text-white">Sustainable <span className="text-[#2E7D32]">Clean Cooking</span> Solutions</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">Promoting appropriate technology in clean cooking fuel production through biomass briquettes, equipment fabrication, training, and research.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#2E7D32] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1B5E20] transition text-sm">View Products</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#2E7D32] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1B5E20] transition text-sm">Contact Us</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#2E7D32]">About Us</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">DAMOS TECHNICAL SERVICES is committed to promoting sustainable clean cooking technologies through biomass fuel production, equipment fabrication, community training, and research.</p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"><h3 className="text-xl font-bold mb-2 text-[#2E7D32]">Biomass Briquettes</h3><p className="text-sm text-gray-600 dark:text-gray-400">Production from agro waste and forest residues.</p></div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"><h3 className="text-xl font-bold mb-2 text-[#2E7D32]">Equipment Fabrication</h3><p className="text-sm text-gray-600 dark:text-gray-400">Extruders, crushers, dryers, mixers, kilns.</p></div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"><h3 className="text-xl font-bold mb-2 text-[#2E7D32]">Training Programs</h3><p className="text-sm text-gray-600 dark:text-gray-400">Training on biomass fuel production.</p></div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"><h3 className="text-xl font-bold mb-2 text-[#2E7D32]">Research</h3><p className="text-sm text-gray-600 dark:text-gray-400">Research on clean cooking technologies.</p></div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover hover:scale-105 transition" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-[#2E7D32]">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{product.description}</p>
                  <div className="flex gap-2">
                    <button onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/${whatsappNumber1}?text=Hello! I'm interested in the ${product.name}.`, '_blank'); }} className="bg-[#2E7D32] text-white px-3 py-1 rounded-md text-xs w-full hover:bg-[#1B5E20] transition">WhatsApp</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-5" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-lg mb-3" />
            <h3 className="text-xl font-bold text-[#2E7D32] mb-1">{selectedProduct.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{selectedProduct.description}</p>
            <button onClick={() => window.open(`https://wa.me/${whatsappNumber1}?text=Hello! I'm interested in the ${selectedProduct.name}.`, '_blank')} className="bg-[#2E7D32] text-white px-4 py-2 rounded-md w-full text-sm">Inquire on WhatsApp</button>
            <button onClick={() => setSelectedProduct(null)} className="mt-2 text-gray-500 text-sm w-full">Close</button>
          </div>
        </div>
      )}

      <section id="gallery" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Our Work & Operations</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-5 pb-4 min-w-max">
              {galleryImages.map((image, idx) => (
                <div key={idx} className="w-72 flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={() => setSelectedImage(image.src)}>
                  <img src={image.src} alt={image.title} className="h-48 w-full object-cover" />
                  <div className="p-3">
                    <p className="text-green-700 text-xs font-medium">{image.message}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" className="rounded-lg w-full" />
            <button onClick={() => setSelectedImage(null)} className="mt-3 bg-[#2E7D32] text-white px-5 py-2 rounded-md mx-auto block text-sm">Close</button>
          </div>
        </div>
      )}

      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">📧 damostechnicalservices@gmail.com</p>
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">📍 Loyal Drive off Dagoretti Road, Kikuyu</p>
              <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm">📞 +254 722 281127</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">📞 +254 735 761467</p>
              <div className="bg-green-50 dark:bg-gray-800 p-4 rounded-xl">
                <h3 className="text-md font-bold mb-2 text-[#2E7D32]">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">Mon-Fri: 8AM - 6PM</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">Sat: 9AM - 4PM</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">Sun: Closed</p>
              </div>
            </div>
            <div>
              <iframe title="DAMOS Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.6615!3d-1.2865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x3b7e2b4c5d8e9f0a!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="250" style="border:0" allowFullScreen loading="lazy" className="rounded-xl shadow-md"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-3"><img src="./images/logo.jpeg" alt="Logo" className="h-12 w-auto object-contain" /></div>
          <h3 className="text-lg font-bold mb-2 text-[#66BB6A]">DAMOS TECHNICAL SERVICES</h3>
          <p className="text-gray-400 text-xs">Promoting sustainable clean cooking solutions.</p>
          <div className="flex justify-center gap-5 mt-4 text-sm">
            <a href={`https://wa.me/${whatsappNumber1}`} target="_blank" className="hover:text-[#66BB6A] transition">WhatsApp</a>
            <a href={`https://wa.me/${whatsappNumber2}`} target="_blank" className="hover:text-[#66BB6A] transition">WhatsApp 2</a>
            <a href="mailto:damostechnicalservices@gmail.com" className="hover:text-[#66BB6A] transition">Email</a>
            <button onClick={scrollToTop} className="hover:text-[#66BB6A] transition">Top</button>
          </div>
          <p className="mt-4 text-gray-500 text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <a href={`https://wa.me/${whatsappNumber1}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2 rounded-full shadow-md hover:scale-105 transition w-10 h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07L3 21l2.03-.66C6.87 21.56 9.28 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </a>
        <a href={`https://wa.me/${whatsappNumber2}`} target="_blank" rel="noopener noreferrer" className="bg-[#128C7E] text-white p-2 rounded-full shadow-md hover:scale-105 transition w-10 h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07L3 21l2.03-.66C6.87 21.56 9.28 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </a>
      </div>
    </div>
  );
}
