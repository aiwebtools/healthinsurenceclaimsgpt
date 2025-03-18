
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    // Optimization: Use a debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>
    
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }, 100) // Debounce by 100ms
    }

    // Use matchMedia for better performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern browsers
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
    } else {
      // Fallback for older browsers
      window.addEventListener("resize", handleResize)
    }
    
    // Initial check
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize)
      } else {
        window.removeEventListener("resize", handleResize)
      }
      clearTimeout(resizeTimer)
    }
  }, [])

  return isMobile
}
