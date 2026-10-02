export const BUSINESS_CONFIG = {
  name: "Humberto Ladino",
  serviceName: "Tapicería",
  fullName: "Humberto Ladino - Tapicería",
  tagline: "Tus muebles están seguros con la mejor tapicería de Bogotá",
  yearsOfExperience: 50,
  city: "Bogotá, Colombia",
  phone: "573165090148",
  whatsappBaseUrl: "https://wa.me/573165090148",
  defaultWhatsAppMessage: "Hola Don Humberto, quiero cotizar un trabajo de tapicería para mis muebles.",
  deliveryBannerText: "Servicio a domicilio en toda Bogotá: Recogemos y entregamos tus muebles",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || BUSINESS_CONFIG.defaultWhatsAppMessage;
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
