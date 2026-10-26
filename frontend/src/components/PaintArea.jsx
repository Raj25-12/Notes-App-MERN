import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const PaintArea = () => {
  const [isEraser, setIsEraser] = useState(false);

  const [paintColor, setPaintColor] = useState(
    localStorage.getItem("paintColor") || "#ffffff"
  );

  const [paintWidth, setPaintWidth] = useState(
    Number(localStorage.getItem("paintWidth")) || 2
  );

  const [paintTool, setPaintTool] = useState(
    localStorage.getItem("paintTool") || "pen"
  );

  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  const accountId = localStorage.getItem("accountId");

  const handleClick = async () => {
    try {
      const canvas = canvasRef.current;

      const canvasData = canvas.toDataURL("image/png");

      const obj = {
        canvasdata: canvasData,
        accountId: accountId,
      };

      const response = await axios.post(
        "https://notes-app-mern-backend-hyxg.onrender.com/api/v3/createpaint",
        obj
      );

      console.log(response.data);

      toast.success("Created successfully");

      resetCanvas();
    } catch (error) {
      console.log(
        "SAVE ERROR:",
        error.response?.data || error
      );

      toast.error("Failed to save painting");
    }
  };

  useEffect(() => {
    const selectedTool =
      localStorage.getItem("paintTool") || "pen";

    const selectedColor =
      localStorage.getItem("paintColor") || "#ffffff";

    const selectedWidth =
      Number(localStorage.getItem("paintWidth")) || 2;

    setPaintTool(selectedTool);
    setPaintColor(selectedColor);
    setPaintWidth(selectedWidth);

    if (selectedTool === "eraser") {
      setIsEraser(true);
    } else {
      setIsEraser(false);
    }
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    isDrawing.current = true;

    ctx.beginPath();

    ctx.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
  };

  const draw = (e) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const currentTool = isEraser ? "eraser" : paintTool;

    if (currentTool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = paintWidth;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = paintColor;
      ctx.lineWidth = paintWidth;
    }

    ctx.lineCap = "round";

    ctx.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  };

  const toggleEraser = () => {
    setIsEraser((prev) => !prev);
  };

  return (
    <main className="bg-[#ede8dc] px-6 pb-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-semibold text-cyan-950 mb-4 border-b border-[#3a3f47] pb-2">
          Paint Area
        </h1>

        <div
          className="min-h-[650px] p-8 md:p-12 shadow-xl"
          style={{
            background: "#14171c",
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 36px, #2a2e35 36px, #2a2e35 37px)",
          }}
        >

          <div className="w-full min-h-[480px]">

            <div className="mb-4 flex justify-between items-center">

              <div className="flex items-center gap-3">

                <button
                  onClick={toggleEraser}
                  className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer"
                >
                  {isEraser ? "Pen" : "Eraser"}
                </button>

                <div
                  className="px-4 py-2 rounded-lg text-white text-sm flex items-center gap-2"
                  style={{
                    background:
                      isEraser
                        ? "#555"
                        : paintColor,
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-full bg-white border"
                  ></span>

                  {isEraser
                    ? "Eraser"
                    : `${paintTool} • ${paintWidth}px`}
                </div>

              </div>

              <button
                onClick={resetCanvas}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
              >
                Reset
              </button>

            </div>

            <canvas
              ref={canvasRef}
              width={1000}
              height={800}
              className="w-full bg-black cursor-crosshair"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />

          </div>

          <button
            onClick={handleClick}
            className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer mt-4"
          >
            Save
          </button>

        </div>
      </div>
    </main>
  );
};

export default PaintArea;