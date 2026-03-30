import LocalizedClientLink from "@/modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-48 px-2 flex flex-col justify-center items-start"
      data-testid="empty-cart-message"
    >
      <h1
        className="text-3xl font-normal mb-4"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-ink)" }}
      >
        Carrinho
      </h1>
      <p
        className="text-base mt-4 mb-6 max-w-[32rem]"
        style={{ color: "var(--color-ink-muted)" }}
      >
        Seu carrinho está vazio. Que tal explorar nosso catálogo de canecas de
        porcelana?
      </p>
      <LocalizedClientLink href="/store" className="btn-brand">
        Explorar produtos
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage
