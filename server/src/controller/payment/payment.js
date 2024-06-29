const stripe = require("stripe")(
  ""
);

const makePayment = async (req, res) => {
  try {
    const products = [
      {
        id: 1,
        plan: "Basic",

        price: 35,

        qnty: 100,
      },
    ];
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.plan,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.qnty,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/sucess",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = makePayment;
