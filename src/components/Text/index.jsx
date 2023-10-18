import React from "react";

const sizeClasses = {
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroyBold18: "font-bold font-gilroy",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyRegular14Black900: "font-gilroy font-normal",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium15: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular12Bluegray40001: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyMedium16BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
