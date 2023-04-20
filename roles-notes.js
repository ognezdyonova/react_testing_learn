[{
    "content": "## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.",
    "type": "text",
    "id": "12frm"
}, {
    "content": "import { render, screen } from '@testing-library/react';\nfunction RoleExample() {\n  return (\n    <div>\n      <a href=\"/\" data-testid={'link'}>Link</a>\n      <br />\n      <button data-testid={'button'}>Button</button>\n      <br />\n      <footer data-testid={'footer'}>Content info</footer>\n      <br />\n      <h1 data-testid={'h1'}>Heading</h1>\n      <br />\n      <header data-testid={'header'}>Banner</header>\n      <br />\n      <img alt=\"description\" data-testid={'image'}/> img\n      <br />\n      <input type=\"checkbox\" data-testid={'checkbox'}/> Checkbox\n      <br />\n      <input type=\"number\" data-testid={'number'} /> Number\n      <br />\n      <input type=\"radio\" data-testid={'radio'} /> radio\n      <br />\n      <input type=\"text\" data-testid={'text'}/> Text input\n      <br />\n      <li data-testid={'list_item'}>list item </li>\n      <br />\n      <ul data-testid={'list_group'}>group</ul>\n    </div>\n  );\n}\n\nrender(<RoleExample />);",
    "type": "code",
    "id": "b5exo"
}, {
    "content": "test('can find elements by role', () => {\n  render(<RoleExample />);\n\n  expect(screen.getByRole('link')).toBeInTheDocument();\n  expect(screen.getByRole('button')).toBeInTheDocument();\n  expect(screen.getByRole('contentinfo')).toBeInTheDocument();\n  expect(screen.getByRole('heading')).toBeInTheDocument();\n  expect(screen.getByRole('banner')).toBeInTheDocument();\n  expect(screen.getByRole('img')).toBeInTheDocument();\n  expect(screen.getByRole('checkbox')).toBeInTheDocument();\n  expect(screen.getByRole('spinbutton')).toBeInTheDocument();\n  expect(screen.getByRole('radio')).toBeInTheDocument();\n  expect(screen.getByRole('textbox')).toBeInTheDocument();\n  expect(screen.getByRole('listitem')).toBeInTheDocument();\n  expect(screen.getByRole('list')).toBeInTheDocument();\n});",
    "type": "code",
    "id": "3hqz9"
}, {
    "content": "test('can find elements by role', () => {\n  render(<RoleExample />);\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list',\n  ];\n\n  for (let role of roles) {\n    expect(screen.getByRole(role)).toBeInTheDocument();\n  }\n});",
    "type": "code",
    "id": "9x7c6"
}, {
    "content": "test('can find elements by TestID', () => {\n  render(<RoleExample />);\n  expect(screen.getByTestId('link')).toBeInTheDocument();\n  expect(screen.getByTestId('button')).toBeInTheDocument();\n  expect(screen.getByTestId('footer')).toBeInTheDocument();\n  expect(screen.getByTestId('h1')).toBeInTheDocument();\n  expect(screen.getByTestId('header')).toBeInTheDocument();\n  expect(screen.getByTestId('image')).toBeInTheDocument();\n  expect(screen.getByTestId('checkbox')).toBeInTheDocument();\n  expect(screen.getByTestId('number')).toBeInTheDocument();\n  expect(screen.getByTestId('radio')).toBeInTheDocument();\n  expect(screen.getByTestId('text')).toBeInTheDocument();\n  expect(screen.getByTestId('list_item')).toBeInTheDocument();\n  expect(screen.getByTestId('list_group')).toBeInTheDocument();\n});",
    "type": "code",
    "id": "kthtp"
}, {
    "content": "\n## Accesible component:",
    "type": "text",
    "id": "wvvcj"
}, {
    "content": "function AccesibleComponent() {\n  return (\n    <div>\n      <button>Submit</button>\n      <hr/>\n      <button>Cancel</button>\n    </div>\n  );\n}\n\nrender(<AccesibleComponent />);",
    "type": "code",
    "id": "u6rst"
}, {
    "content": "test('find element by Accesible', () => {\n  render(<AccesibleComponent />);\n\n  const submitBtn = screen.getByRole('button', { name: 'Submit' });\n  const cancelBtn = screen.getByRole('button', { name: 'Cancel' });\n\n  expect(submitBtn).toBeInTheDocument();\n  expect(cancelBtn).toBeInTheDocument();\n});",
    "type": "code",
    "id": "dtf9r"
}, {
    "content": "test('find element by Accesible', () => {\n  render(<AccesibleComponent />);\n\n  const submitBtn = screen.getByRole('button', { name: /submit/i });\n  const cancelBtn = screen.getByRole('button', { name: /cancel/i });\n  expect(submitBtn).toBeInTheDocument();\n  expect(cancelBtn).toBeInTheDocument();\n});",
    "type": "code",
    "id": "qchms"
}, {
    "content": "##  Linking Inputs to Labels\n",
    "type": "text",
    "id": "xdqw2"
}, {
    "content": "function MoreNames() {\n  return (\n    <div>\n      <label htmlFor=\"first\">First input:</label>\n      <input id=\"first\" />\n      <hr />\n      <label htmlFor=\"second\">Second input:</label>\n      <input id=\"second\" />\n    </div>\n  );\n}\n\nrender(<MoreNames />);",
    "type": "code",
    "id": "w4che"
}, {
    "content": "test('make sure two inputs are display', () => {\n  render(<MoreNames />);\n\n  const firstInput = screen.getByRole('textbox', { name: /first/i });\n  const secondInput = screen.getByRole('textbox', { name: /second/i });\n  expect(firstInput).toBeInTheDocument();\n  expect(secondInput).toBeInTheDocument();\n});",
    "type": "code",
    "id": "i222b"
}, {
    "content": "##  Directly Assigning an Accessible Name\n",
    "type": "text",
    "id": "xqxk9"
}, {
    "content": "function IconsButtons() {\n  return (\n    <div>\n      <button aria-label=\"sign in\">\n        <svg />\n      </button>\n\n      <hr />\n\n      <button aria-label=\"sign out\">\n        <svg />\n      </button>\n    </div>\n  );\n}\n\nrender(<IconsButtons />);",
    "type": "code",
    "id": "ybdo0"
}, {
    "content": "test('Find elements based of labels', () => {\n  render(<IconsButtons />);\n\n  const firstInput = screen.getByRole('button', { name: /sign in/i });\n  const secondInput = screen.getByRole('button', { name: /sign out/i });\n  expect(firstInput).toBeInTheDocument();\n  expect(secondInput).toBeInTheDocument();\n});",
    "type": "code",
    "id": "8d2wj"
}]