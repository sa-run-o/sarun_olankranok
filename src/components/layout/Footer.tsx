"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-stone-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {currentYear} Sarun Olankranok. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
