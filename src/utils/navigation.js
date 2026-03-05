function normalizePath(pathname) {
  return pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
}

function scrollToHash(hash) {
  const sectionId = hash.replace('#', '')
  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  requestAnimationFrame(() => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

export function navigateTo(url) {
  const currentUrl = new URL(window.location.href)
  const nextUrl = new URL(url, window.location.origin)

  const sameRoute =
    normalizePath(currentUrl.pathname) === normalizePath(nextUrl.pathname) &&
    currentUrl.search === nextUrl.search
  const sameHash = currentUrl.hash === nextUrl.hash
  const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`

  if (sameRoute && sameHash) return

  window.history.pushState({}, '', nextPath)

  if (!sameRoute) {
    window.dispatchEvent(new PopStateEvent('popstate'))
    return
  }

  if (!sameHash) {
    window.dispatchEvent(
      new HashChangeEvent('hashchange', {
        oldURL: currentUrl.href,
        newURL: nextUrl.href,
      }),
    )
  }
  scrollToHash(nextUrl.hash)
}

export function onSpaLinkClick(event, url) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  event.preventDefault()
  navigateTo(url)
}
