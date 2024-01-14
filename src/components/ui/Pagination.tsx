"use client";

import Link from "next/link";
import {redirect, usePathname, useSearchParams} from "next/navigation";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { generatePaginationNumbers } from "@/helpers";

interface Props {
  totalPages: number;
}

export const Pagination: React.FC<Props> = ({ totalPages }) => {
  const pathName = usePathname();

  // Forma de obtener los search params del navegador, pueden ser nulos
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1; // Este operador me asegura de evitar Nan o 0 al pasarlos a 1

  // Si es algo negativo mandamos a al pathname que seria la "1"
  if (currentPage < 0) return redirect(pathName);

  const createPageUrl = (pageNumber: number | string): string => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") return `${pathName}?${params.toString()}`; //href="/men?page=5; por ejemplo"

    if (Number(pageNumber) <= 0) return pathName; //href="/kid; por ejemplo"

    // Para el "Next de las paginas"
    if (Number(pageNumber) > totalPages) return `${pathName}?${params.toString()}`;

    params.set("page", pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-center mt-10 mb-32 text-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline size={30}/>
            </Link>
          </li>

          {
            allPages.map((page, index) => {

              return (
                <li className="page-item" key={`${page}-${index}`}>
                  <Link
                    className={`
                      page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none
                      ${page === currentPage && "bg-blue-500 shadow-sm text-white hover:text-white hover:bg-blue-700"}
                    `}
                    href={createPageUrl(page)}
                  >
                    {page}
                  </Link>
                </li>
              )
            })
          }

          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={30}/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};