import { ChangeEvent, FC, useState } from "react";
import '../styles/ContactForm.css'

export const ContactForm:FC = () =>{

    const [name,setName] = useState<string>('')
    const [phone,setPhone] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Заявка отправлена!\nИмя: ${name}\nТелефон: ${phone}`);
        setName("");
        setPhone("");
      };

    return(
        <form className="contact-form" onSubmit={handleSubmit}>
            
            <h3>Оставить заявку</h3>
            
            <input 
            type="text"
            value={name}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
            placeholder="Введите ФИО"
            />

            <input 
            type="text"
            value={phone}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)}
            placeholder="Введите номер телефона"
            />

            <button type="submit">Отправить</button>
        </form>
    )
}