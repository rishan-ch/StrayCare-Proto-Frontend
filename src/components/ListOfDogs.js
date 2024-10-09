import axios from "axios";
import { useEffect, useState } from "react";


export default function ListOfDogs(){
    const [dogs, setDogs] = useState([]);

    async function getAllDogs(){
        const res = await axios.post("http://localhost:8080/api/dog/all");

        console.log(res)
        setDogs(res.data);
        
    }

    useEffect(() => {
        getAllDogs(); // Fetch data when component mounts
      }, []);

    return(
        // <div>
        //     <ul>
        //         {
        //             dogs.map((dog, i)=>(
        //                 <li key={i}>
        //                     <p>Name:{dog.name}</p>
        //                     <p>Breed: {dog.breed}</p>
        //                     <img src={`data:image/jpeg;base64,${dog.photo}`}/>
        //                 </li>
        //             ))
        //         }
        //     </ul>
        // </div>

        <div className=" mx-auto w-screen px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl pb-10">Pets</h2>
  
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {dogs.map((dog) => (
              <a key={dog.id} className="group border-2 p-2 rounded-xl border-blue-950">
                <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={dog.imageAlt}
                    src={`data:image/jpeg;base64,${dog.photo}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{dog.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{dog.breed}</p>
              </a>
            ))}
          </div>
        </div>
    );
}