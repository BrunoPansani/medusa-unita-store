import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="mb-2 w-full relative small:min-h-screen"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
    >
      <div
        className="h-16 border-b"
        style={{
          backgroundColor: "var(--color-warm-bg)",
          borderColor: "var(--color-warm-border)",
        }}
      >
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            className="hover:opacity-75 transition-opacity"
            href="/"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Unitá Porcelanas" className="h-6 w-auto" />
          </LocalizedClientLink>
        </nav>
      </div>
      <div
        className="relative"
        style={{ backgroundColor: "var(--color-warm-bg)" }}
        data-testid="checkout-container"
      >
        {children}
      </div>
    </div>
  )
}
