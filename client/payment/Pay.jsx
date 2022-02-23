import axios from 'axios'
import React, { useState, useEffect, useHistory } from 'react'
import StripeCheckout from 'react-stripe-checkout'


const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                })
            } catch (err) {
                console.log(err);
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])

    const onToken = (token) => {
        setStripeToken(token)
    }

    return (
        <div>
            <StripeCheckout
                name="Sample Shop Name"
                image=""
                billingAddress
                shippingAddress
                description="Sample Description"
                amount={2000}
                token={onToken}
                stripeKey={process.env.STRIPE_KEY}
            >

            </StripeCheckout>
        </div>
    )
}

export default Pay
