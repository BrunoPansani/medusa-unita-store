import { retrieveCart } from "@/lib/data/cart"
import { retrieveCustomer } from "@/lib/data/customer"
import { listRegions } from "@/lib/data/regions"
import AccountButton from "@/modules/account/components/account-button"
import CartButton from "@/modules/cart/components/cart-button"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import FilePlus from "@/modules/common/icons/file-plus"
import SideMenu from "@/modules/layout/components/side-menu"
import { RequestQuoteConfirmation } from "@/modules/quotes/components/request-quote-confirmation"
import { RequestQuotePrompt } from "@/modules/quotes/components/request-quote-prompt"
import SkeletonAccountButton from "@/modules/skeletons/components/skeleton-account-button"
import SkeletonCartButton from "@/modules/skeletons/components/skeleton-cart-button"
import { Suspense } from "react"

export async function NavigationHeader() {
  const [customer, cart, regions] = await Promise.all([
    retrieveCustomer().catch(() => null),
    retrieveCart(),
    listRegions(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header
        className="h-[72px] mx-auto border-b"
        style={{
          backgroundColor: "var(--color-warm-bg)",
          borderColor: "var(--color-warm-border)",
        }}
      >
        <nav className="content-container flex items-center justify-between w-full h-full">

          {/* Left — Logo (desktop) + SideMenu trigger (mobile) */}
          <div className="flex items-center gap-x-4 h-full">
            <div className="small:hidden">
              <SideMenu regions={regions} />
            </div>

            <LocalizedClientLink
              href="/"
              className="hover:opacity-75 transition-opacity"
              data-testid="nav-store-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Unitá Porcelanas"
                className="h-7 w-auto"
              />
            </LocalizedClientLink>
          </div>

          {/* Center — main navigation links (desktop only) */}
          <div className="hidden small:flex items-center gap-x-8">
            <LocalizedClientLink
              href="/store"
              className="text-sm font-medium transition-colors duration-150 hover:opacity-60"
              style={{ color: "var(--color-ink)" }}
            >
              Catálogo
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/account"
              className="text-sm font-medium transition-colors duration-150 hover:opacity-60"
              style={{ color: "var(--color-ink)" }}
              data-testid="nav-account-link"
            >
              Minha conta
            </LocalizedClientLink>
          </div>

          {/* Right — Quote, Account, Cart */}
          <div className="flex items-center gap-2 h-full">
            {customer && cart?.items && cart.items.length > 0 ? (
              <RequestQuoteConfirmation>
                <button
                  className="hidden small:flex gap-1.5 items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  <FilePlus />
                  <span>Orçamento</span>
                </button>
              </RequestQuoteConfirmation>
            ) : (
              <RequestQuotePrompt>
                <button
                  className="hidden small:flex gap-1.5 items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  <FilePlus />
                  <span>Orçamento</span>
                </button>
              </RequestQuotePrompt>
            )}

            <Suspense fallback={<SkeletonAccountButton />}>
              <AccountButton customer={customer} />
            </Suspense>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-sm font-medium hover:opacity-60 transition-opacity"
                  style={{ color: "var(--color-ink)" }}
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrinho (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}
