import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TableItem } from "../types/types";

interface ModalProps {
  formData: TableItem | null;
  onSave: (data: Omit<TableItem, "id">) => void;
  onClose: () => void;
}

export default function Modal({ formData, onSave, onClose }: ModalProps) {
  const formik = useFormik<Omit<TableItem, "id">>({
    initialValues: {
      name: formData?.name || "",
      surname: formData?.surname || "",
      age: formData?.age || "",
      description: formData?.description || "",
      workplace: formData?.workplace || "",
      total: formData?.total || 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      age: Yup.number().required("Required"),
      description: Yup.string().required("Required"),
      workplace: Yup.string().required("Required"),
      total: Yup.number().required("Required"),
    }),
    enableReinitialize: true, // This ensures the form reinitializes when formData changes
    onSubmit: (values) => {
      onSave(values);
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}

          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.surname && formik.errors.surname ? (
            <div className="text-red-500">{formik.errors.surname}</div>
          ) : null}

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500">{formik.errors.age}</div>
          ) : null}

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}

          <input
            type="text"
            name="workplace"
            placeholder="Workplace"
            value={formik.values.workplace}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.workplace && formik.errors.workplace ? (
            <div className="text-red-500">{formik.errors.workplace}</div>
          ) : null}

          <input
            type="number"
            name="total"
            placeholder="Total"
            value={formik.values.total}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 w-full"
          />
          {formik.touched.total && formik.errors.total ? (
            <div className="text-red-500">{formik.errors.total}</div>
          ) : null}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded w-full"
          >
            {formData ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}
