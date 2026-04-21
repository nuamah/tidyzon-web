import { useState, useRef, useEffect } from "react";

export default function CustomSelect({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.code === value);

  return (
    <div className="custom-select" ref={ref}>
      <button
        className="custom-select__trigger"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span>{selected?.flag} {selected?.name}</span>
        <span className={`custom-select__arrow ${open ? "custom-select__arrow--open" : ""}`}>▾</span>
      </button>

      {open && (
        <ul className="custom-select__dropdown">
          {options.map((lang) => (
            <li
              key={lang.code}
              className={`custom-select__option ${lang.code === value ? "custom-select__option--selected" : ""}`}
              onClick={() => { onChange(lang.code); setOpen(false); }}
            >
              {lang.flag} {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}