"use client"

import { HttpTypes } from "@medusajs/types"
import { Table, Text } from "@medusajs/ui"
import Markdown from "react-markdown"
import Accordion from "./accordion"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Descrição",
      component: <ProductSpecsTab product={product} />,
    },
    {
      label: "Especificações",
      component: <ProductSpecificationsTab product={product} />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple" className="flex flex-col gap-y-2">
        {tabs.map((tab, i) => (
          <Accordion.Item
            className="small:px-0 px-0"
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductSpecsTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8 xl:w-2/3">
      <Markdown
        components={{
          p: ({ children }) => (
            <Text style={{ color: "var(--color-ink)" }} className="mb-2">
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text
              className="text-xl my-4 font-semibold"
              style={{ color: "var(--color-ink)" }}
            >
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text
              className="text-lg mb-2"
              style={{ color: "var(--color-ink)" }}
            >
              {children}
            </Text>
          ),
        }}
      >
        {product.description ? product.description : "-"}
      </Markdown>
    </div>
  )
}

const ProductSpecificationsTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <Table
        className="rounded-xl overflow-hidden border-none"
        style={{ borderColor: "var(--color-warm-border)" }}
      >
        <Table.Body>
          {product.weight && (
            <Table.Row>
              <Table.Cell
                className="border-r"
                style={{
                  borderColor: "var(--color-warm-border)",
                  color: "var(--color-ink-muted)",
                }}
              >
                <span className="font-semibold">Peso</span>
              </Table.Cell>
              <Table.Cell
                className="px-4"
                style={{ color: "var(--color-ink)" }}
              >
                {product.weight} g
              </Table.Cell>
            </Table.Row>
          )}
          {(product.height || product.width || product.length) && (
            <Table.Row>
              <Table.Cell
                className="border-r"
                style={{
                  borderColor: "var(--color-warm-border)",
                  color: "var(--color-ink-muted)",
                }}
              >
                <span className="font-semibold">Dimensões (AxLxP)</span>
              </Table.Cell>
              <Table.Cell
                className="px-4"
                style={{ color: "var(--color-ink)" }}
              >
                {product.height}mm x {product.width}mm x {product.length}mm
              </Table.Cell>
            </Table.Row>
          )}

          {product.metadata &&
            Object.entries(product.metadata).map(([key, value]) => (
              <Table.Row key={key}>
                <Table.Cell
                  className="border-r"
                  style={{
                    borderColor: "var(--color-warm-border)",
                    color: "var(--color-ink-muted)",
                  }}
                >
                  <span className="font-semibold">{key}</span>
                </Table.Cell>
                <Table.Cell
                  className="px-4"
                  style={{ color: "var(--color-ink)" }}
                >
                  <p>{value as string}</p>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ProductTabs
