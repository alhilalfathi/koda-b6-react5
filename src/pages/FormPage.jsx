import { useForm } from "react-hook-form"
import { InputDiv } from "../components/InputDiv"
import { InputRadio } from "../components/InputRadio"



export const FormPage = () => {
const {handleSubmit, register} = useForm()
function submitForm(value){
const oldData = JSON.parse(localStorage.getItem("surveyData")) || []

const newData = [...oldData, value]
localStorage.setItem("surveyData",JSON.stringify(newData))

}
  return (
    <div className="bg-gray-500 h-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)} className="w-[70%] flex flex-col gap-5">

        {/* Header */}
        <header className="flex flex-col gap-3 border-t-8 border-b-blue-950 rounded-lg mb-3 bg-white p-10">
          <h1 className="font-bold text-4xl">Survey Perokok</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem numquam voluptas minus quasi debitis?</p>
        </header>
        {/* content  */}
          <InputDiv {...register("name")} placeholder="Input your name" id="name" labelFor="name">Siapa nama anda?</InputDiv>
          
          <InputDiv {...register("age")} placeholder="Input your age" id="age" labelFor="age">Berapa umur anda?</InputDiv>
          
          <InputRadio 
            type="radio" 
            value1="Laki-Laki" 
            value2="Perempuan" 
            id1="Laki-laki"
            id2="Perempuan"
            labelValue1="Laki-laki"
            labelValue2="Perempuan"
            {...register("gender")}
          >
              Apa jenis kelamin anda?
          </InputRadio>

          <InputRadio 
            type="radio" 
            value1="Ya" 
            value2="Tidak" 
            id1="Ya"
            id2="Tidak"
            labelValue1="Ya"
            labelValue2="Tidak"
            {...register("isPerokok")}
          >
              Apakah anda perokok?
          </InputRadio>

          <div className="bg-white p-10 rounded-2xl flex flex-col gap-3">
            <div>
              <label className="text-xl font-bold">Jika anda perokok, rokok apa yang pernah anda coba?</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="gudang-garam-filter" value="Gudang Garam Filter" {...register("jenisRokok")}/>
              <label htmlFor="gudang-garam-filter">Gudang Garam Filter</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="lucky-strike" value="Lucky Strike" {...register("jenisRokok")}/>
              <label htmlFor="lucky-strike">Lucky Strike</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="marlboro" value="Marlboro" {...register("jenisRokok")}/>
              <label htmlFor="marlboro">Marlboro</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="esse" value="Esse" {...register("jenisRokok")}/>
              <label htmlFor="esse">Esse</label>
            </div>
          </div>
          {/* submit button  */}
          <div className="w-25 h-10 bg-blue-950 hover:bg-black mb-10 flex justify-center items-center rounded-xl">
            <button type="submit" className="text-white text-xl">Submit</button>
          </div>

      </form>
    </div>
  )
}

