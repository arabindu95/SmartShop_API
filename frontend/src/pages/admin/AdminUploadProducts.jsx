import axios from "axios";
import React, { useState } from "react";

const AdminUploadProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  //file handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  //submit handler
  const handleSubmit = async () => {
    if (!title || !description || !price || !image) {
      alert("all fields mandotary");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://localhost:5000/smartshop/api/product/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        console.log("updated successfully");
      } else {
        console.log("upload failed");
      }
    } catch (error) {
      console.log(error, "error in file uploaded");
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-gray-100 overflow-x-hidden">
      <h1 className="text-lg font-bold">upload section</h1>
      {/* Form container */}
      <div className="md:w-[650px] bg-white mt-20 ">
        <div className="md:border-slate-100 md:border md:shadow-md md:shadow-gray-200 p-10 rounded-xl">
          {/* Form rows */}
          <div className="flex flex-col gap-8">
            {/* Title */}
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <label className="font-semibold">Title:</label>
              <div className="flex flex-col">
                <input
                  className="p-1 border border-slate-400 rounded-sm md:w-[350px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                  type="text"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p className="text-slate-300">title of the image</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <label className="font-semibold">Description:</label>
              <div>
                <input
                  className="p-1 border border-slate-400 rounded-sm md:w-[350px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                  type="text"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p className="text-slate-300">caption of the image</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <label className="font-semibold">Price:</label>
              <div>
                <input
                  className="p-1 border border-slate-400 rounded-sm md:w-[350px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                  type="text"
                  placeholder="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <p className="text-slate-300">price of the image</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center gap-2">
              <label className="font-semibold">Image File:</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-[104px] h-[100px] file:mr-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                        file:bg-blue-100 file:text-blue-700
                          hover:file:cursor-pointer hover:file:bg-blue-200
                          border border-slate-300 rounded-lg  md:ml-36 file:text-wrap py-4 px-2"
              />
              {preview && (
                <img
                  src={preview}
                  className="w-32 h-32 object-cover mt-4 border"
                />
              )}
            </div>
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Upload Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUploadProducts;
