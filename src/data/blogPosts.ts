export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string; // HTML-free markdown-style plain text, rendered as paragraphs
  sections: { heading: string; paragraphs: string[] }[];
  relatedSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-apply-cdap-2026",
    title: "CDAP Is Closed — Here's What to Apply For Instead",
    excerpt:
      "The Canada Digital Adoption Program's $15,000 grant stopped accepting new applications in February 2024. Here are three federal programmes you can actually apply to now.",
    date: "October 26, 2026",
    readTime: "5 min read",
    category: "Grant Guides",
    body: "",
    sections: [
      {
        heading: "Is CDAP Still Open?",
        paragraphs: [
          "No. The Canada Digital Adoption Program's Boost Your Business Technology grant — the stream that paid up to $15,000 toward a digital adoption plan — closed to new applications in February 2024 after it became fully subscribed.",
          "Innovation, Science and Economic Development Canada (ISED) still lists the grant as not accepting new applications and has not announced a reopening date. Businesses that already held an approved grant agreement were allowed to continue, but new applicants cannot get in.",
          "If you find a website or consultant still advertising CDAP as available, treat everything else they tell you with caution. The good news: CDAP was never the only option, and several federal programmes are open right now.",
        ],
      },
      {
        heading: "1. Canada Summer Jobs 2027 — Applications Open October 27, 2026",
        paragraphs: [
          "Canada Summer Jobs is a federal wage subsidy for employers who create summer jobs for young people aged 15 to 30. Private-sector businesses with 50 or fewer full-time employees can receive up to 50% of the provincial or territorial minimum wage for each approved position. Not-for-profit organizations can receive up to 100%.",
          "The call for applications for summer 2027 opens on October 27, 2026. The window is short: the previous cycle ran from November 4 to December 11, 2025. Funding is competitive, so a clear, well-written description of each job and what the young person will learn makes a real difference.",
          "This is one of the most accessible programmes for small businesses, because it does not require a technology project, a minimum revenue, or years of operating history.",
        ],
      },
      {
        heading: "2. NRC IRAP — If You Are Developing New Technology",
        paragraphs: [
          "The National Research Council's Industrial Research Assistance Program (NRC IRAP) funds incorporated, for-profit Canadian businesses with 500 or fewer employees that are developing and commercializing an innovative, technology-driven product, service, or process.",
          "IRAP does not work on a fixed application deadline. You start by contacting NRC IRAP and speaking with an Industrial Technology Advisor, who assesses whether your project fits and, if it does, invites a full proposal. Funded projects run within the federal fiscal year (April 1 to March 31), so it pays to start the conversation well before the year you want to spend the money.",
          "If CDAP appealed to you because you were modernizing with off-the-shelf software, IRAP is not a direct replacement — it is for businesses building something new, not buying existing tools.",
        ],
      },
      {
        heading: "3. Canada Small Business Financing Program — If You Need a Loan",
        paragraphs: [
          "CDAP's other big draw was its interest-free BDC loan. That loan was tied to the closed grant, but the Canada Small Business Financing Program is open year-round. It helps small businesses with gross annual revenues of $10 million or less get financing from banks and credit unions, with the federal government sharing the lender's risk.",
          "Borrowers can access up to $1.15 million: up to $1 million in term loans and up to $150,000 as a line of credit. You apply directly through the financial institution of your choice, and the lender — not the government — makes the decision.",
          "Because the lender decides, the quality of your business plan and financial projections matters more here than almost anywhere else.",
        ],
      },
      {
        heading: "How Canada Grants and Loans Can Help",
        paragraphs: [
          "Programmes open and close constantly, and many of the lists you find online are out of date. We check what is actually accepting applications, tell you which programmes fit your business, and write and submit the applications on your behalf.",
          "The Complete Package — $2,500, flat and all-inclusive — covers your business plan, pitch deck, and 10 grant applications. Contact us to find out which open programmes your business qualifies for.",
        ],
      },
    ],
    relatedSlugs: ["startup-grants-canada-2026", "business-plan-bank-loan-canada"],
  },
  {
    slug: "startup-grants-canada-2026",
    title: "The Best Startup Grants in Canada for 2026 (Federal & Provincial)",
    excerpt:
      "Starting a business in Canada? Here are the top federal and provincial grant programmes available to new businesses in 2026, how much you can get, and what you need to apply.",
    date: "April 28, 2026",
    readTime: "9 min read",
    category: "Grant Guides",
    body: "",
    sections: [
      {
        heading: "Why Grants Beat Loans for Startups",
        paragraphs: [
          "When you're starting a business, preserving cash flow is everything. A grant is non-repayable — you receive the money and spend it on your approved project without ever having to pay it back. Compare that to a traditional business loan, where every dollar of principal plus interest comes back out of your margins.",
          "Canada offers one of the most robust grant ecosystems in the world for new businesses. Between federal programmes administered by agencies like ISED, NRC IRAP, and ACOA, provincial economic development programmes, and hundreds of municipal and private grants, a well-researched new business can access tens or even hundreds of thousands of dollars in non-dilutive funding.",
          "The challenge is knowing where to look and how to apply. Most grants are not advertised broadly — they're listed on government portals in dense bureaucratic language, with eligibility criteria that require careful interpretation.",
        ],
      },
      {
        heading: "Top Federal Startup Grants in 2026",
        paragraphs: [
          "Canada Summer Jobs: A federal wage subsidy of up to 50% of minimum wage for private businesses with 50 or fewer full-time employees that hire youth aged 15–30 for the summer. Applications for summer 2027 open October 27, 2026. (Note: the Canada Digital Adoption Program grant is closed — see our guide to what to apply for instead.)",
          "NRC IRAP (Industrial Research Assistance Program): Up to $50,000 for early-stage technology companies working on innovation projects. IRAP is highly competitive but one of the most generous early-stage programmes in Canada. Eligible businesses must be working on a specific technical challenge.",
          "CanExport SMEs: Up to $50,000 for businesses developing new export markets. The 2026–27 intake is closed, and no date has been announced for the next one — but if your startup is targeting international customers, it is worth preparing for.",
          "Strategic Innovation Fund (SIF): While SIF is better known for larger companies, early-stage projects with significant innovation and job-creation potential can qualify for contributions. Minimum project cost is $10 million, making this a programme to grow into rather than start with.",
          "Futurpreneur Canada: Loans up to $60,000 plus mentorship for entrepreneurs aged 18–39. Not a grant, but Futurpreneur's interest-rate structure and 2-year payment deferral make it nearly equivalent for cash flow purposes in the early years.",
        ],
      },
      {
        heading: "Provincial Startup Grants Worth Knowing",
        paragraphs: [
          "Ontario: The Ontario Centres of Excellence (OCE) funds technology startups through market readiness and commercialization programmes. The Eastern Ontario Development Fund and Southwestern Ontario Development Fund offer project-based grants for manufacturers and innovators.",
          "British Columbia: Innovate BC's Ignite programme funds early-stage tech projects up to $100,000. BC's CleanBC programme provides grants for energy-efficiency projects in new facilities. Small Business BC offers access to a range of provincial supports through its advisory services.",
          "Alberta: ATB Financial and Prairies Economic Development Canada (PrairiesCan) co-administer several startup-focused programmes. The Alberta Innovates Voucher programme provides up to $10,000 for accessing research and innovation resources.",
          "Quebec: Investissement Québec administers one of Canada's most comprehensive provincial business support systems, including the ESSOR programme for manufacturing and processing startups and the Programme d'aide à la recherche industrielle for tech companies.",
          "Atlantic Canada: ACOA's Business Development Program (BDP) is the primary vehicle for startup support in New Brunswick, Nova Scotia, PEI, and Newfoundland. Non-repayable contributions are available for new businesses with viable plans and demonstrated local economic impact.",
        ],
      },
      {
        heading: "What You Need to Apply",
        paragraphs: [
          "Most grant applications share a common set of requirements: a business plan that articulates your market, your value proposition, and your financial projections; a clear description of the project the grant will fund; evidence of your ability to execute (management team profiles, prior experience); and financial statements or projections.",
          "For brand-new businesses without financial history, a strong business plan and credible projections are even more important than usual. Grant reviewers are assessing both the project and your capacity to deliver it. A professionally written business plan signals seriousness and competence before you've had time to build a track record.",
        ],
      },
      {
        heading: "Get a Free Eligibility Assessment",
        paragraphs: [
          "Canada Grants and Loans researches hundreds of federal, provincial, municipal, and private programmes to find the ones your specific business qualifies for. The Complete Package — $2,500, flat, all-inclusive — covers your business plan, pitch deck, and 10 grant applications written and submitted on your behalf. No hourly charges, no success fees.",
          "Contact us for a free intake call. We'll tell you within 20 minutes what programmes we think you're eligible for and what the process looks like.",
        ],
      },
    ],
    relatedSlugs: ["how-to-apply-cdap-2026", "business-plan-bank-loan-canada"],
  },
  {
    slug: "business-plan-bank-loan-canada",
    title: "What Canadian Banks Actually Want to See in a Business Plan",
    excerpt:
      "A business plan written for investors is not the same as one written for a bank. Here's what Canadian lenders look for — and how to give it to them.",
    date: "April 10, 2026",
    readTime: "8 min read",
    category: "Business Plans",
    body: "",
    sections: [
      {
        heading: "Why Most Business Plans Get Rejected by Banks",
        paragraphs: [
          "Every year, thousands of Canadian entrepreneurs walk into a bank branch or submit a BDC loan application with a business plan they wrote themselves — or worse, one generated by an AI tool or downloaded from a template site. The rejection rate is high, and the reasons are almost always the same.",
          "Banks are not investors. They are not looking for the next big thing. They are credit analysts who need to be confident that you can repay the loan. A plan that reads like a pitch to a venture capitalist — full of market opportunity language and hockey-stick projections — is a red flag to a commercial lender, not a green flag.",
          "Understanding what a bank actually wants, and writing your plan to address those specific concerns, is the difference between approval and rejection.",
        ],
      },
      {
        heading: "The Five Things Banks Actually Care About",
        paragraphs: [
          "1. Cash Flow Projections. More than anything else, banks want to see that your business generates enough cash to service the debt. Your projections need to clearly show monthly cash inflows and outflows, and the surplus available for loan repayment, from month one through year three at minimum. Projections that show breakeven in month two for a startup are an immediate credibility issue.",
          "2. Collateral. Banks want to know what secures the loan if the business fails. For small business loans, this typically means personal guarantees, business assets, real estate, or equipment. Your plan should address collateral availability directly rather than leaving the reviewer to ask.",
          "3. Industry and Market Risk. Lenders conduct their own industry research. If your plan describes your market in overly optimistic terms without acknowledging competition, cyclicality, or regulatory risk, it signals that you haven't thought through the downside scenarios. Banks fund plans that anticipate problems — not plans that pretend problems don't exist.",
          "4. Management Experience. Banks lend to people, not just ideas. Your management team section needs to make a compelling case that the people running this business have the experience to execute the plan. Prior industry experience, relevant education, and track records of success all matter.",
          "5. Use of Funds. Be specific about exactly how the loan proceeds will be used. 'Working capital' is not enough. Banks want to see line-item budgets: equipment purchases with quotes, leasehold improvements with contractor estimates, inventory costs with supplier details. Vagueness signals either poor planning or a lack of transparency.",
        ],
      },
      {
        heading: "The Financial Projection Sections Banks Review Most Carefully",
        paragraphs: [
          "Income Statement Projections: Month-by-month for year one, quarterly for years two and three. Revenue assumptions must be backed by evidence — contracts, letters of intent, industry benchmarks, or comparable business data. Banks will question any revenue assumption that can't be justified.",
          "Cash Flow Statement: This is the most important financial document in a bank submission. It shows the actual movement of cash into and out of the business. Negative cash flow in early months is acceptable for capital-intensive startups — but the path to positive cash flow must be credible and explicitly modelled.",
          "Balance Sheet Projections: Opening and year-end balance sheets for the projection period. Banks use these to assess leverage ratios and net worth over time.",
          "Break-even Analysis: A clearly presented break-even calculation demonstrates that you understand your cost structure and the revenue level required to cover it.",
        ],
      },
      {
        heading: "Formatting and Presentation Standards",
        paragraphs: [
          "Canadian banks typically review dozens of loan applications each month. A plan that is professionally formatted, clearly organized, and easy to navigate gets more favorable treatment than one that requires the reviewer to hunt for key information.",
          "Use a clean table of contents with page numbers. Use consistent heading styles. Ensure your financial tables are clearly labeled and cross-referenced to your narrative. Proofread carefully — grammatical errors and inconsistent numbers are disproportionately damaging to your credibility in a credit review context.",
          "Length matters too. A bank submission for a small business loan typically runs 20–35 pages including financials. A 5-page summary is too thin to demonstrate serious planning; an 80-page document is too unwieldy to review efficiently.",
        ],
      },
      {
        heading: "How a Professional Business Plan Changes Your Outcomes",
        paragraphs: [
          "Canada Grants and Loans writes business plans specifically formatted for Canadian financial institutions, including BDC, traditional chartered banks, and credit unions. Our plans include full 5-year financial projections built to lender standards, not investor standards — with conservative assumptions, detailed cash flow modelling, and a clear debt service coverage analysis.",
          "The Complete Package is $2,500, all-inclusive — business plan, pitch deck, and 10 grant applications, with no page limits, unlimited revisions, and delivery in both PDF and editable formats. Contact us to get started.",
        ],
      },
    ],
    relatedSlugs: ["startup-grants-canada-2026", "how-to-apply-cdap-2026"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((p) => slugs.includes(p.slug));
}
