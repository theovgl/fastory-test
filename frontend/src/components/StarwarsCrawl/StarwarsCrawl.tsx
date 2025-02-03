import { ReactElement } from "react";
import styles from "./StarwarsCrawl.module.css";

interface StarwarsCrawlProps {
  children: ReactElement[];
}

export default function StarwarsCrawl(props: StarwarsCrawlProps) {
  return (
    <main>
      <div className={styles.crawl_container}>
        <div className={styles.crawl}>{props.children}</div>
      </div>
    </main>
  );
}
