import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";
import { act } from "react-dom/test-utils";
describe("full App unit test", () => {
  beforeEach(async () => {
    global.fetch = jest.fn();
    global.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", name: "one", price: 2 }],
    });
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
    await act(async () =>
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    );
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  it("meals is rendered", async () => {
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });

  it("cart is empty", async () => {
    const cartItemsAmount = screen.getByTestId("badge");
    expect(parseInt(cartItemsAmount.textContent)).toBe(0);
  });

  it("cart is shown if cart button is clicked", async () => {
    await act(
      async () =>
        await userEvent.click(
          screen.getByRole("button", { name: /your cart/i })
        )
    );
    expect(screen.queryByTitle("modal")).not.toBeNull();
  });
  it("cart is hidden if close button is clicked", async () => {
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /close/i }))
    );
    expect(screen.queryByTitle("modal")).toBeNull();
  });

  it("can't order if no items were added", async () => {
    await act(
      async () =>
        await userEvent.click(
          screen.getByRole("button", { name: /your cart/i })
        )
    );
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /order/i }))
    );
    expect(screen.queryByTitle("checkoutForm")).toBeNull();
  });

  it("cart recive items when Add button is clicked", async () => {
    const addButton = screen.getAllByRole("button", { name: /\+ add/i });
    await act(async () => await userEvent.click(addButton[0]));
    const cartItemsAmount = screen.getByTestId("badge");
    expect(parseInt(cartItemsAmount.textContent)).toBeGreaterThan(0);
  });

  it("can order if items were added", async () => {
    await act(
      async () =>
        await userEvent.click(
          screen.getByRole("button", { name: /your cart/i })
        )
    );
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /order/i }))
    );
    expect(screen.getByTitle("checkoutForm")).toBeInTheDocument();
  });
  it("cancel button closes form and modal", async () => {
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /cancel/i }))
    );
    expect(screen.queryByTitle("checkoutForm")).toBeNull();
  });

  it("can't confirm order if form fields are not filled", async () => {
    await act(
      async () =>
        await userEvent.click(
          screen.getByRole("button", { name: /your cart/i })
        )
    );
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /order/i }))
    );
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /confirm/i }))
    );
    expect(screen.getByTitle("checkoutForm")).toBeInTheDocument();
  });
  it("order is sent successfully if form fields are filled", async () => {
    screen.getByRole("textbox", { name: /your name/i }).value = "test";
    screen.getByRole("textbox", { name: /street/i }).value = "test";
    screen.getByRole("textbox", { name: /postal code/i }).value = "12345";
    screen.getByRole("textbox", { name: /city/i }).value = "test";
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /confirm/i }))
    );
    expect(
      screen.getByText(/Successfully sent the order!/i)
    ).toBeInTheDocument();
  });
  it("close Button rests the cart", async () => {
    await act(
      async () =>
        await userEvent.click(screen.getByRole("button", { name: /close/i }))
    );
    const cartItemsAmount = screen.getByTestId("badge");
    expect(parseInt(cartItemsAmount.textContent)).toBe(0);
  });
});
