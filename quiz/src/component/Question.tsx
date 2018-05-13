import * as React from 'react';
import { Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './Question.scss';

interface QuestionProp {
  title: string;
}
export class Question extends React.Component<{},{}> {
  render() {
    return (
      <div className="">
        <Form>
          <FormGroup>
            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
            <Col sm={10}>
              <FormGroup>
                <Label>
                  <Input type="radio" name="radio2" />{' '}
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  <Input type="radio" name="radio2" />{' '}
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

