"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { auth, db, googleProvider, isConfigured } from "@/src/lib/firebase";
import { signInWithPopup, signOut, User } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from "firebase/firestore";
import type { Feedback, Reply } from "@/src/types/feedback";
import { X, Star, LogIn, LogOut, ThumbsUp, ThumbsDown, MessageCircle, Trash2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [user, setUser] = useState<User | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [editingFeedback, setEditingFeedback] = useState<string | null>(null);
  const [editRating, setEditRating] = useState(0);
  const [editComment, setEditComment] = useState("");

  // Auth state listener
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Fetch feedbacks
  useEffect(() => {
    if (!isOpen || !db) return;

    const q = query(collection(db, "feedbacks"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedbackData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          likes: data.likes || [],
          dislikes: data.dislikes || [],
          replies: (data.replies || []).map((reply: any) => ({
            ...reply,
            createdAt: reply.createdAt?.toDate ? reply.createdAt.toDate() : 
                       reply.createdAt instanceof Date ? reply.createdAt : 
                       new Date(),
          })),
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
        };
      }) as Feedback[];
      setFeedbacks(feedbackData);
    });

    return () => unsubscribe();
  }, [isOpen]);

  const handleGoogleLogin = async () => {
    if (!auth || !googleProvider) return;
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || rating === 0 || !comment.trim() || !db) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "feedbacks"), {
        userId: user.uid,
        userName: user.displayName || "Anonymous",
        userEmail: user.email,
        userPhoto: user.photoURL,
        rating,
        comment: comment.trim(),
        likes: [],
        dislikes: [],
        replies: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      // Reset form
      setRating(0);
      setComment("");
      alert("Thank you for your feedback! 🎉");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const sum = feedbacks.reduce((acc, f) => acc + f.rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  };

  const handleLike = async (feedbackId: string) => {
    if (!user || !db) return;

    const feedbackRef = doc(db, "feedbacks", feedbackId);
    const feedback = feedbacks.find((f) => f.id === feedbackId);
    if (!feedback) return;

    const hasLiked = feedback.likes?.includes(user.uid);
    const hasDisliked = feedback.dislikes?.includes(user.uid);

    try {
      if (hasLiked) {
        await updateDoc(feedbackRef, {
          likes: arrayRemove(user.uid),
        });
      } else {
        const updates: any = {
          likes: arrayUnion(user.uid),
        };
        if (hasDisliked) {
          updates.dislikes = arrayRemove(user.uid);
        }
        await updateDoc(feedbackRef, updates);
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  const handleDislike = async (feedbackId: string) => {
    if (!user || !db) return;

    const feedbackRef = doc(db, "feedbacks", feedbackId);
    const feedback = feedbacks.find((f) => f.id === feedbackId);
    if (!feedback) return;

    const hasLiked = feedback.likes?.includes(user.uid);
    const hasDisliked = feedback.dislikes?.includes(user.uid);

    try {
      if (hasDisliked) {
        await updateDoc(feedbackRef, {
          dislikes: arrayRemove(user.uid),
        });
      } else {
        const updates: any = {
          dislikes: arrayUnion(user.uid),
        };
        if (hasLiked) {
          updates.likes = arrayRemove(user.uid);
        }
        await updateDoc(feedbackRef, updates);
      }
    } catch (error) {
      console.error("Error updating dislike:", error);
    }
  };

  const handleReply = async (feedbackId: string) => {
    if (!user || !db || !replyText.trim()) return;

    const feedbackRef = doc(db, "feedbacks", feedbackId);

    const newReply: Reply = {
      id: `${Date.now()}-${user.uid}`,
      userId: user.uid,
      userName: user.displayName || "Anonymous",
      userEmail: user.email || "",
      userPhoto: user.photoURL || undefined,
      comment: replyText.trim(),
      createdAt: new Date(),
    };

    try {
      await updateDoc(feedbackRef, {
        replies: arrayUnion(newReply),
      });
      setReplyText("");
      setReplyingTo(null);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleDeleteFeedback = async (feedbackId: string) => {
    if (!user || !db) return;
    
    const feedback = feedbacks.find((f) => f.id === feedbackId);
    if (!feedback || feedback.userId !== user.uid) {
      alert("You can only delete your own feedback.");
      return;
    }

    if (!confirm("Are you sure you want to delete this feedback?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "feedbacks", feedbackId));
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("Failed to delete feedback. Please try again.");
    }
  };

  const handleStartEdit = (feedback: Feedback) => {
    if (!user || feedback.userId !== user.uid) return;
    setEditingFeedback(feedback.id);
    setEditRating(feedback.rating);
    setEditComment(feedback.comment);
  };

  const handleCancelEdit = () => {
    setEditingFeedback(null);
    setEditRating(0);
    setEditComment("");
  };

  const handleSaveEdit = async (feedbackId: string) => {
    if (!user || !db || editRating === 0 || !editComment.trim()) return;

    try {
      await updateDoc(doc(db, "feedbacks", feedbackId), {
        rating: editRating,
        comment: editComment.trim(),
        updatedAt: serverTimestamp(),
      });
      setEditingFeedback(null);
      setEditRating(0);
      setEditComment("");
    } catch (error) {
      console.error("Error updating feedback:", error);
      alert("Failed to update feedback. Please try again.");
    }
  };

  // Show setup message if Firebase not configured
  if (!isConfigured) {
    return isOpen ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
          <div className="text-center">
            <div className="text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Firebase Not Configured
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Please set up Firebase configuration to enable the feedback
              feature.
            </p>
            <div className="text-left bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm">
              <p className="font-semibold mb-2">Setup Instructions:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>Create a Firebase project</li>
                <li>Enable Authentication (Google)</li>
                <li>Enable Firestore Database</li>
                <li>Copy config to .env.local</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio Feedback
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Share your thoughts and rate my portfolio
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
          {/* Stats */}
          <div className="mb-8 grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-3">
                <div className="text-4xl">⭐</div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                    {calculateAverageRating()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <div className="text-4xl">💬</div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {feedbacks.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Feedbacks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth & Form */}
          <div className="mb-8">
            {user ? (
              <div className="space-y-4">
                {/* User Info */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    {user.photoURL && (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {user.displayName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleLogout} variant="outline" size="sm">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>

                {/* Rating & Comment Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rating * (Click once: half star, Click twice: full star)
                    </label>
                    <div className="flex gap-2 items-center">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const currentRating = rating;
                        const isHalf = currentRating === star - 0.5;
                        const isFull = currentRating >= star;
                        
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => {
                              if (currentRating === star - 0.5) {
                                setRating(star);
                              } else {
                                setRating(star - 0.5);
                              }
                            }}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="transition-transform hover:scale-110 relative"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= (hoverRating || rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                            {isHalf && (
                              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-2">
                        {rating > 0 ? rating.toFixed(1) : ''}
                      </span>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Comment *
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your thoughts about this portfolio..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || rating === 0 || !comment.trim()}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Sign in to leave feedback
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Use your Google account to rate and comment
                </p>
                <Button onClick={handleGoogleLogin} size="lg">
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign in with Google
                </Button>
              </div>
            )}
          </div>

          {/* Feedbacks List */}
          {feedbacks.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Recent Feedbacks ({feedbacks.length})
              </h3>
              {feedbacks.map((feedback) => {
                const hasLiked = user && feedback.likes?.includes(user.uid);
                const hasDisliked = user && feedback.dislikes?.includes(user.uid);
                const isReplying = replyingTo === feedback.id;
                const isEditing = editingFeedback === feedback.id;
                const isOwner = user && feedback.userId === user.uid;

                return (
                  <div
                    key={feedback.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      {feedback.userPhoto && (
                        <Image
                          src={feedback.userPhoto}
                          alt={feedback.userName}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {feedback.userName}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {feedback.createdAt.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {!isEditing && (
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => {
                                  const fillPercentage = feedback.rating >= star ? 100 : 
                                                       feedback.rating > star - 1 ? (feedback.rating - (star - 1)) * 100 : 0;
                                  return (
                                    <div key={star} className="relative">
                                      <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                                      {fillPercentage > 0 && (
                                        <div 
                                          className="absolute inset-0 overflow-hidden" 
                                          style={{ width: `${fillPercentage}%` }}
                                        >
                                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            {isOwner && !isEditing && (
                              <div className="flex gap-1 ml-2">
                                <button
                                  onClick={() => handleStartEdit(feedback)}
                                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                  title="Edit"
                                >
                                  <Edit2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                </button>
                                <button
                                  onClick={() => handleDeleteFeedback(feedback.id)}
                                  className="p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {isEditing ? (
                          <div className="space-y-3 mb-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Rating (Click once: half star, Click twice: full star)
                              </label>
                              <div className="flex gap-1 items-center">
                                {[1, 2, 3, 4, 5].map((star) => {
                                  const currentRating = editRating;
                                  const isHalf = currentRating === star - 0.5;
                                  const isFull = currentRating >= star;
                                  
                                  return (
                                    <button
                                      key={star}
                                      type="button"
                                      onClick={() => {
                                        if (currentRating === star - 0.5) {
                                          setEditRating(star);
                                        } else {
                                          setEditRating(star - 0.5);
                                        }
                                      }}
                                      className="transition-transform hover:scale-110 relative"
                                    >
                                      <Star
                                        className={`h-6 w-6 ${
                                          star <= editRating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300 dark:text-gray-600"
                                        }`}
                                      />
                                      {isHalf && (
                                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                                          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                                        </div>
                                      )}
                                    </button>
                                  );
                                })}
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-2">
                                  {editRating > 0 ? editRating.toFixed(1) : ''}
                                </span>
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Comment
                              </label>
                              <textarea
                                value={editComment}
                                onChange={(e) => setEditComment(e.target.value)}
                                rows={3}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleSaveEdit(feedback.id)}
                                disabled={editRating === 0 || !editComment.trim()}
                                size="sm"
                              >
                                Save
                              </Button>
                              <Button
                                onClick={handleCancelEdit}
                                variant="outline"
                                size="sm"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                            {feedback.comment}
                          </p>
                        )}

                        {!isEditing && (
                          <div className="flex items-center gap-4 mb-3">
                            <button
                              onClick={() => handleLike(feedback.id)}
                              disabled={!user}
                              className={`flex items-center gap-1 text-sm transition-colors ${
                                hasLiked
                                  ? "text-blue-600 dark:text-blue-400"
                                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                              <ThumbsUp className={`h-4 w-4 ${hasLiked ? "fill-current" : ""}`} />
                              <span>{feedback.likes?.length || 0}</span>
                            </button>

                            <button
                              onClick={() => handleDislike(feedback.id)}
                              disabled={!user}
                              className={`flex items-center gap-1 text-sm transition-colors ${
                                hasDisliked
                                  ? "text-red-600 dark:text-red-400"
                                  : "text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                              <ThumbsDown className={`h-4 w-4 ${hasDisliked ? "fill-current" : ""}`} />
                              <span>{feedback.dislikes?.length || 0}</span>
                            </button>

                            <button
                              onClick={() => {
                                if (!user) return;
                                setReplyingTo(isReplying ? null : feedback.id);
                                setReplyText("");
                              }}
                              disabled={!user}
                              className={`flex items-center gap-1 text-sm transition-colors ${
                                isReplying
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                              } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>
                                Reply{" "}
                                {feedback.replies && feedback.replies.length > 0
                                  ? `(${feedback.replies.length})`
                                  : ""}
                              </span>
                            </button>
                          </div>
                        )}

                        {isReplying && (
                          <div className="mb-3 flex gap-2">
                            <input
                              type="text"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && replyText.trim()) {
                                  handleReply(feedback.id);
                                }
                              }}
                              placeholder="Write a reply..."
                              className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                            />
                            <Button
                              onClick={() => handleReply(feedback.id)}
                              disabled={!replyText.trim()}
                              size="sm"
                            >
                              Send
                            </Button>
                          </div>
                        )}

                        {feedback.replies && feedback.replies.length > 0 && (
                          <div className="space-y-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                            {feedback.replies.map((reply) => (
                              <div key={reply.id} className="text-sm">
                                <div className="flex items-start gap-2">
                                  {reply.userPhoto && (
                                    <Image
                                      src={reply.userPhoto}
                                      alt={reply.userName}
                                      width={24}
                                      height={24}
                                      className="rounded-full"
                                    />
                                  )}
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium text-gray-900 dark:text-white">
                                        {reply.userName}
                                      </span>
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {reply.createdAt.toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                        })}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                                      {reply.comment}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
