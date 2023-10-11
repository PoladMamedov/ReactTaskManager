import { useDispatch, useSelector } from "react-redux";
import { closeCreateEditTaskModal } from "../../redux/slices/createEditTaskModalSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import { addTask, editTask } from "../../redux/slices/tasksSlice";

function CreateEditTaskModal() {
  const dispatch = useDispatch();
  const { open, isEditing, editedTaskId } = useSelector((state) => state.createEditTaskModal);
  const taskInfo = useSelector((state) => state.tasks.find((task) => task.id === editedTaskId));
  const handleClose = () => dispatch(closeCreateEditTaskModal());

  const { Formik } = formik;

  const schema = yup.object().shape({
    task: yup.string().required("Task name required!"),
    taskDescription: yup.string(),
    finished: yup.boolean(),
  });

  return (
    <>
      <Modal centered show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task info:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              if (isEditing) {
                dispatch(editTask({ ...values, id: taskInfo.id }));
              } else {
                dispatch(addTask(values));
              }
              handleClose();
            }}
            initialValues={
              isEditing
                ? {
                    task: taskInfo.task,
                    taskDescription: taskInfo.taskDescription,
                    finished: taskInfo.finished,
                  }
                : {
                    task: "",
                    taskDescription: "",
                    finished: false,
                  }
            }
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Task:</Form.Label>
                  <Form.Control
                    type="text"
                    name="task"
                    placeholder="task to do"
                    value={values.task}
                    onChange={handleChange}
                  />
                  {errors.task && touched.task ? <Form.Text>{errors.task}</Form.Text> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tasks description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="taskDescription"
                    rows={2}
                    value={values.taskDescription}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Check
                  name="finished"
                  className="mb-3"
                  type="switch"
                  label="Finished"
                  checked={values.finished}
                  onChange={handleChange}
                />
                <Button className="w-100" type="submit" variant="primary" onClick={handleSubmit}>
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateEditTaskModal;
