import React from 'react';
import { Segment } from 'semantic-ui-react'

export default function CertificatesItem({ course, certificatePdf }) {
  return (
    <Segment className="certificates-item-container">
      <div className="certificates-item-course">{course}</div>
      <div className="certificates-item-download">
        <a href={certificatePdf} target="_blank">
          Download
        </a>
      </div>
    </Segment>
  )
};