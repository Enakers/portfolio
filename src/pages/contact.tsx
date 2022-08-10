import emailjs from "@emailjs/browser";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import Toast from "~/components/Toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const validationSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm<ContactForm>({
    resolver: yupResolver(validationSchema)
  });
  const [toastError, setToastError] = useState("");
  const [toastSuccess, setToastSuccess] = useState(false);

  const onSubmit = handleSubmit(async values => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        // @ts-ignore
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status !== 200) {
        setToastError(result.text);
        setTimeout(() => setToastError(""), 5000);
      } else {
        setToastSuccess(true);
        setTimeout(() => setToastSuccess(false), 5000);
      }
    } catch (e: any) {
      setToastError(e.message ?? "Something went wrong");
      setTimeout(() => setToastError(""), 5000);
    }

    reset();
  });

  return (
    <>
      <div className="card w-11/12 sm:w-8/12 lg:w-6/12 bg-base-100 shadow-xl mx-auto">
        <form onSubmit={onSubmit} className="card-body">
          <h2 className="card-title justify-center">Contact</h2>
          <div className="form-control">
            <label htmlFor="name-input" className="label label-text">
              <span className="label-text">Name</span>
              {errors?.name?.message && (
                <span className="text-error label-text-alt">{errors.name.message}</span>
              )}
            </label>

            <input
              id="name-input"
              type="text"
              {...register("name")}
              placeholder="Enter Name"
              className={`input input-bordered ${errors?.name?.message && "input-error"}`}
              autoFocus
            />
          </div>

          <div className="form-control">
            <label htmlFor="email-input" className="label">
              <span className="label-text">Email</span>
              {errors?.email?.message && (
                <span className="text-error label-text-alt">{errors.email.message}</span>
              )}
            </label>

            <input
              id="email-input"
              type="email"
              {...register("email")}
              placeholder="Enter Email"
              className={`input input-bordered ${errors?.email?.message && "input-error"}`}
            />
          </div>

          <div className="form-control">
            <label htmlFor="subject-input" className="label">
              <span className="label-text">Subject</span>
              {errors?.subject?.message && (
                <span className="text-error label-text-alt">{errors.subject.message}</span>
              )}
            </label>

            <input
              id="subject-input"
              type="text"
              {...register("subject")}
              placeholder="Enter subject"
              className={`input input-bordered ${errors?.subject?.message && "input-error"}`}
            />
          </div>

          <div className="form-control">
            <label htmlFor="message-input" className="label">
              <span className="label-text">Message</span>
              {errors?.message?.message && (
                <span className="label-text-alt text-error">{errors.message.message}</span>
              )}
            </label>

            <textarea
              id="message-input"
              {...register("message")}
              placeholder="Enter Message"
              className={`textarea textarea-bordered ${
                errors?.message?.message && "textarea-error"
              }`}
            />

            <button
              type="submit"
              className={`btn btn-primary btn-block mt-6 ${isSubmitting && "loading"}`}
            >
              {isSubmitting ? "" : "Send"}
            </button>
          </div>
        </form>
      </div>

      <div className="absolute bottom-4 right-4">
        {toastError && <Toast title="Error" type="bg-error" body={toastError} />}

        {toastSuccess && <Toast title="Email sent successfully" type="bg-success" />}
      </div>
    </>
  );
};

export default Contact;
