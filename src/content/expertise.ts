export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export const expertiseContent: ExpertiseItem[] = [
  {
    id: "financial-reporting",
    number: "01",
    title: "Financial Reporting & Statutory Compliance",
    category: "Financial Accounting",
    description:
      "Preparation and consolidation of full financial statements compliant with International Financial Reporting Standards (IFRS) and local regulatory mandates. Ensuring transparent disclosures and audit-ready schedules.",
    deliverables: [
      "Statement of Profit or Loss & Comprehensive Income",
      "Statement of Financial Position (Balance Sheet)",
      "Statement of Cash Flows (Direct & Indirect)",
      "Notes & Disclosures under IFRS/IAS",
      "Statutory Year-End Audit File Preparation",
    ],
    tools: ["IFRS Standards", "ERP Systems", "Excel Financial Workbooks", "Power BI"],
  },
  {
    id: "financial-analysis",
    number: "02",
    title: "Financial Analysis & Strategic Planning",
    category: "Corporate Finance",
    description:
      "Diagnostic variance analysis, financial ratio evaluation, and performance benchmarking. Translating operational figures into actionable executive insights to guide capital allocation and risk management.",
    deliverables: [
      "Monthly & Quarterly Financial Variance Reports",
      "Liquidity, Solvency & Profitability Ratio Analysis",
      "Budget vs. Actual Performance Deep-Dives",
      "Capital Expenditure (CapEx) Feasibility Studies",
      "Scenario & Sensitivity Forecasting",
    ],
    tools: ["Advanced Financial Modeling", "Power BI", "Excel", "Data Analytics"],
  },
  {
    id: "management-accounting",
    number: "03",
    title: "Management Accounting & Cost Control",
    category: "Operational Finance",
    description:
      "Design of standard costing models, contribution margin analysis, and departmental expense control. Empowering management teams to optimize margins and eliminate operational inefficiencies.",
    deliverables: [
      "Product & Service Margin Analysis",
      "Overhead Allocation & Activity-Based Costing",
      "Operating Expense (OpEx) Monitoring Frameworks",
      "Break-Even Analysis & Pricing Models",
      "Working Capital Optimization Schedules",
    ],
    tools: ["Cost Accounting Frameworks", "Excel Macros", "ERP Modules"],
  },
  {
    id: "audit-assurance",
    number: "04",
    title: "Audit Preparation & Internal Controls",
    category: "Governance & Risk",
    description:
      "Strengthening internal accounting controls, conducting pre-audit reconciliations, and facilitating smooth external audits with zero material misstatement findings.",
    deliverables: [
      "Internal Control Deficiency Reviews",
      "Standard Operating Procedures (SOPs) for Accounts",
      "Pre-Audit Supporting Workpapers & Schedules",
      "Bank, Vendor & Intercompany Reconciliations",
      "Audit Liaison & Inquiry Management",
    ],
    tools: ["ISA Guidelines", "Audit Checklists", "Reconciliation Workpapers"],
  },
  {
    id: "tax-compliance",
    number: "05",
    title: "Taxation & Regulatory Filing",
    category: "Compliance",
    description:
      "Statutory tax computation, withholding tax monitoring, and ensuring full compliance with tax authorities in Pakistan (FBR, SRB, PRA) while optimizing lawful deductions.",
    deliverables: [
      "Corporate & Individual Tax Return Calculations",
      "Sales Tax / VAT Monthly Filing Preparation",
      "Withholding Tax (WHT) Statements & Reconciliation",
      "Tax Depreciation Schedules",
      "Tax Assessment Support & Documentation",
    ],
    tools: ["FBR IRIS Portal", "Taxation Statutes", "Compliance Schedules"],
  },
  {
    id: "financial-tools",
    number: "06",
    title: "Financial Analytics & BI Dashboards",
    category: "Digital Finance",
    description:
      "Modernizing legacy accounting processes through dynamic Power BI dashboards, automated Excel financial engines, and seamless ERP data extraction.",
    deliverables: [
      "Executive Financial KPI Dashboards (Power BI)",
      "Automated Three-Statement Financial Models",
      "Dynamic Rolling Cash Flow Forecasting Tools",
      "ERP Data Extraction & Transformation (ETL)",
      "Interactive Sensitivity Simulators",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Excel VBA", "SAP / QuickBooks"],
  },
];
