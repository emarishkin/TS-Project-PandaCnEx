import { FC } from "react";
import { workflowSteps } from "../data/workflow";
import { WorkflowStepCard } from "./WorkflowStepCard";
import '../styles/WorkflowSection.css'

export const WorkflowSection:FC = () => {
    return(
        <section className="workflow-section">
            <div className="container">
                <h2>Как мы работаем</h2>
                <div className="workflow-grid">
                   {workflowSteps.map((workflowStep)=>(
                    <WorkflowStepCard step={workflowStep} key={workflowStep.step} />
                   ))}
                </div>
             </div>
        </section>
    )
}