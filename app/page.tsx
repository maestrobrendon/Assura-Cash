"use client"
import HeroSection from "@/components/hero-section"
import PartnersSection from "@/components/partners-section"
import FeaturesSection from "@/components/features-section"
import BenefitsSection from "@/components/benefits-section"
import FeatureCardsSection from "@/components/feature-cards-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <FeatureCardsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
