
import React, { useState } from 'react';
import './Discoveries.css';

function Discoveries() {
  const [discoveries, setDiscoveries] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleAdd = () => {
    if (newTitle && newDescription) {
      setDiscoveries([...discoveries, { title: newTitle, description: newDescription }]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(discoveries[index].title);
    setEditDescription(discoveries[index].description);
  };

  const handleUpdate = () => {
    const updatedDiscoveries = discoveries.map((discovery, index) =>
      index === editIndex ? { title: editTitle, description: editDescription } : discovery
    );
    setDiscoveries(updatedDiscoveries);
    setEditIndex(null);
    setEditTitle('');
    setEditDescription('');
  };

  const handleDelete = (index) => {
    const updatedDiscoveries = discoveries.filter((_, i) => i !== index);
    setDiscoveries(updatedDiscoveries);
  };

  return (
    <div className="discoveries-container">
      <h1>Discoveries</h1>

      <div className="add-discovery">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="discovery-list">
        {discoveries.map((discovery, index) => (
          <div key={index} className="discovery-item">
            <h3>{discovery.title}</h3>
            <p>{discovery.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>

      {editIndex !== null && (
        <div className="edit-discovery">
          <h2>Edit Discovery</h2>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Discoveries;


// // Discoveries.js

// import React, { useState } from 'react';
// import './Discoveries.css'; // Import CSS for styling

// function Discoveries() {
//   const [recommendations, setRecommendations] = useState([]);
//   const [newRecommendation, setNewRecommendation] = useState({
//     title: '',
//     description: '',
//     image: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRecommendation({
//       ...newRecommendation,
//       [name]: value
//     });
//   };

//   const handleFileChange = (e) => {
//     setNewRecommendation({
//       ...newRecommendation,
//       image: URL.createObjectURL(e.target.files[0])
//     });
//   };

//   const addRecommendation = () => {
//     setRecommendations([...recommendations, newRecommendation]);
//     setNewRecommendation({ title: '', description: '', image: '' });
//   };

//   const updateRecommendation = (index) => {
//     const updatedRecommendations = recommendations.map((rec, i) => (
//       i === index ? newRecommendation : rec
//     ));
//     setRecommendations(updatedRecommendations);
//   };

//   const deleteRecommendation = (index) => {
//     const updatedRecommendations = recommendations.filter((_, i) => i !== index);
//     setRecommendations(updatedRecommendations);
//   };

//   return (
//     <div className="discoveries-container">
//       <h2>Discoveries</h2>
//       <div className="recommendation-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={newRecommendation.title}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={newRecommendation.description}
//           onChange={handleInputChange}
//         ></textarea>
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleFileChange}
//         />
//         <button onClick={addRecommendation}>Add Recommendation</button>
//       </div>
//       <div className="recommendations-list">
//         {recommendations.map((rec, index) => (
//           <div key={index} className="recommendation">
//             <img src={rec.image} alt={rec.title} className="recommendation-image" />
//             <h3>{rec.title}</h3>
//             <p>{rec.description}</p>
//             <button onClick={() => updateRecommendation(index)}>Update</button>
//             <button onClick={() => deleteRecommendation(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Discoveries;
