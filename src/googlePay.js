function completeGooglePayPayment(paymentData) {
  return new Promise(function (resolve, _) {
    setTimeout(() => {
      const token = paymentData.paymentMethodData.tokenizationData.token;
      let paymentToken = {
        googlePayPaymentToken: JSON.parse(token),
      };
      console.log("payment token: " + JSON.stringify(paymentToken));
      postForGooglePay("complete url").then(() => {
        resolve("test");
      })
    }, 500);
  });
}

function postForGooglePay(url) {
  return fetch(url, {
    method: "post",
  });
}


export  {
    completeGooglePayPayment,
}
