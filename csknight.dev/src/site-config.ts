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
    // contact: 'NOTION_PAGE_ID',
    // about: 'NOTION_PAGE_ID',
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
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
