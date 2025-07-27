// Main course data from API
export interface CourseData {
  code: number;
  message: string;
  status_code: number;
  data: Course;
}

// Main course information
export interface Course {
  id: number;
  platform: string;
  type: string;
  title: string;
  description: string;
  slug: string;
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: Section[];
  media: MediaItem[];
}

// Media items for carousel in Checklists component
export interface MediaItem {
  resource_type?: string;
  resource_value?: string;
  thumbnail_url?: string;
}

// Checklist items (displayed in sidebar)
export interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

// CTA button text
export interface CtaText {
  name: string;
  value: string;
}

// Main section structure
export interface Section {
  type: SectionType;
  values: SectionValue[];
}

// SECTION TYPES
export type SectionType =
  | "instructors"
  | "features"
  | "group_join_engagement"
  | "pointers"
  | "about"
  | "feature_explanations";

// Different section types using union types
export type SectionValue =
  | InstructorValue
  | FeaturesValue
  | GroupJoinEngagementValue
  | PointersValue
  | AboutValue
  | FeatureExplanationsValue;

export interface InstructorValue {
  type: "instructors";
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: Instructor[];
}
export interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description?: string;
  slug: string;
}

export interface FeaturesValue {
  type: "features";
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: Feature[];
}
export interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface GroupJoinEngagementValue {
  type: "group_join_engagement";
  name?: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: GroupJoinEngagement[];
}
export interface GroupJoinEngagement {
  background: GroupJoinEngagementBackground;
  cta: GroupJoinEngagementCta;
  description: string;
  description_color?: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color?: string;
  top_left_icon_img: string;
}
export interface GroupJoinEngagementBackground {
  image: string;
  primary_color?: string;
  secondary_color?: string;
}
export interface GroupJoinEngagementCta {
  clicked_url: string;
  color?: string;
  text: string;
}
export interface PointersValue {
  type: "pointers";
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: Pointer[];
}
export interface Pointer {
  color?: string;
  icon?: string;
  id: string;
  text: string;
}
export interface AboutValue {
  type: "about";
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: About[];
}
export interface About {
  description: string;
  icon?: string;
  id: string;
  title: string;
}
export interface FeatureExplanationsValue {
  type: "feature_explanations";
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: FeatureExplanation[];
}
export interface FeatureExplanation {
  checklist: [];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail?: string;
}
