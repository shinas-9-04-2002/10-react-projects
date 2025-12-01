import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />}
                    />
                    <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
                </div>
                <Button
                    text="VIA EMAIL FORM"
                    icon={<HiMail fontSize="24px" />}
                    isOutline={true}
                />

                <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name" for="name">
                            Name
                        </label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email" for="email">
                            Email
                        </label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text" for="text">
                            Text
                        </label>
                        <textarea  name="text"  rows="10"/>
                    </div>
                    <div style={{display:"flex",justifyContent:"end"}}>
                        <Button text="Submit"  />
                    </div>
                </form>
                
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="" />
            </div>
        </section>
    );
};

export default ContactForm;
