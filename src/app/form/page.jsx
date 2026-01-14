"use client";
import React, { useState } from "react";

export default function page() {
  const [section, setSection] = useState(1);

  return (
    <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          {section === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Section 1</h2>
              <p className="mb-4">This is the content of section 1.</p>
              {/* Button to go to Section 2 */}
              <button onClick={() => setSection(2)}>Next Section</button>
            </div>
          )}
          {section === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Section 2</h2>
              <p className="mb-4">This is the content of section 2.</p>
              {/* Button to go back to Section 1 */}
              <button onClick={() => setSection(1)}>Previous Section</button>
              <button onClick={() => setSection(3)}>Next</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
