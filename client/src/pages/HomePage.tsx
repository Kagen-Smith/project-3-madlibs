
import TemplatesList from '../components/TemplatesList';
import { JSX } from 'react/jsx-runtime';






const HomePage: React.FC = () => {




  return (
    <div>
      <h1>Press Play to begin</h1>
      <div>
      <TemplatesList story={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
        map: function (_arg0: (story: any) => JSX.Element): React.ReactNode {
          throw new Error('Function not implemented.');
        },
        length: 0,
        _id: '',
        title: '',
        story: ''
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }} isLoggedUser={false} onSelect={function (_arg0: string): void {
        throw new Error('Function not implemented.');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } } template={function (_arg0: string): void {
        throw new Error('Function not implemented.');
      } } />
      </div>
    </div>

      )}
    
  


export default HomePage;
