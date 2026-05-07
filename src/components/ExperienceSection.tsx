import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "ServiceNow Developer",
    company: "FTI Consulting",
    location: "Dallas, TX",
    period: "Feb 2024 - Present",
    highlights: [
      "Designed enterprise ITOM architecture using Service Mapping, Event Management, and CSDM 4.0 across client environments including healthcare systems, improving service visibility by 30%",
      "Led AI-driven service transformation using Now Assist, Predictive Intelligence, and Virtual Agent (NLU) across client service desks, improving ticket resolution efficiency by 20%",
      "Architected integrations using Integration Hub, MID Servers, and Scripted REST APIs to support high-volume data exchange across enterprise systems including EHR platforms and HL7/FHIR interfaces",
      "Established event correlation workflows by integrating Splunk with ServiceNow Event Management, reducing mean time to detect incidents by 25%",
      "Implemented CMDB governance using IRE rules, Service Graph Connectors, and data normalization, increasing CI data accuracy by 30%",
      "Directed secure identity integrations using OAuth, SAML, and Active Directory aligned with enterprise and HIPAA compliance requirements",
      "Delivered Performance Analytics dashboards to track SLA adherence and operational KPIs, enabling leadership to identify bottlenecks",
      "Oversaw platform upgrades and release validation using ATF and controlled deployment pipelines, reducing production defects",
    ],
  },
  {
    title: "ServiceNow Developer",
    company: "Infionics Inc",
    location: "Chennai, India",
    period: "Dec 2020 - Jul 2022",
    highlights: [
      "Developed scalable ServiceNow applications using Script Includes, Glide API, and server-side JavaScript to automate Incident and Change workflows, reducing manual validation effort by 25%",
      "Engineered secure REST and SOAP integrations using OAuth 2.0 to connect ServiceNow with core banking platforms, reducing manual reconciliation effort by 40%",
      "Implemented proactive monitoring pipelines by integrating Splunk and Grafana alerts with incident workflows, reducing production incidents by 20%",
      "Built automated deployment workflows using Update Sets and structured CI/CD practices, reducing deployment time by 35%",
      "Strengthened platform security by implementing ACLs and RBAC controls across HR and payroll modules, reducing unauthorized access risks",
      "Optimized CMDB data ingestion by troubleshooting Transform Maps and stabilizing MID Server communication, improving data reliability",
      "Collaborated with operations teams to enhance request processing using UI Policies and validation logic, reducing input errors by 20%",
      "Delivered production support by performing root cause analysis using platform logs and diagnostics, reducing recurring incidents by 15%",
    ],
  },
  {
    title: "ServiceNow Administrator",
    company: "Infionics Inc",
    location: "Hyderabad, India",
    period: "Apr 2018 - Nov 2020",
    highlights: [
      "Configured ServiceNow ITSM modules including Incident, Problem, and Change Management using Business Rules and Workflows, improving ticket resolution time by 20%",
      "Built Service Catalog request workflows and forms in collaboration with service teams, reducing manual ticket routing by 25%",
      "Developed client-side functionality using Client Scripts and UI Policies to control form behavior, reducing data entry errors by 15%",
      "Executed platform upgrade from London to New York release using Update Sets and regression testing, reducing post-upgrade defects by 30%",
      "Established structured release practices by creating deployment checklists and test case documentation, reducing deployment errors by 25%",
      "Improved system performance by analyzing platform diagnostics and resolving workflow inefficiencies, enhancing response time",
      "Supported CMDB data maintenance by validating CI records and assisting with data imports, improving data accuracy",
      "Collaborated with cross-functional teams to implement UI enhancements including notifications and templates, reducing request clarification cycles by 15%",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6">
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={24} />
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-tight">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-sm md:text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-3 text-muted-foreground text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={12} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={12} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shrink-0"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
