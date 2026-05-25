import { useState, useEffect } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Professional green color palette
  const green = {
    primary: "#1B5E20",    // Dark rich green
    light: "#2E7D32",      // Medium green  
    accent: "#4CAF50",     // Bright green for accents
    bg: "#E8F5E9"          // Very light green background
  };

  return (
    <div className="bg-white">
      {/* Navbar - Clean and Professional */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="./images/logo.jpeg" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-[#1B5E20]">DAMOS TECHNICAL SERVICES</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-[#1B5E20] transition">Home</a>
            <a href="#about" className="hover:text-[#1B5E20] transition">About</a>
            <a href="#services" className="hover:text-[#1B5E20] transition">Services</a>
            <a href="#products" className="hover:text-[#1B5E20] transition">Products</a>
            <a href="#gallery" className="hover:text-[#1B5E20] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#1B5E20] transition">Contact</a>
          </div>
          <button className="md:hidden text-2xl text-[#1B5E20]" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20" style={{ backgroundColor: green.bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-gray-800">
              Sustainable <span style={{ color: green.primary }}>Clean Cooking</span> Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Promoting appropriate technology in clean cooking fuel production through biomass briquettes, equipment fabrication, training, and research.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 rounded-lg font-medium text-white transition" style={{ backgroundColor: green.primary }}>
                View Products
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 rounded-lg font-medium border-2 transition hover:bg-gray-50" style={{ borderColor: green.primary, color: green.primary }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: green.primary }}>About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            DAMOS TECHNICAL SERVICES is committed to promoting sustainable clean cooking technologies through biomass fuel production, equipment fabrication, community training, and research.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: green.bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: green.primary }}>Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Biomass Briquettes", "Equipment Fabrication", "Training Programs", "Research"].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2" style={{ color: green.primary }}>{service}</h3>
                <p className="text-gray-500 text-sm">
                  {i === 0 && "Production from agro waste and forest residues."}
                  {i === 1 && "Extruders, crushers, dryers, mixers, kilns."}
                  {i === 2 && "Training on biomass fuel production."}
                  {i === 3 && "Research on clean cooking technologies."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: green.primary }}>Our Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: green.primary }}>{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                  <button onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/${whatsappNumber1}?text=I'm interested in ${product.name}`, '_blank'); }} 
                    className="w-full py-2 rounded-lg text-white text-sm transition" style={{ backgroundColor: green.primary }}>
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Clean Grid Layout */}
      <section id="gallery" className="py-20" style={{ backgroundColor: green.bg }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: green.primary }}>Our Work & Operations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryImages.slice(0, 8).map((image, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                <img src={image.src} alt={image.title} className="h-48 w-full object-cover" />
                <div className="p-3">
                  <p className="text-xs text-gray-500">{image.message}</p>
                  <p className="font-medium text-sm" style={{ color: green.primary }}>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: green.primary }}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-600 mb-3">📧 damostechnicalservices@gmail.com</p>
              <p className="text-gray-600 mb-3">📍 Loyal Drive off Dagoretti Road, Kikuyu</p>
              <p className="text-gray-600 mb-1">📞 +254 722 281127</p>
              <p className="text-gray-600 mb-6">📞 +254 735 761467</p>
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="font-semibold mb-2" style={{ color: green.primary }}>Business Hours</h3>
                <p className="text-gray-500 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-500 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-500 text-sm">Sunday: Closed</p>
              </div>
            </div>
            <div>
              <iframe title="DAMOS Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.6615!3d-1.2865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x3b7e2b4c5d8e9f0a!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="280" style={{border: 0}} allowFullScreen loading="lazy" className="rounded-xl shadow-md"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="./images/logo.jpeg" alt="Logo" className="h-12 mx-auto mb-4" />
          <p className="text-gray-400 text-sm">Promoting sustainable clean cooking solutions.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href={`https://wa.me/${whatsappNumber1}`} className="text-gray-400 hover:text-white transition">WhatsApp</a>
            <a href={`https://wa.me/${whatsappNumber2}`} className="text-gray-400 hover:text-white transition">WhatsApp 2</a>
            <a href="mailto:damostechnicalservices@gmail.com" className="text-gray-400 hover:text-white transition">Email</a>
            <button onClick={scrollToTop} className="text-gray-400 hover:text-white transition">↑ Top</button>
          </div>
          <p className="text-gray-500 text-xs mt-4">© {new Date().getFullYear()} DAMOS TECHNICAL SERVICES</p>
        </div>
      </footer>

      {/* Small WhatsApp Icons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        <a href={`https://wa.me/${whatsappNumber1}`} target="_blank" rel="noopener noreferrer" 
          className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07L3 21l2.03-.66C6.87 21.56 9.28 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
        </a>
        <a href={`https://wa.me/${whatsappNumber2}`} target="_blank" rel="noopener noreferrer" 
          className="bg-[#128C7E] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07L3 21l2.03-.66C6.87 21.56 9.28 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
          </svg>
        </a>
      </div>

      {/* Modals */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-xl max-w-md w-full p-5" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="rounded-lg mb-3" />
            <h3 className="text-xl font-semibold mb-1" style={{ color: green.primary }}>{selectedProduct.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{selectedProduct.description}</p>
            <button onClick={() => window.open(`https://wa.me/${whatsappNumber1}?text=I'm interested in ${selectedProduct.name}`, '_blank')} 
              className="w-full py-2 rounded-lg text-white" style={{ backgroundColor: green.primary }}>
              Inquire on WhatsApp
            </button>
            <button onClick={() => setSelectedProduct(null)} className="mt-2 text-gray-400 text-sm w-full">Close</button>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full size" className="rounded-lg w-full" />
            <button onClick={() => setSelectedImage(null)} className="mt-3 text-white text-sm w-full">Close ✕</button>
          </div>
        </div>
      )}
    </div>
  );
}