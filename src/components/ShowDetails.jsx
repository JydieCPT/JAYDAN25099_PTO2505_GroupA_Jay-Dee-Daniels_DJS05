import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ShowDetails.module.css";

export default function ShowDetails() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSeason, setExpandedSeason] = useState(null);
  const [error, setError] = useState(null);

/**
 *Fetch full details when component mounts
 */
  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!res.ok) throw new Error("Failed to fetch podcast details");
        const data = await res.json();
        setPodcast(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load podcast details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPodcast();
  }, [id]);

  if (loading)
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Loading podcast details...</p>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <Link to="/" className={styles.backButton}>
          ← Back to home
        </Link>
      </div>
    );

  if (!podcast)
    return (
      <div className={styles.container}>
        <p>No details available.</p>
        <Link to="/" className={styles.backButton}>
          ← Back to home
        </Link>
      </div>
    );

  const formattedDate = new Date(podcast.updated).toLocaleDateString();

  const totalSeasons = Array.isArray(podcast.seasons)
    ? podcast.seasons.length
    : podcast.seasons || 0;

  const totalEpisodes = Array.isArray(podcast.seasons)
    ? podcast.seasons.reduce((sum, s) => sum + (s.episodes?.length || 0), 0)
    : 0;

  const toggleSeason = (seasonNumber) => {
    setExpandedSeason((prev) => (prev === seasonNumber ? null : seasonNumber));
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        ← Back to all podcasts
      </Link>

      <div className={styles.headerCard}>
        <img src={podcast.image} alt={podcast.title} className={styles.cover} />

        <div className={styles.headerInfo}>
          <h1 className={styles.title}>{podcast.title}</h1>
          <p className={styles.description}>{podcast.description}</p>

          <div className={styles.meta}>
            <p>
              <strong>Seasons:</strong> {totalSeasons}
            </p>
            <p>
              <strong>Last Updated:</strong> {formattedDate}
            </p>
            {totalEpisodes > 0 && (
              <p>
                <strong>Total Episodes:</strong> {totalEpisodes}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SEASONS */}
      {Array.isArray(podcast.seasons) && podcast.seasons.length > 0 && (
        <div className={styles.seasonsSection}>
          <h2>Seasons</h2>

          {podcast.seasons.map((season) => (
            <div key={season.season} className={styles.seasonCard}>
              <div
                className={styles.seasonHeader}
                onClick={() => toggleSeason(season.season)}
              >
                <h3>
                  Season {season.season}{" "}
                  <span className={styles.episodeCount}>
                    ({season.episodes?.length || 0} episodes)
                  </span>
                </h3>
                <button className={styles.toggleButton}>
                  {expandedSeason === season.season ? "-" : "+"}
                </button>
              </div>

              {expandedSeason === season.season && (
                <div className={styles.episodeList}>
                  {season.episodes?.map((ep, index) => (
                    <div
                      key={`${season.season}-${ep.id || index}`}
                      className={styles.episodeItem}
                    >
                      <h4>{ep.title}</h4>
                      {ep.file && (
                        <audio controls src={ep.file} className={styles.audio}>
                          Your browser does not support the audio element.
                        </audio>
                      )}
                      {ep.description && (
                        <p className={styles.episodeDescription}>
                          {ep.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
