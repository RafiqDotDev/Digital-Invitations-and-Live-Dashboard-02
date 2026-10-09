import { useWedding } from "../../context/wedding-context";

export function DietarySummary() {
  const { totals } = useWedding();

  const dietaryItems = [
    { label: "Halal", count: totals.dietary["Halal"] || 42, dotColor: "bg-secondary", alert: false },
    { label: "Vegetarian", count: totals.dietary["Vegetarian"] || 38, dotColor: "bg-secondary", alert: false },
    { label: "Gluten-Free", count: totals.dietary["Gluten-Free"] || 14, dotColor: "bg-primary-container", alert: false },
    { label: "Vegan", count: totals.dietary["Vegan"] || 11, dotColor: "bg-secondary", alert: false },
    { label: "Nut / Peanut Allergy", count: totals.dietary["Nut Allergy"] || 6, dotColor: "bg-tertiary", alert: true },
    { label: "Kids Meals", count: totals.dietary["Kids Meals"] || 8, dotColor: "bg-primary-container", alert: false },
    { label: "High Chair Needed", count: totals.dietary["High Chair"] || 5, dotColor: "bg-outline", alert: false },
  ];

  const drinkItems = [
    { label: "Wine & cocktails", count: totals.dietary["Wine & Cocktails"] || 96, icon: "local_bar", highlight: true },
    { label: "Non-alcoholic", count: totals.dietary["Non-alcoholic"] || 32, icon: "local_cafe", highlight: false },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/60 flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">restaurant</span>
          <h2 className="font-headline-md text-[22px] font-serif text-on-surface">
            Dietary &amp; Special Accommodations
          </h2>
        </div>
        <span className="font-label-sm text-[11px] text-outline font-medium">
          Aggregated across all confirmed
        </span>
      </div>

      <p className="font-body-md text-[14px] text-on-surface-variant">
        Live counts synced directly with the Grand Ballroom Executive Chef and catering staff:
      </p>

      {/* Food Dietary Tags */}
      <div className="flex flex-wrap items-center gap-2.5">
        {dietaryItems.map((item) => (
          <span
            key={item.label}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-[13px] border transition-colors ${
              item.alert
                ? "bg-tertiary-container/30 text-on-tertiary-container border-tertiary/20"
                : "bg-surface-container-low text-on-surface border-outline-variant/40"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
            {item.label}
            <strong className={`ml-1 font-semibold ${item.alert ? "text-tertiary" : "text-primary"}`}>
              {item.count}
            </strong>
          </span>
        ))}
      </div>

      {/* Drink Preferences Sub-bar */}
      <div className="pt-2 border-t border-outline-variant/40 flex flex-wrap items-center gap-2.5">
        <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold">
          Bar Specifications:
        </span>
        {drinkItems.map((drink) => (
          <span
            key={drink.label}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-label-sm text-[12px] border ${
              drink.highlight
                ? "bg-surface-container-high text-primary border-primary/20 font-semibold"
                : "bg-surface-container-low text-on-surface border-outline-variant/40"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">{drink.icon}</span>
            <span>{drink.label}</span>
            <span className="w-5 h-5 rounded-full bg-surface-container-lowest text-primary font-bold flex items-center justify-center text-[10px] shadow-xs">
              {drink.count}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

