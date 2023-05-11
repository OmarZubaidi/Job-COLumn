import { Divider } from "@blueprintjs/core";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useFilterContext,
  useFilteredJobsContext,
  useJobsContext,
  useSortContext,
  useThemeContext,
  useUserContext,
} from "../contexts";
import css from "../contexts/themes.scss";
import { filterJobs, SortDefined, sortJobs } from "../helpers";
import { BackButton, CustomButton, FiltersDefined, Footer, Logo, ToggleDarkMode, UserDetails } from ".";
import "./sidebar.scss";

const largeScreen = window.innerWidth >= css.mobile.split("p")[0];

export function Sidebar() {
  const { darkMode } = useThemeContext();
  const { user } = useUserContext();
  const { filters, setFilters } = useFilterContext();
  const { sort, setSort } = useSortContext();
  const { jobs } = useJobsContext();
  const { setFilteredJobs } = useFilteredJobsContext();
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Filter setter functions
  function keywordsOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFilters({
      ...filters,
      keywords: e.target.value,
    });
  }

  function numericOnChange(value: number) {
    setFilters({
      ...filters,
      salary: value,
    });
  }

  // Sort setter function
  function sortOnClick() {
    setSort({
      ...sort,
      order: `${sort.order === "asc" ? "desc" : "asc"}`,
    });
  }

  // Navbar visibility setter function
  function toggleNavbar() {
    setNavbarVisible(!navbarVisible);
  }

  // Fix navbar loses visibility bug
  function bringBackSidebar() {
    if (largeScreen) setNavbarVisible(true);
  }

  useEffect(() => {
    window.addEventListener("resize", bringBackSidebar);
    return () => {
      window.removeEventListener("resize", bringBackSidebar);
    };
  }, []);

  // Job filter and sort function
  function filterAndSort() {
    setFilteredJobs(sortJobs(filterJobs(jobs, filters), sort));
  }

  return (
    <nav className="background-color">
      <div>
        <Logo />
        <Divider />
        <CustomButton
          ariaLabel="Toggle navbar button"
          icon="menu"
          id="toggle-sidebar"
          onClick={toggleNavbar}
          variant="secondary"
        />
      </div>
      {navbarVisible && (
        <>
          <ToggleDarkMode text={`${darkMode ? "Light Mode" : "Dark Mode"}`} />
          <Divider />
          <UserDetails location={user.location} salary={user.salary} />
          <Divider />
          <FiltersDefined
            keywords={filters.keywords}
            keywordsOnChange={keywordsOnChange}
            numericOnChange={numericOnChange}
          />
          <Divider />
          <SortDefined filterAndSort={filterAndSort} sortOnClick={sortOnClick} sortOrder={sort.order} />
          <Divider />
          <BackButton />
          <Divider />
          <Footer />
        </>
      )}
    </nav>
  );
}
