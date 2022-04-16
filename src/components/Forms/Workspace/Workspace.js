import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Workspace() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    workspaceName: yup.string().required(),
    workspaceURL: yup.string().url().required(),
  });

  return (
    <Formik
      initialValues={{
        workspaceName: "",
        workspaceURL: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Workspace Name</label>
          <Field
            name="workspaceName"
            className="rounded-md border-2 p-2"
            placeholder="My Workspace"
          />
        </div>
        <ErrorMessage name="workspaceName" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Workspace URL</label>
          <Field
            name="workspaceURL"
            className="rounded-md border-2 p-2"
            placeholder="https://my-workspace.com"
          />
        </div>
        <ErrorMessage name="workspaceURL" render={renderError} />
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Continue
        </button>
      </Form>
    </Formik>
  );
}

export default Workspace;
