import styles from "./styles.module.scss";

const MissionVision = () => {
  return (
    <>
      <section className={`container ${styles.container}`}>
        <div>
          <h2 className={styles.ttl}>Our mission</h2>
          <p className={styles.txt}>
            To become a leading financial service provider, with a focus on
            impacting the community and connecting people to their financial
            objectives while delivering value to our stakeholders.
          </p>
        </div>
        <div>
          <h2 className={styles.ttl}>Our vision</h2>
          <p className={styles.txt}>
            Providing financial freedom to our clients through creative and
            sustainable solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export { MissionVision };
