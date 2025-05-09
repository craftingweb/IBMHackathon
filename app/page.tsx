import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building,
  Calendar,
  FileText,
  GraduationCap,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="inline-block font-bold">CUNY Insights</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </Link>
              <Link
                href="#use-cases"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Use Cases
              </Link>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Unlock CUNY Board of Trustees Information
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Access relevant policies, propositions, and agendas from
                    Board of Trustee meetings tailored to your role and college.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 p-4 dark:from-slate-800 dark:to-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md space-y-4 p-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-slate-500" />
                          <span className="font-medium">May 9th, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold">
                          Board of Trustees Meeting
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Staten Island College Policy Updates
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-950">
                          <span className="text-sm font-medium">
                            Tuition Policy Changes
                          </span>
                          <FileText className="h-4 w-4 text-slate-500" />
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-950">
                          <span className="text-sm font-medium">
                            New Academic Programs
                          </span>
                          <FileText className="h-4 w-4 text-slate-500" />
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm dark:bg-slate-950">
                          <span className="text-sm font-medium">
                            Campus Facility Updates
                          </span>
                          <FileText className="h-4 w-4 text-slate-500" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Search className="h-4 w-4 text-slate-500" />
                        <span className="text-sm text-slate-500">
                          Search for more information...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-slate-50 py-12 dark:bg-slate-900 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powered by watsonx.ai and watsonx Orchestrate
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform uses advanced AI to extract and organize
                  information from Board of Trustees meetings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Smart Search</h3>
                <p className="text-center text-muted-foreground">
                  Find relevant information quickly with our AI-powered search
                  functionality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Role-Based Insights</h3>
                <p className="text-center text-muted-foreground">
                  Content tailored to your role as a student, faculty member, or
                  administrator.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Meeting Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Stay updated on past and upcoming Board of Trustees meetings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Multiple AI Agents Working Together
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform uses specialized AI agents to extract and
                  organize information from different committees.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Data Collection</h3>
                <p className="text-muted-foreground">
                  Our system collects meeting minutes, agendas, and policy
                  documents from all Board of Trustees committees.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">AI Processing</h3>
                <p className="text-muted-foreground">
                  watsonx.ai analyzes and categorizes information by committee,
                  college, stakeholder relevance, and date.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Agent Orchestration</h3>
                <p className="text-muted-foreground">
                  watsonx Orchestrate coordinates specialized agents focused on
                  different committees and information types.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Personalized Delivery</h3>
                <p className="text-muted-foreground">
                  Users receive information tailored to their role, college, and
                  specific interests.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="use-cases"
          className="w-full bg-slate-50 py-12 dark:bg-slate-900 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                  Use Cases
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How Different Stakeholders Benefit
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See how our platform serves the unique needs of students,
                  faculty, and administrators.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Students</h3>
                </div>
                <p className="text-muted-foreground">
                  "As a College of Staten Island student, I can see all policies
                  from the May 9th, 2025 meeting that directly affect my
                  education and campus experience."
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Track tuition policy changes
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Monitor new academic programs
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Stay informed about campus improvements
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Faculty</h3>
                </div>
                <p className="text-muted-foreground">
                  "As a faculty member, I can preview the agenda for the
                  upcoming May 24th, 2025 meeting and prepare for policy changes
                  that affect my department."
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Review curriculum policy updates
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Track faculty governance changes
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Monitor research funding decisions
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Administration</h3>
                </div>
                <p className="text-muted-foreground">
                  "As an administrator, I can track all policy implementations
                  across CUNY colleges and ensure my campus is compliant with
                  the latest Board decisions."
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Monitor budget allocations
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Track policy implementation timelines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Coordinate cross-campus initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to get started?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our platform today and stay informed about the decisions
                that affect your CUNY experience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-slate-50 py-6 dark:bg-slate-900">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © 2025 CUNY Insights. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
