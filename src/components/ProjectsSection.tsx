import { motion } from "framer-motion";
import { FiLayers, FiCloud, FiUsers, FiCpu, FiExternalLink, FiZap, FiShield, FiBriefcase } from "react-icons/fi";

const projects = [
  {
    icon: FiLayers,
    title: "Enterprise ITSM & ITOM Transformation Platform",
    description: "Built a ServiceNow ITSM and ITOM platform using Incident, Change, CMDB, Service Mapping, and CSDM, improving service dependency visibility by 30%.",
    tags: ["ITSM", "ITOM", "CMDB", "Service Mapping", "CSDM 4.0", "IRE"],
    highlights: [
      "Structured CMDB using Discovery, IRE rules, and data normalization across hybrid environments managing 10K+ CIs, improving data accuracy and reducing investigation effort.",
      "Enabled event-driven operations by integrating monitoring tools with Event Management and event correlation, reducing alert noise and improving incident response time."
    ],
    image: "/projects/itsm_transformation.png",
  },
  {
    icon: FiCpu,
    title: "AI-Driven Service Desk Automation",
    description: "Implemented Now Assist and Predictive Intelligence within ServiceNow Platform to automate ticket summarization and categorization, improving ticket handling efficiency by 20%.",
    tags: ["Now Assist", "GenAI", "Predictive Intelligence", "Virtual Agent", "NLU", "Flow Designer"],
    highlights: [
      "Built Virtual Agent workflows with NLU and Knowledge Base integration, enabling self-service resolution for common requests and reducing ticket volume for L1 support teams.",
      "Designed classification and routing logic using Flow Designer and assignment rules, improving ticket routing accuracy and reducing reassignment across support groups."
    ],
    image: "/projects/ai_automation.png",
  },
  {
    icon: FiUsers,
    title: "Full Stack Employee Service Portal",
    description: "Developed a ServiceNow employee portal using AngularJS, HTML5, and Service Portal framework, improving user access to IT and HR services.",
    tags: ["AngularJS", "HTML5", "Service Portal", "JavaScript", "Glide API", "REST APIs"],
    highlights: [
      "Built reusable widgets and UI components using JavaScript and Glide API, enabling role-based personalization and improving user experience across multiple service categories.",
      "Integrated Service Catalog workflows and REST APIs to automate request submission and fulfillment, reducing manual processing effort and improving turnaround time."
    ],
    image: "/projects/employee_portal.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-xl card-3d-content">
                  <project.icon className="text-accent-foreground" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 card-3d-content">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <FiExternalLink className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </div>
                <p className="text-muted-foreground font-body text-base mb-6 leading-relaxed">{project.description}</p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm font-heading font-semibold text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs font-heading font-bold rounded-xl bg-accent/5 text-accent border border-accent/10 hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
