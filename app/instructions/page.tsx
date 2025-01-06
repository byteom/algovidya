import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InstructionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">How to Use This Platform</h1>
      
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-4 space-y-4">
              <li>Choose a question set that matches your preparation level:
                <ul className="list-disc pl-8 mt-2">
                  <li>450 DSA Questions - Complete preparation</li>
                  <li>300 DSA Questions - Focused interview preparation</li>
                  <li>150 DSA Questions - Quick revision</li>
                  <li>100 DSA Questions - Essential problems</li>
                  <li>75 DSA Questions - Basic concepts</li>
                </ul>
              </li>
              <li>Track your progress:
                <ul className="list-disc pl-8 mt-2">
                  <li>Mark questions as complete when you solve them</li>
                  <li>Your progress is automatically saved</li>
                  <li>Use filters to find specific types of questions</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-4">
              <li>
                <strong>Multiple Solutions:</strong> Each question includes:
                <ul className="list-disc pl-8 mt-2">
                  <li>Written explanations</li>
                  <li>Code solutions in C++, Java, and JavaScript</li>
                  <li>Video explanations in multiple languages</li>
                </ul>
              </li>
              <li>
                <strong>Company Tags:</strong> See which companies frequently ask each question
              </li>
              <li>
                <strong>Difficulty Levels:</strong> Questions are marked as Easy, Medium, or Hard
              </li>
              <li>
                <strong>Progress Tracking:</strong> Your progress is saved locally
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips for Success</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-4">
              <li>Solve questions in order of difficulty (Easy → Medium → Hard)</li>
              <li>Practice each concept with multiple similar problems</li>
              <li>Review solutions after attempting a problem</li>
              <li>Revisit completed questions periodically</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

