"use client";
import { useActionState } from "react";
import Input from "./form/Input";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import handleSubmit from "@/lib/handleSubmit";
import { HashLoader } from "react-spinners";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const FormSendEmail = () => {
  const [state, formAction, isPending] = useActionState(handleSubmit, {});
  return (
    <div className="w-full h-auto border-main-text flex flex-col justify-center items-center gap-2 p-3">
      <div>
        <h3 className={`${montserrat.className} text-lg font-bold`}>BOOKING</h3>
      </div>
      <div className="border-2 p-4 rounded-lg w-full sm:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/3">
        <form action={formAction} className="flex flex-col gap-2">
          <Input
            disabled={isPending}
            label={"Name"}
            name={"name"}
            type={"text"}
            error={state?.fieldErrors?.name}
            placeholder={"e.g. Mark"}
            defaultValue={state?.fields?.name}
          />
          <Input
            disabled={isPending}
            label={"Email"}
            name={"email"}
            type={"email"}
            error={state?.fieldErrors?.email}
            placeholder={"e.g. mark@gmail.com"}
            defaultValue={state?.fields?.email}
          />
          <Input
            disabled={isPending}
            label={"Phone Number"}
            name={"phoneNumber"}
            type={"tel"}
            error={state?.fieldErrors?.phoneNumber}
            placeholder={"phone number"}
            defaultValue={state?.fields?.phoneNumber}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            disabled={isPending}
            className="text-black resize-none"
            name="message"
            required
            placeholder={"message..."}
            defaultValue={state?.fields?.message}
          ></textarea>
          <button
            disabled={isPending}
            className={`flex items-center gap-2 justify-center p-1 font-semibold border rounded-lg ${
              isPending ? "" : "hover:bg-main-primary hover:text-main-text"
            }  bg-white text-black mt-2 transition-all duration-200`}
            type="submit"
          >
            {isPending ? (
              <>
                <HashLoader
                  color="black"
                  loading
                  size={25}
                  speedMultiplier={1}
                />
              </>
            ) : (
              <>
                <p>Send</p>
                <div>
                  <PaperPlaneTilt size={25} weight="light" />
                </div>
              </>
            )}
          </button>
        </form>
        <div className="mt-3">
          {(state?.message?.failed && (
            <div className="border text-center bg-red-600 rounded-lg">
              {state.message?.failed}
            </div>
          )) ||
            (state?.message && state?.message?.succeed && (
              <div className="border text-center bg-green-600 rounded-lg">
                {state?.message?.succeed}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default FormSendEmail;
