import { useState, useEffect, useRef } from "react"

export function useActiveSection(sectionIds: readonly string[], offset = 120) {
  const [activeSection, setActiveSection] = useState("")
  // Stable ref so the scroll handler never sees a stale or new-array reference
  const idsRef = useRef(sectionIds)
  idsRef.current = sectionIds

  useEffect(() => {
    const handleScroll = () => {
      const ids = idsRef.current

      if (window.scrollY < 180) {
        setActiveSection("")
        return
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection(ids[ids.length - 1])
        return
      }

      const scrollPos = window.scrollY + offset
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(ids[i])
          return
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [offset]) // ← only 'offset' is a real dep; ids come from the ref

  return activeSection
}
