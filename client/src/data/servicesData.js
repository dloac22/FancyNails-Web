// Data structured from the client's menu PDF.
export const SERVICES = [
  {
    category: "Pedicure",
    items: [
      { name: "The Classic", price: 40, gelPrice: 55,
        desc: "Essential cleanup and gentle massage with warm towel." },
      { name: "Lavish Pedicure", price: 50, gelPrice: 65,
        desc: "Scented soak + sea salt, detox scrub, mask, warm towel; choice of paraffin wax or hot stones." },
      { name: "Volcano Spa Pedicure", price: 60, gelPrice: 75,
        desc: "Detox soak (sea salt + bubble bath) with warm neck scarf; sugar scrub, cream mask, hot towel, paraffin, hot stone massage." },
      { name: "Collagen Spa Pedicure", price: 80, gelPrice: 95,
        desc: "Bath bombs soak, warm neck & eye wrap; take-home hand/foot cream; sugar scrub, mask, warm towel, hot stone massage with gentle steam." },
      { name: "Fancy Pedicure", price: 100, gelPrice: 115,
        desc: "Neck towel + eye mask; jelly pearls soak; diamond sugar scrub; cooling gel + mud mask; steam massage with massage cream, oil candle, hot stones; take-home gift." }
    ]
  },
  {
    category: "Manicure",
    items: [
      { name: "Classic Manicure", price: 20, gelPrice: 35,
        desc: "Trim & shape, cuticle care, soothing lotion massage." },
      { name: "Fancy Signature Manicure", price: 40, gelPrice: 55,
        desc: "Sea salt soak, organic sugar scrub, warm lotion massage, warm towels; choose paraffin or hot stones." }
    ]
  },
  {
    category: "Acrylic / Color Powder",
    items: [
      { name: "Full Set", priceFrom: 50 },
      { name: "Refill", priceFrom: 40 },
      { name: "Ombre", priceFrom: 60 }
    ]
  },
  {
    category: "Add-On",
    items: [
      { name: "Special Shape", price: 5 },
      { name: "Extra Length", priceFrom: 5 },
      { name: "Cut Down / Reshape", price: 5 },
      { name: "Nail Repair", priceFrom: 5 },
      { name: "Change Polish (Hands, Regular)", price: 15 },
      { name: "Change Polish (Hands, Gel)", price: 25 },
      { name: "Change Polish (Toes, Regular)", price: 20 },
      { name: "Change Polish (Toes, Gel)", price: 30 },
      { name: "Nail Removal (Gel/Dip)", price: 10 },
      { name: "Nail Removal (Acrylic/Hard Gel)", price: 15 },
      { name: "Regular French", price: 5 },
      { name: "Deep/V French", priceFrom: 10 },
      { name: "Chrome", price: 10 },
      { name: "Cat Eye", price: 10 },
      { name: "Nail Art", priceNote: "Ask for price" }
    ]
  },
  {
    category: "Dipping Powder",
    items: [
      { name: "Dipping w/ Natural Nails", priceFrom: 45 },
      { name: "Dipping w/ Tip On", priceFrom: 50 },
      { name: "French Dipping", priceFrom: 55 },
      { name: "Ombre Dipping", priceFrom: 55 }
    ]
  },
  {
    category: "Gel X / Builder",
    items: [
      { name: "Gel X Extension", priceFrom: 65 },
      { name: "Hard/Builder Gel Full Set", priceFrom: 60 },
      { name: "Hard/Builder Gel Fill", priceFrom: 45 }
    ]
  },
  {
    category: "Kid Services (Under 9)",
    items: [
      { name: "Manicure – Regular Color", price: 15 },
      { name: "Manicure – Gel Color", price: 20 },
      { name: "Pedicure – Regular Color", price: 20 },
      { name: "Pedicure – Gel Color", price: 25 },
      { name: "Nail Polish (Toes) – Regular", price: 15 },
      { name: "Nail Polish (Toes) – Gel", price: 20 },
      { name: "Nail Polish (Hands) – Regular", price: 10 },
      { name: "Nail Polish (Hands) – Gel", price: 15 }
    ]
  }
];
