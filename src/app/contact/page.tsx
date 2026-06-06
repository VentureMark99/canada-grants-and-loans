"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { startupGrants, existingBusinessGrants } from "@/data/grantRanges";

/* ── Shared data ──────────────────────────────────────────────── */

const allBusinessTypes = Array.from(
  new Set([
    ...startupGrants.map((g) => g.businessType),
    ...existingBusinessGrants.map((g) => g.businessType),
  ])
).sort();

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const labelCls = "block text-sm font-medium text-brand-dark mb-1";
const inputCls =
  "w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-navy transition-colors bg-white";

/* ── Small shared components ──────────────────────────────────── */

function Required() {
  return <span className="text-brand-red ml-0.5">*</span>;
}

function RadioOption({
  name, value, label, checked, onChange,
}: {
  name: string; value: string; label: string; checked: boolean; onChange: () => void;
}) {
  return (
    <label
      className={`flex items-center gap-2 px-3 py-2 rounded border cursor-pointer text-sm transition-colors ${
        checked
          ? "border-brand-navy bg-brand-light font-semibold text-brand-navy"
          : "border-gray-200 text-brand-dark hover:border-gray-300"
      }`}
    >
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="accent-brand-red" />
      {label}
    </label>
  );
}

function CheckOption({
  label, checked, onChange,
}: {
  label: string; checked: boolean; onChange: () => void;
}) {
  return (
    <label
      className={`flex items-center gap-2 px-3 py-2 rounded border cursor-pointer text-sm transition-colors ${
        checked
          ? "border-brand-navy bg-brand-light font-semibold text-brand-navy"
          : "border-gray-200 text-brand-dark hover:border-gray-300"
      }`}
    >
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-brand-red" />
      {label}
    </label>
  );
}

function TextField({
  label, k, get, set, type = "text", placeholder, required: req,
}: {
  label: string; k: string; get: (k: string) => string; set: (k: string, v: string) => void;
  type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}
        {req && <Required />}
      </label>
      <input
        type={type}
        value={get(k)}
        onChange={(e) => set(k, e.target.value)}
        className={inputCls}
        placeholder={placeholder}
        required={req}
      />
    </div>
  );
}

function TextareaField({
  label, k, get, set, rows = 3,
}: {
  label: string; k: string; get: (k: string) => string; set: (k: string, v: string) => void; rows?: number;
}) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <textarea
        rows={rows}
        value={get(k)}
        onChange={(e) => set(k, e.target.value)}
        className={inputCls}
      />
    </div>
  );
}

/* ── Lead form ────────────────────────────────────────────────── */

type LeadData = {
  fullName: string;
  businessName: string;
  businessType: string;
  businessStage: string;
  province: string;
  services: string[];
  description: string;
  bestTime: string;
  heardAbout: string;
};

function LeadFormSection() {
  const [form, setForm] = useState<LeadData>({
    fullName: "", businessName: "", businessType: "", businessStage: "",
    province: "", services: [], description: "", bestTime: "", heardAbout: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [typeQuery, setTypeQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/mzdqdjdg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Submitted At": new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" }),
          "Full Name": form.fullName,
          "Business Name": form.businessName,
          "Business Type": form.businessType,
          "Business Stage": form.businessStage,
          "Province": form.province,
          "Services Needed": form.services.join(", "),
          "Description": form.description,
          "Best Time to Call": form.bestTime,
          "Heard About Us": form.heardAbout,
        }),
      });
    } catch {
      // Submit silently even if fetch fails — don't block the user
    }
    setSubmitting(false);
    setSubmitted(true);
  }

  const suggestions = useMemo(() => {
    const q = typeQuery.toLowerCase().trim();
    if (!q) return [];
    return allBusinessTypes.filter((t) => t.toLowerCase().includes(q)).slice(0, 8);
  }, [typeQuery]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggleService(s: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
        <svg className="h-10 w-10 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700 text-sm leading-relaxed">
          We&apos;ve received your information and will be in touch within 24 hours. In the
          meantime, feel free to call us at{" "}
          <a href="tel:18554726875" className="font-bold underline">1-855-GRANTS-5</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleLeadSubmit} className="space-y-5">
      <div>
        <label className={labelCls}>Full Name <Required /></label>
        <input type="text" required value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className={inputCls} placeholder="Jane Smith" />
      </div>

      <div>
        <label className={labelCls}>Business Name <Required /></label>
        <input type="text" required value={form.businessName}
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
          className={inputCls} placeholder="Acme Industries Inc." />
      </div>

      <div ref={typeRef} className="relative">
        <label className={labelCls}>Business Type</label>
        <input
          type="text"
          value={form.businessType}
          onChange={(e) => {
            setTypeQuery(e.target.value);
            setForm({ ...form, businessType: e.target.value });
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className={inputCls}
          placeholder="Start typing (e.g. Bakery, Tech, Retail…)"
          autoComplete="off"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-20 bg-white border border-gray-200 rounded shadow-md w-full mt-1 max-h-48 overflow-y-auto">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 text-sm hover:bg-brand-light transition-colors"
                  onMouseDown={() => {
                    setForm({ ...form, businessType: s });
                    setTypeQuery(s);
                    setShowSuggestions(false);
                  }}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className={labelCls}>Business Stage</label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {["Idea Stage", "Startup / Pre-Revenue", "Early Revenue", "Established / Growing"].map((s) => (
            <RadioOption key={s} name="leadStage" value={s} label={s}
              checked={form.businessStage === s} onChange={() => setForm({ ...form, businessStage: s })} />
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls}>Province / Territory</label>
        <select value={form.province} onChange={(e) => setForm({ ...form, province: e.target.value })} className={inputCls}>
          <option value="">Select province or territory…</option>
          {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <label className={labelCls}>
          Service Needed{" "}
          <span className="text-xs text-gray-400 font-normal">(check all that apply)</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {["Business Plan", "Pitch Deck", "Grant Application", "Not Sure"].map((s) => (
            <CheckOption key={s} label={s} checked={form.services.includes(s)} onChange={() => toggleService(s)} />
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls}>Brief Description of Your Project or Funding Need <Required /></label>
        <textarea required rows={4} value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={inputCls}
          placeholder="Describe what you're trying to accomplish and what you need funding for…" />
      </div>

      <div>
        <label className={labelCls}>Best Time to Call</label>
        <select value={form.bestTime} onChange={(e) => setForm({ ...form, bestTime: e.target.value })} className={inputCls}>
          <option value="">Select a time…</option>
          <option>Morning (9am–12pm)</option>
          <option>Afternoon (12pm–4pm)</option>
          <option>Evening (4pm–6pm)</option>
          <option>Anytime</option>
        </select>
      </div>

      <div>
        <label className={labelCls}>How did you hear about us?</label>
        <select value={form.heardAbout} onChange={(e) => setForm({ ...form, heardAbout: e.target.value })} className={inputCls}>
          <option value="">Select…</option>
          <option>Google Search</option>
          <option>Social Media</option>
          <option>Referral</option>
          <option>Advertisement</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" disabled={submitting} className="w-full bg-brand-red text-white font-semibold py-3.5 rounded hover:bg-red-700 transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? "Sending…" : "Submit My Information"}
      </button>
    </form>
  );
}

/* ── Intake questionnaire ─────────────────────────────────────── */

type IFields = Record<string, string | string[]>;

function useIntakeFields() {
  const [fields, setFields] = useState<IFields>({});
  function set(key: string, val: string | string[]) {
    setFields((f) => ({ ...f, [key]: val }));
  }
  function get(key: string): string {
    return (fields[key] as string) ?? "";
  }
  function getArr(key: string): string[] {
    return (fields[key] as string[]) ?? [];
  }
  function toggleCheck(key: string, val: string) {
    const cur = getArr(key);
    set(key, cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val]);
  }
  return { get, set, getArr, toggleCheck };
}

const intakeSections = [
  { title: "Business Information" },
  { title: "Ownership and Eligibility" },
  { title: "Grant Project Overview" },
  { title: "Grant Fit and Positioning" },
  { title: "Market, Community, and Public Benefit" },
  { title: "Budget and Eligible Uses of Funds", subtitle: "Please break down the project budget as clearly as possible." },
  { title: "Readiness and Supporting Information" },
  { title: "Consent" },
];

function IntakeQuestionnaire() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { get, set, getArr, toggleCheck } = useIntakeFields();
  const today = new Date().toISOString().split("T")[0];
  const progress = Math.round(((step + 1) / intakeSections.length) * 100);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
        <svg className="h-10 w-10 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-bold text-green-800 mb-2">Questionnaire Submitted!</h3>
        <p className="text-green-700 text-sm leading-relaxed">
          Thank you for completing the intake questionnaire. Our team will review your file and
          contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-brand-navy">
            Step {step + 1} of {intakeSections.length}: {intakeSections[step].title}
          </span>
          <span className="text-xs text-gray-400">{progress}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-red rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Section heading */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-brand-navy">{intakeSections[step].title}</h3>
        {"subtitle" in intakeSections[step] && intakeSections[step].subtitle && (
          <p className="text-sm text-gray-500 mt-1">{intakeSections[step].subtitle}</p>
        )}
      </div>

      {/* Fields */}
      <div className="space-y-5">
        {step === 0 && <ISection1 get={get} set={set} />}
        {step === 1 && <ISection2 get={get} set={set} getArr={getArr} toggleCheck={toggleCheck} />}
        {step === 2 && <ISection3 get={get} set={set} />}
        {step === 3 && <ISection4 get={get} set={set} getArr={getArr} toggleCheck={toggleCheck} />}
        {step === 4 && <ISection5 get={get} set={set} />}
        {step === 5 && <ISection6 get={get} set={set} />}
        {step === 6 && <ISection7 get={get} set={set} getArr={getArr} toggleCheck={toggleCheck} />}
        {step === 7 && <ISection8 get={get} set={set} getArr={getArr} toggleCheck={toggleCheck} today={today} onSubmit={() => setSubmitted(true)} />}
      </div>

      {/* Nav buttons (all steps except last, which has its own submit) */}
      {step < intakeSections.length - 1 && (
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-2.5 text-sm font-semibold border border-gray-200 rounded text-brand-dark hover:bg-brand-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="px-5 py-2.5 text-sm font-semibold bg-brand-navy text-white rounded hover:bg-blue-900 transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Intake section components ────────────────────────────────── */

type SP = {
  get: (k: string) => string;
  set: (k: string, v: string) => void;
  getArr?: (k: string) => string[];
  toggleCheck?: (k: string, v: string) => void;
};

function ISection1({ get, set }: SP) {
  return (
    <>
      <TextField label="Legal business name" k="legalName" get={get} set={set} />
      <TextField label="Operating name, if different" k="operatingName" get={get} set={set} />
      <TextField label="Business address" k="address" get={get} set={set} />
      <div className="grid sm:grid-cols-3 gap-4">
        <TextField label="City" k="city" get={get} set={set} />
        <div>
          <label className={labelCls}>Province / Territory</label>
          <select value={get("bizProvince")} onChange={(e) => set("bizProvince", e.target.value)} className={inputCls}>
            <option value="">Select…</option>
            {provinces.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <TextField label="Postal code" k="postal" get={get} set={set} placeholder="A1A 1A1" />
      </div>
      <TextField label="Business phone number" k="bizPhone" get={get} set={set} />
      <TextField label="Business email" k="bizEmail" get={get} set={set} type="email" />
      <TextField label="Website or social media links (optional)" k="website" get={get} set={set} />
      <TextField label="Industry / type of business" k="industry" get={get} set={set} />
      <div>
        <label className={labelCls}>Business structure</label>
        <div className="grid sm:grid-cols-3 gap-2 mt-1">
          {["Sole Proprietorship", "Partnership", "Corporation", "Non-Profit", "Other"].map((v) => (
            <RadioOption key={v} name="bizStructure" value={v} label={v} checked={get("bizStructure") === v} onChange={() => set("bizStructure", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Is the business already operating?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="isOperating" value={v} label={v} checked={get("isOperating") === v} onChange={() => set("isOperating", v)} />
          ))}
        </div>
      </div>
      <TextField label="Date business started or expected start date" k="startDate" get={get} set={set} type="date" />
      <div>
        <label className={labelCls}>Current business stage</label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {["Idea Stage", "Startup / Pre-Revenue", "Early Revenue", "Established / Growing"].map((v) => (
            <RadioOption key={v} name="bizStage" value={v} label={v} checked={get("bizStage") === v} onChange={() => set("bizStage", v)} />
          ))}
        </div>
      </div>
      <TextField label="Current annual revenue, if applicable" k="revenue" get={get} set={set} placeholder="e.g. $150,000" />
    </>
  );
}

function ISection2({ get, set, getArr, toggleCheck }: Required<SP>) {
  return (
    <>
      <TextField label="Owner / primary contact name" k="ownerName" get={get} set={set} />
      <TextField label="Title / role in business" k="ownerTitle" get={get} set={set} />
      <div className="grid sm:grid-cols-2 gap-4">
        <TextField label="Phone number" k="ownerPhone" get={get} set={set} />
        <TextField label="Email" k="ownerEmail" get={get} set={set} type="email" />
      </div>
      <TextareaField label="Additional owners and ownership percentages" k="additionalOwners" get={get} set={set} rows={3} />
      <div>
        <label className={labelCls}>Is the owner a Canadian citizen or permanent resident?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="isCanadian" value={v} label={v} checked={get("isCanadian") === v} onChange={() => set("isCanadian", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Owner age range</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Under 30", "30–39", "40–54", "55+"].map((v) => (
            <RadioOption key={v} name="ownerAge" value={v} label={v} checked={get("ownerAge") === v} onChange={() => set("ownerAge", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>
          Does the business identify as majority-owned by any of the following?{" "}
          <span className="text-xs text-gray-400 font-normal">(check all that apply)</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {["Woman-owned", "Indigenous-owned", "Black-owned", "Youth-owned", "Newcomer-owned", "Person with a disability", "None of the above"].map((v) => (
            <CheckOption key={v} label={v} checked={getArr("ownerDemographics").includes(v)} onChange={() => toggleCheck("ownerDemographics", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Has the owner or business previously received government grant funding?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="priorGrant" value={v} label={v} checked={get("priorGrant") === v} onChange={() => set("priorGrant", v)} />
          ))}
        </div>
      </div>
      {get("priorGrant") === "Yes" && (
        <TextareaField label="Please list the grant received, approximate amount, and year" k="priorGrantDetails" get={get} set={set} rows={3} />
      )}
    </>
  );
}

function ISection3({ get, set }: SP) {
  return (
    <>
      <TextareaField label="What are you seeking grant funding for?" k="fundingFor" get={get} set={set} rows={4} />
      <TextField label="What is the total project cost?" k="projectCost" get={get} set={set} placeholder="e.g. $75,000" />
      <TextField label="How much grant funding are you requesting?" k="grantRequest" get={get} set={set} placeholder="e.g. $50,000" />
      <TextField label="When do you need the funds?" k="fundsNeeded" get={get} set={set} placeholder="e.g. Q3 2026" />
      <TextField label="How much can you invest personally or through the business?" k="personalInvestment" get={get} set={set} placeholder="e.g. $25,000" />
      <TextareaField label="Will this project create jobs? If yes, how many and what roles?" k="jobCreation" get={get} set={set} rows={3} />
      <TextareaField label="Please describe the project in 2–4 sentences" k="projectDescription" get={get} set={set} rows={4} />
    </>
  );
}

function ISection4({ get, set, getArr, toggleCheck }: Required<SP>) {
  return (
    <>
      <TextareaField label="What problem does this project solve for the business?" k="problemSolved" get={get} set={set} rows={3} />
      <TextareaField label="What outcome do you expect from this project?" k="expectedOutcome" get={get} set={set} rows={3} />
      <TextareaField label="How will this project improve the business?" k="improvement" get={get} set={set} rows={3} />
      <div>
        <label className={labelCls}>
          Project areas involved{" "}
          <span className="text-xs text-gray-400 font-normal">(check all that apply)</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {["Equipment", "Renovations / Buildout", "Hiring", "Training", "Technology", "Energy Efficiency", "Accessibility Improvements", "Tourism / Destination", "Community Benefit", "Other"].map((v) => (
            <CheckOption key={v} label={v} checked={getArr("projectAreas").includes(v)} onChange={() => toggleCheck("projectAreas", v)} />
          ))}
        </div>
      </div>
      <TextareaField label="Does this project reduce energy use, water use, waste, emissions, or operating costs? Please explain." k="environmentalBenefit" get={get} set={set} rows={3} />
      <TextareaField label="Does this project improve accessibility, inclusion, or service access? Please explain." k="accessibilityBenefit" get={get} set={set} rows={3} />
    </>
  );
}

function ISection5({ get, set }: SP) {
  return (
    <>
      <TextareaField label="Who is the target customer or community served?" k="targetCustomer" get={get} set={set} rows={3} />
      <TextareaField label="What local demand, service gap, or market opportunity supports this business?" k="marketOpportunity" get={get} set={set} rows={3} />
      <TextareaField label="Does this business serve an underserved market, area, or customer group?" k="underservedMarket" get={get} set={set} rows={3} />
      <TextareaField label="Does the project have any community, cultural, tourism, local sourcing, or public-benefit angle?" k="communityBenefit" get={get} set={set} rows={3} />
      <TextareaField label="Why should this project receive grant support?" k="whyGrant" get={get} set={set} rows={3} />
      <TextareaField label="What makes this business credible, commercially viable, or well-positioned to succeed?" k="credibility" get={get} set={set} rows={3} />
    </>
  );
}

function ISection6({ get, set }: SP) {
  const budgetKeys = [
    { label: "Equipment / machinery / tools ($)", k: "budgetEquipment" },
    { label: "Renovations / buildout / leasehold improvements ($)", k: "budgetRenovations" },
    { label: "Technology / software / systems ($)", k: "budgetTechnology" },
    { label: "Hiring / training / workforce development ($)", k: "budgetHiring" },
    { label: "Accessibility, sustainability, or efficiency upgrades ($)", k: "budgetAccessibility" },
    { label: "Other project costs ($)", k: "budgetOther" },
  ];

  const total = budgetKeys.reduce((sum, { k }) => {
    return sum + (parseFloat((get(k) ?? "").replace(/[^0-9.]/g, "")) || 0);
  }, 0);

  return (
    <>
      {budgetKeys.map(({ label, k }) => (
        <TextField key={k} label={label} k={k} get={get} set={set} placeholder="0" />
      ))}
      <div>
        <label className={labelCls}>Total project cost (auto-calculated)</label>
        <div className={`${inputCls} bg-gray-50 font-semibold text-brand-navy`}>
          {total > 0 ? `$${total.toLocaleString()}` : "$0"}
        </div>
      </div>
      <div>
        <label className={labelCls}>Have you already committed any project costs?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="costsCommitted" value={v} label={v} checked={get("costsCommitted") === v} onChange={() => set("costsCommitted", v)} />
          ))}
        </div>
      </div>
      {get("costsCommitted") === "Yes" && (
        <TextareaField label="What has already been committed or purchased?" k="committedDetails" get={get} set={set} rows={3} />
      )}
    </>
  );
}

function ISection7({ get, set, getArr, toggleCheck }: Required<SP>) {
  return (
    <>
      <div>
        <label className={labelCls}>
          Do you currently have any of the following available?{" "}
          <span className="text-xs text-gray-400 font-normal">(check all that apply)</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-2 mt-1">
          {[
            "Business registration / incorporation documents",
            "Quotes / estimates",
            "Financial projections",
            "Lease or location details",
            "Prior-year financials",
            "Tax returns",
            "Executive summary / concept notes",
            "None yet",
          ].map((v) => (
            <CheckOption key={v} label={v} checked={getArr("docsAvailable").includes(v)} onChange={() => toggleCheck("docsAvailable", v)} />
          ))}
        </div>
      </div>
      <TextareaField label="Please list any documents you already have ready" k="docsReady" get={get} set={set} rows={3} />
      <div>
        <label className={labelCls}>Do you already have supplier quotes or contractor estimates?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="hasQuotes" value={v} label={v} checked={get("hasQuotes") === v} onChange={() => set("hasQuotes", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Do you have a project timeline prepared?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No"].map((v) => (
            <RadioOption key={v} name="hasTimeline" value={v} label={v} checked={get("hasTimeline") === v} onChange={() => set("hasTimeline", v)} />
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Are your bookkeeping and tax filings up to date?</label>
        <div className="flex gap-3 mt-1">
          {["Yes", "No", "Not Applicable"].map((v) => (
            <RadioOption key={v} name="bookkeepingCurrent" value={v} label={v} checked={get("bookkeepingCurrent") === v} onChange={() => set("bookkeepingCurrent", v)} />
          ))}
        </div>
      </div>
      <TextareaField label="What additional information would strengthen your file?" k="additionalInfo" get={get} set={set} rows={3} />
      <TextareaField label="Is there anything else we should know?" k="anythingElse" get={get} set={set} rows={3} />
    </>
  );
}

function ISection8({
  get, set, today, onSubmit,
}: SP & { today: string; onSubmit: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); if (agreed) onSubmit(); }} className="space-y-5">
      <div className="bg-brand-light border border-gray-200 rounded p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-red flex-shrink-0"
          />
          <span className="text-sm text-gray-700 leading-relaxed">
            I confirm that the information provided is accurate to the best of my knowledge and may
            be used for preliminary grant assessment and programme matching.
          </span>
        </label>
      </div>
      <TextField label="Name of person completing this form" k="signerName" get={get} set={set} required />
      <TextField label="Title" k="signerTitle" get={get} set={set} />
      <div>
        <label className={labelCls}>Date</label>
        <input type="date" value={today} readOnly className={`${inputCls} bg-gray-50 cursor-default`} />
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("intake-section");
            if (el) {
              const buttons = el.querySelectorAll<HTMLButtonElement>("[data-prev]");
              buttons[0]?.click();
            }
          }}
          className="px-5 py-2.5 text-sm font-semibold border border-gray-200 rounded text-brand-dark hover:bg-brand-light transition-colors"
        >
          ← Previous
        </button>
        <button
          type="submit"
          disabled={!agreed}
          className="flex-1 bg-brand-red text-white font-semibold py-3 rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Questionnaire
        </button>
      </div>
    </form>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Get Started — Free Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll review your file and get back to you within one
            business day. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Contact info bar */}
      <div className="bg-brand-navy py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="tel:18554726875"
            className="text-2xl font-black text-white hover:text-brand-red transition-colors flex items-center gap-2"
          >
            <PhoneIconLg />
            1-855-GRANTS-5
          </a>
          <span className="hidden sm:block text-blue-400">·</span>
          <p className="text-blue-200 text-sm">We respond to all enquiries within 24 hours.</p>
        </div>
      </div>

      {/* Lead form + sidebar */}
      <section className="bg-brand-light py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">

            {/* Lead form */}
            <div className="lg:col-span-3 bg-white rounded border border-gray-200 shadow-sm p-8 mb-8 lg:mb-0">
              <h2 className="text-xl font-bold text-brand-navy mb-1">Send Us Your Information</h2>
              <p className="text-sm text-gray-500 mb-6">
                Quick form — takes 2 minutes. We&apos;ll call you back the same day.
              </p>
              <LeadFormSection />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
                <h3 className="text-xs font-bold text-brand-navy mb-4 uppercase tracking-widest">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation",
                    "We search federal, provincial, municipal & private grants",
                    "No obligation assessment",
                    "Response within 24 hours",
                    "Serving all Canadian provinces and territories",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-dark">
                      <CheckMark />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-red rounded p-6 text-center">
                <p className="text-white font-bold text-base mb-1">Prefer to Talk?</p>
                <p className="text-red-100 text-sm mb-4">Call us now — no hold time, no bots.</p>
                <a
                  href="tel:18554726875"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-bold text-lg px-6 py-3 rounded hover:bg-red-50 transition-colors w-full"
                >
                  <PhoneIconSm />
                  1-855-GRANTS-5
                </a>
              </div>

              <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-brand-navy mb-1">The Complete Package</h3>
                <p className="text-xs text-gray-500 mb-3">Business Plan + Pitch Deck + 10 Grant Applications</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">One flat fee</span>
                  <span className="text-lg font-black text-brand-navy">$2,500</span>
                </div>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  All-inclusive. No hourly charges. No hidden fees.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Intake questionnaire */}
      <section id="intake-section" className="bg-white py-14 lg:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2">
              Already Ready to Go? Complete Our Full Intake Questionnaire
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              This questionnaire helps us assess your grant fit, project alignment, and file
              readiness. Estimated completion time: 15–20 minutes.
            </p>
          </div>
          <div className="bg-white rounded border border-gray-200 shadow-sm p-8">
            <IntakeQuestionnaire />
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Icons ────────────────────────────────────────────────────── */

function PhoneIconLg() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PhoneIconSm() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function CheckMark() {
  return (
    <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
