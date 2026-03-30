import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section
      className="w-full border-b relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-warm-bg)",
        borderColor: "var(--color-warm-border)",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, oklch(0.60 0.20 48 / 0.07) 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="content-container relative z-10 h-full flex items-center">
        <div className="grid small:grid-cols-2 gap-16 items-center w-full py-24 small:py-32">

          {/* Left — editorial text */}
          <div className="flex flex-col gap-8">
            <span className="section-label">
              Indústria própria em Pedreira
            </span>

            <h1
              className="text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] font-normal"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-ink)",
              }}
            >
              Fornecedor de canecas de porcelana para atacado e revenda.
            </h1>

            <p
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Fábrica própria em Pedreira garante preço competitivo, qualidade
              superior e entrega confiável para todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <LocalizedClientLink href="/store" className="btn-brand">
                Ver catálogo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </LocalizedClientLink>
              <a
                href="https://wa.me/5519971690272"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-10 pt-4 border-t"
              style={{ borderColor: "var(--color-warm-border)" }}
            >
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-brand)",
                  }}
                >
                  25+
                </span>
                <span className="text-xs" style={{ color: "var(--color-ink-subtle)" }}>
                  anos fabricando
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-brand)",
                  }}
                >
                  Fábrica
                </span>
                <span className="text-xs" style={{ color: "var(--color-ink-subtle)" }}>
                  própria
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-brand)",
                  }}
                >
                  B2B
                </span>
                <span className="text-xs" style={{ color: "var(--color-ink-subtle)" }}>
                  atacado e revenda
                </span>
              </div>
            </div>
          </div>

          {/* Right — decorative panel */}
          <div
            className="hidden small:flex items-center justify-center rounded-2xl overflow-hidden relative"
            style={{
              backgroundColor: "var(--color-warm-bg-2)",
              border: "1px solid var(--color-warm-border)",
              minHeight: "520px",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, oklch(0.60 0.20 48 / 0.08) 1.5px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt=""
                className="h-24 w-auto"
                style={{ opacity: 0.15 }}
              />
              <p
                className="text-sm font-medium tracking-wide uppercase"
                style={{ color: "var(--color-brand)", letterSpacing: "0.1em" }}
              >
                Pedido mínimo · 12 unidades
              </p>
              <p
                className="text-xs max-w-[220px] leading-relaxed"
                style={{ color: "var(--color-ink-subtle)" }}
              >
                Entregamos para todo o Brasil com embalagem segura e parceria com transportadoras.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
