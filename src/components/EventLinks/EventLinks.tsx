import {JSX} from "react";
import style from "./style.module.css";
import LinkType from "@/type/Event/LinkType";

type EventLinkProps = {
    types: LinkType[];
    id: number;
    deleteLink: any;
}

export default function EventLink({ types, id, deleteLink }: EventLinkProps): JSX.Element | null {
    return (
        <div className={style.inputGroup}>
            <div className={style.input}>
                <label htmlFor={`link-type-${id}`} className={style.labelInput}>Type de lien<span
                    className={style.required}>*</span></label>
                <select id={`link-type-${id}`} name={`link-type-${id}`} className={style.dropdown}>
                    {
                        types.map((type: LinkType) => {
                            return (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={style.input}>
                <label htmlFor={`link-id-${id}`} className={style.labelInput}>Identifiant<span
                    className={style.required}>*</span></label>
                <input name={`link-id-${id}`} id={`link-id-${id}`} type="text" placeholder="@"
                       className={style.userInput} required/>
            </div>
            <button onClick={() => deleteLink(id)} type="button">Delete</button>
        </div>
    );
}