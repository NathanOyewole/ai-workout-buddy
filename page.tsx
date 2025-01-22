import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="p-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">AI Workout Buddy</h1>
          <div>
            <Link href="/login">
              <Button variant="outline" className="mr-2">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Your AI-Powered Personal Trainer</h2>
        <p className="text-xl mb-8">Perfect your form, track your progress, and achieve your fitness goals with real-time AI feedback.</p>
        <Button size="lg" className="mb-12">Start Your Free Trial</Button>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Real-time Form Tracking</h3>
            <p>Our AI uses your phone camera to analyze and correct your form in real-time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Customizable Workouts</h3>
            <p>Tailored plans based on your goals: strength, cardio, or flexibility.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
            <p>Track your improvements and stay motivated with detailed analytics.</p>
          </div>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Who It's For</h3>
          <ul className="text-left list-disc list-inside">
            <li>Fitness enthusiasts looking to perfect their technique</li>
            <li>Beginners seeking affordable, personalized guidance</li>
            <li>Anyone wanting the benefits of a personal trainer at a fraction of the cost</li>
          </ul>
        </div>
      </main>
      <footer className="text-center p-6">
        <p className="font-bold">Only $30/month - Cancel anytime</p>
        <p className="mt-2">Experience the future of fitness training today!</p>
      </footer>
    </div>
  )
}

