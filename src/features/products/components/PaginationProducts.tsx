import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationProducts = ({ currentPage, totalPages, onPageChange }: PaginationComponentProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => { onPageChange(Math.max(1, currentPage - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`cursor-pointer ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
          />
        </PaginationItem>
        {/* Pages */}
        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === p}
              onClick={() => { onPageChange(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            > {p} </PaginationLink>
          </PaginationItem>
        ))}
        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => { onPageChange(Math.min(totalPages, currentPage + 1)); window.scrollTo({ top: 0, behavior: "smooth" });}}
            className={`cursor-pointer ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationProducts;
