function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Welcome to our platform! We are dedicated to providing exceptional services and creating 
              meaningful connections with our users. Our mission is to simplify your digital experience 
              while maintaining the highest standards of quality and security.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To empower users with intuitive and powerful tools that make their daily tasks easier 
                  and more efficient. We believe in the power of technology to transform lives.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To be the leading platform that bridges the gap between innovation and accessibility, 
                  creating solutions that are both cutting-edge and user-friendly.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">User-centric design approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Secure and reliable platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">Continuous innovation and updates</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
              <p className="text-gray-700">
                We are a diverse team of passionate developers, designers, and innovators working 
                together to create exceptional digital experiences. Our collaborative approach ensures 
                that every product we deliver meets the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About