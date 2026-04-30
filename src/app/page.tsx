"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Jupiter X Solutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars"}}
      title="Elevating Digital Experiences with Jupiter X"
      description="We are your global strategy and experience partner for custom web solutions that drive growth and maximize impact."
      buttons={[
        {
          text: "Explore Services",          href: "#services"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/connecting-dots-background-network-communication-design_53876-160215.jpg",          imageAlt: "tech background blue"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/asian-female-developer-coding-cloud-computing-applications-pc_482257-124536.jpg",          imageAlt: "web design workspace"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139308.jpg",          imageAlt: "futuristic interface elements"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/driver-view-car-interior-hand-steering-wheel-speed-motion_169016-68523.jpg",          imageAlt: "dashboard ui design"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-technology-background-connecting-dots-digital-network-design_53876-160190.jpg",          imageAlt: "digital network connections"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/gradient-pink-diamond-balls-assortment_23-2149824305.jpg",          imageAlt: "abstract 3d geometric shape"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Jupiter X Solutions: Your Growth Partner"
      buttons={[
        {
          text: "Contact Us",          href: "mailto:DylanDeMario@JupiterX.onmicrosoft.com"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          label: "Intelligence",          title: "Brand Intelligence",          items: [
            "Advanced Market Analytics",            "Strategic Competitor Analysis",            "Brand Positioning"],
        },
        {
          id: "f2",          label: "Product",          title: "Product Elevation",          items: [
            "UX/UI Design Excellence",            "Full Stack Development",            "Omnichannel Experiences"],
        },
        {
          id: "f3",          label: "Growth",          title: "Media & Growth",          items: [
            "Digital Marketing Strategy",            "Creative Advertising",            "Impactful Scaling Campaigns"],
        },
      ]}
      title="Core Capabilities"
      description="Transforming ideas into impactful digital products through expert strategy and design."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",          price: "$750",          name: "Standard Web Build",          buttons: [
            {
              text: "Get Started",              href: "mailto:DylanDeMario@JupiterX.onmicrosoft.com"},
          ],
          features: [
            "Responsive Landing Page",            "Performance Optimization",            "SEO Foundations",            "Ongoing Support Included"],
        },
        {
          id: "p2",          price: "$250 - $500/mo",          name: "Growth Retainer",          buttons: [
            {
              text: "Start Retainer",              href: "mailto:DylanDeMario@JupiterX.onmicrosoft.com"},
          ],
          features: [
            "Full Website Management",            "Custom Feature Dev",            "Strategy Consulting",            "Priority 24/7 Support"],
        },
        {
          id: "p3",          price: "+ $499",          name: "E-Commerce Add-on",          buttons: [
            {
              text: "Add On",              href: "mailto:DylanDeMario@JupiterX.onmicrosoft.com"},
          ],
          features: [
            "Shopify or Custom Cart",            "Payment Integration",            "Inventory Management Setup"],
        },
      ]}
      title="Transparent Pricing"
      description="Simple, impactful pricing for your digital success."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "@partner",          testimonial: "Jupiter X solutions provided the innovation we needed. Highly professional and seamless delivery.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg"},
        {
          id: "2",          name: "Michael K.",          handle: "@cto",          testimonial: "Extremely well-structured process. The team really understood our complex technical needs.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg"},
        {
          id: "3",          name: "Emily R.",          handle: "@marketing",          testimonial: "Our growth has tripled since the redesign. The strategy was flawless.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5353.jpg"},
        {
          id: "4",          name: "David L.",          handle: "@product",          testimonial: "Professional, creative, and fast. The communication throughout was excellent.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg"},
        {
          id: "5",          name: "Alex T.",          handle: "@ceo",          testimonial: "Their insight into digital growth is unparalleled. A true partner for our scaling journey.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/startup-worker-uses-laptop-open-space-reviewing-project-data-documents-workstation-executive-assistant-working-marketing-strategy-business-development-ai-developer_482257-65810.jpg"},
      ]}
      showRating={true}
      title="Partner Experiences"
      description="See why our partners choose Jupiter X Solutions."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "100+",          description: "Successful Projects"},
        {
          id: "m2",          value: "20%",          description: "Avg Growth Increase"},
        {
          id: "m3",          value: "24/7",          description: "Support Availability"},
      ]}
      title="Impact Delivered"
      description="Proven results for partners across industries."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to unlock growth?"
      description="Email us at DylanDeMario@JupiterX.onmicrosoft.com or fill out the form."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project"}}
      imageSrc="http://img.b2bpic.net/free-photo/group-social-media-team-working-modern-office_23-2147847490.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Jupiter X Solutions"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Contact",        href: "mailto:DylanDeMario@JupiterX.onmicrosoft.com"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
