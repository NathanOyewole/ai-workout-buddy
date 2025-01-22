import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">AI Workout Buddy Dashboard</h1>
          <Link href="/">
            <Button variant="outline">Logout</Button>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Weekly Goal: 4 workouts</p>
                <Progress value={75} className="mb-2" />
                <p>Great job! You've completed 3 out of 4 workouts this week.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Form Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Squat Form Accuracy</p>
                <Progress value={85} className="mb-2" />
                <p>Your squat form has improved by 10% since last week!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Next Workout</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Upper Body Strength - 45 minutes</p>
                <ul className="list-disc list-inside mt-2 mb-4">
                  <li>Pushups: 3 sets of 10</li>
                  <li>Dumbbell Rows: 3 sets of 12</li>
                  <li>Shoulder Press: 3 sets of 10</li>
                </ul>
                <Link href="/workout">
                  <Button>Start Workout</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subscription Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Your next payment of $30 is due on July 1, 2023.</p>
                <Button variant="outline">Manage Subscription</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

