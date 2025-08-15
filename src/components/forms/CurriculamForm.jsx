import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../../dataContext/DataContext";

const CurriculamForm = () => {

  const navigate = useNavigate();
  const { setCurriculam } = useContext(DataContext);

  const [data, setData] = useState({
    topic: "",
    goal: "",
    time: 60,
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
      navigate("user/curriculam");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <form className="rounded flex flex-col p-8 border  w-xl ">
        <label htmlFor="topic" className="mb-2">Enter Topic</label>
        <input
          className="border px-3 py-2 rounded mb-3"
          type="text"
          id="topic"
          name="topic"
          placeholder="Enter topic" 
          value={data.topic}
          onChange={(e) =>
              setData((prev) => ({ ...prev, topic: e.target.value }))
          }
          required
        />
        <label htmlFor="topic" className="mb-2">Enter Your Goal</label>
        <textarea
          row="5"
          cols="20"
          className="border px-3 py-2 rounded mb-3"
          type="text"
          id="goal"
          placeholder="Enter your goal"
          value={data.goal}
          onChange={(e) =>
              setData((prev) => ({ ...prev, goal: e.target.value }))
          }
          required
        />
        <label className="rounded px-3 py-2 mb-3">
          Select Your Daily Time :
          <select
            className="mx-3 px-4 py-3 border"
            name="time"
            id="hours"
            value={data.time}
            onChange={(e) =>
              setData((prev) => ({ ...prev, time: Number(e.target.value)}))
            }
          >
            <option value="60">1 Hour</option>
            <option value="300">5+ Hour</option>
            <option value="540">9+ Hour</option>
          </select>
        </label>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-purple-500 rounded-3xl py-3 px-2 text-xl font-semibold text-white"
        >
          
          Get Curriculam
        </button>
      </form>
    </div>
  );
};

export default CurriculamForm;
