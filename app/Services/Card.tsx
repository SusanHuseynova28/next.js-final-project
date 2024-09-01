"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { TableItem } from "../types/types";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Card() {
  const { data, mutate } = useSWR<TableItem[]>(
    "http://localhost:3001/tables",
    fetcher
  );
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
      toast.success("Created successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error creating item");
      console.error("Create Error: ", error);
    }
  };

  const handleUpdate = async (
    id: string,
    updatedItem: Omit<TableItem, "id">
  ) => {
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
      toast.success("Updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error updating item");
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
      toast.success("Deleted successfully!");
    } catch (error) {
      toast.error("Error deleting item");
      console.error("Delete Error: ", error);
    }
  };

  const openModal = (item?: TableItem) => {
    setFormData(
      item ||
        ({
          name: "",
          surname: "",
          age: "",
          description: "",
          workplace: "",
          total: 0,
        } as TableItem)
    );
    setIsModalOpen(true);
  };

  const filteredData = data?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.workplace.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <ToastContainer />
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
          Create New Card
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData?.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-4">
            <h3 className="text-lg font-bold">
              {item.name} {item.surname}
            </h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">Age: {item.age}</p>
            <p className="text-gray-600">Workplace: {item.workplace}</p>
            <p className="text-gray-600">Total: {item.total}</p>
            <div className="mt-4 flex space-x-4">
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
            </div>
          </div>
        ))}
      </div>

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
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
