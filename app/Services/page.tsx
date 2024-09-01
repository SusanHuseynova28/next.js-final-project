"use client"
import React, { useState } from "react";
import useSWR from "swr";
import Modal from "./Modal";
import { TableItem } from "../types/types";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../features/header/page";
import Card from "./Card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Services() {
  const { data, mutate } = useSWR<TableItem[]>("http://localhost:3001/tables", fetcher);
  const [formData, setFormData] = useState<TableItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreate = async (newItem: Omit<TableItem, "id">) => {
    try {
      const response = await fetch("http://localhost:3001/tables", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to create new item");
      }

      mutate(); 
      toast.success("Created successfully!", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error creating item", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
      console.error("Create Error: ", error);
    }
  };

  const handleUpdate = async (id: string, updatedItem: Omit<TableItem, "id">) => {
    try {
      const response = await fetch(`http://localhost:3001/tables/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        throw new Error("Failed to update item");
      }

      mutate(); 
      toast.success("Updated successfully!", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error updating item", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
      console.error("Update Error: ", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/tables/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      mutate(); 
      toast.success("Deleted successfully!", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
    } catch (error) {
      toast.error("Error deleting item", {
        autoClose: 3000,  // Automatically close the toast after 3 seconds
      });
      console.error("Delete Error: ", error);
    }
  };

  const openModal = (item?: TableItem) => {
    setFormData(item || {
      name: '',
      surname: '',
      age: '',
      description: '',
      workplace: '',
      total: 0,
    } as TableItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredData = data?.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.workplace.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="p-8">
        <ToastContainer
          autoClose={3000}  // Ensure autoClose is set to 3000ms
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={true}
          draggable={true}
          pauseOnHover={true}
        />

        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => openModal()}
            className="mb-4 bg-blue-600 text-white py-2 px-4 rounded"
          >
            Create New Table
          </button>
        </div>

        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Name</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Surname</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Age</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Description</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Workplace</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Total</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b border-gray-200">{item.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{item.surname}</td>
                <td className="py-3 px-4 border-b border-gray-200">{item.age}</td>
                <td className="py-3 px-4 border-b border-gray-200">{item.description}</td>
                <td className="py-3 px-4 border-b border-gray-200">{item.workplace}</td>
                <td className="py-3 px-4 border-b border-gray-200">{item.total}</td>
                <td className="py-3 px-4 border-b border-gray-200 flex space-x-4">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => openModal(item)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-600 hover:underline ml-4"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <Modal
            formData={formData}
            onSave={(data) => {
              if (formData?.id) {
                handleUpdate(formData.id, data);
              } else {
                handleCreate(data);
              }
            }}
            onClose={closeModal}
          />
        )}
      </div>
      <Card />
    </>
  );
}
