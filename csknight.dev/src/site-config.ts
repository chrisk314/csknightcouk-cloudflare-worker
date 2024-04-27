import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING, EXTRA_STYLE_CSS_STRING } from './_embedded-strings'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = ''

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'csknight.dev',

  // Metatags, optional
  // For main page link preview
  siteName: 'Chris Knight',
  siteDescription: 'Chris Knight is a software engineer and PhD in Computational Physics from the UK with expertise in python c c++ artificial intelligence (AI), machine learning (ML), data analytics, distributed computing, cloud architecture, devops, security',
  siteImage: '',

  // URL to custom favicon.ico
  // siteIcon: '',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  notionDomain: 'csknight',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    '': 'dbaee05a79154f70998eda6b079928fe',
    resume: '1712ba1a8e5c4b26a6c825ff6f7e488c',
    about: 'cbb22b809fda49d79b25355b6683da27',
    blog: '408b6f3a07f842919751a45e5ea6f1e6',
    tools: '27a8271f26a94ab8ab056bcc6ea9aeab',
    projects: '4b9d30efc4e54cef902eeccc9118c509',
    quotes: '59dd2bf0eeee4780b8f302e344b5bd89',
    // // Hint: you can use '/' in slug name to create subpages
    // 'about/people': 'NOTION_PAGE_ID',
  },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    // www: {
    //   redirect: 'https://csknight.dev',
    // },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  // fof: {
  //   page: "NOTION_PAGE_ID",
  //   slug: "404", // default
  // },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: 'Roboto',

  // Custom JS for head and body of a Notion page
  customHeadCSS: EXTRA_STYLE_CSS_STRING,
  customHeadJS: googleTag(GOOGLE_TAG_ID) +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&family=Roboto+Slab:wght@100;400;700&family=Roboto:ital,wght@0,100;0,400;0,700;1,400&display=swap">\n' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">\n',
    // '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css">\n',
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
