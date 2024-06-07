import Links from '@/components/links'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Abdulrahman Moussa',
}
export default function Home() {
  return (
    <div className="text-text   font-base ">
      <h1 className="text-2xl font-heading sm:text-4xl">Abdulrahman Moussa</h1>
      <p className="mt-2 text-xl sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p className="text-xl">
          {' '}
          Hi, I'm Abdulrahman, a software engineer from Egypt.
        </p>

        <br />
        <p>
          I specialize in crafting sleek and interactive web experiences using
          technologies like Next.js, React, TypeScript, and Tailwind CSS.
          Currently exploring backend development with Node.js and PostgreSQL.
        </p>
      </div>

      <Links />
    </div>
  )
}
