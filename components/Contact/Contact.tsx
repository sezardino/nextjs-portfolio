import cn from "classnames";
import styles from "./Contact.module.scss";

import CheckIcon from "@/assets/icons/check.svg";
import XIcon from "@/assets/icons/x.svg";
import SpinnerIcon from "@/assets/icons/spinner.svg";

import { Button } from "../UI";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      reset();
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!Object.keys(errors).length) {
      return;
    }

    setIsFormInvalid(true);

    setTimeout(() => setIsFormInvalid(false), 2000);
  }, [errors]);

  useEffect(() => {
    if (!success) {
      return;
    }

    setTimeout(() => setSuccess(false), 2000);
  }, [success]);

  useEffect(() => {
    if (!error) {
      return;
    }

    setTimeout(() => setError(false), 4000);
  }, [error]);

  return (
    <section className={styles.wrapper} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.container}>
        <form
          className={cn(styles.form, {
            [styles.error]: isFormInvalid,
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", { required: true })}
            formNoValidate
            type="text"
            name="name"
            placeholder="Name"
            disabled={isLoading}
            className={cn(styles.input, { [styles.invalid]: errors.name })}
          />
          <input
            {...register("email", { required: true })}
            formNoValidate
            type="email"
            name="email"
            placeholder="Email"
            disabled={isLoading}
            className={cn(styles.input, { [styles.invalid]: errors.email })}
          />
          <textarea
            {...register("message", { required: true, maxLength: 160 })}
            name="message"
            cols={0}
            rows={10}
            placeholder="Type Something Nice"
            disabled={isLoading}
            className={cn(styles.input, { [styles.invalid]: errors.message })}
          />
          <div className={styles.status}>
            <Button
              disabled={isLoading}
              type="submit"
              className={styles.button}
            >
              Send
            </Button>
            {success && (
              <CheckIcon width={32} height={32} className={styles.success} />
            )}
            {error && (
              <XIcon width={32} height={32} className={styles.errorStatus} />
            )}
            {isLoading && (
              <SpinnerIcon width={32} height={32} className={styles.spinner} />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
