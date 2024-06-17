import styles from "./Link.module.css";

const Link = (props) => {
  const css = `${styles.link} ${
    props.isSmall ? styles.smallLink : styles.bigLink
  }`;
  return (
    <a href={props.href} className={css}>
      {props.label}
    </a>
  );
};
export default Link;
