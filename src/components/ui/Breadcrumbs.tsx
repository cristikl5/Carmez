import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  customTitle?: string;
  hideTitle?: boolean;
}

const Breadcrumbs = ({ customTitle, hideTitle }: BreadcrumbsProps) => {
  const location = useLocation();
  const { t } = useTranslation();

  // Mapping of paths to localized titles
  const pathTitles: Record<string, string> = {
    "": t("breadcrumbs.home"),
    "despre-noi": t("breadcrumbs.aboutUs"),
    news: t("breadcrumbs.news"),
    catalog: t("breadcrumbs.catalog"),
    retete: t("breadcrumbs.recipes"),
    contacte: t("breadcrumbs.contacts"),
    magazine: t("breadcrumbs.stores"),
    produs: t("breadcrumbs.product"),
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [{ title: t("breadcrumbs.home"), path: "/" }];

    let currentPath = "";
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;

      const decodedSegment = decodeURIComponent(segment);
      const title = pathTitles[segment] || decodedSegment;
      breadcrumbs.push({ title, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  const currentPageTitle =
    customTitle || breadcrumbs[breadcrumbs.length - 1]?.title || "Page";

  return (
    <div>
      {/* Breadcrumbs Navigation */}
      <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 mb-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={breadcrumb.path} className="flex items-center gap-2">
            {index === breadcrumbs.length - 1 ? (
              // Current page - not clickable
              <span className="text-primary font-medium">
                {breadcrumb.title}
              </span>
            ) : (
              // Clickable breadcrumb
              <Link
                to={breadcrumb.path}
                className="text-primary hover:text-primary/80 transition-colors duration-200 "
              >
                {breadcrumb.title}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="text-primary">/</span>
            )}
          </div>
        ))}
      </div>

      {/* Page Title - only show if hideTitle is false */}
      {!hideTitle && (
        <h1 className="text-3xl !mt-0 md:text-4xl lg:text-5xl font-medium text-dark font-barlow leading-10">
          {currentPageTitle}
        </h1>
      )}
    </div>
  );
};

export default Breadcrumbs;
