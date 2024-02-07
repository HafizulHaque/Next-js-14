"use client"
import { useRouter } from "next/navigation"

const ReviewPageNav = () => {
  
  const router = useRouter()

  const goBack = () => {
    router.back();
  }

  const goHome = () => {
    router.push('/');
  }

  const goHomeWithReplace = () => {
    router.replace('/');
  }

  return (
    <ul>
      <li><button onClick={goBack}>Go Back</button></li>
      <li><button onClick={goHome}>Go to Home</button></li>
      <li><button onClick={goHomeWithReplace}>Go Home with Replace</button></li>
    </ul>
  )
}

export default ReviewPageNav