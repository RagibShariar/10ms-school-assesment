import Checklists from "./components/Checklists";
import CourseDetails from "./components/CourseDetails";
import Engagement from "./components/Engagement";
import ExclusiveFeatures from "./components/ExclusiveFeatures";
import Features from "./components/Features";
import Header from "./components/Header";
import Instructor from "./components/Instructor";
import LearningOutcomes from "./components/LearningOutcomes";
import Title from "./components/Title";
import {
  Course,
  ChecklistItem,
  MediaItem,
  CtaText,
  InstructorValue,
  FeaturesValue,
  GroupJoinEngagementValue,
  PointersValue,
  FeatureExplanationsValue,
  AboutValue,
} from "./types/courseData";

export const dynamic = "force-dynamic"; // SSR

async function getCourseData(lang: string): Promise<Course> {
  const res: Response = await fetch(
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
  const data: { data: Course } = await res.json();
  return data.data;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang: string }>;
}) {
  const param = await searchParams;
  const lang = param.lang || "bn";
  const data: Course = await getCourseData(lang);
  // console.log("Course Data:", data);

  return (
    <main>
      <Header lang={lang} />
      <Title data={data as Course} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-32">
        <div className="md:col-span-2 order-2 md:order-1">
          <div>
            <Instructor
              data={
                data?.sections?.find(
                  (section) => section?.type === "instructors"
                ) as unknown as InstructorValue
              }
            />
            <Features
              data={
                data?.sections?.find(
                  (section) => section?.type === "features"
                ) as unknown as FeaturesValue
              }
            />
            <Engagement
              data={
                data?.sections?.find(
                  (section) => section?.type === "group_join_engagement"
                ) as unknown as GroupJoinEngagementValue
              }
            />
            {/* <LearningOutcomes
              data={data?.sections?.find(
                (section) => section?.type === "learning_outcomes"
              )}
            /> */}
            <LearningOutcomes
              data={
                data?.sections?.find(
                  (section) => section?.type === "pointers"
                ) as unknown as PointersValue
              }
            />
            <ExclusiveFeatures
              data={
                data?.sections?.find(
                  (section) => section?.type === "feature_explanations"
                ) as unknown as FeatureExplanationsValue
              }
            />
            <CourseDetails
              data={
                data?.sections?.find(
                  (section) => section?.type === "about"
                ) as unknown as AboutValue
              }
            />
          </div>
        </div>
        <div className="md:col-span-1 order-1 md:order-2">
          <Checklists
            data={data?.checklist as ChecklistItem[]}
            media={data?.media as MediaItem[]}
            cta_text={data?.cta_text as CtaText}
          />
        </div>
      </div>
    </main>
  );
}
