import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "FAQ - Cloud Telephony Questions Answered | Mitchjolly Solutions",
  description:
    "Find answers to common questions about iGCT cloud telephony, compliance, call routing, pricing, and technical support.",
  keywords: "cloud telephony FAQ, iGCT questions, VoIP support, telephony compliance, call routing help",
}

export default function FAQPage() {
  return <FAQClientPage />
}
