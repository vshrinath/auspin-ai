/**
 * Design System Test Page
 * This page demonstrates the custom design tokens and fonts
 */

import { RealityCheckSection } from '@/components/sections/RealityCheckSection';

export default function DesignTestPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-deep-teal text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">AUSPIN Design System Test</h1>
          <p className="text-lg mt-2">Verifying custom design tokens and fonts</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Typography Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">Typography</h2>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-card">
            <div>
              <p className="text-sm text-gray-600 mb-1">Inter Font (Default)</p>
              <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">JetBrains Mono (Metrics)</p>
              <p className="text-2xl font-mono">$2B+ | 95% | 4-week sprints</p>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Deep Teal */}
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Deep Teal (Primary)</h3>
              <div className="space-y-2">
                <div className="bg-deep-teal-900 h-12 rounded flex items-center justify-center text-white text-sm">900</div>
                <div className="bg-deep-teal-800 h-12 rounded flex items-center justify-center text-white text-sm">800</div>
                <div className="bg-deep-teal h-12 rounded flex items-center justify-center text-white text-sm">DEFAULT</div>
                <div className="bg-deep-teal-600 h-12 rounded flex items-center justify-center text-white text-sm">600</div>
                <div className="bg-deep-teal-400 h-12 rounded flex items-center justify-center text-white text-sm">400</div>
              </div>
            </div>

            {/* Gold */}
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Gold (Accent)</h3>
              <div className="space-y-2">
                <div className="bg-gold-900 h-12 rounded flex items-center justify-center text-white text-sm">900</div>
                <div className="bg-gold-700 h-12 rounded flex items-center justify-center text-white text-sm">700</div>
                <div className="bg-gold h-12 rounded flex items-center justify-center text-white text-sm">DEFAULT</div>
                <div className="bg-gold-400 h-12 rounded flex items-center justify-center text-gray-900 text-sm">400</div>
                <div className="bg-gold-200 h-12 rounded flex items-center justify-center text-gray-900 text-sm">200</div>
              </div>
            </div>

            {/* Stone */}
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Stone (Background)</h3>
              <div className="space-y-2">
                <div className="bg-stone-900 h-12 rounded flex items-center justify-center text-white text-sm">900</div>
                <div className="bg-stone-600 h-12 rounded flex items-center justify-center text-white text-sm">600</div>
                <div className="bg-stone-400 h-12 rounded flex items-center justify-center text-white text-sm">400</div>
                <div className="bg-stone-200 h-12 rounded flex items-center justify-center text-gray-900 text-sm">200</div>
                <div className="bg-stone-50 h-12 rounded flex items-center justify-center text-gray-900 text-sm border">50</div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons */}
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Buttons</h3>
              <div className="space-y-4">
                <button className="w-full bg-gold hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors min-h-touch-target">
                  Primary CTA Button
                </button>
                <button className="w-full bg-deep-teal hover:bg-deep-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors min-h-touch-target">
                  Secondary Button
                </button>
                <button className="w-full border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors min-h-touch-target">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-4">Cards</h3>
              <div className="space-y-4">
                <div className="bg-stone-50 p-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow cursor-pointer">
                  <h4 className="font-bold text-deep-teal mb-2">Card with Hover Effect</h4>
                  <p className="text-gray-600">Hover over this card to see the shadow transition</p>
                </div>
                <div className="bg-gradient-to-br from-deep-teal to-deep-teal-700 p-4 rounded-lg text-white">
                  <h4 className="font-bold mb-2">Gradient Card</h4>
                  <p className="text-stone-100">Using deep teal gradient</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card animate-fade-in">
              <h3 className="text-xl font-bold mb-2">Fade In</h3>
              <p className="text-gray-600">This card uses the fade-in animation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card animate-slide-in">
              <h3 className="text-xl font-bold mb-2">Slide In</h3>
              <p className="text-gray-600">This card uses the slide-in animation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card animate-slide-up">
              <h3 className="text-xl font-bold mb-2">Slide Up</h3>
              <p className="text-gray-600">This card uses the slide-up animation</p>
            </div>
          </div>
        </section>

        {/* Focus Indicators */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">Accessibility</h2>
          <div className="bg-white p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-bold mb-4">Focus Indicators (Tab through these)</h3>
            <div className="space-y-4">
              <button className="bg-gold text-white font-semibold py-2 px-4 rounded">
                Button 1
              </button>
              <button className="bg-deep-teal text-white font-semibold py-2 px-4 rounded ml-4">
                Button 2
              </button>
              <a href="#" className="inline-block ml-4 text-deep-teal underline">
                Link Example
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Press Tab to see the gold focus indicators (2px outline with 2px offset)
            </p>
          </div>
        </section>
      </main>

      {/* Reality Check Section Test */}
      <div className="mb-12">
        <div className="container mx-auto px-4 mb-6">
          <h2 className="text-3xl font-bold text-deep-teal">Reality Check Section Component</h2>
          <p className="text-gray-600 mt-2">Testing the RealityCheckSection component with funnel visualization and failure categories</p>
        </div>
        <RealityCheckSection />
      </div>

      {/* Footer */}
      <footer className="bg-deep-teal text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>AUSPIN Design System - Foundation Setup Complete ✓</p>
        </div>
      </footer>
    </div>
  );
}
