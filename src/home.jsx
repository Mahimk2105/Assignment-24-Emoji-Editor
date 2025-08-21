import React, { useState } from "react";

const emojis = [
  "😀", "😎", "😍", "🤔", "😭", "😡", "🥳", "🤩", "😚", "🎈", "🚀", "🌟", "👍","🌙","🌈"];

const bgColors = [
  "bg-white", "bg-yellow-100", "bg-pink-100",
  "bg-blue-100", "bg-green-100", "bg-gray-200", "bg-red-100"
];

// Randomly assign rotation class for hover
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

      {/* Emoji Display Box */}
      <div
        className={`${bg} rounded-2xl flex items-center justify-center shadow-xl border transition-transform hover:scale-105`}
        style={{ width: size + 60, height: size + 60 }}
      >
        <span style={{ fontSize: size }}>{emoji}</span>
      </div>

      {/* Emoji Picker */}
      <h2 className="mt-8 text-xl font-semibold text-gray-700">Pick an Emoji</h2>
      <div className="mt-4 grid grid-cols-4 gap-4 max-w-md">
        {emojis.map((e, index) => (
          <div
            key={index}
            onClick={() => setEmoji(e)}
            className={`bg-white p-6 rounded-xl shadow-md flex items-center justify-center text-4xl cursor-pointer transition-transform hover:scale-110 hover:shadow-2xl ${getRandomRotation()}`}
          >
            {e}
          </div>
        ))}
      </div>

      {/* Background Picker */}
      <h2 className="mt-8 text-xl font-semibold text-gray-700">Background</h2>
      <div className="mt-4 flex gap-3 flex-wrap justify-center">
        {bgColors.map((color) => (
          <button
            key={color}
            onClick={() => setBg(color)}
            className={`${color} w-10 h-10 rounded-full border shadow hover:scale-110 transition-transform`}
          />
        ))}
      </div>

      {/* Size Slider */}
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
