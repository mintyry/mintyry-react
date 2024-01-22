
// import { useForm, ValidationError } from '@formspree/react';
// import TextField from '@mui/material/TextField';

// function ContactForm() {
//     const [state, handleSubmit] = useForm("xkndonev");
//     if (state.succeeded) {
//         return <p>Thanks for the email! I'll get back to you ASAP.</p>;
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="email">
//                 Email Address
//             </label>
//             <input
//                 id="email"
//                 type="email"
//                 name="email"
//             />
//             <ValidationError
//                 prefix="Email"
//                 field="email"
//                 errors={state.errors}
//             />
//             <TextField
//                 id="filled-multiline-static"
//                 label="Multiline"
//                 multiline
//                 rows={4}
//                 defaultValue="Default Value"
//                 variant="filled"
//                 name="message"
//             />
//             {/* <textarea
//                 id="message"
//                 name="message"
//             /> */}
//             <ValidationError
//                 prefix="Message"
//                 field="message"
//                 errors={state.errors}
//             />
//             <button type="submit" disabled={state.submitting}>
//                 Submit
//             </button>
//         </form>
//     );
// }

// export default ContactForm;