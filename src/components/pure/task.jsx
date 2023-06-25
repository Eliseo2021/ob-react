import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    /**
    * Function that returns a Badge
    * depending on the level of the task
    */
    function taskLevelBadge() {
        const levelClassMap = {
            [LEVELS.NORMAL]: 'bg-primary',
            [LEVELS.URGENT]: 'bg-warning',
            [LEVELS.BLOCKING]: 'bg-danger',
        };

        const levelClass = levelClassMap[task.level];

        return (
            <h6 className="mb-0">
                <span className={`badge ${levelClass}`}>
                    {task.level}
                </span>
            </h6>
        );
    }

    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon() {
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }



    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
