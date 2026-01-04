import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "499",
    description: "Perfect for getting started",
    popular: false,
    features: [
      "2 sessions per week",
      "Custom training program",
      "Nutrition guidance",
      "Progress tracking",
      "Email support",
    ],
    stripeLink: "https://buy.stripe.com/your-standard-plan-link",
  },
  {
    name: "Premium",
    price: "899",
    description: "Our most popular choice",
    popular: true,
    features: [
      "4 sessions per week",
      "Advanced programming",
      "Personalized nutrition plan",
      "Real-time performance analytics",
      "Priority support",
      "Monthly body composition analysis",
    ],
    stripeLink: "https://buy.stripe.com/your-premium-plan-link",
  },
  {
    name: "Unlimited",
    price: "1,499",
    description: "For elite performers",
    popular: false,
    features: [
      "Unlimited sessions",
      "1-on-1 dedicated coaching",
      "Custom supplement protocol",
      "24/7 support access",
      "Weekly check-ins",
      "Recovery optimization",
      "Exclusive member events",
    ],
    stripeLink: "https://buy.stripe.com/your-unlimited-plan-link",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0f] to-[#18181b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-sm tracking-wider">
            INVESTMENT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Choose Your Path
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Select the plan that aligns with your commitment to excellence
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? "lg:scale-105 lg:-translate-y-2" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] text-[#0a0a0f] text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-2 border-[#00d4ff]/40 shadow-[0_0_80px_rgba(0,212,255,0.15)]"
                    : "bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl text-white">{plan.name}</h3>
                    <p className="text-sm text-white/50">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl text-white tracking-tight">${plan.price}</span>
                    <span className="text-white/50">/month</span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={plan.stripeLink}
                    className={`block w-full py-4 px-6 rounded-lg text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#00d4ff] text-[#0a0a0f] hover:bg-[#00ff88] hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]"
                        : "bg-white/5 text-white border border-white/20 hover:bg-white/10"
                    }`}
                  >
                    Join Now
                  </a>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.popular
                              ? "bg-[#00d4ff]/20 border border-[#00d4ff]/40"
                              : "bg-white/5 border border-white/20"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.popular ? "text-[#00d4ff]" : "text-white/70"
                            }`}
                          />
                        </div>
                        <span className="text-white/70 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/40 text-sm mt-12">
          All plans include a 7-day satisfaction guarantee. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
