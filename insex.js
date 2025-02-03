console.log('javaScript part start')
// bring the data
const bring_data=async()=>{
    const load_data=await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const convert_json=await load_data.json()
    
    
    convert_json.pets.slice(0,9).forEach((pet)=>{
        console.log(pet)
        const get_container=document.getElementById('main_container')
        const crete_div=document.createElement('div')
        crete_div.innerHTML=`
        <div class="card bg-base-100 w-80 shadow-xl my-hr h-auto">
                <figure class="px-10 pt-10">
                  <img
                    src="${pet.image}"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="text-black font-bold text-left text-xl">${pet?.pet_name?`${pet.pet_name}` :"No Information Available"}</h2>
              <!-- first  card -->
                  <div class="flex items-center gap-1">
                  <div>
                    <img
                      class="w-9"
                      src="images/fox_1984462.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <p class="text-[#131313B3]">Breed:${pet.breed?`${pet.breed}`:"No Information Available"}</p>
                  </div>
                </div>
                <!-- second card -->
                <div class="flex items-center gap-1">
                  <div>
                    <img
                      class="w-9"
                      src="images/calendar_747310.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <p class="text-[#131313B3]">Birth:${pet?.date_of_birth?`${pet?.date_of_birth}`:"No Information Available"}</p>
                  </div>
                </div>
                <!-- Third -->
                <div class="flex items-center gap-1">
                  <div>
                    <img
                      class="w-9"
                      src="images/icons8-gender-50.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <p class="text-[#131313B3]">Gender:${pet?.gender?`${pet?.gender}`:'No Information Available'}</p>
                  </div>
                </div>
                <!-- fourth -->
                <div class="flex items-center gap-1">
                  <div>
                    <img
                      class="w-9"
                      src="images/icons8-price.gif"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <p class="text-[#131313B3]">price:${pet?.price?`${pet?.price}`:"No Information Available"}</p>
                  </div>
                </div>
                  <hr width="100%" />

                  <div class="card-actions">
                    <button
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81]"
                    >
                      <img
                        class="w-7"
                        src="images/like_3415644.png"
                        alt=""
                        srcset=""
                      />
                    </button>
                    <button
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                    >
                      Adopt
                    </button>
                    <button
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
        
        `
        get_container.appendChild(crete_div)
        
    })
}
// call the function
bring_data()

// load data bye id 
const bring_load_data_id=async(id)=>{
  const data_category=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
  const data_category_convert_json=await data_category.json()
  let name_category= data_category_convert_json.petData.category
  console.log(name_category)

}
