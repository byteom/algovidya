import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Globe, Book, GitCommit } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const creators = [
  {
    name: "Om Singh",
    role: "Founder of AlgoVidya | B.Tech Student | DSA Enthusiast",
    bio: "Hi there! I'm Om Singh, a B.Tech student with a deep passion for Data Structures and Algorithms. I founded AlgoVidya to help fellow students and coding enthusiasts master DSA concepts in a fun and interactive way. My goal is to make the learning process as enjoyable and effective as possible.",
    github: "byteom",
    linkedin: "omsingh",
    email: "om.singh@example.com",
    image: "https://github.com/byteom.png",
    repos: 15,
    contributions: 500,
  },
  {
    name: "Vaishnavi Raj",
    role: "Co-founder of AlgoVidya | Full Stack Developer",
    bio: "Hello! I'm Vaishnavi Raj, a passionate full-stack developer and co-founder of AlgoVidya. With a strong background in web development and a love for creating innovative solutions, I've joined forces with Om to bring AlgoVidya to life. Together, we're committed to revolutionizing DSA learning for students worldwide.",
    github: "vaishnavirajj",
    linkedin: "vaishnaviraj",
    email: "vaishnavi.raj@algovidya.com",
    website: "https://algovidya.com",
    image: "https://github.com/vaishnavirajj.png",
    repos: 20,
    contributions: 750,
  },
]

export default function CreatorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Meet the Creators
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {creators.map((creator) => (
          <Card
            key={creator.name}
            className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900"
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Image
                  src={creator.image || "/placeholder.svg"}
                  alt={creator.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-300">
                    {creator.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{creator.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{creator.bio}</p>
              <div className="flex justify-start space-x-4 mb-4">
                <Link href={`https://github.com/${creator.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
                </Link>
                <Link href={`https://linkedin.com/in/${creator.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
                </Link>
                <Link href={`mailto:${creator.email}`}>
                  <Mail className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
                </Link>
                {creator.website && (
                  <Link href={creator.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
                  </Link>
                )}
              </div>
              <div className="flex justify-start space-x-4">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm">{creator.repos} repositories</span>
                </div>
                <div className="flex items-center">
                  <GitCommit className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm">{creator.contributions} contributions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">About AlgoVidya</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            AlgoVidya is an innovative educational platform founded by Om Singh and co-founded by Vaishnavi Raj. Our
            mission is to revolutionize the way students learn and master Data Structures and Algorithms. As our
            flagship project, we&apos;re committed to providing interactive and effective learning solutions for
            aspiring developers and computer science enthusiasts.
          </p>
          <p>
            At AlgoVidya, we combine our passion for technology, education, and problem-solving to create tools and
            platforms that empower the next generation of tech leaders. Our team&apos;s diverse skills in full-stack
            development, DSA expertise, and educational content creation allow us to deliver a unique and comprehensive
            learning experience.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-300">Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            With AlgoVidya and future ByteOM projects, we aim to bridge the gap between theoretical knowledge and
            practical application in the world of computer science. Our vision is to create a global community of
            skilled developers who are well-equipped to tackle real-world challenges and drive innovation in the tech
            industry.
          </p>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">Have questions or want to collaborate? We&apos;d love to hear from you!</p>
        <Link href="mailto:contact@algovidya.com">
          <Button className="mt-4">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}

