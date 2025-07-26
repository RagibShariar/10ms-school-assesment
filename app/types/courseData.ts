// Main course data from API
export interface CourseData {
  data: Course;
}

// Course information
export interface Course {
  title: string;
  description: string;
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: Section[];
  media?: MediaItem[];
}

// Media items for carousel
export interface MediaItem {
  thumbnail_url: string;
  name: string;
}

// Checklist items (displayed in sidebar)
export interface ChecklistItem {
  icon: string;
  text: string;
}

// CTA button text
export interface CtaText {
  name: string;
}

// Section for different parts of course page
export interface Section {
  type: string;
  name: string;
  values: SectionValue[];
}

// Section content (used by all components)
export interface SectionValue {
  // Common fields
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  text?: string;

  // Media
  image?: string;
  icon?: string;
  thumbnail?: string;
  file_url?: string;

  // Features
  subtitle?: string;
  checklist?: string[];

  // Engagement
  background?: {
    image: string;
  };
  cta?: {
    clicked_url: string;
    text: string;
  };
  top_left_icon_img?: string;

  // Other optional fields
  color?: string;
  short_description?: string;
  slug?: string;
  has_instructor_page?: boolean;
}
