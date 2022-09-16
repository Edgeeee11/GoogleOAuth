import React from "react";
import { Route, Routes } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/streams/new" element={<StreamCreate />} />
        <Route path="/streams/edit" element={<StreamEdit />} />
        <Route path="/streams/delete" element={<StreamDelete />} />
        <Route path="/streams/show" element={<StreamShow />} />
      </Routes>
    </div>
  );
};

export default App;
