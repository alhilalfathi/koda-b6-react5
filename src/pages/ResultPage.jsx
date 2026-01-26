import { Link } from "react-router-dom"
export const ResultPage = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center font-sans">
      <form className="bg-gray-300 w-[80%] min-h-screen p-5 pt-0">

        {/* Header */}
        <header className="border-t-8 border-slate-500 rounded-lg mb-3 bg-white p-10">
          <h1 className="text-2xl font-bold">Hasil Survey</h1>
        </header>

        {/* Content */}
        <section>
          <div className="bg-white p-5 rounded-lg">
            <table className="w-full border-collapse mt-3">
              <thead>
                <tr className="border-b">
                  <th className="border px-3 py-2 text-left">No</th>
                  <th className="border px-3 py-2 text-left">Nama</th>
                  <th className="border px-3 py-2 text-left">Umur</th>
                  <th className="border px-3 py-2 text-left">Jenis kelamin</th>
                  <th className="border px-3 py-2 text-left">Perokok</th>
                  <th className="border px-3 py-2 text-left">Rokok yang pernah dicoba</th>
                </tr>
              </thead>

              <tbody id="tbody">
                {/* data survey */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Back Button */}
        <div className="m-3">
          <Link
            to="/"
            className="inline-block bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition">
            Back to Survey
          </Link>
        </div>
      </form>
    </div>
  )
}