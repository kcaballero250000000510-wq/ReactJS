import { useState, useRef } from 'react';

export default function App() {
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  const [categories, setCategories] = useState([]);

  const catNameInputRef = useRef(null);

  const handleAddCategory = (e) => {
    e.preventDefault();

    const name = catName.trim();
    const desc = catDesc.trim();

    // Guard Clause Validation
    if (!name || !desc) {
      alert('Please complete both input fields.');
      return;
    }

    // Append new category row to state
    setCategories((prev) => [
      ...prev,
      { id: Date.now(), name, description: desc }
    ]);

    // Reset inputs & refocus name field
    setCatName('');
    setCatDesc('');
    catNameInputRef.current?.focus();
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Registration Card */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header bg-primary text-white py-3">
              <h1 className="h5 mb-0 fw-bold">Income Category Registration</h1>
            </div>
            <div className="card-body p-4">
              <form id="categoryForm" onSubmit={handleAddCategory}>
                <div className="mb-3">
                  <label htmlFor="txtCatName" className="form-label fw-semibold">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="txtCatName"
                    ref={catNameInputRef}
                    className="form-control"
                    placeholder="e.g., Consulting"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="txtCatDesc" className="form-label fw-semibold">
                    Description
                  </label>
                  <input
                    type="text"
                    id="txtCatDesc"
                    className="form-control"
                    placeholder="e.g., Enterprise technical support contract"
                    value={catDesc}
                    onChange={(e) => setCatDesc(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  id="btnAdd"
                  className="btn btn-primary px-4 fw-semibold"
                >
                  Save Category
                </button>
              </form>
            </div>
          </div>

          {/* Ledger Table Card */}
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3">
              <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
                Registered Categories
              </h2>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col" style={{ width: '35%' }}>
                      Category Name
                    </th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody id="listIncomeCat">
                  {categories.map((item) => (
                    <tr key={item.id}>
                      <td className="fw-semibold text-dark">{item.name}</td>
                      <td className="text-secondary">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}