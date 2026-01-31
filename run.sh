#!/bin/bash

echo "🚀 Starting Ganpati Jyotish Full Stack App..."

# Start backend
echo "🔧 Starting FastAPI backend..."
cd backend
uvicorn main:app --reload &
BACKEND_PID=$!

# Wait a bit
sleep 2

# Start frontend
echo "⚛️ Starting React frontend..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Backend running on http://localhost:8000"
echo "✅ Frontend running on http://localhost:5173"
echo ""
echo "Press CTRL+C to stop both"

# Wait for both
wait $BACKEND_PID $FRONTEND_PID
