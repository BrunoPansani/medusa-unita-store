import { listCategories } from "@/lib/data/categories"
import { listCollections } from "@/lib/data/collections"
import { clx } from "@medusajs/ui"

import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    offset: "0",
    limit: "6",
  })
  const product_categories = await listCategories({
    offset: 0,
    limit: 6,
  })

  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: "var(--color-warm-bg)",
        borderColor: "var(--color-warm-border)",
      }}
    >
      <div className="content-container">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 small:grid-cols-4 gap-10 py-16 small:py-20">

          {/* Brand column */}
          <div className="col-span-2 small:col-span-1 flex flex-col gap-4">
            <LocalizedClientLink href="/" className="hover:opacity-75 transition-opacity w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Unitá Porcelanas" className="h-6 w-auto" />
            </LocalizedClientLink>
            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Canecas de porcelana para atacado e revenda. Fábrica própria em Pedreira, SP.
            </p>
          </div>

          {/* Categories */}
          {product_categories && product_categories.length > 0 && (
            <div className="flex flex-col gap-4">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-ink)" }}
              >
                Categorias
              </span>
              <ul className="flex flex-col gap-2" data-testid="footer-categories">
                {product_categories.slice(0, 6).map((c) => {
                  if (c.parent_category) return null
                  const children = c.category_children?.map((child) => ({
                    name: child.name,
                    handle: child.handle,
                    id: child.id,
                  })) || null

                  return (
                    <li key={c.id} className="flex flex-col gap-1">
                      <LocalizedClientLink
                        href={`/categories/${c.handle}`}
                        className={clx(
                          "text-sm transition-opacity hover:opacity-60",
                          children && "font-medium"
                        )}
                        style={{ color: "var(--color-ink-muted)" }}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="flex flex-col gap-1 ml-3">
                          {children.map((child) => (
                            <li key={child.id}>
                              <LocalizedClientLink
                                href={`/categories/${child.handle}`}
                                className="text-sm transition-opacity hover:opacity-60"
                                style={{ color: "var(--color-ink-subtle)" }}
                              >
                                {child.name}
                              </LocalizedClientLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-4">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-ink)" }}
              >
                Coleções
              </span>
              <ul className="flex flex-col gap-2">
                {collections.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/collections/${c.handle}`}
                      className="text-sm transition-opacity hover:opacity-60"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-ink)" }}
            >
              Contato
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://wa.me/5519971690272"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  WhatsApp (19) 97169-0272
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@unitaporcelanas.com.br"
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  comercial@unitaporcelanas.com.br
                </a>
              </li>
              <li
                className="text-sm"
                style={{ color: "var(--color-ink-subtle)" }}
              >
                Pedreira, SP — CEP 13920-306
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between py-6 border-t"
          style={{ borderColor: "var(--color-warm-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-ink-subtle)" }}>
            © {new Date().getFullYear()} Unitá Porcelanas. Todos os direitos reservados.
          </p>
          <p className="text-xs hidden small:block" style={{ color: "var(--color-ink-subtle)" }}>
            Pedreira, SP — Capital da Porcelana
          </p>
        </div>
      </div>
    </footer>
  )
}
