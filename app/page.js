"use client";
import Prism from "prismjs";
import { useState } from "react";

const options = ["Default", "Dark", "Funky", "Okaidia", "Twilight", "Coy", "Solarizedlight", "Tomorrow"];

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

  const setTheme = (theme) => {
    //dynamic import
    switch (theme) {
      case "Dark":
        document.getElementById("converted").style.background = "#4d4033";
        import("prismjs/themes/prism-dark.css");
        break;
      case "Funky":
        document.getElementById("converted").style.background = "#f5f2f0";
        import("prismjs/themes/prism-funky.css");
        break;
      case "Okaidia":
        document.getElementById("converted").style.background = "#272822";
        import("prismjs/themes/prism-okaidia.css");
        break;
      case "Twilight":
        document.getElementById("converted").style.background = "#141414";
        import("prismjs/themes/prism-twilight.css");
        break;
      case "Coy":
        document.getElementById("converted").style.background = "#fdfdfd";
        import("prismjs/themes/prism-coy.css");
        break;
      case "Solarizedlight":
        document.getElementById("converted").style.background = "#fdf6e3";
        import("prismjs/themes/prism-solarizedlight.css");
        break;
      case "Tomorrow":
        document.getElementById("converted").style.background = "#2d2d2d";
        import("prismjs/themes/prism-tomorrow.css");
        break;
      default:
        document.getElementById("converted").style.background = "#f5f2f0";
        import("prismjs/themes/prism.css");
        break;
    }
  };

  return (
    <div className="container py-20">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2">
          <div className="text-xl font-bold mb-2">Select Theme</div>
          <select onChange={(e) => setTheme(e.target.value)} className="border rounded p-2">
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <div className="text-xl font-bold mb-2">Orignal Code</div>
          <textarea onChange={onChange} className="border rounded p-5 min-h-[50vh] w-full resize-none"></textarea>
        </div>
        <div className="col-span-1">
          <div className="text-xl font-bold mb-2">Converted Code</div>
          <div id="converted" className="border rounded p-5 min-h-[50vh] overflow-auto"></div>
        </div>
      </div>
    </div>
  );
}
