// Qualification Section Content
// Defines disqualifiers and qualifiers with honest, direct language

import { QualificationContent } from './types';

export const qualificationContent: QualificationContent = {
  // Disqualifiers - who should NOT work with AUSPIN (Requirement 11.1)
  disqualifiers: [
    "You want someone to validate decisions you've already made. We're here to tell you the truth, not what you want to hear. If you're looking for a rubber stamp, we're not the right fit.",
    
    "You're looking for the cheapest option. Quality AI execution requires investment in the right people, infrastructure, and process. If your primary decision criterion is lowest cost, you'll get what you pay for—and it won't be pretty.",
    
    "You expect AI to solve problems without organizational change. AI isn't magic—it requires changes to processes, roles, and decision-making. If you're not willing to adapt how your organization works, AI won't help you.",
    
    "You want a long-term consulting engagement. We're here to build your capability and transfer knowledge, not create dependency. If you're looking for consultants who stick around forever, that's not our model.",
    
    "You're not willing to kill failing initiatives. We'll tell you honestly when something isn't working. If you're not prepared to cut losses and reallocate resources, you'll waste time and money on projects that will never deliver value."
  ],
  
  // Qualifiers - ideal client characteristics (Requirement 11.2)
  qualifiers: [
    "You're a CXO or senior leader with authority to make decisions and allocate resources. We work with people who can actually execute on our recommendations, not middle managers who need 5 layers of approval.",
    
    "You want honest assessment over comfortable validation. You're willing to hear that your current approach isn't working and make hard decisions based on data and experience, not politics or sunk costs.",
    
    "You're committed to building internal AI capability, not outsourcing forever. You want to learn, build expertise in your organization, and execute independently. We're here to teach you to fish, not sell you fish forever.",
    
    "You understand that AI is a business transformation, not just a technology project. You're prepared to invest in organizational change, process redesign, and capability building—not just buying software and hoping it works.",
    
    "You're focused on measurable business outcomes, not impressive demos. You care about ROI, cost per transaction, and business impact—not model accuracy scores or technology buzzwords. You want systems that work, not science projects."
  ]
};

export default qualificationContent;
