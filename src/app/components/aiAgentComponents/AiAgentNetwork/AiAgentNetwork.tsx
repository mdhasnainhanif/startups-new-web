import React from "react";
import styles from "./AiAgentNetwork.module.css";
import Container from "../../Container";

const AiAgentNetwork = () => {
  return (
    <section id="ai-network" className={`${styles.aiNetworkSection} pb-0`}>
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-3xl">
            <div className="sectionHeading forH2 text-center flex flex-col mb-12 md:mb-8 max-w-2xl mx-auto">
              <h2>
                Autonomous Doesn't Mean
                <span style={{ color: "var(--color-primary)" }}> Isolated </span>
              </h2>
              <p>
                Your AI agents share signals, escalate across channels, and
                optimize workflows together. Think of it as a mesh network of AI,
                tailored to your business.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* Desktop Network Diagram */}
          <div className={`${styles.networkDiagram} hidden md:block`}>
            <div className={styles.networkContainer}>
              {/* Connection Lines - SVG for precise positioning */}
              <svg
                className={styles.networkConnectionsSvg}
                viewBox="0 0 1000 600"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Lines from center to all nodes */}
                <line
                  x1="500"
                  y1="275"
                  x2="160"
                  y2="50"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="50"
                  y2="300"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="230"
                  y2="510"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="840"
                  y2="50"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="950"
                  y2="300"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />
                <line
                  x1="500"
                  y1="275"
                  x2="765"
                  y2="510"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.4"
                />

                {/* Connections between left nodes */}
                <line
                  x1="160"
                  y1="50"
                  x2="50"
                  y2="300"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="50"
                  y1="300"
                  x2="230"
                  y2="510"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />

                {/* Connections between right nodes */}
                <line
                  x1="840"
                  y1="50"
                  x2="950"
                  y2="300"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
                <line
                  x1="950"
                  y1="300"
                  x2="765"
                  y2="510"
                  stroke="#0fdac2"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  opacity="0.25"
                />
              </svg>

              {/* Left Side Agents */}
              <div className={`${styles.networkNode} ${styles.nodeLeftTop}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderRed}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarPink}`}>
                    <i className="fas fa-user-tie"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Sales Operation AI Agent</div>
              </div>

              <div className={`${styles.networkNode} ${styles.nodeLeftMiddle}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderYellow}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarBlue}`}>
                    <i className="fas fa-headset"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Customer Service AI Agent</div>
              </div>

              <div className={`${styles.networkNode} ${styles.nodeLeftBottom}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderGreen}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarTeal}`}>
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Human Resources AI Agent</div>
              </div>

              {/* Center Node (Human) */}
              <div className={`${styles.networkNode} ${styles.nodeCenter}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderPurple}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarGreen}`}>
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Cameron Brooks</div>
              </div>

              {/* Right Side Agents */}
              <div className={`${styles.networkNode} ${styles.nodeRightTop}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderYellow}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarYellow}`}>
                    <i className="fas fa-heartbeat"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Healthcare AI Agent</div>
              </div>

              <div className={`${styles.networkNode} ${styles.nodeRightMiddle}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderTeal}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarWhite}`}>
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Finance & Banking AI Agent</div>
              </div>

              <div className={`${styles.networkNode} ${styles.nodeRightBottom}`}>
                <div className={`${styles.nodeAvatar} ${styles.avatarBorderRed}`}>
                  <div className={`${styles.avatarInner} ${styles.avatarPink}`}>
                    <i className="fas fa-truck"></i>
                  </div>
                </div>
                <div className={styles.nodeLabel}>Transportation AI Agent</div>
              </div>
            </div>
          </div>

          {/* Mobile Network Diagram (Triangular Layout) */}
          <div className={`${styles.networkDiagramMobile} md:hidden`}>
            <div className={styles.networkContainerMobile}>
              {/* SVG for triangular connections */}
              <svg
                className={styles.networkConnectionsMobile}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Triangle connections */}
                <line
                  x1="50"
                  y1="15"
                  x2="20"
                  y2="85"
                  stroke="#0fdac2"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="50"
                  y1="15"
                  x2="80"
                  y2="85"
                  stroke="#0fdac2"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
                <line
                  x1="20"
                  y1="85"
                  x2="80"
                  y2="85"
                  stroke="#0fdac2"
                  strokeWidth="1"
                  strokeDasharray="4,3"
                  opacity="0.5"
                />
              </svg>

              {/* Top Node - Email Triage AI Agent */}
              <div className={`${styles.networkNodeMobile} ${styles.nodeMobileTop}`}>
                <div className={`${styles.nodeAvatarMobile} ${styles.avatarBorderPinkMobile}`}>
                  <div className={`${styles.avatarInnerMobile} ${styles.avatarPinkMobile}`}>
                    <span>ET</span>
                  </div>
                </div>
                <div className={styles.nodeLabelMobile}>Email Triage AI Agent</div>
              </div>

              {/* Bottom Left Node - Order Management AI Agent */}
              <div className={`${styles.networkNodeMobile} ${styles.nodeMobileBottomLeft}`}>
                <div className={`${styles.nodeAvatarMobile} ${styles.avatarBorderYellowMobile}`}>
                  <div className={`${styles.avatarInnerMobile} ${styles.avatarYellowMobile}`}>
                    <span>OM</span>
                  </div>
                </div>
                <div className={styles.nodeLabelMobile}>Order Management AI Agent</div>
              </div>

              {/* Bottom Right Node - Sales Operation AI Agent */}
              <div className={`${styles.networkNodeMobile} ${styles.nodeMobileBottomRight}`}>
                <div className={`${styles.nodeAvatarMobile} ${styles.avatarBorderPurpleMobile}`}>
                  <div className={`${styles.avatarInnerMobile} ${styles.avatarPurpleMobile}`}>
                    <span>SO</span>
                  </div>
                </div>
                <div className={styles.nodeLabelMobile}>Sales Operation AI Agent</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiAgentNetwork;

