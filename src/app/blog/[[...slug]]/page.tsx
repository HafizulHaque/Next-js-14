import { notFound } from "next/navigation";
import BlogHomePage from "./pages/BlogHomepage";
import ChapterList from "./pages/ChapterList";
import TopicDetailsPage from "./pages/TopicDetailsPage";

const BlogContent = ({ params }: {
  params: {
    slug: string[]
  }
}) => {
  const { slug } = params;
  console.log(slug)

  if(!slug){
    return <BlogHomePage/>
  }
  if(slug.length === 1){
    return <ChapterList chapterId={slug[0]}/>
  }
  if(slug.length === 2){
    return <TopicDetailsPage topicSlug={slug[1]}/>
  }
  return notFound();
}

export default BlogContent