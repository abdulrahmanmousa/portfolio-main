import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a skilled front-end developer with 10 months of professional
          experience, specializing in building responsive and interactive web
          applications using React, TypeScript, Tailwind CSS, Zustand, Shadcn,
          and React Query. My work focuses on creating seamless user experiences
          and efficient, scalable front-end solutions.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
