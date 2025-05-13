import React from 'react';

const Resume = () => {
  return (
    <div style={{ height: '100vh' }}>
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Resume;
