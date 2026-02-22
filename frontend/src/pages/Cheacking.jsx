import React, { useEffect } from "react";

const Cheacking = () => {
  const req1 = {
    cookies: {
      jwt: "123456",
    },
  };
  const req2 = {
    cookies: {
      jwt: "7890",
    },
  };
  const req3 = { jwt: "333" };
  const req4 = { jwt: "444" };

  useEffect(() => {
    // এখানে console.log ও variable ঠিকভাবে কাজ করবে
    let token1 = req1.cookies.jwt || req2.cookies.jwt;
    console.log("Token 1:", token1);

    let token2 = req2.cookies && req2.cookies.jwt;
    console.log("Token 2:", token2);
    let token3 = req3 && req4;
    console.log("Token 3:", token3);
  }, []);

  return <h1>Check the console for output</h1>;
};

export default Cheacking;
