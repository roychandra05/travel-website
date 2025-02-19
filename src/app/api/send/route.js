import { sendEmail } from "@/utils/sendEmail";

export async function POST(req) {
  const data = await req.json();
  const { name, email, phoneNumber, message } = data.data;
  try {
    const result = await sendEmail(name, email, phoneNumber, message);
    if (result.message) {
      throw new Error(result.name);
    }
    return new Response(
      JSON.stringify({ message: { succeed: "Successfully send" } }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: { failed: error.message } }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
