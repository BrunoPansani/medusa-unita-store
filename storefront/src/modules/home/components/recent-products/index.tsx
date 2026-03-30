import { listProducts } from "@/lib/data/products"
import { getRegion } from "@/lib/data/regions"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import ProductPreview from "@/modules/products/components/product-preview"

export default async function RecentProducts({
  countryCode,
}: {
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const { response } = await listProducts({
    queryParams: {
      limit: 8,
      order: "-created_at",
      region_id: region.id,
    },
    countryCode,
  })

  const products = response.products

  if (!products?.length) {
    return null
  }

  return (
    <section
      className="w-full border-b"
      style={{
        backgroundColor: "var(--color-warm-bg-2)",
        borderColor: "var(--color-warm-border)",
      }}
    >
      <div className="content-container py-16 small:py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex flex-col gap-2">
            <span className="section-label">Novidades</span>
            <h2
              className="text-2xl font-normal"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-ink)",
              }}
            >
              Lançamentos
            </h2>
          </div>
          <LocalizedClientLink
            href="/store"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--color-brand)" }}
          >
            Ver catálogo completo →
          </LocalizedClientLink>
        </div>

        {/* Product grid */}
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-4 small:gap-6">
          {products.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
