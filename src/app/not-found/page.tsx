import Container from "../components/Container";
import Button from "../components/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`sectionPadding ${styles.notFoundSection}`}>
      <Container maxWidth="xl">
        <div className={styles.contentWrapper}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.heading}>
            Page <span className={styles.highlight}>Not Found</span>
          </h1>
          <p className={styles.description}>
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
          </p>
          <div className={styles.buttonWrapper}>
            <Button href="/" variant="green" size="md">
              Go Back Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

