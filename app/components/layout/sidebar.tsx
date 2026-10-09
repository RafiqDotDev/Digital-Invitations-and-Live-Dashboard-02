import { Link, useLocation } from "react-router";

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    {
      label: "Overview",
      path: "/",
      icon: "dashboard",
      active: pathname === "/" || pathname === "/overview",
    },
    {
      label: "Guests",
      path: "/guests",
      icon: "group",
      active: pathname.startsWith("/guests"),
    },
    {
      label: "Invitation",
      path: "/invitation",
      icon: "mail",
      active: pathname.startsWith("/invitation"),
    },
    {
      label: "Guest RSVP Flow",
      path: "/rsvp",
      icon: "edit_note",
      active: pathname.startsWith("/rsvp"),
      badge: "Step 3",
    },
  ];

  return (
    <aside className="group fixed left-0 top-0 h-full w-[72px] hover:w-[240px] bg-surface-container-lowest z-50 flex flex-col justify-between border-r border-outline-variant shadow-[0_4px_20px_-2px_rgba(184,151,90,0.06)] hover:shadow-[0_16px_36px_-4px_rgba(43,43,43,0.14),0_4px_16px_-2px_rgba(184,151,90,0.12)] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex flex-col">
        {/* Brand Logo Header */}
        <div className="h-[72px] px-5 group-hover:px-space-lg flex items-center gap-space-sm border-b border-outline-variant transition-all duration-300">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <img
              alt="Live Guest Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPy8F2Qpw0zYrHn2vdCGKRYhJ2gmXC5HftKIUWBpO2-HUWwWKdAafIctSN94spx65AnHQqeWA_owtTT0tCJN0SQKbiDXF0tsiHlPSSFVAamDy2GuUlKnIKLUtLISoaaV7I0YmqQalGR9xu2EUbmDlTerIYy52SVe-LAJkb03suICGzHq4SgH4zGnYtwFQTJi4Q4Nqzf1z5Smp_j3JBZradIDxTCjlBDl3Yql8pvduEfbd5MCP1dVhwfw"
            />
          </div>
          <span className="font-headline-sm text-[18px] text-primary tracking-tight font-serif font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Live Guest
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1.5 px-3 group-hover:px-space-sm py-space-lg transition-all duration-300">
          {navItems.map((item) => {
            const isActive = item.active;
            return (
              <Link
                key={item.path}
                to={item.path}
                title={item.label}
                className={`flex items-center justify-between px-3 group-hover:px-space-md py-2.5 rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-surface-container-low text-primary-container font-medium shadow-xs"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                }`}
              >
                <div className="flex items-center gap-space-sm min-w-0">
                  <span
                    className={`material-symbols-outlined text-[20px] shrink-0 ${
                      isActive ? "text-primary" : "text-outline"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-label-md text-[13px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75 truncate">
                    {item.label}
                  </span>
                </div>
                {item.badge && (
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75 shrink-0">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Branding */}
      <div className="p-4 group-hover:p-space-lg border-t border-outline-variant bg-surface-container-low/40 transition-all duration-300">
        <div className="flex items-center gap-space-sm mb-1 text-primary">
          <span className="material-symbols-outlined text-[18px] shrink-0">spa</span>
          <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Luxury Suite
          </span>
        </div>
        <p className="font-code-sm text-[12px] text-outline whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
          Live RSVP Engine • v2.4
        </p>
      </div>
    </aside>
  );
}
