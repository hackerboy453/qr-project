"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Ads() {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Define ad details for easy updates
  const adScriptSrc = "//pl27708493.revenuecpmgate.com/fa46c0a191921a86367e024796640a93/invoke.js"
  const adContainerId = "container-fa46c0a191921a86367e024796640a93"

  // This effect runs once to load the main ad script into the document's head.
  // It ensures the script isn't added multiple times.
  useEffect(() => {
    const scriptId = "revenuecpmgate-loader"
    if (document.getElementById(scriptId)) return

    const script = document.createElement("script")
    script.id = scriptId
    script.async = true
    script.src = adScriptSrc
    document.head.appendChild(script)
  }, [])

  // This effect runs every time the page's pathname changes.
  // It re-injects a temporary script to request a new ad for the new page view.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear the ad container of any previous content
    container.innerHTML = ""

    const tempScript = document.createElement("script")
    tempScript.async = true
    tempScript.type = "text/javascript"
    // Use a simple inner script to call the ad loader function
    tempScript.innerHTML = `atOptions = { 'key' : 'fa46c0a191921a86367e024796640a93', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };`
    
    // Insert the temporary script right before the ad container
    container.parentElement?.insertBefore(tempScript, container)

    // The cleanup function removes the temporary script when the component
    // unmounts or before the effect runs again.
    return () => {
      tempScript.remove()
    }
  }, [pathname]) // The effect depends on the pathname

  // This is the responsive container where the ad will be displayed.
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 16, marginBottom: 0 }}>
      <div
        id={adContainerId}
        ref={containerRef}
        style={{ width: "100%", maxWidth: 728, minHeight: 90 }} // Adjusted minHeight for a standard 728x90 banner
      />
    </div>
  )
}
