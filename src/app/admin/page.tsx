"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Trash2, Users, CalendarDays, Mail, MessageSquare } from "lucide-react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");

  // MongoDB se saare leads lana
  const loadContacts = async () => {
    const res = await fetch("http://localhost:5000/api/contacts");
    const data = await res.json();
    setContacts(data.data);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  // Search logic
  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [contacts, search]);

  // Aaj ke leads count
  const todayLeads = contacts.filter((contact) => {
    const today = new Date().toDateString();
    return new Date(contact.createdAt).toDateString() === today;
  }).length;

  // Delete lead
  const deleteLead = async (id: string) => {
    const confirmDelete = confirm("Delete this lead?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });

    setContacts((prev) => prev.filter((contact) => contact._id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-violet-400 uppercase tracking-[0.25em] text-xs font-semibold">
          Aryan Studio CRM
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Client Leads Dashboard
        </h1>
        <p className="text-slate-400 mt-2">
          Manage all inquiries from your portfolio website.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
          <div className="flex items-center gap-3">
            <Users className="text-violet-400" />
            <span className="text-slate-400">Total Leads</span>
          </div>
          <h2 className="text-4xl font-bold mt-4">{contacts.length}</h2>
        </div>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-cyan-400" />
            <span className="text-slate-400">Today's Leads</span>
          </div>
          <h2 className="text-4xl font-bold mt-4">{todayLeads}</h2>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-3.5 text-slate-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl bg-slate-900 border border-slate-800 pl-12 pr-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500"
        />
      </div>

      {/* Leads */}
      <div className="space-y-4">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            No leads found.
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-6 hover:border-violet-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold capitalize">
                      {contact.name}
                    </h3>

                    <div className="flex items-center gap-2 text-violet-300 mt-1">
                      <Mail className="w-4 h-4" />
                      <span>{contact.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-300">
                    <MessageSquare className="w-4 h-4 mt-1" />
                    <p>{contact.message}</p>
                  </div>

                  <p className="text-sm text-slate-500">
                    {new Date(contact.createdAt).toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => deleteLead(contact._id)}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}