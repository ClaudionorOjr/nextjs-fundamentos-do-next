import { useRouter } from "next/router"

// Rotas Catch-all: `[...route].tsx`. Permite capturar múltiplos seguimentos de URL dinâmicos.
// Ex.: ...posts/segA/segB/segC retornaria ['segA', 'segB', 'segC'].

export default function PostPage() {
  const router = useRouter()
  const segments = router.query.slug as string[]
  return (
    <div className="">
      <h2>post: {segments?.join('/')}</h2>
    </div>
  )
}