import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Award, Users, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChristianReligiousProfessional: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Christian Religious Professional Course - MyFiladelfia</title>
        <meta name="description" content="Comprehensive information about the QCTO Certificate: Christian Religious Professional course offered by MyFiladelfia." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Christian Religious Professional Course</h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <Award className="mr-2" /> Official Accreditation Details
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Accreditation Number:</strong> 01-QCTO/SDP260523133008</li>
            <li><strong>Institution:</strong> Filadelfia Christelike Berading Kaapprovinsie CC (Trading as My Filadelfia)</li>
            <li><strong>Accreditation Period:</strong> 5 Years (May 26, 2023 to May 25, 2028)</li>
            <li><strong>Accredited By:</strong> Quality Council for Trades and Occupations (QCTO)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <Book className="mr-2" /> SAQA Qualification Details
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>SAQA Qualification ID:</strong> 101571</li>
            <li><strong>Qualification Title:</strong> Occupational Certificate: Christian Religious Professional</li>
            <li><strong>NQF Level:</strong> 5</li>
            <li><strong>Credits:</strong> 237</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <Users className="mr-2" /> Purpose and Rationale
          </h2>
          <p className="text-gray-700 mb-4">The purpose of this qualification is to prepare learners to operate as Christian Religious Professionals. Graduates will be able to direct and conduct ministry functions in a faith community, facilitating spiritual formation, nurturing fellowship and mutual care, helping members develop a Christian lifestyle, providing strategic leadership, and developing missional practices.</p>
          <p className="text-gray-700">This qualification addresses the need for formal training for pastors in less formal church groups, enhancing moral and spiritual leadership in communities, addressing concerns about unprofessional conduct, and providing an accessible pathway for those called to pastoral ministry.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <Briefcase className="mr-2" /> Qualification Structure
          </h2>
          <p className="text-gray-700 mb-4"><strong>Total Credits:</strong> 237</p>
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">Knowledge Modules (123 credits)</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Essentials and characteristics of religious practitioners</li>
            <li>The Bible and Bible interpretation</li>
            <li>Basic Christian concepts</li>
            <li>Christian ethics</li>
            <li>History of the church and Christian traditions</li>
            <li>Principles of building the faith community</li>
            <li>Principles of preaching and conducting services</li>
            <li>Spiritual formation, life skills, and value system development</li>
            <li>Pastoral counselling, church leadership, and administration</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">Practical Skill Modules (64 credits)</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Sermon preparation and delivery</li>
            <li>Conducting worship services</li>
            <li>Facilitating spiritual growth and fellowship</li>
            <li>Leadership and management in faith communities</li>
            <li>Community outreach and development</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">Work Experience Modules (50 credits)</h3>
          <p className="text-gray-700">Practical experience in worship services, teaching, and community projects</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <CheckCircle className="mr-2" /> Key Learning Outcomes
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Prepare and deliver sermons</li>
            <li>Administer sacraments</li>
            <li>Plan and conduct worship services</li>
            <li>Facilitate spiritual growth</li>
            <li>Develop and nurture community relationships</li>
            <li>Provide pastoral care and counseling</li>
            <li>Lead strategic and operational management of faith communities</li>
            <li>Engage in community outreach and development</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <GraduationCap className="mr-2" /> Entry Requirements and Assessment
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">Entry Requirements</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>NQF Level 4 with English Communication</li>
            <li>Recognition of Prior Learning (RPL) is applicable</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">Assessment</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Internal formative assessments throughout the program</li>
            <li>External integrated summative assessment conducted through QCTO Assessment Quality Partner</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
            <Briefcase className="mr-2" /> Investment
          </h2>
          <div className="text-gray-700 mb-4">
            <p><strong>Total Credits:</strong> 237</p>
            <p><strong>Price:</strong> R100 per credit</p>
            <p><strong>Total Course Cost:</strong> R23,700</p>
            <p>Pay in installments per month - contact for information.</p>
            <p>Or a one-time payment at 50% off - R11,850</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:jack@myfiladelfia.com" className="btn btn-primary inline-flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Show Interest
            </a>
            <Link to="/investment" className="btn btn-secondary inline-flex items-center">
              View Full Investment Details <Briefcase className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Articulation Options</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Horizontal:</strong> Various Level 5 certificates in related fields</li>
            <li><strong>Vertical:</strong> Bachelor of Arts in Theology: Christian Ministry (NQF Level 6)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChristianReligiousProfessional;