import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/maheer96",
      LinkedIn: "https://www.linkedin.com/in/maheer-huq-1aa3b426b/",
      YouTube: "https://www.youtube.com/@shadielfares",
    },
  }),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Graph(),
    // Component.Darkmode(),
    Component.Explorer({
      title: "Learn Today!",
    }),
  ],
  right: [Component.Search(), Component.Backlinks(), Component.TableOfContents()],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Graph(),
    // Component.Darkmode(),
  ],
  right: [Component.Search(), Component.Backlinks()],
};
