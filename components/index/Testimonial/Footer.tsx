const Footer = () => {
  return (
    <footer className="p-6 bg-[#4f343e] rounded-t-xl shadow">
      <h2 className="text-slate-50 text-lg font-medium mb-4">
        Laissez une trace de votre passage
      </h2>
      <div className="bg-slate-50 rounded-lg">
        <form action="" className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm" htmlFor="username">
              <span className="inline-block mb-2 font-bold">Adresse email</span>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-[#614450] focus:ring-2"
                id="username"
                name="username"
                type="text"
                placeholder="Votre adresse email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm" htmlFor="comment">
              <span className="inline-block mb-2 font-bold">Message</span>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-[#614450] focus:ring-2"
                name="comment"
                id="comment"
                rows={4}
                placeholder="Votre message..."
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#614450] hover:bg-[#4f343e] text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
