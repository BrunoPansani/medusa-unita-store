import { HttpTypes } from "@medusajs/types"
import ImageGallery from "@/modules/products/components/image-gallery"
import ProductActions from "@/modules/products/components/product-actions"
import ProductTabs from "@/modules/products/components/product-tabs"
import RelatedProducts from "@/modules/products/components/related-products"
import ProductInfo from "@/modules/products/templates/product-info"
import SkeletonRelatedProducts from "@/modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import React, { Suspense } from "react"
import ProductActionsWrapper from "./product-actions-wrapper"
import ProductFacts from "../components/product-facts"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div
      className="flex flex-col"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
    >
      <div
        className="content-container grid grid-cols-1 md:grid-cols-2 gap-0 w-full"
        data-testid="product-container"
      >
        <ImageGallery product={product} />
        <div
          className="flex flex-col w-full gap-6 items-start justify-center small:p-16 p-6 h-full"
          style={{
            backgroundColor: "var(--color-warm-bg-2)",
            borderLeft: "1px solid var(--color-warm-border)",
          }}
        >
          <ProductInfo product={product} />
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
          <ProductFacts product={product} />
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "var(--color-warm-border)" }}
      >
        <div className="content-container py-8">
          <ProductTabs product={product} />
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "var(--color-warm-border)" }}
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
