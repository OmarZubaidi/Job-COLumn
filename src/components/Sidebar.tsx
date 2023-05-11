import { Divider } from "@blueprintjs/core";
import { ChangeEvent, useEffect, useState } from "react";
// import { useFilterContext } from '../contexts/filter';
// import { useFilteredJobsContext } from '../contexts/filteredJobs';
// import { useJobsContext } from '../contexts/jobs';
// import { useSortContext } from '../contexts/sort';
// import { useThemeContext } from '../contexts/theme';
// import { useUserContext } from '../contexts/user';
// import css from '../contexts/themes.scss';
import { filterJobs, SortDefined, sortJobs } from "../helpers";
import { Job, Sort } from "../interfaces";
import { BackButton, CustomButton, FiltersDefined, Footer, Logo, ToggleDarkMode, UserDetails } from ".";
import "./sidebar.scss";

const largeScreen = window.innerWidth >= 1900; // css.mobile.split('p')[0];

export function Sidebar() {
  // TODO bring back contexts
  // const [darkMode] = useThemeContext();
  const darkMode = true;
  // const [user] = useUserContext();
  const user = { location: "London", salary: 20_000 };
  // const [filters, setFilters] = useFilterContext();
  const [filters, setFilters] = useState({
    keywords: "",
    cities: [],
    salary: 0,
  });
  // const [sort, setSort] = useSortContext();
  const [sort, setSort] = useState<Sort>({
    category: "Location",
    order: "asc",
  });
  // const [jobs] = useJobsContext();
  const jobs: Job[] = [];
  // const [, setFilteredJobs] = useFilteredJobsContext();
  const setFilteredJobs = (value: any) => jobs;
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
