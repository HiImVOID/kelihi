import Image from 'next/image'
import Photo from '@/../../src/public/assets/photo2.webp'
import { DollarSign, Utensils, House, Laptop } from 'lucide-react'


export default function Receive() {
    return (
        <section className='flex flex-col items-center md:px-20 w-full gap-20 text-slate-600'>
            <div className='flex flex-col items-center justify-center gap-4 '>
                <h1 className='text-5xl font-bold text-primary text-center'>
                    What You'll Receive
                </h1>
                <div className='flex flex-col items-center gap-4 md:px-20'>
                    <p className='text-lg font-semibold text-center'>Kelihi's mission is to reduce poverty by developing low-income individuals to high-income careers. Our first program is to train low-income Brazilians in the data analytics field. In order to do this successfully, we aim to reduce the barriers to entry that typically prevent low-income people from being able to enter these careers. </p>
                    <p className='text-lg font-semibold text-center'>In other words, we work to ensure you can focus fully on learning rather than on paying bills during your training program. </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-between w-full  items-center'>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='flex gap-2 items-center'>
                        <DollarSign size={35} color='#FAC51C' />
                        <p className=' flex flex-wrap gap-2 items-center text-lg font-semibold text-start'> Monthly salary: R$2.000 + Bonus of up to R$4.000 during the program</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Utensils color='#FAC51C' />
                        <p className=' flex gap-2 items-center text-lg font-semibold text-center'>Monthly food benefit: R$650</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <House color='#FAC51C' />
                        <p className=' flex gap-2 items-center text-lg font-semibold text-center'>Monthly food benefit: R$650</p>
                    </div>
                    <div className='flex gap-2 items-center'>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <Laptop color='#FAC51C' />
                        <p className=' flex gap-2 items-center text-lg font-semibold text-center'> Work laptop and related accessories</p>
                    </div>
                </div>
                <Image
                    src={Photo}
                    widht='280'
                    height='220' />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center bg-slate-300 w-full p-8 rounded-lg gap-4 text-black'>
                <div className='md:w-2/3'>
                    <span className='text-2xl font-bold '>
                        This is just the beginning.
                    </span>
                    <p className='text-xl font-semibold'>We've mapped out your progression (along with timeline and salary expectations for the next 5+ years).</p>
                </div>
                <button className='bg-white rounded-full p-4 font-medium text-lg text-black hover:bg-primary hover:text-white'>See Progression</button>
            </div>
        </section>
    )
}