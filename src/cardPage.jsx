import "./cardPage.css"
import hands from "./assets/hands.png"
import flowers from "./assets/flowers.png"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

function CardPage () {
    const [daysCount, setdays] = useState(0);
    const [hoursCount, setHours] = useState(0);
    const [minutesCount, setMinutes] = useState(0);
    const [secondsCount, setSeconds] = useState(0);

    let interval = useRef();

    const timer = () => {
        const countDown = new Date('January 8, 2024 00:00:00').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDown - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const convertDays = days < 10? `${0}${days}` : days;
            const convertHours = hours < 10? `${0}${hours}` : hours;
            const convertMinutes = minutes < 10? `${0}${minutes}` : minutes;
            const convertSeconds = seconds < 10? `${0}${seconds}` : seconds;

            if (distance < 0){
                clearInterval(interval.current);
            } else {
                setdays(convertDays);
                setHours(convertHours);
                setMinutes(convertMinutes);
                setSeconds(convertSeconds);
            }
        }, 1000)
    };

    useEffect(()=> {
        timer();
        return () => {
            clearInterval(interval.current);
        }
    });


    console.log({"days": daysCount, "hours": hoursCount, "minutes": minutesCount, "seconds": secondsCount });
    return (
        <div className="h-screen relative w-screen flex flex-col">
            <img className="w-screen min-w-[1500px] z-0 fixed object-cover mt-[-100px]" src={flowers} alt="flowers" />
            {/* <div className="flex w-screen justify-center gap-1 font-sans text-[1.3em] text-[white] font-extralight z-40 py-[10px] py-3">
                        <span className="drop-shadow-lg bg-[#0d5d82] opacity-95 py-3 text-center rounded-md min-w-[70px] w-[100px]">{daysCount}<p className="text-[.4em]">DAYS</p></span>
                        <span className="drop-shadow-lg bg-[#0d5d82] opacity-95 py-3 text-center rounded-md w-[100px] min-w-[70px]">{hoursCount}<p className="text-[.4em]">HOURS</p></span>
                        <span className="drop-shadow-lg bg-[#0d5d82] opacity-95 py-3 text-center rounded-md w-[100px] min-w-[70px]">{minutesCount}<p className="text-[.4em]">MIN</p></span>
            </div> */}
            <div className="z-30 relative min-w-[1700px] desktop:min-w-full laptop:w-screen">
                <div className="absolute w-screen mt-10 z-20">
                    <div className="flex flex-col w-screen mt-[-40px] items-center font-sans text-[white] mb-20 font-extrabold z-40 py-[10px] py-3">
                        <div className="flex flex-col laptop:flex-row items-center justify-center ">
                        <span className="drop-shadow-lg opacity-30 py-3 text-center laptop:text-[12em] tablet:text-[9em] mobile:text-[7em] text-[12em] smallMobile:text-[4em]  rounded-md">{daysCount}</span>
                        <span className="font-light mt-[-30px] opacity-30">DAYS</span>
                        <span className="drop-shadow-lg opacity-30 py-3 text-center laptop:text-[12em] tablet:text-[9em] mobile:text-[7em] text-[12em] smallMobile:text-[4em] rounded-md">{hoursCount}</span>
                        <span className="font-light mt-[-30px] opacity-30">HOURS</span>
                        <span className="drop-shadow-lg opacity-30 py-3 text-center laptop:text-[12em] tablet:text-[9em] mobile:text-[7em] text-[12em] smallMobile:text-[4em] rounded-md">{minutesCount}</span>
                        <span className="font-light mt-[-30px] opacity-30">MIN</span>
                       </div>
                        {/* <div className="flex gap-[19em] mt-[-55px]">
                        <span className="font-light">DAYS</span>
                        <span className="font-light">HOURS</span>
                        <span className="font-light">MIN</span>
                        </div> */}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y:"-200px"}}
                        whileInView={{ opacity: 1 , y:0}}
                        transition={{
                        duration: 3,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="w-full h-[20%] text-center justify-center items-center">
                        <span className="font-bold px-2 font-sans text-5xl text-white tracking-widest">JACOB</span>
                        <span className="font-light px-2 font-sans text-xl text-white">&</span>
                        <span className="font-bold  px-2 font-sans text-5xl text-white tracking-widest">JOY</span>
                        <motion.p
                        initial={{ opacity: 0,}}
                        whileInView={{ opacity: 1,}}
                        transition={{
                        duration: 3,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                        className="font-light mt-5 md:mt-2 font-sans text-2xl text-white tracking-widest">PSALM 118:24</motion.p>
                    </motion.div>
                </div>
                <img className="z-10 ml-[-40em] laptop:ml-[-30px] desktop:ml-[0px] tablet:ml-[-20em]" src={hands} alt="holding hands" />
            </div>
            <div className="flex w-full flex-col smallMobile:gap-32 laptop:gap-0 tablet:gap-0">
                <div className="flex grow z-30 justify-start">
                <motion.div  
                  initial={{ opacity: 0, y:"-100px"}}
                  whileInView={{ opacity: 1, y:0}}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                className={`flex min-w-[50%] laptop:min-w-[50%] tablet:min-w-[50%] smallMobile:min-w-[100%] flex-col text-center items-center text-[white] bg-[#0d5d82] p-[5%]`} >
                            <p className="font-bold font-sans text-6xl opacity-30 mb-5">Wedding Details</p>
                            <p className="font-bold text-2xl opacity-50">Date</p>
                            <p className="font-light text-xl">January 8th. 2023</p>
                            <p className="font-light text-xl mb-3">2:00 PM - 5:00 PM</p> 
                            <p className="font-bold text-2xl opacity-50">Reception Location</p>
                            <p className="font-light text-xl mb-3">Gem&apos;s Hotel Antipolo City</p>
                </motion.div>
                </div>

                <div 
                className="flex grow z-30 justify-end">
                <motion.div 
                   initial={{ opacity: 0, y:"100px"}}
                whileInView={{ opacity: 1, y:0}}
                transition={{
                     duration: 2,
                     delay: 0.5,
                     ease: [0, 0.71, 0.2, 1.01]
                    }}
                className="flex min-w-[50%] pb-10 laptop:min-w-[50%] tablet:min-w-[50%] smallMobile:min-w-[100%] flex-col text-center items-center text-white bg-[#0d5d82] mobile:px-[15%] smallMobile:px-[15%] p-[5%] laptop:px-p-[5%] tablet:px-[5%]">
                            <p className="font-bold font-sans text-6xl mb-5 opacity-30">Guests Attire</p>
                            <p className="font-light text-xl pb-10">Formal</p>
                            <p className="font-bold text-2xl opacity-50">Color Motif</p>
                            <div className="flex flex-row gap-2 pt-5">
                                <div className="h-[40px] w-[40px] rounded-full bg-[#a66869]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#c5adad]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#e0e1dc]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#aba7a8]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#807c7d]" />
                                <div className="h-[40px] w-[40px] rounded-full bg-[#80655c]" />
                            </div>
                </motion.div>
                </div>
            </div>
            <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                         duration: 2.5,
                         delay: 0.2,
                         ease: [0, 0.71, 0.2, 1.01]
                        }}
             className="flex w-full flex-col grow z-30 min-w-[50%] laptop:mt-0 tablet:mt-0 text-center items-center text-white bg-[#1b3544] p-[5%] mobile:mt-32 smallMobile:mt-32">
            <p className="font-bold font-sans text-4xl pb-5 opacity-30">A Note from Bride and Groom</p>
                    <p className="w-[80vw] font-light text-lg laptop:text-center tablet:text-center text-center mobile:text-justify smallMobile:text-justify leading-8 opacity-75">In this celebration of love&apos;s sweet reign,
                            We invite you to join and share our joyous train.
                            Should you desire to gift us on this special day,
                            Cash presents would light our paths bright array.
                            </p>
                            <p className="mt-5 font-light text-lg leading-8 opacity-75">
                            Gcash: 09353111839 / 09227374929
                            </p>
            </motion.div>
        </div>
    )
}
export default CardPage;