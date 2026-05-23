import React, { useState, useEffect, useRef } from 'react';

// Custom Simple Lucide Icon Equivalents as Inline SVGs
const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L7.188 15.904L2 15L7.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929a10 10 0 00-14.142 0M1.93 19.172A10 10 0 0112 2.25M12 21.75a9.75 9.75 0 006.74-2.74M21.75 12A9.75 9.75 0 0112 21.75" />
  </svg>
);

const CpuIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M12 3v1.5M15.75 3v1.5M3 8.25h1.5M3 12h1.5M3 15.75h1.5M21 8.25h-1.5M21 12h-1.5M21 15.75h-1.5M8.25 19.5V21M12 19.5V21M15.75 19.5V21M5.25 5.25h13.5v13.5H5.25V5.25z" />
  </svg>
);

const TerminalIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const WorkflowIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75a3 3 0 11-6 0 3 3 0 016 0zM12 18.75a3 3 0 11-6 0 3 3 0 016 0zM12 18.75V9m0 0a3 3 0 116 0v9.75M12 9a3 3 0 10-6 0v9.75" />
  </svg>
);

const ZapIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
  </svg>
);

const LinkIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('projects');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [selectedSim, setSelectedSim] = useState('fx');
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [customTrigger, setCustomTrigger] = useState('webhook');
  const [customAI, setCustomAI] = useState('extract');
  const [customDest, setCustomDest] = useState('postgres');
  const [blueprintGenerated, setBlueprintGenerated] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  // Reference to store interval ID and prevent memory/state leaks
  const simIntervalRef = useRef(null);

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Mock Workflows Data
  const workflowScenarios = {
    fx: {
      steps: [
        { label: "Trigger", desc: "Gmail Trade Confirmation Webhook Received" },
        { label: "AI Parsing", desc: "GPT-4o OCR: Extracting FX Rate, Value Date & Currencies" },
        { label: "DB Validation", desc: "SQL Stored Proc check vs Oracle DB Core Accounts" },
        { label: "CRM Sync", desc: "Writing Transaction Ledger ID #FX-202684" },
        { label: "Alert", desc: "Slack Card dispatched to FX Trading desk" }
      ],
      logs: [
        "[09:30:02] [WEBHOOK] Received raw PDF deal slip from partner bank gateway.",
        "[09:30:04] [PROCESSOR] Dispatched payload to AI Document Parser Agent (GPT-4o-mini).",
        "[09:30:06] [AI EXTRACTION] JSON extraction complete: { Counterparty: 'Barclays BKK', Amount: 1200000.00, Sell: 'USD', Buy: 'THB', Rate: 34.52, SettlementDate: '2026-05-25' }",
        "[09:30:07] [VALIDATION] Querying PostgreSQL reference database: Counterparty verified. Limits allowed.",
        "[09:30:09] [INTEGRATION] Pushed deal record successfully to Central FX CRM Ledger.",
        "[09:30:10] [ALERT] Executed low-code API POST. Slack alert generated in channel #fx-ops-live."
      ]
    },
    support: {
      steps: [
        { label: "Incoming Query", desc: "Slack / Telegram customer inquiry captured" },
        { label: "Embedding", desc: "Creating semantic representation using Ada-002" },
        { label: "Vector DB LookUp", desc: "Pinecone Knowledgebase RAG querying SOP files" },
        { label: "LLM Agent", desc: "Synthesizing localized financial policy compliant response" },
        { label: "Escalation Check", desc: "Human Agent notified if sentiment score < 0.35" }
      ],
      logs: [
        "[11:15:20] [INCOMING] Channel capture: 'What is the standard processing window for EUR to SGD transfer under the new promotion?'",
        "[11:15:21] [EMBEDDING] Generated vector coordinates.",
        "[11:15:22] [RAG SEARCH] Matching segments found in 'FX_Promo_Guidelines_Q2_2026.pdf' (Similarity Match Score: 0.892)",
        "[11:15:24] [LLM RECONSTRUCT] Claude 3.5 Sonnet formulating draft with dynamic account placeholder validation.",
        "[11:15:25] [AUTO-RESPOND] Message pushed directly to customer interface. Operational ticket updated status: RESOLVED."
      ]
    },
    emi: {
      steps: [
        { label: "Cron Schedule", desc: "hourly cron scans PostgreSQL for failed transfers" },
        { label: "Heuristic Check", desc: "Python automated root cause classification" },
        { label: "API Patching", desc: "Attempt secure mock token account recalculation" },
        { label: "Report Update", desc: "Append analytics metadata in Power BI operational schema" },
        { label: "Teams Card", desc: "Interactive Action cards populated for System Engineers" }
      ],
      logs: [
        "[14:00:00] [CRON] Hourly scan initialized. 14 failed payment exceptions identified.",
        "[14:00:03] [RCA ENGINE] Classifying error codes: 9 failures found due to transient server timeouts; 5 manual verification required (Insufficient Funds/KYC mismatch).",
        "[14:00:06] [RETRY FLOW] Re-attempting API routing via backoff protocol for 9 transient failures.",
        "[14:00:08] [SUCCESS] 9 transactions resolved automatically with zero operations overhead.",
        "[14:00:09] [NOTIFICATION] Transferred remaining 5 complex exceptions to Jira queue. Triggered Teams Actionable Message to Ops."
      ]
    }
  };

  // Gracefully stop the simulation
  const stopSimulation = () => {
    if (simIntervalRef.current) {
      clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }
  };

  // Run the selected simulation
  const runSimulation = () => {
    // Stop any existing simulation run first
    stopSimulation();
    
    setSimulationRunning(true);
    setConsoleLogs([]);
    setCurrentStep(-1);

    const scenario = workflowScenarios[selectedSim];
    if (!scenario || !scenario.logs || !scenario.steps) {
      setSimulationRunning(false);
      return;
    }

    let logIndex = 0;
    let stepIndex = 0;

    // Fast interval for high-tech visual feedback
    simIntervalRef.current = setInterval(() => {
      if (logIndex < scenario.logs.length) {
        const nextLog = scenario.logs[logIndex];
        if (nextLog) {
          setConsoleLogs(prev => [...prev, nextLog]);
        }
        logIndex++;
        
        // Every log, advance corresponding visual flow step
        if (stepIndex < scenario.steps.length) {
          setCurrentStep(stepIndex);
          stepIndex++;
        }
      } else {
        stopSimulation();
        setSimulationRunning(false);
      }
    }, 1200);
  };

  // Automatically reset simulation states if tab or selection switches
  useEffect(() => {
    stopSimulation();
    setSimulationRunning(false);
    setConsoleLogs([]);
    setCurrentStep(-1);
    
    return () => stopSimulation();
  }, [selectedSim, activeTab]);

  // Blueprint generator code builder
  const handleGenerateBlueprint = () => {
    setBlueprintGenerated(true);
  };

  const getCustomBlueprintCode = () => {
    return `{
  "name": "Custom Automated AI Integration",
  "active": true,
  "trigger": {
    "type": "${customTrigger}",
    "properties": {
      "port": 5678,
      "path": "/v1/automation-receiver",
      "auth": "Header-Token"
    }
  },
  "nodes": [
    {
      "name": "AI Processing Agent",
      "type": "n8n-nodes-base.openAi",
      "parameters": {
        "operation": "${customAI === 'extract' ? 'structured_data_extraction' : customAI === 'summarize' ? 'summarize_document' : 'sentiment_analysis'}",
        "model": "gpt-4o-mini",
        "temperature": 0.1
      }
    },
    {
      "name": "Destination Integration Router",
      "type": "n8n-nodes-base.${customDest}",
      "parameters": {
        "action": "upsert_record",
        "mapping": {
          "status": "PROCESSED",
          "processedAt": "{{ $now }}",
          "insights": "{{ $json.ai_response }}"
        }
      }
    }
  ]
}`;
  };

  const getCustomBlueprintPython = () => {
    return `import os
import requests
import psycopg2 # SQL Connector
from openai import OpenAI

# 1. Capture payload from ${customTrigger}
def handle_event(payload):
    print("Received raw trigger event...")
    
    # 2. Deploy LLM with instruction '${customAI}'
    client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    
    prompt = f"Process this operational data. Objective: ${customAI}. Data: {payload}"
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    result = completion.choices[0].message.content
    
    # 3. Write securely to Destination Database / App (${customDest})
    db_conn = psycopg2.connect(os.environ.get("DATABASE_URL"))
    cursor = db_conn.cursor()
    cursor.execute(
        "INSERT INTO automation_runs (source, output_data) VALUES (%s, %s)",
        ("${customTrigger}", result)
    )
    db_conn.commit()
    print("Workflow executed successfully & state written to ${customDest}!")`;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('access_key', '0308ff1c-58bf-42e9-8f02-865eb1e9415a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResultMessage('Success! Your message has been sent.');
        setBookingSubmitted(true);
        setBookingName('');
        setBookingEmail('');
        setBookingMessage('');
      } else {
        setResultMessage('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setResultMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0B0F19] text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      
      {/* HEADER SECTION - Upgraded z-index for absolute layout protection */}
      <header className={`sticky top-0 z-[99] backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0B0F19]/90 border-slate-800' : 'bg-white/90 border-gray-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <CpuIcon className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className={`font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500`}>
                SHRUTI SHINDE
              </span>
              <p className="text-xs text-cyan-500 font-semibold tracking-widest">AI AUTOMATION SPECIALIST</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">

            {/* Light/Dark Toggle with guaranteed pointer capture */}
            <button 
              onClick={toggleTheme} 
              className={`p-2.5 rounded-full border transition-all pointer-events-auto relative z-[110] cursor-pointer flex items-center justify-center ${
                theme === 'dark' 
                  ? 'border-gray-700/80 hover:bg-cyan-500/15 text-yellow-400 bg-slate-900/40' 
                  : 'border-gray-300 hover:bg-gray-200 text-purple-700 bg-white shadow-sm'
              }`}
              style={{ minWidth: '40px', minHeight: '40px' }}
              aria-label="Toggle Theme"
              title="Toggle Theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO INTRODUCTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-gray-800/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Available in Bangkok / Hybrid</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Architecting <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Autonomous</span> Processes.
              </h1>
              
              <p className={`text-lg leading-relaxed max-w-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Specialized in translating intricate operational workflows into reliable, intelligent systems. 
                With 4+ years of engineering experience in the banking and financial solutions domain, I integrate modern **AI Agents (LLMs, Vector DBs, n8n, Make)** directly with core legacy engines & databases.
              </p>

              {/* Badges/Tags for Recruiters */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className={`text-xs px-3 py-1 rounded-md border ${theme === 'dark' ? 'bg-slate-800/60 text-cyan-300 border-cyan-500/20' : 'bg-cyan-50 text-cyan-800 border-cyan-200'}`}>n8n / Make / Zapier</span>
                <span className={`text-xs px-3 py-1 rounded-md border ${theme === 'dark' ? 'bg-slate-800/60 text-blue-300 border-blue-500/20' : 'bg-blue-50 text-blue-800 border-blue-200'}`}>Python & SQL Pipelines</span>
                <span className={`text-xs px-3 py-1 rounded-md border ${theme === 'dark' ? 'bg-slate-800/60 text-purple-300 border-purple-500/20' : 'bg-purple-50 text-purple-800 border-purple-200'}`}>Generative AI & LLM APIs</span>
                <span className={`text-xs px-3 py-1 rounded-md border ${theme === 'dark' ? 'bg-slate-800/60 text-emerald-300 border-emerald-500/20' : 'bg-emerald-50 text-emerald-800 border-emerald-200'}`}>RPA (Process Studio / UI Path)</span>
                <span className={`text-xs px-3 py-1 rounded-md border ${theme === 'dark' ? 'bg-slate-800/60 text-amber-300 border-amber-500/20' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>Intelligent Doc Processing</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('playground')} 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all flex items-center space-x-2">
                  <ZapIcon className="w-5 h-5" />
                  <span>Try Interactive Sandbox</span>
                </button>
                <a 
                  href="#contact" 
                  className={`font-medium px-6 py-3 rounded-lg transition-all flex items-center space-x-2 border ${
                    theme === 'dark' 
                      ? 'bg-slate-800 hover:bg-slate-700 text-gray-200 border-slate-700' 
                      : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300 shadow-sm'
                  }`}>
                  <MailIcon className="w-5 h-5" />
                  <span>Request AI Audit/Consult</span>
                </a>
              </div>
            </div>

            {/* Right Information/Visual Column */}
            <div className="lg:col-span-5 relative z-20">
              <div className={`rounded-2xl border p-6 shadow-2xl relative transition-all ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800' 
                  : 'bg-white border-gray-200 text-gray-800'
              }`}>
                <div className={`absolute top-3 right-3 text-[10px] font-mono tracking-widest px-2.5 py-1 rounded border ${
                  theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-cyan-50 text-cyan-600 border-cyan-200'
                }`}>
                  ENG-PROFILE v1.2
                </div>
                
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-500 mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4" /> Quick Info Metrics
                </h3>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-800/80' : 'border-gray-100'}`}>
                    <span className="text-gray-400">Exp Level:</span>
                    <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Senior AI Automation Engineer (4+ Yrs)</span>
                  </div>
                  <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-800/80' : 'border-gray-100'}`}>
                    <span className="text-gray-400">Education:</span>
                    <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>M.Tech Computer Eng (COEP Pune)</span>
                  </div>
                  <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-800/80' : 'border-gray-100'}`}>
                    <span className="text-gray-400">Key Domain:</span>
                    <span className="text-indigo-500 font-semibold">Fintech, FX, & Core Banking Ops</span>
                  </div>
                  <div className={`flex justify-between border-b pb-2 ${theme === 'dark' ? 'border-slate-800/80' : 'border-gray-100'}`}>
                    <span className="text-gray-400">Research Focus:</span>
                    <span className="text-emerald-500 font-semibold">NLP & ML (Springer & IEEE)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latest Tools:</span>
                    <span className="text-yellow-600 font-bold">n8n Agentic Flows, Langchain, GPT API</span>
                  </div>
                </div>

                <div className={`mt-6 rounded-xl p-4 transition-all ${
                  theme === 'dark' ? 'bg-[#060A13] border border-cyan-950' : 'bg-slate-50 border border-slate-200'
                }`}>
                  <p className={`text-xs italic ${theme === 'dark' ? 'text-cyan-400/80' : 'text-slate-600'}`}>
                    "I build high-reliability integrations that reduce manual effort to zero. Instead of standard rigid RPA, I engineer adaptive AI-driven workflows that learn, route, and auto-correct."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PORTFOLIO & WORKFLOW SIMULATOR */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Navigation Tabs */}
        <div className={`flex justify-center space-x-4 mb-12 border-b pb-1 ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`pb-4 px-6 text-lg font-bold border-b-2 transition-all ${activeTab === 'projects' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
            🚀 Solved AI Use Cases
          </button>
          <button 
            onClick={() => setActiveTab('playground')}
            className={`pb-4 px-6 text-lg font-bold border-b-2 transition-all ${activeTab === 'playground' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
            🛠️ Blueprint Builder Sandbox
          </button>
          <button 
            onClick={() => setActiveTab('experience')}
            className={`pb-4 px-6 text-lg font-bold border-b-2 transition-all ${activeTab === 'experience' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
            📋 Tech Stack & CV Details
          </button>
        </div>

        {/* TAB 1: PORTFOLIO & USE CASES */}
        {activeTab === 'projects' && (
          <div className="space-y-16 animate-fade-in">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Fintech AI-Workflow Portfolios</h2>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                A showcase of production-ready automations constructed specifically to eliminate overheads, process leaks, and manual data-entry errors in financial environments.
              </p>
            </div>

            {/* LIVE SIMULATOR DECK */}
            <div className={`rounded-2xl border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all ${
              theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200'
            }`}>
              
              {/* Simulator Left Actions */}
              <div className={`p-8 lg:col-span-5 border-b lg:border-b-0 lg:border-r space-y-6 ${theme === 'dark' ? 'border-slate-800' : 'border-gray-200'}`}>
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-yellow-500/10 rounded border border-yellow-500/20 text-yellow-500">
                    <ZapIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-yellow-500">Interactive Execution Engine</span>
                </div>

                <h3 className="text-2xl font-bold">Live Operational Pipeline Sandbox</h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select an enterprise-scale automation flow below and execute the pipeline live. Experience how the AI modules, API checks, and output operations communicate in real time.
                </p>

                {/* Workflow Selectors */}
                <div className="space-y-3">
                  <button 
                    onClick={() => { setSelectedSim('fx'); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedSim === 'fx' 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-500 font-semibold' 
                        : theme === 'dark' ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">1. AI FX Slip Doc Extraction Pipeline</span>
                      <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded text-cyan-400 font-mono">IDP + n8n</span>
                    </div>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Converts unstructured PDF trade confirmations into formatted, auto-reconciled database records.</p>
                  </button>

                  <button 
                    onClick={() => { setSelectedSim('support'); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedSim === 'support' 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-500 font-semibold' 
                        : theme === 'dark' ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">2. Multi-Channel AI Assistant & RAG Router</span>
                      <span className="text-[10px] bg-purple-950 px-2 py-0.5 rounded text-purple-400 font-mono">LLM + Vector DB</span>
                    </div>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Embeds client promotional and SOP queries, matches context via database, routes support tickets.</p>
                  </button>

                  <button 
                    onClick={() => { setSelectedSim('emi'); }}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedSim === 'emi' 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-500 font-semibold' 
                        : theme === 'dark' ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">3. Payment System EMI Failure Handler</span>
                      <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded text-emerald-400 font-mono">Python + SQL</span>
                    </div>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Tracks broker transactions, automates failure analysis, patches database, triggers support tickets.</p>
                  </button>
                </div>

                <button 
                  onClick={runSimulation}
                  disabled={simulationRunning}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 ${simulationRunning ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/10 hover:scale-[1.01]'}`}>
                  <TerminalIcon className={`w-5 h-5 ${simulationRunning ? 'animate-spin' : ''}`} />
                  <span>{simulationRunning ? 'Processing Workflow...' : 'Execute Live Simulation'}</span>
                </button>
              </div>

              {/* Simulator Right Terminal Display */}
              <div className={`lg:col-span-7 p-8 flex flex-col justify-between min-h-[500px] transition-all ${
                theme === 'dark' ? 'bg-[#070A12]' : 'bg-slate-50'
              }`}>
                
                {/* Visual Pipeline flow nodes */}
                <div className="space-y-4">
                  <div className={`flex items-center justify-between border-b pb-3 ${theme === 'dark' ? 'border-slate-800/80' : 'border-gray-200'}`}>
                    <span className="text-xs font-mono text-cyan-500 font-bold tracking-widest uppercase">Pipeline Node Mapping</span>
                    <span className="flex h-2 w-2 relative">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 ${simulationRunning ? '' : 'hidden'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${simulationRunning ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                    </span>
                  </div>

                  {/* Flow Map Visualizer */}
                  <div className="grid grid-cols-5 gap-2 pt-2">
                    {workflowScenarios[selectedSim]?.steps?.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={`p-3 rounded-lg border text-center transition-all ${
                          idx === currentStep 
                            ? 'bg-cyan-500/20 border-cyan-400 scale-105 shadow-md shadow-cyan-500/5 text-cyan-500 font-bold' 
                            : idx < currentStep 
                              ? 'bg-slate-900/50 border-emerald-500/40 text-emerald-600' 
                              : theme === 'dark' ? 'bg-slate-950/80 border-slate-800/80 text-slate-600' : 'bg-white border-slate-200 text-slate-400'
                        }`}>
                        <div className="text-[10px] uppercase tracking-wider font-mono font-bold">{step.label}</div>
                        <div className="text-[9px] mt-1 hidden md:block opacity-85 overflow-hidden text-ellipsis whitespace-nowrap">{step.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real-time styled terminal outputs */}
                <div className={`my-6 flex-grow border rounded-xl p-5 font-mono text-xs overflow-y-auto max-h-[300px] shadow-inner ${
                  theme === 'dark' ? 'bg-slate-950/80 border-slate-900' : 'bg-white border-slate-200 text-slate-700'
                }`}>
                  {consoleLogs.length === 0 ? (
                    <div className="text-slate-400 flex flex-col items-center justify-center h-full py-12 space-y-2">
                      <TerminalIcon className="w-8 h-8 text-slate-300" />
                      <span>Terminal ready. Click 'Execute Live Simulation' to stream steps.</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {consoleLogs.map((log, index) => {
                        if (typeof log !== 'string') return null;
                        let textClass = "text-slate-300";
                        if (theme === 'light') textClass = "text-slate-700";
                        if (log.includes("[SUCCESS]")) textClass = "text-emerald-500 font-semibold";
                        if (log.includes("[AI EXTRACTION]")) textClass = "text-purple-500 font-semibold";
                        if (log.includes("[WEBHOOK]") || log.includes("[INCOMING]")) textClass = "text-cyan-500";
                        if (log.includes("[PROCESSOR]")) textClass = "text-blue-500";
                        return (
                          <div key={index} className={`border-l-2 pl-2 border-slate-300/40 ${textClass}`}>
                            {log}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-[11px] font-mono text-slate-400">
                  <span>Engine: Python Integration & Agent Services</span>
                  <span>Latency: ~1.2s/node</span>
                </div>

              </div>
            </div>

            {/* EXPANDED DETAILED CASE STUDY CARDS (Use Case & Solution Format) */}
            <div className="space-y-8 pt-8">
              <h3 className="text-2xl font-bold text-center tracking-tight">Production Blueprint Deep Dives</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CASE STUDY 1 */}
                <div className={`rounded-xl border overflow-hidden shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between ${
                  theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200'
                }`}>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2.5 py-1 rounded-md font-mono font-bold uppercase border border-cyan-800/30">IDP Extraction</span>
                      <span className="text-xs text-slate-400 font-semibold">Fintech Domain</span>
                    </div>
                    <h4 className="text-lg font-bold">AI-Powered FX Deal Slip Processing</h4>
                    
                    <div className="space-y-3 pt-2 text-sm leading-relaxed">
                      <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Operational Problem</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Manual processing of counterparty trade execution confirmations from PDF attachments took 15 minutes per document, limiting scalability and prone to manual transcription leakage.
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest block">AI-Driven Solution</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Engineered an event-driven **n8n orchestration** flow integrated with **Python scripts** and **OpenAI GPT-4o**. Automatically ingests incoming PDFs via OAuth IMAP, strips metadata, extracts structured pricing parameters, checks current oracle rate lists, and pushes data down to core SQL databases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 border-t ${theme === 'dark' ? 'bg-[#070A12] border-slate-800/80' : 'bg-slate-50 border-gray-200'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Business Impact</span>
                        <span className="text-emerald-500 font-mono font-bold text-base">98.3% Time Saved</span>
                      </div>
                      <span className="text-xs font-bold text-cyan-500">SOP Documented</span>
                    </div>
                  </div>
                </div>

                {/* CASE STUDY 2 */}
                <div className={`rounded-xl border overflow-hidden shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between ${
                  theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200'
                }`}>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-purple-950 text-purple-400 px-2.5 py-1 rounded-md font-mono font-bold uppercase border border-purple-800/30">RAG Agent routing</span>
                      <span className="text-xs text-slate-400 font-semibold">Internal Support</span>
                    </div>
                    <h4 className="text-lg font-bold">Generative SOP AI Copilot</h4>
                    
                    <div className="space-y-3 pt-2 text-sm leading-relaxed">
                      <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Operational Problem</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Operations staff spent excessive hours querying internal folders, promotional guideline files, and policy documents to answer complex client trading status inquiries.
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest block">AI-Driven Solution</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Deployed an automated **Make.com** flow integrated with **Pinecone vector database** containing embedded PDF documents. When queries hit Slack or web portals, a custom API checks relevance, synthesizes context-based drafts via LLM, and triggers Slack notifications to the respective account manager.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 border-t ${theme === 'dark' ? 'bg-[#070A12] border-slate-800/80' : 'bg-slate-50 border-gray-200'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Business Impact</span>
                        <span className="text-emerald-500 font-mono font-bold text-base">60% deflection rate</span>
                      </div>
                      <span className="text-xs font-bold text-cyan-500">Zero-Code Scaled</span>
                    </div>
                  </div>
                </div>

                {/* CASE STUDY 3 */}
                <div className={`rounded-xl border overflow-hidden shadow-lg hover:border-slate-400 transition-all flex flex-col justify-between ${
                  theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200'
                }`}>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-md font-mono font-bold uppercase border border-emerald-800/30">Operations pipeline</span>
                      <span className="text-xs text-slate-400 font-semibold">Payment exceptions</span>
                    </div>
                    <h4 className="text-lg font-bold">Automated EMI Exception & RCA</h4>
                    
                    <div className="space-y-3 pt-2 text-sm leading-relaxed">
                      <div>
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest block">Operational Problem</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Banking EMI routing errors and transaction mismatches required tedious, manual database cross-referencing and alert configuration, raising risk and slowing resolutions.
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest block">AI-Driven Solution</span>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Created a scheduled **Python script** execution pipeline on Docker, running multi-table SQL queries to isolate failures. Built an automated analyzer module that dynamically corrects minor errors (e.g., matching codes) or auto-generates Teams support cards with full debug details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 border-t ${theme === 'dark' ? 'bg-[#070A12] border-slate-800/80' : 'bg-slate-50 border-gray-200'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">Business Impact</span>
                        <span className="text-emerald-500 font-mono font-bold text-base">82% automated resolution</span>
                      </div>
                      <span className="text-xs font-bold text-cyan-500">Power BI Integrated</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: INTERACTIVE SANDBOX BUILDER */}
        {activeTab === 'playground' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight">Interactive AI Workflow Builder</h2>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Design custom automations by choosing a Trigger, an AI Action logic, and a destination app. Watch how the low-code orchestration JSON blueprint or custom Python implementation is built on-the-fly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Builder Controllers */}
              <div className={`lg:col-span-5 rounded-xl border p-6 space-y-6 ${theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-md'}`}>
                <span className="text-xs font-mono font-bold text-cyan-500 tracking-wider uppercase block">Step 1: Define Flow Parameters</span>
                
                {/* Trigger Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">1. Incoming Trigger (Source Event)</label>
                  <select 
                    value={customTrigger} 
                    onChange={(e) => { setCustomTrigger(e.target.value); setBlueprintGenerated(false); }}
                    className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 transition-all ${
                      theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                    }`}>
                    <option value="webhook">Webhook API Listener (JSON Payload)</option>
                    <option value="gmail">Gmail: New Incoming Message with Attachments</option>
                    <option value="stripe">Stripe: Payment Gateway Exception Event</option>
                    <option value="cron">Scheduled Cron Job (Hourly Database Scan)</option>
                  </select>
                </div>

                {/* AI Processing Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">2. Intelligent AI Action Module</label>
                  <select 
                    value={customAI} 
                    onChange={(e) => { setCustomAI(e.target.value); setBlueprintGenerated(false); }}
                    className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 transition-all ${
                      theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                    }`}>
                    <option value="extract">LLM: Extract Structured JSON Data & Validation</option>
                    <option value="summarize">LLM: Summarize Internal SOP Documents & Check Compliance</option>
                    <option value="sentiment">LLM: Classify Customer Support Sentiment & Route Ticket</option>
                  </select>
                </div>

                {/* Destination Select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">3. Destination API / Action Storage</label>
                  <select 
                    value={customDest} 
                    onChange={(e) => { setCustomDest(e.target.value); setBlueprintGenerated(false); }}
                    className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 transition-all ${
                      theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                    }`}>
                    <option value="postgres">PostgreSQL Relational DB (Write To Operations Table)</option>
                    <option value="slack">Slack Notification Webhook (Formatted Cards)</option>
                    <option value="salesforce">Salesforce API Router (CRM Update)</option>
                  </select>
                </div>

                <button 
                  onClick={handleGenerateBlueprint}
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:scale-[1.01] hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <WorkflowIcon className="w-5 h-5" />
                  <span>Generate AI Integration Blueprint</span>
                </button>
              </div>

              {/* Dynamic Visual Graph & Code Output */}
              <div className={`lg:col-span-7 rounded-xl border p-6 space-y-6 ${theme === 'dark' ? 'bg-[#070A12] border-slate-800' : 'bg-white border-gray-200 shadow-md'}`}>
                
                {/* Flow Graph representation */}
                <div className={`p-4 border rounded-xl space-y-4 ${theme === 'dark' ? 'bg-[#101625]/60 border-slate-850' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs text-slate-400 uppercase tracking-widest block font-mono">Blueprint visual pipeline</span>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                    {/* Trigger Block */}
                    <div className={`border p-3 rounded-lg text-center w-full md:w-36 shadow-sm ${theme === 'dark' ? 'bg-slate-900 border-cyan-500/30' : 'bg-white border-cyan-500/20'}`}>
                      <span className="text-[10px] uppercase font-bold text-cyan-500 block font-mono">Trigger Source</span>
                      <span className={`text-xs font-bold capitalize ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{customTrigger}</span>
                    </div>

                    <div className="text-cyan-500 font-bold hidden md:block">➔</div>
                    <div className="text-cyan-500 font-bold md:hidden">▼</div>

                    {/* AI Engine Block */}
                    <div className={`border p-3 rounded-lg text-center w-full md:w-44 shadow-sm ${theme === 'dark' ? 'bg-slate-900 border-purple-500/30' : 'bg-white border-purple-500/20'}`}>
                      <span className="text-[10px] uppercase font-bold text-purple-500 block font-mono">AI Action Processing</span>
                      <span className={`text-xs font-bold capitalize ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{customAI === 'extract' ? 'Data Extractor' : customAI === 'summarize' ? 'SOP Summarizer' : 'Sentiment Router'}</span>
                    </div>

                    <div className="text-cyan-500 font-bold hidden md:block">➔</div>
                    <div className="text-cyan-500 font-bold md:hidden">▼</div>

                    {/* Destination Block */}
                    <div className={`border p-3 rounded-lg text-center w-full md:w-36 shadow-sm ${theme === 'dark' ? 'bg-slate-900 border-emerald-500/30' : 'bg-white border-emerald-500/20'}`}>
                      <span className="text-[10px] uppercase font-bold text-emerald-500 block font-mono">Data Endpoint</span>
                      <span className={`text-xs font-bold capitalize ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{customDest}</span>
                    </div>
                  </div>
                </div>

                {/* Switchable code blocks */}
                {blueprintGenerated ? (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                      <span className="text-xs text-slate-400 font-mono">Generated Configurations & Scripts</span>
                      <span className="text-xs text-green-600 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" /> Valid Blueprint compiled
                      </span>
                    </div>

                    {/* Option A: Orchestration JSON Config */}
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-slate-500 block uppercase font-mono">Low-Code (n8n JSON Blueprint)</span>
                      <pre className={`p-4 rounded-lg overflow-x-auto text-[11px] font-mono text-cyan-500 max-h-[180px] border shadow-inner ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {getCustomBlueprintCode()}
                      </pre>
                    </div>

                    {/* Option B: Custom Python Script */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-slate-500 block uppercase font-mono">Python Script Implementation (Data Pipeline)</span>
                      <pre className={`p-4 rounded-lg overflow-x-auto text-[11px] font-mono text-emerald-600 max-h-[220px] border shadow-inner ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'
                      }`}>
                        {getCustomBlueprintPython()}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="py-16 text-center text-slate-400 font-mono text-sm">
                    Select your parameters on the left and click **'Generate AI Integration Blueprint'** to build files.
                  </div>
                )}

              </div>

            </div>
          </div>
        )}

        {/* TAB 3: RESUME, SKILLS & TECHNICAL BIO */}
        {activeTab === 'experience' && (
          <div className="space-y-12 animate-fade-in">
            
            {/* Core Competencies Skill Matrix */}
            <div className={`rounded-xl border p-8 transition-all ${
              theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-md'
            }`}>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Technical Mastery & Architecture Experience</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Column 1: Core Automation Stacks */}
                <div className="space-y-5">
                  <span className="text-xs font-bold text-cyan-500 uppercase font-mono tracking-wider">Workflow Orchestration & APIs</span>
                  
                  <div className="space-y-3">
                    {/* n8n */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>n8n / Make.com / low-code Platforms</span>
                        <span className="text-cyan-500">95%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>

                    {/* Python */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>Python (Pandas, SQL APIs, Data Mining)</span>
                        <span className="text-cyan-500">90%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>

                    {/* Databases */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>Relational Databases (Oracle, Postgres, SQL)</span>
                        <span className="text-cyan-500">85%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 h-full rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: AI & ML Systems */}
                <div className="space-y-5">
                  <span className="text-xs font-bold text-purple-500 uppercase font-mono tracking-wider">AI Operations & Intelligent Data Extraction</span>
                  
                  <div className="space-y-3">
                    {/* Generative AI */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>LLM Integration (GPT, Claude, Embeddings, RAG)</span>
                        <span className="text-purple-500">85%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>

                    {/* Traditional ML */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>Natural Language Processing & Machine Learning</span>
                        <span className="text-purple-400">80%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>

                    {/* RPA Toolsets */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span>Robotic Process Automation (Process Studio, UiPath)</span>
                        <span className="text-purple-400">90%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight">Professional History</h3>
              
              <div className="space-y-6">
                
                {/* Job 1 */}
                <div className={`border rounded-xl p-6 relative transition-all ${
                  theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  <span className="absolute top-6 right-6 text-xs text-cyan-500 font-mono font-bold bg-cyan-950/20 px-3 py-1 rounded border border-cyan-850">
                    2021 - 2026
                  </span>
                  
                  <h4 className="text-xl font-bold">Senior RPA Developer (AI/Automation Solutions)</h4>
                  <span className="text-sm text-slate-400 font-semibold block mt-1">AutomationEdge, Pune & Bangkok Remote Operations</span>

                  <ul className={`mt-4 space-y-2 text-sm list-disc pl-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    <li>Designed, integrated and monitored mission-critical, high-reliability intelligent automation workflows to streamline transaction routing and operations.</li>
                    <li>Built scalable data extraction pipelines inside Python to extract unstructured financial confirmations, matching and cleansing database structures with low error rates.</li>
                    <li>Collaborated closely with business lines and external partners to identify, analyze, and remove systemic bottlenecks via modern API automation.</li>
                    <li>Analyzed processing metrics, monitored exceptions, and ran Root Cause Analysis (RCA) on multi-table core databases.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className={`border rounded-xl p-6 relative transition-all ${
                  theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  <span className="absolute top-6 right-6 text-xs text-cyan-400 font-mono font-bold bg-cyan-950/20 px-3 py-1 rounded border border-cyan-850">
                    2020 - 2021
                  </span>
                  
                  <h4 className="text-xl font-bold">Research Intern (NLP & ML Extraction)</h4>
                  <span className="text-sm text-slate-400 font-semibold block mt-1">TRDDC (Tata Research Development and Design Centre)</span>

                  <ul className={`mt-4 space-y-2 text-sm list-disc pl-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    <li>Researched and trained NLP models for extraction of structured data from complex documents, evaluating interpretability.</li>
                    <li>Contributed to AI pipeline research and published paper outputs demonstrating optimization techniques.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Academic Credentials & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Education Box */}
              <div className={`border rounded-xl p-6 transition-all ${
                theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-sm'
              }`}>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  🎓 Academic Credentials
                </h4>
                
                <div className="space-y-4 font-sans text-sm">
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <span className="font-bold block">M.Tech in Computer Engineering</span>
                    <span className="text-xs text-slate-400">College of Engineering Pune (COEP) | 2019 - 2021</span>
                  </div>
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <span className="font-bold block">B.E in Computer Engineering</span>
                    <span className="text-xs text-slate-400">Sinhgad Academy of Engineering, Pune | 2015 - 2019</span>
                  </div>
                </div>
              </div>

              {/* Research Publications & Achievements */}
              <div className={`border rounded-xl p-6 transition-all ${
                theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200 shadow-sm'
              }`}>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  🏆 Peer Publications & Achievements
                </h4>
                
                <ul className={`space-y-3 text-sm list-disc pl-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li>
                    <span className="font-semibold">Springer Published:</span> Co-authored and published comprehensive research on <a href="https://www.researchgate.net/publication/363175214_Hybrid_Approach_for_Fake_Profile_Identification_on_Social_Media" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline inline-flex items-center gap-1 font-bold">Fake Profile Identification <LinkIcon className="w-3.5 h-3.5 inline" /></a> and NLP approaches.
                  </li>
                  <li>
                    <span className="font-semibold">IEEE Published:</span> Co-authored and published research on <a href="https://www.researchgate.net/publication/356239342_Malicious_Profile_Detection_on_Social_Media_A_Survey_Paper" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline inline-flex items-center gap-1 font-bold">Malicious Profile Detection <LinkIcon className="w-3.5 h-3.5 inline" /></a> utilizing machine learning model scoring.
                  </li>
                  <li>
                    <span className="font-semibold">Operational Solution Milestone:</span> Authored the script-based engine to automate complex banking EMI data, eliminating manual intervention overheads.
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* CONTACT & AI BOOKING SECTION */}
      <section id="contact" className={`py-16 border-t ${theme === 'dark' ? 'bg-[#070A12] border-slate-800/85' : 'bg-slate-50 border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">Collaborate with Shruti</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Let's Automate Your Workflows</h2>
            <p className={`max-w-xl mx-auto text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              In need of custom-tailored automated platforms, structured n8n/Make blueprints, or Python database pipelines to eliminate operational drag? Submit a consult request below.
            </p>
          </div>

          <div className={`border rounded-2xl p-8 text-left shadow-xl ${
            theme === 'dark' ? 'bg-[#101625] border-slate-800' : 'bg-white border-gray-200'
          }`}>
            {bookingSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
                <h3 className="text-xl font-bold">Workflow Audit Request Dispatched</h3>
                <p className={`text-sm max-w-sm mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Thank you! Shruti will analyze your inquiry parameters and reach out via email shortly with technical automation solutions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Your Name</label>
                    <input 
                      type="text" 
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 ${
                        theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                      }`} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Corporate Email</label>
                    <input 
                      type="email" 
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      required
                      placeholder="name@company.com"
                      className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 ${
                        theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                      }`} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Workflow Bottleneck Details (Optional)</label>
                  <textarea 
                    rows="3"
                    value={bookingMessage}
                    onChange={(e) => setBookingMessage(e.target.value)}
                    placeholder="Describe your manual operational process. e.g. 'We spend 10 hours a week extracting transaction confirmation emails into Salesforce...'"
                    className={`w-full border rounded-lg p-3 text-sm outline-none focus:border-cyan-500 ${
                      theme === 'dark' ? 'bg-[#070A12] border-slate-800 text-gray-200' : 'bg-slate-50 border-slate-200 text-gray-700'
                    }`} />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="flex h-2 w-2 bg-green-500 rounded-full" />
                    <span>Response window: Under 24 Hours</span>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-[1.01] transition-all">
                    Request Process Audit
                  </button>
                </div>
                {resultMessage && (
                  <p className={`mt-4 text-sm ${resultMessage.startsWith('Success') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {resultMessage}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5"><MailIcon className="w-4 h-4 text-cyan-500" /> shrutishinde4698@gmail.com</span>
            <span className="flex items-center gap-1.5"><PhoneIcon className="w-4 h-4 text-cyan-500" /> +66-0841624505</span>
            <span className="flex items-center gap-1.5"><MapPinIcon className="w-4 h-4 text-cyan-500" /> Phra Ram 9, Bangkok</span>
            <a href="https://linkedin.com/in/shruti-rp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 text-slate-400 transition-colors">
              <LinkIcon className="w-4 h-4 text-cyan-500" /> linkedin.com/in/shruti-rp
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-8 text-center text-xs border-t ${theme === 'dark' ? 'bg-[#04070D] text-slate-600 border-slate-900' : 'bg-white text-slate-500 border-gray-200'}`}>
        <p>© 2026 Shruti Shinde. Built with React, Tailwind CSS, & Advanced Automation Architectures.</p>
      </footer>

    </div>
  );
}