// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.ACCESS_TOKEN_PROD //DEV or PROD

});


export default function create_preference(req, res) {
	return new Promise((resolve, reject) => {
		let preference = {
			items: req.body.items,
			payer: req.body.payer,
			back_urls: {
				"success": `https://www.rosearomas.com.ar/StatusCompra?keyword=success&idCompra=${req.body.id}`,
				"failure": `https://www.rosearomas.com.ar/StatusCompra?keyword=failure&idCompra=${req.body.id}`,
			},
			payment_methods: {
				"excluded_payment_types": [
					{
						"id": "credit_card"
					}]
			},
			auto_return: "approved",
		};
		

		mercadopago.preferences.create(preference)
		.then(function (response) {
			res.statusCode = 200
			res.setHeader('Content-type','application/json')
			res.json({
				id: response.body.id,
				redirect: response.body.init_point
			});
			resolve();

		}).catch(function (error) {
			console.log("TU ERROR ------------>",error)
			res.json(error);
			res.status(405).end();
			resolve();
		});

	});
}