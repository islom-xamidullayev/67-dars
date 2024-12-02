export default function Hero() {
    return (
        <>
            <div className="bg-[#54A6FF] w-[640px] text-[#fff] mt-9 pl-6 pt-6 rounded-[12px]">
                <h1 className="text-[32px] font-semibold"> The Best Platform <br />for Car Rental</h1>
           <br />
                <p  className="">Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</p>
           <br />
                <button className="bg-[#3563E9] py-[10px] px-[20px] rounded-lg">Rental Car</button>
                <img className="ml-[70px]" src="./public/hero.svg" alt="rr" />
                
            </div>
        </>
    );
}
