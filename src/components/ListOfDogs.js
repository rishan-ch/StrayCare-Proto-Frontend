import axios from "axios";
import { useEffect, useState } from "react";
import husky from "../media/husky-2.jpg"


export default function ListOfDogs() {
  const token = localStorage.getItem("token");
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getAllDogs() {
    

    try {
      const res = await axios.get("http://localhost:8080/api/dog/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDogs(res.data);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch dogs. Please try again.");
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllDogs(); // Fetch data when component mounts
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // async function details(id) {
  //   try {
  //     const res = await axios.post(`http://localhost:8080/api/dog/info/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //   } catch (error) {
      
  //   }
  // }

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
            {dogs.map((dog, i) => (
              <div key={i} className="group border-2 p-2 rounded-xl border-blue-950">
                <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={dog.imageAlt}
                    src={`data:image/jpeg;base64,${dog.photo}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{dog.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{dog.breed}</p>
                <button>Adopt</button>
                <button>Details</button>
              </div>
            ))}
          </div>
        </div>

        
    );
}