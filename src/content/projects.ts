export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  clientType: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tools: string[];
}

export const projectsContent: CaseStudy[] = [
  {
    id: "statutory-reporting-ifrs",
    number: "01",
    title: "Financial Reporting & Statutory IFRS Compliance",
    category: "Financial Accounting",
    clientType: "[CORPORATE CLIENT / ORGANIZATION]",
    challenge:
      "The client required complete alignment of disparate ledger structures with IFRS standards (including IFRS 15 Revenue Recognition and IFRS 16 Leases), facing audit pressure and statutory reporting deadlines.",
    approach:
      "Conducted a comprehensive gap analysis across general ledger accounts, overhauled asset and lease schedules, instituted rigorous month-end cutoff controls, and built consolidated financial statement templates with complete supporting notes.",
    outcome:
      "Successfully delivered unqualified external audit sign-off, reduced financial close cycle by 40%, and established automated reconciliation schedules ensuring ongoing regulatory compliance.",
    metrics: [
      { label: "Audit Result", value: "Unqualified Opinion" },
      { label: "Close Cycle", value: "Reduced by 40%" },
      { label: "Framework", value: "IFRS / IAS" },
    ],
    tools: ["IFRS Standards", "ERP Financials", "Advanced Excel Workbooks", "Audit Workpapers"],
  },
  {
    id: "financial-modeling-valuation",
    number: "02",
    title: "Dynamic Three-Statement Financial Modeling & Valuation",
    category: "Corporate Finance",
    clientType: "[INVESTMENT / ENTERPRISE ENTITY]",
    challenge:
      "Management needed reliable forward-looking financial visibility and scenario analysis to evaluate capital expenditure programs and assess strategic debt capacity under volatile macroeconomic conditions.",
    approach:
      "Engineered an integrated dynamic 5-year three-statement financial model (Income Statement, Balance Sheet, Cash Flow) with automated debt amortization tables, working capital cycles, and Monte Carlo sensitivity matrices.",
    outcome:
      "Provided the executive board with granular sensitivity analyses across interest rate and currency fluctuations, enabling disciplined capital allocation and risk mitigation.",
    metrics: [
      { label: "Model Horizon", value: "5-Year Dynamic" },
      { label: "Scenarios Tested", value: "Base / Bear / Bull" },
      { label: "Decision Support", value: "Executive Board" },
    ],
    tools: ["Discounted Cash Flow (DCF)", "Scenario Analysis", "Financial Modeling", "Excel VBA"],
  },
  {
    id: "management-analytics-dashboards",
    number: "03",
    title: "Executive Management Analytics & Power BI Dashboards",
    category: "Digital Finance & BI",
    clientType: "[GROWTH ENTERPRISE / MULTI-UNIT BUSINESS]",
    challenge:
      "Leadership suffered from delayed, siloed financial data buried across disconnected accounting spreadsheets, resulting in slow decision-making and blind spots in operational expense tracking.",
    approach:
      "Designed an automated data pipeline extracting general ledger data directly into a unified Power BI data model. Created role-based interactive dashboards tracking revenue per segment, gross margins, EBITDA, and cash runway in real time.",
    outcome:
      "Eliminated 25+ hours of manual weekly reporting, equipped department heads with self-service variance diagnostics, and accelerated month-end management reviews.",
    metrics: [
      { label: "Time Saved Weekly", value: "25+ Hours" },
      { label: "Data Latency", value: "Real-Time / Daily" },
      { label: "Key Performance Indicators", value: "18 Executive KPIs" },
    ],
    tools: ["Power BI", "DAX", "Power Query", "SQL / ERP Data", "Financial Visualization"],
  },
  {
    id: "cost-optimization-working-capital",
    number: "04",
    title: "Cost Optimization & Working Capital Restructuring",
    category: "Operational Finance",
    clientType: "[COMMERCIAL / MANUFACTURING OPERATION]",
    challenge:
      "Rising inflation and extended customer collection cycles exerted severe pressure on operating liquidity, creating periodic cash crunches despite positive paper accounting profits.",
    approach:
      "Performed detailed Activity-Based Costing (ABC) and Working Capital diagnosis: restructured Days Sales Outstanding (DSO) credit terms, streamlined inventory turnover parameters, and renegotiated supplier payment terms (DPO).",
    outcome:
      "Compressed cash conversion cycle significantly, liberated trapped working capital, and instituted a rolling 13-week direct cash flow forecasting methodology to safeguard liquidity.",
    metrics: [
      { label: "Cash Conversion", value: "Optimized Cycle" },
      { label: "Cash Forecasting", value: "13-Week Rolling" },
      { label: "Liquidity Status", value: "Self-Sustaining" },
    ],
    tools: ["Working Capital Analytics", "Cash Flow Modeling", "Aging Analysis", "Internal Controls"],
  },
];
