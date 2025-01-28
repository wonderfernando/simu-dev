import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <SkeletonCard />
  );
}


function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2 flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="">
          <Skeleton className="h-10 w-[100px]" />
        </div>
      </div>
      <Skeleton className="h-[250px] w-full rounded-xl" />
    </div>
  )
}