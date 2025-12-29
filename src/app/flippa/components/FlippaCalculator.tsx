'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Container from '../../components/Container';

const FlippaCalculator: React.FC = () => {
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
    const isAtStart = scrollLeft <= 5;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;
    const hasScroll = scrollWidth > clientWidth;
    
    setShowLeftFade(!isAtStart && hasScroll);
    setShowRightFade(!isAtEnd && hasScroll);
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
    setTimeout(() => {
      checkScrollPosition();
    }, 100);
  }, [activeTab]);
  return (
    <section className="bg-[#050321] sectionPadding">
      <Container maxWidth="xl">
        <div className="bg-[#110f29] border border-[#4e4989] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative items-center flex flex-col md:flex-row gap-6 md:gap-4">
          <div className="flex flex-col gap-4 w-full md:max-w-[15%] h-[100%]">
            <h3 className="text-white text-lg font-semibold">Platform</h3>
            <div className="flex flex-row md:flex-col gap-4">
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
                      ? 'border-[#643BFF] bg-[#643BFF]'
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
                      ? 'border-[#643BFF] bg-[#643BFF]'
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
          <span className='hidden md:block border border-dashed border-white/10 h-[12rem]'></span>
          <div className="flex flex-col gap-4 w-full md:max-w-[25%] h-full">
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
                  className="absolute left-[-10px] top-0 bottom-[14px] w-12 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, #1a1a2e 0%, rgba(26, 26, 46, 0.98) 20%, rgba(26, 26, 46, 0.85) 50%, rgba(26, 26, 46, 0.5) 80%, transparent 100%)'
                  }}
                ></div>
              )}
              {showRightFade && (
                <div 
                  className="absolute right-[-10px] top-0 bottom-[14px] w-12 pointer-events-none z-10 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to left, #1a1a2e 0%, rgba(26, 26, 46, 0.98) 20%, rgba(26, 26, 46, 0.85) 50%, rgba(26, 26, 46, 0.5) 80%, transparent 100%)'
                  }}
                ></div>
              )}
              <div className="absolute bottom-[6px] left-0 right-0 h-px bg-white/10 z-0"></div>
            </div>
          </div>
          <span className='hidden md:block border border-dashed border-white/10 h-[12rem]'></span>
          <div className="flex flex-col gap-4 w-full md:max-w-[50%] min-w-[16rem] h-fill">
            <h3 className="text-white text-lg font-semibold">Hours</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Total reserved hours each business day from your dedicated design team.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#0fdac2] text-3xl md:text-2xl lg:text-3xl font-bold min-w-[3rem] text-left">
                {hours}H
              </span>
              <button
                className="w-10 h-10 text-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#0fdac2] rounded-tl-lg rounded-bl-lg text-white text-2xl font-semibold flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handleHoursChange(-1)}
                disabled={hours <= 2}
                aria-label="Decrease hours"
              >
                −
              </button>
              <button
                className="w-10 h-10 text-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#0fdac2] rounded-tr-lg rounded-br-lg text-white text-2xl font-semibold flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handleHoursChange(1)}
                disabled={hours >= 3}
                aria-label="Increase hours"
              >
                +
              </button>
            </div>
          </div>
          <span className='hidden md:block border border-dashed border-white/10 h-[12rem]'></span>
          <div className="flex flex-col relative w-full md:max-w-[55%] h-full">
            {savings > 0 && (
              <div className="absolute -top-2 right-0 bg-[#0fdac2] text-black text-xs font-bold px-3 py-1 rounded">
                {savings}k saved
              </div>
            )}
            <div className="flex items-baseline gap-2 mt-0 mb-2">
              <span className="text-white text-2xl md:text-xl lg:text-xl font-bold">
                ${calculatePrice.toLocaleString()}
              </span>
              <span className="text-white/60 text-2xl md:text-xl lg:text-xl font-medium">
                /mo
              </span>
            </div>
            <p className="text-white/70 text-xs md:text-sm font-medium mt-0 mb-3 uppercase tracking-wider">SUMMARY</p>
            <div className="flex flex-row gap-2 flex-wrap w-full min-w-[18rem] mt-0 md:mt-[2.5rem]">
              <button
                className={`px-4 py-2 text-sm font-medium transition-all relative bg-transparent text-white ${
                  billingPeriod === 'monthly'
                    ? ''
                    : ''
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
                {billingPeriod === 'monthly' && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0fdac2]"
                  ></span>
                )}
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-all bg-transparent text-white relative ${
                  billingPeriod === 'quarterly'
                    ? ''
                    : ''
                }`}
                onClick={() => setBillingPeriod('quarterly')}
              >
                Quarterly
                {billingPeriod === 'quarterly' && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0fdac2]"
                  ></span>
                )}
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-all bg-transparent text-white relative ${
                  billingPeriod === 'annual'
                    ? ''
                    : ''
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual
                {billingPeriod === 'annual' && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0fdac2]"
                  ></span>
                )}
              </button>
            </div>
          </div>
          <span className='hidden md:block border border-dashed border-white/10 h-[12rem]'></span>
          <div className='flex flex-col gap-4 w-full md:max-w-[20%] min-w-[10rem] h-full'> 
            <button className="bg-[#643BFF] hover:bg-[#0bc4ae] text-white font-bold text-base md:text-lg px-6 py-3 rounded-xl transition-all mt-0 md:mt-4 hover:shadow-lg hover:shadow-[#643BFF]/30 hover:-translate-y-0.5 w-full md:w-auto">
              Get started
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlippaCalculator;

