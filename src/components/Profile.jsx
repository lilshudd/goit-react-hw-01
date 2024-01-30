import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([label, value]) => (
          <li key={label}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
