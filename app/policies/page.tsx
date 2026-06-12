import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping, Returns & Policies",
  description:
    "YET:FAB shipping times, delivery, cancellations, right of withdrawal, refunds, and privacy policy.",
  alternates: { canonical: "https://www.yet-fab.com/policies" },
};

const SECTIONS = [
  {
    title: "Estimated Delivery Time",
    body: "All our products are made to order and are typically fulfilled within 2 weeks of the order date. The estimated delivery time is usually up to 30 days after the order has been placed.",
  },
  {
    title: "Delivery and Shipping",
    body: "We provide the expected delivery time for our goods on each product page. If there are any delays, we will notify you via email, and you will have the right to cancel your order. To cancel, please refer to the Cancellations section below. Your package will typically be delivered to the nearest pick-up location. The shipping company will be indicated at checkout.",
  },
  {
    title: "Cancellations",
    body: "You may cancel your order at any time before it has been shipped. To cancel, send a clear request to ilya@yetarchitecture.com and include your order number.",
  },
  {
    title: "Right of Withdrawal",
    body: "After receiving your order, you have 14 days to change your mind. To exercise your right of withdrawal, send a clear message to ilya@yetarchitecture.com and include your order number. If you wish to change your order, return the purchased product and place a new order for the desired item. Ensure all elements of the product are included and pack it carefully in the original box to prevent damage during transport. We reserve the right to charge you if the product is used, incomplete, or if the packaging is excessively damaged. You are responsible for the return shipping costs.",
  },
  {
    title: "Defects",
    body: "If you notice any damage to the packaging upon delivery, report it to the shipping provider immediately. If you receive an incorrect or damaged product, contact us at ilya@yetarchitecture.com.",
  },
  {
    title: "Refunds",
    body: "If you are eligible for a refund, we will issue it as soon as possible after receiving the product. The refund will be processed using the payment method from your initial purchase.",
  },
  {
    title: "Unclaimed Shipments",
    body: "If your order is sent to a pick-up location and not claimed within the specified period, we have the right to charge you for the shipping costs to and from your location, plus a handling fee of EUR 15 (or the equivalent in your currency). This information applies to consumers only.",
  },
  {
    title: "Privacy Policy",
    body: "We take your privacy seriously and will take all measures to protect your personal information. Any personal information received will only be used to fill your order. We will not sell or redistribute your information to anyone.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="px-5 md:px-[100px] pt-[90px] pb-24">
      <div className="pt-12 pb-10 border-b border-[#DCDAD5]">
        <h1 className="text-[2.5rem] font-black tracking-tight text-[#0A0A0A] leading-none">
          Shipping &amp; Policies
        </h1>
        <p className="mt-3 text-[0.8rem] text-[#888]">
          YET:FAB — Tel Aviv, Israel
        </p>
      </div>

      <div className="max-w-2xl pt-12 flex flex-col gap-10">
        {SECTIONS.map((s) => (
          <div key={s.title} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            <p className="text-[0.65rem] tracking-[0.12em] font-bold text-[#2222FF] uppercase pt-1">
              {s.title}
            </p>
            <p className="text-[0.78rem] leading-[1.9] text-[#888]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
