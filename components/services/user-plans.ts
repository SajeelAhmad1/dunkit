export const basic = [
    { feature: "Unlimited borrowing", available: true },
    { feature: "Tops", available: true },
    { feature: "Shorts", available: true },
    { feature: "Shoes & Socks", available: false },
    { feature: "Towel", available: false },
    { feature: "Mutual use", available: false },
  ];
  
  export const plus = basic.map((item) =>
    item.feature === "Shoes & Socks" ? { ...item, available: true } : item
  );
  
  export const pro = basic.map((item) => ({ ...item, available: true }));
  