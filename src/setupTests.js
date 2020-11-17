/** Configuracion Global para Testing Library */
//  import '@testing-library/jest-dom/extend-expect';       //  Corrige -> TypeError: expect(...).toBeInTheDocument is not a function

/** Configuracion Global para Enzyme */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });