import { FormEvent, FormEventHandler, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const reset = () => {
    setEmail("");
    setMessage("");
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/comments`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc. // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      }
    );
    setIsLoading(false);
    if (!response.ok) return;
    reset();
  };
  const onEmailInput: FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
  };
  const onMessageInput: FormEventHandler<HTMLTextAreaElement> = (e) => {
    const target = e.target as HTMLTextAreaElement;
    setMessage(target.value);
  };
  return (
    <footer className="px-6 pt-12 pb-16 bg-gradient-to-br from-[#4f343e] to-[#64424e] rounded-t-xl shadow">
      <h2 className="text-slate-50 text-lg font-medium mb-6">
        Laissez une trace de votre passage
      </h2>
      <div className="bg-slate-50 rounded-lg">
        <form action="" className="px-6 pt-8 pb-8 shadow" onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">
              <span className="inline-block mb-2 font-bold">Adresse email</span>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-[#614450] focus:ring-2"
                id="username"
                name="username"
                type="email"
                required
                placeholder="Votre adresse email"
                onInput={onEmailInput}
                value={email}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="comment">
              <span className="inline-block mb-2 font-bold">Message</span>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-[#614450] focus:ring-2"
                name="comment"
                id="comment"
                required
                rows={4}
                placeholder="Votre message..."
                onInput={onMessageInput}
                value={message}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="font-medium bg-gradient-to-br from-[#4f343e] to-[#64424e] text-white py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition"
            >
              {!isLoading ? (
                <span className="flex items-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  />
                  <span>Envoi en cours...</span>
                </span>
              ) : (
                "Envoyer"
              )}
            </button>
          </div>
        </form>
      </div>
      {isSuccess ? (
        <div className="p-4 fixed bottom-4 left-4 right-4 rounded bg-teal-600 text-white">
          Votre message a bien été envoyé, Merci !
        </div>
      ) : (
        ""
      )}
    </footer>
  );
};

export default Footer;
