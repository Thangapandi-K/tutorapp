import React, { useContext } from 'react'
import { DataContext } from '../dataContext/DataContext'

const CurriculamPage = () => {

    const { curriculam } = useContext(DataContext);


const dailyPlan = curriculam.days.map((plan) => <div className='mb-3 border px-3 py-2'>
    <p className='font-semibold text-lg mb-2 underline underline-offset-2'>Day {plan.day_number} :</p>
    <p className='text-base mb-2'><span className='font-semibold'>Sub Topic :</span>{plan.subtopic_title}</p>
    <p className=''><span className='font-semibold block mb-2'>Content : </span>{plan.content}</p>
</div>)

  return (
    <div className='px-5 mt-5 mx-5'>
        <p className='text-xl font-bold mb-4'><span className='font-semibold'>Topic : </span>{curriculam.topic_name.toUpperCase()}</p>
        <p className='text-base my-2 font-bold mb-2'><span className='font-semibold'>Daily Time : </span>{curriculam.daily_time_minutes / 60} Mins</p>
        <p className='text-lg font-bold my-3'><span className='font-semibold'>Your Goal : </span>{curriculam.end_goal}</p>
        <p className='text-lg mx-2'>{dailyPlan}</p>

    </div>
  )
}

export default CurriculamPage