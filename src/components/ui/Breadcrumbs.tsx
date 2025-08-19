import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  customTitle?: string;
}

const Breadcrumbs = ({ customTitle }: BreadcrumbsProps) => {
  const location = useLocation();

  // Mapping of paths to Romanian titles
  const pathTitles: Record<string, string> = {
    "": "Acasă",
    "despre-noi": "Despre Noi",
    news: "Noutăți",
    catalog: "Catalog",
    retete: "Rețete",
    contacte: "Contacte",
    magazine: "Magazine",
    produs: "Produs",
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs = [{ title: "Acasă", path: "/" }];

    let currentPath = "";
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const title = pathTitles[segment] || segment;
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

      {/* Page Title */}
      <h1 className="text-3xl !mt-0 md:text-4xl lg:text-5xl font-medium text-dark font-barlow leading-10">
        {currentPageTitle}
      </h1>
    </div>
  );
};

export default Breadcrumbs;
