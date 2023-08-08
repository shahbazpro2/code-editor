"use client";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/themes/prism-dark.css";

export default function Home() {
  const highlightCode = (jsCode) => {
    const highlightedCode = Prism.highlight(jsCode, Prism.languages.javascript, "javascript");
    return `<pre><div class="language-javascript">${highlightedCode}</div></pre>`;
  };

  const onChange = (e) => {
    const code = e.target.value;
    document.getElementById("converted").innerHTML = highlightCode(code);
    Prism.highlightAll();
  };

  return (
    <div className="container py-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <div className="text-xl font-bold mb-2">Orignal Code</div>
          <textarea onChange={onChange} className="border rounded p-5 min-h-[50vh] w-full resize-none"></textarea>
        </div>
        <div className="col-span-1">
          <div className="text-xl font-bold mb-2">Converted Code</div>
          <div id="converted" className="border rounded p-5 min-h-[50vh] bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
}
