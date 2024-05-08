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
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">\n' +
    '<link id="favicon" rel="shortcut icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpsdWNpZD0ibHVjaWQiIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAyMCkiIGx1Y2lkOnBhZ2UtdGFiLWlkPSIwXzAiPjxwYXRoIGQ9Ik0wIDIwQTIwIDIwIDAgMCAxIDIwIDBoMTYwYTIwIDIwIDAgMCAxIDIwIDIwdjE2MGEyMCAyMCAwIDAgMS0yMCAyMEgyMGEyMCAyMCAwIDAgMS0yMC0yMHoiLz48cGF0aCBkPSJNNDAgMTlhNiA2IDAgMCAxIDYtNmgxMDhhNiA2IDAgMCAxIDYgNnYxNjJhNiA2IDAgMCAxLTYgNkg0NmE2IDYgMCAwIDEtNi02eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsLW9wYWNpdHk9IjAiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDQ1LDE4LjAwNjcyNzQzMDU1NTc3KSB0cmFuc2xhdGUoLTMzLjAxNDMyMjkxNjY2NjQgMTI2LjcyMzMwNzI5MTY2NjUzKSIvPjxkZWZzPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NTAtMTIxNGMtMjgxIDAtMzM2IDI0NC0zMzYgNTMzIDAgMjk1IDYwIDU0NiAzNDcgNTQ2IDE4OCAwIDI2My0xNDIgMzIyLTI4MmwxNTkgNjVDMTA1OC0xNTUgOTM1IDIwIDY1OSAyMGMtNDAxIDAtNTQ2LTI5NS01NDYtNzAxIDAtNDA3IDEzNS02ODkgNTM2LTY4OSAyNjQgMCAzOTEgMTQ2IDQ2NiAzMzVsLTE2OCA2NWMtNDctMTI5LTEyNy0yNDQtMjk3LTI0NCIgaWQ9ImIiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAwMyAwTDUxNi02MzggMzUzLTQ2OVYwSDE2MnYtMTM0OWgxOTF2NjczbDU3Mi02NzNoMjI1TDY0Ni03NzcgMTIyNyAwaC0yMjQiIGlkPSJjIi8+PGcgaWQ9ImEiPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNzE2MTQ1ODMzMzMzMzMxMiwwLDAsMC4wNzE2MTQ1ODMzMzMzMzMxMiwwLDApIiB4bGluazpocmVmPSIjYiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoMC4wNzE2MTQ1ODMzMzMzMzMxMiwwLDAsMC4wNzE2MTQ1ODMzMzMzMzMxMiw4OC4wMTQzMjI5MTY2NjY0LDApIiB4bGluazpocmVmPSIjYyIvPjwvZz48L2RlZnM+PC9nPjwvc3ZnPg==">\n',
    // '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css">\n',
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
