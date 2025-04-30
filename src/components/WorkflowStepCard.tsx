import { FC } from "react";
import { WorkflowStep } from "../types/WorkflowStep";
import '../styles/WorkflowStepCard.css'

interface WorkflowStepCardProps{
    step:WorkflowStep
}

export const WorkflowStepCard:FC<WorkflowStepCardProps> = ({step}) => {
    return(
        <div className="workflow-step-card">
            <div className="step-number">{step.step}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
        </div>
    )
}