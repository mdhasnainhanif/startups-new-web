"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import Button from "../Button";
import styles from "./RoiCalculator.module.css";
import {
  COUNTRIES,
  ROLES,
  EXPERIENCE_LEVELS,
  ADDITIONAL_COSTS,
  Country,
  Role,
  ExperienceLevel,
  AdditionalCost,
  TeamMember,
} from "../../data/RoiCalculatorData";
import { AUFlagIcon, DownloadIcon, PakistanFlagIcon, UKFlagIcon, USFlagIcon } from "@/app/icons";

interface RoiCalculatorProps {
  className?: string;
}

const RoiCalculator = ({ className = "" }: RoiCalculatorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[2]); // Australia by default
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      roleId: "devops",
      experienceId: "mid",
      quantity: 1,
    },
  ]);
  const [additionalCostsEnabled, setAdditionalCostsEnabled] = useState<Record<string, boolean>>({});
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(openDropdowns).forEach((key) => {
        if (
          dropdownRefs.current[key] &&
          !dropdownRefs.current[key]?.contains(event.target as Node)
        ) {
          setOpenDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    if (Object.values(openDropdowns).some((isOpen) => isOpen)) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdowns]);

  // Calculate costs
  const calculateCosts = () => {
    let totalPakistanMonthly = 0;
    let totalComparisonMonthly = 0;

    teamMembers.forEach((member) => {
      const role = ROLES.find((r) => r.id === member.roleId);
      const experience = EXPERIENCE_LEVELS.find((e) => e.id === member.experienceId);

      if (role && experience) {
        const pakistanSalary = role.baseSalaryPakistan * experience.multiplier;
        const comparisonSalary = pakistanSalary * selectedCountry.salaryMultiplier;

        totalPakistanMonthly += pakistanSalary * member.quantity;
        totalComparisonMonthly += comparisonSalary * member.quantity;
      }
    });

    // Add additional costs
    let additionalCostsPercentage = 0;
    Object.keys(additionalCostsEnabled).forEach((costId) => {
      if (additionalCostsEnabled[costId]) {
        const cost = ADDITIONAL_COSTS.find((c) => c.id === costId);
        if (cost) {
          additionalCostsPercentage += cost.percentage;
        }
      }
    });

    const pakistanWithAdditional = totalPakistanMonthly * (1 + additionalCostsPercentage / 100);
    const comparisonWithAdditional = totalComparisonMonthly * (1 + additionalCostsPercentage / 100);

    return {
      pakistanMonthly: pakistanWithAdditional,
      comparisonMonthly: comparisonWithAdditional,
      pakistanAnnual: pakistanWithAdditional * 12,
      comparisonAnnual: comparisonWithAdditional * 12,
      savings: comparisonWithAdditional * 12 - pakistanWithAdditional * 12,
      reductionPercentage: ((comparisonWithAdditional - pakistanWithAdditional) / comparisonWithAdditional) * 100,
    };
  };

  const costs = calculateCosts();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      roleId: "",
      experienceId: "",
      quantity: 1,
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((m) => m.id !== id));
  };

  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers(
      teamMembers.map((m) => (m.id === id ? { ...m, ...updates } : m))
    );
  };

  const toggleAdditionalCost = (costId: string) => {
    setAdditionalCostsEnabled((prev) => ({
      ...prev,
      [costId]: !prev[costId],
    }));
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getRoleName = (roleId: string) => {
    return ROLES.find((r) => r.id === roleId)?.name || "Select Role";
  };

  const getExperienceName = (experienceId: string) => {
    return EXPERIENCE_LEVELS.find((e) => e.id === experienceId)?.name || "Select Experience";
  };

  const getMemberSalary = (member: TeamMember) => {
    const role = ROLES.find((r) => r.id === member.roleId);
    const experience = EXPERIENCE_LEVELS.find((e) => e.id === member.experienceId);
    if (role && experience) {
      const pakistanSalary = role.baseSalaryPakistan * experience.multiplier;
      const comparisonSalary = pakistanSalary * selectedCountry.salaryMultiplier;
      return { pakistan: pakistanSalary, comparison: comparisonSalary };
    }
    return { pakistan: 0, comparison: 0 };
  };

  return (
    <section className={`sectionPadding ${styles.section} ${className}`} id="calculator">
      <Container maxWidth="xl">
        {/* Choose Comparison Country Section */}
        <div className={styles.countrySection}>
          <h2 className={styles.sectionTitle}>Choose Comparison Country</h2>
          <p className={styles.sectionDescription}>
            Choose the country you wish to compare with.
          </p>
          <div className={styles.countryButtons}>
            {COUNTRIES.map((country) => (
              <button
                key={country.id}
                className={`${styles.countryButton} ${
                  selectedCountry.id === country.id ? styles.countryButtonActive : ""
                }`}
                onClick={() => setSelectedCountry(country)}
              >
                <span className={styles.countryFlag}>
                  {country.code === "US" ? (
                    <USFlagIcon />
                  ) : country.code === "UK" ? (
                    <UKFlagIcon />
                  ) : (
                    <AUFlagIcon />
                  )}
                </span>
                {country.name}
              </button>
            ))}
          </div>
        </div>

        {/* Benefits & Additional Costs Section */}
        <div className={styles.inputSection}>
          <div className={styles.inputGrid}>
            {/* Left Column - Team Members */}
            <div className={styles.teamMembersColumn}>
              <div className={styles.teamMembersHeader}>
                <h3 className={styles.teamMembersTitle}>Benefits & Additional Costs</h3>
                <Button 
                  variant="green" 
                  onClick={addTeamMember}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                >
                  Add Team Members
                </Button>
              </div>
              <div className={styles.teamMembersScrollContainer}>
                {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamMemberCard}>
                  <div className={styles.teamMemberHeader}>
                    <h3 className={styles.teamMemberTitle}>Team Member</h3>
                    {teamMembers.length > 1 && (
                      <button
                        className={styles.deleteButton}
                        onClick={() => removeTeamMember(member.id)}
                        aria-label="Delete team member"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Role Dropdown */}
                  <div
                    className={styles.dropdownWrapper}
                    ref={(el) => {
                      dropdownRefs.current[`role-${member.id}`] = el;
                    }}
                  >
                    <div
                      className={styles.dropdown}
                      onClick={() => toggleDropdown(`role-${member.id}`)}
                    >
                      <span className={styles.dropdownValue}>
                        {getRoleName(member.roleId)}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${styles.chevron} ${
                          openDropdowns[`role-${member.id}`] ? styles.chevronOpen : ""
                        }`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {openDropdowns[`role-${member.id}`] && (
                      <div className={styles.dropdownMenu}>
                        {ROLES.map((role) => (
                          <div
                            key={role.id}
                            className={`${styles.dropdownOption} ${
                              member.roleId === role.id ? styles.dropdownOptionActive : ""
                            }`}
                            onClick={() => {
                              updateTeamMember(member.id, { roleId: role.id });
                              toggleDropdown(`role-${member.id}`);
                            }}
                          >
                            {role.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Experience Dropdown */}
                  <div
                    className={styles.dropdownWrapper}
                    ref={(el) => {
                      dropdownRefs.current[`exp-${member.id}`] = el;
                    }}
                  >
                    <div
                      className={styles.dropdown}
                      onClick={() => toggleDropdown(`exp-${member.id}`)}
                    >
                      <span className={styles.dropdownValue}>
                        {getExperienceName(member.experienceId)}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${styles.chevron} ${
                          openDropdowns[`exp-${member.id}`] ? styles.chevronOpen : ""
                        }`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {openDropdowns[`exp-${member.id}`] && (
                      <div className={styles.dropdownMenu}>
                        {EXPERIENCE_LEVELS.map((exp) => (
                          <div
                            key={exp.id}
                            className={`${styles.dropdownOption} ${
                              member.experienceId === exp.id ? styles.dropdownOptionActive : ""
                            }`}
                            onClick={() => {
                              updateTeamMember(member.id, { experienceId: exp.id });
                              toggleDropdown(`exp-${member.id}`);
                            }}
                          >
                            {exp.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Salary Display */}
                  {member.roleId && member.experienceId && (
                    <div className={styles.salaryDisplay}>
                      <div className={styles.salaryRow}>
                        <span className={styles.salaryLabel}>Pakistan Salary</span>
                        <span className={styles.salaryValue}>
                          {formatCurrency(getMemberSalary(member).pakistan)}
                          <span className={styles.savingsIndicator}>↓ 75%</span>
                        </span>
                      </div>
                      <div className={styles.salaryRow}>
                        <span className={styles.salaryLabel}>{selectedCountry.name}</span>
                        <span className={styles.salaryValue}>
                          {formatCurrency(getMemberSalary(member).comparison)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Quantity Controls */}
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateTeamMember(member.id, {
                          quantity: Math.max(1, member.quantity - 1),
                        })
                      }
                    >
                      −
                    </button>
                    <span className={styles.quantityValue}>{member.quantity}</span>
                    <button
                      className={styles.quantityButton}
                      onClick={() =>
                        updateTeamMember(member.id, { quantity: member.quantity + 1 })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Right Column - Additional Costs */}
            <div className={styles.additionalCostsColumn}>
              <h3 className={styles.additionalCostsTitle}>Additional Costs/Benefits</h3>
              <div className={styles.additionalCostsList}>
                {ADDITIONAL_COSTS.map((cost) => (
                  <div key={cost.id} className={styles.additionalCostItem}>
                    <div className={styles.toggleWrapper}>
                      <label className={styles.toggleLabel}>
                        <input
                          type="checkbox"
                          checked={additionalCostsEnabled[cost.id] || false}
                          onChange={() => toggleAdditionalCost(cost.id)}
                          className={styles.toggleInput}
                        />
                        <span className={styles.toggleSlider}></span>
                      </label>
                      <div className={styles.costInfo}>
                        <span className={styles.costName}>{cost.name}</span>
                        <span className={styles.costDescription}>{cost.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cost Savings Analysis Section */}
        <div className={styles.savingsSection}>
          <div className={styles.savingsGrid}>
            <div className={styles.savingsMain}>
              <h2 className={styles.savingsTitle}>Your Cost Savings Analysis</h2>
              <p className={styles.savingsDescription}>
                Progressive design utilities can propel your enterprise. Progressive design utilities.
              </p>
              <div className={styles.savingsMetrics}>
                <div className={styles.savingsValue}>
                  <span className={styles.savingsAmount}>{formatCurrency(costs.savings)}</span>
                  <span className={styles.savingsLabel}>Annual Savings</span>
                </div>
                <div className={styles.savingsValue}>
                  <span className={styles.savingsAmount}>{Math.round(costs.reductionPercentage)}%</span>
                  <span className={styles.savingsLabel}>Cost Reduction</span>
                </div>
              </div>
              <div className={styles.savingsActions}>
                <Button 
                  variant="green" 
                  className={`${styles.actionButton} flex items-center justify-center`}
                  icon={<DownloadIcon />}
                >
                  Download Report
                </Button>
                <Button 
                  variant="primary" 
                  className={`${styles.actionButton} flex items-center justify-center`}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  iconPosition="right"
                >
                  Get Started with Pakistan Hiring
                </Button>
              </div>
            </div>
            <div className={styles.savingsCards}>
              <div className={styles.savingsCard}>
                <div className={styles.cardFlag}>
                  <PakistanFlagIcon />
                </div>
                <span className={styles.cardLabel}>Total Annual Cost in Pakistan</span>
                <div className={styles.cardValueWrapper}>
                  <span className={styles.cardValue}>{formatCurrency(costs.pakistanAnnual)}</span>
                  <span className={styles.savingsBadge}>↓ {Math.round(costs.reductionPercentage)}%</span>
                </div>
              </div>
              <div className={styles.savingsCard}>
                <div className={styles.cardFlag}>
                  {selectedCountry.code === "US" ? (
                    <USFlagIcon />
                  ) : selectedCountry.code === "UK" ? (
                    <UKFlagIcon />
                  ) : (
                    <AUFlagIcon />
                  )}
                </div>
                <span className={styles.cardLabel}>
                  Total Annual Cost in {selectedCountry.name}
                </span>
                <span className={styles.cardValue}>{formatCurrency(costs.comparisonAnnual)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparative Analysis Section */}
        <div className={styles.comparativeSection}>
          <h2 className={styles.sectionTitle}>Your Custom Comparative Analysis</h2>
          <p className={styles.sectionDescription}>
            Discover massive cost savings when hiring world-class tech talent in Pakistan.
          </p>
          <div className={styles.comparativeGrid}>
            <div className={styles.comparativeCard}>
              <h3 className={styles.comparativeCardTitle}>{selectedCountry.name}</h3>
              <div className={styles.comparativeCardValue}>
                {formatCurrency(costs.comparisonMonthly)}/month
              </div>
              <div className={styles.comparativeCardAnnual}>
                Total Annual Cost: {formatCurrency(costs.comparisonAnnual)}
              </div>
              <div className={styles.comparativeCardList}>
                {teamMembers
                  .filter((m) => m.roleId && m.experienceId)
                  .map((member) => {
                    const role = ROLES.find((r) => r.id === member.roleId);
                    const experience = EXPERIENCE_LEVELS.find((e) => e.id === member.experienceId);
                    const salary = getMemberSalary(member);
                    return (
                      <div key={member.id} className={styles.comparativeCardItem}>
                        ✔ {role?.name} ({experience?.name.split(" ")[0]}) x{member.quantity}{" "}
                        {formatCurrency(salary.comparison)}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.comparativeCard}>
              <h3 className={styles.comparativeCardTitle}>Pakistan</h3>
              <div className={styles.comparativeCardValue}>
                {formatCurrency(costs.pakistanMonthly)}/month
              </div>
              <div className={styles.comparativeCardAnnual}>
                Total Annual Cost: {formatCurrency(costs.pakistanAnnual)}{" "}
                <span className={styles.savingsIndicator}>
                  ↓ {Math.round(costs.reductionPercentage)}%
                </span>
              </div>
              <div className={styles.comparativeCardList}>
                {teamMembers
                  .filter((m) => m.roleId && m.experienceId)
                  .map((member) => {
                    const role = ROLES.find((r) => r.id === member.roleId);
                    const experience = EXPERIENCE_LEVELS.find((e) => e.id === member.experienceId);
                    const salary = getMemberSalary(member);
                    return (
                      <div key={member.id} className={styles.comparativeCardItem}>
                        ✔ {role?.name} ({experience?.name.split(" ")[0]}) x{member.quantity}{" "}
                        {formatCurrency(salary.pakistan)}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoiCalculator;

