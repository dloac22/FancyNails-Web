// Data structured from the client's menu PDF.
export const SERVICES = [
  {
    category: "Pedicure",
    bg: "/assets/services/pedicure3.jpg",
    items: [
      { name: "The Classic", price: 40, gelPrice: 55,
        desc: "Swift, essential foot care. Includes basic cleanup and gentle massage with a warm towel." },
      { name: "Lavish Pedicure", price: 50, gelPrice: 65,
        desc: "Enhance your well-being with a foot soak using your preferred scent and sea salt to eliminate toxins. This treatment is followed by a detoxifying scrub for deep cleansing and a soothing mask with a warm towel for relaxation. Conclude your experience by selecting   either orange-scented paraffin wax or calming hot stones. This wellness program aims to relieve tension and restore energy balance." },
      { name: "Volcano Spa Pedicure", price: 50, gelPrice: 65,
        desc: "Our premium foot spa provides a volcanic experience designed for nourishment and deep relaxation. The treatment begins with a detoxifying foot soak using sea salt and bubble bath and a warm scarf around your neck which enhances circulation and aids in detoxification. This is followed by a gentle sugar scrub to smooth and brighten the skin, a nourishing cream mask, and a soothing hot towel treatment. An orange-scented paraffin wax is then applied for hydration. The experience concludes with a warm massage with hot stones, effectively toning and relaxing tired muscles." },
      { name: "Collagen Spa Pedicure", price: 80, gelPrice: 95,
        desc: "Your experience begins with the selection of your preferred scent, followed by a relaxing foot soak enhanced with fizzing bath bombs. To elevate comfort, a warm neck and eye wrap is provided, while nourishing hand and foot cream are prepared for you to take home. The treatment continues with a rejuvenating sugar scrub, a soothing mask, and a warm towel wrap to deeply refresh the skin. Finally, indulge in a therapeutic hot stone massage with gentle steam, focusing on the legs and feet to boost circulation, ease tension, and leave you feeling renewed." },
      { name: "Fancy Pedicure", price: 100, gelPrice: 115,
        desc: "Treat yourself to our delightful foot spa experience! You will begin with a cozy warm neck towel and a soothing eye mask to help you relax. Next, enjoy a luxurious foot soak filled with jelly pearls and sea salts, followed by a gentle diamond sugar scrub that leaves your skin feeling fresh. We will then give your feet a refreshing wash and apply a cooling gel and mud mask that will reveal their natural softness.After that, relax even more with our comforting steam massage, using our lovely massage cream, along with our signature Massage Oil Candle and soothing hot stones to melt away any tension.You will also receive a special gift to take home with you. This foot spa treatment is a wonderful way to show yourself some love and care!" }
    ]
  },
  {
    category: "Manicure",
    bg: "/assets/services/manicure.PNG",
    items: [
      { name: "Classic Manicure", price: 20, gelPrice: 35,
        desc: "Meticulous nail trimming and shaping, cuticle care, soothing massage with lotion" },
      { name: "Fancy Signature Manicure", price: 40, gelPrice: 55,
        desc: "Indulge in our Signature Manicure, a meticulous treatment encompassing nail trimming, reshaping, and cuticle care. Immerse your weary hands in our sea salt soak, revitalize with organic sugar scrub, enjoy a soothing massage with warm lotion, and luxuriate in warm towels. Complete the look with our high-quality flawless nail polish and choose between a paraffin treatment or hot stone." }
    ]
  },
  {
    category: "Acrylic / Color Powder",
    bg: "/assets/services/acrylic.jpg",
    items: [
      { name: "Full Set", priceFrom: 50 },
      { name: "Refill", priceFrom: 40 },
      { name: "Ombre", priceFrom: 60 },
      { desc: "FOR PRICING, IF YOU HAVE AN INSPO PICTURE, PLEASE SHOW US. WE CAN PROVIDE THE EXACT PRICE"}
    ]
  },
  {
    category: "Add-On",
    bg: "/assets/services/addon.jpg",
    items: [
      { name: "Special Shape", price: 5 },
      { name: "Extra Length", priceFrom: 5 },
      { name: "Cut Down / Reshape", price: 5 },
      { name: "Nail Repair", priceFrom: 5 },
      { name: "Change Polish (Hands, Regular)", price: 15 },
      { name: "Change Polish (Hands, Gel)", price: 25 },
      { name: "Change Polish (Toes, Regular)", price: 20 },
      { name: "Change Polish (Toes, Gel)", price: 35 },
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
    bg: "/assets/services/dippingPowder.jpg",
    items: [
      { name: "Dipping w/ Natural Nails", priceFrom: 45 },
      { name: "Dipping w/ Tip On", priceFrom: 50 },
      { name: "French Dipping", priceFrom: 55 },
      { name: "Ombre Dipping", priceFrom: 55 }
    ]
  },
  {
    category: "Gel X / Builder",
    bg: "/assets/services/gelX.jpg",
    items: [
      { name: "Gel X Extension", priceFrom: 65 },
      { name: "Hard/Builder Gel Full Set", priceFrom: 60 },
      { name: "Hard/Builder Gel Fill", priceFrom: 45 }
    ]
  },
  {
    category: "Kid Services (Under 9)",
    bg: "/assets/services/kidservices.JPG",
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
