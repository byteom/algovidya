import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgressDashboard } from "@/components/progress-dashboard";
import { QuestionRecommender } from "@/components/question-recommender";
import { DataManagement } from "@/components/data-management";
import { WarningModal } from "@/components/warning-modal";
import { DailyChallenge } from "@/components/daily-challenge";
import { Leaderboard } from "@/components/leaderboard";
import {
  ArrowRight,
  Brain,
  Code2,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedCard } from "@/components/animated-card";
import { AnimatedFeature } from "@/components/animated-feature";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <WarningModal />
      <div className="space-y-8">
        {/* Hero Section with Animation */}
        <AnimatedHero />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 rounded-xl backdrop-blur-sm border border-purple-200 dark:border-purple-800 shadow-lg">
            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10 text-purple-500" />
              <div>
                <h3 className="text-3xl font-bold">450+</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  DSA Questions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 rounded-xl backdrop-blur-sm border border-pink-200 dark:border-pink-800 shadow-lg">
            <div className="flex items-center gap-4">
              <Brain className="w-10 h-10 text-pink-500" />
              <div>
                <h3 className="text-3xl font-bold">AI Powered</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learning Path
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 p-6 rounded-xl backdrop-blur-sm border border-indigo-200 dark:border-indigo-800 shadow-lg">
            <div className="flex items-center gap-4">
              <Target className="w-10 h-10 text-indigo-500" />
              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Challenge and Leaderboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <DailyChallenge />
          <Leaderboard />
        </div>

        {/* Progress and AI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <ProgressDashboard />
          </div>
          <div>
            <QuestionRecommender />
          </div>
        </div>

        {/* Data Management Section */}
        <div>
          <DataManagement />
        </div>

        {/* Question Sets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <AnimatedCard
            title="450 DSA Questions"
            icon={<Code2 className="w-6 h-6" />}
            description="Comprehensive coverage of all important DSA topics"
            linkHref="/questions?set=450"
            linkText="Start Now"
            gradient="bg-gradient-to-br from-pink-500 to-orange-400"
          />
          <AnimatedCard
            title="300 DSA Questions"
            icon={<Target className="w-6 h-6" />}
            description="Focused set for interview preparation"
            linkHref="/questions?set=300"
            linkText="Explore"
            gradient="bg-gradient-to-br from-green-500 to-teal-400"
          />
          <AnimatedCard
            title="150 DSA Questions"
            icon={<Sparkles className="w-6 h-6" />}
            description="Essential problems for quick revision"
            linkHref="/questions?set=150"
            linkText="Get Started"
            gradient="bg-gradient-to-br from-blue-500 to-indigo-400"
          />
        </div>

        {/* Features Section */}
        <div className="text-center mb-12 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-300">
            Why Choose AlgoVidya?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <AnimatedFeature
              icon={<Code2 className="w-6 h-6" />}
              text="Curated question sets for efficient learning"
            />
            <AnimatedFeature
              icon={<Brain className="w-6 h-6" />}
              text="AI-powered personalized learning path"
            />
            <AnimatedFeature
              icon={<Target className="w-6 h-6" />}
              text="Track your progress with detailed analytics"
            />
            <AnimatedFeature
              icon={<Trophy className="w-6 h-6" />}
              text="Daily challenges to keep you motivated"
            />
            <AnimatedFeature
              icon={<Sparkles className="w-6 h-6" />}
              text="Interactive coding environment"
            />
            <AnimatedFeature
              icon={<ArrowRight className="w-6 h-6" />}
              text="Compete on the leaderboard"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-lg text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5))]" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">
            Ready to start your DSA journey, future tech leaders of India?
          </h2>
          <p className="mb-6 text-xl relative z-10">
            Choose a question set and begin your path to mastery!
          </p>
          <div className="flex justify-center space-x-4 relative z-10">
            <Link href="/questions?set=100">
              <Button variant="secondary" size="lg" className="group">
                100 DSA Questions
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/questions?set=75">
              <Button variant="secondary" size="lg" className="group">
                75 DSA Questions
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
