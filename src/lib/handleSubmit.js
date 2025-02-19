import { formSchema } from "@/schemas/formSchema";

export default async function handleSubmit(prev, value) {
  const data = Object.fromEntries(value);
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return { message: result.error.formErrors, fields: data };
  }
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });
  const emailResult = await response.json();
  if (!response.ok) {
    return { ...emailResult, fields: data };
  }
  return emailResult;
}
