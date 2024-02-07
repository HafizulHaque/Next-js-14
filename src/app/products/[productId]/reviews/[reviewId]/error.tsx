"use client"

const ReviewError = ({ error, reset }: {
  error: Error & { digest?: string },
  reset: () => void
}) => {
  return (
    <div>
      <p>Error occured!</p>
      <p><button onClick={reset}>Try Again</button></p>
    </div>
  )
}

export default ReviewError
