import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!input.trim()) return;
    const newNote = { id: Date.now(), text: input.trim() };
    setNotes([newNote, ...notes]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">📝 My Notes</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded"
            placeholder="Write a new note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addNote}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-3">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className="p-4 bg-white rounded shadow flex justify-between items-center"
              >
                <span>{note.text}</span>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
