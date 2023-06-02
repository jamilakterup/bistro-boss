import {Elements} from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Please provide' heading='payment' />
            <h3 className="text-3xl">Taka o taka tumi uira uira aso</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;