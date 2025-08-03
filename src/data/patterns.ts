export interface PromptPattern {
  id: string;
  name: string;
  explanation: string;
  checklist: string[];
  example: string;
  demoOutput: string;
}

export const promptPatterns: PromptPattern[] = [
  {
    id: 'role-based',
    name: 'Role-Based Prompting',
    explanation: 'This pattern involves assigning a specific role or persona to the AI, which helps establish context and expertise level. By defining who the AI should act as, you get more targeted and relevant responses.',
    checklist: [
      'Start with "You are..." or "Act as..."',
      'Define the specific role or profession',
      'Mention relevant expertise or background',
      'Set the context for the interaction'
    ],
    example: `You are a senior software engineer with 10 years of experience in React development. You specialize in performance optimization and clean code practices. Help me review this React component and suggest improvements for better performance and maintainability.`,
    demoOutput: `I'll analyze your React component from a performance and maintainability perspective:

**Performance Improvements:**
1. **Memoization**: Use React.memo() to prevent unnecessary re-renders
2. **useCallback**: Wrap event handlers to maintain referential equality
3. **Code splitting**: Consider lazy loading if this component is large

**Maintainability Suggestions:**
1. **TypeScript interfaces**: Define clear prop types
2. **Custom hooks**: Extract complex logic into reusable hooks
3. **Error boundaries**: Add error handling for better user experience

**Specific Code Recommendations:**
- Move inline styles to CSS modules or styled-components
- Use semantic HTML elements for better accessibility
- Add proper ARIA labels for screen readers

Would you like me to show you a refactored version of your component?`
  },
  {
    id: 'few-shot',
    name: 'Few-Shot Learning',
    explanation: 'This pattern provides examples of the desired input-output format before asking for the actual task. It helps the AI understand the exact format and style you want in the response.',
    checklist: [
      'Provide 2-3 clear examples',
      'Show the exact input-output format',
      'Use consistent formatting across examples',
      'End with your actual request'
    ],
    example: `I need you to convert these feature descriptions into user stories:

Example 1:
Feature: User login
User Story: As a registered user, I want to log into my account so that I can access my personal dashboard.

Example 2:
Feature: Password reset
User Story: As a user who forgot my password, I want to reset it via email so that I can regain access to my account.

Now convert this:
Feature: Shopping cart checkout`,
    demoOutput: `Based on the examples provided, here's the user story for the shopping cart checkout feature:

**Feature: Shopping cart checkout**
**User Story:** As a customer who has added items to my cart, I want to complete the checkout process so that I can purchase my selected products and receive them.

**Additional Context:**
This user story follows the standard format: "As a [user type], I want to [action] so that [benefit/goal]."

**Acceptance Criteria might include:**
- User can review items in cart before checkout
- User can enter shipping and billing information
- User can select payment method
- User receives confirmation after successful purchase
- User receives order tracking information`
  },
  {
    id: 'chain-of-thought',
    name: 'Chain of Thought',
    explanation: 'This pattern encourages the AI to show its reasoning process step-by-step. It\'s particularly effective for complex problems that require logical reasoning or multi-step solutions.',
    checklist: [
      'Ask the AI to think step-by-step',
      'Request explanation of reasoning',
      'Use phrases like "walk me through" or "explain your process"',
      'Encourage showing intermediate steps'
    ],
    example: `I need to optimize the performance of a React application that's loading slowly. Walk me through your thought process step-by-step:

1. First, explain how you would diagnose the performance issues
2. Then, outline the most impactful optimization strategies
3. Finally, prioritize these strategies based on effort vs. impact

Please show your reasoning for each step.`,
    demoOutput: `Here's my step-by-step approach to optimizing your React application:

**Step 1: Diagnosis Process**
My reasoning: Before optimizing, we need to identify bottlenecks
- Use React DevTools Profiler to identify slow components
- Check Network tab for large bundle sizes or slow API calls
- Use Lighthouse audit for overall performance metrics
- Monitor Core Web Vitals (LCP, FID, CLS)

**Step 2: Optimization Strategies**
My reasoning: Focus on high-impact, proven techniques
- **Code splitting**: Reduce initial bundle size (high impact)
- **Lazy loading**: Load components only when needed
- **Memoization**: Prevent unnecessary re-renders
- **Image optimization**: Compress and use modern formats
- **API optimization**: Implement caching and pagination

**Step 3: Prioritization (Effort vs Impact)**
My reasoning: Start with quick wins, then tackle complex changes
1. **High Impact, Low Effort**: Image compression, React.memo
2. **High Impact, Medium Effort**: Code splitting, lazy loading
3. **Medium Impact, Low Effort**: Remove unused dependencies
4. **High Impact, High Effort**: Server-side rendering, caching strategy

This approach ensures measurable improvements while managing development time effectively.`
  },
  {
    id: 'constraint-based',
    name: 'Constraint-Based Prompting',
    explanation: 'This pattern sets specific limitations or requirements that the AI must follow. It helps ensure the response meets your exact needs and constraints.',
    checklist: [
      'Clearly define all constraints',
      'Specify format requirements',
      'Set length or scope limitations',
      'Include any technical requirements'
    ],
    example: `Create a React component for a user profile card with these constraints:

Requirements:
- Must use TypeScript
- Must be accessible (ARIA labels)
- Must be responsive (mobile-first)
- Maximum 50 lines of code
- Must include: avatar, name, title, and contact button
- Use Tailwind CSS classes only
- No external dependencies beyond React

Please provide only the component code with brief comments.`,
    demoOutput: `Here's a React component that meets all your constraints:

\`\`\`typescript
import React from 'react';

interface UserProfileProps {
  avatar: string;
  name: string;
  title: string;
  onContact: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  avatar, name, title, onContact 
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* Mobile-first responsive design */}
      <div className="p-6 text-center">
        {/* Avatar with accessibility */}
        <img 
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={avatar}
          alt={\`\${name}'s profile picture\`}
        />
        
        {/* User info */}
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          {name}
        </h2>
        <p className="text-gray-600 mb-4">{title}</p>
        
        {/* Contact button with ARIA */}
        <button
          onClick={onContact}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          aria-label={\`Contact \${name}\`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
\`\`\`

**Key Features:**
✅ TypeScript with proper interfaces
✅ Fully accessible with ARIA labels
✅ Mobile-first responsive design
✅ Under 50 lines of code
✅ All required elements included
✅ Only Tailwind CSS classes used`
  },
  {
    id: 'iterative-refinement',
    name: 'Iterative Refinement',
    explanation: 'This pattern involves starting with a basic request and then refining it through follow-up prompts. It\'s useful when you\'re not sure of the exact requirements upfront.',
    checklist: [
      'Start with a clear but basic request',
      'Ask for initial version or outline',
      'Plan for follow-up refinements',
      'Be prepared to provide specific feedback'
    ],
    example: `I want to create a data visualization for my e-commerce analytics. Let's start simple:

First, create a basic bar chart component that shows monthly sales data. Make it clean and modern, but don't worry about advanced features yet.

After you create this, I'll ask you to add specific enhancements like:
- Interactive tooltips
- Multiple data series
- Export functionality

For now, just focus on the core bar chart with sample data.`,
    demoOutput: `I'll create a clean, modern bar chart component for your e-commerce analytics:

\`\`\`jsx
import React from 'react';

const SalesBarChart = () => {
  // Sample monthly sales data
  const salesData = [
    { month: 'Jan', sales: 12000 },
    { month: 'Feb', sales: 15000 },
    { month: 'Mar', sales: 18000 },
    { month: 'Apr', sales: 14000 },
    { month: 'May', sales: 22000 },
    { month: 'Jun', sales: 25000 }
  ];

  const maxSales = Math.max(...salesData.map(d => d.sales));

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Monthly Sales Overview
      </h2>
      
      <div className="flex items-end justify-between h-64 gap-4">
        {salesData.map((data, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t-md transition-all duration-300 hover:bg-blue-600"
              style={{ 
                height: \`\${(data.sales / maxSales) * 200}px\`,
                minHeight: '20px'
              }}
            />
            <span className="mt-2 text-sm font-medium text-gray-600">
              {data.month}
            </span>
            <span className="text-xs text-gray-500">
              $\{data.sales.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesBarChart;
\`\`\`

**What I've created:**
- Clean, modern design with subtle shadows
- Responsive bar heights based on data values
- Hover effects for interactivity
- Proper data formatting with commas
- Sample e-commerce data structure

**Ready for your next refinements:**
This foundation is perfect for adding the interactive tooltips, multiple data series, and export functionality you mentioned. The component structure makes it easy to extend!`
  },
  {
    id: 'context-stuffing',
    name: 'Context Stuffing',
    explanation: 'This pattern involves providing comprehensive background information and context before making your request. It ensures the AI has all necessary information to provide accurate and relevant responses.',
    checklist: [
      'Provide relevant background information',
      'Include project context and goals',
      'Mention constraints and requirements',
      'Explain the broader context of the request'
    ],
    example: `Context: I'm building a SaaS application for small businesses to manage their inventory. The app uses React frontend with Node.js backend and PostgreSQL database. Our users are non-technical business owners who need simple, intuitive interfaces.

Current situation: We have a basic product listing page, but users are complaining it's hard to find specific items when they have hundreds of products.

Business goal: Reduce time spent searching for products by 60% and increase user satisfaction scores.

Technical constraints: Must work on mobile devices, should load in under 2 seconds, cannot exceed current budget for external services.

Request: Design a search and filtering system for the product listing page that addresses these user needs and constraints.`,
    demoOutput: `Based on your comprehensive context, here's my recommended search and filtering system:

**Core Search Features:**
1. **Smart Search Bar**
   - Real-time search as user types (debounced for performance)
   - Search across product name, SKU, category, and description
   - Auto-suggestions based on existing inventory

2. **Simple Filter Categories**
   - Category dropdown (auto-populated from your data)
   - Price range slider (visual, easy for non-technical users)
   - Stock status: "In Stock", "Low Stock", "Out of Stock"
   - Date added filter for new products

**User Experience Design:**
- **Mobile-first**: Large touch targets, collapsible filters
- **Visual feedback**: Loading states, result counts, "no results" messaging
- **One-click clear**: Easy reset button for all filters
- **Saved searches**: Let users save common search combinations

**Performance Optimizations:**
- **Frontend**: Virtualized list for large inventories, pagination
- **Backend**: Database indexing on searchable fields, cached common queries
- **Progressive loading**: Show results as they load

**Technical Implementation:**
- Use PostgreSQL full-text search (built-in, no external services)
- Implement debounced search (300ms delay)
- Add loading skeletons for perceived performance

**Success Metrics:**
- Track search-to-action conversion
- Monitor average time to find products
- Measure user satisfaction through in-app feedback

This solution addresses your 60% time reduction goal while staying within technical and budget constraints.`
  }
];