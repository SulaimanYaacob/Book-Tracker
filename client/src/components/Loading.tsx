import React from "react";

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

const Loading = ({ children, loading }: Props) => {
  if (loading)
    return (
      <div className="position-absolute top-50 start-50">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default Loading;
