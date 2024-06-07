'use client'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)
  const routes = ['/experience', '/work', '/about']
  const currentRoute = window.location.pathname
  console.log(currentRoute)

  useEffect(() => {
    function handleScroll(event: any) {
      const delta = event.deltaY || event.detail || event.wheelDelta
      console.log(event.wheelDelta, event.deltaY, event.offsetY)

      // Check if the user is scrolling down
      if (delta > 0) {
        setScrollProgress((prev) => {
          if (prev < 101) {
            return prev + 1
          }
          return prev
        })

        // debounce(() => {
        //   setScrollProgress(0)
        // }, 1000)()
      }
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  useEffect(() => {
    const nextRoute = routes[routes.indexOf(currentRoute) + 1]
    if (
      scrollProgress * 2 > 100 &&
      routes.indexOf(currentRoute) < 2 &&
      nextRoute !== currentRoute
    ) {
      router.push(routes[routes.indexOf(currentRoute) + 1])
      setTimeout(() => {
        setScrollProgress(0)
      }, 500)
    }
  }, [scrollProgress])

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={
            montserrat.className +
            ' from-second overscroll-x-auto bg-gradient-to-l to-[#6B728E]'
          }
        >
          <Nav />
          <div className="fixed left-0 top-0 h-2 w-full ">
            <div
              ref={ref}
              className={`h-full ${scrollProgress > Number(ref.current?.style.width) ? 'transition-all delay-0 duration-500 ease-out' : 'transition-all delay-0 duration-500 '}  rounded-r-full bg-main `}
              style={{ width: `${scrollProgress * 2}%` }}
            ></div>
          </div>
          <div
            className="text-text mx-auto w-[750px] max-w-full px-0 pb-10 pt-28 "
            ref={ref}
          >
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
