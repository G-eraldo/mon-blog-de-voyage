export const MDXComponents = {
  h2: (props) => (
    <h2
      className="text-3xl font-semibold text-amber-100 mb-10 font-poppins"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-2xl font-medium text-amber-50 mb-10 font font-poppins"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-xl leading-relaxed mb-10 font-playfair" {...props} />
  ),
  ul: (props) => <ul className="list-disc pl-6 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 space-y-2" {...props} />,
  li: (props) => <li className="text-lg text-gray-800" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6"
      {...props}
    />
  ),
  img: (props) => (
    <img className="rounded-lg shadow-lg my-4 max-w-full h-auto" {...props} />
  ),
  a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
  code: (props) => (
    <code
      className="bg-gray-100 text-gray-900 py-1 px-2 rounded-md text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded-lg overflow-auto"
      {...props}
    />
  ),
};
