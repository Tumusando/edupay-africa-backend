export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentId } = req.body;

    console.log("Approving payment:", paymentId);

    // IMPORTANT: respond fast to Pi
    return res.status(200).json({
      result: "approved"
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
