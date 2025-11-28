import React from 'react'

const Page = () => {
    return (
        <main className="min-h-screen bg-white text-slate-900 antialiased">
            {/* NAV */}
            <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center shadow-sm">
                        {/* simple mark */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <rect x="4" y="4" width="16" height="16" rx="3" stroke="#111827" strokeWidth="1.2"/>
                            <path d="M7 12h10" stroke="#111827" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="font-semibold tracking-tight">ClauseGuard</span>
                </div>

                <div className="flex items-center gap-4">
                    <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Features</a>
                    <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Pricing</a>
                    <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Docs</a>
                    <button className="ml-3 px-4 py-2 rounded-md bg-slate-900 text-white text-sm shadow-sm hover:opacity-95">
                        Sign in
                    </button>
                </div>
            </nav>

            {/* HERO */}
            <header className="max-w-6xl mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Know your contracts. Instantly.
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl">
                            Upload any contract or agreement. ClauseGuard scans, highlights risks, and gives clear next steps —
                            all in a clean, human-friendly summary. Spend minutes, not hours.
                        </p>

                        <div className="flex gap-3 items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="file" className="sr-only" aria-hidden />
                                <div className="px-5 py-3 rounded-md border border-slate-200 bg-white text-sm shadow-sm hover:shadow-md">
                                    Upload document
                                </div>
                            </label>

                            <button className="px-5 py-3 rounded-md bg-slate-900 text-white text-sm shadow-sm hover:opacity-95">
                                Try demo
                            </button>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div>✅ 60s analysis</div>
                            <div>🔒 Enterprise grade</div>
                            <div>💼 Trusted by teams</div>
                        </div>
                    </div>

                    {/* Hero preview (annotated doc) */}
                    <div className="rounded-xl border border-slate-100 shadow-lg bg-white p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="space-y-1">
                                <div className="w-36 h-3 bg-slate-100 rounded-full" />
                                <div className="w-24 h-2 bg-slate-100 rounded-full mt-1" />
                            </div>
                            <div className="text-xs text-slate-500">Page 1 / 3</div>
                        </div>

                        <article className="prose prose-sm max-w-none text-slate-800">
                            <p className="mb-2">
                                <span className="font-medium">Agreement for Services</span> — This Agreement (Agreement) is entered into...
                            </p>

                            <p className="mb-2">
                                <mark className="bg-red-100 text-red-800 rounded-sm px-1">❌ Missing termination notice period</mark>
                            </p>

                            <p className="mb-2">
                                <span className="bg-green-50 text-green-800 rounded-sm px-1">✅ Confidentiality clause present</span>
                            </p>

                            <p className="text-slate-500 text-sm mt-4">
                                Highlighted clauses are interactive in-app. Click to see suggested edits and risk level.
                            </p>
                        </article>
                    </div>
                </div>
            </header>

            {/* FEATURES */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg border border-slate-100">
                        <h3 className="font-semibold mb-2">Instant Summaries</h3>
                        <p className="text-sm text-slate-600">Short executive briefs so you understand the contract in seconds.</p>
                    </div>

                    <div className="p-6 rounded-lg border border-slate-100">
                        <h3 className="font-semibold mb-2">Red / Green Highlights</h3>
                        <p className="text-sm text-slate-600">Problematic sections are highlighted in red, well-written clauses in green.</p>
                    </div>

                    <div className="p-6 rounded-lg border border-slate-100">
                        <h3 className="font-semibold mb-2">Custom Checks</h3>
                        <p className="text-sm text-slate-600">Add your own rules (jurisdiction, payment terms, IP protection) and the audit adapts.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 mt-14">
                <div className="bg-white border border-slate-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold">Start auditing contracts today</h2>
                        <p className="text-slate-600 mt-1">Free tier, no credit card. Try your first contract now.</p>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-6 py-3 rounded-md bg-slate-900 text-white shadow-sm hover:opacity-95">Get started — it is free</button>
                        <button className="px-6 py-3 rounded-md border border-slate-200 text-slate-700">Contact sales</button>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="max-w-6xl mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded-lg">
                        <div className="text-sm uppercase text-slate-500">Starter</div>
                        <div className="text-3xl font-bold mt-3">$15<span className="text-base font-medium">/mo</span></div>
                        <p className="text-sm text-slate-600 mt-2">5 documents / month. Basic highlights and Q&A.</p>
                        <button className="mt-4 w-full px-4 py-2 rounded-md bg-slate-900 text-white">Choose</button>
                    </div>

                    <div className="p-6 border rounded-lg">
                        <div className="text-sm uppercase text-slate-500">Pro</div>
                        <div className="text-3xl font-bold mt-3">$49<span className="text-base font-medium">/mo</span></div>
                        <p className="text-sm text-slate-600 mt-2">Unlimited documents. Red/green highlights. Exportable audit PDF.</p>
                        <button className="mt-4 w-full px-4 py-2 rounded-md bg-slate-900 text-white">Choose</button>
                    </div>

                    <div className="p-6 border rounded-lg">
                        <div className="text-sm uppercase text-slate-500">Business</div>
                        <div className="text-3xl font-bold mt-3">$199<span className="text-base font-medium">/mo</span></div>
                        <p className="text-sm text-slate-600 mt-2">Teams, API access, priority support.</p>
                        <button className="mt-4 w-full px-4 py-2 rounded-md bg-slate-900 text-white">Contact</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="max-w-6xl mx-auto px-6 mt-16 pb-12 text-slate-500">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-sm">© {new Date().getFullYear()} ClauseGuard — All rights reserved</div>
                    <div className="flex gap-4 text-sm">
                        <a href="#" className="hover:text-slate-900">Privacy</a>
                        <a href="#" className="hover:text-slate-900">Terms</a>
                        <a href="#" className="hover:text-slate-900">Contact</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Page