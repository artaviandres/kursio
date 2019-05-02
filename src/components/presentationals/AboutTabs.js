import React from 'react';
import { Form, Tab, Input, TextArea, Button } from 'semantic-ui-react';
import { Row } from 'react-flexbox-grid';
import Text from './Text';

import STYLES from '../../styles/variables.scss';
import '../../styles/layout.scss';
import '../../styles/tab.scss';
import '../../styles/form.scss';
import '../../styles/button.scss';
import '../../styles/input.scss';


const panes = [
  {
    menuItem: 'SKILLS', render: () => <Tab.Pane>
      <Row between="md" className="row-container section-subtitle">
        <Text size="22px" type="thin" margin="0" lineHeight="22px" color={STYLES["footer-title-color"]}>Professional Certificate Courses (Online)</Text>
      </Row>

      <ul className="primary-list">
        <li>Online certificates can be obtained in a range of specialized areas.</li>
        <li>Online diplomas are awarded for one to two years of study with LMS.</li>
        <li>Online associate degrees usually take approximately two years then.</li>
        <li>Online preparatory year programs are an opportunity for students.</li>
        <li>Online Summer courses are a great way to gain qualifications.</li>
      </ul>
    </Tab.Pane>
  },
  {
    menuItem: 'CONTACT US', render: () => <Tab.Pane>
      <Form className="form-primary">
        <Input className="input-primary lg-half-width" placeholder='Your Name' type='text' />
        <Input className="input-primary lg-half-width" placeholder='Your Email' type='text' />
        <TextArea className="textarea-primary" placeholder='' />
        <Button type='submit' className="button-container button-rounded-lg button-primary-color margin-top-short margin-bottom-short">SUBMIT</Button>
      </Form>
    </Tab.Pane>
  },
]

const ProfileTabs = () => <Tab className="general-tabs about-tabs" grid={{ paneWidth: 12, tabWidth: 12 }} panes={panes} />

export default ProfileTabs