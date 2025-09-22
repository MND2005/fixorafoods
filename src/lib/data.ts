
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
    name: 'Milk Storage Tank - 3500L',
    description: 'Steel Single Phase 3500 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 3500 L Bulk Milk Cooler, For Bmc',
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
  {
    id: '9',
    name: 'Cream Separator',
    description: 'Cream Separator 165 LPH,300 LPH Dual Operated, 300 LPH FLOOR MODEL, 1200 LPH SS COVERING ONLINE',
    longDescription: 'Providing you the best range of cream separator 165 lph dual operated, cream separator 300 lph dual operated, cream separator 300 lph floor model, cream separator 600 lph dual operated, cream separator 90 lph electric operated and cream separator 90 lph hand operated with effective & timely delivery.',
    imageUrl: '/images/diary-09.png',
    imageUrls: ['/images/diary-09.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Production Capacity', value: '165 LPH, 300 LPH, 1200 LPH' },
        { name: 'No. Of Discs', value: '20 - 22' },
        { name: 'Bowl Material', value: 'Mild Steel' },
        { name: 'Milk Tank', value: 'Aluminum' },
        { name: 'Automation Grade', value: 'Automatic' },
        { name: 'Type', value: 'Dual' },
        { name: 'Tank Capacity', value: '25 Litres' },
        { name: 'Brand', value: 'HT' },
        { name: 'Usage/Application', value: 'Milk Separation' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
  {
    id: '10',
    name: 'Alcohol Gun',
    description: 'Alcohol Gun For Dairy And Milk Testing',
    longDescription: 'Our range of products include alcohol gun for dairy and milk testing.',
    imageUrl: '/images/diary-10.png',
    imageUrls: ['/images/diary-10.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Test Time', value: '3 Sec' },
        { name: 'Weight', value: '1.5 Kg' },
        { name: 'Brand', value: 'HT' },
        { name: 'Usage', value: 'Milk Testing' },
        { name: 'Packing Type', value: 'Box' },
        { name: 'Material', value: 'Stainless Steel' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
  {
    id: '11',
    name: 'Milk Butyrometer',
    description: 'Milk Butyrometer 0-10% ISI Mark',
    longDescription: 'We are a leading of milk butyrometer 0-10% isi mark, cheese butyrometer 0-40% with weighing cup and 2 rubber stoppers, long neck 0-0.5% skim milk butyrometer, milk butyrometer 0 - 8%, milk butyrometer 0-10% double tested and ice cream butyrometer 0-20% (volumetric method) from Ambala, India.',
    imageUrl: '/images/diary-11.png',
    imageUrls: ['/images/diary-11.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Usage/Application', value: 'Laboratory' },
        { name: 'Material', value: 'Glass' },
        { name: 'Model No', value: 'HTMB-2' },
        { name: 'Percent Scale', value: '0-10%' },
        { name: 'Testing capacity', value: '0.125 corresponds to 1% fat' },
        { name: 'Brand', value: 'HT' },
        { name: 'The basis of graduation', value: '10.75 ml' },
        { name: 'Packaging Type', value: 'Box' },
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
        imageUrl: 'https://resourcewebsite.singoo.cc/wp-content/uploads/2021/04/service-1-1.jpg',
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
        imageUrl: 'https://www.debic.com/en/system/images/files/000/017/634/17634/09042021_DEBIC_WEBSITE_2021_SCHOOL_OF_EXCELLENCE_1280X581_BANNER.jpg?1618491761',
        imageHint: 'factory automation',
        categoryId: 'consultancy-services'
    }
]


export const newsArticles = [];


