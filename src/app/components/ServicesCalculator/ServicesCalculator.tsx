'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Container from '../Container';

const ServicesCalculator: React.FC = () => {
  const [platform, setPlatform] = useState<'base' | 'pro'>('base');
  const [activeTab, setActiveTab] = useState<'tools' | 'services'>('services');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Brand & Identity']);
  const [hours, setHours] = useState<number>(2);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly' | 'annual'>('annual');
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const toolsOptions = [
    'Product & Packaging',
    'Figma',
    'Key Note',
    'Canva',
    'GSlides',
    'Adobe Suite',
    'Power Point',
    '+ File delivery on all tools',
    '+ Licensed tooling',
  ];
  const servicesOptions = [
    'Product & Packaging',
    'Brand & Identity',
    'Motion & Video',
    'Print',
    'Digital & Web',
    'Presentations',
    'Illustration & Artwork',
    'eBooks & Digital Report',
    'Apparel & Merchandise',
    'Environmental & Event',
    'Corporate & Internal',
    'Dedicated CSM',
  ];
  const calculatePrice = useMemo(() => {
    const basePricePerHour = platform === 'base' ? 500 : 700;
    const monthlyPrice = basePricePerHour * hours * 20;
    let monthlyEquivalent = monthlyPrice;
    if (billingPeriod === 'quarterly') {
      monthlyEquivalent = monthlyPrice * 0.9;
    } else if (billingPeriod === 'annual') {
      monthlyEquivalent = monthlyPrice * 0.75;
    }
    return Math.round(monthlyEquivalent);
  }, [platform, hours, billingPeriod]);
  const savings = useMemo(() => {
    if (billingPeriod === 'annual') {
      const baseMonthlyPrice = (platform === 'base' ? 500 : 700) * hours * 20;
      const annualWithoutDiscount = baseMonthlyPrice * 12;
      const annualWithDiscount = calculatePrice * 12;
      return Math.round((annualWithoutDiscount - annualWithDiscount) / 1000);
    }
    return 0;
  }, [platform, hours, billingPeriod, calculatePrice]);
  const handleHoursChange = (delta: number) => {
    setHours((prev) => {
      const newHours = prev + delta;
      if (newHours < 2) return 2;
      if (newHours > 3) return 3;
      return newHours;
    });
  };
  const toggleService = (service: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service);
      }
      return [...prev, service];
    });
  };
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    setShowLeftFade(!isAtStart);
    setShowRightFade(!isAtEnd);
  };
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [activeTab]);

  useEffect(() => {
    // Check scroll position after tab change
    setTimeout(() => {
      checkScrollPosition();
    }, 100);
  }, [activeTab]);
  return (
    <section className="bg-[#050321] py-16 md:py-20 lg:py-[5.25rem] px-4 sm:px-6 lg:px-8">
      <Container maxWidth="xl">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#0fdac2] text-sm md:text-base font-semibold mb-2 tracking-wider">
            NO HIDDEN FEES. NO SURPRISES.
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            YOU DECIDE.
          </h2>
        </div>
        <div className="bg-[#1a1a2e] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Platform</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="platform"
                  value="base"
                  checked={platform === 'base'}
                  onChange={(e) => setPlatform(e.target.value as 'base' | 'pro')}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    platform === 'base'
                      ? 'border-[#0fdac2] bg-[#0fdac2]'
                      : 'border-white bg-transparent'
                  }`}
                >
                  {platform === 'base' && (
                    <span className="w-2 h-2 rounded-full bg-[#050321]"></span>
                  )}
                </span>
                <span className="text-white text-base font-medium">Base</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="platform"
                  value="pro"
                  checked={platform === 'pro'}
                  onChange={(e) => setPlatform(e.target.value as 'base' | 'pro')}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    platform === 'pro'
                      ? 'border-[#0fdac2] bg-[#0fdac2]'
                      : 'border-white bg-transparent'
                  }`}
                >
                  {platform === 'pro' && (
                    <span className="w-2 h-2 rounded-full bg-[#050321]"></span>
                  )}
                </span>
                <span className="text-white text-base font-medium">Pro</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Creative services</h3>
            <div className="flex border-b border-white/10">
              <button
                className={`px-4 py-2 text-sm md:text-base font-medium transition-all relative ${
                  activeTab === 'tools'
                    ? 'text-[#0fdac2] border-b-2 border-[#0fdac2]'
                    : 'text-white/70 hover:text-white/90'
                }`}
                onClick={() => setActiveTab('tools')}
              >
                Tool & Files
              </button>
              <button
                className={`px-4 py-2 text-sm md:text-base font-medium transition-all relative ${
                  activeTab === 'services'
                    ? 'text-[#0fdac2] border-b-2 border-[#0fdac2]'
                    : 'text-white/70 hover:text-white/90'
                }`}
                onClick={() => setActiveTab('services')}
              >
                Services
              </button>
            </div>
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="flex flex-row gap-2 overflow-x-auto -mx-1 px-1 scrollbar-horizontal"
                style={{ paddingBottom: '14px' }}
              >
              {activeTab === 'tools'
                ? toolsOptions.map((option, index) => (
                    <button
                      key={index}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0fdac2]/30 rounded-lg px-3 py-2 text-white text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all"
                    >
                      {option}
                    </button>
                  ))
                : servicesOptions.map((option, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => toggleService(option)}
                        className="rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0fdac2]/30 text-white"
                      >
                        {option}
                      </button>
                    );
                  })}
              </div>
              {showLeftFade && (
                <div 
                  className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, #1a1a2e 0%, #1a1a2e 40%, rgba(26, 26, 46, 0.8) 70%, transparent 100%)'
                  }}
                ></div>
              )}
              {showRightFade && (
                <div 
                  className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to left, #1a1a2e 0%, #1a1a2e 40%, rgba(26, 26, 46, 0.8) 70%, transparent 100%)'
                  }}
                ></div>
              )}
              {/* Line below scrollbar */}
              <div className="absolute bottom-[6px] left-0 right-0 h-px bg-white/10 z-0"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Hours</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Total reserved hours each business day from your dedicated design team.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#0fdac2] rounded-lg text-white text-2xl font-semibold flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handleHoursChange(-1)}
                disabled={hours <= 2}
                aria-label="Decrease hours"
              >
                −
              </button>
              <span className="text-[#0fdac2] text-3xl md:text-4xl lg:text-5xl font-bold min-w-[3rem] text-center">
                {hours}H
              </span>
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#0fdac2] rounded-lg text-white text-2xl font-semibold flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handleHoursChange(1)}
                disabled={hours >= 3}
                aria-label="Increase hours"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 relative md:col-span-2 lg:col-span-1">
            {savings > 0 && (
              <div className="absolute -top-2 right-0 bg-[#ffd700] text-black text-xs font-bold px-3 py-1 rounded">
                {savings}k saved
              </div>
            )}
            <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              ${calculatePrice.toLocaleString()}/mo.
            </div>
            <p className="text-white/70 text-sm font-medium mt-2">SUMMARY</p>
            <div className="flex flex-col gap-2">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg text-left transition-all ${
                  billingPeriod === 'monthly'
                    ? 'border-2 border-white text-white bg-white/5'
                    : 'border border-white/20 text-white/70 hover:text-white/90 hover:border-white/40'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg text-left transition-all relative ${
                  billingPeriod === 'quarterly'
                    ? 'border-2 border-white text-white bg-white/5'
                    : 'border border-white/20 text-white/70 hover:text-white/90 hover:border-white/40'
                }`}
                onClick={() => setBillingPeriod('quarterly')}
              >
                Quarterly
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-lg text-left transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'border-2 border-white text-white bg-white/5 pb-3'
                    : 'border border-white/20 text-white/70 hover:text-white/90 hover:border-white/40'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual
                {billingPeriod === 'annual' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0fdac2] rounded-b-lg"></span>
                )}
              </button>
            </div>
            <button className="bg-[#0fdac2] hover:bg-[#0bc4ae] text-black font-bold text-lg px-6 py-3 rounded-xl transition-all mt-4 hover:shadow-lg hover:shadow-[#0fdac2]/30 hover:-translate-y-0.5">
              Get started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCalculator;

