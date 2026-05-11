export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">
            DAMOS TECHNICAL SERVICES
          </h1>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-green-700">
              Home
            </a>

            <a href="#about" className="hover:text-green-700">
              About
            </a>

            <a href="#services" className="hover:text-green-700">
              Services
            </a>

            <a href="#contact" className="hover:text-green-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 bg-linear-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Sustainable Clean Cooking Solutions
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Promoting appropriate technology in clean cooking fuel
              production through biomass briquettes, equipment fabrication,
              training, and research.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 hover:scale-105 transition-transform duration-300">
                Our Services
              </button>

              <button className="bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-800 hover:scale-105 transition-transform duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Clean Energy"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>{/* About Section */}
<section id="about" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6 text-green-700">
      About Us
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed">
      DAMOS TECHNICAL SERVICES is committed to promoting sustainable
      clean cooking technologies through biomass fuel production,
      equipment fabrication, community training, and research.
    </p>
  </div>
</section>

{/* Services Section */}
<section id="services" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-green-700 mb-16">
      Our Services
    </h2>

    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          Biomass Briquettes
        </h3>

        <p className="text-gray-600">
          Production of biomass briquettes from agro waste and forest
          residues.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Equipment Fabrication
        </h3>

        <p className="text-gray-600">
          Fabrication of briquette extruders, crushers, dryers,
          mixers, and kilns.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Training Programs
        </h3>

        <p className="text-gray-600">
          Training individuals and community groups on biomass fuel
          production.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-4">
          Research
        </h3>

        <p className="text-gray-600">
          Research on clean cooking technologies and policies.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-8">
      Contact Us
    </h2>

    <p className="text-lg text-gray-600 mb-4">
      Email: damostechnicalservices@gmail.com
    </p>

    <p className="text-lg text-gray-600">
      Workshop Location: Loyal Drive off Dagoretti Road in Kikuyu
    </p>
  </div>
</section>{/* Footer */}
<footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold mb-4">
      DAMOS TECHNICAL SERVICES
    </h3>

    <p className="text-gray-300">
      Promoting sustainable clean cooking solutions.
    </p>

    <p className="mt-4 text-gray-400">
      © {new Date().getFullYear()} All Rights Reserved
    </p>
  </div>
</footer>
    </div>
  );
}