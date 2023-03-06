# effector-demo

A skeleton that outlines the way I use the effector library.

## `src` Directory Layout

- `widgets`: The "bottom-up"-components, mostly UI related, e.g. a `CheckBox`. These are all stateless.
  Data is exclusively passed as props. Exceptions might be strictly UI-related state like visibility of a modal.
  But even that is discouraged.
- `models`: Effector Units (events, stores, effects), types, constants, libs related to a certain model (e.g "order" in this demo).
  - `events` are the building blocks (no deps).
  - `stores` only listen to events to update their state, i.e. they don't depend on other stores or effects directly. Dependencies among (outside) stores or between stores and effects are always expressed via events.
  - `fx` mostly connect async `services` to effector.
  - `constants`
  - `types`
  - `libs`: Stateless helper functions specific to that model.
- `models/environment`: Special model for meta stuff that configures the app according to the environment (production, testing, dev, ...), e.g. by configuring logging, swapping out the backend (live network vs mock) or showing a developer panel (see `features/dev`).
- `features`: All app-specific (UI) components

  - `<someGroup>`: This often corresponds to a model.

    - `components` contain stateful components.

      - `<SomeComponent>`
        - `index.tsx`: The React-specific UI-stuff, state is coming exclusively from hooks in...
        - `hooks.ts`: Shields the React component from effector.
        - `state.ts`: Mostly aggregates stores and creates event handlers to trigger events. No React/UI dependencies. Always returns:
          ```
          {
            $: {
              effectorStores,
            },
            api: {
              effectorEventsOrFunctionsCalledByComponentTriggeringEvents
            },
            spi: {
              ComponentFunctionsThatEffectorNeedsToCall
            },
            lib: {
              helperFunctionsForComponent
            }
          }
          ```
          Often `spi` or `lib` are not required.

    - `wigets`: Stateless group-specific components.

- `flows`: The wiring of events, stores, effects from `models`. It has it's own top level directory because a single flow can span many models.
- `libs/pure`: General stateless helpers/libraries.
- `libs/impure`: General indeterministic helpers/libraries (random numbers, current date, ...).
- `services`: (Stateful) external async services, e.g. backend. Accessible only via `fx`.
- `views`: Mostly Top level pages/screens. Stateless.

## Run App

- `npm i`
- `npm run dev`

Open console to see effector units' behaviour when pressing "Sample Order" button.
# effecter-demo
