function getComponentContent(componentName) {
  const template = `import React, { Component } from 'react';

class ${componentName} extends Component {
  render() {
    return (
      <div>${componentName}</div>
    );
  }
}

export default ${componentName};
`;

return template;
}

module.exports = getComponentContent;
