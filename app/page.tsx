import Checklists from "./components/Checklists";
import CourseDetails from "./components/CourseDetails";
import Engagement from "./components/Engagement";
import ExclusiveFeatures from "./components/ExclusiveFeatures";
import Features from "./components/Features";
import Instructor from "./components/Instructor";
import LearningOutcomes from "./components/LearningOutcomes";
import Title from "./components/Title";
import { Course } from "./types/courseData";

export const dynamic = "force-dynamic"; // SSR

async function getCourseData(lang: "en" | "bn" = "en"): Promise<Course> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      cache: "no-store", // force SSR
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const data = await getCourseData("bn");
  console.log("Course Data:", data);

  return (
    <>
      <Title data={data} />
      <div className="md:grid grid-cols-3 gap-12 px-4 md:px-32">
        <div className="col-span-2 ">
          <div>
            <Instructor
              data={data?.sections?.find(
                (section) => section?.type === "instructors"
              )}
            />
            <Features
              data={data?.sections?.find(
                (section) => section?.type === "features"
              )}
            />
            <Engagement
              data={data?.sections?.find(
                (section) => section?.type === "group_join_engagement"
              )}
            />
            <LearningOutcomes
              data={data?.sections?.find(
                (section) => section?.type === "learning_outcomes"
              )}
            />
            <LearningOutcomes
              data={data?.sections?.find(
                (section) => section?.type === "pointers"
              )}
            />
            <ExclusiveFeatures
              data={data?.sections?.find(
                (section) => section?.type === "feature_explanations"
              )}
            />
            <CourseDetails
              data={data?.sections?.find(
                (section) => section?.type === "about"
              )}
            />
          </div>
        </div>
        <div className="col-span-1 ">
          <Checklists
            data={data?.checklist}
            media={data?.media}
            cta_text={data?.cta_text}
          />
        </div>
      </div>
    </>
  );
}
