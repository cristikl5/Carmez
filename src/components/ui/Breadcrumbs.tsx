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
    <div className="bg-layout py-8 md:py-12">
      <div className="fluid-container">
        {/* Breadcrumbs Navigation */}
        <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 mb-4">
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
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  {breadcrumb.title}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </div>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark font-barlow">
          {currentPageTitle}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumbs;
