import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Koi Pond Health Log</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Keep your koi thriving by tracking water quality, temperature, and health events in one simple place.
          </p>
          <Link href="/log">
            <a className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Start Logging
            </a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Real‑time Logging</h3>
              <p>Record temperature, pH, ammonia, nitrite, nitrate, and more with instant timestamps.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p>Visual charts show trends over weeks, months, and seasons to spot problems early.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Alerts & Sharing</h3>
              <p>Get email/SMS alerts when values exceed safe ranges and share logs with club members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to protect your koi?</h2>
          <Link href="/signup">
            <a className="bg-white text-teal-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Create Your Free Account
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}