import {
  TypedUseSelectorHook,
  useSelector as untypedSelector,
} from 'react-redux';
import { GlobalStateType } from './store';

export const useSelector: TypedUseSelectorHook<GlobalStateType> =
  untypedSelector;
