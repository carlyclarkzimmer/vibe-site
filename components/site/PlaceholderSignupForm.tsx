import styles from "./PlaceholderSignupForm.module.css";

type PlaceholderSignupFormProps = {
  id: string;
  submitLabel: string;
};

export function PlaceholderSignupForm({ id, submitLabel }: PlaceholderSignupFormProps) {
  return (
    <form className={styles.form} id={id}>
      <div>
        <label htmlFor={`${id}-first-name`}>First name</label>
        <input id={`${id}-first-name`} name="first-name" type="text" />
      </div>
      <div>
        <label htmlFor={`${id}-email`}>Email address</label>
        <input id={`${id}-email`} name="email" required type="email" />
      </div>
      <button aria-describedby={`${id}-status`} type="button">
        {submitLabel}
      </button>
      <p id={`${id}-status`}>
        Email signup is being prepared. This form does not submit yet.
      </p>
    </form>
  );
}
