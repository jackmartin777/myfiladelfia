import React from 'react';
import { Award, CheckCircle, Globe, UserCheck, Users, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Accreditations: React.FC = () => {
  return (
    <section id="accreditations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-dark">Accreditations & Partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <Award className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">QCTO Accredited</h3>
            <p className="text-gray-700">Quality Council for Trades and Occupations recognized for excellence in education.</p>
            <a href="https://www.qcto.org.za/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <CheckCircle className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">MINTS Approved</h3>
            <p className="text-gray-700">Miami International Seminary collaboration for global theological education.</p>
            <a href="https://www.mints.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-4 inline-block">Learn More</a>
          </div>
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <Globe className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">Global Partnerships</h3>
            <p className="text-gray-700">Collaborations with international theological institutions.</p>
          </div>
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700 text-center">
            MyFiladelfia is a skills development provider registered under the QCTO. We are not registered with the Department of Higher Education and do not provide or issue national qualifications. If you have any uncertainties, please contact Pastor Jack Martin at <a href="mailto:jack@myfiladelfia.com" className="text-primary hover:underline">jack@myfiladelfia.com</a>.
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold my-16 text-center text-primary-dark">Professional Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <UserCheck className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">ASCHP Registration</h3>
            <p className="text-gray-600 mb-4">Register professionally as a non-psychological counsellor with the ASCHP upon course completion.</p>
            <a href="https://www.aschp.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn More</a>
          </div>
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <Users className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">CCSA Registration</h3>
            <p className="text-gray-600 mb-4">Register with the CCSA at any time during the course.</p>
            <a href="https://www.c4csa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn More</a>
          </div>
          <div className="text-center p-8 bg-cream rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h3 className="text-2xl font-sans font-semibold mb-4 text-primary-dark">CPSC Associated Affiliation</h3>
            <p className="text-gray-600 mb-4">Register with CPSC for associated affiliation.</p>
            <a href="https://www.cpsc.org.za/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Learn More</a>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-dark">CCSA Registration</h3>
            <p className="text-gray-600">
              The CCSA is home to counsellors of the informal sector who serve as life skills counsellors, trauma debriefers, pastoral counsellors, marriage counsellors and life style coaches, etc. The purpose of this association is to meet the urgent need for a professional body to regulate non-psychological counsellors. The need is to provide consistency in standards across and within provinces in South Africa, and across different counselling contexts. Many voluntary counsellors currently work in a variety of contexts often in environments where mental health professional such as psychologists and social workers are not necessarily accessible to the majority of the population.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-dark">ASCHP Registration</h3>
            <p className="text-gray-600">
              The ASCHP is home to community or workplace-based counsellors who work in structured and supervised environments including, but not limited to private Wellness/Counselling Centres or government institutions, schools, Non-Governmental Organisations (NGO's) including Faith Based, Community Based and Not-for-Profit Organisations, the South African Police Service, Counselling Call Centres, Hospitals, Clinics and Support Agencies, Sports Centres, Education and Training facilities, Health and Emergency services and facilities.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-dark">CPSC Associated Affiliation</h3>
            <p className="text-gray-600">
              Only 2 groups of people qualify and may apply for Associated Affiliation:
              <br /><br />
              (a) The applicant is committed to the CPSC objective but is not actively involved in any counselling. Pensioners no longer in active practice but still committed to the CPSC objective can also apply for (or change to) this category. No compulsory CPSC CPD points or Scope of Practice apply to this category as no counselling is involved.
              <br /><br />
              (b) The applicant is both qualified for and actively involved in counselling but is registered with a South African statutory council and has received a registered counselling scope of practice from that council. The applicant therefore does not need a designation with CPSC. Many counsellors, who are registered with a statutory council, join CPSC/ACRP to add the Christian character of CPSC/ACRP to their existing practice profile. No compulsory CPSC CPD points apply to this type of affiliation as this applicant will already have to comply with the CPD requirements of the statutory council. No scope of practice is awarded by CPSC.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary-dark">HPCSA Information</h3>
            <p className="text-gray-600">
              The Health Professions Council of South Africa (HPCSA) is a statutory body established under the Health Professions Act 56 of 1974. It regulates various health professions in South Africa, including registered counsellors. Registered counsellors are mental health professionals who have completed specific educational requirements and practical training as mandated by the HPCSA. They are authorized to provide basic psychological interventions, psycho-education, and mental health promotion services under the supervision of psychologists. The HPCSA sets standards for education, training, and ethical conduct for registered counsellors to ensure the quality and safety of mental health services provided to the public.
              <br /><br />
              <strong>It is important to note that our organization/skills development provider does not train psychological counsellors, and our training programs do not lead to registration with the Health Professions Council of South Africa.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;