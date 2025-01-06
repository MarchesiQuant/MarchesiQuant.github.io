// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MarchesiQuant', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['/MarchesiQuant.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Pablo Marchesi',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'pablo-marchesi-010383199',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'pablomarchesiselma@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/MarchesiQuant/CV/raw/main/CV_Jan.pdf', 
  },
  skills: [
    'Python',
    'R',
    'Matlab',
    'SQL',
    'LaTex',
    'C++',
    'Assembly',
    'Excel',
  ],
  experiences: [
    {
      company: 'Credit Risk Intern',
      position: 'KPMG',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://kpmg.com/xx/en.html',
    },
    {
      company: 'Data Science Intern',
      position: 'Management Solutions',
      from: 'February 2024',
      to: 'May 2024',
      companyLink: 'https://www.managementsolutions.com/en',
    },
  ],

  educations: [
    {
      institution: 'AFI Global Education',
      degree: 'MSc Quantitative Finance',
      from: '2024',
      to: '2025',
    },
    {
      institution: 'Universidad Politécnica de Valencia',
      degree: 'Telecommunications Engineering',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'Universidad Politécnica de Valencia',
      degree: 'Business Management',
      from: '2019',
      to: '2024',
    },
  ],
    certifications: [
    {
      name: 'Certificate in Advanced English (C1)',
      body: 'Cambridge University Press & Assessment English',
      year: 'April 2018',
      link: '',
    },
  ],
  publications: [
    {
      title: 'Derivation of the Breeden-Litzenberger Theorem',
      conferenceName: 'November 2024',
      journalName: '',
      authors: '',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7268664878721114112/',
      description:
      'The Breeden-Litzenberger theorem establishes a relationship between the second derivative of the price of a European call option with respect to its strike price and the probability density function of the underlying asset’s price. This result is fundamental in financial mathematics and enables the extraction of the risk-neutral density from observed option prices.'},
    {
      title: 'Risk-Neutral Pricing: An Intuitive Approach',
      conferenceName: 'October 2024',
      journalName: '',
      authors: '',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7256352853831675904/',
      description:
          'This paper aims to provide a straightforward and intuitive introduction to Risk- Neutral Pricing for derivative securities. We begin by reviewing foundational concepts from Itˆo calculus, including Itˆo processes and martingales, along with the key theorems necessary for deriving the risk-neutral pricing formula. We then proceed to derive the formula, prioritizing intuition over mathematical rigor.'    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
