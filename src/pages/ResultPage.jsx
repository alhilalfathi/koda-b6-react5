import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const ResultPage = () => {
    const [dataSurvey, setDataSurvey] = useState([])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("surveyData")) || []
        setDataSurvey(data)
    },[])
  return (
    <div className="bg-gray-500 min-h-screen flex justify-center">
      <form className="bg-gray-500 w-[80%] min-h-screen p-5 pt-0">

        {/* Header */}
        <header className="border-t-8 border-b-blue-950 rounded-lg bg-white p-10">
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

              <tbody>
                {dataSurvey.map((item, index) => (
                    <tr key={index}>
                        <td className="border px-3 py-2">{index + 1}</td>
                        <td className="border px-3 py-2">{item.name}</td>
                        <td className="border px-3 py-2">{item.age}</td>
                        <td className="border px-3 py-2">{item.gender}</td>
                        <td className="border px-3 py-2">{item.isPerokok}</td>
                        <td className="border px-3 py-2">{item.jenisRokok.join(", ")}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Back Button */}
        <div className="m-3">
          <Link
            to="/"
            className="inline-block bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-black transition">
            Back to Survey
          </Link>
        </div>
      </form>
    </div>
  )
}