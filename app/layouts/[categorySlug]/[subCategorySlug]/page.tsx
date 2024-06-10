import { getCategory } from "#/app/api/categories/getCategories";
import { SkeletonCard } from "#/ui/skeleton-card";
import { notFound, redirect } from "next/navigation";

export default async function Page({
  params,
  searchParams,
}: {
  params: { subCategorySlug: string };
  searchParams: { foo?: string };
}) {
  const category = await getCategory({ slug: params.subCategorySlug });
  if (searchParams.foo) {
    redirect("https://app-redirection-rsc-error.vercel.app/layouts/");
  } else {
    redirect(
      "https://app-redirection-rsc-error.vercel.app/layouts/electronics/phones/?foo=bar"
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
