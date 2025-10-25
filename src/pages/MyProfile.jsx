import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router";
import userIcon from '../assets/user.png'

const MyProfile = () => {
    const { user: ctxUser } = useContext(AuthContext) || {};
    const [user, setUser] = useState(ctxUser || null);

    const [isModalOpen, setModalOpen] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [photoInput, setPhotoInput] = useState("");

    useEffect(() => {
        setUser(ctxUser || null);
        setNameInput(ctxUser?.displayName || "");
        setPhotoInput(ctxUser?.photoURL || "");
    }, [ctxUser]);

    const openModal = () => {
        setNameInput(user?.displayName || "");
        setPhotoInput(user?.photoURL || "");
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!nameInput.trim()) {
            toast.error("Name cannot be empty.");
            return;
        }

        try {
            const auth = getAuth();
            if (auth && auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: nameInput.trim(),
                    photoURL: photoInput.trim() || null,
                });

                const updated = {
                    ...user,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL,
                };
                setUser(updated);
                toast.success("Profile updated successfully!");
            } else {
                const updated = {
                    ...user,
                    displayName: nameInput.trim(),
                    photoURL: photoInput.trim(),
                };
                setUser(updated);
                toast.success("Profile updated locally!");
            }
            closeModal();
        } catch (err) {
            console.error("Update profile error:", err);
            toast.error("Failed to update profile.");
        }
    };

    const displayName = user?.displayName || "No name provided";
    const email = user?.email || "No email provided";
    const photo = user?.photoURL || userIcon;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-xl overflow-hidden border">
                <div className="p-8 grid md:grid-cols-3 gap-6 items-center">
                    <div className="flex justify-center md:justify-start">
                        <div className="avatar">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-sm">
                                <img src={photo} alt={displayName} className="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{displayName}</h1>
                        <p className="text-gray-600 mb-4">{email}</p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Welcome to your profile page. You can view and edit your info below.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button onClick={openModal} className="btn btn-primary">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 border-t">
                    <div className="grid sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-sm text-gray-500">Provider Email</div>
                            <div className="font-semibold text-gray-800">{user?.providerEmail || "-"}</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">Member Since</div>
                            <div className="font-semibold text-gray-800">{user?.createdAt || "N/A"}</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">Role</div>
                            <div className="font-semibold text-gray-800">{user?.role || "User"}</div>
                        </div>
                    </div>
                </div>
            </div>

            {!user && (
                <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-4">You are not logged in.</p>
                    <div className="flex justify-center gap-3">
                        <Link to="/auth/login" className="btn btn-primary">Login</Link>
                        <Link to="/auth/registration" className="btn btn-outline">Register</Link>
                    </div>
                </div>
            )}

            {/* DaisyUI Modal */}
            {isModalOpen && (
                <>
                    <dialog open className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg mb-3">Update Profile</h3>
                            <form onSubmit={handleUpdate} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={nameInput}
                                        onChange={(e) => setNameInput(e.target.value)}
                                        placeholder="Your Name"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Photo URL</label>
                                    <input
                                        type="text"
                                        value={photoInput}
                                        onChange={(e) => setPhotoInput(e.target.value)}
                                        placeholder="Photo-URL"
                                        required
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="modal-action">
                                    <button type="button" onClick={closeModal} className="btn">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </>
            )}
        </div>
    );
};

export default MyProfile;
