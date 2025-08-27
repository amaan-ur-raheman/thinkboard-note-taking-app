import { useEffect, useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { useParams, Link } from "react-router";
import { useNavigate } from "react-router";
import { ArrowLeft as ArrowLeftIcon, Trash2 as Trash2Icon } from "lucide-react";
import api from "../lib/axios";

const NoteDetailPage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            try {
                await api.delete(`/notes/${id}`);
                toast.success("Note deleted successfully");
                navigate("/");
            } catch (error) {
                console.error("Error deleting note:", error);
                toast.error("Failed to delete note");
            }
        }
    };

    const handleSave = async () => {
        if (!note.title.trim() || !note.content.trim()) {
            toast.error("All fields are required");
            return;
        }

        setSaving(true);

        try {
            await api.put(`/notes/${id}`, note);
            toast.success("Note updated successfully");
            navigate("/");
        } catch (error) {
            console.log("Error updating note:", error);
            toast.error("Failed to update note");
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`);
                setNote(res.data);
            } catch (error) {
                console.log("Error fetching note", error);
                toast.error("Failed to fetch note");
            } finally {
                setLoading(false);
            }
        };

        fetchNote();
    }, [id]);

    console.log({ note });

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
                <div className="flex flex-col items-center space-y-4">
                    <LoaderIcon className="animate-spin size-12 text-primary" />
                    <p className="text-lg font-medium text-base-content/70">
                        Loading note...
                    </p>
                </div>
            </div>
        );
    }

    if (!note) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
                <div className="text-center">
                    <h2 className="mb-4 text-2xl font-bold">Note not found</h2>
                    <Link to="/" className="btn btn-primary">
                        Back to Notes
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container max-w-4xl px-4 py-8 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <Link to="/" className="btn btn-ghost">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Notes
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="btn btn-error btn-outline"
                    >
                        <Trash2Icon className="w-5 h-5" />
                        Delete Note
                    </button>
                </div>

                <div className="card bg-base-100">
                    <div className="card-body">
                        <div className="mb-4 form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Note Title"
                                value={note.title}
                                onChange={(e) =>
                                    setNote({ ...note, title: e.target.value })
                                }
                            />
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label">
                                <span className="label-text">Content</span>
                            </label>
                            <textarea
                                className="h-32 textarea textarea-bordered"
                                placeholder="Write your note here..."
                                value={note.content}
                                onChange={(e) =>
                                    setNote({
                                        ...note,
                                        content: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="justify-end card-actions">
                            <button
                                className="btn btn-primary"
                                disabled={saving}
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteDetailPage;
