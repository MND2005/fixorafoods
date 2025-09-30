
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
    name: 'Milk Can - 10.57 Gallon',
    description: '10.57 Gallon Stainless Steel Milk Can',
    longDescription: '10.57 Gallon Stainless Steel Milk Can',
    imageUrl: '/images/diary-06.png',
    imageUrls: ['/images/diary-06.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Food-grade materials, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '7',
    name: 'Milk Can',
    description: 'Aluminium Milk Can',
    longDescription: 'Aluminium Milk Can',
    imageUrl: '/images/diary-07.png',
    imageUrls: ['/images/diary-07.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Aluminium' },
        { name: 'Features', value: 'Food-grade materials, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '8',
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
        categoryId: 'consultancy-services'
    },
    {
        id: 's2',
        name: 'Machinery Maintenance & Automation',
        description: 'Specialized preventive and corrective maintenance services combined with automation solutions.',
        imageUrl: '/images/Robotics.png',
        imageHint: 'industrial automation',
        categoryId: 'consultancy-services',
        offerings: [
            'Preventive maintenance',
            'Corrective repairs',
            'Automation solutions',
            'Performance optimization'
        ],
        benefits: [
            'Reduced downtime',
            'Increased efficiency',
            'Cost savings',
            'Improved reliability'
        ]
    },
    {
        id: 's3',
        name: 'Quality Certification Support',
        description: 'Guidance and assistance in obtaining relevant quality standards and certifications.',
        imageUrl: '/images/quality.png',
        imageHint: 'certificate quality',
        categoryId: 'consultancy-services'
    },
    {
        id: 's4',
        name: 'Business Planning and Development',
        description: 'Expert support in developing robust business plans, feasibility studies, and growth strategies.',
        imageUrl: '/images/busi-dev.png',
        imageHint: 'business planning',
        categoryId: 'consultancy-services'
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
