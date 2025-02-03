console.log('javaScript part start')
const bring_data=async()=>{
    const load_data=await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const convert_json=await load_data.json()
    convert_json.pets.slice(0,3).forEach((pet)=>{
        console.log(pet)
        const get_container=document.getElementById('main_container')
        const crete_div=document.createElement('div')
        crete_div.innerHTML=`
        <div class="card bg-base-100 w-80 shadow-xl my-hr h-auto">
                <figure class="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
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