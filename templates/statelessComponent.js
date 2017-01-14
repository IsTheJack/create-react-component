function getComponentContent(componentName) {
  const template = `import React from 'react';

const ${componentName} = (props) => (
  <div>${componentName}</div>
);

export default ${componentName};
`;

  return template;
}

module.exports = getComponentContent;
