import React from 'react';

const SystemSpecsForm = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg space-y-6">
      <h2 className="text-xl font-semibold mb-4">System Specifications</h2>
      
      <div>
        <label className="block text-sm font-medium mb-2">Processor (CPU)</label>
        <input
          type="text"
          name="cpu"
          value={formData.cpu}
          onChange={handleInputChange}
          placeholder="e.g., Intel Core i5-9400F"
          className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Graphics Card (GPU)</label>
        <input
          type="text"
          name="gpu"
          value={formData.gpu}
          onChange={handleInputChange}
          placeholder="e.g., NVIDIA GTX 1660"
          className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">RAM (GB)</label>
        <select
          name="ram"
          value={formData.ram}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="4">4 GB</option>
          <option value="8">8 GB</option>
          <option value="16">16 GB</option>
          <option value="32">32 GB</option>
          <option value="64">64 GB</option>
        </select>
      </div>
    </div>
  );
};

export default SystemSpecsForm; 