
// bring the data

const bring_data=async()=>{
  
    const load_data=await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const convert_json=await load_data.json()
    
        convert_json.pets.slice(0,9).forEach((pet)=>{
        console.log("pet data",pet)
      
        const get_container=document.getElementById('main_container')
        const crete_div=document.createElement('div')
        crete_div.innerHTML=`
        <div class="card bg-base-100 w-80 shadow-xl my-hr h-auto">
                <figure  class="name_pic px-10 pt-10">
                  <img
                    src="${pet.image}"
                    alt="Shoes"
                    class="rounded-xl"
                    id="image_load"
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
                    onclick="addPicture(${pet.petId})"

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
                    id="button_disabled"
                    
                      onclick="show_count_down(),this.disabled=true"
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                    >
                      Adopt
                    </button>
                    <button
                     onclick="show_modal_details(${pet.petId})"
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
    loading(false); 

}


// call the function using time
setTimeout(()=>{
  bring_data()
},3000)

// show data bye sorted
const sorting_price=async()=>{
  const load_data=await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const convert_json=await load_data.json()
    let x=convert_json.pets
    const sorted=x.slice().sort((a,b) =>{
      return a.price - b.price
    })
    const get_container=document.getElementById('main_container')
    get_container.classList.add('hidden')
    const get_container2=document.getElementById('main_container_sort_details')
    get_container2.classList.remove("hidden")
    // hidden different animal part
    const different_information=document.getElementById("main_container_details")
    different_information.classList.add("hidden")
    // no data section hidden 
    const no_data_information=document.getElementById("no_data_found")
    no_data_information.classList.add("hidden")
    // after slicing
    sorted.slice(0,9).forEach((pet)=>{
      console.log("pet data",pet)
    
      const get_container=document.getElementById('main_container_sort_details')
      const crete_div=document.createElement('div')
      crete_div.innerHTML=`
      <div class="card bg-base-100 w-80 shadow-xl my-hr h-auto">
              <figure  class="name_pic px-10 pt-10">
                <img
                  src="${pet.image}"
                  alt="Shoes"
                  class="rounded-xl"
                  id="image_load"
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
                  onclick="addPicture(${pet.petId})"

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
                  id="button_disabled"
                  onclick="show_count_down(),this.disabled=true"
                    class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                  >
                    Adopt
                  </button>
                  <button
                   onclick="show_modal_details(${pet.petId})"
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


// show the button active Element of button
const buttons = document.querySelectorAll(".active");

buttons.forEach((item)=>{
  
  
  item.addEventListener("click",()=>{
    buttons.forEach((item2)=>item2.classList.remove("special"))
    item.classList.add('special')
   
  })
})

// bring the data bye id 
const bring_data_id=async(id)=>{
  utility_add("no_data_found")
  const load_data_id=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
  const json_load_data=await load_data_id.json()
  // console.log("Bring data by id",json_load_data.petData.category)
  bring_data_name(json_load_data.petData.category)
  
}
// bring data by name 
const bring_data_name=async(animal_name)=>{
  let x= animal_name.toLowerCase()
  const load_data_name=await fetch(`https://openapi.programming-hero.com/api/peddy/category/${x}`);
  const json_load_data_name=await load_data_name.json()
  // console.log("bring data by name",json_load_data_name)
  // hidden section
  const hidden_all=document.getElementById('main_container')
  hidden_all.classList.add("hidden")
  // remove the hidden section in main container
  const remove_hidden=document.getElementById("main_container_details")
  remove_hidden.innerHTML=''
  remove_hidden.classList.remove('hidden')
  // hidden the animal sort data 
  const hidden_sort_container=document.getElementById("main_container_sort_details")
  hidden_sort_container.classList.add("hidden")
  
  // run the for each function..............................................
  json_load_data_name.data.forEach(unique_animal_details=>{
    console.log("Data by name",unique_animal_details)
    
  const crete_element=document.createElement("div")
    // set the inner html of animal details 
    crete_element.innerHTML=`
    <div class="card bg-base-100 w-80 shadow-xl my-hr h-auto">
                <figure class=" px-10 pt-10">
                  <img
                    src="${unique_animal_details?.image}"
                    alt="Animal"
                    class="rounded-xl"
                     id="image_load"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="text-black font-bold text-left text-xl">
                  ${unique_animal_details?.pet_name?`${unique_animal_details?.pet_name}`:"Undefined"}</h2>
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
                    <p class="text-[#131313B3]">Breed:${unique_animal_details?.breed?`${unique_animal_details?.breed}`:"Undefined"}</p>
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
                    <p class="text-[#131313B3]">Birth:${unique_animal_details?.date_of_birth?`${unique_animal_details?.date_of_birth}`:"Undefined"} </p>
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
                    <p class="text-[#131313B3]">Gender:${unique_animal_details?.gender?`${unique_animal_details?.gender}`:"Undefined"} </p>
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
                    <p class="text-[#131313B3]">${unique_animal_details?.price?`${unique_animal_details?.price}`:"Undefined"}</p>
                  </div>
                </div>
                  <hr width="100%" />

                  <div class="card-actions">
                    <button
                     onclick="addPicture(${unique_animal_details.petId})"
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
                    id="button_disabled"
                      onclick="show_count_down(),this.disabled=true"
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                    >
                      Adopt
                    </button>
                    <button
                    onclick="show_modal_details(${unique_animal_details.petId})"
                     
                      class="btn btn-primary bg-white border border-[#0E7A8126] w-20 text-[#0E7A81] hover:text-white"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
    
    `
    // append the child 
    
    remove_hidden.appendChild(crete_element)
    
    

  })
  
  
  
  
}

// if no data found then 
function No_data_found(){
  console.log("hidden")
  const remove_hidden=document.getElementById("main_container_details")
  remove_hidden.classList.add('hidden')
  utility_add("main_container")
  utility_remove("no_data_found")
}

// add pic in another section  dynamic 

const addPicture=async(id_for_image)=>{
  console.log("Add image",id_for_image)
  const bring_load_data=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id_for_image}`)
  const convert=await bring_load_data.json()
  console.log(convert.petData)
  
  
  const image_container=document.getElementById("after_clicked_add_picture")
  const crete_div=document.createElement("div")
  const create_image=document.createElement("img")
  create_image.className="img-name"
  create_image.src=`${convert.petData.image}`
  crete_div.appendChild(create_image)
  image_container.appendChild(crete_div)
 
}

// show modal details 

const show_modal_details=async(load_modal)=>{
  const load_data=await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${load_modal}`)
    const convertData=await load_data.json()
  console.log(convertData)
  show_details.showModal()
  
  const bring_container=document.getElementById("container_modal")
  bring_container.innerHTML=''
  const create_div=document.createElement("div")
  create_div.innerHTML=`
  <div>
              <figure class="flex justify-center px-10 pt-10">
                <img
                  src="${convertData?.petData.image}"
                  alt="Animal"
                  class="rounded-xl w-full"
                  
                />
              </figure>
              <div class="card-body">
                <h2 class="text-black font-bold text-left text-xl">
                ${convertData?.petData.pet_name?`${convertData?.petData?.pet_name}`:"Undefined"}</h2>
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
                  <p class="text-[#131313B3]">Breed:${convertData?.petData?.breed?`${convertData?.petData?.breed}`:"Undefined"}</p>
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
                  <p class="text-[#131313B3]">Birth:${convertData?.petData?.date_of_birth?`${convertData?.petData?.date_of_birth}`:"Undefined"} </p>
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
                  <p class="text-[#131313B3]">Gender:${convertData?.petData?.gender?`${convertData?.petData?.gender}`:"Undefined"} </p>
                </div>
              </div>
              <!-- fourth -->
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
                  <p class="text-[#131313B3]">vaccinated_status:${convertData?.petData?.vaccinated_status
                    ?`${convertData?.petData?.vaccinated_status}`:"Undefined"} </p>
                </div>
              </div>
              <!-- five -->
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
                  <p class="text-[#131313B3]">price: ${convertData?.petData?.price?`${convertData?.petData?.price}`:"Undefined"}</p>
                </div>
              </div>
                <hr width="100%" />
                <p>
                Details Information: </br>
                ${convertData?.petData.pet_details}

                </p>

                
              </div>
            </div>
  
  `
  
  
  
  bring_container.appendChild(create_div)

}

function show_count_down(){
  my_modal_5.showModal()
  let y=3
  let count_box=document.getElementById("timer")
  let count=setInterval(count_decrement,1000)
  function count_decrement(){
    let x=y--;
    count_box.innerText=x
    if(y<0){
      clearInterval(count)
      const container_count_modal=document.getElementById("my_modal_5")
      container_count_modal.close()
    }


  }
 

}

function loading(isLOading){
  console.log("is data is loading",isLOading)
  const spinner=document.getElementById("spinner")
  if(isLOading){
    spinner.classList.remove("hidden")
    
  }else{
    spinner.classList.add("hidden")
  }
}



    


