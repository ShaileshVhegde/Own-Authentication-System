import React from 'react';
import { Shield, LogOut, User } from 'lucide-react';

const Dashboard = ({ user, onLogout }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOGgydi0yaC0ydjJ6bS0yLTJoLTJ2Mmgydi0yem0tMiAydjJoMnYtMmgtMnptMiAyaDJ2MmgtMnYtMnptMC00aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

            <div className="relative max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                                <p className="text-purple-200 text-sm">Welcome back!</p>
                            </div>
                        </div>
                        <button
                            onClick={onLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-200"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* User Info Card */}
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                                <User className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">User Info</h3>
                        </div>
                        <div className="space-y-2">
                            {user?.username && (
                                <div>
                                    <p className="text-purple-300 text-sm">Username</p>
                                    <p className="text-white font-medium">{user.username}</p>
                                </div>
                            )}
                            {user?.email && (
                                <div>
                                    <p className="text-purple-300 text-sm">Email</p>
                                    <p className="text-white font-medium">{user.email}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Welcome Card */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl shadow-2xl border border-purple-300/30 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">🎉 Hello World!</h3>
                        <p className="text-purple-200">
                            You have successfully logged in to your account. This is your personalized dashboard.
                        </p>
                    </div>

                    {/* Stats Card */}
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-purple-200">Status</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                                    Active
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-purple-200">Account Type</span>
                                <span className="text-white font-medium">Free</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content */}
                <div className="mt-6 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Welcome to Your Dashboard! 🚀
                    </h2>
                    <p className="text-purple-200 text-lg mb-6">
                        Hello World! Your authentication is working perfectly.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-300">
                        <Shield className="w-5 h-5" />
                        <span>Secured by SVH Authentication</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
