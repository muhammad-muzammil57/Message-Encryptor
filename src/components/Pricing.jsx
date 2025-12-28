export default function Pricing() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Encrypt & decrypt messages",
        "Unlimited usage",
        "Local browser processing",
        "Basic password security",
        "No sign-up required",
      ],
      highlighted: false,
    },
    {
      title: "Pro",
      price: "$6",
      period: "/month",
      features: [
        "Everything in Free",
        "Stronger encryption algorithms",
        "Priority support",
        "Password strength validator",
        "Export encrypted files",
      ],
      highlighted: true,
    },
    {
      title: "Business",
      price: "$19",
      period: "/month",
      features: [
        "Everything in Pro",
        "Team sharing workspace",
        "Custom encryption keys",
        "Usage analytics",
        "API access",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gray-50 dark:bg-gray-900 py-24 px-6 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Pricing Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose a plan that fits your security needs. Upgrade anytime as your
          requirements grow.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-sm border transition-all ${
              plan.highlighted
                ? "bg-gradient-to-b from-indigo-600 to-indigo-500 text-white dark:from-indigo-500 dark:to-indigo-400 border-transparent scale-[1.02]"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            }`}
          >
            <h3
              className={`text-2xl font-semibold ${
                plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              {plan.title}
            </h3>

            <p className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span
                className={`text-lg ${
                  plan.highlighted
                    ? "text-white/80"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {plan.period}
              </span>
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, fIndex) => (
                <li
                  key={fIndex}
                  className={`${
                    plan.highlighted
                      ? "text-white/90"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  • {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all ${
                plan.highlighted
                  ? "bg-white text-indigo-600 hover:bg-gray-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
              }`}
            >
              {plan.highlighted ? "Upgrade to Pro" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
