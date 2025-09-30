
import type { Product, Category, Service } from './types';

export const categories: Category[] = [
  { id: 'machinery-equipment', name: 'Machinery & Equipment' },
  { id: 'consultancy-services', name: 'Consultancy & Services' },
];

export const heroImages = [
  {
    src: '/images/hero1.png',
    alt: 'A spread of healthy dairy products',
    hint: 'dairy products',
  },
  {
    src: '/images/hero2.png',
    alt: 'Modern dairy processing facility',
    hint: 'dairy factory',
  },
  {
    src: '/images/hero3.png',
    alt: 'Automated milking machine in operation',
    hint: 'milking machine',
  },
 
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Milk Storage Tank - 300L',
    description: 'Steel Single Phase 300 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 300 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-01.png',
    imageUrls: ['/images/diary-01.png'],
    imageHint: 'storage tank',
    imageHints: ['storage tank', 'milk tank'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
      { name: 'Construction', value: 'Stainless Steel' },
      { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '2',
    name: 'Milk Storage Tank - 1000L',
    description: 'Steel Single Phase 1000 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 1000 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-02.png',
    imageUrls: ['/images/diary-02.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '3',
    name: 'Milk Storage Tank - 3000L',
    description: 'Steel Single Phase 3000 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 3000 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-03.png',
    imageUrls: ['/images/diary-03.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '4',
    name: 'Milk Storage Tank - 2000L',
    description: 'Steel Single Phase 2000 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 2000 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-04.png',
    imageUrls: ['/images/diary-04.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
  id: '5',
  name: 'Milk Storage Tank - 5000L',
  description: 'Steel Single Phase 5000 L Bulk Milk Cooler, For Bmc',
  longDescription: 'Steel Single Phase 5000 L Bulk Milk Cooler, For Bmc',
  imageUrl: '/images/diary-05.png',
  imageUrls: ['/images/diary-05.png'],
  imageHint: 'milk cans',
  imageHints: ['milk cans', 'steel can'],
  categoryId: 'machinery-equipment',
  nutritionalFacts: [
      { name: 'Construction', value: 'Stainless Steel' },
      { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
  ],
},
  {
    id: '6',
    name: 'Milk Can',
    description: 'Aluminium Milk Can',
    longDescription: 'Aluminium Milk Can',
    imageUrl: '/images/diary-07.png',
    imageUrls: ['/images/diary-07.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Capacity', value: '20 Litre,30 Litre, 50 Litre, 40 Litre' },
        { name: 'Construction', value: 'Aluminium' },
        { name: 'Features', value: 'Food-grade materials, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '7',
    name: 'Milk Analyzer',
    description: 'Kurien IoT Bond Milk Collection Unit',
    longDescription: 'We are a leading of kurien iot bond milk collection unit, ultra scan kurien twinsonic milk analyzer with stirrer, ultrascan kurien milk analyzer with thermal printer and iot, ultra scan kurien iot bond pos milk collection unit, kurien mamcu pos mobile automatic milk collection unit and kurien mamcu mobile automatic milk collection unit from Ambala, India.',
    imageUrl: '/images/diary-08.png',
    imageUrls: ['/images/diary-08.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Machine Body Material', value: 'Stainless Steel' },
        { name: 'Capacity', value: '40 sample/hour' },
        { name: 'Usage/Application', value: 'Laboratory Use' },
        { name: 'Test Time', value: '30 Second' },
        { name: 'Analyzer Accessories', value: 'With DP Unit' },
        { name: 'Accuracy', value: '0.1' },
        { name: 'Automation Grade', value: 'Automatic' },
        { name: 'Printer Support', value: 'Yes' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
];

export const services: Service[] = [
    {
        id: 's1',
        name: 'End-to-End Business Advisory and Consultancy Services',
        description: 'Hands-on expertise and strategic support to food and dairy businesses at every stage of development.',
        imageUrl: '/images/business-consultancy-services.png',
        imageHint: 'business meeting',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                We provide comprehensive Business Advisory and Consultancy Solutions Designed to Support Food and Dairy Businesses from Idea to Execution.
              </p>
              <p>
                At Fixora Food Solutions, we provide comprehensive business advisory and consultancy solutions designed to support food and dairy businesses from idea to execution. Our team brings hands-on expertise and strategic guidance to help you grow, streamline operations, and achieve sustainable success.
              </p>
              <p>
                Whether you are a start-up looking to enter the market or an established brand aiming to expand, we partner with you at every stage of development.
              </p>

              <h3 className='text-primary-foreground'>Our Comprehensive Services</h3>
              
              <h4>1. Market Research & Feasibility Studies</h4>
              <p>Identify opportunities, assess risks, and validate business ideas.</p>
              
              <h4>2. Business Planning & Strategy</h4>
              <p>Develop tailored growth strategies, financial models, and roadmaps for success.</p>
              
              <h4>3. Operational Excellence</h4>
              <p>Improve efficiency across production, supply chain, and quality management.</p>
              
              <h4>4. Regulatory & Compliance Guidance</h4>
              <p>Ensure your operations meet local and international standards.</p>
              
              <h4>5. Branding & Market Positioning</h4>
              <p>Create strong brand identities and marketing strategies to stand out in a competitive market.</p>
              
              <h4>6. Ongoing Advisory Support</h4>
              <p>Continuous monitoring, performance reviews, and expert consultation to keep your business on track.</p>

              <h3 className='text-primary-foreground'>Why Partner With Fixora</h3>
              <ul>
                <li>✔ <strong>Industry Expertise</strong> – With our deep understanding of the food and dairy sector, we combine industry knowledge with practical solutions to help your business thrive in a competitive landscape.</li>
                <li>✔ <strong>End-to-End Support</strong> – From initial concept to full implementation, we provide continuous support at every stage of your business journey.</li>
                <li>✔ <strong>Tailored Solutions</strong> – We understand that every business is unique, and we customize our approach to meet your specific needs and goals.</li>
                <li>✔ <strong>Proven Results</strong> – Our track record of helping businesses grow and succeed speaks for itself.</li>
              </ul>

              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>Our advisory services cater to:</p>
              <ul>
                <li>Dairy processing and manufacturing</li>
                <li>Food and beverage production</li>
                <li>Agribusiness and farm-based enterprises</li>
                <li>FMCG (Fast-Moving Consumer Goods)</li>
                <li>Food processing and manufacturing facilities</li>
                <li>Distribution and supply chain companies</li>
              </ul>

              <h3 className='text-primary-foreground'>Your Success, Our Mission</h3>
              <p>
                We believe in building long-term partnerships with our clients. Our goal is not just to provide consultancy services, but to become an extension of your team, working alongside you to achieve your business objectives.
              </p>
              <p>
                With Fixora Food Solutions as your advisory partner, you gain access to a wealth of industry knowledge, practical expertise, and strategic insights that can help transform your business and drive sustainable growth.
              </p>
          
              <p className="font-bold">
                📌 Ready to take your business to the next level?<br/>
                We’d love to guide you on your growth journey.
              </p>
            </div>
          )
    },
    {
        id: 's2',
        name: 'Machinery Maintenance & Automation',
        description: 'Specialized preventive and corrective maintenance services combined with automation solutions.',
        imageUrl: '/images/Robotics.png',
        imageHint: 'industrial automation',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                Specialized Preventive and Corrective Maintenance Services to Ensure Smooth, Reliable, and Safe Operation of Your Food and Dairy Machinery.
              </p>
              <p>
                At Fixora Food Solutions, we deliver specialized preventive and corrective maintenance services to ensure the smooth, reliable, and safe operation of your food and dairy machinery. Our expert team focuses on minimizing downtime, extending equipment lifespan, and improving overall efficiency through systematic care and servicing.
              </p>
              <p>
                In addition to maintenance, we offer cutting-edge automation solutions tailored to your production processes. From integrating smart technologies to upgrading existing systems, our automation services help you achieve greater productivity, accuracy, and cost-effectiveness.
              </p>

              <h3 className='text-primary-foreground'>Our Comprehensive Offerings</h3>
              
              <h4>1. Preventive Maintenance Programs</h4>
              <p>Regular inspections and servicing to avoid unexpected breakdowns.</p>
              
              <h4>2. Corrective Maintenance & Repairs</h4>
              <p>Rapid troubleshooting and repair services to restore operations quickly.</p>
              
              <h4>3. Automation Upgrades</h4>
              <p>Integration of modern control systems, sensors, and software to streamline production.</p>
              
              <h4>4. Process Optimization</h4>
              <p>Enhancing workflows through automation for improved consistency and reduced waste.</p>
              
              <h4>5. Customized Solutions</h4>
              <p>Tailored maintenance and automation strategies designed for your unique operational needs.</p>

              <h3 className='text-primary-foreground'>Why Choose Fixora for Machinery Maintenance & Automation</h3>
              <ul>
                <li>✔ <strong>Expert Technicians</strong> – Our team consists of highly skilled professionals with deep expertise in food and dairy machinery.</li>
                <li>✔ <strong>Proactive Approach</strong> – We focus on preventing issues before they occur, minimizing costly downtime.</li>
                <li>✔ <strong>Cutting-Edge Technology</strong> – We leverage the latest automation technologies to enhance your production capabilities.</li>
                <li>✔ <strong>Tailored Solutions</strong> – Every maintenance and automation plan is customized to fit your specific equipment and operational requirements.</li>
                <li>✔ <strong>Reliability & Safety</strong> – We ensure your machinery operates safely and reliably, meeting all industry standards.</li>
              </ul>

              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>Our maintenance and automation services cater to:</p>
              <ul>
                <li>Dairy processing plants</li>
                <li>Food and beverage manufacturing facilities</li>
                <li>Agro-processing units</li>
                <li>FMCG production lines</li>
                <li>Specialized food processing equipment</li>
              </ul>

              <h3 className='text-primary-foreground'>Future-Ready Operations with Fixora</h3>
              <p>
                With a focus on innovation, reliability, and efficiency, we ensure your machinery operates at peak performance while keeping your business future-ready. Our maintenance and automation solutions are designed to adapt to evolving industry demands and technological advancements.
              </p>
              <p>
                Whether you're looking to maintain your existing equipment or upgrade to smart, automated systems, Fixora Food Solutions is your trusted partner for all machinery maintenance and automation needs in the food and dairy industry.
              </p>
          
              <p className="font-bold">
                📌 Ready to optimize your machinery operations?<br/>
                Let us help you achieve peak performance and efficiency.
              </p>
            </div>
          )
    },
    {
        id: 's3',
        name: 'Quality Certification Support',
        description: 'Guidance and assistance in obtaining relevant quality standards and certifications.',
        imageUrl: '/images/quality.png',
        imageHint: 'certificate quality',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                End-to-End Guidance and Assistance to Help Food and Dairy Businesses Obtain Relevant Quality Standards and Certifications.
              </p>
              <p>
                At Fixora Food Solutions, we provide end-to-end guidance and assistance to help food and dairy businesses obtain the relevant quality standards and certifications required to build trust and compete in the marketplace. Our team ensures that your processes, documentation, and operations are fully aligned with industry best practices and regulatory requirements.
              </p>

              <h3 className='text-primary-foreground'>Our Comprehensive Services</h3>
              
              <h4>1. Gap Analysis & Readiness Assessment</h4>
              <p>Evaluating current processes against certification requirements.</p>
              
              <h4>2. Documentation & Process Development</h4>
              <p>Assisting in creating standard operating procedures (SOPs) and quality manuals.</p>
              
              <h4>3. Training & Capacity Building</h4>
              <p>Preparing your team to meet and maintain compliance standards.</p>
              
              <h4>4. Certification Application Support</h4>
              <p>Guidance throughout the certification process, from application to audit.</p>
              
              <h4>5. Ongoing Compliance Monitoring</h4>
              <p>Ensuring continuous adherence to certification standards.</p>

              <h3 className='text-primary-foreground'>Certifications We Support</h3>
              <p>We support certifications such as:</p>
              <ul>
                <li><strong>ISO Standards</strong> – Including ISO 9001 (Quality Management), ISO 22000 (Food Safety Management), and other relevant ISO certifications</li>
                <li><strong>HACCP</strong> – Hazard Analysis and Critical Control Points for food safety</li>
                <li><strong>GMP</strong> – Good Manufacturing Practices for food production</li>
                <li><strong>FSSC 22000</strong> – Food Safety System Certification</li>
                <li><strong>BRCGS</strong> – Brand Reputation through Compliance with Global Standards</li>
                <li><strong>Other Food Safety and Quality Management Systems</strong> – Tailored to your specific industry requirements</li>
              </ul>

              <h3 className='text-primary-foreground'>Benefits of Quality Certification</h3>
              <ul>
                <li>✔ <strong>Enhanced Credibility</strong> – Build trust with customers, suppliers, and stakeholders through recognized quality standards</li>
                <li>✔ <strong>Market Access</strong> – Gain entry to local and international markets that require certified suppliers</li>
                <li>✔ <strong>Consumer Confidence</strong> – Demonstrate your commitment to food safety and quality</li>
                <li>✔ <strong>Operational Efficiency</strong> – Streamline processes and reduce waste through standardized procedures</li>
                <li>✔ <strong>Competitive Advantage</strong> – Differentiate your business in a crowded marketplace</li>
                <li>✔ <strong>Risk Management</strong> – Minimize food safety risks and potential liabilities</li>
              </ul>

              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>Our quality certification services cater to:</p>
              <ul>
                <li>Dairy processing and manufacturing facilities</li>
                <li>Food and beverage production companies</li>
                <li>Agro-processing units</li>
                <li>FMCG (Fast-Moving Consumer Goods) manufacturers</li>
                <li>Specialized food processing operations</li>
                <li>Export-oriented food businesses</li>
              </ul>

              <h3 className='text-primary-foreground'>Your Path to Quality Excellence with Fixora</h3>
              <p>
                With our expertise, you can achieve greater credibility, improved consumer confidence, and sustainable business growth. Our certification support services are designed to guide you through every step of the certification journey, from initial assessment to ongoing compliance.
              </p>
              <p>
                We understand that obtaining and maintaining quality certifications is not just about meeting requirements—it's about building a culture of excellence that drives long-term success. Fixora Food Solutions works closely with your team to ensure that quality standards become an integral part of your operations.
              </p>
          
              <p className="font-bold">
                📌 Ready to elevate your quality standards?<br/>
                Let us help you achieve the certifications that will set you apart in the marketplace.
              </p>
            </div>
          )
    },
    {
        id: 's4',
        name: 'Business Planning and Development',
        description: 'Expert support in developing robust business plans, feasibility studies, and growth strategies.',
        imageUrl: '/images/busi-dev.png',
        imageHint: 'business planning',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                Expert Support in Crafting Robust Business Plans, Feasibility Studies, and Growth Strategies Tailored to Food and Dairy Enterprises.
              </p>
              <p>
                At Fixora Food Solutions, we provide expert support in crafting robust business plans, feasibility studies, and growth strategies tailored to the unique needs of food and dairy enterprises. Our approach combines market insights, financial expertise, and industry knowledge to help businesses make informed decisions and achieve long-term success.
              </p>

              <h3 className='text-primary-foreground'>Our Comprehensive Services</h3>
              
              <h4>1. Feasibility Studies</h4>
              <p>Assessing market potential, financial viability, and operational requirements for new projects.</p>
              
              <h4>2. Business Plan Development</h4>
              <p>Creating detailed, investor-ready plans with financial projections and strategic roadmaps.</p>
              
              <h4>3. Growth Strategy Formulation</h4>
              <p>Designing customized strategies to expand operations, increase profitability, and strengthen market presence.</p>
              
              <h4>4. Financial Modeling & Forecasting</h4>
              <p>Providing data-driven insights for effective budgeting, investment, and resource allocation.</p>
              
              <h4>5. Start-up & Expansion Support</h4>
              <p>Assisting new ventures and established businesses in scaling operations successfully.</p>

              <h3 className='text-primary-foreground'>Why Choose Fixora for Business Planning and Development</h3>
              <ul>
                <li>✔ <strong>Industry Expertise</strong> – Deep understanding of the food and dairy sector with insights into market trends and challenges</li>
                <li>✔ <strong>Data-Driven Approach</strong> – Our strategies are based on thorough research and analysis rather than assumptions</li>
                <li>✔ <strong>Tailored Solutions</strong> – Customized plans that align with your specific business goals and circumstances</li>
                <li>✔ <strong>Comprehensive Support</strong> – End-to-end assistance from initial concept to implementation</li>
                <li>✔ <strong>Risk Mitigation</strong> – Identifying potential challenges early and developing strategies to address them</li>
              </ul>

              <h3 className='text-primary-foreground'>Key Benefits</h3>
              <ul>
                <li>Build a strong foundation for sustainable business growth</li>
                <li>Minimize risks through thorough analysis and planning</li>
                <li>Attract investors with professional, comprehensive business plans</li>
                <li>Make informed decisions based on market insights and financial projections</li>
                <li>Unlock new opportunities for expansion and profitability</li>
                <li>Optimize resource allocation for maximum efficiency</li>
              </ul>

              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>Our business planning and development services cater to:</p>
              <ul>
                <li>Dairy processing and manufacturing</li>
                <li>Food and beverage production</li>
                <li>Agribusiness and farm-based enterprises</li>
                <li>FMCG (Fast-Moving Consumer Goods)</li>
                <li>Food processing and manufacturing facilities</li>
                <li>Export-oriented food businesses</li>
              </ul>

              <h3 className='text-primary-foreground'>Your Success Journey with Fixora</h3>
              <p>
                With our end-to-end business development expertise, we empower you to build a strong foundation, minimize risks, and unlock new opportunities for sustainable growth. Whether you're launching a new venture or expanding an existing business, Fixora Food Solutions provides the strategic guidance and practical support you need to succeed.
              </p>
              <p>
                Our team works closely with you to understand your vision, assess your current position, and develop actionable plans that drive results. We're not just consultants—we're partners in your success, committed to helping you achieve your business objectives.
              </p>
          
              <p className="font-bold">
                📌 Ready to develop a winning business strategy?<br/>
                Let us help you build a roadmap to success.
              </p>
            </div>
          )
    },
    {
        id: 's5',
        name: 'Business development consultancy services',
        description: 'Providing expert guidance to help your business grow and thrive in the competitive food industry.',
        imageUrl: '/images/business_development_consultancy_services.png',
        imageHint: 'business development',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                Driving Growth. Empowering Innovation. Building Stronger Businesses.
              </p>
              <p>
                At Fixora Food Solutions, we don’t just help businesses survive—we help them thrive. With our deep expertise in the food and dairy sectors, we provide Business Development Consultancy Services tailored to unlock new opportunities, strengthen operations, and guide your business toward sustainable growth in Sri Lanka and beyond.
              </p>
              <p>
                We believe every challenge is an opportunity in disguise, and with the right strategies, ambitious businesses can turn potential into performance.
              </p>
          
              <h3 className='text-primary-foreground'>How We Help Businesses Grow</h3>
              <p>
                At Fixora, we are more than consultants—we are growth partners. Our services are structured to cover the full spectrum of business development needs:
              </p>
              
              <h4>1. Strategic Business Planning</h4>
              <ul>
                <li>Assessing your current business position.</li>
                <li>Developing tailored strategies that align with your vision and goals.</li>
                <li>Creating actionable roadmaps for growth, profitability, and market dominance.</li>
              </ul>
          
              <h4>2. Market Expansion & Opportunity Identification</h4>
              <ul>
                <li>Identifying potential market segments in Sri Lanka and internationally.</li>
                <li>Assessing distribution channels, export potential, and market entry strategies.</li>
                <li>Competitor and market analysis to help you stay one step ahead.</li>
              </ul>
          
              <h4>3. Process Improvement & Cost Optimization</h4>
              <ul>
                <li>Reviewing operational processes to reveal bottlenecks.</li>
                <li>Designing solutions to minimize costs and maximize productivity.</li>
                <li>Improving resource utilization for leaner, smarter business operations.</li>
              </ul>
          
              <h4>4. Partnership & Network Development</h4>
              <ul>
                <li>Facilitating connections with reliable suppliers, financial partners, and technology providers.</li>
                <li>Building collaborations that create win-win outcomes.</li>
                <li>Helping businesses present themselves credibly to potential investors.</li>
              </ul>
          
              <h4>5. Regulatory & Compliance Support</h4>
              <ul>
                <li>Guidance to ensure compliance with local regulations in Sri Lanka.</li>
                <li>Support to align businesses with international food and dairy industry standards.</li>
                <li>Preparing businesses for audits, certifications, and export requirements.</li>
              </ul>
          
              <h3 className='text-primary-foreground'>Why Businesses Choose Fixora</h3>
              <ul>
                <li>🌟 <strong>Industry-Specific Expertise</strong> – With our foundation in dairy and food solutions, we know the unique challenges of these sectors.</li>
                <li>🌟 <strong>Customized Solutions</strong> – Every business is different. We never provide cookie-cutter advice—we provide strategies designed to fit your story.</li>
                <li>🌟 <strong>Future-Focused Approach</strong> – Our recommendations are built to ensure not just short-term gains, but long-term resilience.</li>
                <li>🌟 <strong>Hands-On Support</strong> – From planning to execution, we’re right there with you, keeping things practical, measurable, and impactful.</li>
              </ul>
          
              <h3 className='text-primary-foreground'>What You’ll Gain</h3>
              <p>When you partner with Fixora Business Development Consultants, you can expect:</p>
              <ul>
                <li>Enhanced competitiveness in local and export markets</li>
                <li>Improved operational efficiency and team productivity</li>
                <li>Optimized financial performance through smarter strategies</li>
                <li>Sustainable growth in a rapidly changing business landscape</li>
              </ul>
          
              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>While our core strength lies in the food and dairy sector, our consultancy expertise extends to:</p>
              <ul>
                <li>FMCG (Fast-Moving Consumer Goods)</li>
                <li>Agribusiness & farm-based enterprises</li>
                <li>Food processing and manufacturing facilities</li>
                <li>Distribution and supply chain companies</li>
              </ul>
          
              <h3 className='text-primary-foreground'>Success Made Simple—with Fixora by Your Side</h3>
              <p>
                Business development is not just about ideas—it’s about action and results. At Fixora, we bring the insights, tools, and partnerships to turn your vision into reality.
              </p>
          
              <p className="font-bold">
                📌 Ready to take your business to the next level?<br/>
                We’d love to guide you on your growth journey.
              </p>
            </div>
          )
    },
    {
        id: 's6',
        name: 'Engineering consultancy services',
        description: 'Specialized engineering consultancy for factory automation and enhancing efficiency.',
        imageUrl: '/images/engineering_consultancy_service.png',
        imageHint: 'factory automation',
        categoryId: 'consultancy-services',
        longDescription: (
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead">
                Smarter Designs. Reliable Systems. Efficient Operations.
              </p>
              <p>
                At Fixora Food Solutions, we believe a factory is more than machines—it’s a living ecosystem of people, processes, and technology that must work in perfect harmony. Our Engineering Consultancy Services are designed to help businesses in Sri Lanka build, upgrade, and optimize their factories for maximum efficiency, safety, and long-term sustainability.
              </p>
              <p>
                From total plant design to machine-level problem solving, Fixora provides 360° engineering expertise: Mechanical, Electrical, Civil, and Automation solutions woven into one seamless approach.
              </p>

              <h3 className='text-primary-foreground'>Our Engineering Services</h3>
              <p>We cover the full scope of engineering consultancy, ensuring your production facility operates at its best:</p>

              <h4>1. Total Productive Maintenance (TPM)</h4>
              <ul>
                <li>Implementing TPM practices to minimize downtime and maximize machine efficiency.</li>
                <li>Training your teams in ownership-based equipment care.</li>
                <li>Building a culture of continuous improvement across your plant.</li>
              </ul>

              <h4>2. Preventive Maintenance Planning & Scheduling</h4>
              <ul>
                <li>Designing preventive maintenance schedules that reduce breakdowns.</li>
                <li>Introducing monitoring systems that predict issues before they halt production.</li>
                <li>Extending machine life span and cutting unexpected repair costs.</li>
              </ul>

              <h4>3. Factory and Plant Designing</h4>
              <ul>
                <li>End-to-end factory layout and infrastructure planning.</li>
                <li>Civil and structural designs for new facilities and expansions.</li>
                <li>Ergonomic, efficient, and safety-compliant factory layouts.</li>
                <li>Integration of workflow, utilities, and space optimization for smooth operations.</li>
              </ul>

              <h4>4. Machine & Equipment Designing</h4>
              <ul>
                <li>Custom design of production machinery to meet your specific requirements.</li>
                <li>Modifications and re-engineering of existing equipment.</li>
                <li>Incorporating energy-efficient and hygienic designs tailored for the food & dairy sector.</li>
              </ul>

              <h4>5. Production Planning & Optimization</h4>
              <ul>
                <li>Streamlining material flows from raw milk reception to finished product packaging.</li>
                <li>Designing systems for balanced production lines.</li>
                <li>Maximizing throughput while reducing waste and downtime.</li>
              </ul>

              <h4>6. Automation & Smart Solutions</h4>
              <ul>
                <li>PLC, SCADA, and IoT-based automation for smarter factory operations.</li>
                <li>Integration of robotics, sensors, and data systems to drive Industry 4.0.</li>
                <li>Energy management, process monitoring, and digital dashboards.</li>
              </ul>

              <h4>7. Multidisciplinary Engineering Solutions</h4>
              <ul>
                <li>Mechanical Engineering – Machine design, piping systems, utilities, HVAC.</li>
                <li>Electrical Engineering – Power distribution, control panel design, automation systems.</li>
                <li>Civil Engineering – Structural design, construction management, and plant facilities.</li>
              </ul>

              <h3 className='text-primary-foreground'>Why Partner With Fixora?</h3>
              <ul>
                <li>✔ Industry Expertise – Decades of combined knowledge in food, beverage, and dairy factory engineering.</li>
                <li>✔ Integrated Approach – We break silos—civil, mechanical, and electrical teams work as one.</li>
                <li>✔ Efficiency-Focused – Every solution targets increased productivity, reduced downtime, and lower costs.</li>
                <li>✔ Future-Ready Plants – Our solutions embrace automation and sustainability.</li>
                <li>✔ Practical & Customizable – We adapt engineering principles to fit your actual operations, not textbook cases.</li>
              </ul>

              <h3 className='text-primary-foreground'>How Our Services Benefit You</h3>
              <ul>
                <li>Significant reduction in unplanned breakdowns</li>
                <li>Optimized use of space, energy, and resources</li>
                <li>Faster production cycle times and higher output</li>
                <li>Safer, cleaner, and compliant factory environments</li>
                <li>Long-term cost savings from efficient designs and preventive systems</li>
                <li>Confidence to scale your operations as business grows</li>
              </ul>

              <h3 className='text-primary-foreground'>Industries We Serve</h3>
              <p>Our engineering consultancy services cater to:</p>
              <ul>
                <li>Dairy processing plants</li>
                <li>Food & beverage manufacturers</li>
                <li>FMCG factories</li>
                <li>Agro-processing facilities</li>
                <li>Other manufacturing industries requiring automation solutions</li>
              </ul>

              <h3 className='text-primary-foreground'>Your Factory, the Fixora Way</h3>
              <p>Building or improving a factory is a serious investment. Fixora ensures that every rupee you spend translates into efficiency, robustness, and growth. Whether you need a new facility designed from scratch or wish to upgrade and automate existing systems, we are ready with the expertise and passion to deliver world-class engineering solutions right here in Sri Lanka.</p>
            </div>
          )
    }
]


export const newsArticles = [];
