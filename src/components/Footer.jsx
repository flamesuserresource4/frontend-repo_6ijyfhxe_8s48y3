export default function Footer(){
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 to-violet-600" />
          <span className="text-sm font-medium text-gray-700">clippers</span>
        </div>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} Clippers, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}
