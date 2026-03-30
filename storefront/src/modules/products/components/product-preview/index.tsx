import { getProductPrice } from "@/lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  if (!product) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="flex flex-col overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-lg"
        style={{
          backgroundColor: "var(--color-warm-bg-2)",
          border: "1px solid var(--color-warm-border)",
        }}
      >
        {/* Image area */}
        <div
          className="relative overflow-hidden aspect-square"
          style={{ backgroundColor: "var(--color-warm-bg)" }}
        >
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="square"
              isFeatured={isFeatured}
            />
          </div>
        </div>

        {/* Info area */}
        <div className="flex flex-col gap-2 p-4">
          <p
            className="text-sm font-medium leading-snug line-clamp-2"
            data-testid="product-title"
            style={{ color: "var(--color-ink)" }}
          >
            {product.title}
          </p>
          {cheapestPrice && (
            <div style={{ color: "var(--color-ink-muted)" }}>
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
