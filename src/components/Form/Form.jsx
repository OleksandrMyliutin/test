import s from './Form.module.css'
const Form = ({onAdd}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt)
        onAdd({
            id: Date.now(),
            text: evt.target.elements.task.value
        });
        evt.target.reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className={s.formContainer}>
                <input type="text" name='task' className={s.input}/>
                <button type='submit' onSubmit={onAdd}>Add task</button>
            </form>
        </div>
    )
}

export default Form
