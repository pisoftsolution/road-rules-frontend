import React, { useState } from 'react';
import './booking.css';
import Test1 from './test1';
import Test2 from './test2';
// import TableList from "./TableList";
// import Dropmenu from "./Dropmenu";

function Booking() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="booki">
      <div className="bloc-tabs">
        <button
          id="within"
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Within Surrey
        </button>
        <button
          id="outside"
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Outside Surrey
        </button>

        {/* <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          ARCHIVE
        </button> */}
        {/* <button className="button1">CREATE RFQs</button>
        <button className="button2">DRAFTS</button> */}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <p>
            {/* < Dropmenu/>
            <TableList /> */}
            <Test1 />
          </p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <p>
            <Test2 />
          </p>
        </div>

        {/* <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>
            page 3
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Booking;
// import React from 'react';

// function Booking() {
//   return (
//     <div>
//       <ul className="nav nav-tabs" role="tablist">
//         <li role="presentation" className="active">
//           <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
//             Home
//           </a>
//         </li>
//         <li role="presentation">
//           <button>
//             <a
//               href="#profile"
//               aria-controls="profile"
//               role="tab"
//               data-toggle="tab"
//             >
//               Profile
//             </a>
//           </button>
//         </li>
//         <li role="presentation">
//           <a
//             href="#messages"
//             aria-controls="messages"
//             role="tab"
//             data-toggle="tab"
//           >
//             Messages
//           </a>
//         </li>
//         <li role="presentation">
//           <a
//             href="#settings"
//             aria-controls="settings"
//             role="tab"
//             data-toggle="tab"
//           >
//             Settings
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Booking;
