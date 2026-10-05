import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#18211f]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center px-5 py-16 sm:px-8">
        <div className="w-full rounded-[2rem] border border-[#172522]/10 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6f2e]">Gregory Law Offices</p>
          <p className="mt-6 font-display text-7xl font-bold tracking-[-0.04em] text-[#172522]">404</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-[#172522] sm:text-4xl">That page isn't here.</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#63706b]">The page you're looking for may have moved. You can return to the firm homepage or explore the practice areas.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[#b48a45] px-6 py-3 text-sm font-semibold text-white hover:bg-[#966f34]">Return home</Link>
            <Link to="/practice-areas" className="inline-flex items-center justify-center rounded-full border border-[#172522]/15 px-6 py-3 text-sm font-semibold text-[#172522] hover:bg-[#f7f5f0]">View practice areas</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Gregory Law Offices, Ltd." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gregory Law Offices, Ltd." },
      { name: "theme-color", content: "#172522" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Gregory Law Offices, Ltd.",
        url: "https://law-trust-modern.kiannematollahi.workers.dev",
        telephone: "+1-847-692-9900",
        email: "tom@gregorylawoffices.com",
        address: { "@type": "PostalAddress", streetAddress: "1410 Higgins Road, Suite 204", addressLocality: "Park Ridge", addressRegion: "IL", postalCode: "60068", addressCountry: "US" },
        areaServed: "Illinois",
      }),
    }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
