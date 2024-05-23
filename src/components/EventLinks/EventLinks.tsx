import {JSX} from "react";
import style from "./style.module.css";
import LinkType from "@/type/Event/LinkType";

type EventLinkProps = {
    types: LinkType[]
}

export default function EventLink({ types }: EventLinkProps): JSX.Element | null {
    return (
        <div className={style.inputGroup}>
            <div className={style.input}>
                <label htmlFor="link-type" className={style.labelInput}>Type de lien<span
                    className={style.required}>*</span></label>
                <select id="link-type" name="link-type" className={style.dropdown}>
                    {
                        types.map((type: LinkType) => {
                            return(
                                <option key={type.id}>{type.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className={style.input}>
                <label htmlFor="link-id" className={style.labelInput}>Identifiant<span
                    className={style.required}>*</span></label>
                <input name="link-id" id="link-id" type="text" placeholder="@"
                       className={style.userInput} required/>
            </div>
        </div>
    );
}