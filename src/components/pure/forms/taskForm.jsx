import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskform = ({ add, length }) => {
    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .required('Task name is required'),
        description: Yup.string()
            .required('Task description is required'),
        level: Yup.string()
            .oneOf(Object.values(LEVELS), 'Invalid level')
            .required('Level is required')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={(values) => {
                const newTask = new Task(
                    values.name,
                    values.description,
                    false,
                    values.level
                );
                add(newTask);
            }}
        >
            {() => (
                <Form className='d-flex justify-content-center align-items-center mb-4'>
                    <div className='form-outline flex-fill'>
                        <Field id='inputName' type='text' name='name' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                        <ErrorMessage name='name' component='div' className='invalid-feedback' />
                        <Field id='inputDescription' type='text' name='description' className='form-control form-control-lg' required placeholder='Task description' />
                        <ErrorMessage name='description' component='div' className='invalid-feedback' />
                        <Field as='select' className='form-control form-control-lg' name='level' defaultValue={LEVELS.NORMAL} id='selectLevel'>
                            <option value={LEVELS.NORMAL}>
                                Normal
                            </option>
                            <option value={LEVELS.URGENT}>
                                Urgent
                            </option>
                            <option value={LEVELS.BLOCKING}>
                                Blocking
                            </option>
                        </Field>
                        <ErrorMessage name='level' component='div' className='invalid-feedback' />
                    </div>
                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                        {length > 0 ? 'Add New Task' : 'Create your First Task'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}


Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;

