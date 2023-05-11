import { H5, Icon } from "@blueprintjs/core";
// import css from "../contexts/themes.scss";
import { CustomButton, Sorts } from "../components";
import { Job, Sort } from "../interfaces";

interface SortDefinedProps {
  filterAndSort: any;
  sortOrder: "asc" | "desc";
  sortOnClick: any;
}

export function SortDefined({ filterAndSort, sortOrder, sortOnClick }: SortDefinedProps) {
  return (
    <div className="filter-details">
      <H5>Sort by</H5>
      <Sorts />
      <CustomButton
        icon={<Icon color={"red" || "css.rose"} icon={`sort-${sortOrder}`} />}
        onClick={sortOnClick}
        variant="secondary"
      />
      <CustomButton icon="filter" onClick={filterAndSort} text="Lesgo" variant="primary" />
    </div>
  );
}

function parseDate(date: string): number {
  return new Date(date.split("/").reverse().join("/")).getTime();
}

type sortByProps = "locationName" | "minimumSalary" | "expirationDate" | "date" | "jobTitle";

export function sortJobs(jobs: Job[], { category, order }: Sort) {
  return jobs.sort((a, b) => {
    let sortBy: sortByProps = "jobTitle";
    switch (category) {
      case "Location":
        sortBy = "locationName";
        break;
      case "Salary":
        sortBy = "minimumSalary";
        break;
      case "Expiry Date":
        sortBy = "expirationDate";
        break;
      case "Posted Date":
        sortBy = "date";
        break;
      case "Job Title":
        sortBy = "jobTitle";
        break;
      default:
        sortBy = "jobTitle";
    }

    let direction;
    if (sortBy === "expirationDate" || sortBy === "date") {
      direction = parseDate(a[sortBy]) - parseDate(b[sortBy]);
    } else if (typeof a[sortBy] === "string") {
      // Since TS isn't seeing the conditional that got us here, typecasting
      if ((a[sortBy] as string).toLowerCase() > (b[sortBy] as string).toLowerCase()) direction = 1;
      else direction = -1;
    } else {
      direction = (a[sortBy] as number) - (b[sortBy] as number);
    }
    if (order === "asc") return direction;
    return -direction;
  });
}
