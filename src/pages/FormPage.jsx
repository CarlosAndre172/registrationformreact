import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormPage() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      accountType: "personal",
      age: "",
      referrer: "",
      bio: "",
      terms: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Obrigatório"),
      lastName: Yup.string().required("Obrigatório"),
      email: Yup.string().email("Email inválido").required("Obrigatório"),
      password: Yup.string()
        .matches(/[a-z0-5]{8,}/, "Mínimo 8 caracteres (a-z, 0-5)")
        .required("Obrigatório"),
      age: Yup.number()
        .min(13, "Mínimo 13 anos")
        .max(120, "Máximo 120 anos"),
      terms: Yup.boolean().oneOf([true], "Você deve aceitar os termos"),
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Formulário enviado!");
    },
  });

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <label>
            First Name:
            <input
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
          </label>

          <label>
            Last Name:
            <input
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && <p>{formik.errors.lastName}</p>}
          </label>

          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && <p>{formik.errors.email}</p>}
          </label>

          <label>
            Password:
            <input
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && <p>{formik.errors.password}</p>}
          </label>
        </fieldset>

        <fieldset>
          <legend>Account Type</legend>

          <label>
            <input
              type="radio"
              name="accountType"
              value="personal"
              onChange={formik.handleChange}
              checked={formik.values.accountType === "personal"}
            />
            Personal
          </label>

          <label>
            <input
              type="radio"
              name="accountType"
              value="business"
              onChange={formik.handleChange}
            />
            Business
          </label>
        </fieldset>

        <fieldset>
          <label>
            Age:
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age && <p>{formik.errors.age}</p>}
          </label>

          <label>
            Referrer:
            <select
              name="referrer"
              onChange={formik.handleChange}
              value={formik.values.referrer}
            >
              <option value="">Selecione</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">YouTube</option>
              <option value="3">Forum</option>
              <option value="4">Other</option>
            </select>
          </label>

          <label>
            Bio:
            <textarea
              name="bio"
              onChange={formik.handleChange}
              value={formik.values.bio}
            />
          </label>
        </fieldset>

        <label>
          <input
            type="checkbox"
            name="terms"
            onChange={formik.handleChange}
          />
          Aceito os termos
          {formik.errors.terms && <p>{formik.errors.terms}</p>}
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}