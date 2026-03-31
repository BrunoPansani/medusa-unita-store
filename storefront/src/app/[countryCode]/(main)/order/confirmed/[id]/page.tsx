import { retrieveOrder } from "@/lib/data/orders"
import OrderCompletedTemplate from "@/modules/order/templates/order-completed-template"
import { B2BOrder } from "@/types/global"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: "Pedido Confirmado",
  description: "Sua compra foi bem-sucedida",
}

export default async function OrderConfirmedPage(props: Props) {
  const params = await props.params
  const order = (await retrieveOrder(params.id).catch(() => null)) as B2BOrder

  if (!order) {
    return notFound()
  }

  return <OrderCompletedTemplate order={order} />
}
