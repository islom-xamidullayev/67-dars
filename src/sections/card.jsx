import IconCheckboxes from "./heart";

export default function Card({ title, img
    , price, rating, category}) {
   return (
     <div className="card ">
        <div className="flex justify-between">
               <h3 className="text-[28px] font-semibold ">{title}</h3>  <IconCheckboxes /> 
        
        </div>
         <p>{category}</p>
       <img className="my-20 w-[100%]" src={img} alt="" />
       <div className="card__text">
         
         <div className="flex gap-4">
          <div className="text-[#90A3BF] flex gap-2">
            <img className="w-6 h-6" src="./public/gas-station.svg" alt="bor edi" />
            <p>70L</p>

          </div>

          <div className="text-[#90A3BF] flex gap-2">
            <img className="w-6 h-6" src="./public/car.svg" alt="bor edi" />
            <p>Manual</p>

          </div> 
          
           <div className="text-[#90A3BF] flex gap-2">
            <img className="w-6 h-6" src="./public/profile-2user.svg" alt="bor edi" />
            <p>4 People</p>

          </div>

         </div>

        <div className="flex gap-3 mt-7 items-center justify-between" > 
              <h4 className="py-3 text-[24px] font-medium ">${price}/ <span className="text-[#90A3BF]">day</span></h4> 
        <button className="bg-[#3563E9] py-[8px] px-[20px] text-[#fff] rounded-lg">Rent Now</button>

        </div>
    
        <p className="text-[24px] text-[#037203] font-medium">Rating: ⭐ {rating}</p>
     </div>
     </div>
   );
 }