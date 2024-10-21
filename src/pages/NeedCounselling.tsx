import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Compass, Users, Zap } from 'lucide-react';

const NeedCounselling: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Check if the script is still in the document before removing
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Biblical Counselling - MyFiladelfia</title>
        <meta name="description" content="Embark on a transformative journey to uncover your sacred purpose with MyFiladelfia's faith-based counselling approach." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Do you need a safe space to talk?</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Non-judgemental and Confidential Biblical support</h2>
          <p className="text-gray-700 mb-6">
           At MyFiladelfia Skills Development Provider, we are dedicated to nurturing the holistic well-being of our community through faith-based support and guidance. Our program provides a compassionate and understanding environment where individuals can seek spiritual counselling, emotional support, and practical life skills development. 

We empower each person to navigate life's challenges through a combination of Biblical wisdom, peer support, and skill-building workshops. Pastor Jack Martin offers one-on-one online counselling sessions, group support meetings, and educational seminars designed to strengthen faith, improve relationships, and enhance personal growth. 

While we do not provide professional psychological services, we strive to create a safe, non-judgmental space where individuals can find hope, healing, and a sense of belonging. Our goal is to walk alongside you on your journey toward a more fulfilling and purpose-driven life, grounded in faith and supported by a caring community.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 italic mb-4 md:mb-0">Pastor Jack Martin offers one-on-one, nonjudgmental online counseling sessions where you can clear your heart, mind, and soul."</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Approach</h2>
          <p className="text-gray-700 mb-6">
            Pastor Jack's empathetic faith-based approach offers clarity and equips you with the tools to live authentically. Together, we will delve deep into your inner landscape, together with the word of God under guidance of the Holy Spirit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Heart className="w-6 h-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Spiritual Guidance</h3>
                <p className="text-gray-600">Foster a deeper connection through spiritual guidance</p>
              </div>
            </div>
            <div className="flex items-start">
              <Compass className="w-6 h-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Clarity and Direction</h3>
                <p className="text-gray-600">Gain clarity to make Godly decisions</p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="w-6 h-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Grace based approach</h3>
                <p className="text-gray-600">Embrace your true identity and overcome obstacles</p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="w-6 h-6 text-primary mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Feel welcomed into God's care</h3>
                <p className="text-gray-600">Cultivate a sense of belonging and purpose</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Schedule Your Counselling Session</h2>
          <p className="text-gray-700 mb-6">
            Book a FREE 15 minute exploratory Biblical counselling session to see if we are a good fit - <a href="https://myfiladelfiashop.com/product/15min-exploratory-session/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Book Exploratory Session</a>
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Email Pastor Jack for more information</h2>
          <p className="text-gray-700 mb-6">
            Pastor Jack will provide the best way forward and recommend what steps to take next - <a href="mailto:jack@myfiladelfia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Email Pastor Jack personally</a>
          </p>
        </section>

        {/* Disclaimer Section */}
        <section className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Disclaimer</h2>
          <div className="text-sm text-gray-700 space-y-4">
            <p className="font-semibold">Disclaimer for MyFiladelfia Skills Development Provider Support Program:</p>
            <p>MyFiladelfia Skills Development Provider's support program offers faith-based counselling and support services. Please read this disclaimer carefully before participating in our program.</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Nature of Services:</strong> Our program provides spiritual guidance, pastoral counseling, and peer support. We do not offer professional psychological, psychiatric, or medical services.</li>
              <li><strong>Non-Professional Status:</strong> Our counselors and support staff are not licensed mental health professionals, psychologists, or psychiatrists. They are trained volunteers or church staff members offering faith-based support.</li>
              <li><strong>Limitation of Liability:</strong> By participating in our program, you acknowledge and agree that MyFiladelfia Skills Development Provider, its staff, volunteers, and affiliated persons shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your participation in the program or any advice or support received.</li>
              <li><strong>No Guarantee of Outcomes:</strong> While we strive to provide caring and helpful support, we make no guarantees regarding the effectiveness of our services or any specific outcomes.</li>
              <li><strong>Not a Substitute for Professional Care:</strong> Our services are not a substitute for professional mental health treatment, therapy, or medical care. We strongly encourage individuals with mental health concerns to seek help from licensed professionals.</li>
              <li><strong>Confidentiality Limitations:</strong> While we respect your privacy, we are mandatory reporters and may be required by law to disclose information in cases of suspected abuse, self-harm, or harm to others.</li>
              <li><strong>Voluntary Participation:</strong> Your participation in this program is entirely voluntary. You may discontinue at any time.</li>
              <li><strong>Assumption of Risk:</strong> By participating in our program, you assume all risks associated with such participation and agree to hold MyFiladelfia Skills Development Provider harmless from any claims arising from your involvement.</li>
              <li><strong>Emergency Services:</strong> In case of a mental health emergency, please contact emergency services immediately or go to your nearest emergency room. Our program is not equipped to handle crisis situations.</li>
              <li><strong>Acknowledgment:</strong> By participating in our support program, you acknowledge that you have read, understood, and agree to the terms of this disclaimer.</li>
            </ol>
            <p className="mt-4">Last updated: 1 October 2024</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NeedCounselling;