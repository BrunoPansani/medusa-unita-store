import { listProducts } from "@/lib/data/products"
import { getRegion } from "@/lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const queryParams: HttpTypes.StoreProductParams & {
    tags?: string[]
  } = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  if (!products.length) {
    return null
  }

  return (
    <div
      className="content-container py-16 small:py-20"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
    >
      <div className="flex flex-col gap-8">
        <span className="section-label">Você também pode gostar</span>
        <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-4 small:gap-6">
          {products.map((product) => (
            <li key={product.id}>
              <Product region={region} product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
