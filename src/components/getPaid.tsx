import Link from 'next/link'
import { Calendar} from 'lucide-react'

export default function GetPaid() {
    return (
        <section className='flex flex-col h-full min-h-screen  justify-between lg:w-1/2'>
            <span>
                <h1 className='font-bold  text-black text-5xl  '>
                    Get Paid to
                </h1>
                <br />
                <h1 className='font-bold  text-black text-5xl  '>Change Your Life</h1>
            </span>

            <h2 className='text-xl font-bold'>
                Kelihi pays low-income Brazilians to become data analysts.
                Why? Because opportunities should be for everyone.
            </h2>
            <p className='text-lg font-medium'>Next Cohort: Pinheiros, São Paulo</p>
            <span className='flex gap-2'>
                <Calendar />
                <p className='text-lg font-medium'> Starting October 7, 2024</p>
            </span>

            <Link href='/pt-BR'>
                <button className='bg-primary p-3 uppercase text-white min-w-48'>
                    APPLY NOW
                </button>
            </Link>
            <Link href='/pt-BR'>
                <button className='bg-primary p-3 uppercase text-white min-w-48'>
                    REFER A FRIEND
                </button>
            </Link>
        </section>
    )
}