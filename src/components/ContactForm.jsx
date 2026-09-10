import { useRef, useState } from "react";
import "./ContactForm.css";

const fields = [
  ["company", "회사명"],
  ["person", "담당자"],
  ["phone", "연락처"],
  ["message", "문의내용"],
];

export default function ContactForm() {
  const formRef = useRef(null);
  const dialog = useRef(null);
  const [missing, setMissing] = useState([]);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const empty = fields.filter(([name]) => !String(values.get(name) ?? "").trim());
    setMissing(empty.map(([name]) => name));
    if (empty.length) {
      form.elements.namedItem(empty[0][0]).focus();
      return;
    }
    // Temporary UI confirmation; no inquiry is sent or stored.
    dialog.current.showModal();
  }

  function attributes(name, label) {
    return {
      name,
      "aria-label": label,
      placeholder: label,
      required: true,
      "aria-invalid": missing.includes(name),
      "aria-describedby": missing.includes(name) ? "contact-form-error" : undefined,
      onChange: (event) => {
        if (event.target.value.trim()) setMissing((current) => current.filter((field) => field !== name));
      },
    };
  }

  return (
    <>
      <form ref={formRef} onSubmit={submit} noValidate>
        {missing.length > 0 && <p className="contact-form-error" id="contact-form-error" role="alert">
          {fields.filter(([name]) => missing.includes(name)).map(([, label]) => label).join(", ")} 항목을 입력해주세요.
        </p>}
        <div>
          <input {...attributes("company", "회사명")} autoComplete="organization" />
          <input {...attributes("person", "담당자")} autoComplete="name" />
          <input {...attributes("phone", "연락처")} type="tel" autoComplete="tel" />
        </div>
        <textarea {...attributes("message", "문의내용")} />
        <button type="submit">문의 접수하기</button>
      </form>
      <dialog ref={dialog} className="contact-confirmation" aria-labelledby="contact-confirmation-title">
        <h2 id="contact-confirmation-title">문의가 접수되었습니다.</h2>
        <button type="button" autoFocus onClick={() => {
          formRef.current.reset();
          setMissing([]);
          dialog.current.close();
        }}>확인</button>
      </dialog>
    </>
  );
}
