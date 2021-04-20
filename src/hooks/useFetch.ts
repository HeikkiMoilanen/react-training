import * as React from "react";

export interface ResourceState<TResource> {
  readonly data: TResource;
  readonly status: "initial" | "loading" | "success" | "error";
  readonly error: Error | null;
  readonly isFetching: boolean;
}

export const useFetch = <Value extends unknown>(
  url: string,
  initialValue: Value
) => {
  type State = ResourceState<Value>;

  type Action =
    | { type: "FETCH_REQUEST" }
    | { type: "FETCH_SUCCESS"; payload: Value }
    | { type: "FETCH_FAILURE"; payload: Error };

  const initial: State = {
    data: initialValue,
    status: "initial",
    error: null,
    isFetching: false,
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "FETCH_REQUEST": {
        return {
          ...state,
          status: state.status === "initial" ? "loading" : state.status,
          error: null,
          isFetching: true,
        };
      }

      case "FETCH_SUCCESS": {
        return {
          data: action.payload,
          status: "success",
          error: null,
          isFetching: false,
        };
      }

      case "FETCH_FAILURE": {
        return {
          ...state,
          status: "error",
          error: action.payload,
          isFetching: false,
        };
      }

      default: {
        throw new Error("Impossible action type");
      }
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initial);

  const fetchData = React.useCallback(async () => {
    if (!url) {
      return;
    }

    dispatch({ type: "FETCH_REQUEST" });

    try {
      const response = await fetch(url);
      const data: Value = await response.json();

      if (!response.ok) {
        return Promise.reject(data);
      }

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error });
    }
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { status, error, isFetching, data } = state;

  const isInitial = status === "initial";

  React.useEffect(() => {
    if (status === "initial") {
      fetchData();
    }
  }, [fetchData, status]);

  return React.useMemo(() => {
    // Inspired by react-query
    // https://react-query.tanstack.com/guides/queries
    const isLoading = status === "loading";
    const isError = status === "error";

    return {
      data,
      status,
      error,
      isLoading,
      isFetching,
      isError,
      isInitial,
      login: fetchData,
    };
  }, [status, data, error, isFetching, isInitial, fetchData]);
};
