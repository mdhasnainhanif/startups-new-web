'use client'
import { useEffect } from 'react'
import styles from './AnalyticsDashboard.module.css'
import { ArrowRightIcon } from '../icons'
import Button from '../Button'
import Image from 'next/image'
interface RadarChartLabel {
  text: string
  x: number
  y: number
}
interface AnalyticsDashboardProps {
  performanceScore?: number
  performanceLabel?: string
  assetType?: string
  purpose?: string
  audience?: string
  headline?: string
  description?: string
  buttonText?: string
  recommendations?: string[]
  middleRecommendations?: string[]
  leftColumnItems?: {
    left: string[]
    right: string[]
  }
  radarChartLabels?: RadarChartLabel[]
}
export default function AnalyticsDashboard({
  performanceScore = 92,
  performanceLabel = 'EXCELLENT',
  assetType = 'Improvement Notes',
  purpose = 'Scale ready teams',
  audience = 'Online businesses',
  headline = 'Launch Your Startup',
  description = 'Get your business off the ground with all help.',
  buttonText = 'Get Started',
  recommendations = ['Improve headline clarity for faster comprehension'],
  middleRecommendations = [
    'Optimize pathways',
    'Minimize friction points',
    'Improve load handling'
  ],
  leftColumnItems = {
    left: ['Exceptional', 'Focus Areas', 'Architecture', 'Performance', 'Behavior patterns', 'Interaction'],
    right: ['Path logic', 'Response', 'Assurance', 'Core Thinking', 'Stability  ', 'Efficiency']
  },
  radarChartLabels = [
    { text: 'Dependability', x: 35, y: 30 },
    { text: 'Function', x: 246, y: 40 },
    { text: 'Innovation', x: 280, y: 160 },
    { text: 'Progress', x: 244, y: 275 },
    { text: 'Service Use', x: 140, y: 310 },
    { text: 'Goal', x: 54, y: 272 },
    { text: 'Audience', x: 0, y: 160 }
  ]
}: AnalyticsDashboardProps) {
  useEffect(() => {
    const scoreElement = document.querySelector('.text-6xl');
    if (scoreElement) {
      scoreElement.classList.add(styles.pulseGlow);
    }
  }, []);
  const maxScore = 100
  const circumference = 1056
  const strokeDashoffset = circumference - (performanceScore / maxScore) * (circumference - 500)
  return (
    <div className="">
      <div className="container mx-auto md:px-4 sm:px-0 lg:px-8 pt-6 sm:pt8 lg:pb-0 lg:pt-12 max-w-7xl">
        <div className="bg-[#110E21] rounded-2xl shadow-2xl border border-[#221f33] pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8 py-10 innerPadding">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-0 lg:gap-0 items-start ${styles.customGrid}`}>
            <div className="lg:col-span-1 space-y-0">
              <div className="bg-[##110E21] rounded-xl duration-300 overflow-visible">
                <div className="flex flex-col items-left justify-left lg:py-4 sm:py-0 sm:pt-[0.5rem] overflow-visible max-w-[20rem]">
                  <div className={`relative mx-auto w-[209px] h-[209px] sm:w-[209px] sm:h-[257px] lg:w-[257px] lg:h-[257px] ${styles.performanceGauge} overflow-visible`}>
                    <svg className="transform -rotate-90 w-full h-full">
                      <defs>
                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="100%" stopColor="#002f3f" />
                          <stop offset="100%" stopColor="#0a0a1a" />
                        </linearGradient>
                      </defs>
                      <circle cx="50%" cy="50%" r="42%" stroke="url(#circleGradient)" strokeWidth="12" fill="none" />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="42%"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="1056"
                        strokeDashoffset={strokeDashoffset}
                        className={`text-[#00ffff] ${styles.circularProgress}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-radial-inner opacity-60 -z-10"></div>
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00ffff] relative z-10">{performanceScore}</div>
                        <div className="text-base sm:text-lg lg:text-xl font-semibold text-[#00ffff] mt-1 sm:mt-2 relative z-10">{performanceLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#110E21] rounded-xl pl-0 pb-4 sm:pb-6">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-y-3">
                  <div className="space-y-2.5 sm:space-y-3">
                    {leftColumnItems.left.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-[#643BFF] shrink-0 ${styles.cyanBulletGlow}`}></div>
                        <span className={`text-sm sm:text-base text-white ${styles.fs2}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5 sm:space-y-3">
                    {leftColumnItems.right.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-[#643BFF] shrink-0 ${styles.cyanBulletGlow}`}></div>
                        <span className={`text-sm sm:text-base text-white ${styles.fs2}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="bg-[##110E21] rounded-xl p-4 sm:p-6 border border-[#0C1426] w-80 duration-300">
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white text-left ${styles.fs3}`}>Recommendations</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`text-sm sm:text-base text-white leading-relaxed text-left ${styles.fs2}`}>{rec}</span>
                  </li>
                ))}
              </ul>
            </div> */}
            </div>
            <div className={`lg:col-span-1 space-y-0 ${styles.middleColumn}`}>
              <div className="rounded-none duration-300">
                <div className="d-block w-full h-full max-w-[24rem] mx-auto mb-[2rem] mt-[2rem] md:mt-0 relative">
                  {/* <svg viewBox="0 0 370 312" className="w-full h-auto max-w-full" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="bgGlow" cx="50%" cy="45%" r="70%">
                      <stop offset="0%" stopColor="#0b1a2f" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#050816" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#050816" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffa500" stopOpacity="1" />
                      <stop offset="15%" stopColor="#ffd36b" stopOpacity="0.9" />
                      <stop offset="30%" stopColor="#ff7ad6" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
                      <stop offset="70%" stopColor="#00f0ff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.2" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <clipPath id="innerWebClip">
                      <polygon points="183.43,92.10 202.66,101.74 207.88,118.35 199.89,140.85 181.84,148.80 162.17,140.20 157.00,118.13 163.53,99.69" />
                    </clipPath>
                  </defs>
                  <rect x="0" y="0" width="370" height="312" fill="#000F21" />
                  <g opacity="0.55" stroke="#7c8599" strokeWidth="1">
                    <line x1="183.3" y1="113.5" x2="183.93" y2="6.69" />
                    <line x1="183.3" y1="113.5" x2="279.95" y2="54.79" />
                    <line x1="183.3" y1="113.5" x2="306.00" y2="137.72" />
                    <line x1="183.3" y1="113.5" x2="266.10" y2="250.02" />
                    <line x1="183.3" y1="113.5" x2="175.99" y2="289.69" />
                    <line x1="183.3" y1="113.5" x2="77.84" y2="246.78" />
                    <line x1="183.3" y1="113.5" x2="52.04" y2="136.60" />
                    <line x1="183.3" y1="113.5" x2="84.65" y2="44.59" />
                  </g>                  
                  <g fill="none" stroke="#7c8599" strokeWidth="1" opacity="0.35">
                    <polygon points="183.93,6.69 279.95,54.79 306.00,137.72 266.10,250.02 175.99,289.69 77.84,246.78 52.04,136.60 84.65,44.59" />
                    <polygon points="183.77,33.90 255.33,69.75 274.74,131.55 245.01,215.24 177.85,244.81 104.71,212.83 85.48,130.72 109.78,62.14" />
                    <polygon points="183.63,56.90 234.52,82.39 248.32,126.33 227.18,185.84 179.43,206.87 127.42,184.13 113.74,125.74 131.02,76.98" />
                    <polygon points="183.52,76.50 216.78,93.16 225.80,121.89 211.98,160.79 180.77,174.53 146.77,159.67 137.83,121.50 149.13,89.63" />
                    <polygon points="183.43,92.10 202.66,101.74 207.88,118.35 199.89,140.85 181.84,148.80 162.17,140.20 157.00,118.13 163.53,99.69" />
                  </g>
                  <line
                    x1="183.93"
                    y1="6.69"
                    x2="183.93"
                    y2="42.00"
                    stroke="#35f3ff"
                    strokeWidth="2.2"
                    opacity="0.95"
                    strokeLinecap="round"
                    filter="url(#softGlow)"
                  />
                  <circle cx="183" cy="134" r="70" filter="blur(24px)" opacity="0.6" fill="#00a0a0" />
                  <circle cx="183" cy="134" r="20" filter="blur(20px)" opacity="1" fill="#FF1493" />
                  <polyline
                    points="
                      122.88,80.46
                      160.05,80.83
                      183.93,42.00
                      207.80,80.83
                      240.20,91.93
                      237.64,136.40
                      231.66,183.82
                      176.58,204.58
                      120.24,188.66
                      117.02,137.42
                      122.88,80.46
                    "
                    fill="none"
                    stroke="#35f3ff"
                    strokeWidth="2.2"
                    opacity="0.9"
                    filter="url(#softGlow)"
                  />
                  <g filter="url(#dotGlow)" fill="#35f3ff">
                    <circle cx="122.88" cy="80.46" r="4.1" />
                    <circle cx="160.05" cy="80.83" r="4.1" />
                    <circle cx="183.93" cy="42.00" r="4.1" />
                    <circle cx="183.93" cy="6.69" r="4.6" />
                    <circle cx="207.80" cy="80.83" r="4.1" />
                    <circle cx="240.20" cy="91.93" r="4.1" />
                    <circle cx="237.64" cy="136.40" r="4.1" />
                    <circle cx="231.66" cy="183.82" r="4.1" />
                    <circle cx="176.58" cy="204.58" r="4.1" />
                    <circle cx="120.24" cy="188.66" r="4.1" />
                    <circle cx="117.02" cy="137.42" r="4.1" />
                  </g>  
                  <g filter="url(#dotGlow)" fill="#6b63ff" opacity="0.95">
                    <circle cx="84.65" cy="44.59" r="4.2" />
                    <circle cx="279.95" cy="54.79" r="4.2" />
                    <circle cx="306.00" cy="137.72" r="4.2" />
                    <circle cx="266.10" cy="250.02" r="4.2" />
                    <circle cx="175.99" cy="289.69" r="4.2" />
                    <circle cx="77.84" cy="246.78" r="4.2" />
                    <circle cx="52.04" cy="136.60" r="4.2" />
                  </g>
                <g fill="#c6cfdd" fontFamily="Inter, ui-sans-serif, system-ui" fontSize="14" opacity="0.9">
                    {radarChartLabels.map((label, index) => (
                      <text key={index} x={label.x} y={label.y}>{label.text}</text>
                    ))}
                  </g>
                </svg> */}
                  <Image src="/assets/images/svgviewer-output.svg" alt="analytics dashboard" loading="lazy" width={370} height={312} className="w-full h-auto max-w-full" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 md:ps-10 text-left flex gap-[3rem] hidden md:flex">
                <div>
                  <span className={`text-[#0FDAC2] text-xs sm:text-sm block mb-1 ${styles.fs1}`}>Asset Type:</span>
                  <p className={`text-white font-medium text-sm sm:text-base ${styles.fs2}`}>{assetType}</p>
                </div>
                <div>
                  <span className={`text-[#0FDAC2] text-xs sm:text-sm block mb-1 ${styles.fs1}`}>Purpose:</span>
                  <p className={`text-white font-medium text-sm sm:text-base ${styles.fs2}`}>{purpose}</p>
                </div>
                {/* <div>
                  <span className={`text-[#0FDAC2] text-xs sm:text-sm block mb-1 ${styles.fs1}`}>Audience:</span>
                  <p className={`text-white font-medium text-sm sm:text-base ${styles.fs2}`}>{audience}</p>
                </div> */}
              </div>
            </div>
            <div className={`lg:col-span-1 space-y-4 sm:space-y-6 md:pl-4 sm:pl-6 lg:pl-8 ${styles.rightSectionContainer}`}>
              <div className="bg-[##110E21] pl0mobile rounded-xl p-4 md:pt-0 sm:p-6 duration-300 mb-0">
                <div className={`bg-[##110E21] pl0mobile rounded-none p-4 sm:p-6 duration-300  ${styles.middleRecommendations}`}>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-white text-left ${styles.fs3}`}>Recommendations</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {middleRecommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-[#00ffff] text-lg sm:text-xl mt-2"><Image src="/assets/images/tick.webp" alt="bulb" loading="lazy" width={20} height={20} /></span>
                        <span className={`text-sm sm:text-base text-white leading-relaxed text-left ${styles.fs2}`}>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className="bg-[##110E21]  md:ml-6  duration-300">
                <div className="bg-[##110E21]">
                  <div className="pt-2">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-left">{headline}</h2>
                      <p className={`text-gray-400 text-xs sm:text-sm ${styles.fs2} mt-[19px] mb-[10px] text-left`}>{description}</p>
                    </div>
                    {<Button
                      className="w-full justify-center items-center flex mt-5"
                      variant="green"
                      icon={<ArrowRightIcon style={{ width: "16px", height: "16px", fill: "#000" }} />}
                      iconPosition="right"
                    >
                      {buttonText}
                    </Button>}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

