export default {
    title: 'Custom Image',
    name: 'customImage',
    type: 'document',
    
    fields: [
      {
        name:'image',
        title: ' Image',
        type: 'image'      
      },
      {
        name: 'altText',
        type: 'string',
        title: 'Alt Text',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      }
    ]
  }