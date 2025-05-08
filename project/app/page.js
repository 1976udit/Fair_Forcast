"use client"
import Image from "next/image";
import React from "react";

export default function Home() {
  const [pickup, setPickup] = React.useState("");
  const [dropoff, setDropoff] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomValue = Math.floor(Math.random() * (250 - 130 + 1)) + 130;
    setOutput(randomValue);
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/5647638/pexels-photo-5647638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-white text-center drop-shadow">Fair Forcast</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Pickup Location"
            className="w-full px-4 py-2 border border-white/40 bg-white/30 text-white placeholder-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/40 transition"
          />
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="DropOff Location"
            className="w-full px-4 py-2 border border-white/40 bg-white/30 text-white placeholder-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/40 transition"
          />
          <button
            type="submit"
            className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-2 rounded-xl backdrop-blur-md transition"
          >
            Submit
          </button>
        </form>
        {output && (
          <div className="mt-6 text-center text-white font-medium drop-shadow">
            Estimated value: &#8377; {output}
          </div>
        )}
      </div>
    </div>
  );
}
