
import { completeGooglePayPayment } from '../src/googlePay'

describe("googlePay", () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });
    it('should call post and resolve the value', async () => {
        const paymentData = {
            paymentMethodData: {
                tokenizationData: {
                    token: JSON.stringify({token: "token"})
                }
            }
        }
        const response = await completeGooglePayPayment(paymentData)


        expect(response).toEqual("test")
    })
})
