'use client'

import { useState } from 'react'

export default function Carrer() {
    const [index, setIndex] = useState<number>(1)
    return (
        <section className='flex flex-col bg-primary gap-8 py-10'>
            <h1 className='text-5xl font-bold text-white text-center'>Career Progression</h1>
            <nav className='flex  flex-wrap gap-8 text-white'>
                <button
                    className={`p-4 ${index == 1 && 'border-b-2 border-white'} hover:border-b-2 hover:border-white	`}
                    onClick={() => setIndex(1)}>Junior Analyst</button>
                <button
                    className={`p-4 ${index == 2 && 'border-b-2 border-white'} hover:border-b-2 hover:border-white	`}
                    onClick={() => setIndex(2)}>Analyst</button>
                <button
                    className={`p-4 ${index == 3 && 'border-b-2 border-white'} hover:border-b-2 hover:border-white	`}
                    onClick={() => setIndex(3)}>Senior Analyst</button>
                <button
                    className={`p-4 ${index == 4 && 'border-b-2 border-white'} hover:border-b-2 hover:border-white	`}
                    onClick={() => setIndex(4)}>Manager</button>
            </nav>
            <span className='flex px-4'>
                {index == 1 && (
                    <div className='flex flex-col bg-white p-10 gap-4'>
                        <span className='text-3xl font-bold'>0 - 6 months</span>
                        <span className='text-lg font-medium'>You will start as a junior analyst living with others in training. This intense transformation period lasts approximately 6 months with the remuneration and perks listed above. At the end of this period, you&apos;ll go through a final interview to ensure you&apos;ve learned the fundamentals of data analysis. </span>
                    </div>
                )}
                {index == 2 && (
                    <div className='flex flex-col bg-white p-10 gap-4'>
                        <span className='text-3xl font-bold'>6 months - 2 years</span>
                        <span className='text-lg font-medium'>Once graduated, you’ll move into your own housing and continue working with Kelihi&apos;s team to enhance your skills. You&apos;ll continue to improve your English, technical, and business context skills and will be assigned to one or more clients and begin your career as a consultant.  </span>
                        <span className='text-lg font-medium'>Salary: R$6.000 to R$10.000 per month </span>
                    </div>
                )}
                {index == 3 && (
                    <div className='flex flex-col bg-white p-10 gap-4'>
                        <span className='text-3xl font-bold'>2 - 5 years</span>
                        <span className='text-lg font-medium'>By the time you reach senior analyst level, you’ll hold advanced analytics, client management, and problem solving skills. You’ll be able to complete the majority of client work without direct manager oversight and begin to manage other analysts and junior analysts. It will take 2-3 years to reach this level.</span>
                        <span className='text-lg font-medium'>Salary:  At least R$11.000 per month

                        </span>
                    </div>
                )}
                {index == 4 && (
                    <div className='flex flex-col bg-white p-10 gap-4'>
                        <span className='text-3xl font-bold'>5+ years</span>
                        <span className='text-lg font-medium'>Ultimately, our goal is for analysts to become managers -- this means they&apos;re able to manage client relationships, lead a team of junior analysts, analysts, and senior analysts, and help others to grow their own skillsets. We anticipate that junior analysts should be able to reach the manager level within approximately 5 years from beginning their training. Managers are paid a base salary in addition to a percentage of gross revenue from their team&apos;s managed book of business.</span>
                    </div>
                )}
            </span>
        </section>

    )
}