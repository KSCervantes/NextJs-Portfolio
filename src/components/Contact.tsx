export default function Contact() {
  const email = "your.email@gmail.com";

  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-sm font-bold mb-1 border border-black rounded-full px-4 py-1 w-fit mx-auto bg-black text-white">
          <span className="mr-2">Contact</span>
      </h2>
      <h2 className="text-5xl font-extrabold mb-8 text-center">Get in Touch</h2>

      {/* Contact Form or Information */}
      <div className="max-w-xl mx-auto text-center border border-gray-300 rounded-lg p-8 shadow-sm">
        <p className="text-lg mb-6">I'd love to hear from you! Feel free to download my CV below.</p>

        <div className="flex justify-center mb-8">
          <a
            href="/images/Kylee.pdf"
            download="Kyle Cervantes"
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-900 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 mb-3">You can also find me on:</p>
          <div className="flex justify-center items-center space-x-6">
            {/* Email link */}
            <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 flex items-center">
              kylecervantes2003@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}