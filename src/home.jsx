import React, { useState } from "react";

const emojis = [
  "😀", "😎", "😍", "🤔", "😭", "😡", "🥳", "🤩", "😚", "🎈", "🚀", "🌟", "👍","🌙","🌈"
];

const bgColors = [
  "bg-gradient-to-br from-pink-200 to-yellow-200",
  "bg-gradient-to-br from-blue-200 to-purple-200",
  "bg-gradient-to-br from-green-200 to-teal-100",
  "bg-gradient-to-br from-gray-200 to-gray-400",
  "bg-gradient-to-br from-red-200 to-pink-300",
  "bg-gradient-to-br from-yellow-200 to-green-200"
];
const sizes = [
  "w-32 h-32",
  "w-40 h-40",
  "w-48 h-48",
  "w-56 h-56",
  "w-64 h-64"
];

const getRandomRotation = () =>
  Math.random() > 0.5 ? "hover:rotate-6" : "hover:-rotate-6";

export default function App() {
  const [emoji, setEmoji] = useState("😀");
  const [bg, setBg] = useState("bg-white");
  const [size, setSize] = useState(64);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-blue-200 p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 drop-shadow-lg">
         Moodify 💫🙂‍↔️  
      </h1>

      <div
        className={`${bg} rounded-2xl flex items-center justify-center shadow-xl border transition-transform hover:scale-105`}
        style={{ width: size + 60, height: size + 60 }}
      >
        <span style={{ fontSize: size }}>{emoji}</span>
      </div>

      <h2 className="mt-8 text-xl font-semibold text-gray-700">Pick an Emoji</h2>
      <div className="mt-4 grid grid-cols-5 gap-3 max-w-md">
        {emojis.map((e, index) => (

          <div
            key={index}
            onClick={() => setEmoji(e)}
            className={`bg-white p-3 rounded-lg shadow-md flex items-center justify-center text-2xl cursor-pointer transition-transform hover:scale-125 hover:-translate-y-1 hover:shadow-xl ${getRandomRotation()}`}
          >
            {e}
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-semibold text-gray-700">Background</h2>
      <div className="mt-4 flex gap-3 flex-wrap justify-center">
        {bgColors.map((color) => (
          <button
            key={color}
            onClick={() => setBg(color)}
            className={`${color} w-8 h-8 rounded-full border shadow hover:scale-110 transition-transform`}
          />
        ))}
      </div>

      <h2 className="mt-8 pt-3 text-xl font-semibold text-gray-700">Size</h2>
      <div className="mt-8 flex items-center gap-3">
        <label className="text-lg font-medium">Size:</label>
        <input
          type="range"
          min="32"
          max="128"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-48 accent-blue-500"
        />
      </div>
    </div>
  );
}
