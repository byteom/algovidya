import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Facebook",
  "Apple",
  "Netflix",
  "Adobe",
  "Uber",
  "Twitter",
  "LinkedIn",
  "Airbnb",
  "Salesforce",
]

export default function CompanyWiseQuestionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Company Wise Questions
      </h1>

      <p className="text-center mb-8 text-lg text-gray-600 dark:text-gray-400">
        Practice questions frequently asked by top tech companies in their coding interviews.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Card key={company}>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-purple-600 dark:text-purple-300">{company}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Link href={`/questions?company=${company.toLowerCase()}`}>View Questions</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">
            Can&apos;t find your target company?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We&apos;re constantly updating our database with questions from various companies. If you don&apos;t see
            your target company, check out our general question sets or request for it to be added.
          </p>
          <Button className="w-full">Request Company Addition</Button>
        </CardContent>
      </Card>
    </div>
  )
}

