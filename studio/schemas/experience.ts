import {type} from 'os'

export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
        name: 'experience', 
        title: 'Experience', 
        type: 'array', 
        of: [{type: 'reference', to: {type: 'experiences'}}]}],
}
