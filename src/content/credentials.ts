export interface CredentialGroup {
  category: string;
  items: {
    title: string;
    issuer: string;
    statusOrDate: string;
    details: string;
  }[];
}

export const credentialsContent: CredentialGroup[] = [
  {
    category: "Professional Qualifications",
    items: [
      {
        title: "ACCA Qualification",
        issuer: "Association of Chartered Certified Accountants (UK)",
        statusOrDate: "[CURRENT ACCA STATUS]",
        details:
          "Comprehensive mastery in Financial Reporting, Audit & Assurance, Financial Management, Taxation, Performance Management, and Strategic Business Leader competencies.",
      },
      {
        title: "Higher Secondary & Pre-Professional Studies",
        issuer: "[INSTITUTION / BOARD, LAHORE]",
        statusOrDate: "[DATES / STATUS]",
        details: "Strong foundational academic track record in commerce, mathematics, and accounting principles.",
      },
    ],
  },
  {
    category: "Accounting & Regulatory Frameworks",
    items: [
      {
        title: "IFRS / IAS (International Financial Reporting Standards)",
        issuer: "IASB Standards",
        statusOrDate: "Proficient",
        details: "Specialized in IFRS 15 (Revenue), IFRS 16 (Leases), IFRS 9 (Financial Instruments), and IAS 1, 7, 8.",
      },
      {
        title: "ISA (International Standards on Auditing)",
        issuer: "IAASB Framework",
        statusOrDate: "Proficient",
        details: "Substantive testing, analytical procedures, risk assessment, and audit documentation integrity.",
      },
      {
        title: "Local Tax & Corporate Statutory Compliance",
        issuer: "FBR / SECP (Pakistan)",
        statusOrDate: "Compliant",
        details: "Withholding tax laws, sales tax acts, corporate return filing, and statutory registers maintenance.",
      },
    ],
  },
  {
    category: "Financial Software & Technical Tools",
    items: [
      {
        title: "Microsoft Excel (Advanced Financial Modeling)",
        issuer: "Advanced Proficiency",
        statusOrDate: "Expert Level",
        details: "Dynamic 3-statement models, nested logic, INDEX/MATCH, XLOOKUP, sensitivity tables, and macro automation.",
      },
      {
        title: "Microsoft Power BI",
        issuer: "Business Intelligence",
        statusOrDate: "Advanced Proficiency",
        details: "DAX measures, star-schema data modeling, interactive financial dashboards, and automated report refreshes.",
      },
      {
        title: "ERP & Accounting Systems",
        issuer: "SAP / QuickBooks / Xero",
        statusOrDate: "Operational",
        details: "General ledger management, chart of accounts setup, accounts payable/receivable, and bank feeds.",
      },
    ],
  },
];
