import "styles/pages/_blog.scss";
import "styles/layout/_general.scss";

import BlogArticle, { BlogArticleProps } from "@/components/BlogArticle";

const BlogArticleData: BlogArticleProps[] = [
    {
      category: "News",
      date: new Date("2023-06-12"),
      description:
        "Our founders Daphna and Dasya were lucky enough to sit down with Alex Collis, Director of Operations at Princess Polly. Alex joined Princess Polly back in 2019, and has had an incredible impact on the business over the last few years.",
      duration: 7,
      imgPath: "/images/blog/2023-06-12.png",
      title:
        "Retail Royalty: Meet Princess Polly’s Director of Operations, Alex Collis",
      featured: true,
    },
    {
      category: "News",
      date: new Date("2023-05-11"),
      description:
        "At the end of last month, the ReturnQueen app finally made its way onto Product Hunt. And we are absolutely thrilled to announce that on launch day, we made it to a top spot on the leaderboard",
      duration: 4,
      imgPath: "/images/blog/2023-05-11.png",
      title:
        "How ReturnQueen Ruled The ProductHunt Leaderboard:  A Behind-The-Scenes Look at Our ‘Top 3’ Launch",
      featured: false,
    },
  ];

export default function Blog(){
    return(<section className="blog general">
         {BlogArticleData.map(
          (
            { category, date, description, duration, imgPath, title, featured },
            idx
          ) => (
            <BlogArticle
              key={idx}
              title={title}
              description={description}
              date={date}
              duration={duration}
              category={category}
              imgPath={imgPath}
              featured={featured}
            />
          )
        )}
    </section>)
}