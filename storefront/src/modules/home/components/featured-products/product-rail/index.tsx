import { getProductsById } from "@/lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import ProductPreview from "@/modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  const productsWithPrices = await getProductsById({
    ids: products.map((p) => p.id!),
    regionId: region.id,
  })

  return (
    <section
      className="w-full border-b"
      style={{
        backgroundColor: "var(--color-warm-bg)",
        borderColor: "var(--color-warm-border)",
      }}
    >
      <div className="content-container py-16 small:py-24">
        <div className="flex items-center justify-between mb-10">
          <div className="flex flex-col gap-2">
            <span className="section-label">{collection.title}</span>
          </div>
          <LocalizedClientLink
            href={`/collections/${collection.handle}`}
            className="text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--color-brand)" }}
          >
            Ver todos →
          </LocalizedClientLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-4 small:gap-6">
          {productsWithPrices &&
            productsWithPrices.map((product) => (
              <li key={product.id}>
                <ProductPreview product={product} region={region} isFeatured />
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
