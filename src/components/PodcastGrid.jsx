import PodcastCard from "./PodcastCard";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./PodcastGrid.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

/**
 * PodcastGrid Component
 *
 * Displays a responsive grid of podcast preview cards sourced from context.
 * Each podcast card is wrapped in a link, allowing users to navigate to a
 * detailed show page (e.g., `/show/:id`).
 *
 * If no podcasts match the current filters or search query, a message is displayed.
 *
 * @component
 * @param {Object} props - Component props
 * @param {{id: number, name: string}[]} props.genres - Array of genre definitions used to resolve genre IDs in each podcast
 *
 * @returns {JSX.Element} A grid of clickable podcast cards or a fallback message
 */
export default function PodcastGrid({ genres }) {
  const { podcasts } = useContext(PodcastContext);

  if (!podcasts.length) {
    return (
      <p className={styles.noResults}>
        No podcasts match your search or filters.
      </p>
    );
  }

  return (
    <div className={styles.grid}>
      {podcasts.map((podcast) => (
        <Link
          key={podcast.id}
          to={`/show/${podcast.id}`}
          className={styles.cardLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <PodcastCard podcast={podcast} genres={genres} />
        </Link>
      ))}
    </div>
  );
}
