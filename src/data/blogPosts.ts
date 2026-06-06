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
    title: "How to Apply for the Canada Digital Adoption Program (CDAP) in 2026",
    excerpt:
      "CDAP provides up to $15,000 in grant funding and interest-free BDC loans up to $100,000 to help small businesses adopt digital technology. Here is exactly how to apply.",
    date: "May 14, 2026",
    readTime: "7 min read",
    category: "Grant Guides",
    body: "",
    sections: [
      {
        heading: "What Is CDAP?",
        paragraphs: [
          "The Canada Digital Adoption Program (CDAP) is a federal initiative designed to help small and medium-sized businesses adopt digital technologies, improve their e-commerce presence, and modernize their operations. The programme offers two streams: Boost Your Business Technology and Grow Your Business Online.",
          "The Boost Your Business Technology stream provides grants of up to $15,000 to help businesses hire a digital advisor and develop a digital adoption plan. Once the plan is approved, businesses become eligible for interest-free loans of up to $100,000 through BDC — Canada's Business Development Bank.",
          "For many Canadian small businesses, CDAP is one of the most accessible and high-value grants currently available. The application process is streamlined compared to many provincial programmes, and the combination of grant funding plus low-cost financing makes it uniquely powerful.",
        ],
      },
      {
        heading: "Who Is Eligible for CDAP?",
        paragraphs: [
          "To qualify for the Boost Your Business Technology stream, your business must be a for-profit Canadian business, have been in operation for at least one year, have annual revenues between $500,000 and $100 million, and have between 1 and 499 full-time equivalent employees.",
          "Agricultural businesses, non-profits, government entities, and businesses primarily engaged in real estate investment do not qualify. The programme is specifically designed for businesses looking to modernize operations — think inventory management systems, CRM platforms, e-commerce infrastructure, cloud migration, and similar projects.",
          "The Grow Your Business Online stream has a lower threshold, covering businesses of virtually any size that want to build or improve an online presence, including e-commerce capabilities.",
        ],
      },
      {
        heading: "Step-by-Step: How to Apply for CDAP",
        paragraphs: [
          "Step 1: Register on the CDAP portal at ised.canada.ca. You will need your CRA Business Number, business incorporation documents, and basic financial information. The registration process takes approximately 30 minutes.",
          "Step 2: Connect with a registered digital advisor. CDAP maintains a marketplace of approved advisors. You select an advisor, sign an agreement, and the advisor develops your Digital Adoption Plan — a roadmap outlining what technology you will adopt, how it will benefit your operations, and a projected budget.",
          "Step 3: Submit your Digital Adoption Plan for review. ISED evaluates the plan against CDAP criteria. This review typically takes 4–6 weeks. If approved, your grant funds are released directly to your advisor to cover their fee.",
          "Step 4: Apply for the BDC loan. Once your Digital Adoption Plan is approved, you are automatically eligible to apply for an interest-free BDC loan of up to $100,000 to fund the actual implementation of the plan. BDC has its own application process for this component.",
          "Step 5: Implement and report. CDAP requires progress reporting at defined milestones. Ensure you document your technology adoption activities as outlined in your approved plan.",
        ],
      },
      {
        heading: "Common Mistakes That Get Applications Rejected",
        paragraphs: [
          "The most common reason CDAP applications stall is a poorly written Digital Adoption Plan. Reviewers are looking for specific, measurable outcomes tied to your business goals — not vague statements about 'going digital.' Plans that do not clearly connect the proposed technology to a defined business challenge are frequently sent back for revision.",
          "Another common issue is selecting a digital advisor who is not registered in the CDAP marketplace. The advisor must be approved by ISED before work begins; costs incurred before registration are not covered.",
          "Finally, businesses sometimes underestimate the importance of the financial documentation. Reviewers verify revenue and employee counts against CRA filings. Discrepancies — even minor ones — can delay approval significantly.",
        ],
      },
      {
        heading: "How Canada Grants and Loans Can Help",
        paragraphs: [
          "CDAP application support is included in The Complete Package. For $2,500 — flat, all-inclusive — we handle your business plan, pitch deck, and 10 grant applications including CDAP: eligibility assessment, Digital Adoption Plan writing, submission, and follow-up with ISED reviewers.",
          "If your application is identified as a strong candidate during our initial intake call, we can typically have your Digital Adoption Plan ready for submission within 10 business days. Call us at 1-855-472-6875 to find out if your business qualifies.",
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
          "Canada Digital Adoption Program (CDAP): Up to $15,000 grant plus $100,000 BDC loan for technology adoption. Available to businesses with revenues between $500K and $100M. See our full CDAP guide for application details.",
          "NRC IRAP (Industrial Research Assistance Program): Up to $50,000 for early-stage technology companies working on innovation projects. IRAP is highly competitive but one of the most generous early-stage programmes in Canada. Eligible businesses must be working on a specific technical challenge.",
          "CanExport SMEs: Up to $50,000 (50% cost-share) for businesses looking to develop new export markets. If your startup is targeting international customers, CanExport can cover trade show costs, market research, legal fees for new market entry, and digital marketing in foreign markets.",
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
          "Call us at 1-855-472-6875 for a free intake call. We'll tell you within 20 minutes what programmes we think you're eligible for and what the process looks like.",
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
          "The Complete Package is $2,500, all-inclusive — business plan, pitch deck, and 10 grant applications, with no page limits, unlimited revisions, and delivery in both PDF and editable formats. Call us at 1-855-472-6875 to get started.",
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
