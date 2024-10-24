import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        recipientName: '',
        senderName: '',
        message: '',
        occasion: 'Birthday',
        includesPersonalNote: false,
    })

    function handleDone(event) {
        event.preventDefault();
        props.onDone(formData);
        setFormData({
            recipientName: '',
            senderName: '',
            message: '',
            occasion: 'Birthday',
            includesPersonalNote: false,
        })
    }

    function handleFormField(event) {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <form onSubmit={handleDone}>
            <div>
                <label>Recipient's Name:</label>
                <input
                    type="text"
                    name="recipientName"
                    onChange={handleFormField}
                    value={formData.recipientName}
                />
            </div>
            <div>
                <label>Sender's Name:</label>
                <input
                    type="text"
                    name="senderName"
                    onChange={handleFormField}
                    value={formData.senderName}
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" onChange={handleFormField} value={formData.message}>

                </textarea>
            </div>
            <div>
                <label>Occasion:</label>
                <select name="occasion" onChange={handleFormField} value={formData.occasion}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Holiday">Holiday</option>
                </select>
            </div>
            <div>
                <label>Include Personal Note:</label>
                <input
                    type="checkbox"
                    name="includesPersonalNote"
                    onChange={handleFormField}
                    value={formData.includesPersonalNote}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;