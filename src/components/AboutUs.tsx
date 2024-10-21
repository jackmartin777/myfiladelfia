import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary-dark mb-8">About MyFiladelfia</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            MyFiladelfia is a biblically-based network dedicated to pastoral care, mentorship, and life skills, offering a diverse range of pastoral resources. We believe in respecting everyone—regardless of language, culture, or Christian denomination.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our History</h2>
          <p className="text-gray-700 mb-4">
            Since 1994, MyFiladelfia has been an interdenominational ministry that has expanded throughout South Africa and internationally. Our team is passionate about the Lord Jesus Christ and believes He is the source of all true inner healing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Core Values</h2>
          <p className="text-gray-700 mb-4">
            At MyFiladelfia, we uphold trust, honesty, accountability, transparency, excellence, and integrity as the foundations of our ministry. We journey with students toward discipleship, encouraging perseverance, facilitating restored relationships, promoting spiritual growth, and building partnerships within the ministry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Approach</h2>
          <p className="text-gray-700 mb-4">
            A biblical counselor—trained by MyFiladelfia—practices counseling in accordance with Christian beliefs, supported by the Bible and guided by the Holy Spirit. We emphasize unity within the body of Christ, representing a wide variety of denominations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Courses</h2>
          <p className="text-gray-700 mb-4">
            MyFiladelfia offers short courses in a modular format, included in an annual program. These courses support students' ministries and provide essential training for their calling. Our courses prepare individuals for service in Christian ministry, not secular work.
          </p>
          <p className="text-gray-700 mb-4">
            While MyFiladelfia Biblical Counselling Institute does not issue national qualifications, religious qualifications are granted by MINTS (Miami International Seminary). We are also a QCTO Accredited Skills Development Provider (SDP260523133008).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-4">Join Us</h2>
          <p className="text-gray-700 mb-4">
            We welcome engagement from individuals and organizations passionate about Jesus Christ, participating in discussions vital to our ministry and the expansion of God's Kingdom.
          </p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;