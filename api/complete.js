export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentId, txid } = req.body;

    console.log("Completing payment:", paymentId, txid);

    return res.status(200).json({
      result: "completed"
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
