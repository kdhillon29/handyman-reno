// pages/about.js
import Banner from '@/modules/Banner';
import Head from 'next/head';
import CoreValues from '../(home)/modules/CoreValues';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Brisbane Home Renovation Experts | Nbg Constructions Pty Ltd</title>
        <meta
          name="description"
          content="Discover why Nbg Renovations is Brisbane's trusted choice for home renovations, kitchen remodels, bathroom upgrades, and more. Licensed builders delivering top-quality results."
        />
      </Head>
      <Banner />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <section className="mb-10">
          <h2 className="text-2xl text-gray-600 font-semibold mb-2">
            Brisbane&apos;s Trusted Home Renovation Specialists
          </h2>
          <p className="text-gray-600 mt-6">
            At <strong>Nbg Renovations</strong>, we turn your renovation dreams into reality. Based
            in Brisbane, Queensland, we specialise in full-service <strong>home renovations</strong>
            , <strong>kitchen remodels</strong>, <strong>bathroom renovations</strong>, and outdoor
            living transformations. With a team of licensed and experienced builders, we bring local
            knowledge, expert craftsmanship, and personalised service to every project.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            Our vision is to be most reliable and innovative home renovation company. We aim to
            enhance the lifestyle and property value of every client we serve, by delivering smart
            design, high-quality builds, and stress-free experiences.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p>
            Founded in 2020, <strong>Nbg Renovations</strong> started as a small, family-owned
            renovation business with a passion for design and quality. Over the years, we&apos;ve
            grown into one of Brisbane’s most trusted names in home improvement, serving homeowners
            across Brisbane, Northside, Southside, and surrounding suburbs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Kitchen Renovations:</strong> Modern layouts, smart storage, quality finishes
            </li>
            <li>
              <strong>Bathroom Upgrades:</strong> Sleek designs, water-saving fixtures, and stylish
              updates
            </li>
            <li>
              <strong>Full-Home Renovations:</strong> End-to-end remodelling with cohesive design
            </li>
            <li>
              <strong>Basement & Garage Conversions:</strong> Maximise space with functional
              additions
            </li>
            <li>
              <strong>Custom Carpentry:</strong> Built-ins, shelving, wardrobes, and more
            </li>
            <li>
              <strong>Outdoor Living:</strong> Timber decks, pergolas, patios, and alfresco spaces
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ Licensed & insured Queensland builders (QBCC certified)</li>
            <li>✅ Transparent quotes and upfront pricing</li>
            <li>✅ Friendly, local service backed by 5-star reviews</li>
            <li>✅ Project completion on time and on budget</li>
            <li>✅ We treat your home with care and respect</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Let’s Renovate Your Brisbane Home</h2>
          <p>
            Whether you’re renovating a single room or your entire property, our Brisbane team is
            here to help. Get in touch today to book a free consultation and let’s create the home
            you’ve always wanted.
          </p>

          <div className="mt-4">
            <p>
              <strong>📞 Call us:</strong>{' '}
              <a href="tel:+61YourPhone" className="text-blue-600">
                0406490575
              </a>
            </p>
            <p>
              <strong>📧 Email:</strong>{' '}
              <a href="mailto:info@yourbusiness.com" className="text-blue-600">
                ng028@gmail.com
              </a>
            </p>
            <p>
              <strong>📍 Based in:</strong> Brisbane, QLD
            </p>
          </div>
        </section>
        <CoreValues />
      </main>
    </>
  );
}
