export default function Contact() {
  const email = "kylecervantes2003@gmail.com";

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold mb-3 border border-black rounded-full px-4 py-1 w-fit mx-auto bg-black text-white transform hover:scale-105 transition-transform duration-300">
          <span className="mr-2">Contact</span>
        </h2>
        <h2 className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Get in Touch
        </h2>

        {/* Contact Form or Information */}
        <div className="max-w-xl mx-auto text-center border border-gray-200 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <p className="text-lg mb-8 text-gray-700 leading-relaxed">
            I&apos;d love to hear from you! Feel free to download my CV below or reach out through any of the channels below.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="/images/Kylee.pdf"
              download="Kyle Cervantes"
              className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 inline-flex items-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4 font-medium">Connect with me:</p>
            <div className="flex flex-col items-center space-y-4">
              {/* Email link */}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:text-blue-800 flex items-center group transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
