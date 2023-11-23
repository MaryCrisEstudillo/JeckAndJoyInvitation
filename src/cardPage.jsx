import hands from "./assets/hands.png"
import flowers from "./assets/flowers.png"
function CardPage () {
    return (
        <div className="h-screen w-screen bg-[white] flex flex-col">
        <div className="w-screen py-[30px] bg-[#0d5d82]">
        </div>
        <div className="min-h-screen relative min-w-[1700px] desktop:min-w-full laptop:w-screen">
             <div className="absolute w-screen mt-52 h-screen z-20">
                <div className="w-full h-[20%] text-center justify-center items-center">
                    <span className="font-light px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JACOB</span>
                    <span className="font-normal px-2 font-serif text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white">&</span>
                    <span className="font-light  px-2 font-serif text-3xl laptop:text-6xl desktop:6xl mobile:text-5xl text-white tracking-widest">JOY</span>
                    <p className="font-thin mt-5 md:mt-2 font-sans text-2xl laptop:text-4xl desktop:4xl mobile:text-xl text-white tracking-widest">PSALM 118:24</p>
                </div>
            </div>
            <img className="ml-[-40em] laptop:ml-[-30px] desktop:ml-[0px] tablet:ml-[-20em]" src={hands} alt="holding hands" />
        </div>
        {/* <div className="w-[50%] h-full mt-0 z-30 bg-[#0d5d82]">
            <div className="pl-40 py-20 text-left text-white">
                <p className="font-normal font-serif text-7xl mb-5">Wedding Details</p>
                    <div className="pl-4">  
                        <p className="font-normal text-2xl">Date</p>
                        <p className="font-light text-xl">January 8th. 2023</p>
                        <p className="font-light text-xl mb-3">2:00 PM - 5:00 PM</p>
                        <p className="font-normal text-2xl">Reception Location</p>
                        <p className="font-light text-xl mb-3">Gem&apos;s Hotel Antipolo City</p>
                        <p className="font-normal text-2xl">Attire</p>
                        <p className="font-light text-xl ">Formal</p>
                    </div>
            </div>
        </div> */}
        {/* <div className="w-full h-full flex laptop:flex-row desktop:flex-row tablet:flex-col mobile:flex-col z-30 bg-[#0d5d82]">
            <div className="w-[50%] pl-40 py-20 text-left text-white">
                <p className="font-normal font-serif text-7xl mb-5">Wedding Details</p>
                    <div className="pl-4">  
                        <p className="font-normal text-2xl">Date</p>
                        <p className="font-light text-xl">January 8th. 2023</p>
                        <p className="font-light text-xl mb-3">2:00 PM - 5:00 PM</p>
                        <p className="font-normal text-2xl">Reception Location</p>
                        <p className="font-light text-xl mb-3">Gem&apos;s Hotel Antipolo City</p>
                        <p className="font-normal text-2xl">Attire</p>
                        <p className="font-light text-xl ">Formal</p>
                    </div>
            </div>
                <div className="w-[50%] pl-40 py-20 text-white text-left bg-[pink]">
                    <p className="font-thin font-serif text-4xl pb-5">A Note from Bride and Groom</p>
                    <p className="font-light text-lg leading-8">In this celebration of love&apos;s sweet reign,
                            We invite you to join and share our joyous train.
                            Should you desire to gift us on this special day,
                            Cash presents would light our paths bright array.
                            </p>
                </div>
        </div> */}
        <div className="max-h-[250em] relative min-w-[1000px] ml-[-35em] laptop:ml-[0px] desktop:ml-[0px] tablet:ml-[-30em] bg-[white]">
             <img className="w-full h-full" src={flowers} alt="flowers" />
        </div>
      </div>
    )
}
export default CardPage;