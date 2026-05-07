import { motion } from "framer-motion";
import {
  FiPieChart, FiCode, FiCloud, FiShield, FiServer, FiZap, FiDatabase, FiActivity, FiBarChart2, FiCheckCircle
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiServer,
    title: "ServiceNow Platform & Core Modules",
    skills: ["ITSM (Incident, Problem, Change, Request)", "ITOM (Discovery, Service Mapping, Event Management)", "CMDB", "CSDM 4.0", "HRSD", "CSM", "SAM", "HAM", "GRC", "Service Catalog"],
  },
  {
    icon: FiCode,
    title: "ServiceNow Development & Platform Engineering",
    skills: ["JavaScript (ES6+)", "Glide API", "Script Includes", "Business Rules", "Client Scripts", "UI Policies", "UI Actions", "Flow Designer", "Workflow Editor", "UI Builder", "Service Portal Widgets", "Jelly"],
  },
  {
    icon: FiZap,
    title: "Integration & API Engineering",
    skills: ["Integration Hub", "Scripted REST APIs", "Table APIs", "SOAP APIs", "MID Server", "JSON", "XML", "OAuth 2.0", "SAML 2.0", "LDAP", "Active Directory", "Webhooks", "API Orchestration"],
  },
  {
    icon: FiDatabase,
    title: "CMDB & ITOM Engineering",
    skills: ["Discovery Patterns", "Service Mapping", "IRE", "Service Graph Connectors", "Event Management", "CI Lifecycle Management", "Data Normalization", "CMDB Governance"],
  },
  {
    icon: FiPieChart,
    title: "Application Development (App Engine)",
    skills: ["App Engine Studio", "Scoped Applications", "Data Modeling", "Business Logic Automation", "LowCode/Pro-Code Development", "Workflow Automation", "ServiceNow Platform APIs"],
  },
  {
    icon: FiActivity,
    title: "AI, GenAI & Intelligent Automation",
    skills: ["Now Assist (Generative AI / LLM)", "Predictive Intelligence", "Virtual Agent", "Natural Language Understanding (NLU)", "Conversational AI Workflows", "AI-Powered Ticket Summarization", "Intelligent Routing"],
  },
  {
    icon: FiBarChart2,
    title: "Frontend & Experience Layer",
    skills: ["HTML5", "CSS3", "AngularJS", "Bootstrap", "Responsive UI Design", "Service Portal Development", "UI Builder Experience Framework"],
  },
  {
    icon: FiCloud,
    title: "Cloud, DevOps & Platform Operations",
    skills: ["Microsoft Azure", "CI/CD Pipelines", "Git", "ServiceNow Studio", "Update Set Management", "Instance Upgrades", "Clone Management", "ATF", "DevOps Integration"],
  },
  {
    icon: FiActivity,
    title: "Observability & AIOps",
    skills: ["Splunk", "Grafana", "Event Correlation", "Alert Integration", "Incident Automation", "Log Monitoring", "AIOps (Event Intelligence)"],
  },
  {
    icon: FiPieChart,
    title: "Data, Reporting & Performance Analytics",
    skills: ["SQL", "Performance Analytics", "Reporting & Dashboards", "KPI Tracking", "Data Modeling", "Data Integrity", "Operational Metrics"],
  },
  {
    icon: FiShield,
    title: "Security, Governance & Compliance",
    skills: ["ACLs", "Role-Based Access Control (RBAC)", "Edge Encryption", "Data Policies", "Platform Security", "Identity Integration", "HIPAA", "SOX", "FDA/GxP"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
