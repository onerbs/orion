export function input(
  headline,
  hint = "",
  initialValue = "",
  validate = ((value) => !!value),
) {
  const buttonGroup = _buttonGroup("Cancel", "Accept");
  const { label, input } = _input(hint, initialValue);
  const wrapper = _wrapper([_title(headline), label, buttonGroup]);
  input.focus();
  input.select();
  const [deny, allow] = buttonGroup.children;
  return new Promise((resolve) => {
    function respond(value) {
      document.body.removeChild(wrapper);
      resolve(value);
    }
    wrapper.addEventListener("click", (ev) => {
      if (ev.target === ev.currentTarget) respond("");
    });
    deny.addEventListener("click", () => respond(""));
    allow.addEventListener("click", collectAndSend);
    function collectAndSend() {
      const { value } = input;
      validate(value) ? respond(value) : input.classList.add("error");
    }
    input.addEventListener("keypress", (ev) => {
      input.classList.remove("error");
      if (ev.key == "Enter") {
        collectAndSend();
      }
    });
  });
}

function _textElement(kind, text) {
  const element = document.createElement(kind);
  element.innerText = text;
  return element;
}

function _wrapper(children, kind = "Dialog", overlay = true) {
  const element = document.createElement("div");
  element.classList.add("shadow");
  element.append(...children);
  document.body.insertBefore(element, document.body.children[0]);
  return element;
}

function _title(text) {
  return _textElement("h2", text);
}

function _button(text) {
  return _textElement("button", text);
}

function _input(hint, initialValue) {
  const label = _textElement("label", hint);
  const input = document.createElement("input");
  input.value = initialValue;
  label.appendChild(input);
  return { label, input };
}

/**
 * @param n The negative label
 * @param y The affirmative label
 */
function _buttonGroup(n, y) {
  const n_element = _button(n);
  const y_element = _button(y);
  const group = document.createElement("span");
  group.append(n_element, y_element);
  return group;
}
