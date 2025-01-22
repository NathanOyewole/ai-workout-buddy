'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Workout() {
  const [currentExercise, setCurrentExercise] = useState('Squats')
  const [repCount, setRepCount] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [formAccuracy, setFormAccuracy] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRepCount(prev => (prev < 10 ? prev + 1 : prev))
      setFormAccuracy(Math.floor(Math.random() * 30) + 70) // Simulating form accuracy between 70-100%
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (repCount === 3) {
      setFeedback('Great form! Keep your back straight.')
    } else if (repCount === 7) {
      setFeedback("Try to go a bit lower on your squat. You've got this!")
    }
  }, [repCount])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI-Powered Workout Session</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{currentExercise}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-300 mb-4 flex items-center justify-center">
                <p className="text-gray-600">Camera Feed / AI Analysis</p>
              </div>
              <Progress value={(repCount / 10) * 100} className="mb-2" />
              <p className="text-lg mb-4">Reps: {repCount} / 10</p>
              {feedback && (
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
                  <p>{feedback}</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Real-time Form Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-2">Form Accuracy</p>
                <Progress value={formAccuracy} className="mb-2" />
                <p>{formAccuracy}% accurate</p>
              </div>
              <div className="space-y-2">
                <p>Key Points:</p>
                <ul className="list-disc list-inside">
                  <li>Keep your back straight</li>
                  <li>Knees in line with toes</li>
                  <li>Lower to 90 degrees</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Button size="lg">End Workout</Button>
        </div>
      </main>
    </div>
  )
}

