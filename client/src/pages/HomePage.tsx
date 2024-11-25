import styled from 'styled-components';
import TemplatesList from '../components/TemplatesList';
import { JSX } from 'react/jsx-runtime';



// Styled Components
const Container = styled.div`

 
  text-align: center;
  padding: 20px;
  position: sticky;
  background-color: red;
`;

const TemplateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;


const HomePage: React.FC = () => {




  return (
    <Container>
      <h1>Choose a Template</h1>
      <TemplateList>
      <TemplatesList story={{
        map: function (_arg0: (story: any) => JSX.Element): React.ReactNode {
          throw new Error('Function not implemented.');
        },
        length: 0,
        _id: '',
        title: '',
        story: ''
      }} isLoggedUser={false} onSelect={function (_arg0: string): void {
        throw new Error('Function not implemented.');
      } } template={function (_arg0: string): void {
        throw new Error('Function not implemented.');
      } } />
      </TemplateList>
    </Container>

      )}
    
  


export default HomePage;
