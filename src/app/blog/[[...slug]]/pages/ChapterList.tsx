import { notFound } from "next/navigation"

const ChapterList = ({ chapterId }: {
  chapterId: string
}) => {
  if(+chapterId > 10 ){
    return notFound();
  }
  return (
    <div>
      <h2>Show Chapter - #{chapterId}</h2>
      <ul>
        <li>Topic-1</li>
        <li>Topic-2</li>
        <li>Topic-3</li>
        <li>Topic-4</li>
        <li>Topic-5</li>
      </ul>
    </div>
  )
}

export default ChapterList