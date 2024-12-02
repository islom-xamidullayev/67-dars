export default function DropOff() {
    return (
      <>
      
        <div className="flex gap-3 mb-4">
          <img src="./public/mark.svg" alt="" />
          <span className="font-semibold text-[17px] ">Drop - Off</span>
        </div>
  
        <div className="flex gap-6  ">
          <div className="border-r-slate-700 border-r-[1px] pr-4">
            <p className="font-bold text-[17px]">Locations</p>
            <div className="flex gap-3">
              <p className="text-[#90A3BF]"> Select your city</p>
              <img src="./public/arrow-down.svg" alt="" />
            </div>
          </div>
  
          <div className="border-r-slate-700 border-r-[1px] pr-4">
            <p className="font-bold text-[17px]">Date</p>
            <div className="flex gap-3">
              <p className="text-[#90A3BF]"> Select your date</p>
              <img src="./public/arrow-down.svg" alt="" />
            </div>
          </div>
  
          <div className="">
            <p className="font-bold text-[17px]">Time</p>
            <div className="flex gap-3">
              <p className="text-[#90A3BF]"> Select your time</p>
              <img src="./public/arrow-down.svg" alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
  