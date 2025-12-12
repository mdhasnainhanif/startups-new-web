import React from "react";
import styles from "./AiAgentIndustry.module.css";
import Container from "../../Container";

const AiAgentIndustry = () => {
  const industryAgents = [
    {
      bgClass: "agent-bg-yellow",
      icon: "fas fa-headset",
      title: "Customer Support Agent",
      status: "Online",
      chatStatus: "Connected to AI Agent",
      messages: [
        {
          type: "ai",
          avatar: "S",
          name: "Sophie",
          text: "Hi! I'm here to assist you. Please tell me what went wrong so I can help.",
          time: "02:00 PM",
        },
        {
          type: "user",
          text: "Your delivery team arrived late and damaged the package. I'm quite upset.",
          time: "02:10 PM",
        },
      ],
      cardTitle: "Healthcare AI Agent",
      features: [
        "Manages patient inquiries and appointment scheduling.",
        "Provides instant medical info from approved knowledge bases.",
        "Reduces staff workload while improving patient experience.",
      ],
    },
    {
      bgClass: "agent-bg-green",
      icon: "fas fa-phone",
      title: "Call Log Assistant",
      status: "Online",
      chatStatus: "Connected to AI Agent",
      messages: [
        {
          type: "ai",
          avatar: "A",
          name: "Amelia",
          text: "Hi! Just checking in — would you like a summary of your last support call?",
          time: "05:15 PM",
        },
        {
          type: "user",
          text: "Yes please. I need a proper and complete copy of the conversation for my personal records.",
          time: "05:16 PM",
        },
      ],
      cardTitle: "Customer Service AI Agent",
      features: [
        "Resolves FAQs instantly across multiple channels.",
        "Escalates complex issues with full context.",
        "Reduces ticket volume and boosts satisfaction.",
      ],
    },
    {
      bgClass: "agent-bg-yellow",
      icon: "fas fa-comments",
      title: "Feedback Facilitator",
      status: "Online",
      chatStatus: "Connected to AI Agent",
      messages: [
        {
          type: "ai",
          avatar: "A",
          name: "Ava",
          text: "Thanks for reaching out earlier. Were you satisfied with the support you received?",
          time: "10:39 PM",
        },
        {
          type: "user",
          text: "Yes, the issue was resolved quickly. Great support team!",
          time: "10:10 PM",
        },
      ],
      cardTitle: "AI Agent for Education",
      features: [
        "Answers student questions and provides learning resources.",
        "Assists with scheduling and exam reminders.",
        "Supports teachers with grading and feedback automation.",
      ],
    },
  ];

  return (
    <section id="ai-industry" className={styles.aiIndustrySection}>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl">
            <div className="sectionHeading forH2 text-center flex flex-col mb-12 md:mb-8 max-w-3xl mx-auto">
              <h2 plerdy-tracking-id="10073136301">
                AI Agents Built for{" "}
                <span style={{ color: "var(--color-primary)" }}>
                  Every Business Need
                </span>
              </h2>
              <p>
                Our agents don't just reply, they adapt to your industry and
                workflow. Whether in healthcare, customer service, or education,
                our AI agents integrate seamlessly into your operations to deliver
                speed, scale, and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-stretch">
          {industryAgents.map((agent, index) => (
            <div key={index} className={styles.industryAgentCard}>
              <div
                className={`${styles.agentVisualWrapper} ${styles[agent.bgClass]}`}
              >
                <div className={styles.agentPhoneMockup}>
                  <div className={styles.agentPhoneScreen}>
                    <div className={styles.agentPhoneHeader}>
                      <div className={styles.agentPhoneTitle}>
                        <i className={agent.icon}></i>
                        <span>{agent.title}</span>
                      </div>
                      <div className={styles.agentStatus}>{agent.status}</div>
                    </div>
                    <div className={styles.agentPhoneChat}>
                      <div className={styles.agentChatStatus}>
                        {agent.chatStatus}
                      </div>
                      {agent.messages.map((msg, msgIndex) => (
                        <div
                          key={msgIndex}
                          className={`${styles.agentMessage} ${
                            msg.type === "ai"
                              ? styles.agentAiMsg
                              : styles.agentUserMsg
                          }`}
                        >
                          {msg.type === "ai" && (
                            <div className={styles.agentMsgAvatar}>
                              {msg.avatar}
                            </div>
                          )}
                          <div className={styles.agentMsgContent}>
                            {msg.type === "ai" && (
                              <div className={styles.agentMsgName}>{msg.name}</div>
                            )}
                            <div className={styles.agentMsgText}>{msg.text}</div>
                            {msg.time && (
                              <div className={styles.agentMsgTime}>{msg.time}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.agentContent}>
                <h4 className={styles.agentCardTitle}>{agent.cardTitle}</h4>
                <ul className={styles.agentFeatures}>
                  {agent.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="fas fa-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AiAgentIndustry;

